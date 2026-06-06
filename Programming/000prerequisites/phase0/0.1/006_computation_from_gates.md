## Phase 0.6 — Building Computation From Gates

### The Big Idea

One gate alone is useless.

Think of a single worker:

```
[Worker]
```

Can one worker build a city? No.

Now scale it:

```
Workers → Teams → Departments → Company
```

Computers work the same way:

```
Transistors → Logic Gates → Circuits → CPU
```

A CPU is just **billions of tiny workers (gates)** cooperating.

---

## The First Useful Circuit: Addition

Let’s start simple:

```
1 + 0 = 1
```

Easy.

But:

```
1 + 1 = 10
```

Now we have **two bits**:

```
   10
   ↑ ↑
   | |
   | └── Result (SUM)
   └──── Carry
```

So addition needs:

- Result bit
- Carry bit

---

This is the exact place where most people get confused.

Let's forget gates for a minute.

---

# Why Do We Need Carry?

Suppose you add in decimal:

```text
  99
+  1
----
100
```

Look at the rightmost column:

```text
9 + 1 = 10
```

You write:

```text
0
```

and carry:

```text
1
```

to the next column.

That carry is extra information.

Binary works exactly the same way.

---

# Binary Example

Add:

```text
  1
+ 1
---
 10
```

Result:

```text
10
```

Notice:

```text
Result bit = 0
Carry bit  = 1
```

The carry must move to the next column.

---

# Half Adder

A Half Adder only knows:

```text
A + B
```

Example:

```text
A = 1
B = 1
```

Output:

```text
SUM   = 0
CARRY = 1
```

Perfect.

But now let's add larger numbers.

---

# Example: 11 + 01

Binary:

```text
  11
+ 01
----
 100
```

Let's solve column by column.

---

## Rightmost Bit

```text
1 + 1
```

Result:

```text
10
```

So:

```text
SUM   = 0
Carry = 1
```

Current answer:

```text
 ?0
```

Carry:

```text
1
```

must move left.

---

## Left Bit

Now we are NOT adding:

```text
1 + 0
```

We are adding:

```text
1 + 0 + Carry
```

which is:

```text
1 + 0 + 1
```

Result:

```text
10
```

Again:

```text
SUM   = 0
Carry = 1
```

Final answer:

```text
100
```

Correct.

---

# Here's The Problem

A Half Adder can only do:

```text
A + B
```

It cannot do:

```text
A + B + Carry
```

because it has only two inputs.

```text
A
B
```

No place for Carry.

---

# Enter Full Adder

A Full Adder adds THREE things:

```text
A
B
Carry In
```

Inputs:

```text
A
B
Cin
```

Output:

```text
SUM
Cout
```

where:

```text
Cin  = Carry coming from previous column
Cout = Carry going to next column
```

---

# Example

```text
A   = 1
B   = 1
Cin = 1
```

Calculate:

```text
1 + 1 + 1
```

Decimal:

```text
3
```

Binary:

```text
11
```

Therefore:

```text
SUM  = 1
Cout = 1
```

Because:

```text
      11
      ↑↑
      │└─ SUM
      └── Carry
```

---

---

# Now The Magic

Suppose we want:

```text
1011
+
0101
```

A 4-bit number.

We use FOUR Full Adders.

---

# FA0 (Rightmost Bit)

```text
1 + 1 + 0
```

Result:

```text
SUM  = 0
Carry= 1
```

---

# FA1

Carry from FA0 arrives.

```text
1 + 0 + 1
```

Result:

```text
SUM  = 0
Carry= 1
```

---

# FA2

```text
0 + 1 + 1
```

Result:

```text
SUM  = 0
Carry= 1
```

---

# FA3

```text
1 + 0 + 1
```

Result:

```text
SUM  = 0
Carry= 1
```

Final carry:

```text
1
```

Answer:

```text
10000
```

---

# Why The Chain Exists

Look at this:

```text
[FA0] → [FA1] → [FA2] → [FA3]
```

The arrow is NOT data.

The arrow is:

```text
Carry
```

More accurately:

```text
          Carry
            │
            ▼

[FA0] ---> [FA1] ---> [FA2] ---> [FA3]
   │          │          │          │
 SUM0       SUM1       SUM2       SUM3
```

Or:

```text
Cout0 -> Cin1
Cout1 -> Cin2
Cout2 -> Cin3
```

Each Full Adder passes its carry to the next one.

Exactly like how you learned addition in school.

---

# Why 64-bit CPUs Need 64 Full Adders

A bit can store:

```text
0 or 1
```

A Full Adder can add:

```text
1 bit
```

Therefore:

```text
1 Full Adder  = 1-bit addition
```

Need 4-bit numbers?

```text
4 Full Adders
```

Need 8-bit numbers?

```text
8 Full Adders
```

Need 64-bit numbers?

```text
64 Full Adders
```

```text
[FA][FA][FA][FA]...[FA]
 64 times
```

That is the first-principles reason a 64-bit CPU contains long chains of adders.

Each Full Adder is responsible for exactly **one column of binary addition**, just like each column in handwritten arithmetic.

## Comparator

Computers constantly compare:

- `x == y`
- `x > y`
- `x < y`

### Example

```
A = 1010
B = 1010

Result: TRUE
```

```
A = 1010
B = 1000

Result: FALSE
```

### Visual

```
 A ────────\
             >── Comparator ─── Result
 B ────────/
```

Think: **Inspector checking if two things match**

---

## `Registers (Memory)`

## Registers

We now reach something extremely important.

Until now all circuits simply transformed data.

But computers need memory.

They must remember information.

This leads to:

> Registers

---

## What Is A Register?

A register is a small storage location inside the CPU.

It stores bits.

Example:

`10110110`

The register remembers the value until it changes.

---

## Why Registers Matter

Suppose a CPU computes:

`5 + 3`

Result:

`8`

Where should the result go?

The answer:

> Register

Registers are the CPU's fastest memory.

---

## CPU Registers

Modern CPUs contain registers such as:

`RAX`, `RBX`, `RCX`, `RDX`

on x86 processors.

These hold:

- Numbers.
- Memory addresses.
- Intermediate results.

Every program constantly reads and writes registers.

---

## Building Registers From Gates

Registers are built using:

- Logic gates.
- Feedback loops.

The feedback loop allows a circuit to remember its previous state.

This is the birth of memory.

Without feedback:

`Input changes -> Output changes`

With feedback:

`Input changes -> State remembered`

This idea is revolutionary.

---

## The Hierarchy We Have Built

At this point our hierarchy looks like:

```text
Transistors -> Logic Gates -> Adders / Comparators / Multiplexers / Decoders / Registers -> CPU Components
```

For the first time we have enough building blocks to start constructing an actual processor.

---

## First Principles Summary

Logic gates alone cannot perform useful computation.

By combining gates we create circuits.

Important circuits include:

- Half Adders.
- Full Adders.
- Comparators.
- Multiplexers.
- Decoders.
- Registers.

These circuits form the foundation of every CPU.

Arithmetic comes from adders.

Decision making comes from comparators.

Selection comes from multiplexers.

Instruction routing comes from decoders.

Memory begins with registers.

---

**A register is a tiny, ultra-fast storage location inside the CPU, and its size is simply the number of bits it can hold at once (e.g., 64 bits for `RAX`on modern x86-64 CPUs).**

## Key Takeaways

This is where it clicks.

Think of a CPU as constantly asking two questions:

```text
1. Where should I get data from?
2. Where should I send data to?
```

---

# Multiplexer (MUX)

Answers:

> **Where should I get data from?**

Suppose CPU has 4 registers:

```text
R0 = 10
R1 = 20
R2 = 30
R3 = 40
```

And an instruction says:

```asm
ADD R1, R2
```

The CPU needs the values:

```text
20
30
```

How does it choose R1 and R2?

Using a MUX.

```text
R0 ----\
R1 -----\
R2 ------> MUX ----> ALU
R3 -----/
```

Selector says:

```text
Choose R2
```

Output:

```text
30
```

The MUX is literally selecting which register's value goes into the ALU (Arithmetic Logic Unit).

---

## Real CPU Example

When you write:

```rust
let c = a + b;
```

CPU internally does:

```text
Select register containing a
Select register containing b
Send both to ALU
```

Those selections are performed by multiplexers.

---

# Decoder

Answers:

> **Where should I send data to?**

Suppose ALU computes:

```text
20 + 30 = 50
```

Now where should 50 go?

```asm
ADD R1, R2 -> R3
```

The CPU must write:

```text
50
```

into:

```text
R3
```

not R0, R1, or R2.

That's what a decoder does.

---

Visual:

```text
Destination = R3

        11
         |
         v

      Decoder

R0  OFF
R1  OFF
R2  OFF
R3  ON
```

Only R3 is enabled for writing.

---

# Memory Example

Suppose RAM contains:

```text
Address 0
Address 1
Address 2
Address 3
...
Address 1,000,000
```

CPU wants:

```text
Address 2
```

The decoder activates only:

```text
Address 2
```

```text
Address0  OFF
Address1  OFF
Address2  ON
Address3  OFF
```

Without decoders, every memory cell would try to respond at once.

Chaos.

---

# First Principles

Imagine a city.

### MUX

Question:

```text
Which house should deliver a package?
```

Choose one house.

```text
House A
House B
House C

     ↓
    MUX

House B selected
```

---

### Decoder

Question:

```text
Which house should receive the package?
```

```text
Address = House B

     ↓
  Decoder

House A OFF
House B ON
House C OFF
```

---

# Inside Every CPU Cycle

A simplified CPU cycle looks like:

```text
Registers
    ↓
   MUX
    ↓
   ALU
    ↓
 Decoder
    ↓
Registers
```

Example:

```text
R1 = 20
R2 = 30
```

MUX selects:

```text
R1 and R2
```

ALU computes:

```text
20 + 30 = 50
```

Decoder selects:

```text
R3
```

Result stored:

```text
R3 = 50
```

---

## One-line summary

```text
MUX     = Choose where data comes FROM.

Decoder = Choose where data goes TO.
```

That's why almost every CPU, RAM chip, cache, SSD controller, GPU, and network card contains thousands or millions of multiplexers and decoders. They are the traffic-control system of digital hardware.

- Circuits are built by combining logic gates.
- Half Adders perform simple binary addition.
- Full Adders handle carries.
- Comparators compare values.
- Multiplexers select inputs.
- Decoders activate outputs.
- Registers store information.
- Registers are the CPU's fastest memory.
- Modern processors are built from billions of interconnected circuits.

---

## Mental Model

Think of logic gates as individual workers.

Think of digital circuits as teams.

A worker alone can do very little.

A team can:

- Add numbers.
- Compare values.
- Store data.
- Make decisions.

A CPU is simply billions of these teams working together.

---

## Check Your Understanding

1. What is the difference between a gate and a circuit?
2. Why does a Half Adder need a Carry output?
3. Which gates are used inside a Half Adder?
4. Why are Full Adders necessary?
5. What does a comparator do?
6. What is a multiplexer?
7. What is a decoder?
8. Why are registers important?
9. What makes registers different from other circuits?
10. Why are registers considered memory?

If you understand this chapter, you understand the first real computational building blocks of a processor.

---

## Next Topic

# Phase 0.7 — Registers

We will dive much deeper into registers, memory, state, and how a CPU remembers information while executing programs.
