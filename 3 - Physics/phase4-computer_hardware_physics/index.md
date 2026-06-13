# PHASE 4 — COMPUTER HARDWARE PHYSICS

## How Transistors Become Computers

---

# Goal

At the end of this phase you should understand:

```text
Electrons
↓
Transistors
↓
Logic Gates
↓
Registers
↓
Memory
↓
CPU
↓
Motherboard
↓
Computer
```

And be able to answer:

> How does a computer physically work?

> How does a CPU execute instructions?

> How does RAM store information?

> What actually happens when software runs?

> How do CPUs communicate with memory?

> Why are modern computers fast?

> How does a motherboard connect everything together?

This phase bridges:

```text
Physics
↓
Electronics
↓
Computer Architecture
↓
Operating Systems
↓
Software Engineering
```

At this point you stop viewing computers as:

```text
Magic Boxes
```

and start viewing them as:

```text
Physical Systems
```

---

# PART 1 — FROM TRANSISTORS TO COMPUTERS

---

## 4.1 The Big Picture

Understanding:

```text
Electron
↓
Transistor
↓
Logic Gate
↓
Circuit
↓
CPU
↓
Computer
```

---

## 4.2 Why Logic Gates Are Not Enough

A single gate can perform:

```text
AND

OR

NOT
```

But cannot run software.

---

## 4.3 Combining Gates

Building larger systems.

Examples:

- Adders
- Multiplexers
- Comparators
- Encoders

---

## 4.4 Computation As Circuit Design

Understanding:

```text
Circuits
=
Algorithms In Hardware
```

---

## 4.5 The Birth Of Computer Architecture

The transition from:

```text
Logic
```

to

```text
Computing Machines
```

---

# PART 2 — STORING INFORMATION

The problem of memory.

---

## 4.6 Why Memory Exists

Without memory:

```text
No Programs

No State

No Computation
```

---

## 4.7 What Is Memory?

Definition:

```text
The Ability
To Store Information
Over Time
```

---

## 4.8 The Problem Of State

Computers must remember:

- Numbers
- Instructions
- Addresses
- Results

---

## 4.9 Latches

The first memory devices.

---

## 4.10 SR Latch

Understanding feedback circuits.

---

## 4.11 Flip-Flops

Reliable storage.

---

## 4.12 Bits As Physical State

Understanding:

```text
Voltage
↓
Bit
```

---

## 4.13 Registers

Small groups of flip-flops.

---

## 4.14 Register Operations

- Read
- Write
- Hold

---

## 4.15 Why Registers Matter

The fastest memory in existence.

---

# PART 3 — BUILDING A CPU

The birth of computation.

---

## 4.16 Why CPUs Exist

Humans needed machines that could:

```text
Follow Instructions
```

---

## 4.17 What Is A CPU?

Definition:

```text
A General Purpose
Instruction Processing Machine
```

---

## 4.18 CPU Components

```text
Control Unit

ALU

Registers

Clock
```

---

## 4.19 Arithmetic Logic Unit (ALU)

The computation engine.

---

## 4.20 Addition Circuits

Building arithmetic.

---

## 4.21 Comparison Circuits

Building decision making.

---

## 4.22 Control Unit

The coordinator.

---

## 4.23 Program Counter

Tracking execution.

---

## 4.24 Instruction Register

Current instruction storage.

---

## 4.25 The CPU As A State Machine

Understanding execution.

---

# PART 4 — THE CLOCK

The heartbeat of computation.

---

## 4.26 Why Timing Matters

Billions of components must coordinate.

---

## 4.27 What Is A Clock?

Definition:

```text
A Synchronization Signal
```

---

## 4.28 Clock Cycles

Understanding timing.

---

## 4.29 Clock Frequency

Examples:

```text
1 GHz

2 GHz

5 GHz
```

---

## 4.30 What Does GHz Mean?

Understanding:

```text
Cycles Per Second
```

---

## 4.31 Clock And Flip-Flops

Synchronization.

---

## 4.32 Why Faster Is Harder

Physical limitations.

---

# PART 5 — MACHINE INSTRUCTIONS

The language of CPUs.

---

## 4.33 Why Instructions Exist

Computers need commands.

---

## 4.34 What Is An Instruction?

Examples:

```text
ADD

SUB

LOAD

STORE

JUMP
```

---

## 4.35 Opcodes

Instruction identification.

---

## 4.36 Operands

Instruction data.

---

## 4.37 Instruction Formats

How instructions are represented.

---

## 4.38 Machine Code

Binary instructions.

---

## 4.39 Assembly Language

Human-readable machine code.

---

## 4.40 Why CPUs Understand Binary

Physical implementation.

---

# PART 6 — PROGRAM EXECUTION

How software actually runs.

---

## 4.41 The Fetch-Decode-Execute Cycle

The most important loop in computing.

---

## 4.42 Fetch

Loading instructions.

---

## 4.43 Decode

Understanding instructions.

---

## 4.44 Execute

Performing work.

---

## 4.45 Memory Access

Reading and writing data.

---

## 4.46 Write Back

Saving results.

---

## 4.47 Continuous Execution

Understanding:

```text
Fetch
↓
Decode
↓
Execute
↓
Repeat
```

---

# PART 7 — MAIN MEMORY

Scaling storage.

---

## 4.48 Why Registers Are Not Enough

Registers are tiny.

---

## 4.49 RAM

Random Access Memory.

---

## 4.50 SRAM

Static RAM.

---

## 4.51 DRAM

Dynamic RAM.

---

## 4.52 Why DRAM Needs Refreshing

Understanding charge leakage.

---

## 4.53 Memory Cells

Physical storage structures.

---

## 4.54 Memory Addresses

Locating information.

---

## 4.55 Address Buses

Accessing memory.

---

## 4.56 Data Buses

Transferring information.

---

# PART 8 — CACHE MEMORY

The secret behind CPU speed.

---

## 4.57 The CPU-RAM Problem

Understanding latency.

---

## 4.58 Why Cache Exists

Reducing delays.

---

## 4.59 L1 Cache

Fastest cache.

---

## 4.60 L2 Cache

Intermediate cache.

---

## 4.61 L3 Cache

Shared cache.

---

## 4.62 Cache Hits

Fast access.

---

## 4.63 Cache Misses

Slow access.

---

## 4.64 Locality

The reason caches work.

---

## 4.65 Modern Memory Hierarchy

```text
Registers
↓
L1
↓
L2
↓
L3
↓
RAM
↓
SSD
```

---

# PART 9 — STORAGE DEVICES

Persistent memory.

---

## 4.66 Why Storage Exists

RAM forgets.

Storage remembers.

---

## 4.67 Hard Disk Drives

Magnetic storage.

---

## 4.68 SSDs

Flash storage.

---

## 4.69 NAND Flash

Semiconductor storage.

---

## 4.70 Reading Data

Storage retrieval.

---

## 4.71 Writing Data

Persistence.

---

## 4.72 Why SSDs Wear Out

Physical limitations.

---

# PART 10 — SYSTEM INTERCONNECTS

Connecting components.

---

## 4.73 The Communication Problem

CPUs must talk to:

- RAM
- SSD
- GPU
- Network Cards

---

## 4.74 Buses

Shared communication pathways.

---

## 4.75 Address Bus

---

## 4.76 Data Bus

---

## 4.77 Control Bus

---

## 4.78 PCI Express

Modern expansion interface.

---

## 4.79 Memory Controllers

Managing RAM communication.

---

## 4.80 Chipsets

System coordination.

---

# PART 11 — MOTHERBOARDS

The nervous system of computers.

---

## 4.81 What Is A Motherboard?

---

## 4.82 CPU Socket

---

## 4.83 RAM Slots

---

## 4.84 Storage Interfaces

---

## 4.85 Power Delivery Systems

---

## 4.86 Expansion Slots

---

## 4.87 System Integration

How everything connects.

---

# PART 12 — MODERN PROCESSOR ARCHITECTURE

Why CPUs became incredibly fast.

---

## 4.88 Instruction Pipelines

---

## 4.89 Superscalar Execution

---

## 4.90 Branch Prediction

---

## 4.91 Out-Of-Order Execution

---

## 4.92 SIMD

---

## 4.93 Multi-Core CPUs

---

## 4.94 Hyperthreading

---

## 4.95 Modern Performance Engineering

---

# PART 13 — GPUS

Specialized computation.

---

## 4.96 Why GPUs Exist

---

## 4.97 CPU vs GPU

---

## 4.98 Parallel Processing

---

## 4.99 Graphics Pipelines

---

## 4.100 AI Computation

---

## 4.101 GPU Memory

---

## 4.102 CUDA And Accelerators

---

# PART 14 — THE PHYSICS OF SOFTWARE

Connecting code to hardware.

---

## 4.103 What Happens When You Run A Program?

Understanding:

```text
Source Code
↓
Compiler
↓
Machine Code
↓
CPU Instructions
↓
Transistor Switching
↓
Electrons
```

---

## 4.104 What Happens During A Function Call?

---

## 4.105 What Happens During Memory Allocation?

---

## 4.106 What Happens During File Access?

---

## 4.107 What Happens During Database Queries?

---

## 4.108 What Happens During AI Inference?

---

## 4.109 Every Software Operation Is Physics

Understanding:

```text
Software
=
Controlled Physics
```

---

# PART 15 — THE PHILOSOPHY OF COMPUTER HARDWARE

---

## 4.110 Information As Physical State

---

## 4.111 Computation As State Transformation

---

## 4.112 Memory As Preserved State

---

## 4.113 CPUs As Universal Machines

---

## 4.114 Hardware As Frozen Algorithms

---

## 4.115 Civilization Built On Silicon

---

# PHASE PROJECT

Build A Computer From First Principles (Simulation)

Implement:

```text
Transistors
↓
Logic Gates
↓
Registers
↓
ALU
↓
Memory
↓
CPU
↓
Instruction Set
↓
Assembler
↓
Mini Computer
```

Bonus:

Build a complete 8-bit CPU emulator in Rust.

---

# END GOAL

you should understand:

```text
Electrons
↓
Transistors
↓
Logic Gates
↓
Registers
↓
Memory
↓
CPU
↓
Motherboard
↓
Computer
↓
Software
```

And be able to answer:

> How does a computer physically work?

> How does a CPU execute instructions?

> How does RAM store information?

> Why are modern CPUs fast?

> What actually happens when software runs?

Most importantly:

```text
Computer
=
A Machine That Manipulates
Physical States
To Process Information
```

Every operating system, database, browser, compiler, blockchain, and AI model ultimately runs because billions of transistors are continuously changing physical states inside silicon.
