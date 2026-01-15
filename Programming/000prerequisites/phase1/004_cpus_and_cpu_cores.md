# CPUs and CPU Cores: The Brain of the Computer

## Introduction

We've explored the kernel—the software that manages your computer. Now it's time to understand the **hardware that actually executes that software**: the **CPU (Central Processing Unit)** and **CPU cores**.

The CPU is the **execution engine** of your computer. Every single instruction in your programs (from adding numbers to rendering graphics to fetching web pages) ultimately executes on the CPU. Understanding how CPUs work is essential for writing efficient, high-performance code.

In this article, we'll explore what a CPU is, how cores work, and how they execute your programs.

## Prerequisites

Before reading this article, you should understand:

- The kernel and its functions (Article 003)
- Basic concepts: processes, threads, memory
- The boot sequence (Article 001)

## What is a CPU?

### Simple Definition

A **CPU (Central Processing Unit)** is the **hardware component** that executes instructions from programs. It's the brain of your computer that performs calculations, makes decisions, and controls other hardware components.

### CPU's Job: The Instruction Processor

The CPU's fundamental job is simple but repetitive:

1. **Fetch** an instruction from memory
2. **Decode** what the instruction does
3. **Execute** the instruction
4. **Repeat** forever

This is called the **fetch-execute cycle** (or instruction cycle), and it's the heartbeat of every computer.

CPU Fetch-Execute Cycle Flowchart

## Anatomy of a CPU

A modern CPU contains many components working together. Here's the essential structure:

```
┌─────────────────────────────────────────────────────────────┐
│                        CPU                                  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │ Program     │  │ Instruction │  │ Control Unit        │ │
│  │ Counter (PC)│  │ Register    │  │ (Decodes & directs) │ │
│  │ (Next addr) │  │ (IR)        │  │                     │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
│                    │                   │                    │
│                    ▼                   ▼                    │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ Arithmetic Logic Unit (ALU)                        │  │
│  │ Performs: ADD, SUB, MUL, DIV, AND, OR, NOT, CMP    │  │
│  └─────────────────────────────────────────────────────┘  │
│                    ▲                   │                    │
│                    │                   │                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│  │ Register    │  │ Register    │  │ Register    │      │
│  │ R0 (data)   │  │ R1 (data)   │  │ R15 (temp)  │      │
│  └─────────────┘  └─────────────┘  └─────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Key CPU Components

| Component                       | Purpose                                                     |
| :------------------------------ | :---------------------------------------------------------- |
| **Program Counter (PC)**        | Holds the memory address of the next instruction to execute |
| **Instruction Register (IR)**   | Holds the current instruction being executed                |
| **ALU (Arithmetic Logic Unit)** | Performs calculations and logical operations                |
| **Registers**                   | Small, ultra-fast storage for data being processed          |
| **Control Unit**                | Decodes instructions and directs other components           |
| **Bus Interface**               | Connects CPU to memory and other hardware                   |

### Registers: The CPU's Scratchpad

**Registers** are tiny, ultra-fast memory locations inside the CPU (typically 16-32 in a modern CPU).

```
Example x86-64 Registers:
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ RAX (64-bit)│ │ RBX (64-bit)│ │ RCX (64-bit)│
│ Accumulator │ │ Base        │ │ Counter     │
├─────────────┤ ├─────────────┤ ├─────────────┤
│ RAX (32-bit)│ │ RBX (32-bit)│ │ RCX (32-bit)│
│ EAX         │ │ EBX         │ │ ECX         │
└─────────────┘ └─────────────┘ └─────────────┘
```

**Registers are 1000x faster** than RAM because:

- Located **inside the CPU**
- No address translation needed
- Direct electrical connections
- No cache misses

**Why registers matter**: Code runs fastest when data is in registers.

## CPU Cores: Multiple Execution Units

### What is a CPU Core?

A **CPU core** is an **independent execution unit** within the CPU. Each core can execute instructions independently.

```
Single-Core CPU:                  Multi-Core CPU (4 cores):
┌─────────────────┐              ┌───────────────┐ ┌───────────────┐
│                 │              │              │ │              │
│   Core 1        │              │    Core 1    │ │    Core 2    │
│                 │              │              │ │              │
└─────────────────┘              └───────────────┘ └───────────────┘
                                        │                    │
                                  ┌───────────────┐ ┌───────────────┐
                                  │    Core 3    │ │    Core 4    │
                                  │              │ │              │
                                  └───────────────┘ └───────────────┘
```

### Why Multiple Cores?

Modern computers have **multiple cores** (typically 4-16) because:

1. **True Parallelism**: Multiple cores can execute instructions simultaneously
2. **Better Performance**: More work gets done in parallel
3. **Power Efficiency**: Multiple smaller cores are more efficient than one giant core
4. **Responsive Systems**: Background tasks don't slow down foreground tasks

### Core vs Thread vs Process

| Concept     | What It Is                           | Number Available      |
| :---------- | :----------------------------------- | :-------------------- |
| **Core**    | Physical hardware execution unit     | 4-16 (depends on CPU) |
| **Thread**  | Software execution unit (OS-managed) | 100s-1000s (OS limit) |
| **Process** | Running program with memory space    | 100s (memory limit)   |

**Key Point**: You have **limited cores** but can run **many threads**. The OS scheduler assigns threads to cores.

## The Fetch-Execute Cycle: How CPUs Execute Instructions

The **fetch-execute cycle** is the fundamental operation of every CPU. Here's exactly how it works:

### Step-by-Step Cycle

```
1. FETCH (Green)
   PC → Memory Address → Fetch Instruction → IR

2. DECODE (Blue)
   IR → Control Unit → Decode → Generate Control Signals

3. EXECUTE (Orange)
   ALU + Registers → Perform Operation → Result in Register

4. WRITEBACK (Purple)
   Update Registers/Memory
   PC = PC + 4 (next instruction)

5. REPEAT
```

**See the flowchart above for visual representation.**

### Example: Adding Two Numbers

Let's trace a simple `ADD R1, R2` instruction:

```
Instruction in Memory:  0001 0001 0010  (ADD R1, R2)
                        │    │    │
                     opcode reg1  reg2

PC: 0x1000 (points to instruction)
IR: [empty]
R1: 42
R2: 58

1. FETCH:
   PC (0x1000) → Memory → 0001 0001 0010 → IR

2. DECODE:
   IR (0001 0001 0010) → Control Unit → "ADD R1 and R2"

3. EXECUTE:
   ALU: R1 (42) + R2 (58) = 100
   Store result in R1

4. WRITEBACK:
   R1 = 100
   PC = PC + 4 = 0x1004

Now PC points to next instruction!
```

**Result**: R1 now contains 100. One instruction executed in ~1 nanosecond.

## Instruction Set Architecture (ISA)

### What is an ISA?

The **Instruction Set Architecture (ISA)** is the **language** your CPU understands—the complete set of instructions it can execute.

```
ISA = { ADD, SUB, MUL, DIV, LOAD, STORE, JUMP, CALL, RET, ... }
```

### Different ISAs

Different CPU families speak different "languages":

| ISA        | Type | Used In               | Examples                      |
| :--------- | :--- | :-------------------- | :---------------------------- |
| **x86-64** | CISC | PCs, Servers          | Intel Core i9, AMD Ryzen 9    |
| **ARM64**  | RISC | Mobile, Apple Silicon | Apple M2, Qualcomm Snapdragon |
| **RISC-V** | RISC | Research, Embedded    | SiFive boards, experimental   |

### CISC vs RISC

**CISC (Complex Instruction Set Computing)** - x86-64

```
MOV AX, [mem1]     ; Load from memory
ADD AX, BX         ; Add registers
MOV [mem2], AX     ; Store to memory
```

_3 instructions_

**RISC (Reduced Instruction Set Computing)** - ARM, RISC-V

```
LOAD R1, [mem1]    ; Load from memory
ADD R1, R1, R2     ; Add registers
STORE [mem2], R1   ; Store to memory
```

_3 instructions, simpler each_

**Modern Reality**: Both approaches work well with modern compilers and pipelining.

## Modern CPU Features

### 1. Pipelining

**Pipelining** allows the CPU to work on multiple instructions simultaneously, like an assembly line.

```
Without Pipeline:     Instr1 → Fetch → Decode → Execute
                      Instr2 → Fetch → Decode → Execute (waits for Instr1)

With Pipeline:        Fetch → Decode → Execute
                      Instr1   Instr2   Instr3
```

**Speedup**: 3x faster (for simple case).

### 2. Superscalar Execution

**Superscalar** CPUs execute multiple instructions per cycle.

```
Single Issue: 1 instruction per cycle
Superscalar:  4 instructions per cycle (on different cores/pipelines)
```

### 3. Out-of-Order Execution

The CPU **reorders** instructions to maximize efficiency while maintaining correct results.

```
Program Order:   ADD R1, R2    ; R1 = R1 + R2
                 LOAD R3, [R1] ; R3 = memory[R1]
                 MUL R4, R3    ; R4 = R4 * R3

CPU Reorders:    LOAD R3, [R1] ; Can start loading while ADD computes
                 ADD R1, R2    ;
                 MUL R4, R3    ;
```

### 4. Branch Prediction

The CPU **guesses** which way conditional branches (if/else) will go.

```
if (x > 0) { ... } else { ... }
CPU guesses "taken" or "not taken" → starts fetching accordingly
If wrong → Flush pipeline → Penalty
```

**Accuracy**: Modern predictors are 95%+ accurate.

### 5. Caches

**CPU caches** are small, fast memory between CPU and RAM.

```
L1 Cache: 32-64KB, 1-3 cycles
L2 Cache: 256KB-2MB, 10-20 cycles
L3 Cache: 8-64MB, 30-50 cycles (shared between cores)
RAM:      GBs, 100+ cycles
Disk:     TBs, milliseconds
```

A CPU clock cycle is one "tick" of the processor's internal clock—like a heartbeat that sets the rhythm for all operations.

When specs say "1-3 cycles" for L1 cache, it means the CPU grabs data from there in just 1 to 3 ticks—super fast. RAM at "100+ cycles" takes over 100 ticks, so it's much slower; the CPU waits longer.

| Storage Type | Size      | Access Speed (Cycles) | Simple Meaning                                                  |
| ------------ | --------- | --------------------- | --------------------------------------------------------------- |
| L1 Cache     | 32-64KB   | 1-3 cycles            | Tiny super-fast box next to CPU brain—most used data lives here |
| L2 Cache     | 256KB-2MB | 10-20 cycles          | Medium box, still fast but bigger than L1                       |
| L3 Cache     | 8-64MB    | 30-50 cycles          | Large shared box for whole CPU family wikipedia​                |
| RAM          | GBs       | 100+ cycles           | Main memory warehouse—slow but huge                             |
| Disk         | TBs       | Milliseconds          | Giant slow library—last resort                                  |

## Multi-Core Execution and Parallelism

### How Multiple Cores Work Together

```text
4-Core CPU + 8 Threads:

Core 1: Thread A → Thread E → Thread C → ...
Core 2: Thread B → Thread F → Thread A → ...
Core 3: Thread D → Thread G → Thread B → ...
Core 4: Thread H → Thread C → Thread D → ...

Kernel Scheduler assigns threads to cores dynamically
```

### Parallelism vs Concurrency

**Parallelism**: Multiple cores executing instructions simultaneously

```
Core 1: ADD R1, R2
Core 2: MUL R3, R4  ← Happens at the same time!
Core 3: LOAD R5     ← Same time!
Core 4: STORE R6    ← Same time!
```

**Concurrency**: Single core rapidly switching between threads

```
Core 1: ADD R1,R2 (5ms) → MUL R3,R4 (5ms) → LOAD R5 (5ms) → ...
        ↑ Appears simultaneous to humans
```

## Performance Metrics

### Clock Speed (GHz)

```
3.0 GHz CPU = 3 billion cycles per second
Each cycle = one (or more) instructions
```

**Reality**: Instructions take 1-100+ cycles depending on type.

### Instructions Per Cycle (IPC)

```
Modern CPU: 2-4 IPC
3 GHz × 3 IPC = 9 billion instructions/second
```

### Core Count vs Clock Speed

```
Intel i7-12700K: 12 cores × 5.0 GHz = Massive parallel capacity
vs
Old Pentium 4: 1 core × 3.8 GHz = Much slower
```

## Real-World CPU Examples

### Consumer CPUs (2026)

| Device                          | Cores/Threads | Clock (Boost) | L1 Cache (per core) | L2 Cache | L3/SLC Cache | RAM (typical)   | Storage (typical) | Use Case                      |
| ------------------------------- | ------------- | ------------- | ------------------- | -------- | ------------ | --------------- | ----------------- | ----------------------------- |
| Intel Core Ultra 9 285K Desktop | 24 (8P+16E)   | 6.0 GHz       | 48KB I + 32KB D     | 2MB      | 36MB         | 32-128GB DDR5   | 1-8TB NVMe        | Gaming PC pcmag​              |
| AMD Ryzen 9 9950X Desktop       | 16/32         | 5.7 GHz       | 32KB I + 1MB D      | 1MB      | 80MB         | 64-128GB DDR5   | 2-8TB NVMe        | Workstation tomshardware​     |
| Apple MacBook Pro M3 Max        | 16 (12P+4E)   | 4.0 GHz       | 192KB               | 4MB/core | 48MB SLC     | 36-128GB        | 1-8TB SSD         | Pro Laptop Editing geekompc​  |
| Dell XPS AMD Ryzen AI 9         | 12/24         | 5.1 GHz       | 32KB I + 1MB D      | 1MB      | 36MB         | 16-64GB LPDDR5X | 512GB-2TB NVMe    | Business Laptop hothardware​  |
| iPhone 17 Pro                   | 6 (2P+4E)     | 4.0 GHz       | 64KB                | 1MB      | 12MB         | 12-16GB LPDDR5X | 256GB-1TB UFS     | Premium Phone cashify​        |
| Samsung Galaxy S25 Ultra        | 8             | 4.3 GHz       | 64KB                | 512KB    | 12MB         | 16-24GB LPDDR5X | 256GB-1TB UFS     | Android Flagship misrconnect​ |
| Google Pixel 10 Pro             | 8             | 3.8 GHz       | 64KB                | 512KB    | 12MB         | 12-16GB LPDDR5X | 128-512GB UFS     | AI Camera Phone nanoreview​   |
| Apple Mac Studio M3 Ultra       | 32 (24P+8E)   | 4.1 GHz       | 192KB               | 4MB/core | 96MB SLC     | 64-256GB        | 1-16TB SSD        | Studio Workstation llmperf​   |

## Programming Implications

### What This Means for Your Code

1. **Use all cores**: Write multi-threaded code to utilize multiple cores
2. **Minimize cache misses**: Work with data that fits in cache
3. **Avoid branch mispredictions**: Write predictable code
4. **Use registers efficiently**: Let the compiler handle this
5. **Understand instruction costs**: Some instructions are much slower

### Example: Poor vs Good Code

```rust
// Poor: Lots of cache misses, unpredictable branches
fn poor(data: &mut [i32]) {
    for i in 0..data.len() {
        if data[i] > 0 {
            data[i] *= 2;  // Random access, branch
        }
    }
}

// Good: Sequential access, predictable
fn good(data: &mut [i32]) {
    let mut sum = 0;
    for i in 0..data.len() {
        sum += data[i];  // Sequential, no branches
    }
}
```

## Key Takeaways

1. **CPU** = Hardware that executes program instructions
2. **Core** = Independent execution unit within CPU (4-16 typical)
3. **Fetch-Execute Cycle** = Fundamental operation: Fetch → Decode → Execute → Repeat
4. **Registers** = Ultra-fast CPU memory (1000x faster than RAM)
5. **ALU** performs all calculations and logic operations
6. **ISA** = Language CPU understands (x86-64, ARM64, RISC-V)
7. **Multiple cores enable true parallelism**
8. **Modern CPUs** use pipelining, superscalar execution, out-of-order execution, branch prediction, and caches for high performance
9. **Write code that uses all cores and minimizes cache misses**

## Further Reading \&

- [Wikipedia: CPU](https://en.wikipedia.org/wiki/Central_processing_unit)
- [Computer Architecture: A Quantitative Approach](https://www.elsevier.com/books/computer-architecture-a-quantitative-approach/hennessey/978-0-12-811905-1)
- [Agner Fog's Optimization Manuals](https://www.agner.org/optimize/)
- [What Every Programmer Should Know About Memory](https://www.akkadia.org/drepper/cpumemory.pdf)

## Questions to Test Your Understanding

1. What are the four steps of the fetch-execute cycle?
2. What is the difference between a CPU core and a thread?
3. Why are registers so much faster than RAM?
4. What does the ALU do?
5. How does pipelining improve CPU performance?
6. What is branch prediction and why is it important?
7. Why do modern CPUs have multiple levels of cache?
8. What is the difference between CISC and RISC architectures?
9. How does the kernel scheduler assign threads to CPU cores?
10. Why is understanding CPU cores important for writing high-performance Rust code?

Try answering these before reading the next article!

---

## What's Next

Now that you understand CPUs and cores, the next article will explore **Instruction Set Architecture (ISA)**—the specific language your CPU speaks and how different architectures (x86-64, ARM, RISC-V) compare.
