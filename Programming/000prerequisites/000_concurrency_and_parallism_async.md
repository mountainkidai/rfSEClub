Concurrency, Async, and Parallelism

## Part 1: Core Concepts from First Principles

1. **What is a Task?**
2. **What is a Thread?**
3. **What is a CPU Core?**
4. **Operating System Role in Scheduling**
5. **What is Concurrency?**
6. **What is Parallelism?**
7. **Why Shared Data Needs Protection**
8. **Synchronization Tools (Mutexes, Locks)**

## Part 2: Async Programming Fundamentals

1. **What is Async Programming?**
2. **How Async Programming Works: Futures and Event Loops**
3. **Async vs Thread-based Concurrency**
4. **Combining Async and Parallelism**

## Part 3: Language-Specific Implementations

1. **Concurrency, Parallelism, and Async in C**

   - Manual threading with pthreads and mutexes for concurrency and parallelism
   - Async via callbacks, event-driven models, and libraries (e.g., libuv)
   - How C programs handle concurrency mostly manually

2. **Concurrency, Parallelism, and Async in Rust**

   - Safe multi-threading with ownership and borrowing
   - Async programming with Tokio, async-std (futures, async/await syntax)
   - Combining async runtimes with thread pools for parallelism

3. **Concurrency, Async, and Parallelism in JavaScript**

   - Single-threaded event loop for async concurrency (callbacks, promises, async/await)
   - Parallelism enabled through Web Workers and Node.js worker threads (isolated threads)

4. **Concurrency, Parallelism, and Async in Python**

   - Threading with GIL limitations, multiprocessing for parallelism
   - Asyncio for async concurrency within one thread
   - Combining multiprocessing and async for scalable programs

## Part 4: Practical Examples & Best Practices

1. **Example: Safe Threaded Counter in C (with Mutexes)**
2. **Example: Safe Threaded Counter in Rust (Arc + Mutex)**
3. **Example: Async I/O Handling in Rust**
4. **Example: JavaScript Event Loop and Async Handling**
5. **Example: Python Asyncio and Multiprocessing**
6. **Best Practices for Writing Safe Concurrent and Async Code**

---
