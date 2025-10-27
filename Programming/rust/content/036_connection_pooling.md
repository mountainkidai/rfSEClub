### Database

A database is a structured storage system used to save, query, and manage data. PostgreSQL is a popular open-source relational database system.

#### Connection

A connection is a network session established between your application and the database server. Establishing a connection involves overhead—like authentication, network handshake, and resource allocation—which can be costly if done repeatedly for each database operation.

#### Connection Pool

A connection pool is a cache or pool of pre-established connections to the database. Instead of opening a new connection for each query, the application borrows a connection from the pool, uses it to perform operations, and then returns it to the pool for reuse.

#### Benefits of Connection Pooling:

Performance: Reusing connections avoids the overhead of creating and closing connections repeatedly.

Resource Management: Limits the number of concurrent connections to prevent exhausting database resources.

Concurrency: Supports multiple parallel database operations efficiently.

```rust
use sqlx::PgPool;              // Import PostgreSQL connection pool
use anyhow::Result;            // Import error handling

pub struct Database {          // Create Database struct
    pub pool: PgPool,          // pool = many reusable connections
}

impl Database {                // Add methods to Database struct
    pub async fn new(database_url: &str) -> Result<Self> {
        // async = non-blocking operation
        // &str = reference to string (connection URL)
        // Result<Self> = returns Database or Error

        let pool = PgPool::connect(database_url).await?;
        // PgPool::connect = connect to PostgreSQL
        // .await? = wait for connection, return error if fails

        println!("✅ Connected to database!");

        Ok(Database { pool })  // Return successful Database
    }
}

```

```rust
use dotenv::dotenv;
use sqlx::PgPool;
use bb8_redis::{bb8, RedisConnectionManager};
use std::env;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    dotenv().ok();

    // Load DB
    let database_url = env::var("DATABASE_URL")?;
    let db_pool = PgPool::connect(&database_url).await?;

    // Load Redis
    let redis_url = env::var("REDIS_URL")?;
    let redis_mgr = RedisConnectionManager::new(redis_url)?;
    let redis_pool = bb8::Pool::builder().build(redis_mgr).await?;

    // Load SES email config as shown previously
    // ... (see earlier message for lettre config)

    // Next: routing, handlers, business logic!

    Ok(())
}
```

```rust
mod operations {
    pub struct Calculator {
        value: i32,
    }

    impl Calculator {
        // The 'new' function acts like a constructor to create an instance
        pub fn new(start: i32) -> Calculator {
            Calculator { value: start }
        }

        pub fn add(&mut self, b: i32) -> i32 {
            self.value += b;
            self.value
        }

        pub fn sub(&mut self, b: i32) -> i32 {
            self.value -= b;
            self.value
        }
    }
}

use operations::Calculator;

fn main() {
    // We create a Calculator instance by calling `new` (like creating RedisConnectionManager)
    let mut calc = Calculator::new(10);

    let sum = calc.add(5);      // adds 5 to current value (10 + 5 = 15)
    let diff = calc.sub(3);     // subtracts 3 from current value (15 - 3 = 12)

    println!("Sum: {}, Difference: {}", sum, diff);
}

```

```rust
mod bb8 {
    pub struct Pool<T> {
        pub manager: T,
    }

    impl<T> Pool<T> {
        pub fn builder() -> PoolBuilder<T> {
            PoolBuilder { manager: None }
        }
    }

    pub struct PoolBuilder<T> {
        pub manager: Option<T>,
    }

    impl<T> PoolBuilder<T> {
        // Synchronous build method for this simplified example
        pub fn build(self, manager: T) -> Pool<T> {
            Pool { manager }
        }

        // An async build example that might appear in real code
        /*
        pub async fn build(self, manager: T) -> Pool<T> {
            // simulate async init;
            Pool { manager }
        }
        */
    }
}

pub struct CalculatorManager {
    start_value: i32,
}

impl CalculatorManager {
    pub fn new(start: i32) -> CalculatorManager {
        CalculatorManager { start_value: start }
    }
}

#[tokio::main]
async fn main() {
    // Create new manager (like RedisConnectionManager)
    let manager = CalculatorManager::new(10);

    // Get a PoolBuilder
    let builder = bb8::Pool::builder();

    // Build the pool using the builder and manager
    let pool = builder.build(manager);

    // Now you have a pool managing your CalculatorManager
    println!("Created a pool with start value: {}", pool.manager.start_value);
}



```

### Imagine you want to buy a custom pizza:

Pool is like a cafe
When you call Pool::builder(), you are essentially ordering a new pizza building session at the cafe.

This returns a PoolBuilder, which is like a customizable pizza order form.

On this order form (PoolBuilder), you specify what you want — for example:

How many pizzas to prepare (max connections).

Special toppings or preparation methods (timeouts, validation).

You don’t give this order directly to the chef yet — you customize it first.

After customization, you give the order (manager) to the cafe
The manager is like the pizza chef who knows exactly how to make pizzas (create connections).

When you call builder.build(manager), you hand this customized order form to the chef.

The chef then starts making pizzas according to your specifications.

The Pool is the cafe kitchen with pizzas ready to serve.

Flow Summary:
Pool::builder() — Get the pizza order form (PoolBuilder).

Configure the order on the form (methods on PoolBuilder).

Call build(manager) handing the order to the pizza chef (the manager).

Chef makes pizzas; cafe holds ready pizzas (Pool with live connections).

You grab pizzas instantly from the cafe when hungry (call pool.get() to get a connection)

You pass the manager (the "pizza chef" who knows how to create connections).

The builder takes your options and the manager and builds the actual connection pool (Pool).

The pool is like the pizza shop stocked with ready pizzas (ready database connections).

This pool is what you use in your program to get connections quickly without waiting for new ones to be created each time.

Summary using the pizza analogy:
Pool::builder() = go to the cafe and get the pizza order form.

Configure your desired pizza (pool settings) on this form (builder).

builder.build(manager) = hand the order form to the chef (manager).

Chef prepares the pizzas as requested, creating the ready pizza shop (Pool).

You use the shop to grab pizzas quickly (use pool to get connections).
