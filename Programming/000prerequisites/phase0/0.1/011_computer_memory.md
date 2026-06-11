# Phase 0.11 — Computer Memory Hardware

## Introduction

In the previous chapters, we built the fundamental pieces of a CPU.

Our CPU now contains:

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

+----------------+
| Program Counter|
+----------------+

+----------------+
| Instruction Reg|
+----------------+
```

The CPU can:

- Execute instructions
- Perform calculations
- Store temporary values

This sounds impressive.

But there is a problem.

A modern web browser may use:

```text
Hundreds of MB
```

A video game may use:

```text
Several GB
```

An AI model may use:

```text
Many GB
```

Our CPU only has a small number of registers.

```text
RAX
RBX
RCX
RDX
...
```

Even a modern CPU typically has only a few dozen general-purpose registers.

Clearly:

> Registers are not enough.

We need much larger storage.

This leads us to computer memory.

---

# Why Memory Exists

Imagine a CPU with only registers.

```text
CPU
│
├── Registers
├── ALU
└── Control Unit
```

Suppose we want to store:

```text
5
```

Easy.

Store it in a register.

Now suppose we want:

```text
1,000,000 numbers
```

Impossible.

There are not enough registers.

We need a giant storage system.

That storage system is called:

> Main Memory

or simply:

> RAM

---

# What Is Memory?

Memory is nothing more than:

> A large collection of storage locations.

Think of an apartment building.

```text
Apartment 0
Apartment 1
Apartment 2
Apartment 3
...
Apartment N
```

Each apartment stores something.

Memory works the same way.

```text
Memory Cell 0
Memory Cell 1
Memory Cell 2
Memory Cell 3
...
Memory Cell N
```

Each memory cell stores information.

---

# Memory Stores Bits

At the lowest level, a memory cell stores:

```text
0
```

or

```text
1
```

Nothing else.

Example:

```text
Address    Value

0          1
1          0
2          1
3          1
4          0
```

Computers build everything from these bits.

---

# From Bits To Bytes

One bit is very small.

Computers usually group bits together.

```text
8 Bits = 1 Byte
```

Example:

```text
10110010
```

This entire sequence is:

```text
1 Byte
```

Most modern memory is organized around bytes.

---

# Memory Addresses

A critical question appears:

> How does the CPU know where information is stored?

Answer:

Every memory location has an address.

Think of houses.

```text
House #1
House #2
House #3
House #4
```

You find a house using its address.

Memory works exactly the same way.

---

# Example Memory Layout

```text
Address      Data

0            10101010
1            00001111
2            11110000
3            00110011
```

The CPU can request:

```text
Read Address 2
```

Memory responds:

```text
11110000
```

---

# Reading Memory

Suppose:

```text
Address 100
```

contains:

```text
42
```

CPU request:

```text
Read Address 100
```

Memory returns:

```text
42
```

Visual:

```text
CPU
 |
 | Read Address 100
 |
 v

+------------+
|   Memory   |
+------------+

 |
 | 42
 |
 v

CPU
```

---

# Writing Memory

Suppose the CPU wants to store:

```text
99
```

at:

```text
Address 100
```

Operation:

```text
Write 99 -> Address 100
```

Memory updates:

```text
Address 100 = 99
```

The value is now remembered.

---

# Memory Is Built From Cells

A memory chip contains millions or billions of memory cells.

Each cell stores:

```text
0
or
1
```

Example:

```text
+---+---+---+---+
| 1 | 0 | 1 | 1 |
+---+---+---+---+

+---+---+---+---+
| 0 | 1 | 0 | 0 |
+---+---+---+---+

+---+---+---+---+
| 1 | 1 | 1 | 0 |
+---+---+---+---+
```

Modern RAM contains billions of these cells.

---

# Why Not Use Registers For Everything?

Registers are the fastest memory.

So why not build:

```text
1 TB of Registers
```

instead of RAM?

Because registers are expensive.

Registers are built from flip-flops.

Flip-flops require many transistors.

This means:

```text
Large
Expensive
Power Hungry
```

A CPU made entirely from registers would be enormous.

---

# Memory Hierarchy

Different memory technologies make different trade-offs.

Some are:

```text
Fast
```

but expensive.

Others are:

```text
Large
```

but slower.

Therefore computers use layers.

```text
Registers
↓
Cache
↓
RAM
↓
SSD
↓
Hard Disk
```

Each layer trades:

```text
Speed
Capacity
Cost
```

against the others.

---

# SRAM (Static RAM)

SRAM stands for:

```text
Static Random Access Memory
```

SRAM stores information using transistor feedback circuits.

Conceptually:

```text
SRAM Cell
≈
Tiny Self-Remembering Circuit
```

Once a value is written:

```text
0
```

or

```text
1
```

the cell continuously remembers it.

As long as power exists.

---

## SRAM Cell Analogy

Imagine a light switch.

```text
Switch Up   = 1

Switch Down = 0
```

As long as electricity exists:

```text
State remains.
```

No refreshing required.

---

## Advantages Of SRAM

```text
Extremely Fast
Very Low Latency
No Refresh Needed
CPU Friendly
```

---

## Disadvantages Of SRAM

Each bit requires several transistors.

Typical SRAM cell:

```text
6 Transistors
```

per bit.

This makes SRAM:

```text
Large
Expensive
Lower Density
```

---

## Where SRAM Is Used

SRAM is used for:

```text
CPU Registers
L1 Cache
L2 Cache
L3 Cache
```

where speed is critical.

---

# DRAM (Dynamic RAM)

DRAM stands for:

```text
Dynamic Random Access Memory
```

Unlike SRAM:

```text
1 Transistor
+
1 Capacitor
```

stores one bit.

This makes DRAM much smaller and cheaper.

---

# Capacitor Analogy

Imagine a tiny bucket.

```text
Bucket Full  = 1

Bucket Empty = 0
```

The bucket stores electrical charge.

That charge represents information.

---

# The Problem With DRAM

Capacitors leak.

Imagine:

```text
Bucket Full
```

slowly becoming:

```text
Bucket Empty
```

even if nobody touches it.

The stored information slowly disappears.

---

# DRAM Refresh

To prevent data loss:

```text
Read Cell
Rewrite Cell
```

must occur continuously.

Millions of times every second.

This process is called:

> Refreshing

Without refresh:

```text
1 → 0
```

and information would disappear.

---

## Advantages Of DRAM

```text
Cheap
Dense
Large Capacity
```

Billions of DRAM cells fit on a chip.

---

## Disadvantages Of DRAM

```text
Slower Than SRAM
Requires Refreshing
Higher Latency
```

---

# SRAM vs DRAM

| Feature        | SRAM      | DRAM   |
| -------------- | --------- | ------ |
| Speed          | Faster    | Slower |
| Cost           | Expensive | Cheap  |
| Density        | Lower     | Higher |
| Refresh Needed | No        | Yes    |
| Typical Use    | Cache     | RAM    |

---

# DDR3, DDR4, DDR5

Many people think:

```text
DRAM
DDR4
```

are different things.

They are not.

Relationship:

```text
Memory
│
└── DRAM
     │
     └── DDR SDRAM
          │
          ├── DDR3
          ├── DDR4
          └── DDR5
```

Therefore:

```text
DDR4 = A Type Of DRAM
```

---

# What People Mean By RAM

When somebody says:

```text
16 GB RAM
```

they almost always mean:

```text
16 GB DRAM
```

typically:

```text
DDR4
or
DDR5
```

---

# Volatile Memory

RAM loses information when power disappears.

```text
Power ON
↓
Data Exists

Power OFF
↓
Data Gone
```

This is called:

> Volatile Memory

Both SRAM and DRAM are volatile.

---

# Non-Volatile Memory

Storage devices behave differently.

Examples:

```text
SSD
Hard Disk
USB Drive
```

These retain information after power loss.

This is called:

> Non-Volatile Memory

---

# Example: Opening Chrome

Suppose Chrome is installed on an SSD.

```text
SSD
↓
Chrome Files
```

When launched:

```text
SSD
↓
RAM
↓
CPU
```

The operating system loads Chrome into RAM.

The CPU then executes the code from RAM.

Not directly from SSD.

---

# Why Memory Hierarchy Exists

Users want memory that is:

```text
Fast
Cheap
Large
```

Unfortunately:

```text
Fast
Cheap
Large
```

cannot all be maximized simultaneously.

Therefore computers use layers:

```text
Small + Fast
    Registers

Medium + Fast
    Cache

Large + Slower
    RAM

Huge + Slow
    SSD
```

This compromise makes modern computing possible.

---

# Mental Model

Think of memory as a city.

```text
Registers = Desk

Cache = Office

RAM = Building

SSD = Warehouse
```

Frequently used information stays close.

Rarely used information stays farther away.

The CPU constantly moves data between these layers.

---

# First Principles Summary

Memory is a collection of storage locations.

Each location contains:

```text
Address
+
Data
```

Computers store information using memory cells.

Modern systems use multiple memory technologies:

```text
Registers
↓
SRAM
↓
DRAM
↓
SSD
```

Each layer trades:

```text
Speed
Capacity
Cost
```

against the others.

No single technology can simultaneously be:

```text
Fast
Cheap
Large
```

The entire memory hierarchy exists because of this fundamental trade-off.

## Next Topic

# Phase 0.12 — CPU Cache

We now understand RAM.

But modern CPUs almost never access RAM directly.

Instead they use:

```text
L1 Cache
L2 Cache
L3 Cache
```

which are among the most important performance technologies ever invented.
