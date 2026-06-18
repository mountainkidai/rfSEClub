# How Computers Work: A Complete First Principles Roadmap

## From Electricity to Planet-Scale Systems

---

# Goal

This roadmap is designed to take you from:

> "I can write code"

to

> "I understand every layer from silicon to distributed systems and can build world-class software in Rust."

The philosophy:

- Learn from first principles.
- Never memorize abstractions before understanding the layer below.
- Every topic builds on previous topics.
- Build projects after every major phase.

---

# PHASE 0 — DIGITAL LOGIC & COMPUTER ARCHITECTURE

Everything begins here.

---

## 0.1 What Is Information?

- What is information?
- Why computers only understand states
- Physical representation of information
- Analog vs Digital systems

---

## 0.2 Binary Number System

- Decimal numbers
- Binary numbers
- Converting decimal ↔ binary
- Binary arithmetic
- Signed vs unsigned integers

---

## 0.3 Hexadecimal

- Why hexadecimal exists
- Binary ↔ Hex conversion
- Memory addresses

---

## 0.4 Boolean Logic

- True and False
- Boolean algebra
- Truth tables

---

## 0.5 Logic Gates

- AND
- OR
- NOT
- XOR
- NAND
- NOR

---

## 0.6 Building Computation from Gates

- Half adder
- Full adder
- Multiplexer
- Decoder
- Comparators

---

## 0.7 Registers

- What is a register
- Temporary storage
- Register operations

---

## 0.8 Arithmetic Logic Unit (ALU)

- Arithmetic operations
- Logical operations
- Comparisons

---

## 0.9 CPU Control Unit

- Fetch instruction
- Decode instruction
- Execute instruction

---

## 0.10 Building a Simple CPU

- Program counter
- Instruction register
- Control flow
- Branching

---

## 0.11 Computer Memory Hardware

---

## 0.12 Computer Memory Hardware

- SRAM
- DRAM
- Flash Memory

---

## 0.13 CPU Cache

- Why cache exists
- L1 cache
- L2 cache
- L3 cache
- Cache locality
- Cache misses

---

## 0.14 Memory Hierarchy

CPU Registers

↓

L1 Cache

↓

L2 Cache

↓

L3 Cache

↓

RAM

↓

SSD

↓

HDD

---

## 0.15 — Memory Addressing

## 0.16 Introduction to Assembly

- What assembly is
- Registers
- Instructions
- Jumps
- Function calls

---

Right now Phase 0 teaches:

```text
Information
↓
Binary
↓
Logic
↓
Gates
↓
Registers
↓
ALU
↓
Control Unit
↓
CPU
↓
Memory
↓
Cache
↓
Assembly
```

That's about 85% complete.

The remaining 15% is explaining how modern CPUs actually become fast.

---

## 0.17 Machine Instructions

- What is an instruction?
- Opcode vs Operand
- Instruction formats
- Instruction sets
- RISC vs CISC

---

## 0.18 CPU Execution Cycle

- Fetch
- Decode
- Execute
- Memory Access
- Write Back

You mention this earlier, but it deserves its own chapter.

---

## 0.19 CPU Pipelining

- Why CPUs pipeline instructions
- Pipeline stages
- Pipeline hazards
- Stalls

---

## 0.20 Superscalar Execution

- Multiple instructions per cycle
- Instruction-level parallelism
- Modern CPU architecture

---

## 0.21 Branch Prediction

- Why branches are expensive
- Prediction mechanisms
- Pipeline flushing
- Performance impact

---

## 0.22 Out-of-Order Execution

- Dependency tracking
- Instruction reordering
- Reorder buffers
- Why modern CPUs are fast

---

## 0.23 SIMD

- Single Instruction Multiple Data
- Vector operations
- Multimedia workloads
- AI workloads

---

## 0.24 Memory Bus & Data Movement

- CPU bus
- Address bus
- Data bus
- Memory communication

---

## 0.25 RAM Architecture

- Memory cells
- Memory banks
- DDR memory
- Memory channels

This answers many questions you've been asking recently about DDR3/DDR4/DDR5.

---

## 0.26 Storage Devices

- HDD internals
- SSD internals
- NAND Flash
- Wear leveling

---

## 0.27 Input and Output Devices

- Keyboard
- Mouse
- Display
- Disk controllers
- Peripheral communication

---

## 0.28 Interrupts and Hardware Events

- Why polling is inefficient
- Hardware interrupts
- Interrupt handlers
- Device communication

This bridges beautifully into OS fundamentals.

---

## 0.29 GPU Fundamentals

- Why GPUs exist
- CPU vs GPU
- Parallel computation
- Graphics pipeline

---

## 0.30 Modern Computer Architecture

Bring everything together.

```text
Transistors
↓
Logic Gates
↓
Registers
↓
ALU
↓
CPU
↓
Cache
↓
RAM
↓
SSD
↓
GPU
↓
I/O Devices
```

---

```text
Information
↓
Binary
↓
Logic
↓
Gates
↓
Registers
↓
ALU
↓
Control Unit
↓
CPU
↓
Memory
↓
Cache
↓
Assembly
↓
Machine Instructions
↓
Pipelining
↓
Branch Prediction
↓
Out-of-Order Execution
↓
SIMD
↓
RAM
↓
Storage
↓
I/O
↓
GPU
↓
Modern Computer Architecture
```

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

# PHASE 2 — PROGRAM EXECUTION

## How Software Becomes Reality

---

# Goal

At the end of this phase, you should understand:

```text
Idea
↓
Source Code
↓
Compiler
↓
Executable
↓
Operating System
↓
Process
↓
Memory
↓
CPU Instructions
↓
Electricity
↓
Computation
```

And be able to answer:

> What actually happens when I run a Rust program?

---

# PART 1 — WHAT IS SOFTWARE?

Understanding what a program really is.

---

## 2.1 What Is Software?

- Instructions
- Data
- State
- Computation

---

## 2.2 What Is A Program?

- Definition
- Programs as instructions
- Programs as data

---

## 2.3 Program vs Process

```text
Program
=
Instructions stored on disk

Process
=
Program currently running
```

---

## 2.4 Source Code

- Human-readable instructions
- Programming languages
- Abstractions

---

## 2.5 High-Level vs Low-Level Languages

- Assembly
- C
- Rust
- Python
- JavaScript

---

## 2.6 Why Programming Languages Exist

- Human limitations
- Machine limitations
- Productivity

---

# PART 2 — FROM SOURCE CODE TO MACHINE CODE

How computers understand programs.

---

## 2.7 Why Compilation Exists

Problem:

```text
Humans write:

println!("Hello")
```

CPU understands:

```text
Machine Instructions
```

---

## 2.8 The Compilation Pipeline

```text
Source Code
↓
Compiler
↓
Machine Code
```

---

## 2.9 Lexical Analysis

- Tokens
- Keywords
- Identifiers
- Operators

---

## 2.10 Parsing

- Grammar
- Syntax
- Parse Trees

---

## 2.11 Abstract Syntax Trees (AST)

- Program structure
- Hierarchical representation

---

## 2.12 Semantic Analysis

- Meaning of code
- Type checking
- Validation

---

## 2.13 Intermediate Representation (IR)

- Compiler internal language
- LLVM IR

---

## 2.14 Compiler Optimizations

- Constant folding
- Dead code elimination
- Loop optimizations

---

## 2.15 Machine Code Generation

- Instruction generation
- CPU architecture targeting

---

# PART 3 — OBJECT FILES & LINKING

How independent pieces become one executable.

---

## 2.16 What Is An Object File?

- Compiled code units
- Machine instructions
- Metadata

---

## 2.17 Symbols

- Function names
- Variable names
- Symbol tables

---

## 2.18 Static Libraries

- Reusable code
- Linking at compile time

---

## 2.19 Dynamic Libraries

- Shared libraries
- Runtime loading

---

## 2.20 Linking

- Symbol resolution
- Combining object files

---

## 2.21 Building An Executable

```text
Source Files
↓
Object Files
↓
Linker
↓
Executable
```

---

# PART 4 — EXECUTABLES

Understanding the final binary.

---

## 2.22 What Is An Executable?

- Program image
- Binary format

---

## 2.23 ELF Format (Linux)

- Sections
- Metadata
- Program headers

---

## 2.24 PE Format (Windows)

- Windows executables

---

## 2.25 Mach-O Format (macOS)

- Apple executable format

---

## 2.26 Inside A Binary

- Code section
- Data section
- Symbol information

---

# PART 5 — STARTING A PROGRAM

What happens when you press Run.

---

## 2.27 Launching A Program

```text
User
↓
Shell
↓
Operating System
↓
Loader
↓
Process
```

---

## 2.28 Program Loaders

- Loading executables
- Preparing execution

---

## 2.29 Creating A Process

- Process creation
- Resource allocation

---

## 2.30 Process IDs (PID)

- Process identification

---

## 2.31 Environment Variables

- Process configuration

---

## 2.32 Command Line Arguments

- Runtime inputs

---

## 2.33 Program Entry Point

```text
_start
↓
main()
```

---

# PART 6 — MEMORY DURING EXECUTION

Where programs live while running.

---

## 2.34 Virtual Address Space

- Process memory
- Address layout

---

## 2.35 Program Memory Layout

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

## 2.36 Code Segment

- Machine instructions

---

## 2.37 Data Segment

- Global variables
- Static variables

---

## 2.38 Stack

- Function calls
- Local variables

---

## 2.39 Stack Frames

- Function execution contexts

---

## 2.40 Heap

- Dynamic memory allocation

---

## 2.41 Memory Allocation

- Allocators
- Memory requests

---

## 2.42 Memory Leaks

- Lost allocations

---

## 2.43 Dangling Pointers

- Invalid references

---

# PART 7 — FUNCTION EXECUTION

How code actually executes.

---

## 2.44 What Is A Function?

- Reusable instructions

---

## 2.45 Calling Functions

- Jump instructions
- Control transfer

---

## 2.46 Parameters

- Passing data

---

## 2.47 Return Values

- Returning results

---

## 2.48 Call Stack

- Execution history

---

## 2.49 Recursion

- Functions calling themselves

---

## 2.50 Stack Growth

- Nested function calls

---

# PART 8 — HOW DIFFERENT LANGUAGES RUN

Different paths to execution.

---

## 2.51 Native Execution

Examples:

- C
- C++
- Rust

```text
Source
↓
Compiler
↓
Machine Code
↓
CPU
```

---

## 2.52 Interpreted Languages

Examples:

- Python
- Ruby

```text
Source
↓
Interpreter
↓
Execution
```

---

## 2.53 Virtual Machines

Examples:

- Java
- C#

```text
Source
↓
Bytecode
↓
Virtual Machine
↓
CPU
```

---

## 2.54 Just-In-Time Compilation

- Dynamic compilation
- Runtime optimization

---

## 2.55 JavaScript Engines

- V8
- SpiderMonkey
- Modern browser execution

---

# PART 9 — PERFORMANCE

Why some programs are faster than others.

---

## 2.56 CPU-Bound Programs

- Computation-heavy workloads

---

## 2.57 Memory-Bound Programs

- Memory bottlenecks

---

## 2.58 I/O-Bound Programs

- Waiting on disks
- Waiting on networks

---

## 2.59 Profiling

- Measuring performance

---

## 2.60 Bottlenecks

- Identifying slow paths

---

## 2.61 Optimization Principles

- Measure first
- Optimize later

---

# PART 10 — PREPARING FOR CONCURRENCY

The bridge to modern software.

---

## 2.62 Why One Thread Is Not Enough

- Latency
- Throughput

---

## 2.63 Multiple Tasks

- Concurrent work

---

## 2.64 Multiple CPUs

- Parallel work

---

## 2.65 The Limits of Sequential Execution

- Motivation for concurrency

---

# PHASE PROJECT

Build a Program Execution Visualizer

Features:

- Source code visualization
- Compilation stages
- Linking visualization
- Process creation
- Stack visualization
- Heap visualization
- Function call tracing

---

# End Goal

You should be able to explain:

```text
main.rs
↓
rustc
↓
Object Files
↓
Linker
↓
Executable
↓
Loader
↓
Process
↓
Virtual Memory
↓
CPU Instructions
↓
Execution
```

And answer:

> What physically happens from the moment I type `cargo run` until the CPU executes the first instruction?

# PHASE 2 — PROGRAM EXECUTION

## How Software Becomes Reality

---

# Goal

At the end of this phase, you should understand:

```text
Idea
↓
Source Code
↓
Compiler
↓
Executable
↓
Operating System
↓
Process
↓
Memory
↓
CPU Instructions
↓
Electricity
↓
Computation
```

And be able to answer:

> What actually happens when I run a Rust program?

---

# PART 1 — WHAT IS SOFTWARE?

Understanding what a program really is.

---

## 2.1 What Is Software?

- Instructions
- Data
- State
- Computation

---

## 2.2 What Is A Program?

- Definition
- Programs as instructions
- Programs as data

---

## 2.3 Program vs Process

```text
Program
=
Instructions stored on disk

Process
=
Program currently running
```

---

## 2.4 Source Code

- Human-readable instructions
- Programming languages
- Abstractions

---

## 2.5 High-Level vs Low-Level Languages

- Assembly
- C
- Rust
- Python
- JavaScript

---

## 2.6 Why Programming Languages Exist

- Human limitations
- Machine limitations
- Productivity

---

# PART 2 — FROM SOURCE CODE TO MACHINE CODE

How computers understand programs.

---

## 2.7 Why Compilation Exists

Problem:

```text
Humans write:

println!("Hello")
```

CPU understands:

```text
Machine Instructions
```

---

## 2.8 The Compilation Pipeline

```text
Source Code
↓
Compiler
↓
Machine Code
```

---

## 2.9 Lexical Analysis

- Tokens
- Keywords
- Identifiers
- Operators

---

## 2.10 Parsing

- Grammar
- Syntax
- Parse Trees

---

## 2.11 Abstract Syntax Trees (AST)

- Program structure
- Hierarchical representation

---

## 2.12 Semantic Analysis

- Meaning of code
- Type checking
- Validation

---

## 2.13 Intermediate Representation (IR)

- Compiler internal language
- LLVM IR

---

## 2.14 Compiler Optimizations

- Constant folding
- Dead code elimination
- Loop optimizations

---

## 2.15 Machine Code Generation

- Instruction generation
- CPU architecture targeting

---

# PART 3 — OBJECT FILES & LINKING

How independent pieces become one executable.

---

## 2.16 What Is An Object File?

- Compiled code units
- Machine instructions
- Metadata

---

## 2.17 Symbols

- Function names
- Variable names
- Symbol tables

---

## 2.18 Static Libraries

- Reusable code
- Linking at compile time

---

## 2.19 Dynamic Libraries

- Shared libraries
- Runtime loading

---

## 2.20 Linking

- Symbol resolution
- Combining object files

---

## 2.21 Building An Executable

```text
Source Files
↓
Object Files
↓
Linker
↓
Executable
```

---

# PART 4 — EXECUTABLES

Understanding the final binary.

---

## 2.22 What Is An Executable?

- Program image
- Binary format

---

## 2.23 ELF Format (Linux)

- Sections
- Metadata
- Program headers

---

## 2.24 PE Format (Windows)

- Windows executables

---

## 2.25 Mach-O Format (macOS)

- Apple executable format

---

## 2.26 Inside A Binary

- Code section
- Data section
- Symbol information

---

# PART 5 — STARTING A PROGRAM

What happens when you press Run.

---

## 2.27 Launching A Program

```text
User
↓
Shell
↓
Operating System
↓
Loader
↓
Process
```

---

## 2.28 Program Loaders

- Loading executables
- Preparing execution

---

## 2.29 Creating A Process

- Process creation
- Resource allocation

---

## 2.30 Process IDs (PID)

- Process identification

---

## 2.31 Environment Variables

- Process configuration

---

## 2.32 Command Line Arguments

- Runtime inputs

---

## 2.33 Program Entry Point

```text
_start
↓
main()
```

---

# PART 6 — MEMORY DURING EXECUTION

Where programs live while running.

---

## 2.34 Virtual Address Space

- Process memory
- Address layout

---

## 2.35 Program Memory Layout

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

## 2.36 Code Segment

- Machine instructions

---

## 2.37 Data Segment

- Global variables
- Static variables

---

## 2.38 Stack

- Function calls
- Local variables

---

## 2.39 Stack Frames

- Function execution contexts

---

## 2.40 Heap

- Dynamic memory allocation

---

## 2.41 Memory Allocation

- Allocators
- Memory requests

---

## 2.42 Memory Leaks

- Lost allocations

---

## 2.43 Dangling Pointers

- Invalid references

---

# PART 7 — FUNCTION EXECUTION

How code actually executes.

---

## 2.44 What Is A Function?

- Reusable instructions

---

## 2.45 Calling Functions

- Jump instructions
- Control transfer

---

## 2.46 Parameters

- Passing data

---

## 2.47 Return Values

- Returning results

---

## 2.48 Call Stack

- Execution history

---

## 2.49 Recursion

- Functions calling themselves

---

## 2.50 Stack Growth

- Nested function calls

---

# PART 8 — HOW DIFFERENT LANGUAGES RUN

Different paths to execution.

---

## 2.51 Native Execution

Examples:

- C
- C++
- Rust

```text
Source
↓
Compiler
↓
Machine Code
↓
CPU
```

---

## 2.52 Interpreted Languages

Examples:

- Python
- Ruby

```text
Source
↓
Interpreter
↓
Execution
```

---

## 2.53 Virtual Machines

Examples:

- Java
- C#

```text
Source
↓
Bytecode
↓
Virtual Machine
↓
CPU
```

---

## 2.54 Just-In-Time Compilation

- Dynamic compilation
- Runtime optimization

---

## 2.55 JavaScript Engines

- V8
- SpiderMonkey
- Modern browser execution

---

# PART 9 — PERFORMANCE

Why some programs are faster than others.

---

## 2.56 CPU-Bound Programs

- Computation-heavy workloads

---

## 2.57 Memory-Bound Programs

- Memory bottlenecks

---

## 2.58 I/O-Bound Programs

- Waiting on disks
- Waiting on networks

---

## 2.59 Profiling

- Measuring performance

---

## 2.60 Bottlenecks

- Identifying slow paths

---

## 2.61 Optimization Principles

- Measure first
- Optimize later

---

# PART 10 — PREPARING FOR CONCURRENCY

The bridge to modern software.

---

## 2.62 Why One Thread Is Not Enough

- Latency
- Throughput

---

## 2.63 Multiple Tasks

- Concurrent work

---

## 2.64 Multiple CPUs

- Parallel work

---

## 2.65 The Limits of Sequential Execution

- Motivation for concurrency

---

# PHASE PROJECT

Build a Program Execution Visualizer

Features:

- Source code visualization
- Compilation stages
- Linking visualization
- Process creation
- Stack visualization
- Heap visualization
- Function call tracing

---

# End Goal

You should be able to explain:

```text
main.rs
↓
rustc
↓
Object Files
↓
Linker
↓
Executable
↓
Loader
↓
Process
↓
Virtual Memory
↓
CPU Instructions
↓
Execution
```

And answer:

> What physically happens from the moment I type `cargo run` until the CPU executes the first instruction?

# PHASE 4 — NETWORKING FUNDAMENTALS

## How Computers Communicate Across the World

---

# Goal

At the end of this phase, you should understand:

```text
Application
↓
HTTP
↓
TLS
↓
TCP
↓
IP
↓
Ethernet
↓
Physical Network
```

And be able to answer:

> What happens when I open https://phunsuk.ai in my browser?

---

# PART 1 — WHY NETWORKING EXISTS

---

## 4.1 The Problem of Isolated Computers

- Standalone computers
- Local information only
- Resource duplication

---

## 4.2 Why Computers Need Networks

- Communication
- Resource sharing
- Remote access
- Distributed systems

---

## 4.3 What Is A Network?

- Definition
- Nodes
- Connections
- Communication channels

---

## 4.4 Types of Networks

- PAN
- LAN
- MAN
- WAN
- Internet

---

## 4.5 Network Topologies

- Bus
- Ring
- Star
- Mesh

---

## 4.6 Physical Networking Hardware

- Network Interface Cards
- Switches
- Routers
- Modems
- Access Points

---

# PART 2 — HOW INFORMATION TRAVELS

---

## 4.7 Information as Data

- Digital information
- Binary transmission

---

## 4.8 Physical Signals

- Electrical signals
- Optical signals
- Radio signals

---

## 4.9 Transmission Media

- Copper cables
- Fiber optics
- Wireless communication

---

## 4.10 The Problem with Large Messages

Problem:

```text
Huge Message
↓
Difficult To Send
```

---

## 4.11 Packet Switching

Solution:

```text
Message
↓
Packets
↓
Network
↓
Reassembled Message
```

---

## 4.12 Packets

- Headers
- Payloads
- Metadata

---

## 4.13 Frames

- Local delivery units
- Data-link communication

---

## 4.14 Bandwidth

- Capacity
- Throughput

---

## 4.15 Latency

- Propagation delay
- Transmission delay
- Processing delay

---

## 4.16 Packet Loss

- Causes
- Recovery

---

## 4.17 Jitter

- Variable latency
- Real-time communication

---

# PART 3 — WHY NETWORKING LAYERS EXIST

---

## 4.18 The Complexity Problem

Without layers:

```text
Everything Handles Everything
```

With layers:

```text
Each Layer Solves One Problem
```

---

## 4.19 Encapsulation

```text
Application Data
↓
TCP Segment
↓
IP Packet
↓
Ethernet Frame
```

---

## 4.20 Decapsulation

Reverse process on the receiving side.

---

## 4.21 OSI Model

```text
Application
Presentation
Session
Transport
Network
Data Link
Physical
```

---

## 4.22 TCP/IP Model

```text
Application
Transport
Internet
Link
```

---

## 4.23 Why TCP/IP Won

- Simplicity
- Practicality
- Internet adoption

---

# PART 4 — LOCAL NETWORK COMMUNICATION

---

## 4.24 MAC Addresses

- Physical device identities

---

## 4.25 Ethernet

- Local wired communication

---

## 4.26 Switches

- Forwarding frames
- MAC tables

---

## 4.27 ARP

Problem:

```text
Know IP
Don't Know MAC
```

Solution:

```text
ARP Request
↓
ARP Reply
```

---

## 4.28 WiFi

- Wireless communication
- Access points
- Wireless frames

---

## 4.29 Sending Data on a Local Network

Complete packet journey.

---

# PART 5 — INTERNET ADDRESSING

---

## 4.30 Why Addresses Exist

Every device needs an identity.

---

## 4.31 IP Addresses

- Logical addresses
- Internet identity

---

## 4.32 IPv4

- Structure
- Address exhaustion

---

## 4.33 IPv6

- Larger address space
- Future internet

---

## 4.34 Public IP Addresses

- Internet-facing devices

---

## 4.35 Private IP Addresses

- Internal networks

---

## 4.36 Subnets

- Network segmentation

---

## 4.37 CIDR Notation

- Address ranges

---

## 4.38 NAT

- Network Address Translation

---

## 4.39 Ports

- Process identification

Examples:

```text
80   HTTP
443  HTTPS
22   SSH
5432 PostgreSQL
6379 Redis
```

---

# PART 6 — ROUTING ACROSS THE INTERNET

---

## 4.40 Why Routers Exist

Networks need connectors.

---

## 4.41 Routers

- Packet forwarding
- Path selection

---

## 4.42 Routing Tables

- Next hop selection

---

## 4.43 Default Gateway

- Leaving your local network

---

## 4.44 Autonomous Systems

- ISP networks
- Internet organization

---

## 4.45 BGP

- Border Gateway Protocol
- Routing between networks

---

## 4.46 How a Packet Crosses the World

```text
Phone
↓
WiFi
↓
Router
↓
ISP
↓
Autonomous Systems
↓
Destination Network
↓
Server
```

---

# PART 7 — FINDING COMPUTERS

---

## 4.47 The Problem with IP Addresses

Humans remember names.

Computers use numbers.

---

## 4.48 Domain Names

Examples:

```text
google.com
phunsuk.ai
mountainkid.ai
```

---

## 4.49 DNS

- Distributed phonebook

---

## 4.50 DNS Hierarchy

```text
Root
↓
TLD
↓
Authoritative Server
```

---

## 4.51 Root Name Servers

- Internet root

---

## 4.52 Top Level Domains

- .com
- .org
- .net
- .ai
- .in

---

## 4.53 Authoritative Name Servers

- Source of truth

---

## 4.54 Recursive Resolvers

- DNS lookup services

---

## 4.55 DNS Resolution

```text
phunsuk.ai
↓
DNS Query
↓
IP Address
```

---

# PART 8 — RELIABLE COMMUNICATION

---

## 4.56 Why Reliability Is Hard

Problems:

- Packet loss
- Duplication
- Reordering

---

## 4.57 Transport Layer

- End-to-end communication

---

## 4.58 TCP

- Reliable protocol

---

## 4.59 Three-Way Handshake

```text
SYN
↓
SYN-ACK
↓
ACK
```

---

## 4.60 Sequence Numbers

- Ordering packets

---

## 4.61 Acknowledgments

- Confirming delivery

---

## 4.62 Retransmissions

- Recovering lost packets

---

## 4.63 Flow Control

- Receiver protection

---

## 4.64 Congestion Control

- Network protection

---

## 4.65 UDP

- Fast communication

---

## 4.66 TCP vs UDP

Tradeoffs and use cases.

---

# PART 9 — SECURE COMMUNICATION

---

## 4.67 Why Security Exists

- Privacy
- Authentication
- Integrity

---

## 4.68 Symmetric Encryption

- Shared secret keys

---

## 4.69 Asymmetric Encryption

- Public/private keys

---

## 4.70 Hash Functions

- Data fingerprints

---

## 4.71 Digital Signatures

- Identity verification

---

## 4.72 Digital Certificates

- Trusted identities

---

## 4.73 Certificate Authorities

- Internet trust model

---

## 4.74 TLS Handshake

- Secure connection setup

---

## 4.75 HTTPS

```text
HTTP
+
TLS
=
HTTPS
```

---

# PART 10 — APPLICATION PROTOCOLS

---

## 4.76 What Is HTTP?

- Request-response communication

---

## 4.77 HTTP Requests

- Methods
- Headers
- Body

---

## 4.78 HTTP Responses

- Status codes
- Headers
- Content

---

## 4.79 Cookies

- State management

---

## 4.80 Sessions

- User identity

---

## 4.81 HTTP/1.1

- Persistent connections

---

## 4.82 HTTP/2

- Multiplexing

---

## 4.83 HTTP/3

- QUIC transport

---

## 4.84 QUIC

- Modern internet transport

---

## 4.85 WebSockets

- Persistent bidirectional communication

---

## 4.86 gRPC

- Service-to-service communication

---

# PART 11 — THE COMPLETE JOURNEY

---

## 4.87 What Happens When You Open

```text
https://phunsuk.ai
```

---

## 4.88 Browser Processing

- URL parsing

---

## 4.89 DNS Resolution

- Finding the server

---

## 4.90 TCP Connection

- Reliable channel creation

---

## 4.91 TLS Handshake

- Secure channel creation

---

## 4.92 HTTP Request

- Sending the request

---

## 4.93 Packet Routing

- Traversing the internet

---

## 4.94 Server Processing

- Request handling

---

## 4.95 Response Journey

- Returning data

---

## 4.96 Page Rendering

- Browser display

---

# PHASE PROJECT

Build a Mini Internet Simulator

Features:

- DNS simulation
- Router simulation
- TCP handshake simulation
- TLS handshake visualization
- HTTP request/response flow
- Packet routing visualization

---

# END GOAL

You should be able to explain:

```text
Browser
↓
DNS
↓
TCP
↓
TLS
↓
HTTP
↓
Router
↓
ISP
↓
Internet
↓
Server
↓
Response
```

from first principles and understand every layer involved in moving information across the planet.

# PHASE 4 — NETWORKING FUNDAMENTALS

## How Computers Communicate Across the World

---

# Goal

At the end of this phase, you should understand:

```text
Application
↓
HTTP
↓
TLS
↓
TCP
↓
IP
↓
Ethernet
↓
Physical Network
```

And be able to answer:

> What happens when I open https://phunsuk.ai in my browser?

---

# PART 1 — WHY NETWORKING EXISTS

---

## 4.1 The Problem of Isolated Computers

- Standalone computers
- Local information only
- Resource duplication

---

## 4.2 Why Computers Need Networks

- Communication
- Resource sharing
- Remote access
- Distributed systems

---

## 4.3 What Is A Network?

- Definition
- Nodes
- Connections
- Communication channels

---

## 4.4 Types of Networks

- PAN
- LAN
- MAN
- WAN
- Internet

---

## 4.5 Network Topologies

- Bus
- Ring
- Star
- Mesh

---

## 4.6 Physical Networking Hardware

- Network Interface Cards
- Switches
- Routers
- Modems
- Access Points

---

# PART 2 — HOW INFORMATION TRAVELS

---

## 4.7 Information as Data

- Digital information
- Binary transmission

---

## 4.8 Physical Signals

- Electrical signals
- Optical signals
- Radio signals

---

## 4.9 Transmission Media

- Copper cables
- Fiber optics
- Wireless communication

---

## 4.10 The Problem with Large Messages

Problem:

```text
Huge Message
↓
Difficult To Send
```

---

## 4.11 Packet Switching

Solution:

```text
Message
↓
Packets
↓
Network
↓
Reassembled Message
```

---

## 4.12 Packets

- Headers
- Payloads
- Metadata

---

## 4.13 Frames

- Local delivery units
- Data-link communication

---

## 4.14 Bandwidth

- Capacity
- Throughput

---

## 4.15 Latency

- Propagation delay
- Transmission delay
- Processing delay

---

## 4.16 Packet Loss

- Causes
- Recovery

---

## 4.17 Jitter

- Variable latency
- Real-time communication

---

# PART 3 — WHY NETWORKING LAYERS EXIST

---

## 4.18 The Complexity Problem

Without layers:

```text
Everything Handles Everything
```

With layers:

```text
Each Layer Solves One Problem
```

---

## 4.19 Encapsulation

```text
Application Data
↓
TCP Segment
↓
IP Packet
↓
Ethernet Frame
```

---

## 4.20 Decapsulation

Reverse process on the receiving side.

---

## 4.21 OSI Model

```text
Application
Presentation
Session
Transport
Network
Data Link
Physical
```

---

## 4.22 TCP/IP Model

```text
Application
Transport
Internet
Link
```

---

## 4.23 Why TCP/IP Won

- Simplicity
- Practicality
- Internet adoption

---

# PART 4 — LOCAL NETWORK COMMUNICATION

---

## 4.24 MAC Addresses

- Physical device identities

---

## 4.25 Ethernet

- Local wired communication

---

## 4.26 Switches

- Forwarding frames
- MAC tables

---

## 4.27 ARP

Problem:

```text
Know IP
Don't Know MAC
```

Solution:

```text
ARP Request
↓
ARP Reply
```

---

## 4.28 WiFi

- Wireless communication
- Access points
- Wireless frames

---

## 4.29 Sending Data on a Local Network

Complete packet journey.

---

# PART 5 — INTERNET ADDRESSING

---

## 4.30 Why Addresses Exist

Every device needs an identity.

---

## 4.31 IP Addresses

- Logical addresses
- Internet identity

---

## 4.32 IPv4

- Structure
- Address exhaustion

---

## 4.33 IPv6

- Larger address space
- Future internet

---

## 4.34 Public IP Addresses

- Internet-facing devices

---

## 4.35 Private IP Addresses

- Internal networks

---

## 4.36 Subnets

- Network segmentation

---

## 4.37 CIDR Notation

- Address ranges

---

## 4.38 NAT

- Network Address Translation

---

## 4.39 Ports

- Process identification

Examples:

```text
80   HTTP
443  HTTPS
22   SSH
5432 PostgreSQL
6379 Redis
```

---

# PART 6 — ROUTING ACROSS THE INTERNET

---

## 4.40 Why Routers Exist

Networks need connectors.

---

## 4.41 Routers

- Packet forwarding
- Path selection

---

## 4.42 Routing Tables

- Next hop selection

---

## 4.43 Default Gateway

- Leaving your local network

---

## 4.44 Autonomous Systems

- ISP networks
- Internet organization

---

## 4.45 BGP

- Border Gateway Protocol
- Routing between networks

---

## 4.46 How a Packet Crosses the World

```text
Phone
↓
WiFi
↓
Router
↓
ISP
↓
Autonomous Systems
↓
Destination Network
↓
Server
```

---

# PART 7 — FINDING COMPUTERS

---

## 4.47 The Problem with IP Addresses

Humans remember names.

Computers use numbers.

---

## 4.48 Domain Names

Examples:

```text
google.com
phunsuk.ai
mountainkid.ai
```

---

## 4.49 DNS

- Distributed phonebook

---

## 4.50 DNS Hierarchy

```text
Root
↓
TLD
↓
Authoritative Server
```

---

## 4.51 Root Name Servers

- Internet root

---

## 4.52 Top Level Domains

- .com
- .org
- .net
- .ai
- .in

---

## 4.53 Authoritative Name Servers

- Source of truth

---

## 4.54 Recursive Resolvers

- DNS lookup services

---

## 4.55 DNS Resolution

```text
phunsuk.ai
↓
DNS Query
↓
IP Address
```

---

# PART 8 — RELIABLE COMMUNICATION

---

## 4.56 Why Reliability Is Hard

Problems:

- Packet loss
- Duplication
- Reordering

---

## 4.57 Transport Layer

- End-to-end communication

---

## 4.58 TCP

- Reliable protocol

---

## 4.59 Three-Way Handshake

```text
SYN
↓
SYN-ACK
↓
ACK
```

---

## 4.60 Sequence Numbers

- Ordering packets

---

## 4.61 Acknowledgments

- Confirming delivery

---

## 4.62 Retransmissions

- Recovering lost packets

---

## 4.63 Flow Control

- Receiver protection

---

## 4.64 Congestion Control

- Network protection

---

## 4.65 UDP

- Fast communication

---

## 4.66 TCP vs UDP

Tradeoffs and use cases.

---

# PART 9 — SECURE COMMUNICATION

---

## 4.67 Why Security Exists

- Privacy
- Authentication
- Integrity

---

## 4.68 Symmetric Encryption

- Shared secret keys

---

## 4.69 Asymmetric Encryption

- Public/private keys

---

## 4.70 Hash Functions

- Data fingerprints

---

## 4.71 Digital Signatures

- Identity verification

---

## 4.72 Digital Certificates

- Trusted identities

---

## 4.73 Certificate Authorities

- Internet trust model

---

## 4.74 TLS Handshake

- Secure connection setup

---

## 4.75 HTTPS

```text
HTTP
+
TLS
=
HTTPS
```

---

# PART 10 — APPLICATION PROTOCOLS

---

## 4.76 What Is HTTP?

- Request-response communication

---

## 4.77 HTTP Requests

- Methods
- Headers
- Body

---

## 4.78 HTTP Responses

- Status codes
- Headers
- Content

---

## 4.79 Cookies

- State management

---

## 4.80 Sessions

- User identity

---

## 4.81 HTTP/1.1

- Persistent connections

---

## 4.82 HTTP/2

- Multiplexing

---

## 4.83 HTTP/3

- QUIC transport

---

## 4.84 QUIC

- Modern internet transport

---

## 4.85 WebSockets

- Persistent bidirectional communication

---

## 4.86 gRPC

- Service-to-service communication

---

# PART 11 — THE COMPLETE JOURNEY

---

## 4.87 What Happens When You Open

```text
https://phunsuk.ai
```

---

## 4.88 Browser Processing

- URL parsing

---

## 4.89 DNS Resolution

- Finding the server

---

## 4.90 TCP Connection

- Reliable channel creation

---

## 4.91 TLS Handshake

- Secure channel creation

---

## 4.92 HTTP Request

- Sending the request

---

## 4.93 Packet Routing

- Traversing the internet

---

## 4.94 Server Processing

- Request handling

---

## 4.95 Response Journey

- Returning data

---

## 4.96 Page Rendering

- Browser display

---

# PHASE PROJECT

Build a Mini Internet Simulator

Features:

- DNS simulation
- Router simulation
- TCP handshake simulation
- TLS handshake visualization
- HTTP request/response flow
- Packet routing visualization

---

# END GOAL

You should be able to explain:

```text
Browser
↓
DNS
↓
TCP
↓
TLS
↓
HTTP
↓
Router
↓
ISP
↓
Internet
↓
Server
↓
Response
```

from first principles and understand every layer involved in moving information across the planet.

MATH CURRICULUM

# PHASE 0 — FOUNDATIONS OF MATHEMATICS

## From Reality to Abstraction

---

# Goal

Most students think mathematics is:

```text
Numbers
Formulas
Equations
```

This is wrong.

Mathematics is actually humanity's system for:

```text
Observing Reality
↓
Finding Patterns
↓
Creating Abstractions
↓
Building Models
↓
Making Predictions
```

At the end of this phase, students should be able to answer:

> What is mathematics?

> Why was mathematics invented?

> Why does mathematics describe the universe so effectively?

> Why is mathematics the foundation of science, engineering, computing, AI, and civilization itself?

This phase contains almost no calculations.

Instead, it builds the mental model required for the rest of mathematics.

---

# PART 1 — THE BIRTH OF MATHEMATICS

Understanding why mathematics exists.

---

## 0.1 The World Before Mathematics

### Central Question

How did humans survive before mathematics existed?

### Journey

```text
Nature
↓
Observation
↓
Experience
↓
Primitive Decisions
```

### Topics

- Early human societies
- Hunting and gathering
- Tracking animals
- Measuring seasons
- Estimating distance
- Counting resources

### Key Insight

Mathematics did not begin with numbers.

It began with problems.

### Real World Examples

- Tracking food supplies
- Measuring farmland
- Predicting floods
- Organizing trade

### Project

List ten problems in your daily life that require measurement.

---

## 0.2 What Is Mathematics?

### Central Question

What exactly is mathematics?

### Journey

```text
Reality
↓
Patterns
↓
Abstractions
↓
Mathematics
```

### Topics

- Mathematics as a language
- Mathematics as a modeling system
- Mathematics as abstraction
- Mathematics as compression
- Mathematics as prediction

### Key Insight

Mathematics is not about numbers.

Mathematics is about patterns.

### Examples

```text
Apples
Cars
People
Planets
```

All can be represented using the same mathematical ideas.

### Engineering Connection

Every software system is a mathematical model.

---

## 0.3 Why Mathematics Works

### Central Question

Why can mathematics predict reality?

### Topics

- Patterns in nature
- Repetition
- Symmetry
- Cause and effect
- Natural laws

### Examples

- Day and night
- Seasons
- Planetary motion
- Population growth

### Key Insight

The universe contains structure.

Mathematics describes that structure.

---

## 0.4 Mathematics as Compression

### Central Question

Why invent symbols and formulas?

### Problem

Without abstraction:

```text
1 apple
2 apples
3 apples
4 apples
...
```

With abstraction:

```text
Number
```

### Topics

- Information compression
- Generalization
- Symbolic thinking

### Computing Connection

Programming languages are compression systems.

Functions are compression systems.

Databases are compression systems.

---

## 0.5 Mathematics as Prediction

### Central Question

Why is mathematics powerful?

### Topics

- Prediction
- Forecasting
- Modeling

### Examples

- Weather
- Physics
- Finance
- AI

### Project

Find three examples where mathematics predicts future events.

---

# PART 2 — LOGIC

The foundation of reasoning.

---

## 0.6 What Is Truth?

### Central Question

How do we know something is true?

### Topics

- Facts
- Claims
- Assumptions
- Evidence

### Examples

```text
The Earth orbits the Sun.
2 + 2 = 4.
```

### Key Insight

Before mathematics comes logic.

---

## 0.7 What Is Logic?

### Central Question

How does reasoning work?

### Journey

```text
Statements
↓
Rules
↓
Reasoning
↓
Conclusions
```

### Topics

- Propositions
- Truth values
- Deduction
- Reasoning systems

### Computing Connection

CPUs are logic machines.

---

## 0.8 Logical Systems

### Topics

- AND
- OR
- NOT
- XOR

### Why They Exist

To combine truths into larger truths.

### Engineering Connection

Logic gates.

Programming conditions.

Database filters.

---

## 0.9 Truth Tables

### Central Question

How can reasoning become mechanical?

### Topics

- Truth tables
- Evaluation
- Decision systems

### Project

Build a truth table generator in Rust.

---

## 0.10 Logic in Computing

### Topics

- CPUs
- Logic gates
- Conditionals
- Algorithms

### Key Insight

Every computer is a giant logic machine.

---

# PART 3 — SETS

The language of modern mathematics.

---

## 0.11 Why Sets Exist

### Central Question

How do we describe collections?

### Problem

Humans constantly group things.

Examples:

```text
Students
Customers
Products
Servers
```

### Solution

Sets.

---

## 0.12 Collections and Membership

### Topics

- Sets
- Elements
- Membership

### Computing Connection

Arrays.

Lists.

Database tables.

---

## 0.13 Set Operations

### Topics

- Union
- Intersection
- Difference
- Complements

### Real World Examples

Customer segmentation.

Search engines.

Database queries.

---

## 0.14 Sets in Computing

### Topics

- SQL
- Databases
- Search systems
- Distributed systems

### Project

Build a set operations library in Rust.

---

# PART 4 — NUMBERS

Humanity's greatest abstraction.

---

## 0.15 What Is A Number?

### Central Question

What exactly is a number?

### Topics

- Counting
- Measurement
- Quantity

### Key Insight

Numbers do not physically exist.

They are abstractions.

---

## 0.16 Evolution of Number Systems

### Journey

```text
Counting
↓
Natural Numbers
↓
Integers
↓
Fractions
↓
Reals
↓
Complex Numbers
```

### Why New Number Systems Were Invented

Each solved a limitation of the previous one.

---

## 0.17 Natural Numbers

### Problem Solved

Counting objects.

---

## 0.18 Integers

### Problem Solved

Representing debt and direction.

---

## 0.19 Rational Numbers

### Problem Solved

Representing portions.

---

## 0.20 Real Numbers

### Problem Solved

Representing continuous measurements.

---

## 0.21 Complex Numbers

### Problem Solved

Solving previously impossible equations.

### Engineering Connection

Signal processing.

Electrical engineering.

Quantum mechanics.

---

# PART 5 — MATHEMATICAL THINKING

How mathematicians and engineers think.

---

## 0.22 Abstraction

### Central Question

How do humans simplify reality?

### Examples

```text
3 apples
3 books
3 cars
```

becomes

```text
3
```

---

## 0.23 Generalization

### Central Question

How do we discover universal rules?

---

## 0.24 Modeling Reality

### Topics

- Models
- Assumptions
- Constraints

### Examples

- Physics
- Economics
- Software

---

## 0.25 Problem Solving

### Engineering Process

```text
Problem
↓
Model
↓
Solution
↓
Validation
```

### Project

Model a coffee shop mathematically.

---

# PART 6 — PROOF

Why mathematics can be trusted.

---

## 0.26 Why Proof Exists

### Central Question

How do we know mathematics is correct?

---

## 0.27 Axioms

### Topics

- Foundational assumptions
- Mathematical systems

---

## 0.28 Proofs

### Topics

- Direct proof
- Contradiction
- Construction

---

## 0.29 Mathematical Certainty

### Key Insight

Mathematics is humanity's strongest system for producing certainty.

---

# PART 7 — MATHEMATICS AND CIVILIZATION

Why mathematics changed the world.

---

## 0.30 Mathematics and Physics

How mathematics describes nature.

---

## 0.31 Mathematics and Computing

How mathematics became software.

---

## 0.32 Mathematics and AI

How mathematics became intelligence.

---

## 0.33 Mathematics and Finance

How mathematics became markets.

---

## 0.34 Mathematics and Engineering

How mathematics became machines.

---

## 0.35 The Great Branches of Mathematics

Preview of the entire journey:

```text
Arithmetic
↓
Algebra
↓
Functions
↓
Geometry
↓
Trigonometry
↓
Discrete Mathematics
↓
Probability
↓
Statistics
↓
Linear Algebra
↓
Calculus
↓
Optimization
↓
Information Theory
↓
AI Mathematics
```

---

# PHASE PROJECT

Create a Mathematical Map of Civilization.

Show:

```text
Reality
↓
Patterns
↓
Mathematics
↓
Science
↓
Engineering
↓
Technology
```

Then explain:

- Why each branch exists
- What problem it solves
- Which industries use it
- Which software systems depend on it

---

# END GOAL

The student should leave this phase understanding:

```text
Reality
↓
Observation
↓
Patterns
↓
Abstraction
↓
Logic
↓
Sets
↓
Numbers
↓
Mathematics
↓
Science
↓
Engineering
↓
Technology
```

And be able to answer:

> Why does mathematics exist?

> Why does it work?

> Why is it the foundation of every major technological civilization?

Most importantly:

```text
Mathematics
≠
Numbers

Mathematics
=
The study of patterns and abstractions that describe reality.
```

# PHASE 1 — ARITHMETIC

## The Mathematics of Quantity

---

# Goal

At the end of this phase, students should understand:

```text
Objects
↓
Counting
↓
Numbers
↓
Operations
↓
Measurement
↓
Arithmetic
```

And be able to answer:

> Why do numbers exist?

> Why were arithmetic operations invented?

> How do humans represent and manipulate quantities?

> Why is arithmetic the foundation of science, engineering, finance, and computing?

This phase is not about memorizing calculations.

It is about understanding quantity itself.

---

# PART 1 — THE INVENTION OF NUMBERS

Understanding why numbers exist.

---

## 1.1 Life Before Numbers

### Central Question

How did humans count before numbers existed?

### Journey

```text
Objects
↓
Memory
↓
Marks
↓
Counting
↓
Numbers
```

### Topics

- Early human civilizations
- Tracking animals
- Tracking food
- Resource management
- Trade and exchange

### Historical Problem

Imagine a shepherd with:

```text
137 sheep
```

How does he know:

```text
Did all sheep return?
```

Without counting, he cannot.

### Key Insight

Numbers were invented to track reality.

### Project

List ten situations in daily life where counting is required.

---

## 1.2 What Is Quantity?

### Central Question

What are numbers actually measuring?

### Topics

- Quantity vs Identity
- More vs Less
- Equal vs Unequal
- Comparison

### Examples

```text
3 Apples
3 Cars
3 Buildings
```

Different objects.

Same quantity.

### Key Insight

Numbers measure quantity, not objects.

---

## 1.3 One-to-One Correspondence

### Central Question

What was humanity's first counting system?

### Topics

- Primitive counting
- Matching objects
- Tokens
- Stones

### Example

```text
1 Sheep
↓
1 Stone
```

### Why It Matters

This idea becomes the foundation of counting.

---

## 1.4 Birth of Number Systems

### Topics

- Egyptian numbers
- Roman numerals
- Babylonian systems
- Indian numerals

### Historical Story

How humanity gradually invented modern numbers.

### Computing Connection

Every computer today still depends on number systems.

---

## 1.5 Why Zero Changed Civilization

### Central Question

Why is zero one of humanity's greatest inventions?

### Topics

- Nothingness
- Placeholders
- Positional notation

### Examples

```text
10
100
1000
```

Without zero:

```text
Impossible
```

### Engineering Connection

Computers depend on zero.

---

# PART 2 — POSITIONAL NUMBER SYSTEMS

Understanding how numbers scale.

---

## 1.6 Why Place Value Exists

### Problem

Roman numerals become difficult:

```text
MMMDCCCLXXXVIII
```

### Solution

Positional systems.

---

## 1.7 Base-10 System

### Topics

- Digits
- Positions
- Powers of ten

### Why Base 10?

Likely because humans have ten fingers.

---

## 1.8 Understanding Place Value

Example:

```text
583
```

actually means:

```text
5 × 100
+
8 × 10
+
3 × 1
```

### Project

Break large numbers into place values.

---

## 1.9 Large Numbers

### Topics

- Thousands
- Millions
- Billions
- Trillions

### Real World Applications

- GDP
- Population
- Finance

---

## 1.10 Scientific Notation (Preview)

### Why It Exists

Representing:

```text
Very Large Numbers
Very Small Numbers
```

---

# PART 3 — ADDITION

Combining quantities.

---

## 1.11 Why Addition Exists

### Human Problem

Combining resources.

Example:

```text
5 Apples
+
3 Apples
```

### Result

```text
8 Apples
```

### Key Insight

Addition models accumulation.

---

## 1.12 Addition as Combining Reality

### Topics

- Resource aggregation
- Inventory management
- Population counting

### Business Connection

Revenue accumulation.

---

## 1.13 Properties of Addition

### Topics

- Commutative
- Associative
- Identity

### Why They Matter

Makes mathematics predictable.

---

## 1.14 Addition in Computing

### Topics

- CPU arithmetic
- Binary addition
- Registers

---

# PART 4 — SUBTRACTION

Removing quantities.

---

## 1.15 Why Subtraction Exists

### Human Problem

Tracking losses.

Example:

```text
10 Apples
-
3 Apples
```

---

## 1.16 Difference as Information

### Topics

- Comparing quantities
- Resource tracking
- Inventory management

---

## 1.17 Negative Results

### Problem

What happens if:

```text
3 - 5
```

### Leads To

```text
Integers
```

---

## 1.18 Subtraction in Finance

Examples:

- Debt
- Losses
- Expenses

---

# PART 5 — MULTIPLICATION

Scaling quantities.

---

## 1.19 Why Multiplication Exists

### Human Problem

Repeated addition is inefficient.

Example:

```text
10 + 10 + 10 + 10 + 10
```

### Better Representation

```text
5 × 10
```

---

## 1.20 Multiplication as Compression

### Key Insight

Multiplication compresses repeated addition.

---

## 1.21 Area and Multiplication

### Visual Interpretation

Rectangle:

```text
Length × Width
```

### Connection

Geometry begins here.

---

## 1.22 Exponential Growth Preview

Repeated multiplication creates growth.

Examples:

- Startups
- Viruses
- AI Scaling

---

## 1.23 Multiplication in Computing

### Topics

- CPU arithmetic
- Matrix multiplication
- AI

---

# PART 6 — DIVISION

Distributing quantities.

---

## 1.24 Why Division Exists

### Human Problem

Sharing resources.

Example:

```text
20 Apples
÷
4 People
```

---

## 1.25 Division as Fairness

### Topics

- Distribution
- Allocation
- Resource planning

---

## 1.26 Remainders

### Why They Exist

Reality isn't always perfectly divisible.

---

## 1.27 Division in Engineering

Examples:

- Load balancing
- Scheduling
- Distributed systems

---

# PART 7 — FRACTIONS

Representing incomplete quantities.

---

## 1.28 Why Fractions Exist

### Problem

Reality is not always whole numbers.

Examples:

```text
Half Pizza
Quarter Acre
One Third Ownership
```

---

## 1.29 Parts and Wholes

### Topics

- Numerator
- Denominator

---

## 1.30 Equivalent Fractions

### Why They Matter

Different representations.

Same value.

---

## 1.31 Fractions in Engineering

Examples:

- Measurements
- Ratios
- Precision systems

---

# PART 8 — DECIMALS

Making fractions practical.

---

## 1.32 Why Decimals Exist

### Problem

Fractions become cumbersome.

### Solution

Decimal notation.

---

## 1.33 Place Values Beyond Integers

### Topics

- Tenths
- Hundredths
- Thousandths

---

## 1.34 Precision and Accuracy

### Engineering Importance

Every physical system depends on precision.

---

## 1.35 Floating Point Preview

Computers store decimals imperfectly.

---

# PART 9 — PERCENTAGES

The language of comparison.

---

## 1.36 Why Percentages Exist

### Human Problem

Comparing quantities fairly.

---

## 1.37 Percent Means "Per Hundred"

### Topics

- Percentages
- Rates
- Comparisons

---

## 1.38 Growth and Decline

Examples:

- Revenue growth
- Population growth
- Inflation

---

## 1.39 Percentages in Business

Examples:

- Profit margins
- Taxes
- Discounts

---

# PART 10 — RATIOS

Comparing relationships.

---

## 1.40 Why Ratios Exist

### Human Problem

Understanding relationships.

Example:

```text
2 Engineers
:
1 Designer
```

---

## 1.41 Ratios as Models

### Topics

- Relationships
- Proportions

---

## 1.42 Scaling Systems

Examples:

- Recipes
- Manufacturing
- Infrastructure

---

## 1.43 Ratios in Engineering

Examples:

- Compression ratios
- Gear ratios
- Aspect ratios

---

# PART 11 — EXPONENTS

The mathematics of scaling.

---

## 1.44 Why Exponents Exist

### Human Problem

Repeated multiplication.

---

## 1.45 Exponential Growth

Examples:

- AI
- Startups
- Compound interest

---

## 1.46 Powers of Ten

### Topics

- Scientific notation
- Large numbers

---

## 1.47 Why Exponentials Rule Civilization

Many important systems are exponential.

---

# PART 12 — NUMBER THEORY FOUNDATIONS

Understanding numbers deeply.

---

## 1.48 Prime Numbers

### Central Question

What are the building blocks of numbers?

---

## 1.49 Factors and Multiples

---

## 1.50 Prime Factorization

### Key Insight

Numbers can be decomposed.

---

## 1.51 Why Primes Matter

Examples:

- Cryptography
- Security
- Blockchain

---

# PART 13 — ARITHMETIC AND COMPUTING

---

## 1.52 Binary Arithmetic

Why computers use binary.

---

## 1.53 Arithmetic Inside CPUs

---

## 1.54 Integer Overflow

---

## 1.55 Floating Point Numbers

---

## 1.56 Arithmetic and Algorithms

---

## 1.57 Arithmetic and Databases

---

## 1.58 Arithmetic and AI

---

# PART 14 — ARITHMETIC AND CIVILIZATION

---

## 1.59 Arithmetic and Trade

---

## 1.60 Arithmetic and Finance

---

## 1.61 Arithmetic and Engineering

---

## 1.62 Arithmetic and Science

---

## 1.63 Arithmetic and Computing

---

## 1.64 Arithmetic and Modern Society

---

# PHASE PROJECT

Build a Mathematical Quantity Engine in Rust.

Features:

```text
Counting
↓
Addition
↓
Subtraction
↓
Multiplication
↓
Division
↓
Fractions
↓
Decimals
↓
Percentages
↓
Ratios
↓
Exponents
```

Implement:

- Calculator
- Fraction engine
- Percentage calculator
- Financial calculator

---

# END GOAL

Students should understand:

```text
Objects
↓
Counting
↓
Numbers
↓
Operations
↓
Measurement
↓
Arithmetic
```

And be able to answer:

> Why do numbers exist?

> Why were arithmetic operations invented?

> How does arithmetic model the real world?

Most importantly:

```text
Arithmetic
=
The Mathematics of Quantity
```

Everything else in mathematics is built on top of this foundation.
