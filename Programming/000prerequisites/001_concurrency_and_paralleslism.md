## Understanding Concurrency, and Parallelism: Key Concepts

Understanding concurrency and parallelism is crucial for writing efficient programs that make the best use of modern hardware. This article explains these concepts from the ground up, clarifies the role of threads and OS scheduling, and then explains how popular programming languages implement and support concurrency and parallelism.

## Concurrency vs. Parallelism

- **Concurrency** means multiple tasks making progress intermixed over time, but not necessarily running at the same exact moment.

### First Principles: Tasks, Threads, and OS

- A **task** is a piece of work or instruction your program wants to perform (e.g., compute a sum, query a database).
- A **thread** is like a delivery worker (or conveyor belt) that picks tasks and executes them **one at a time** on a CPU core.
- The **OS scheduler** rapidly switches threads on the CPU core in small time slices. This switching tricks us into thinking multiple tasks are progressing simultaneously even if only one executes at a time.
- This allows **concurrency** on a single-core CPU, where tasks make progress by interleaving executions.

### OS Mechanism in Concurrency

When your program asks the OS to run multiple threads:

- The OS manages thread states (New, Runnable, Running, Blocked, Terminated).
- The OS assigns threads to CPU cores, switching when a thread must wait (e.g., for I/O).
- Multiple threads can be active, but on a single-core CPU only one runs at a time; the rest wait their turn.

---

- **Parallelism** means multiple tasks are literally running at the same instant on multiple CPU cores or processors.

### How Parallelism Works

- Modern CPUs have multiple cores — independent execution units that can run threads simultaneously.
- The OS scheduler assigns different threads to different cores so multiple threads truly run at once.
- Parallelism reduces overall execution time by exploiting hardware concurrency.

---

## Concurrency vs. Parallelism Summary

| Concept     | What It Means                                    | What the OS Does                                | What the CPU Does                                                                                     |
| ----------- | ------------------------------------------------ | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Concurrency | Many tasks seem to be happening at the same time | OS switches between one or more threads         | CPU works on tasks one by one, switching quickly if single core or running many at once if multi-core |
| Parallelism | Many tasks actually run exactly at the same time | OS runs multiple threads on different CPU cores | CPU cores work on different tasks at the same moment                                                  |

---

## Programming Languages: Concurrency and Parallelism Support

Now that we understand concurrency and parallelism at the OS and CPU level, let’s see what this means for different language runtimes.

---

### C Language

- Uses threads provided directly by the operating system to run parts of the program.
- Multiple threads can run truly at the same time if the CPU has multiple cores.
- The programmer must manually control when threads share data to avoid mistakes like race conditions or deadlocks.
- The OS decides which thread runs on which CPU core and when.

### What is Shared Data?

**Shared data** refers to variables or memory locations that can be accessed by multiple threads at the same time. When threads share data, there's a risk that two or more threads might try to read or write this data simultaneously, which can lead to inconsistent or incorrect results. This problem is called a **data race**.

---

### What is a Mutex?

A **mutex** (short for mutual exclusion) is a tool used to prevent data races by making sure only one thread can access a piece of shared data at any given time. When a thread wants to read or write shared data, it must first **lock** the mutex. Other threads trying to lock the mutex have to wait until the mutex is **unlocked** by the current thread.

Think of a mutex like a bathroom key: only one person (thread) can have the key and use the bathroom (shared data) at a time.

---

### What is Pthreads?

**Pthreads** stands for POSIX threads, a widely-used threading library available on many operating systems like Linux and macOS. It provides functions for creating and managing threads, synchronizing them (using mutexes and other tools), and coordinating their work.

In C programming, pthreads allow you to write programs that execute multiple threads concurrently, giving you more control over how tasks run in parallel or interleaved.

---

**Example: Manual Thread Creation and Data Sharing in C**

```c
#include <pthread.h>
#include <stdio.h>

int counter = 0; // Shared data
pthread_mutex_t lock; // Mutex to control access

void *increment(void *arg) {
for (int i = 0; i < 100000; i++) {
pthread_mutex_lock(&lock);
counter++; // Critical section
pthread_mutex_unlock(&lock);
}
return NULL;
}

int main() {
pthread_t thread1, thread2;
pthread_mutex_init(&lock, NULL);
// Create two threads that increment counter concurrently
pthread_create(&thread1, NULL, increment, NULL);
pthread_create(&thread2, NULL, increment, NULL);

pthread_join(thread1, NULL);
pthread_join(thread2, NULL);

printf("Final counter value: %d\n", counter);
pthread_mutex_destroy(&lock);
return 0;
}
```

This C program demonstrates how to safely update a shared variable (`counter`) from two threads working concurrently using the **pthreads** library and a **mutex** to avoid data races.

---

### Key Parts of the Program

- `int counter = 0;`  
  This is the **shared data** variable that both threads will increment many times.

- `pthread_mutex_t lock;`  
  This is the **mutex** used to control access to the shared data, ensuring only one thread modifies it at a time.

---

### The `increment` Function (Thread Work)

```c
void *increment(void *arg) {
for (int i = 0; i < 100000; i++) {
pthread_mutex_lock(&lock); // Lock the mutex before modifying shared data
counter++; // Critical section: safely increment shared data
pthread_mutex_unlock(&lock); // Unlock after modification
}
return NULL;
}
```

Each thread runs this function, which loops 100,000 times:

1. It **locks** the mutex before entering the critical section to prevent other threads from simultaneously modifying `counter`.

2. It increments the shared variable `counter`.

3. It **unlocks** the mutex to allow other threads to enter the critical section.

This locking/unlocking protects the shared data from **race conditions** where threads could overwrite each other’s updates.

---

### The `main` Function (Setup and Thread Management)

```c
int main() {
pthread_t thread1, thread2;
pthread_mutex_init(&lock, NULL); // Initialize the mutex
// Create two threads that run the increment function concurrently
pthread_create(&thread1, NULL, increment, NULL);
pthread_create(&thread2, NULL, increment, NULL);

// Wait for both threads to finish before continuing
pthread_join(thread1, NULL);
pthread_join(thread2, NULL);

printf("Final counter value: %d\n", counter); // Print the final value of counter

pthread_mutex_destroy(&lock); // Clean up the mutex
return 0;
}
```

1. **Initialize** the mutex before any threads start.

2. **Create** two threads (`thread1` and `thread2`) running the `increment` function concurrently.

3. **Wait** for both threads to finish using `pthread_join`, ensuring they both complete before printing.

4. **Print** the final value of `counter`. Since each thread increments 100,000 times safely, the expected result is 200,000.

5. **Destroy** the mutex to free resources.

---

### Why Is the Mutex Important?

Without the mutex locking around `counter++`, both threads might try to increment at the same time, causing **race conditions** where updates are lost and `counter` ends up with a value less than expected.

Using `pthread_mutex_lock` and `pthread_mutex_unlock` guarantees that only one thread increments `counter` at a time, making the increment operation **atomic** and ensuring the correct final count.

---

### Summary

- The program runs two threads that increment a shared variable concurrently.
- A mutex serializes access to the shared variable preventing data races.
- The final printed value reflects the total increments from both threads correctly.

This pattern of **locking around shared data** is fundamental in concurrent programming for safety and correctness.

## Understanding Threads, Shared Data, and Locks Through Chrome Browser Example

Imagine you open the Chrome browser and load **two different tabs** at the same time:

- Tab 1 loads **YouTube**
- Tab 2 loads **rfse.club**

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
