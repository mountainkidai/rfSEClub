# 1. Basic Rust Thread Model (First Principles Explanation)

## What determines the number of threads in a Rust program? (single-threaded vs multi-threaded)

When you run a Rust program, it starts as a [translate:single-threaded application] by default. This means:

- There is exactly one OS thread executing your program’s main function.
- The number of threads in your Rust program depends on whether or not your code explicitly creates additional threads.
- If you simply write sequential code without spawning threads, you stay single-threaded.
- If you want parallelism or concurrency, you create more threads explicitly.
- The Rust program’s behavior is deterministic regarding threads based on what the programmer instructs. Rust itself won't spawn extra threads unless asked.

## How Rust spawns and manages threads using the standard library (std::thread) and async runtimes?

Rust’s standard library provides a straightforward API to create threads through `std::thread`:

- `thread::spawn` creates a new operating system thread.
- Each new thread gets its own stack and registers, independent of other threads.

Example:

```rust
use std::thread;

let handle = thread::spawn(|| {
println!("Running in a new thread");
});

handle.join().unwrap(); // Wait for thread to finish
```

- OS threads created this way are managed by the OS scheduler, which allocates CPU time across threads.
- Creating a new OS thread is relatively heavyweight: involves context switching and kernel resources.

For scalable concurrency, Rust uses async runtimes, implemented as libraries like Tokio:

- These runtimes allow running many asynchronous tasks without creating one thread per task.
- They manage task scheduling on a set of worker threads (thread pool), increasing efficiency.
- You write asynchronous functions (`async fn`) that return Futures.
- The async runtime polls these futures on the available threads to drive progress.

## Overview of async runtimes, Tokio, thread pools, and task scheduling

- **Async runtime**: A library that handles the execution of asynchronous tasks (futures).  
  Example runtimes: Tokio, async-std, smol.
- They manage running many “lightweight” asynchronous tasks on a small number of OS threads.

- **Tokio**:

  - Most popular Rust async runtime.
  - Provides thread pool executor, networking, timers, synchronization primitives.
  - Efficiently multiplexes thousands of async tasks within a few threads.
  - Example: Instead of spawning 1000 OS threads, Tokio runs 1000 async tasks on just a few threads.

- **Thread Pool**:

  - A fixed number of worker threads pre-created to run many tasks.
  - It avoids the overhead of spawning new OS threads per task.
  - Tasks are submitted to the pool and scheduled for execution.

- **Task Scheduling**:
  - The async runtime schedules tasks onto worker threads.
  - It decides when to run which task, suspends tasks that await IO, and resumes them later.
  - Enables highly concurrent and efficient resource use without blocking threads unnecessarily.

## Summary: Conceptual Flow

| Concept         | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| Single-threaded | Default Rust program runs on one OS thread                  |
| Thread spawning | `std::thread::spawn` creates new OS threads                 |
| Async runtime   | Libraries (Tokio, async-std) scheduling async tasks         |
| Tokio           | Popular async runtime with thread pools and I/O integration |
| Thread pool     | Pre-spawned worker threads for task execution               |
| Task scheduling | Managing which async task runs and when                     |

Thread Spawning with std::thread::spawn

```rust
use std::thread;
use std::time::Duration;

fn main() {
    let handle = thread::spawn(|| {
        for i in 1..5 {
            println!("Child thread: iteration {}", i);
            thread::sleep(Duration::from_millis(500));
        }
    });

    for i in 1..3 {
        println!("Main thread: iteration {}", i);
        thread::sleep(Duration::from_millis(700));
    }

    // Wait for spawned thread to finish
    handle.join().unwrap();
}

```

- Creates a new OS thread with thread::spawn.
- Both main and child threads execute concurrently.
- join waits for the spawned thread to complete before exiting.

Example 2: Async Programming with Tokio Runtime

- Add this to your Cargo.toml:

```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let task1 = tokio::spawn(async {
        for i in 1..5 {
            println!("Async task 1: iteration {}", i);
            sleep(Duration::from_millis(500)).await;
        }
    });

    let task2 = tokio::spawn(async {
        for i in 1..3 {
            println!("Async task 2: iteration {}", i);
            sleep(Duration::from_millis(700)).await;
        }
    });

    // Await both to complete
    task1.await.unwrap();
    task2.await.unwrap();
}

```

- Uses the Tokio async runtime (#[tokio::main] macro).
- tokio::spawn schedules lightweight async tasks on the runtime thread pool.
- Tasks run concurrently on a pool of OS threads managed by Tokio.
- sleep().await asynchronously pauses tasks without blocking threads.
