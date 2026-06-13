1. Basic Rust Thread Model

   - What determines the number of threads in a Rust program? (single-threaded vs multi-threaded)
   - How Rust spawns and manages threads using the standard library (std::thread) and async runtimes.
   - Overview of async runtimes (e.g., Tokio) and how they use thread pools and task scheduling.

2. Operating System’s Role and Concepts

   - How the OS kernel creates, schedules, and manages threads.
   - What is the OS scheduler? How does it allocate CPU cores to threads?
   - Understanding context switching: how the OS switches CPU time between runnable threads.
   - Thread pools explained: pre-created threads to efficiently manage concurrent tasks.

3. Why Local Variables and Constants are Concurrency Safe

   - Stack allocation and strict lexical scope of local variables.
   - Variables’ lifetime in Rust and what lexical scope means.
   - Ownership and borrowing rules in Rust ensuring exclusive mutable or shared immutable access.
   - Constants (const) as compile-time inlined values that cannot cause mutability or concurrency issues.

4. Challenge of Global (Static) Variables and static mut

   - Fixed memory location and global accessibility of statics.
   - Why Rust cannot verify safety of mutable statics at compile time.
   - Why accessing static mut is unsafe and requires explicit programmer guarantees.

5. Other Mutable Aliasing and Concurrency Issues

   - Shared mutable references (&mut) and aliasing dangers.
   - Data races and race conditions in concurrent programming.
   - Unsafe Rust and raw pointer pitfalls that bypass Rust’s safety checks.

6. Rust’s Concurrency Primitives as Safe Solutions

   - Mutual exclusion with Mutex, RwLock, and atomic types (AtomicUsize, AtomicBool, etc.).
   - How Rust’s primitives enable safe global mutable shared state.
   - Comparing safe concurrency primitives vs. static mut usage.

7. Patterns and Libraries for Safe Global Mutable State

   - Use of lazy_static! and once_cell for safe initialization of global data.
   - Wrapping statics in safe synchronization types.
   - Design patterns for concurrent Rust applications ensuring memory safety.

8. Best Practices and Guidelines

   - When and why to avoid static mut.
   - Guidelines for using unsafe safely and effectively.
   - Understanding and leveraging Send and Sync traits for thread safety.

### Synchronization Primitives in Rust

1. Mutex (Mutual Exclusion)
   Think of it as a lock on a resource.

   - Critical section: A specific region of code where a process or thread accesses a shared resource, like a variable or file.

   - Locking: A process must acquire a lock before entering the critical section, which prevents other processes from entering at the same time.

   - Waiting: Any process that tries to access the resource while it is locked must wait until the lock is released.

   - Unlocking: The process that holds the lock releases it after it has finished executing its critical section, allowing another waiting process to acquire the lock.

   - When a thread wants to access data, it must “lock” the mutex. No one else can mutate the data until the lock is released.

   - Only one thread at a time can change the data inside the mutex.

   - A mutex declared as a local variable lives on the stack.

   - A mutex inside a Box or other heap-allocated structure lives on the heap.

   - A mutex declared with static (or through lazy initialization) lives in the static memory region for the program's lifetime.

2. Arc Independently
   Arc alone is useful for sharing read-only data across threads. It lets multiple threads own the same data without worrying about deallocation.

```rust
let data = Arc::new(vec![1, 2, 3]);
for i in 0..3 {
    let data_clone = Arc::clone(&data);
    thread::spawn(move || {
        println!("Thread {} sees: {:?}", i, data_clone);
    });
}

```

### Mutex Independently

- Mutex alone protects data from concurrent mutation within a single thread context. But it cannot share ownership across threads on its own.

```rust
use std::sync::Mutex;

fn main() {
    let data = Mutex::new(vec![1, 2, 3]); // Local protected data

    let mut result = data.lock().unwrap();
    result.push(4);
    // Only this thread can access it
}

```

### Arc + Mutex: The Power Combination

When you combine them, you get safely shared, mutable data across threads:

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0)); // Shared mutable data

    let mut handles = vec![];

    for i in 0..3 {
        let counter_clone = Arc::clone(&counter); // Each thread gets its own Arc reference

        handles.push(thread::spawn(move || {
            let mut num = counter_clone.lock().unwrap(); // Lock before accessing
            *num += 1; // Safely mutate
            println!("Thread {} incremented counter to {}", i, *num);
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Final counter: {}", *counter.lock().unwrap());
}

```

```text
3. RwLock: Multiple-reader, single-writer lock (many threads can read at once, only one can write).
```

```rust
static GLOBAL_NUMBER: i32 = 10;
static mut COUNTER: i32 = 0; // mutable static, requires unsafe usage to access
```

## Problems

1. Create a `Mutex<i32>` with initial value 0, lock it, increment the value, and print it
2. Create an `Arc<Mutex<i32>>` counter, spawn two threads that each increment it 5 times, and print the final value
3. Create a static mutable variable, increment it in an unsafe block, and print the value
4. Create an `Arc<String>` that is shared between two threads, each thread prints the string
5. Create a `Mutex<Vec<i32>>`, spawn multiple threads that each push a number to the vector, and print the final vector
