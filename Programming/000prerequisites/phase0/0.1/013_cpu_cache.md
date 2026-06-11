# Phase 0.12 — CPU Cache

## Introduction

In the previous chapter we learned:

```text
Transistor
↓
Logic Gate
↓
SR Latch
↓
Flip-Flop
↓
Register
↓
Register File
↓
SRAM Cell
```

We also learned that SRAM is:

```text
Fast
Expensive
Dense
```

and is used to build:

```text
L1 Cache
L2 Cache
L3 Cache
```

But a question remains:

> If CPUs already have registers, why do we need cache?

To answer this, we must understand one of the most important facts in computer engineering:

> CPUs are much faster than memory.

---

# The Speed Problem

Imagine a CPU running at:

```text
4 GHz
```

This means:

```text
4,000,000,000 cycles per second
```

The CPU can perform billions of operations every second.

---

Suppose we execute:

```rust
let z = x + y;
```

The CPU needs:

```text
x
y
```

before it can perform the addition.

---

Where are x and y?

Maybe:

```text
Registers
```

Maybe:

```text
RAM
```

Maybe:

```text
SSD
```

The location matters enormously.

---

# Why Memory Access Is Expensive

Imagine a programmer.

---

Case 1:

```text
Pen is in your hand.
```

Access time:

```text
Instant
```

---

Case 2:

```text
Pen is on your desk.
```

Access time:

```text
Very fast
```

---

Case 3:

```text
Pen is in another room.
```

Access time:

```text
Slower
```

---

Case 4:

```text
Pen is in another building.
```

Access time:

```text
Very slow
```

---

Computers face the same problem.

Data that is physically farther away takes longer to access.

---

# Registers: CPU's Hands

Registers are the closest memory possible.

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

Registers are directly connected to the ALU.

---

Advantages:

```text
Fastest possible access
```

Disadvantages:

```text
Very small
```

Typical CPU:

```text
~2 KB total registers
```

Not enough.

---

# RAM: Large But Slow

RAM is much larger.

Example:

```text
16 GB
```

Huge compared to registers.

---

But RAM is physically outside the CPU core.

```text

CPU
 |
 |
 V

RAM

```

Signals must travel farther.

Access takes much longer.

---

The CPU spends time waiting.

---

# The Fundamental Problem

Engineers faced a dilemma.

Registers are:

```text
Extremely Fast
Extremely Small
```

RAM is:

```text
Extremely Large
Much Slower
```

We need something in the middle.

---

# The Idea Behind Cache

Engineers created a new layer.

```text

CPU
 |
 V

Cache
 |
 V

RAM

```

Cache acts as a middleman.

---

Think:

```text
Registers = Hands

Cache = Desk

RAM = Filing Cabinet
```

You keep frequently used items on the desk.

You do not walk to the filing cabinet every minute.

---

# What Is Cache?

Cache is memory built from SRAM cells.

Remember:

```text
SRAM Cell
=
6 Transistors
```

SRAM is:

```text
Much faster than RAM
```

but:

```text
Much more expensive
```

Therefore CPUs contain only a small amount.

---

# Cache Stores Recently Used Data

Suppose a program repeatedly accesses:

```rust
counter += 1;
counter += 1;
counter += 1;
counter += 1;
```

The CPU keeps using:

```text
counter
```

again and again.

---

Instead of reading RAM every time:

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

the CPU stores the value in cache.

```text
CPU
 ↓
Cache
 ↓
CPU
 ↓
Cache
 ↓
CPU
```

Much faster.

---

# Why Cache Works

Engineers noticed something interesting.

Programs rarely access memory randomly.

Instead they repeatedly access:

```text
The same data
```

or

```text
Nearby data
```

This observation is called:

```text
Locality
```

---

# Temporal Locality

Temporal means:

```text
Time
```

If data was used recently:

```text
It will probably be used again soon.
```

Example:

```rust
counter += 1;
counter += 1;
counter += 1;
```

The variable:

```text
counter
```

is reused constantly.

Cache keeps it nearby.

---

# Spatial Locality

Spatial means:

```text
Location
```

If a program accesses:

```text
array[100]
```

it will probably access:

```text
array[101]
array[102]
array[103]
```

soon.

Nearby memory tends to be used together.

---

Because of this, cache loads blocks of memory.

Not just one byte.

---

# Cache Lines

A cache stores data in chunks called:

```text
Cache Lines
```

Typically:

```text
64 Bytes
```

---

Suppose the CPU requests:

```text
Address 1000
```

Cache may load:

```text
1000
1001
1002
...
1063
```

all at once.

---

Why?

Because nearby memory is likely to be needed soon.

---

# Cache Hit

Suppose data is already in cache.

```text

CPU
 |
 V

Cache

```

The CPU finds it immediately.

This is called:

```text
Cache Hit
```

---

A cache hit is fast.

Very fast.

---

# Cache Miss

Suppose data is not in cache.

```text

CPU
 |
 V

Cache

(Not Found)

 |
 V

RAM

```

The CPU must fetch data from RAM.

This is called:

```text
Cache Miss
```

---

A cache miss is expensive.

The CPU must wait.

---

# Why Multiple Cache Levels Exist

A natural question appears:

> Why not make one gigantic cache?

Because SRAM is expensive.

Very expensive.

---

Bigger cache means:

```text
More transistors
More silicon area
More power
More cost
```

---

It also means:

```text
Longer wires
```

Longer wires increase access time.

Physics wins.

---

# L1 Cache

L1 means:

```text
Level 1 Cache
```

Characteristics:

```text
Smallest
Fastest
Closest to CPU
```

Example:

```text
64 KB
```

---

Visual:

```text

CPU Core
   |
   V

+--------+
|  L1    |
+--------+

```

---

# L2 Cache

L2 means:

```text
Level 2 Cache
```

Characteristics:

```text
Larger
Slightly slower
```

Example:

```text
1 MB
```

---

Visual:

```text

CPU
 |
 V

L1
 |
 V

L2

```

---

# L3 Cache

L3 means:

```text
Level 3 Cache
```

Characteristics:

```text
Much larger
Shared by CPU cores
Slower than L2
```

Example:

```text
32 MB
```

---

Visual:

```text

CPU
 |
 V

L1
 |
 V

L2
 |
 V

L3

```

---

# How A Memory Lookup Works

Suppose CPU needs data.

Step 1:

```text
Check L1
```

Found?

```text
Yes
```

Done.

---

If not:

```text
Check L2
```

Found?

```text
Yes
```

Done.

---

If not:

```text
Check L3
```

Found?

```text
Yes
```

Done.

---

If not:

```text
Go to RAM
```

Expensive.

---

The complete path:

```text

CPU
 ↓

L1
 ↓

L2
 ↓

L3
 ↓

RAM

```

---

# Why Cache Is One Of The Most Important Technologies Ever Invented

Without cache:

```text
CPU spends most of its life waiting.
```

Modern CPUs would be dramatically slower.

---

Cache allows:

```text
Fast programs

Fast databases

Fast games

Fast operating systems

Fast web servers
```

Everything depends on it.

---

# The Real Memory Hierarchy

We can now see the complete picture.

```text

Registers
≈ 2 KB
Fastest

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

As we move downward:

```text
Capacity increases

Cost decreases

Speed decreases
```

---

# Key Takeaways

- CPUs are much faster than RAM.
- Registers are extremely fast but tiny.
- RAM is huge but slower.
- Cache bridges the gap between CPU and RAM.
- Cache is built from SRAM.
- Programs usually reuse recent and nearby data.
- Temporal locality means recently used data is likely to be reused.
- Spatial locality means nearby data is likely to be accessed together.
- Cache hits are fast.
- Cache misses are slow.
- L1 is smallest and fastest.
- L2 is larger and slower.
- L3 is largest and shared between cores.
- Modern CPU performance depends heavily on cache.

---

# Next Topic

## Phase 0.14 — Memory Hierarchy

Now that we understand:

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

we can study why memory is organized into layers and how data moves through the computer.
