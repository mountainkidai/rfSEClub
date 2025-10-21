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

### . Basics of async/await syntax in Rust

The async keyword marks a function or block as asynchronous, meaning it returns immediately with a placeholder for a value that will become available later.

The return value of an async fn is a Future, which represents a value that may not be ready yet.

The .await operator pauses execution until the future completes, but unlike blocking, it allows other tasks to run while waiting.

async code looks like regular synchronous code but is non-blocking behind the scenes.

```rust
async fn say_hello() {
    println!("Hello, world!");
}

#[tokio::main]
async fn main() {
    say_hello().await; // Waits async for say_hello to finish
}

```

### 2. What is a Future and how async blocks work

A Future is like a promise: it is a value that represents some work that will complete later.

The Rust compiler transforms async fn and async {} blocks into a state machine behind the scenes.

Each .await point is a suspension point where the future yields control back to the executor.

When the awaited work completes, the future resumes from where it left off.

Analogy:
Imagine a bookmark in a book representing where you stopped reading. When ready, you resume reading from the bookmark. Rust's async code is like this bookmark-based state machine.

### 3. Runtime like Tokio to drive async futures

Futures alone don't do anything until they're run by an async runtime (executor).

Tokio is a popular Rust async runtime that schedules and drives futures to completion on threads.

It handles running many tasks concurrently without blocking actual OS threads.

You use macros like #[tokio::main] to start the async runtime automatically.

```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    println!("Starting task");
    sleep(Duration::from_secs(1)).await;  // Async wait
    println!("Task completed after 1 second");
}

```

```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let task1 = tokio::spawn(async {
        println!("Task 1: Starting");
        sleep(Duration::from_secs(2)).await;  // Pause task1 for 2 seconds
        println!("Task 1: Completed after 2 seconds");
    });

    let task2 = tokio::spawn(async {
        println!("Task 2: Starting");
        sleep(Duration::from_secs(1)).await;  // Pause task2 for 1 second
        println!("Task 2: Completed after 1 second");
    });

    // Wait for both tasks to complete
    task1.await.unwrap();
    task2.await.unwrap();
}

```

In JavaScript, async code starts executing immediately, and the event loop manages tasks automatically behind the scenes. You don’t have to explicitly spawn tasks.
Futures are lazy: they do not do anything until you explicitly run or "poll" them.

To run multiple async tasks concurrently, you usually need to explicitly create tasks using tokio::spawn (or similar in other runtimes). This tells the async runtime to schedule the task concurrently.

tokio::spawn does not always create a new thread. Tokio uses a thread pool and its runtime asynchronously schedules many tasks across a few threads efficiently.

Tokio’s runtime uses cooperative multitasking, where tasks yield at .await points. It multiplexes many async tasks on limited OS threads, minimizing system resource usage.

This explicit control increases flexibility and efficiency, unlike JavaScript’s implicit event-driven model.
