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

### Async in Traits - Simple Explanation with Examples

What is a State Machine in Futures?
When you write an async function like say_hello(), Rust transforms it into a state machine under the hood. This state machine keeps track of "where it is" in the async function's flow since async functions can be suspended and resumed multiple times.

Imagine the async function is a vending machine.

Each point where it might need to wait (like waiting for input or network) is a state.

Polling the Future is like pressing a button on the vending machine to check if it's ready for the next step.

The Future remembers the current state and moves forward when polled.

Since in your example say_hello() returns immediately, there is basically one state that immediately returns a result.

What is Polling?
Polling means checking the Future's progress. The runtime calls the Future's poll method repeatedly.

If the Future still needs to do some work or wait, poll returns Poll::Pending.

If the Future has finished the work and has a value, it returns Poll::Ready(value).

The runtime keeps polling until it gets Poll::Ready.

.await and the Runtime
When you use .await, Rust pauses the current async function until the Future is ready:

The executor (like Tokio runtime) polls the Future repeatedly.

When the Future is ready, .await resumes and returns the value.

### What is the Future trait?

The Future trait represents an asynchronous computation that may not have completed yet. It has:

An associated output type: Output, the value produced when the future is ready.

A method poll that the async runtime calls to check if the future is done.

```rust
trait Future {
    type Output;
    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}

```

poll returns Poll::Ready(val) when done, or Poll::Pending if not ready.

The runtime calls poll repeatedly to drive the future to completion.

### Manually implementing Future

```rust
struct SayHelloFuture {
    state: bool,
}

impl Future for SayHelloFuture {
    type Output = String;

    fn poll(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        if self.state {
            Poll::Ready("Hello, world!".to_string())
        } else {
            self.state = true;
            // In a real async scenario, you would return Poll::Pending here
            Poll::Ready("Hello, world!".to_string())
        }
    }
}
```

SayHelloFuture simulates a simple future with a state.

When polled the first time, it sets state and returns ready immediately.

Real futures may return Poll::Pending to indicate work is ongoing.

## 3. Relation to async trait methods with associated futures

When you write an async fn, Rust automatically generates a state machine implementing Future with a complex anonymous type. You can't write this type explicitly in stable Rust, so you:

Define a trait with an associated type Fut representing some future.

Return this future from the trait method.

```rust
use std::future::Future;  // Import the Future trait from stdlib

// Define a trait with an associated type 'Fut' which must implement Future
// The Output = String means the Future resolves to a String value
trait AsyncTrait {
    type Fut: Future<Output = String>;  // Associated type: named future returned by do_work

    // Method that returns the future; NOT an async fn itself
    fn do_work(&self) -> Self::Fut;
}

// A struct which will implement the trait
struct MyStruct;

// Implement the trait for MyStruct
impl AsyncTrait for MyStruct {
    // Use `impl Future` to tell the compiler the return type is some Future resolving to String
    type Fut = impl Future<Output = String>;

    // do_work returns an async block, which is a Future
    fn do_work(&self) -> Self::Fut {
        async {
            "Hello from async trait".to_string()  // The resolved value of the Future
        }
    }
}

// Tokio runtime needed to drive async futures; uses #[tokio::main] macro to start runtime
#[tokio::main]
async fn main() {
    let s = MyStruct;

    // Call the trait method: returns a Future
    // Await the future to get the String result asynchronously
    let result = s.do_work().await;

    // Print the result
    println!("{}", result);
}


```

### Using async-trait Crate for Simplicity

The async-trait crate lets you write async methods in traits naturally:

```rust
use async_trait::async_trait;

#[async_trait]
trait AsyncSpeak {
    async fn say(&self);
}

struct Dog;

#[async_trait]
impl AsyncSpeak for Dog {
    async fn say(&self) {
        println!("Woof!");
    }
}

#[tokio::main]
async fn main() {
    let dog = Dog;
    dog.say().await;
}
```

## Problems

1. Create an async function that uses `tokio::time::sleep` to wait 2 seconds, then prints "Task completed"
2. Create an async function that takes two numbers, sleeps for 100ms, then returns their sum
3. Spawn two async tasks that each sleep for different durations, print messages, and await both
4. Create an async function that simulates fetching data by sleeping, returns a `String`, and use it in async main
5. Create an async function that uses `tokio::spawn` to run a background task, await it, and print the result.
