# Phase 0.13 — Memory Hierarchy

## Introduction

In the previous chapter we learned:

```text
Registers
↓
L1 Cache
↓
L2 Cache
↓
L3 Cache
↓
RAM
```

But a deeper question remains:

> Why does memory have so many layers?

Why not simply build:

```text
One gigantic memory
```

that is:

```text
Fast
Cheap
Huge
```

The answer comes from physics.

---

# The Impossible Dream

Every engineer wants memory that is:

```text
Fast
Large
Cheap
```

Unfortunately, physics says:

```text
Pick at most two.
```

---

## Fast + Large

Possible.

But:

```text
Very expensive.
```

Example:

```text
Huge SRAM
```

---

## Fast + Cheap

Possible.

But:

```text
Very small.
```

Example:

```text
Registers
```

---

## Large + Cheap

Possible.

But:

```text
Slow.
```

Example:

```text
DRAM
```

---

This creates a problem.

Programs need:

```text
Huge amounts of memory
```

while CPUs need:

```text
Extremely fast access
```

---

# The Solution

Engineers built layers.

Instead of:

```text
One memory
```

we create:

```text
Many memories
```

Each optimized for a different tradeoff.

---

# The Memory Pyramid

Modern computers look like this:

```text

           Registers
              2 KB

                ↓

           L1 Cache
             64 KB

                ↓

           L2 Cache
              1 MB

                ↓

           L3 Cache
             32 MB

                ↓

             RAM
             16 GB

                ↓

             SSD
              1 TB

```

---

As we move downward:

```text
More capacity

Less speed

Lower cost
```

---

# Registers

Registers sit inside the CPU core.

```text

CPU Core

+------+
| ALU  |
+------+

+------+
| RAX  |
+------+

+------+
| RBX  |
+------+

```

---

Registers are:

```text
Smallest

Fastest

Most expensive per bit
```

---

Purpose:

```text
Store values currently being computed.
```

Example:

```rust
let z = x + y;
```

During execution:

```text
RAX = x

RBX = y

ALU performs addition

RCX = z
```

---

Think:

```text
Registers = CPU's Hands
```

---

# L1 Cache

L1 means:

```text
Level 1 Cache
```

Built using:

```text
SRAM
```

---

Characteristics:

```text
Very Fast

Small

Close to CPU
```

Example:

```text
64 KB
```

---

Think:

```text
L1 = Desk Surface
```

Everything currently needed is placed here.

---

# L2 Cache

L2 means:

```text
Level 2 Cache
```

Characteristics:

```text
Larger

Slightly Slower

Still Very Fast
```

Example:

```text
1 MB
```

---

Think:

```text
L2 = Desk Drawer
```

Still nearby.

But slightly slower to access.

---

# L3 Cache

L3 means:

```text
Level 3 Cache
```

Characteristics:

```text
Much Larger

Shared Between Cores

Slower Than L2
```

Example:

```text
32 MB
```

---

Think:

```text
L3 = Filing Cabinet In Your Office
```

Still nearby.

But slower than your desk.

---

# RAM

RAM is built from:

```text
DRAM
```

instead of SRAM.

---

Characteristics:

```text
Huge

Cheap

Much Slower
```

Example:

```text
16 GB
```

or

```text
32 GB
```

---

Think:

```text
RAM = Storage Room
```

The data exists.

But retrieving it takes longer.

---

# SSD

SSD uses:

```text
Flash Memory
```

Characteristics:

```text
Very Large

Persistent

Much Slower Than RAM
```

Example:

```text
1 TB
```

---

Think:

```text
SSD = Warehouse
```

The warehouse contains everything.

But walking there takes time.

---

# Why Not Put Everything In Registers?

Suppose Chrome uses:

```text
500 MB
```

of memory.

Registers provide roughly:

```text
2 KB
```

of storage.

---

Comparison:

```text
Chrome

500,000 KB
```

vs

```text
Registers

2 KB
```

Not even close.

---

Building enough registers would require:

```text
Hundreds of millions of flip-flops
```

and

```text
Billions of transistors
```

The CPU would become absurdly large.

---

# Why Not Build Everything Using Cache?

Good question.

Cache uses:

```text
SRAM
```

which is fast.

Why not make:

```text
1 TB of SRAM?
```

---

Because SRAM is expensive.

Remember:

```text
1 SRAM Cell

=
6 Transistors
```

---

A 1 TB SRAM chip would require an insane number of transistors.

Cost would be astronomical.

---

Therefore:

```text
SRAM
=
Fast but expensive
```

---

# Why Not Use Only RAM?

Another good question.

Suppose the CPU must read:

```text
counter
```

millions of times.

Without cache:

```text

CPU
 ↓
RAM
 ↓
CPU
 ↓
RAM
 ↓
CPU

```

The CPU spends most of its life waiting.

Performance collapses.

---

# The Real Purpose Of The Hierarchy

The memory hierarchy exists because programs exhibit:

```text
Locality
```

---

Programs tend to reuse:

```text
Recent Data
```

and

```text
Nearby Data
```

---

This means:

```text
Small Fast Memory
```

can satisfy most requests.

Only occasionally does the CPU need:

```text
Large Slow Memory
```

---

# Example: Opening Chrome

Suppose you open Chrome.

---

Most of Chrome lives in:

```text
RAM
```

because it is large.

---

Recently used data moves into:

```text
L3 Cache
```

---

Frequently used data moves into:

```text
L2 Cache
```

---

Very frequently used data moves into:

```text
L1 Cache
```

---

Values currently being processed move into:

```text
Registers
```

---

Visual:

```text

SSD
 ↓

RAM
 ↓

L3
 ↓

L2
 ↓

L1
 ↓

Registers
 ↓

ALU

```

Data gradually moves closer to computation.

---

# Memory Access Example

Suppose CPU needs:

```text
counter
```

Step 1:

```text
Check Registers
```

Found?

```text
Yes
```

Done.

---

Otherwise:

```text
Check L1
```

Found?

```text
Yes
```

Done.

---

Otherwise:

```text
Check L2
```

Found?

```text
Yes
```

Done.

---

Otherwise:

```text
Check L3
```

Found?

```text
Yes
```

Done.

---

Otherwise:

```text
Go To RAM
```

Expensive.

---

If RAM doesn't contain it:

```text
Load From SSD
```

Very expensive.

---

# The Fundamental Rule

The closer memory is to the CPU:

```text
Faster
Smaller
More Expensive
```

---

The farther memory is from the CPU:

```text
Slower
Larger
Cheaper
```

---

# Complete Memory Hierarchy

```text

Registers
≈ 2 KB

↓

L1 Cache (SRAM)
≈ 64 KB

↓

L2 Cache (SRAM)
≈ 1 MB

↓

L3 Cache (SRAM)
≈ 32 MB

↓

RAM (DRAM)
≈ 16 GB

↓

SSD (Flash)
≈ 1 TB

```

---

# Key Takeaways

- No memory technology is simultaneously fast, cheap, and huge.
- Registers are the fastest memory.
- Cache is built from SRAM.
- RAM is built from DRAM.
- SSDs use Flash Memory.
- As memory gets larger, it becomes slower.
- As memory gets closer to the CPU, it becomes faster.
- The memory hierarchy exists to balance speed, capacity, and cost.
- Modern computer performance depends heavily on moving data efficiently through these layers.

---

# Next Topic

## Phase 0.15 — Introduction to Assembly

Now that we understand:

```text
Registers
Cache
RAM
SSD
```

we can finally learn how a CPU actually executes instructions and manipulates memory addresses.
