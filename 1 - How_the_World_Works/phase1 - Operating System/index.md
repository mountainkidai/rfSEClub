# PHASE 1 — OPERATING SYSTEM FUNDAMENTALS

## How Software Controls Hardware

---

# Goal

At the end of this phase, you will understand:

```text
Power Button
↓
Firmware
↓
Bootloader
↓
Kernel
↓
Processes
↓
Threads
↓
Virtual Memory
↓
File Systems
↓
Device Drivers
↓
Applications
```

you should be able to explain exactly what happens when:

- A computer boots
- An application launches
- A file is opened
- A key is pressed
- A process communicates with another process

---

# PART 1 — BOOTING A COMPUTER

Understanding how a machine comes to life.

---

## 1.1 What Happens When You Press the Power Button?

- Power supply startup
- CPU reset state
- First instruction execution
- Hardware initialization overview

---

## 1.2 Firmware

- What firmware is
- ROM and Flash storage
- BIOS
- UEFI
- Firmware responsibilities

---

## 1.3 Hardware Initialization

- CPU initialization
- Memory initialization
- Peripheral discovery
- Device enumeration

---

## 1.4 Bootloaders

- Why bootloaders exist
- Bootloader responsibilities
- GRUB
- Loading operating systems

---

## 1.5 Kernel Startup

- Loading kernel into memory
- Kernel initialization
- Early boot sequence
- System startup services

---

# PART 2 — UNDERSTANDING OPERATING SYSTEMS

Why operating systems exist.

---

## 1.6 What Is an Operating System?

- Definition of an operating system
- Hardware abstraction
- Resource management
- User convenience

---

## 1.7 Why Operating Systems Exist

Without an operating system

```text
Application
↓
Hardware
```

With an operating system

```text
Application
↓
Operating System
↓
Hardware
```

---

## 1.8 Kernel Fundamentals

- What is a kernel
- Kernel responsibilities
- System resource management
- Core services

---

## 1.9 Kernel Architectures

- Monolithic kernels
- Microkernels
- Hybrid kernels

---

## 1.10 User Space vs Kernel Space

- Privilege separation
- Protection boundaries
- Security model
- Memory isolation

---

## 1.11 System Calls

- Why system calls exist
- Crossing privilege boundaries
- Requesting kernel services

---

# PART 3 — MEMORY MANAGEMENT

How operating systems manage memory.

---

## 1.12 Physical Memory

- RAM as hardware
- Memory cells
- Physical addresses

---

## 1.13 Why Memory Management Exists

- Limited memory
- Multiple applications
- Protection requirements

---

## 1.14 Virtual Memory

- Virtual address space
- Memory abstraction
- Benefits of virtual memory

---

## 1.15 Address Translation

- Virtual addresses
- Physical addresses
- Translation process

---

## 1.16 Page Tables

- Page table structure
- Page lookup
- Multi-level page tables

---

## 1.17 Paging

- Memory pages
- Page allocation
- Page replacement

---

## 1.18 Memory Protection

- Read permissions
- Write permissions
- Execute permissions

---

## 1.19 Memory Mapping

- mmap
- Shared memory
- File-backed memory

---

# PART 4 — PROCESSES

How programs become running applications.

---

## 1.20 What Is a Process?

- Program vs process
- Process abstraction
- Process state

---

## 1.21 Process Creation

- Fork
- Spawn
- Process initialization

---

## 1.22 Process Lifecycle

- New
- Ready
- Running
- Waiting
- Terminated

---

## 1.23 Process Memory Layout

```text
Code Segment
↓
Data Segment
↓
Heap
↓
Stack
```

---

## 1.24 Process Isolation

- Separate address spaces
- Security
- Fault isolation

---

## 1.25 Process Communication Overview

- Why processes communicate
- Communication challenges

---

## 1.26 Signals

- Signal concept
- Signal delivery
- Common signals

---

## 1.27 Pipes

- Anonymous pipes
- Named pipes
- Data streaming

---

## 1.28 Shared Memory

- Shared regions
- Fast communication
- Synchronization concerns

---

# PART 5 — THREADS

How multiple execution paths run inside a process.

---

## 1.29 What Is a Thread?

- Thread concept
- Execution context
- Lightweight execution

---

## 1.30 Processes vs Threads

- Similarities
- Differences
- Resource sharing

---

## 1.31 Thread Lifecycle

- Creation
- Running
- Blocking
- Termination

---

## 1.32 Context Switching

- Saving CPU state
- Restoring CPU state
- Switching execution

---

## 1.33 CPU Scheduling

- Why scheduling exists
- Scheduler responsibilities

---

## 1.34 Scheduling Algorithms

- Round Robin
- Priority Scheduling
- Fair Scheduling

---

## 1.35 Multicore Systems

- Multiple CPU cores
- Parallel execution
- Core assignment

---

# PART 6 — FILE SYSTEMS

How data survives after power loss.

---

## 1.36 Why File Systems Exist

- Persistent storage
- Organization
- Data retrieval

---

## 1.37 Files

- File abstraction
- Metadata
- File operations

---

## 1.38 Directories

- Directory structure
- Hierarchical storage

---

## 1.39 File System Architecture

- Blocks
- Metadata
- Allocation

---

## 1.40 Inodes

- What inodes are
- File metadata
- File references

---

## 1.41 Journaling

- Why journaling exists
- Crash recovery
- Consistency

---

## 1.42 Linux Directory Structure

```text
/
├── bin
├── boot
├── dev
├── etc
├── home
├── lib
├── proc
├── root
├── tmp
├── usr
└── var
```

---

## 1.43 File Descriptors

- stdin
- stdout
- stderr
- Descriptor table

---

## 1.44 Reading Files

- Open
- Read
- Close

---

## 1.45 Writing Files

- Write operations
- Buffers
- Persistence

---

# PART 7 — DEVICE MANAGEMENT

How software communicates with hardware.

---

## 1.46 What Is a Device Driver?

- Driver responsibilities
- Hardware abstraction

---

## 1.47 Device Communication

- Input devices
- Output devices
- Storage devices

---

## 1.48 Interrupts

- Hardware interrupts
- Software interrupts
- Interrupt handlers

---

## 1.49 Interrupt Lifecycle

```text
Hardware Event
↓
Interrupt
↓
Kernel Handler
↓
Operating System
↓
Application
```

---

## 1.50 Direct Memory Access (DMA)

- Why DMA exists
- CPU offloading
- High-speed transfers

---

## 1.51 Hardware Abstraction Layer

- Device independence
- Uniform interfaces

---

# PHASE PROJECT

Build a Mini Operating System Simulator

Features:

- Process creation
- Thread scheduling
- Memory allocation
- Virtual memory simulation
- File system simulation

---

# End Goal

At this point you should understand:

```text
Power Button
↓
Firmware
↓
Bootloader
↓
Kernel
↓
Virtual Memory
↓
Processes
↓
Threads
↓
File Systems
↓
Device Drivers
↓
Applications
```

And should be able to explain exactly what happens when:

- A computer boots
- An application launches
- A file is opened
- A key is pressed
- A process communicates with another process
- A program requests memory
