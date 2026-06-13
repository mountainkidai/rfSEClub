# Phase 0.7 — Registers

## Introduction

In the previous chapter, we built our first useful digital circuits:

- Adders.
- Comparators.
- Multiplexers.
- Decoders.
- Registers.

Most of those circuits perform some operation and immediately produce an output.

For example:

```text
Input
↓
Circuit
↓
Output
```

Once the input disappears, the result disappears.

This creates a major problem.

> How can a computer remember anything?

If a CPU could not remember information, it could not:

- Store numbers.
- Execute programs.
- Keep track of instructions.
- Remember intermediate calculations.
- Access memory addresses.

A computer without memory would forget everything instantly.

This leads us to one of the most important inventions in computer engineering:

> Registers

Registers are the CPU's internal memory.

They are the fastest storage locations in the entire computer.

---

## The Problem: Memory

Imagine performing:

```text
5 + 3
```

The result is:

```text
8
```

Now suppose the CPU needs to perform:

```text
8 × 2
```

Where does the `8` come from?

The CPU must remember the previous result.

Without memory:

```text
5 + 3 = 8  (Forget)  8 × 2
```

The second calculation becomes impossible.

Computation requires memory.

---

## What Is A Register?

A register is a small storage location inside the CPU.

Its job is simple:

> Hold binary data.

Example:

```text
10101011
```

A register can store that value and keep it available for later use.

Think of a register as a tiny box inside the processor.

```text
┌─────────────┐
│ 10101011    │
└─────────────┘
```

The value remains there until it is replaced.

---

## Registers Store Bits

A register stores bits.

Examples:

### 1-Bit Register

```text
1
```

### 4-Bit Register

```text
1011
```

### 8-Bit Register

```text
10110010
```

### 64-Bit Register

```text
1100101010101001010101010100011010100101010101010101010101010101
```

Modern CPUs typically use 64-bit registers.

---

## Why Registers Matter

Registers are where computation happens.

Consider:

```text
5 + 3
```

Internally:

```text
Register A = 5
Register B = 3
```

The CPU performs:

```text
A + B
```

Result:

```text
Register C = 8
```

The CPU constantly moves data between registers.

---

## Registers Are Not RAM

Many beginners confuse registers with RAM.

They are very different.

| Feature     | Register       | RAM             |
| ----------- | -------------- | --------------- |
| Location    | Inside CPU     | Outside CPU     |
| Speed       | Extremely fast | Slower          |
| Capacity    | Tiny           | Large           |
| Cost        | Very expensive | Cheaper         |
| Access time | Few CPU cycles | More CPU cycles |

Think of registers as:

```text
Work desk
```

And RAM as:

```text
Storage room
```

You keep frequently used items on your desk.

You keep everything else in storage.

---

## Why Registers Are Fast

Registers are physically located inside the CPU.

This means:

```text
CPU
↓
Register
```

requires almost no travel.

Accessing RAM requires:

```text
CPU
↓
Memory Controller
↓
RAM
↓
Back To CPU
```

Much farther.

Much slower.

This difference is one reason modern CPUs use registers heavily.

---

## A CPU Is Constantly Using Registers

Suppose your Rust code says:

```rust
let x = 5;
let y = 3;
let z = x + y;
```

Internally the CPU might perform:

```text
Load 5 into Register A
Load 3 into Register B
Add A and B
Store result in Register C
```

Everything happens through registers.

---

## Registers Store State

The most important concept in this chapter is:

> State

State means:

> Information that persists over time.

Example:

Current score in a game:

```text
Score = 100
```

This score must be remembered.

That remembered value is state.

Registers store state.

---

## Stateless vs Stateful Circuits

Most logic gates are stateless.

Example:

```text
A = 1
B = 0
AND Output = 0
```

Remove the inputs:

```text
Nothing remains.
```

The circuit remembers nothing.

---

Registers are different.

They maintain information.

```text
Store 1010
```

Even if the original input disappears:

```text
1010
```

still remains stored.

This is state.

---

## How Can A Circuit Remember?

This seems impossible.

Logic gates simply transform inputs.

How can they remember previous values?

The answer is:

> Feedback

---

## Feedback Loops

Most circuits flow in one direction.

```text
Input
↓
Circuit
↓
Output
```

Registers introduce something new:

```text
Input
↓
Circuit
↓
Output
↑
│
└── Feedback
```

The output is fed back into the circuit.

This allows the circuit to preserve its state.

---

## The SR Latch

The simplest memory circuit is:

> SR Latch

SR means:

```text
Set Reset
```

Inputs:

```text
S = Set
R = Reset
```

Output:

```text
Q
```

Behavior:

| S   | R   | Result  |
| --- | --- | ------- |
| 1   | 0   | Set     |
| 0   | 1   | Reset   |
| 0   | 0   | Hold    |
| 1   | 1   | Invalid |

---

## Hold State

The most important feature is:

```text
Hold
```

When:

```text
S = 0
R = 0
```

The latch remembers its previous value.

Example:

```text
Stored Value = 1
```

Inputs disappear.

Output remains:

```text
1
```

This is memory.

---

## Flip-Flops

Real CPUs usually use:

> Flip-Flops

instead of simple latches.

A flip-flop is a more reliable memory circuit.

It stores:

```text
0
```

or

```text
1
```

until instructed to change.

Think of a flip-flop as:

```text
One memory cell
```

---

# Real-Life Analogy

## Latch

Open door.

Anyone can walk in or out anytime.

## Flip-Flop

Locked door.

Opens for 1 second every minute.

People can only enter when the door briefly opens.

---

# Why CPUs Use Flip-Flops

Imagine billions of circuits.

If everything changed whenever it wanted:

- Chaos.
- Some circuits would still be calculating while others already moved on.

Instead CPUs use a clock:

```text
Tick
Tick
Tick
Tick
```

Every flip-flop updates together.

```text
Tick #1 -> Capture data
Tick #2 -> Capture new data
Tick #3 -> Capture new data
```

This keeps the whole CPU synchronized.

---

# Relationship

```text
Transistor
    ↓
Logic Gates
    ↓
Latch
    ↓
Flip-Flop
    ↓
Register
```

A register is usually built from many flip-flops.

Example:

## 64-bit Register

```text
64 Flip-Flops
[FF][FF][FF][FF]...[FF]
```

Each flip-flop stores:

```text
1 bit
```

Together:

```text
64 bits
```

---

# One-Line Difference

- **Latch** = updates whenever enabled.
- **Flip-Flop** = updates only on a clock edge.

## Building Larger Registers

One flip-flop stores:

```text
1 bit
```

To store more data:

### 8-Bit Register

Needs:

```text
8 flip-flops
```

### 32-Bit Register

Needs:

```text
32 flip-flops
```

### 64-Bit Register

Needs:

```text
64 flip-flops
```

Each flip-flop stores one bit.

Together they form a register.

---

## Loading Data Into Registers

Registers usually support:

```text
Load
```

operation.

Example:

Current value:

```text
0011
```

New value:

```text
1100
```

Load signal:

```text
ON
```

Result:

```text
1100
```

The register replaces its previous contents.

---

## Reading Data From Registers

Registers also support:

```text
Read
```

Example:

Stored value:

```text
1010
```

Output:

```text
1010
```

The CPU retrieves the stored data.

---

## The Register File

Modern CPUs contain many registers.

Together they form:

> Register File

Example:

```text
R1 = 5
R2 = 10
R3 = 20
R4 = 30
```

The CPU can access any register quickly.

---

## Common CPU Registers

Modern processors contain specialized registers.

### General Purpose Registers

Store ordinary data.

```text
RAX RBX RCX RDX
```

### Instruction Pointer

Stores:

```text
Address of next instruction
```

### Stack Pointer

Stores:

```text
Current stack location
```

### Flags Register

Stores:

```text
Comparison results
```

Examples:

```text
Equal
Greater
Less
Overflow
```

---

## Why Registers Are Limited

If registers are so fast, why not make millions of them?

Because registers are expensive.

They require:

- Transistors.
- Physical space.
- Power.

More registers mean:

- Larger CPUs.
- More heat.
- Higher cost.

Engineers carefully balance speed and size.

---

## Registers Inside Program Execution

Suppose:

```rust
let x = 5;
let y = 10;
let z = x + y;
```

Internally:

```text
R1 = 5
R2 = 10
Add R1 + R2
R3 = 15
```

This is much closer to how the CPU thinks.

---

## Registers And Assembly Language

Assembly code exposes registers directly.

Example:

```assembly
MOV RAX, 5
MOV RBX, 10
ADD RAX, RBX
```

Meaning:

```text
Store 5 in RAX
Store 10 in RBX
Add them together
```

Assembly is essentially direct communication with registers.

---

## Registers And CPU Performance

One of the biggest performance principles in computing:

> Keep data in registers whenever possible.

Why?

Because:

```text
Register Access
```

is dramatically faster than:

```text
RAM Access
```

Modern compilers spend enormous effort optimizing register usage.

---

## The Growing Hierarchy

Our computer hierarchy now looks like:

```text
Information
↓
Bits
↓
Boolean Logic
↓
Logic Gates
↓
Digital Circuits
↓
Flip-Flops
↓
Registers
↓
CPU
```

For the first time, we have memory.

And without memory, computation would be impossible.

---

## First Principles Summary

A CPU must remember information.

Logic gates alone cannot remember.

Registers solve this problem.

Registers are small, extremely fast storage locations inside the CPU.

Registers are built from memory circuits called flip-flops.

Modern computation depends heavily on registers because they provide the fastest possible access to data.

---

## Key Takeaways

- Registers are the CPU's internal memory.
- Registers store binary data.
- Registers are built from flip-flops.
- Flip-flops are built from logic gates.
- Registers store state.
- State is information that persists over time.
- Registers are much faster than RAM.
- CPUs constantly read and write registers.
- Assembly language works directly with registers.
- Modern processors contain many registers organized into a register file.

---

## Mental Model

Think of a register as the CPU's notebook.

Whenever the CPU needs to remember something immediately:

```text
Store it in a register.
```

Whenever the CPU needs that information again:

```text
Read it from the register.
```

Registers are the processor's working memory.

Without them, a CPU would forget every calculation instantly.

---

## Check Your Understanding

1. What problem do registers solve?
2. What is state?
3. Why are logic gates alone insufficient for memory?
4. What is a feedback loop?
5. What is a flip-flop?
6. How many flip-flops are needed for a 64-bit register?
7. Why are registers faster than RAM?
8. What is a register file?
9. What is the role of the instruction pointer?
10. Why do compilers try to keep data in registers?

If you understand this chapter, you understand how computers remember information while performing computation.

---

## Solution

1. What problem do registers solve?
- They let the CPU remember intermediate results and state so subsequent operations can use them.

2. What is state?
- Information that persists over time (saved values that the CPU can read later).

3. Why are logic gates alone insufficient for memory?
- Gates are stateless: their outputs depend only on current inputs. Memory requires feedback or storage elements to hold values across time.

4. What is a feedback loop?
- A connection that routes outputs back into inputs so a circuit can preserve its previous value.

5. What is a flip-flop?
- A clocked memory element that stores one bit and updates on a clock edge.

6. How many flip-flops are needed for a 64-bit register?
- 64 flip-flops (one per bit).

7. Why are registers faster than RAM?
- Registers sit inside the CPU, so access involves far fewer logic stages and much lower latency than external RAM.

8. What is a register file?
- A collection of registers (the CPU's set of fast storage locations) with read/write ports.

9. What is the role of the instruction pointer?
- The instruction pointer (program counter) stores the address of the next instruction to fetch.

10. Why do compilers try to keep data in registers?
- Because register access is extremely fast and improves program performance.

## Next Topic

# Phase 0.8 — Arithmetic Logic Unit (ALU)

We will finally build the component that performs the actual arithmetic and logical operations inside a CPU, turning registers and circuits into a machine capable of computation.
