# Instruction Set Architecture (ISA)

## Introduction

Your CPU doesn't understand Rust, C++, or JavaScript. It only understands **machine code**—a specific set of binary instructions. The **Instruction Set Architecture (ISA)** defines exactly which instructions your CPU understands and how they work.

Different CPU families speak different "languages":

- **x86-64**: Intel/AMD PCs and servers
- **ARM64**: Smartphones, Apple Silicon, cloud servers
- **RISC-V**: Open-source, growing rapidly

Understanding ISAs helps you write efficient code, understand compiler choices, and appreciate why some languages/architectures perform better on certain workloads.

## Prerequisites

Before reading this article, you should understand:

- CPU basics and fetch-execute cycle (Article 004)
- Registers and ALU (Article 004)
- Kernel and process concepts (Article 003)

## What is an Instruction Set Architecture?

### Simple Definition

An **Instruction Set Architecture (ISA)** is the **complete specification** of all instructions a CPU can execute, including:

- **Which instructions** exist (ADD, LOAD, STORE, JUMP, etc.)
- **How instructions are encoded** in binary
- **Which registers** exist and their sizes
- **Memory addressing modes**
- **Calling conventions** (how functions pass arguments)
- **Exception handling**

### ISA vs Microarchitecture

```
ISA: What instructions CPU understands (public specification)
    ↓
Microarchitecture: How CPU implements those instructions (secret implementation)

Example:
ISA: "ADD R1, R2" exists
Microarchitecture: Uses 3 pipelines, out-of-order execution to compute it
```

**Analogy**: ISA = Recipe book. Microarchitecture = Chef's technique.

## Major ISA Families

- Instruction Length: How many bytes each CPU command takes. Fixed = always same size. Variable = different sizes.
- Registers: Tiny super-fast storage boxes inside the CPU chip. Hold numbers CPU works on right now.
- Addressing Modes: Ways CPU finds data in memory (like "address + 8 bytes" or "array").
- ADD Instruction: CPU math command. X = A + B.

  - LOAD Instruction: Grab data from RAM into CPU registers.
  - ISA Characteristics Comparison (With Explanations)

    | Characteristic     | CISC (x86-64)                      | RISC: ARM64             | RISC: RISC-V         | Simple Explanation                                                                 |
    | ------------------ | ---------------------------------- | ----------------------- | -------------------- | ---------------------------------------------------------------------------------- |
    | Instruction Length | Variable (1-15 bytes)              | Fixed 4 bytes           | Fixed 4 bytes        | Fixed wins: CPU always jumps +4 bytes. Variable = guess length first (wasted time) |
    | Registers          | 16 (RAX-R15)                       | 31 (X0-X30)             | 32 (X0-X31)          | More = faster: Registers inside CPU (1 cycle). RAM = 100+ cycles away              |
    | Addressing Modes   | Complex: [Base+Index×Scale+Offset] | Simple: [Base+Offset]   | Simple: Offset(Base) | Simple = faster clock: Complex needs big decoder hardware                          |
    | ADD Example        | ADD RAX,RBX (destroys RAX)         | ADD X0,X1,X2 (X0=X1+X2) | ADD X1,X2,X3 (safe)  | 3-operand: RISC preserves source values                                            |
    | LOAD Example       | MOV RAX,[RBX]                      | LDR X0,[X1]             | LW X1,0(X2)          | Predictable format: RISC always "dest = memory[src]"                               |

## Major ISA Families

### x86-64 (CISC)

**Full Name**: x86-64, x64, AMD64, Intel 64

**History**:

- 1970s: Intel 8086 (16-bit)
- 1985: Intel 80386 (32-bit)
- 2003: AMD64 (64-bit) - AMD's extension to x86
- 2004: Intel adopts as "Intel 64"

**Type**: CISC (Complex Instruction Set Computing)

**Key Characteristics**:

- **Variable instruction length**: 1-15 bytes
- **16 64-bit registers**: RAX, RBX, RCX, RDX, RSI, RDI, RBP, RSP, R8-R15
- **Complex addressing modes**: Memory operations can be complex
- **Rich instruction set**: String operations, multiply, bit manipulation
- **Backward compatible**: Runs 1970s code on 2026 CPUs

**Used In**:

- Desktop PCs (Windows, Linux, macOS Intel)
- Servers (AWS, Google Cloud Intel instances)
- Enterprise applications

**Strengths**:

- Massive software ecosystem
- Backward compatibility (30+ year legacy)
- Optimized for decades
- Best for single-threaded performance
- Excellent floating-point (AVX-512)

**Weaknesses**:

- Complex decoder (power hungry)
- Harder to pipeline due to variable instruction length
- Heavy instruction (for mobile)
- Complex ISA makes CPU design harder

**Example Code**:

```asm
; x86-64 assembly
MOV RAX, 5          ; RAX = 5
MOV RBX, 10         ; RBX = 10
ADD RAX, RBX        ; RAX = RAX + RBX (15)
MOV [mem], RAX      ; Store RAX to memory
```

### ARM64 (RISC)

**Full Name**: ARM64, AArch64, ARMv8-A

**History**:

- 1985: ARM1 (Acorn RISC Machine)
- 2011: ARMv8 with 64-bit support
- 2020-2026: Dominates mobile, growing in servers

**Type**: RISC (Reduced Instruction Set Computing)

**Key Characteristics**:

- **Fixed instruction length**: 4 bytes (always)
- **32 64-bit registers**: X0-X31 (X31 is zero or stack pointer)
- **Load/Store architecture**: Only LOAD/STORE access memory
- **Simple, regular format**: Easy to pipeline
- **Power efficient**: Low power consumption

**Used In**:

- iPhones, iPads (Apple Silicon M1/M2/M3)
- Android devices (Qualcomm Snapdragon, MediaTek)
- AWS Graviton servers
- Raspberry Pi 5+
- Kubernetes control planes

**Strengths**:

- Power efficient (crucial for mobile)
- Easy to pipeline (high clock speeds)
- Large register set reduces memory access
- Simple decoder (low power)
- Growing server adoption

**Weaknesses**:

- Smaller software ecosystem than x86
- Historically less optimized (catching up)
- Less legacy code support
- Some scientific workloads optimized for x86

**Example Code**:

```asm
; ARM64 assembly
MOV X0, #5          ; X0 = 5
MOV X1, #10         ; X1 = 10
ADD X0, X0, X1      ; X0 = X0 + X1 (15)
STR X0, [X2]        ; Store X0 to memory at X2
```

### RISC-V (RISC)

**Full Name**: RISC-V (Reduced Instruction Set Computer - Five)

**History**:

- 2010: Developed at UC Berkeley
- 2014: ISA specification finalized
- 2016+: Commercial chips (SiFive)
- 2026: Growing adoption in embedded and servers

**Type**: RISC (Reduced Instruction Set Computing)

**Key Characteristics**:

- **Fixed instruction length**: 4 bytes (with 2-byte compressed variant)
- **32 registers**: X0-X31 (X0 always zero)
- **Load/Store architecture**: Only LOAD/STORE access memory
- **Modular extensions**: Add only what you need
- **Open source**: Free ISA, anyone can implement
- **Simple base ISA**: Very small specification

**Used In**:

- SiFive boards (educational, embedded)
- Alibaba T-Head processors
- Western Digital embedded systems
- Research institutions
- Custom silicon

**Strengths**:

- Open source (no licensing fees)
- Modular (add extensions as needed)
- Simple to implement (lower design cost)
- Growing ecosystem
- Perfect for custom silicon

**Weaknesses**:

- Smaller ecosystem than ARM/x86
- Less software/library support
- Young architecture (less optimized)
- Still gaining industry adoption

**Example Code**:

```asm
; RISC-V assembly
ADDI X1, X0, 5      ; X1 = 0 + 5 = 5
ADDI X2, X0, 10     ; X2 = 0 + 10 = 10
ADD X1, X1, X2      ; X1 = X1 + X2 (15)
SW X1, 0(X3)        ; Store word X1 to memory at X3+0
```

## Key Differences Summarized

| Aspect                 | x86-64                | ARM64                      | RISC-V             |
| ---------------------- | --------------------- | -------------------------- | ------------------ |
| **Type**               | CISC                  | RISC                       | RISC               |
| **Instruction Length** | Variable (1-15 bytes) | Fixed (4 bytes)            | Fixed (4 bytes)    |
| **Registers**          | 16 x 64-bit           | 32 x 64-bit                | 32 x 64-bit        |
| **Memory Access**      | Complex modes         | Load/Store                 | Load/Store         |
| **Architecture**       | Monolithic            | Clean design               | Modular/Extensible |
| **Licensing**          | Proprietary           | Proprietary (but licensed) | Open source        |
| **Market Share**       | Servers/Desktop       | Mobile/Servers/Cloud       | Emerging           |
| **Ecosystem**          | Mature, huge          | Very large                 | Growing            |

### Eg

Before ADD:
RAX = 10 (our important number)
RBX = 5 (number to add)

Execute: ADD RAX, RBX
After ADD:
RAX = 15 ← RAX NOW DESTROYED! (10 is gone forever)
RBX = 5 (unchanged)

## CISC vs RISC: Historical Context

### CISC (Complex Instruction Set Computing)

**Philosophy**: "Give the programmer powerful, complex instructions that do more work per instruction."

**Characteristics**:

- Variable instruction length
- Many addressing modes
- Complex instructions (string operations, multiply-accumulate)
- Designed for assembly language programming

**History**: 1970s-1980s when compilers were poor and memory expensive.

**Example**: Intel 8086 → 80386 → x86-64

**Strengths**:

```
LOOP: ADD [SI], AL    ; Complex memory operation
      DEC CX           ; Single instruction does multiple operations
      JNZ LOOP
```

Super Simple CISC Loop

```text
LOOP: ADD [SI], 5     ; Add 5 to memory
      INC SI          ; Next address
      DEC CX          ; Count down
      JNZ LOOP        ; Repeat
```

Before vs After (3 bytes memory)

```text
Before: Memory = [1, 2, 3]    CX=3    SI=address
After:  Memory = [6, 7, 8]    (each +5)
```

```text
Step 1:
SI→[1]  ADD [SI],5 → [6]   CX=2
Step 2:
SI→[6]  INC SI     → next [2]
ADD [SI],5 → [7]   CX=1
Step 3:
SI→[7]  INC SI     → [3]
ADD [SI],5 → [8]   CX=0 → STOP
```

Dense code, fewer instructions

### RISC (Reduced Instruction Set Computing)

**Philosophy**: "Give the compiler simple, regular instructions. Let the compiler generate efficient sequences."

**Characteristics**:

- Fixed instruction length
- Load/store architecture (only LOAD/STORE access memory)
- Many registers
- Simple, regular instructions

**History**: 1980s research showed complex instructions rarely used optimally.

**Strengths**:

```
Pipeline-friendly    → Superscalar execution
Simple decoder       → Higher clock speeds
Regular format       → Better branch prediction
More registers       → Fewer memory accesses
```

## Load/Store Architecture (RISC Hallmark)

**RISC CPUs use load/store architecture**:

```
ALU operations only use registers
Only LOAD/STORE access memory
```

```
RISC:              CISC:
ADD R1, R2         ADD [mem], AX
LOAD R3, [mem1]    ; Complex memory ops allowed
STORE [mem2], R1
```

**Benefits**:

- **Pipeline friendly**: No memory access during ALU operations
- **Simpler hardware**: ALU doesn't need memory addressing logic
- **Higher clock speeds**: Less complex decode stage

## Register Windows and Calling Conventions

### x86-64 Calling Convention

```
Arguments: RDI, RSI, RDX, RCX, R8, R9
Return:    RAX
Callee-saved: RBX, RBP, R12-R15
Caller-saved: RAX, RCX, RDX, RSI, R8, R9, R10, R11
Stack:     RSP
```

### ARM64 Calling Convention

```
Arguments: X0-X7
Return:    X0
Callee-saved: X19-X28
Caller-saved: X0-X18
Stack:     SP
```

### RISC-V Calling Convention

```
Arguments: A0-A7 (X10-X17)
Return:    A0 (X10)
Callee-saved: S0-S11 (X8-X9, X18-X27)
Caller-saved: T0-T6, A0-A7
Stack:     SP
```

## Memory Ordering and Barriers

Different ISAs have different **memory ordering guarantees**:

### x86-64: Strong Ordering

```
STORE1
STORE2        ← Always happens after STORE1
LOAD1
LOAD2         ← Always sees STORE2 if after STORE1
```

### ARM64, RISC-V: Weak Ordering

```
STORE1
STORE2        ← Might be reordered!
LOAD1
LOAD2         ← Might not see STORE2!
```

**Implication**: Concurrent programming requires **memory barriers** on weak-memory architectures.

```rust
// Rust atomic operations handle this automatically
std::sync::atomic::AtomicU64::new(0)
    .fetch_add(1, std::sync::atomic::Ordering::SeqCst);
```

## Real-World ISA Usage (2026)

### Desktop/Laptop

```
90% x86-64 (Intel/AMD)
10% ARM64 (Apple Silicon)
```

### Mobile

```
85% ARM64 (Qualcomm, MediaTek, Apple)
15% Others
```

### Servers/Cloud

```
60% x86-64 (Intel/AMD EPYC)
30% ARM64 (AWS Graviton, Ampere)
10% Others (RISC-V growing)
```

### Embedded/IoT

```
70% ARM (32/64-bit)
20% RISC-V
10% Others
```

## ISA Evolution and Extensibility

### x86-64 Extensions

```
SSE, SSE2, SSE3, SSE4 → AVX, AVX2, AVX-512
FMA, BMI, ADX, SHA extensions
```

### ARM64 Extensions

```
SVE (Scalable Vector Extension)
SVE2
Pointer Authentication
```

### RISC-V: Truly Extensible

```
Base ISA + Extensions:
  M: Integer Multiplication
  A: Atomic operations
  F/D: Single/Double FP
  C: Compressed instructions
  Vector (RVV)
  Hypervisor (H)
```

**Custom extensions possible**—companies can add their own instructions.

## Programming Across ISAs

### Cross-Compilation

```bash
# Compile Rust for different targets
rustc --target x86_64-unknown-linux-gnu main.rs
rustc --target aarch64-unknown-linux-gnu main.rs
rustc --target riscv64imac-unknown-none-elf main.rs
```

### Universal Binaries (macOS)

```
Apple Silicon Macs run both x86-64 and ARM64
macOS Rosetta 2 translates x86-64 to ARM64 dynamically
```

### WebAssembly (Wasm)

```
Single Wasm binary runs on ALL ISAs
Browser JIT compiles to native instructions
```

## Performance Characteristics

### Power Efficiency

```
ARM64: 5-20W (mobile/server)
x86-64: 65-250W (desktop/server)
RISC-V: Highly variable
```

### Integer Performance

```
x86-64: Excellent (optimized for decades)
ARM64: Very good (mobile optimized)
RISC-V: Good (improving rapidly)
```

### Floating Point/Vector

```
x86-64: AVX-512 (excellent)
ARM64: SVE (excellent, scalable)
RISC-V: RVV (excellent, scalable)
```

## Future of ISAs

### RISC-V Growth

```
2026: Already in production silicon (SiFive, Alibaba, Western Digital)
2030 prediction: 20% server market share
Open source → No licensing fees → Rapid innovation
```

### ARM Dominance

```
Mobile: 95%+
Servers: AWS Graviton3/4 gaining share
Apple: M-series success
```

### x86-64 Maturity

```
Backward compatibility ensures dominance
AVX-512, AMX (AI matrix extensions)
Still fastest for many workloads
```

## Key Takeaways

1. **ISA** = Complete specification of CPU instructions and registers
2. **x86-64 (CISC)**: Complex, variable-length, PCs/servers, backward compatible
3. **ARM64 (RISC)**: Fixed-length, power-efficient, mobile/Apple/cloud
4. **RISC-V (RISC)**: Open-source, extensible, growing rapidly
5. **Load/Store Architecture**: RISC hallmark—ALU only uses registers
6. **More registers = fewer memory accesses** → Faster code
7. **Calling conventions** differ between ISAs (argument passing)
8. **Memory ordering** affects concurrent programming
9. **Choose ISA based on target platform** (power, performance, ecosystem)

## Further Reading \&

- [x86-64 ABI](https://refspecs.linuxfoundation.org/elf/x86_64-abi-0.99.pdf)
- [ARM64 ABI](https://github.com/ARM-software/abi-aa)
- [RISC-V Specification](https://riscv.org/technical/specifications/)
- [Agner Fog's Instruction Tables](https://www.agner.org/optimize/instruction_tables.pdf)

## Questions to Test Your Understanding

1. What is the difference between ISA and microarchitecture?
2. Compare instruction length between x86-64 and ARM64. Why does it matter?
3. Why do RISC architectures use load/store architecture?
4. How many 64-bit registers does each major ISA have?
5. What are the strengths/weaknesses of CISC vs RISC?
6. Explain ARM64 calling convention vs x86-64.
7. Why is RISC-V interesting for the future?
8. What is a memory barrier and why do weak-memory architectures need them?
9. How does backward compatibility affect x86-64 evolution?
10. Which ISA would you choose for: a) smartphone, b) high-performance server, c) custom embedded device?

### Answers

## ISA Understanding Answers

### ISA vs Microarchitecture

**ISA** = CPU's public language contract (registers, instructions). **Microarchitecture** = secret internal implementation (pipeline, cache). Same ISA (x86), different microarch (Intel Alder Lake vs AMD Zen5).

### Instruction Length x86 vs ARM

**x86-64**: Variable 1-15 bytes. **ARM64**: Fixed 4 bytes. **Matters**: Fixed = predictable PC jumps, perfect pipelining. Variable = decode stalls.

### RISC Load/Store Architecture

Only LOAD/STORE touch memory. Math uses registers only. **Why**: Separates memory ops → easier pipelining + out-of-order execution. CISC mixes memory+math = pipeline chaos.

### 64-bit Registers Count

- **x86-64**: 16 (RAX-R15)
- **ARM64**: 31 (X0-X30)
- **RISC-V**: 32 (X0-X31)

### CISC vs RISC Strengths/Weaknesses

|              | **CISC (x86)**  | **RISC (ARM/RISC-V)**       |
| :----------- | :-------------- | :-------------------------- |
| **Strength** | Dense code      | Fast clocks, more registers |
| **Weakness** | Complex decoder | Verbose code                |

### Calling Convention

**x86-64**: Args in registers (RDI,RSI,RDX,RCX,R8,R9) then stack. **ARM64**: X0-X7 registers, then stack. ARM passes more args in registers (fewer stack spills).

### RISC-V Future Interest

**Free/open-source** (no royalties). Modular extensions. Linux servers → microcontrollers. Perfect for custom AI accelerators.

### Memory Barrier

Fence instruction forcing memory order. **Weak memory** (ARM/RISC-V) reorders loads/stores for speed. Barrier says "finish all memory ops NOW" → multithread safety.

### x86 Backward Compatibility

Can't break 1978 8086 software. Stuck with 16 registers, variable length. Intel decodes → micro-ops → modern pipeline (ugly but works).

### ISA Choices

- a **Smartphone**: ARM64 (power efficiency)
- b**Server**: x86-64 (legacy software) or RISC-V (cost)
- c **Embedded**: RISC-V (free, customizable)
