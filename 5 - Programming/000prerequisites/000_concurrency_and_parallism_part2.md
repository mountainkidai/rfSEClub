# Part 2: Async Programming Basics

## 9. What is Async Programming?

- Async programming helps a program do many tasks at the same time **without needing many threads**.
- When a task needs to wait (like waiting for data), it doesn’t block the thread.
- Instead, the task **pauses itself** by telling the async manager it is waiting and lets other tasks use the thread.
- This way, the program uses resources better and can handle many tasks efficiently.

---

## 10. What is a Runtime and Async Runtime?

- A **runtime** is a part of the program that manages how tasks are run behind the scenes.
- An **async runtime** manages many async tasks, runs them on a few threads, and switches between them when tasks pause.
- It has an **event loop** that keeps checking which tasks are ready and runs them.
- It also manages a **thread pool**, a small group of threads shared by many tasks.

---

## 11. How Does Async Programming Work?

- Tasks in async are called **futures**; they promise results later.
- When a task needs to wait (for example, for data to load), it **pauses itself** and returns control to the async runtime.
- The thread that was running this task is then free to run other ready tasks.
- The async runtime keeps track of paused tasks. When their waiting is over, it schedules them to resume on a thread.
- This lets many tasks share just a few threads efficiently.

---

## 12. Async vs Threads

| Feature           | Async Programming                 | Thread-Based Concurrency           |
| ----------------- | --------------------------------- | ---------------------------------- |
| How Tasks Run     | Many small tasks on a few threads | One task per thread (many threads) |
| Switching Control | Tasks pause cooperatively         | OS scheduler switches threads      |
| Resource Usage    | Uses fewer threads, less overhead | Uses many threads, more overhead   |
| Best For          | Waiting tasks (I/O-bound)         | CPU-heavy or fully parallel tasks  |

---

## 13. Async and Parallelism Together

- Async runtimes use a **small set of threads** (thread pool) to run many tasks.
- Multiple threads can run on different CPU cores at the same time, enabling **parallelism**.
- For example, Rust’s Tokio runtime runs many async tasks on a few threads that work in parallel.
- This helps programs handle many things at once efficiently and with fewer resources.

---
