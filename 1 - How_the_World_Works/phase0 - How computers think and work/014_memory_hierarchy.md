# Phase 0.14 — Memory Hierarchy

## Introduction

In the previous chapters we learned how different memory technologies work:

```text
Registers
↓
SRAM
↓
DRAM
↓
Flash Memory
↓
HDD Storage
```

Each technology solves a different problem.

But a deeper question remains:

> Why does a computer contain all of them?

Why not build one giant memory that is:

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

Unfortunately:

```text
Physics says:

Pick at most two.
```

---

Fast and Large?

Possible.

```text
Very Expensive
```

Example:

```text
Huge SRAM
```

---

Fast and Cheap?

Possible.

```text
Very Small
```

Example:

```text
Registers
```

---

Large and Cheap?

Possible.

```text
Slow
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

# The Real Problem

Imagine a chef.

Suppose the chef is cooking.

Ingredients can be located in:

```text
Hand

Desk

Drawer

Storage Room

Warehouse
```

The farther away the ingredient is:

```text
The longer the chef waits.
```

Computers have exactly the same problem.

---

# Computation Is Easy

Suppose the CPU already has:

```text
x = 5

y = 3
```

Adding them is trivial.

```text
5 + 3
=
8
```

Modern CPUs can perform billions of operations every second.

---

The hard part is:

```text
Finding x

Finding y
```

Most CPU time is spent waiting for data.

Not doing math.

---

# The Memory Hierarchy

Modern computers solve this problem using layers.

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
    ↓

SSD
    ↓

HDD

```

Every layer trades:

```text
Speed

Capacity

Cost
```

against each other.

---

# Visualizing The Hierarchy

Think:

```text

CPU Registers
=
Hands

```

```text

L1 Cache
=
Desk Surface

```

```text

L2 Cache
=
Desk Drawer

```

```text

L3 Cache
=
Office Cabinet

```

```text

RAM
=
Storage Room

```

```text

SSD
=
Warehouse

```

```text

HDD
=
Warehouse In Another Building

```

The farther away data is:

```text
The slower it becomes.
```

---

# Registers

Registers are closest to the ALU.

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

Registers hold:

```text
Values currently being computed
```

Example:

```rust
let z = x + y;
```

During execution:

```text
RAX = x

RBX = y

ALU computes

RCX = z
```

Registers are the CPU's hands.

---

# Cache

Registers are too small.

A modern application might use:

```text
Hundreds of MB

or

Several GB
```

of memory.

Registers typically provide only:

```text
A few KB
```

So engineers added cache.

Cache is built from:

```text
SRAM
```

and exists in multiple levels.

---

## L1 Cache

Closest cache.

```text
Smallest

Fastest
```

Think:

```text
Desk Surface
```

---

## L2 Cache

Second level.

```text
Larger

Slightly Slower
```

Think:

```text
Desk Drawer
```

---

## L3 Cache

Third level.

```text
Much Larger

Shared Across Cores
```

Think:

```text
Office Cabinet
```

---

# RAM

Even cache is too small.

Modern computers need:

```text
Gigabytes
```

of memory.

This is where:

```text
DRAM
```

comes in.

RAM provides:

```text
Large Capacity

Reasonable Cost
```

but slower access.

Think:

```text
Storage Room
```

---

# SSD

RAM disappears when power is removed.

We need permanent storage.

This is the role of:

```text
SSD
```

built from:

```text
Flash Memory
```

Think:

```text
Warehouse
```

Large.

Persistent.

Much slower.

---

# HDD

Some systems still use:

```text
Hard Disk Drives
```

for massive storage.

Think:

```text
Warehouse In Another Building
```

Huge.

Cheap.

Slow.

---

# Why Data Moves

Suppose you open Chrome.

Initially:

```text
Chrome lives on SSD.
```

---

When launched:

```text
SSD
↓
RAM
```

The program is loaded into memory.

---

Frequently used portions move into:

```text
RAM
↓
L3
```

---

Then:

```text
L3
↓
L2
```

---

Then:

```text
L2
↓
L1
```

---

Then:

```text
L1
↓
Registers
```

---

Finally:

```text
Registers
↓
ALU
```

The closer data gets to the CPU:

```text
The faster computations become.
```

---

# Memory Access Example

Suppose the CPU needs:

```text
counter
```

Where does it look?

First:

```text
Registers
```

Found?

```text
Yes
```

Done.

---

Otherwise:

```text
L1 Cache
```

Found?

Done.

---

Otherwise:

```text
L2 Cache
```

Found?

Done.

---

Otherwise:

```text
L3 Cache
```

Found?

Done.

---

Otherwise:

```text
RAM
```

More expensive.

---

Otherwise:

```text
SSD
```

Very expensive.

---

Otherwise:

```text
HDD
```

Extremely expensive.

---

# Locality

The memory hierarchy works because programs rarely access memory randomly.

Programs usually reuse:

```text
Recent Data
```

and

```text
Nearby Data
```

This observation is called:

```text
Locality
```

---

## Temporal Locality

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

keeps getting reused.

---

## Spatial Locality

If memory address:

```text
1000
```

was accessed,

then addresses:

```text
1001
1002
1003
```

are likely to be accessed soon.

Nearby data tends to be used together.

---

This is why cache works.

---

# The Fundamental Rule

The closer memory is to the CPU:

```text
Faster

Smaller

More Expensive
```

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
(Fastest)

        ↓

L1 Cache
(SRAM)

        ↓

L2 Cache
(SRAM)

        ↓

L3 Cache
(SRAM)

        ↓

RAM
(DRAM)

        ↓

SSD
(Flash)

        ↓

HDD
(Magnetic Storage)

```

As we move downward:

```text
Capacity Increases

Cost Per Bit Decreases

Speed Decreases
```

---

# Key Takeaways

- No memory technology is simultaneously fast, cheap, and huge.
- Modern computers solve this using multiple memory layers.
- Registers are closest to computation.
- Cache stores recently used data.
- RAM stores active programs.
- SSDs store persistent data.
- HDDs provide large low-cost storage.
- Most CPU time is spent waiting for data.
- Data constantly moves toward the CPU as it becomes more important.
- Locality is the reason cache works.
- The memory hierarchy is one of the most important ideas in computer architecture.

---

# Next Topic

## Phase 0.15 — Memory Addressing

Now that we understand where data is stored, we can answer another fundamental question:

> How does the CPU find a specific byte among billions of bytes?

To answer that, we must learn about memory addresses.
