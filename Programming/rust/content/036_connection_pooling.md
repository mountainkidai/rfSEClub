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
        manager: T,
    }

    impl<T> Pool<T> {
        pub fn builder() -> PoolBuilder<T> {
            PoolBuilder { manager: None }
        }

        pub async fn build(manager: T) -> Pool<T> {
            // Normally initiates pool with the manager
            Pool { manager }
        }
    }

    pub struct PoolBuilder<T> {
        manager: Option<T>,
    }

    impl<T> PoolBuilder<T> {
        pub fn build(self, manager: T) -> Pool<T> {
            Pool { manager }
        }
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

    // Create a pool via bb8 module's builder (like bb8::Pool)
    let pool = bb8::Pool::builder().build(manager);

    // Now you have a pool managing your CalculatorManager
    println!("Created a pool with start value: {}", pool.manager.start_value);
}

```

CalculatorManager acts like RedisConnectionManager, created via .new().

bb8 is a module that contains Pool and PoolBuilder.

You create a pool by calling bb8::Pool::builder() and then .build(manager).

pool holds the manager, similar to how a connection pool holds the connection manager.
