### How Threads work?

Traditionally, threads are created and managed by the operating system (OS) kernel. Each OS thread maps directly to a CPU core or shares cores via time slicing.

When an application runs, the OS decides how many threads to create based on load and system resources (CPU cores, memory).

Understanding Go and Rust: Concurrency, Runtime, and Memory Management from First Principles

Programming modern high-performance applications like trading platforms (e.g., Zerodha ) demands efficient management of tasks, threads, and memory. Two popular languages, Go and Rust, offer unique approaches rooted in fundamental principles to solve these challenges. This article breaks down these concepts to clarify how Go and Rust manage concurrency, execution runtime, threads, and memory, simplifying complex terms with practical examples.

1. Threads and Concurrency: The Basics
   What Are Threads?
   At a basic level, threads are sequences of programmed instructions that a computer’s CPU executes. Threads enable a program to perform multiple operations seemingly at the same time — a critical capability for applications handling many users or data streams concurrently.

OS Threads: Traditionally, threads are created and managed by the operating system (OS) kernel. Each OS thread maps to a CPU core or time-slices between cores.

The OS is responsible for deciding how many threads to create based on system resources like CPU cores and memory.

Threads require their own stack memory (to store function calls and variables), CPU registers (to hold execution state), and rely on context switching (the process of saving and restoring thread states during multitasking). This makes OS threads heavyweight, consuming significant system resources.

Concurrency vs Parallelism
Concurrency means managing multiple tasks that overlap in time but may not run simultaneously. It’s about structure and responsiveness.

Parallelism is executing multiple tasks literally at the same time on multiple CPU cores, aiming to speed up computations.

Both are vital for scalable, responsive software.

2. Go’s Runtime and User-Space Threads (Goroutines)
   What Is Go Runtime?
   When you install Go, you get not just a compiler that converts your code to binary but also the Go runtime — a component managing memory, scheduling, garbage collection, and goroutines (Go’s lightweight threads).

What Are Goroutines?
Goroutines are extremely lightweight "user-space threads," created and managed by the Go runtime rather than the OS.

They start with a small initial stack (a few KB) that grows and shrinks dynamically, unlike the large fixed stacks of OS threads.

The Go runtime multiplexes thousands of goroutines onto a smaller set of OS threads (called M:N scheduling), enabling programs to handle vast numbers of concurrent tasks efficiently.

Goroutines communicate safely through channels—built-in Go constructs acting like pipelines for passing data between goroutines without explicit locks, preventing common synchronization bugs.

Example: Handling High Volume in Zerodha
Imagine the Zerodha trading platform. Instead of creating thousands of heavy OS threads for each user order, it launches goroutines for each order concurrently. The Go runtime schedules these goroutines on fewer OS threads to efficiently use CPU while providing fast, scalable order processing.

OS Threads vs Goroutines Summary

| Aspect            | OS Threads                             | Goroutines                        |
| ----------------- | -------------------------------------- | --------------------------------- |
| Managed by        | Operating System Kernel                | Go Runtime                        |
| Stack Size        | Large (e.g., 1 MB fixed)               | Small (few KB, grows dynamically) |
| Context Switching | Expensive (kernel-level)               | Lightweight (managed by runtime)  |
| Scalability       | Limited by system resources            | Thousands with minimal overhead   |
| Communication     | Locks & mutexes (manual & error-prone) | Channels (safe & simple)          |

3. How Does Go Scheduler Work?
   The Go scheduler is responsible for assigning goroutines to OS threads. It balances workload across available CPU cores, respecting the GOMAXPROCS setting, which defaults to the number of CPU cores on the machine. This means:

Multiple goroutines can run in parallel on multiple cores.

You write concurrent code with goroutines; the scheduler handles the complexity of parallel execution automatically.

4. Rust’s Concurrency Model and Memory Safety
   What Is Rust’s Runtime?
   Rust provides a minimal runtime, mainly handling program startup and basic system interactions. Unlike Go, it has no garbage collector or built-in scheduler for lightweight threads.

Threads in Rust
Rust uses native OS threads to achieve concurrency and parallelism.

Rust’s core strength lies in its ownership system and borrow checker, which enforce memory safety at compile time, preventing errors like data races, null pointers, and use-after-free bugs without runtime cost.

Rust offers libraries like Rayon to distribute tasks across multiple OS threads, enabling parallelism easily while maintaining strict safety guarantees.

Memory Management: Rust vs Go
| Aspect | Go (Garbage Collection) | Rust (Manual Memory Management) |
| ----------------- | ------------------------------------------ | ------------------------------------------- |
| Memory Management | Automatic garbage collection | Ownership with compile-time checks |
| Memory Release | Non-deterministic, runs on GC cycles | Deterministic, on scope exit |
| Runtime Overhead | GC cycles cause latency pauses | No runtime overhead, zero-cost abstractions |
| Safety Guarantee | Safe but with occasional pause disruptions | Memory and thread safe by design |
| Programmer Effort | Minimal; focus on logic, GC frees memory | Must follow ownership rules |

```rust
fn create_vector() -> Vec<i32> {
    let vec = vec![1, 2, 3, 4];
    vec  // Ownership transferred to caller, auto-freed at scope exit
}

fn main() {
    let data = create_vector();
    // Safe and memory is freed when `data` goes out of scope
}

```
