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
