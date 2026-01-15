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
    | Characteristic | CISC (x86-64) | RISC: ARM64 | RISC: RISC-V | Simple Explanation |
    | ------------------ | ---------------------------------- | ----------------------- | -------------------- | ---------------------------------------------------------------------------------- |
    | Instruction Length | Variable (1-15 bytes) | Fixed 4 bytes | Fixed 4 bytes | Fixed wins: CPU always jumps +4 bytes. Variable = guess length first (wasted time) |
    | Registers | 16 (RAX-R15) | 31 (X0-X30) | 32 (X0-X31) | More = faster: Registers inside CPU (1 cycle). RAM = 100+ cycles away |
    | Addressing Modes | Complex: [Base+Index×Scale+Offset] | Simple: [Base+Offset] | Simple: Offset(Base) | Simple = faster clock: Complex needs big decoder hardware |
    | ADD Example | ADD RAX,RBX (destroys RAX) | ADD X0,X1,X2 (X0=X1+X2) | ADD X1,X2,X3 (safe) | 3-operand: RISC preserves source values |
    | LOAD Example | MOV RAX,[RBX] | LDR X0,[X1] | LW X1,0(X2) | Predictable format: RISC always "dest = memory[src]" |

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
