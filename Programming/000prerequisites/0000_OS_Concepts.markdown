# OS (Kernel, File System, etc.), Process, Task, Thread, Core, CPU Explained

## Operating System

An operating system (OS) is complete software that manages hardware and software components, including the kernel, user interface (UI), drivers, system libraries, utilities, device drivers, and user applications.  
**Examples**: Windows, Linux, macOS.

### Components of an OS

- **Kernel**: Manages hardware (CPU, memory, I/O) and provides processes and threads for software to run efficiently. It is the core software in an OS.
- **User Interface (UI)**: Shell (e.g., Bash) or GUI (e.g., macOS Finder) for user interaction.
- **System Libraries**: Functions for programs (e.g., `stdio.h` for `printf` in C programs).
- **Device Drivers**: Software to control hardware (e.g., GPU, disk).
- **Utilities/Apps**: Tools like `gcc`, Microsoft Word, Notes, VS Code, etc.
- **File System**: Manages storage (e.g., APFS on macOS).

### File Systems

- **APFS (Apple File System)**: Optimized for SSDs, used by macOS/iOS.
- **HFS+**: Older macOS file system, replaced by APFS. Slower, less reliable for modern hardware.
- **NTFS (New Technology File System)**: Windows default. Supports large files, encryption, permissions. Widely compatible but read-only on macOS without third-party tools. macOS can read NTFS drives (e.g., a Windows-formatted USB drive) natively, meaning you can view and copy files from it. However, macOS cannot write to NTFS drives (e.g., edit, save, or delete files) without extra software.
- **FAT32 (File Allocation Table)**: Widely compatible (Windows, macOS, Linux) for USB drives, SD cards. Limited to 4GB file size.
- **exFAT**: FAT32 successor, supports large files.
- **ext4 (Fourth Extended File System)**: Linux standard. Fast, reliable, supports large volumes and journaling. Not natively supported on Windows/macOS.
   ![process](image/process.png)

## How a Program Runs on Your Laptop

Consider the following C program:
![function](image/function.png)

```c
#include <stdio.h>
int main() {
    int a = 2, b = 2;
    int sum = a + b; // Task: Compute 2 + 2
    printf("Sum: %d\n", sum); // Task 2
}
```

### Execution Breakdown

- **Kernel**: The kernel (core software) creates a process for the addition program and allocates memory for it. Within the process, it schedules threads.
- **Process**: The kernel creates a space with its own memory space from RAM for the program.
- **Task**:
  - Task 1: Compute 2 + 2 (`sum = a + b`).
  - Task 2: Print the result.
- **Thread**:

A **thread** is a software unit created and managed by the operating system to execute code. Thread acts like a delivery worker or conveyor belt, delivering tasks (instructions) to the core. It holds the program counter (PC), pointing to the next task/instruction in the binary. The thread points to the binary’s instructions for the core to execute: load `a`, `b`, compute `sum` (Task 1), print (Task 2).

Note:

Threads are **not unlimited**; the OS limits how many can exist based on system resources. Creating too many threads can cause overhead and reduce performance.

- **Core**: Core 1 executes Thread 1’s instructions in hardware, performing the addition in the ALU (Arithmetic Logic Unit) and accessing memory via the MMU (Memory Management Unit).
- **CPU**: An M2 Pro CPU schedules Thread 1 to Core 1, managing execution across processes.

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

## Opening Chrome App on Your Laptop

### Execution Breakdown

- **Kernel**: The macOS kernel creates a process for Chrome, schedules threads, and allocates memory for browser data (tabs, cache).
- **Process**: A running instance of Chrome, started at 12:52 PM IST, with its own memory space for tabs, extensions, etc.
- **Task**:
  - Load Chrome UI.
  - Fetch webpage.
  - Render HTML (multiple tasks per tab).
- **Thread**:
  - One thread delivers the task “render the UI” to the core, which executes it, drawing the browser interface.
  - Another thread delivers the task “fetch a webpage (e.g., x.ai).” The core executes, sending network requests and retrieving data.
  - Another thread delivers the task “handle JavaScript.” The core executes, running scripts (e.g., dynamic content on x.ai).
- **Core**: Core 1 runs the UI thread, Core 2 runs the fetch thread (parallelism). M2 Pro’s 8 cores handle multiple threads.
- **CPU**: M2 Pro CPU schedules Chrome’s threads to cores, balancing with other processes (e.g., VS Code).

### How It Works

Each thread’s program counter points to its task’s instruction in Chrome’s binary. The core fetches and executes these instructions (e.g., rendering in GPU, fetching via network, computing JS in ALU).

## States of a Thread

Threads transition through states during execution, managed by the OS kernel:

- **New**: Thread created, not yet running (e.g., Thread 1 for 2 + 2 when `./add` starts).
- **Runnable (Ready)**: Ready to run, waiting for CPU (Thread 1 waits for Core 1).
- **Running**: Executing on a core (Thread 1 computes 2 + 2 on Core 1).
- **Blocked (Waiting)**: Waiting for I/O or resources (Thread 1 waits for `printf` to finish).
- **Terminated**: Finished or killed (Thread 1 exits after printing).
