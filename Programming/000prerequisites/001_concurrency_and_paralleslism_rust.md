## Rust Threads, Shared Data, and Mutex

Rust provides powerful tools to work safely and efficiently with multiple threads, preventing common bugs that happen when threads share data.

---

### Rust Threads: Like Chrome Tabs’ Workers

- Rust threads are **OS threads** managed by the operating system.
- You create threads in Rust to run code concurrently or in parallel, just like Chrome creates threads for each tab.
- Rust’s **ownership system** ensures safe access to data even when threads share it.

---

### Shared Data and Mutability in Rust Threads

- By default, data is **not shared** across threads to prevent unsafe access.
- To share data, Rust provides types like `Arc<T>` (Atomic Reference Counted smart pointer) to **safely share ownership** across threads.
- To allow mutable (changeable) access to shared data, `Mutex<T>` is used, which protects data so only one thread can access it at a time — just like a mutex lock in Chrome for shared cache.

---

### Rust Example: Two Threads Incrementing Shared Counter Safely

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
let counter = Arc::new(Mutex::new(0)); // Shared, mutable data protected by a mutex
let mut handles = vec![];
for _ in 0..2 {
    let counter = Arc::clone(&counter); // Clone the Arc pointer for sharing
    let handle = thread::spawn(move || {
        for _ in 0..100000 {
            let mut num = counter.lock().unwrap(); // Lock the mutex before modifying
            *num += 1; // Critical section: safely update the shared counter
        }
    });
    handles.push(handle);
}

// Wait for threads to finish
for handle in handles {
    handle.join().unwrap();
}

println!("Final counter value: {}", *counter.lock().unwrap());
}


```

---

### Explanation

- `Arc` allows multiple threads to **share ownership** of the same data.
- `Mutex` ensures **only one thread at a time** can access (`lock()`) and modify the shared data.
- Threads run concurrently and safely update the shared counter.
- The program waits for both threads to complete (`join()`), ensuring the final count is accurate.

---

### Why Rust Is Safer and Easier for Threading

- Rust’s **type system and ownership rules** enforce thread safety at compile time.
- Common thread bugs like data races are **caught before running the program**.
- The explicit use of `Arc` and `Mutex` makes data sharing intentions clear and safe.
- This contrasts with languages like C where thread safety depends on the programmer’s discipline alone.

---

### Summary Table

| Concept            | Rust Feature / Behavior                           |
| ------------------ | ------------------------------------------------- |
| Threads            | OS threads created with `thread::spawn`           |
| Shared Data        | `Arc<T>` for shared ownership                     |
| Mutable Access     | `Mutex<T>` to protect data from concurrent access |
| Safety Guarantees  | Compile-time checking prevents data races         |
| Parallel Execution | OS schedules threads on CPU cores                 |

---
