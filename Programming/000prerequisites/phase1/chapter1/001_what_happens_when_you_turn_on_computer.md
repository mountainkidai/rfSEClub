# What Actually Happens When You Turn On Your Computer

## Introduction

Every time you press the power button on your computer, a fascinating sequence of events happens—from electrical signals flowing through circuits to the operating system taking control. Understanding this journey is crucial because it's the foundation for everything that happens afterward: running applications, managing memory, executing your code.

In this article, we'll trace the **boot sequence** step by step, from the moment power reaches your CPU to when your operating system is fully loaded and ready to run programs.

## Prerequisites

Before reading this article, you should be familiar with:

- Basic understanding of what a computer is (processor, memory, storage)
- General knowledge that computers run software and hardware together

## The Boot Sequence: Five Key Phases

The process of turning on a computer and loading the OS involves five main phases:

1. **Power-On Self-Test (POST) and BIOS/UEFI**
2. **Bootloader Execution**
3. **Kernel Loading**
4. **Kernel Initialization**
5. **OS Fully Loaded**

Let's explore each one.

---

## Phase 1: Power-On Self-Test (POST) and BIOS/UEFI

### What Happens

When you press the power button, electricity flows to the motherboard. The CPU begins its initialization, but it **cannot immediately run your operating system** because it doesn't yet know where the OS is stored or how to find it.

#### Firmware is essential, low-level software permanently embedded in hardware devices (like phones, routers, TVs) that provides the basic instructions for the hardware to function, start up, and communicate, acting as a crucial link between hardware and higher-level software or operating systems

so a special piece of firmware called **BIOS (Basic Input/Output System)** or **UEFI (Unified Extensible Firmware Interface)** takes over. This firmware is **permanently stored** on a special chip on your motherboard (unlike the OS, which lives on your hard drive).

### Key Tasks of BIOS/UEFI

- **POST (Power-On Self-Test)**: The BIOS checks that your hardware is working correctly

  - Is the CPU functional?
  - Is RAM accessible?
  - Are storage devices detected?
  - If anything fails, you'll hear beep codes or see error messages

- **Device Enumeration**: Detects connected devices (keyboard, mouse, disk drives, network cards)

- **System Clock Setup**: Sets the system time

### Important Distinction

**BIOS/UEFI is NOT the operating system**. It's a thin layer of firmware that exists specifically to:

1. Check hardware health
2. Find where the operating system lives (usually on a hard drive or SSD)
3. Hand control to the bootloader

After POST completes successfully, BIOS/UEFI's job is almost done. It now searches for a bootloader.

---

## Phase 2: Bootloader Execution

### What is a Bootloader?

A **bootloader** is a small program (typically a few kilobytes) stored at a specific location on your disk. Its job is simple but critical:

> "Find the operating system kernel on disk and load it into RAM, then jump to it."

### Where is the Bootloader Stored?

On older systems (BIOS), the bootloader lives in the **Master Boot Record (MBR)**—the first 512 bytes of the disk.

On newer systems (UEFI), the bootloader lives in the **EFI System Partition**, a special partition on your disk.

### What the Bootloader Does

1. **Accesses the Disk**: Reads from your hard drive or SSD using disk I/O operations
2. **Finds the Kernel**: Locates the OS kernel file (on Linux, this might be `vmlinuz`; on Windows, `ntldr` or `bootmgr`)
3. **Loads into RAM**: Copies the kernel from disk into memory
4. **Sets Up Minimal Environment**: Prepares the CPU to run the kernel
5. **Hands Control to the Kernel**: Jumps execution to the kernel's entry point

### Real-World Examples

- **Linux**: Uses bootloaders like GRUB (Grand Unified Bootloader) or LILO
- **Windows**: Uses `bootmgr` (modern) or `ntldr` (older)
- **macOS**: Uses a firmware-based bootloader

### Why is a Bootloader Necessary?

You might wonder: why not just have BIOS/UEFI load the kernel directly? The answer is flexibility. The bootloader can:

- Choose which OS to load (multi-boot systems)
- Load different kernel versions
- Pass configuration parameters to the kernel
- Run additional setup code

---

## Phase 3: Kernel Loading

### What is the Kernel?

The **kernel** is the core of the operating system. It's a large, complex program responsible for:

- Managing CPU time (scheduling)
- Managing memory
- Handling interrupts (disk I/O, network requests)
- Managing devices (disk, network, GPU)
- Managing security and permissions

Once the bootloader loads the kernel into RAM and hands control to it, the kernel begins its initialization.

### Kernel Initialization Steps

1. **Memory Management Setup**

   - Initialize virtual memory and paging
   - Set up memory management structures
   - Identify how much RAM is available

2. **CPU Initialization**

   - Initialize CPU features and extensions
   - Set up exception handlers and interrupt handlers
   - Enable multi-core support (if available)

3. **Device Driver Loading**

   - Load essential drivers for disk controllers, network cards, USB
   - Initialize the file system driver

4. **File System Mounting**
   - Mount the root file system (/) from disk
   - This allows the kernel to access files on disk

---

## Phase 4: OS Fully Loaded - From Kernel to User Space

### The Kernel Spawns the First Process

At this point, the kernel is running, but there are **no user applications yet**. The kernel's next step is to create the **first process**, which has a special name depending on the OS:

- **Linux/Unix**: `init` (process ID 1)
- **macOS**: `launchd` (process ID 1)
- **Windows**: `csrss.exe` and `services.exe`

### What is Process ID 1?

Process ID 1 is special—it's the **parent of all other processes**. Its job is to:

- Start system services (logging, networking, user authentication)
- Start the shell (command-line interface)
- Start the graphical user interface (GUI) if applicable

### From Kernel to User Applications

Here's the critical transition:

```
BIOS/UEFI (firmware)
    ↓
Bootloader (loads kernel)
    ↓
Kernel (manages hardware, creates Process 1)
    ↓
Process 1 (starts services, shell, GUI)
    ↓
User Applications (your browser, editor, etc.)
```

---

## Phase 5: The OS is Ready

### What You See

Once all initialization is complete, you see:

- The login screen (or desktop, if auto-login is enabled)
- The ability to open applications
- System services running in the background

### What's Running in the Background

Even when you think your computer is "idle," hundreds of processes are running:

- Networking services
- System monitors

### The OS is Now in Control

The **kernel is now in full control** and will:

- Schedule processes to run on CPU cores
- Manage memory allocation for running applications
- Handle all I/O operations (disk reads/writes, network requests)
- Enforce security and permissions

---

## Key Concepts Summary

| Concept            | Purpose                                            |
| ------------------ | -------------------------------------------------- |
| **BIOS/UEFI**      | Hardware initialization and bootloader location    |
| **Bootloader**     | Load kernel from disk into RAM                     |
| **Kernel**         | Manage hardware, schedule processes, manage memory |
| **Process 1**      | Start system services and user applications        |
| **OS Ready State** | Kernel manages all processes and hardware          |

---

## Real-World Timeline Example

Let's trace what happens on a typical laptop (macOS M2 Pro) when you press power:

| Time           | What Happens                                     |
| -------------- | ------------------------------------------------ |
| **0ms**        | Power delivered to CPU and motherboard           |
| **1-2ms**      | BIOS/UEFI runs POST, detects hardware            |
| **3-10ms**     | BIOS/UEFI finds and executes bootloader          |
| **10-50ms**    | Bootloader loads kernel into RAM                 |
| **50-100ms**   | Kernel initialization: memory, CPU, file systems |
| **100-500ms**  | Process 1 (launchd) starts system services       |
| **500-2000ms** | GUI initializes, login screen appears            |
| **2000ms+**    | OS fully ready, waiting for user input           |

_Note: Times vary based on hardware and OS configuration_

---

## Important Distinctions

### BIOS/UEFI ≠ Operating System

- **BIOS/UEFI**: Firmware that runs **before** the OS
- **Operating System**: Software that runs **after** BIOS/UEFI hands control to the kernel

### Bootloader ≠ Kernel

- **Bootloader**: Small program that loads the kernel
- **Kernel**: The core OS that manages everything afterward

### Kernel ≠ User Applications

- **Kernel**: Runs in **kernel mode** (privileged access to hardware)
- **User Apps**: Run in **user mode** (restricted access, must ask kernel for I/O)

---

## What Happens Next

Now that your OS is loaded and running, you can:

- Launch applications (which become processes)
- Use the file system
- Connect to networks
- Use multiple cores for parallel execution

The next article in this series explains **What is an Operating System?** — we'll explore what the OS actually does after it's loaded and why it's necessary.

---

## Key Takeaways

1. Turning on your computer involves **five distinct phases**: POST, Bootloader, Kernel Loading, OS Initialization, and Ready State
2. **BIOS/UEFI** is firmware that initializes hardware and finds the bootloader
3. The **bootloader** loads the kernel from disk into RAM
4. The **kernel** takes over and manages all hardware and processes
5. The kernel creates **Process 1**, which starts all other services and applications
6. The **OS is now ready** to run user applications and manage system resources

---

## Further Reading & References

- [Wikipedia: Boot Process](https://en.wikipedia.org/wiki/Booting)
- [Linux Kernel: Boot Process](https://en.wikipedia.org/wiki/Linux_kernel)
- [BIOS vs UEFI](https://en.wikipedia.org/wiki/UEFI)
- [What is a Bootloader?](https://en.wikipedia.org/wiki/Bootloader)

---

## Questions to Test Your Understanding

1. What is the difference between BIOS and a bootloader?
2. Why can't BIOS directly load and execute your OS?
3. What is the purpose of POST (Power-On Self-Test)?
4. What does the bootloader do?
5. Why is Process ID 1 special?
6. What's the difference between kernel mode and user mode?

Try answering these before reading the next article!
