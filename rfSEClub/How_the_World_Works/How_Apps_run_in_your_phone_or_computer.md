# **OS (Kernel, File System...), Process, Task, Thread, Core, CPU explained.**

**Operating System:**

Complete software managing hardware, software like **kernel**, **UI**, **drivers**, **System Libraries,** **utilities, Device Drivers and user / user apps.**

Examples: Windows, Linux, macOS.

* Kernel:
  1. manages hardware (CPU, memory, I/O) and provides **processes and threads** for software to run efficiently.
  2. The kernel is the core software in an OS,

* **User Interface (UI)**: Shell (e.g., Bash) or GUI (e.g., macOS Finder) for user interaction.
* **System Libraries**: Functions for programs (e.g., stdio.h for printf in your C program).
* **Device Drivers**: Software to control hardware (e.g., GPU, disk).
* **File System**: Manages storage (e.g., APFS on your MacBook).

**APFS (Apple File System)**: Optimized for SSDs, used by macOS/iOS.

* **HFS+**: Older macOS file system, replaced by APFS. Slower, less reliable for modern hardware.
* **NTFS (New Technology File System)**: Windows default. Supports large files, encryption, permissions. Widely compatible but read-only on macOS without third-party tools.
  * macOS can read NTFS drives
  * e.g., a Windows-formatted USB drive natively, meaning you can view and copy files from it. However, macOS cannot write to NTFS drives (e.g., edit, save, or delete files) without extra software.
* **FAT32 (File Allocation Table)**: Widely compatible (Windows, macOS, Linux) (USB drives, SD cards). Limited to **4GB** file size.
* **exFAT**: FAT32 successor, supports large files.
* **ext4 (Fourth Extended File System)**: Linux standard. Fast, reliable, supports large volumes and journaling. Not natively supported on Windows/macOS.
* **Utilities/apps**: Tools like gcc, msword, notes, vscode,...

Let's see how program runs in your laptop:

```c
#include <stdio.h>
int main() {
    int a = 2, b = 2;
    int sum = a + b; // Task: Compute 2 + 2
    printf("Sum: %d\n", sum); // task2
}
```

* **Kernel**:
  * Kernel core (software)
    * creates a process for the addition program
    * allocates memory for the program.
    * so that within the process, it can schedule threads,

* **Process**:
  * kernel created a space with its own memory space from ram.

* **Task**:
  * Compute 2 + 2 (line: sum = a + b), - task 1
  * print result—2 tasks in the program. task 2

* **Thread**:
  * like a delivery worker / conveyor belt delivering tasks (instructions) to the core.
  * It holds the program counter (PC), pointing to the next task/instruction in the binary points to the binary's instructions for the core to execute:
    * load a, b,
    * compute sum (Task 1),
    * print (Task 2).

* **Core**: Core 1 executes Thread 1's instructions in hardware, performing the addition in the ALU and accessing memory via the MMU (Memory Management Unit).

* **CPU**: M2 Pro CPU schedules Thread 1 to Core 1, managing execution across processes

## 2. Opening Chrome App on Your Laptop

* **Kernel**:
  * OS (macOS) kernel creates a process for Chrome, schedules threads, allocates memory for browser data (tabs, cache).

* **Process**:
  * Running instance of Chrome, started at 12:52 PM IST, with its own memory space for tabs, extensions, etc.

* **Task**:
  * Load Chrome UI,
  * fetch webpage,
  * render HTML—multiple tasks per tab.

* **Thread:**
  * One thread (conveyor belt) delivers the task "render the UI" to the core. The core executes it, drawing the browser interface.
  * Another thread delivers the task "fetch a webpage (e.g., x.ai)." The core executes, sending network requests and retrieving data.
  * Another thread delivers the task "handle JavaScript." The core executes, running scripts (e.g., dynamic content on x.ai).

**How It Works**: Each thread's program counter points to its task's instruction in Chrome's binary. The core fetches and executes these instructions (e.g., rendering in GPU, fetching via network, computing JS in ALU).

* **Core**: Core 1 runs the UI thread, Core 2 runs the fetch thread (parallelism). M2 Pro's 8 cores handle multiple threads.
* **CPU**: M2 Pro CPU schedules Chrome's threads to cores, balancing with other processes (e.g., VS CODE).

### 2. What Are the States of a Thread?

Threads transition through states during execution, managed by the OS kernel:

* **New**: Thread created, not yet running (e.g., Thread 1 for 2 + 2 when ./add starts).
* **Runnable (Ready)**: Ready to run, waiting for CPU (Thread 1 waits for Core 1).
* **Running**: Executing on a core (Thread 1 computes 2 + 2 on Core 1).
* **Blocked (Waiting)**: Waiting for I/O or resources (Thread 1 waits for printf to finish).
* **Terminated**: Finished or killed (Thread 1 exits after printing).

### JavaScript: Single-Threaded Explained

* **Single-Threaded**: JS runs on a single thread (conveyor belt) in its execution environment (e.g., browser like Chrome, or Node.js). At any given time, this thread can execute only **one task**, and since it's one thread, it uses only **one core**.
* **How It Works**:
  * JS has an **event loop** that manages tasks in a queue. The single thread picks one task at a time from the queue, delivers it to the core, and the core executes it.
  * Tasks (e.g., run a function, handle a click event) are executed sequentially—no parallel task execution within the JS engine.

```javascript
let a = 2, b = 2;
let sum = a + b; // Task 1
console.log(sum); // Task 2
```

**Async in JS:** JS can seem to multitask (e.g., setTimeout, fetch) using async, but it's not parallel—it offloads tasks (e.g., network requests) to the browser/Node.js runtime, and the event loop handles callbacks later on the same thread.
