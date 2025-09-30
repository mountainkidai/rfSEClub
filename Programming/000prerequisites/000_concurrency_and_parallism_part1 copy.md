# Part 1: Core Concepts from First Principles

## 1. What is a Task?

- A **task** is a unit of work that a program needs to carry out.
- Examples include adding two numbers, fetching data from the internet, or rendering a part of the screen.
- Tasks can be simple or complex, and programs often need to handle many tasks either one after another or concurrently.

---

## 2. What is a Thread?

- A **thread** is a unit of execution created and managed by the operating system.
- Think of a thread as a worker that executes a sequence of instructions (tasks) assigned to it.
- Each thread has its own **program counter (PC)**, which points to the current instruction it is executing.
- Multiple threads can exist within a program, allowing tasks to be handled concurrently.

---

## 3. What is a CPU Core?

- A **CPU core** is a physical processing unit within the CPU.
- It executes the instructions provided by threads one at a time.
- Modern CPUs have multiple cores, allowing true parallel execution of multiple threads.
- The performance and speed of task execution depends on the number of cores and how tasks are scheduled.

---

## 4. Operating System Role in Scheduling

- The **operating system (OS)** manages threads by deciding which thread runs on which CPU core and for how long.
- It uses a component called the **scheduler** to allocate CPU time among threads.
- On single-core CPUs, threads are time-sliced—each thread runs briefly before switching to another.
- On multi-core CPUs, multiple threads can run truly in parallel on different cores.

---

## 5. What is Concurrency?

- **Concurrency** means managing many tasks so that they appear to progress at the same time.
- It allows a program to handle multiple things logically at the same time by rapidly switching tasks.
- This is especially useful when tasks spend time waiting, such as for input/output operations.

---

## 6. What is Parallelism?

- **Parallelism** means multiple tasks literally run at the same moment on separate CPU cores.
- This reduces the total time taken to complete tasks by dividing the workload across cores.
- Parallelism requires hardware support like multi-core processors.

---

## 7. Why Shared Data Needs Protection

- When multiple threads access the same data simultaneously, conflicts can occur.
- These conflicts can cause incorrect results or program crashes known as **data races**.
- Protecting shared data is crucial for reliable concurrent programs.

---

## 8. Synchronization Tools (Mutexes, Locks)

- A **mutex (mutual exclusion)** is a tool used to ensure that only one thread accesses shared data at a time.
- When a thread wants to use shared data, it **locks** the mutex. Other threads must wait until the mutex is **unlocked**.
- This prevents data races and keeps the program’s behavior predictable and safe.

---

### How Does Chrome Handle This?

1. **Multiple Threads for Multiple Tabs**

- Chrome creates **separate threads** or even separate processes for each tab.
- Each thread works independently to download, render, and interact with its webpage.

2. **Threads as Delivery Workers**

- Each thread acts like a **worker** handling tasks assigned to that tab (fetching video data, rendering page elements).
- These threads run concurrently and can be scheduled by the OS on different CPU cores to run in parallel.

3. **What is Shared Data in this Context?**

- Despite being mostly independent, the tabs share some _common data_ inside Chrome, like:
  - User preferences (font size, zoom level)
  - Cache of images or data
  - Browser history or cookies
- This **shared data** must be carefully accessed so that changes by one tab don’t conflict with another.

4. **Need for Mutex and Locks**

- To avoid conflicts, **Chrome uses mutexes or similar locking mechanisms** when threads access shared data.
- A **mutex (mutual exclusion)** acts like a key — only one thread can hold the key and modify shared data at a time.
- Other threads must wait to acquire the mutex before accessing the same data, ensuring safety and consistency.

5. **Thread Locking Example in Browser**

- Thread for YouTube tab wants to update the cache.
- It locks the cache data (acquires mutex), safely makes changes, then unlocks it.
- Meanwhile, thread for rfse.club waits if it wants to access the same cache, only proceeding once the first thread releases the lock.

---

### Why Are Locks Important?

Without proper locking:

- Two threads might try to write different data at the same time.
- This causes **race conditions** — bugs where shared data becomes inconsistent or corrupted.
- Locks prevent this by serializing access to shared resources.

---

### Summary in the Context of Chrome Tabs

| Concept           | Explanation                                                    |
| ----------------- | -------------------------------------------------------------- |
| Threads           | Separate workers handling different tabs simultaneously        |
| Shared Data       | Browser-wide data accessed by multiple tabs                    |
| Mutex / Lock      | Mechanism ensuring only one thread changes shared data at once |
| Thread Scheduling | OS decides which thread runs on which CPU core and when        |

---

This example shows how real-world applications rely on threads, shared data protection, and locking to run multiple tasks safely and efficiently on modern multicore CPUs.
