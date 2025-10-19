```rust
    let app = Router::new().route("/", get(|| async { "Hello, World!" }));

```

```text
calc/
  src/
    arithmetic.rs
    lib.rs
    main.rs
```

```rust
src/arithmetic.rs

// An async function that adds two numbers and returns after simulating delay
pub async fn async_add(a: i32, b: i32) -> i32 {
    // Simulate some async work (e.g., I/O, network)
    tokio::time::sleep(std::time::Duration::from_millis(100)).await;
    a + b
}

```

```rust
pub mod arithmetic;

```

```rust
use calc::arithmetic::async_add;

#[tokio::main]
async fn main() {
    let sum = async_add(5, 7).await; // await for async_add to finish
    println!("Sum is {}", sum);
}
```

What is .await?
.await pauses an async function until the awaited future (async computation) completes.

It allows writing asynchronous code that looks like sequential code.

```rust
What is .unwrap()?
Rust’s Result type has Ok(value) or Err(error).

.unwrap() extracts the Ok(value), but will panic and crash the program if called on an Err.

Used when you expect no error and want to proceed without handling explicitly.
```

```text

|| is a closure with no input parameters.

async {} block returns a future for async execution.

TcpListener binds TCP socket.

.await waits for async completion.

.unwrap() extracts successful result or panics on error.


```
