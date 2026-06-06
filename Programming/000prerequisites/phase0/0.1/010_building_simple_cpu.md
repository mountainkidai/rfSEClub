# Phase 0.10 — Building a Simple CPU

## Introduction

At this point, we have built almost every major component of a computer.

We started with:

```text
Information -> Bits -> Boolean Logic -> Logic Gates -> Digital Circuits -> Registers -> ALU -> Control Unit
```

Now we will connect these pieces together and build a simple CPU.

This chapter is one of the most important in the entire roadmap.

Why?

Because after this chapter, you will understand what a CPU actually is.

Many people think:

```text
CPU = Magic Silicon Box
```

In reality:

```text
CPU = Registers + ALU + Control Unit + Wires
```

That's it.

Everything else is complexity built on top.

---

## What Does A CPU Actually Do?

A CPU performs only three fundamental tasks:

```text
1. Read Instructions
2. Execute Instructions
3. Move To Next Instruction
```

Over and over.

Forever.

Example:

```assembly
MOV A, 5
MOV B, 3
ADD A, B
HALT
```

The CPU simply executes them one by one.

---

## The Smallest Useful CPU

To build a CPU, we need:

```text
+----------------+
| Control Unit   |
+----------------+
+----------------+
| Registers      |
+----------------+
+----------------+
| ALU            |
+----------------+
```

These three components are enough to create a programmable machine.

---

## Component 1: Registers

Registers store data.

Example:

```text
Register A = 5
Register B = 3
```

ASCII view:

```text
+---------+
| Reg A   |
| 5       |
+---------+

+---------+
| Reg B   |
| 3       |
+---------+
```

Think of registers as the CPU's short-term memory.

---

## Component 2: ALU

The ALU performs calculations.

Example:

```text
Input A = 5
Input B = 3
Operation = ADD
Output = 8
```

ASCII:

```text
5
|
v
+-------------+
|     ALU     |
+-------------+
^
|
3

Output = 8
```

The ALU does not remember anything.

It simply computes.

---

## Component 3: Control Unit

The Control Unit coordinates everything.

Example:

```text
Read Register A
Read Register B
Configure ALU
Store Result
```

Think of it as the CPU's manager.

---

## Connecting Everything Together

Now connect the components:

```text
+----------------+
| Control Unit   |
+----------------+
        |
        v
+------------+    +------------+
| Registers   |<-> | ALU        |
+------------+    +------------+
```

This is the core of every CPU.

Modern CPUs are vastly more complex, but the basic idea is identical.

---

## Instructions

A CPU follows instructions.

Examples:

```assembly
LOAD
STORE
ADD
SUB
JUMP
HALT
```

Each instruction tells the CPU what to do.

---

## Example Program

Suppose we have:

```assembly
LOAD A, 5
LOAD B, 3
ADD A, B
HALT
```

Let's execute it manually.

---

## Step 1 — LOAD A, 5

Instruction:

```assembly
LOAD A, 5
```

Meaning:

```text
Store value 5 into Register A
```

Before:

```text
Register A = 0
```

After:

```text
Register A = 5
```

ASCII:

```text
+---------+
| Reg A   |
| 5       |
+---------+
```

---

## Step 2 — LOAD B, 3

Instruction:

```assembly
LOAD B, 3
```

Meaning:

```text
Store value 3 into Register B
```

After:

```text
+---------+
| Reg A   |
| 5       |
+---------+

+---------+
| Reg B   |
| 3       |
+---------+
```

---

## Step 3 — ADD A, B

Instruction:

```assembly
ADD A, B
```

Control Unit performs:

```text
Read A
Read B
Configure ALU = ADD
Store Result
```

Data Flow:

```text
Reg A = 5
  |
  v
 ALU
  ^
  |
Reg B = 3
```

Result:

```text
8
```

Store back:

```text
Register A = 8
```

After:

```text
+---------+
| Reg A   |
| 8       |
+---------+

+---------+
| Reg B   |
| 3       |
+---------+
```

---

## Step 4 — HALT

Instruction:

```assembly
HALT
```

Meaning:

```text
Stop execution
```

Program finished.

---

## But How Does The CPU Know Which Instruction Is Next?

This is a critical question.

Consider:

```assembly
Instruction 1
Instruction 2
Instruction 3
Instruction 4
```

How does the CPU know where it is?

The answer:

> Program Counter

---

## Program Counter (PC)

The Program Counter is a special register.

Its job:

```text
Store address of next instruction
```

Think of it as a bookmark.

---

## Example

Memory:

```text
Address 0 -> LOAD A, 5
Address 1 -> LOAD B, 3
Address 2 -> ADD A, B
Address 3 -> HALT
```

Program Counter:

```text
PC = 0
```

Meaning:

```text
Execute instruction at address 0
```

---

## Execution Timeline

Start:

```text
PC = 0
```

Fetch:

```assembly
LOAD A, 5
```

Execute.

Increment PC:

```text
PC = 1
```

---

Next:

```assembly
LOAD B, 3
```

Execute.

Increment:

```text
PC = 2
```

---

Next:

```assembly
ADD A, B
```

Execute.

Increment:

```text
PC = 3
```

---

Next:

```assembly
HALT
```

Stop.

---

## Why The Program Counter Matters

Without a Program Counter:

```text
CPU would not know:
What instruction is current?
What instruction is next?
```

Execution becomes impossible.

The Program Counter gives the CPU a sense of location.

---

## Instruction Register

When the CPU fetches an instruction, it needs somewhere to temporarily store it.

This is:

> Instruction Register (IR)

Example:

```text
Memory
  |
  v
ADD A, B
  |
  v
Instruction Register
```

Now the CPU can decode it.

---

## CPU Execution Cycle

We can now describe the entire CPU loop.

```text
1. Read Program Counter
2. Fetch Instruction
3. Store in Instruction Register
4. Decode Instruction
5. Execute Instruction
6. Update Program Counter
7. Repeat
```

ASCII:

```text
+-------------------+
|    Read PC        |
+-------------------+
        |
        v
+-------------------+
| Fetch Instruction |
+-------------------+
        |
        v
+-------------------+
|      Decode       |
+-------------------+
        |
        v
+-------------------+
|     Execute       |
+-------------------+
        |
        v
+-------------------+
|    Update PC      |
+-------------------+
        |
        v
Repeat
```

This loop runs billions of times every second.

---

## Building Branching

So far the CPU executes instructions sequentially.

Example:

```text
0 -> A
1 -> B
2 -> C
3 -> D
```

Always:

```text
0 -> 1 -> 2 -> 3
```

But real programs need decisions.

Example:

```rust
if score > 100 { bonus(); }
```

We need branching.

---

## JUMP Instruction

Example:

```assembly
JUMP 10
```

Meaning:

```text
Set PC = 10
```

Instead of:

```text
PC = 4
```

Execution jumps elsewhere.

---

## Conditional Jump

Example:

```assembly
JUMP_IF_ZERO 10
```

Meaning:

```text
If Zero Flag = 1, PC = 10
```

Otherwise:

```text
Continue Normally
```

This creates:

```text
if
while
for
match
```

statements.

All high-level control flow eventually becomes jumps.

---

## A Real Program

High-level code:

```rust
if x == y { do_something(); }
```

CPU version:

```assembly
COMPARE X, Y
JUMP_IF_NOT_EQUAL END
DO_SOMETHING
END:
```

Everything reduces to comparisons and jumps.

---

## The Complete Simple CPU

We now have:

```text
+----------------+
| Control Unit   |
+----------------+
        |
        v
+-----------+    +---------------+
| Registers  |<-> | ALU           |
+-----------+    +---------------+
        ^                 |
        |                 v
+---------------+   +----------------+
| Program Counter|   | Instruction Reg|
+---------------+   +----------------+
```

This is a real CPU architecture.

Modern processors simply add:

- More registers.
- More instructions.
- More cores.
- More caches.

The fundamental design remains the same.

---

## First Principles Summary

A CPU is not magic.

A CPU is a collection of components:

```text
Registers + ALU + Control Unit + Program Counter + Instruction Register
```

The CPU repeatedly:

```text
Fetch -> Decode -> Execute
```

instructions.

Programs are simply sequences of instructions stored in memory.

The Program Counter tracks where execution is occurring.

The Control Unit coordinates execution.

The ALU performs calculations.

Registers store data.

Together they create a programmable machine.

---

## Key Takeaways

- A CPU executes instructions.
- Registers store data.
- The ALU performs calculations.
- The Control Unit coordinates execution.
- The Program Counter tracks the next instruction.
- The Instruction Register stores the current instruction.
- CPUs follow the Fetch-Decode-Execute cycle.
- Jumps create control flow.
- High-level code eventually becomes instructions and jumps.
- Modern CPUs are built on the same fundamental ideas.

---

## Mental Model

Think of the CPU like a person reading a recipe.

```text
Recipe Book = Program Memory
Current Line = Program Counter
Current Step = Instruction Register
Chef = Control Unit
Calculator = ALU
Notebook = Registers
```

The person simply:

```text
Read Step
Understand Step
Execute Step
Move To Next Step
```

A CPU works exactly the same way.

---

## Check Your Understanding

1. What are the minimum components needed to build a simple CPU?
2. What is the purpose of the Program Counter?
3. What is the purpose of the Instruction Register?
4. What happens during Fetch?
5. What happens during Decode?
6. What happens during Execute?
7. Why does the CPU need jumps?
8. How do if statements become machine instructions?
9. What does `JUMP 10` do?
10. Why is the CPU considered programmable?

---

## Next Topic

# Phase 0.11 — Computer Memory Hardware

So far our CPU can compute.

The next question is:

> Where does all the data actually live?

We will move beyond registers and learn:

```text
SRAM DRAM RAM Memory Cells Memory Addressing Memory Hierarchy
```

The foundation of modern memory systems.
