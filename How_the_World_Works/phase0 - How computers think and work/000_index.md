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
