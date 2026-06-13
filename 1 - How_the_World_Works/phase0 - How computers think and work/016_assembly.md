## 0.16 — Introduction to Assembly

This is where everything finally comes together:

```text
Binary
↓
Logic Gates
↓
Transistors
↓
Memory
↓
Registers
↓
Cache
↓
Addresses
↓
Assembly
```

The goal is **not** to teach x86 syntax.

The goal is to answer:

> How does a CPU actually execute instructions?

Before teaching:

```asm
MOV RAX, 5
ADD RAX, 3
```

you should first teach:

```text
What is an instruction?

What is an ISA?

What is a register?

What is memory?

Why does assembly exist?
```

I would structure the final Phase 0 article like this:

```text
0.16 Introduction to Assembly

1. What Is Assembly?

2. Why Computers Need Instructions

3. Machine Code
   - 10110000
   - 11001010

4. Why Humans Invented Assembly

5. Registers Revisited

6. Memory Revisited

7. MOV Instruction

8. Arithmetic Instructions
   - ADD
   - SUB

9. Reading Memory

10. Writing Memory

11. Comparison Instructions
    - CMP

12. Jumps
    - JMP
    - JE
    - JNE

13. Loops

14. Function Calls
    - CALL
    - RET

15. The Fetch-Decode-Execute Cycle

16. From Rust To Assembly
```

The most important section is:

```text
Fetch
↓
Decode
↓
Execute
```

because that is literally what a CPU does billions of times every second.

Example:

Rust:

```rust
let z = x + y;
```

Compiler:

```asm
MOV RAX, x
MOV RBX, y
ADD RAX, RBX
MOV z, RAX
```

CPU:

```text
Fetch MOV
Decode MOV
Execute MOV

Fetch MOV
Decode MOV
Execute MOV

Fetch ADD
Decode ADD
Execute ADD
```

Once the reader understands that cycle:

```text
Fetch
↓
Decode
↓
Execute
```

they finally understand what a CPU really is:

```text
A machine that repeatedly executes instructions.
```

---

At that point Phase 0 is complete.

You will have built:

```text
Information
↓
Bits
↓
Binary
↓
Boolean Logic
↓
Logic Gates
↓
Transistors
↓
Arithmetic Circuits
↓
Clock
↓
Memory
↓
Registers
↓
SRAM
↓
DRAM
↓
Flash
↓
Cache
↓
Memory Hierarchy
↓
Addresses
↓
Assembly
```

From there Phase 1 naturally begins:

```text
What Actually Happens When You Turn On Your Computer
↓
Operating Systems
↓
Kernel
↓
Processes
↓
Threads
↓
Stack
↓
Heap
↓
Virtual Memory
```

which is where computer architecture transitions into operating systems.
