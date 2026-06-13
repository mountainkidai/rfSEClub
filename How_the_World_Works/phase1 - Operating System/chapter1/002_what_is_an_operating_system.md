# What is an Operating System?

## Introduction

You've learned what happens when you turn on your computer—now you need to understand what the **operating system (OS)** actually is and what it does.

An operating system might seem like "just the software that runs on your computer," but it's far more fundamental than that. It's the **intermediary between you (and your applications) and the hardware**. Without an OS, using a computer would be impossibly difficult.

In this article, we'll define what an OS is, explore its main components, and understand why it's absolutely necessary for modern computing.

## Prerequisites

Before reading this article, you should understand:

- The boot sequence (from Article 001)
- Basic concepts: CPU, RAM, disk storage
- What "hardware" and "software" mean

## What Exactly is an Operating System?

### Simple Definition

An **operating system (OS)** is **system software that manages hardware resources and provides services to application programs**.

Let's break this down:

- **System software**: Software designed to operate the computer (unlike application software, which does useful work for you)
- **Manages hardware resources**: The OS controls the CPU, memory, disk, network, and all other hardware
- **Provides services to applications**: The OS gives applications a way to use hardware without having to know the low-level details

### An Analogy: Restaurant Manager

Think of an operating system like a restaurant manager:

- **Hardware** = The restaurant's physical resources (kitchen, stove, tables, waiters, ingredients)
- **Applications** = Customers who want to eat
- **Operating System** = The manager who:
  - Allocates the kitchen's resources among different dishes being prepared
  - Manages waiters (assigns them tasks, schedules them)
  - Handles scheduling (who sits at which table, when)
  - Enforces rules (no stealing from the kitchen, customers can't access storage)
  - Provides services (call a waiter, request a dish)

Just as customers don't need to know how to manage the kitchen, applications don't need to know how to manage the CPU and memory. The OS handles it.

---

## The Five Core Responsibilities of an OS

### 1. Resource Management

The OS manages all hardware resources and decides how to distribute them among running applications.

**Resources the OS manages:**

- **CPU Time**: How long each process gets to run
- **Memory (RAM)**: How much each process can use
- **Disk Space**: File storage and organization
- **Network Bandwidth**: Internet connectivity
- **Devices**: Printers, cameras, USB devices, graphics cards

**Example**: When you open 10 browser tabs and 2 text editors, the OS decides how to split the CPU time among all these applications so they appear to run simultaneously.

### 2. Process and Thread Management

The OS creates, schedules, and manages processes (running instances of programs) and threads (units of execution within processes).

**What the OS does:**

- Creates a new process when you launch an application
- Allocates memory for each process
- Schedules which process runs on which CPU core and when
- Manages process lifecycle (creation, execution, termination)
- Cleans up resources when a process ends

**Example**: When you open Chrome, the OS creates a process. When you open Spotify, the OS creates another process. The OS ensures both can run simultaneously by switching between them.

### 3. Memory Management

The OS manages RAM and storage, ensuring that processes don't interfere with each other's memory.

**What the OS does:**

- Allocates memory when a process starts
- Tracks which memory belongs to which process
- Implements virtual memory (making disk space appear as RAM)
- Prevents one process from reading/writing another process's memory
- Reclaims memory when processes terminate

**Example**: Spotify can use 500 MB of RAM, Chrome can use 1 GB, and your text editor can use 100 MB. The OS keeps them isolated so Spotify can't accidentally read your private messages from Chrome.

### 4. File System Management

The OS organizes how data is stored and retrieved from disk.

**What the OS does:**

- Organizes files into directories (folders)
- Manages how files are stored on disk physically
- Provides file operations (create, read, write, delete)
- Controls access permissions (who can read/write which files)
- Manages disk space efficiently

**Example**: When you save a document, the OS decides where on the physical disk to store it, keeps track of where it is, and lets you retrieve it later by name.

### 5. Security and Access Control

The OS enforces security policies and prevents unauthorized access to resources.

**What the OS does:**

- Creates user accounts and manages permissions
- Prevents unprivileged applications from accessing sensitive data
- Isolates processes so one crashing process doesn't crash others
- Controls device access (a web page can't directly access your camera)
- Manages encryption and authentication

**Example**: Your web browser cannot directly read your banking password file. The OS enforces this boundary. Even if a malicious website tries, the OS says "no."

---

## Main Components of an Operating System

An operating system consists of several key components working together:

### 1. The Kernel

The **kernel** is the core of the OS—the part that runs in privileged mode and has direct access to hardware.

**Kernel responsibilities:**

- **Process/Thread Scheduling**: Decides which process runs on which core
- **Memory Management**: Virtual memory, paging, segmentation
- **Interrupt Handling**: Responds to hardware events (disk ready, network packet arrived)
- **Device Drivers Interface**: Manages communication with hardware

**Why it's separate**: The kernel is protected from user applications. User programs can't accidentally (or maliciously) crash the kernel.

### 2. File System

The **file system** is the component that organizes data storage.

**File system responsibilities:**

- Organizing data into files and directories
- Tracking where files are physically stored on disk
- Managing space allocation on disk
- Providing file operations (open, read, write, close, delete)

**Examples of file systems:**

- **APFS** (macOS, iOS)
- **NTFS** (Windows)
- **ext4** (Linux)
- **FAT32** (USB drives, older devices)

### 3. Shell

The **shell** is the command-line interface that lets you interact with the OS.

**Shell responsibilities:**

- Interpreting user commands
- Launching applications
- Managing input and output
- Scripting automation

**Examples of shells:**

- **bash** (Linux, macOS)
- **zsh** (macOS default now)
- **PowerShell** (Windows)
- **Command Prompt** (Windows, older)

### 4. System Libraries

**System libraries** provide functions that applications use to interact with the OS.

**What libraries do:**

- Standard functions for file I/O, memory allocation, string operations
- APIs (Application Programming Interfaces) for accessing OS services
- Abstract away low-level details

**Examples:**

- **libc** libc is the standard C library: a collection of compiled code that implements common C functions like printf, malloc, strlen, file I/O, etc.
- **.NET Framework** (Windows)

### 5. Device Drivers

**Device drivers** are programs that allow the OS to communicate with hardware devices.

**What drivers do:**

- Translate between device-specific commands and generic OS operations
- Handle hardware-specific details
- Manage device interrupts and data transfers

**Examples of devices needing drivers:**

- Graphics cards (GPU drivers)
- Network cards
- Printers
- Keyboards and mice
- USB devices

### 6. System Utilities and Services

**System utilities** are background programs that perform essential OS tasks.

**Examples:**

- Logging services (record system events)
- Networking services (handle internet connectivity)
- User authentication services (login)
- Power management (battery, sleep mode)
- Update manager (security patches)

---

## How These Components Work Together

Here's a simplified view of how OS components interact:

```
┌─────────────────────────────────────────────────┐
│         User Applications                        │
│  (Chrome, Spotify, Text Editor, etc.)           │
└──────────────────┬──────────────────────────────┘
                   │ (System Calls)
┌──────────────────▼──────────────────────────────┐
│         Operating System                         │
│  ┌────────────────────────────────────────────┐ │
│  │ Kernel (Scheduler, Memory Mgmt, etc.)    │ │
│  ├────────────────────────────────────────────┤ │
│  │ File System     │ Device Drivers          │ │
│  │ Shell           │ System Libraries        │ │
│  │ System Services │ Security & Permissions  │ │
│  └────────────────────────────────────────────┘ │
└──────────────────┬──────────────────────────────┘
                   │ (Hardware Commands)
┌──────────────────▼──────────────────────────────┐
│         Hardware                                 │
│  (CPU, RAM, Disk, Network, USB, etc.)           │
└──────────────────────────────────────────────────┘
```

---

## Examples of Operating Systems

### General Purpose (Computers and Servers)

| OS          | Kernel              | Used For                    | Example                    |
| ----------- | ------------------- | --------------------------- | -------------------------- |
| **Linux**   | Linux Kernel        | Servers, desktops, embedded | Ubuntu, Fedora, Red Hat    |
| **Windows** | Windows Kernel      | Personal computers, servers | Windows 10, Windows Server |
| **macOS**   | Darwin (Unix-based) | Apple computers             | macOS Ventura, Monterey    |

### Mobile

| OS          | Kernel              | Used For               | Example                |
| ----------- | ------------------- | ---------------------- | ---------------------- |
| **iOS**     | Darwin (Unix-based) | Apple phones/tablets   | iPhone, iPad           |
| **Android** | Linux Kernel        | Android phones/tablets | Most non-Apple devices |

## Key Distinctions

### OS ≠ Kernel

- **Kernel**: The core, privileged part managing hardware
- **OS**: The entire system including kernel, file system, shell, libraries, services

### OS ≠ Application

- **OS**: System software managing hardware and providing services
- **Application**: Program using OS services to accomplish user tasks

### User Mode ≠ Kernel Mode

- **User Mode**: Where applications run (restricted access to hardware)
- **Kernel Mode**: Where the OS kernel runs (direct access to all hardware)

This separation is **critical for security and stability**. If an application crashes in user mode, the OS can recover. If something crashes in kernel mode, the entire system crashes.

---

## Why Do We Need an Operating System?

### Without an OS, you would need to:

1. **Write device-specific code** for every hardware configuration

   - A program written for one computer wouldn't work on another
   - You'd need to know intimate details of your specific hardware

2. **Manage memory manually** without any protection

   - One program could overwrite another's memory
   - Memory leaks would crash your system
   - No memory isolation

3. **Manage CPU scheduling yourself**

   - Write code to switch between multiple programs
   - Extremely difficult to get right
   - Poor resource utilization

4. **Handle I/O operations** with no abstraction

   - Each device would require different code
   - Incredibly complex

5. **Enforce security yourself**
   - No way to prevent malicious software from accessing everything
   - No user accounts or permissions

### With an OS, applications just need to:

- Request OS services through **system calls**
- Not worry about hardware details
- Trust that the OS provides isolation and security

---

## System Calls: How Applications Talk to the OS

Applications don't directly access hardware. Instead, they ask the OS through **system calls**.

### What is a System Call?

A **system call** is a request from an application to the OS to perform a privileged operation.

### Examples of Common System Calls

| System Call             | What It Does          | Example                          |
| ----------------------- | --------------------- | -------------------------------- |
| `open()`                | Open a file           | `open("document.txt")`           |
| `read()`                | Read from file/device | `read(fileHandle, buffer, size)` |
| `write()`               | Write to file/device  | `write(fileHandle, data)`        |
| `malloc()` (via kernel) | Allocate memory       | `malloc(1024)`                   |
| `exit()`                | Terminate the process | `exit(0)`                        |
| `fork()`                | Create a new process  | `fork()`                         |

### Why System Calls Exist

System calls are the **interface between user mode and kernel mode**. They're necessary because:

- Direct hardware access would be unsafe
- The OS needs to validate requests
- The OS needs to enforce permissions
- Only the OS has the privilege level to perform certain operations

---

## The Privilege Levels

Modern CPUs support different **privilege levels** (or "rings"):

### Ring 0: Kernel Mode

- **Who runs here**: The OS kernel
- **What they can do**: Direct access to all hardware, can change system settings
- **Restrictions**: None

### Ring 3: User Mode

- **Who runs here**: Your applications
- **What they can do**: Limited operations, must request kernel for hardware access
- **Restrictions**: Cannot directly access hardware, cannot access other process's memory

This separation is **fundamental to OS security and stability**.

---

## Real-World Example: Opening a File in Your Text Editor

Let's trace what happens when you click "Open File" in your text editor:

1. **Application Layer**: You click the "Open" button
2. **Application Code**: Your text editor calls `open("myfile.txt")`
3. **System Call**: This triggers a system call to the kernel
4. **User Mode → Kernel Mode**: The CPU switches to kernel mode
5. **Kernel Processing**: The OS kernel:
   - Checks if you have permission to read this file
   - Finds where the file is on disk
   - Instructs the disk controller to read the data
6. **Kernel Mode → User Mode**: The CPU switches back to user mode
7. **Data Returned**: The file contents are returned to your text editor
8. **Display**: Your editor displays the file

This entire process involves **privilege mode switching** and **kernel management**—all happening in milliseconds.

---

## Key Takeaways

1. An **OS is system software** that manages hardware and provides services to applications
2. The **main responsibilities** of an OS are: resource management, process management, memory management, file system management, and security
3. An OS consists of: **kernel, file system, shell, system libraries, device drivers, and system services**
4. **System calls** are how applications request OS services
5. **Privilege levels** (kernel mode vs user mode) provide security isolation
6. Without an OS, computers would be nearly impossible to program and use
7. Different OS exist for different purposes: **Linux, Windows, macOS, iOS, Android**, etc.

---

## Further Reading & References

- [Wikipedia: Operating System](https://en.wikipedia.org/wiki/Operating_system)
- [Operating System Concepts (Book)](https://en.wikipedia.org/wiki/Operating_System_Concepts)
- [System Calls in Linux](https://man7.org/linux/man-pages/man2/syscalls.2.html)
- [Windows System Calls](https://en.wikipedia.org/wiki/System_call#Windows)

---

## Questions to Test Your Understanding

1. What is the difference between the kernel and the operating system?
2. Name the five core responsibilities of an OS.
3. Why do applications need to use system calls instead of directly accessing hardware?
4. What is the difference between kernel mode and user mode? Why is this important?
5. How does the OS ensure that one application can't read another application's memory?
6. What is a device driver, and why do we need them?
7. Name three components of an operating system and explain what each does.

Try answering these before reading the next article!

---

## Answers

1. The kernel is the core program that manages hardware, processes, memory, and system calls—it's the heart of the OS.
   The operating system is the full software stack: kernel + user tools/utilities (shell, file managers), libraries, drivers, and user-space services/daemons.
   Kernel runs in ring 0; the rest of OS runs mostly in ring 3.

2. Five Core OS Responsibilities

   - Process management: Create, schedule, terminate processes/threads.
   - Memory management: Allocate/deallocate RAM, handle virtual memory, paging.
   - File system management: Organize storage, handle directories/files, permissions.
   - Device management: Control I/O devices via drivers, manage interrupts.
   - Security/protection: Enforce isolation between processes, user authentication.

3. Direct hardware access from apps would be unsafe: one buggy/malicious app could crash the system, corrupt data, or steal from others by directly manipulating hardware (disks, memory, network).
   System calls provide a controlled interface: apps request services via kernel-mediated calls; kernel validates permissions and does the hardware work in a safe, isolated way.

4. | Mode                 | Privilege Level | Runs                | Key Features & Limits                                                                           |
   | -------------------- | --------------- | ------------------- | ----------------------------------------------------------------------------------------------- |
   | Kernel Mode (Ring 0) | Highest         | Kernel, drivers     | Full hardware access, privileged instructions; if crashes, system dies. wikipedia​              |
   | User Mode (Ring 3)   | Lowest          | Apps, most services | Restricted instructions; can't touch hardware directly; crashes isolated to process. wikipedia​ |

   Why important? Prevents apps from harming each other or the system—enforces isolation, stability, security via hardware protection rings.
   ​

5. The OS kernel sets up virtual memory for each process: each app sees its own isolated address space, mapped to physical RAM via page tables controlled by the kernel.
   Hardware MMU (Memory Management Unit) + page protection bits enforce this: access to another process's pages triggers a page fault, kernel kills the offender or denies access.

6. A device driver is kernel-mode code that knows how to talk to a specific hardware device (GPU, USB stick, WiFi card) using its proprietary protocol/commands.
   Why needed? Hardware varies wildly (different chipsets, interfaces); drivers abstract this so the kernel/file system can treat all disks/networks uniformly via standard APIs like read/write.

7. Three OS Components
   - Kernel: Core manager for CPU, memory, devices; handles syscalls, scheduling.
   - File system: Organizes persistent storage (e.g., ext4, NTFS); manages files, directories, quotas.
   - Shell/Command interpreter: User interface for running commands/programs (e.g., bash, PowerShell); parses input, launches processes.

## What's Next

Now that you understand what an OS is, the next article will dive into the **kernel** in detail—the core of the OS and how it manages everything.
