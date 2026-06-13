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
