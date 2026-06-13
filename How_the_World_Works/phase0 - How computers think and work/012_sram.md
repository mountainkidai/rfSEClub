Understanding this chain is the foundation for everything that comes next:

- SRAM
- DRAM
- Cache
- RAM
- CPU architecture
- Operating systems

# How Logic Gates Become Transistors

So far we have treated logic gates as magical building blocks.

For example:

```text
AND Gate
OR Gate
NOT Gate
NOR Gate
```

But logic gates are not fundamental.

They are built from transistors.

The real hierarchy is:

```text
Transistor
    ↓
Logic Gate
    ↓
Memory Circuits
    ↓
CPU
```

---

## The Transistor

A transistor is an electrically controlled switch.

Imagine a water pipe.

```text

Water Flow
    |
    V

--------- Valve ---------

```

If the valve is closed:

```text
No water flows.
```

If the valve is opened:

```text
Water flows.
```

A transistor behaves similarly.

```text

Electricity
     |
     V

------ Switch ------

```

A signal controls whether electricity can pass through.

---

## Two Types of Transistors

Modern CPUs use two transistor types:

```text
PMOS
NMOS
```

Think:

```text
PMOS likes pulling UP to 1

NMOS likes pulling DOWN to 0
```

---

## Building a NOT Gate

A NOT gate performs:

```text
0 → 1

1 → 0
```

To do this we need:

```text
1 PMOS
+
1 NMOS
```

ASCII:

```text

        1 (Power)
            |
          PMOS
            |
            +------ Output
            |
          NMOS
            |
        0 (Ground)

```

Input controls both transistors.

---

### Input = 0

```text
PMOS = ON
NMOS = OFF
```

Output becomes:

```text
1
```

---

### Input = 1

```text
PMOS = OFF
NMOS = ON
```

Output becomes:

```text
0
```

Therefore:

```text
NOT Gate
≈
2 Transistors
```

---

## Building a NOR Gate

Recall:

```text
A NOR B
```

Truth table:

```text
A B | Output

0 0 | 1
0 1 | 0
1 0 | 0
1 1 | 0
```

Only:

```text
0 NOR 0
```

produces a 1.

---

To build this behavior engineers need:

```text
2 PMOS
+
2 NMOS
```

ASCII:

```text

              Power (1)

                  |
              +---+---+
              |       |
            PMOS    PMOS
              |       |
              +---+---+
                  |
               Output
                  |
              +---+---+
              |       |
            NMOS    NMOS
              |       |
              +---+---+
                  |
               Ground (0)

```

Total:

```text
2 PMOS
+
2 NMOS

=
4 Transistors
```

Therefore:

```text
NOR Gate
≈
4 Transistors
```

---

# Building Memory From Gates

Now we can count transistors.

---

## SR Latch

An SR latch contains:

```text
NOR Gate
+
NOR Gate
```

ASCII:

```text

           +------+
      +--->| NOR  |----+
      |    +------+    |
      |                |
      |                V
      |            Q = 1
      |                |
      |                |
      |    +------+    |
      +----| NOR  |<---+
           +------+

```

Each NOR gate:

```text
4 Transistors
```

Therefore:

```text
2 × 4

=
8 Transistors
```

Very roughly:

```text
SR Latch
≈
8 Transistors
```

---

# Why A Flip-Flop Needs More

An SR latch updates immediately.

Change an input:

```text
Memory changes instantly.
```

CPUs do not want this.

CPUs want:

```text
Wait.

Wait.

Wait.

CLOCK!

Update.
```

---

So engineers add:

```text
Clock Logic

Input Logic

Control Logic
```

around the latch.

Very simplified:

```text

Input
   |
   V

+---------+
| Control |
+---------+
     |
     V

+---------+
| Latch   |
+---------+
     ^
     |
   Clock

```

All of this requires more transistors.

Typical flip-flops contain roughly:

```text
20-30 Transistors
```

depending on design.

---

# Register

Suppose we build:

```text
64-bit Register
```

One flip-flop stores:

```text
1 Bit
```

Therefore:

```text
64 Flip-Flops
```

ASCII:

```text

Clock
  |
  +----------------------------------+
  |   |   |   |   |   |   |   |      |
  V   V   V   V   V   V   V   V

 +--+ +--+ +--+ +--+
 |FF| |FF| |FF| |FF|
 +--+ +--+ +--+ +--+

 ...64 total...

```

If one flip-flop is approximately:

```text
20 Transistors
```

Then:

```text
64 × 20

≈ 1280 Transistors
```

for one 64-bit register.

---

```text
Suppose we want 1 MB of storage.

1 MB

=
8,388,608 bits
```

`Using flip-flops:`

```text
8,388,608 × 20

≈ 168 million transistors
```

`SRAM`

```text
8,388,608 × 6

≈ 50 million transistors
```

`this is why cache uses SRAM instead of registers`

```text

+----------------+----------------+----------------+
| Component      | Purpose        | Approx Trans. |
+----------------+----------------+----------------+
| NOT Gate       | Invert Bit     | 2             |
| NOR Gate       | Logic          | 4             |
| SR Latch       | Memory         | 8             |
| Flip-Flop      | Clocked Memory | 20-30         |
| SRAM Cell      | Dense Memory   | 6             |
+----------------+----------------+----------------+
```

# Why Cache Cannot Use Registers

Suppose we want:

```text
64 KB
```

of cache.

That is:

```text
65,536 Bytes
```

or:

```text
524,288 Bits
```

Imagine building:

```text
524,288 Flip-Flops
```

plus all their clock circuitry.

The transistor count becomes enormous.

Engineers needed something denser.

This led to SRAM.

---

# SRAM (Static RAM)

SRAM still uses feedback.

But engineers stripped away everything unnecessary.

Instead of:

```text
Store Bit

Clock Bit

Synchronize Bit

Control Bit
```

they asked:

```text
Can we simply store a bit?
```

---

# The 6T SRAM Cell

"T" means:

```text
Transistor
```

Therefore:

```text
6T SRAM Cell
```

means:

```text
6 Transistor SRAM Cell
```

```text
Why doesn't SRAM use flip-flops?

Because flip-flops contain clock circuitry.

SRAM does not need clock circuitry.

SRAM only needs:

- Store a bit
- Read a bit
- Write a bit

Nothing else.

By removing clock logic and control logic,
engineers reduced the memory cell from roughly:

20+ transistors

to:

6 transistors

This allows millions of SRAM cells to fit on a chip.
```

---

## Step 1: Build Memory

Start with two NOT gates.

Each NOT gate:

```text
2 Transistors
```

Total:

```text
4 Transistors
```

---

Connect them together.

```text


        Q
        |
        V

    +-------+
    | NOT A |
    +-------+
        |
        |
        V

       Q'

        |
        |
        V

    +-------+
    | NOT B |
    +-------+

        |
        |
        +-------> back to Q


```

This creates a feedback loop.

Exactly the same idea as the SR latch.

---

Suppose:

```text
Q = 1
```

Then:

```text
NOT B outputs 0
```

Then:

```text
NOT A outputs 1
```

The state recreates itself forever.

Memory exists.

---

Current transistor count:

```text
4
```

---

## Step 2: Add Read/Write Access

A memory cell is useless if nobody can access it.

Engineers add:

```text
2 Access Transistors
```

ASCII:

```text

             Bit Line
                |
           [Access]
                |
                |
                +------ Q

                Memory
                Loop

                +------ Q'
                |
                |
           [Access]
                |
             Bit Line

```

These access transistors act like doors.

When opened:

```text
Read value

Write value
```

When closed:

```text
Protect stored value
```

---

Total:

```text
4 Memory Transistors

+
2 Access Transistors

=
6 Transistors
```

This is why it is called:

```text
6T SRAM
```

---

# Comparing Everything

```text

NOT Gate
≈ 2 Transistors

        ↓

NOR Gate
≈ 4 Transistors

        ↓

SR Latch
≈ 8 Transistors

        ↓

Flip-Flop
≈ 20-30 Transistors

        ↓

64-bit Register
≈ 1,280+ Transistors

        ↓

6T SRAM Cell
≈ 6 Transistors

        ↓

L1/L2/L3 Cache
≈ Millions of SRAM Cells

```

Notice something surprising:

```text
SRAM Cell
(6 transistors)

is actually smaller than

SR Latch
(8 transistors)
```

and much smaller than:

```text
Flip-Flop
(20-30 transistors)
```

This is the entire reason caches are possible.

SRAM sacrifices computation features and keeps only the minimum circuitry required to remember a bit.

```text
A register is not a larger SRAM cell.

An SRAM cell is not a smaller register.

Both store bits.

But they are optimized for different purposes.
```

# DRAM (Dynamic RAM)

SRAM solved one problem:

```text
Fast Memory
```

But it created another:

```text
Too Expensive
```

Remember:

```text
1 SRAM Cell
=
6 Transistors
```

Suppose we want:

```text
16 GB RAM
```

Building that entirely from SRAM would require an enormous number of transistors.

Far too expensive.

Engineers needed something simpler.

---

# The DRAM Idea

Instead of storing a bit using:

```text
Feedback Circuits
```

engineers asked:

> Can we store a bit as electrical charge?

The answer was yes.

This created:

```text
DRAM

Dynamic Random Access Memory
```

---

# The Capacitor

DRAM introduces a new component:

```text
Capacitor
```

Think of a capacitor as a tiny bucket.

```text

Full Bucket
=
1

```

```text

Empty Bucket
=
0

```

A capacitor stores electrical charge.

The more charge inside:

```text
Closer to 1
```

The less charge inside:

```text
Closer to 0
```

---

# Building A DRAM Cell

Unlike SRAM:

```text
6 Transistors
```

A DRAM cell contains:

```text
1 Transistor
+
1 Capacitor
```

ASCII:

```text

Bit Line
    |
    |
[ Transistor ]
    |
    |
[ Capacitor ]

```

The transistor acts like a door.

The capacitor stores the charge.

---

# Writing A 1

To store:

```text
1
```

the memory controller places charge into the capacitor.

```text

Capacitor

[ FULL ]

```

The bucket is full.

The stored bit becomes:

```text
1
```

---

# Writing A 0

To store:

```text
0
```

the controller removes the charge.

```text

Capacitor

[ EMPTY ]

```

The bucket is empty.

The stored bit becomes:

```text
0
```

---

# Why DRAM Is Cheaper

Compare:

```text
SRAM
=
6 Transistors
```

vs

```text
DRAM
=
1 Transistor
+
1 Capacitor
```

DRAM cells are dramatically smaller.

This means:

```text
More Memory

Less Silicon

Lower Cost
```

This is why modern computers can have:

```text
16 GB
32 GB
64 GB
128 GB
```

of RAM.

---

# The Problem With DRAM

The capacitor leaks.

Imagine a bucket with a tiny hole.

```text

Full Bucket

↓

Slightly Less Full

↓

Half Full

↓

Empty

```

Eventually the stored charge disappears.

Which means:

```text
The stored bit disappears
```

too.

---

# Refreshing DRAM

Engineers solved this problem using:

```text
Refresh
```

The memory controller repeatedly performs:

```text
Read Value

↓

Rewrite Value
```

millions of times every second.

ASCII:

```text

Read

↓

Recharge

↓

Read

↓

Recharge

↓

Read

↓

Recharge

```

This process keeps the capacitors filled.

Without refreshing:

```text
RAM would forget everything
```

within milliseconds.

---

# SRAM vs DRAM

SRAM:

```text
6 Transistors

Fast

Expensive

No Refresh Needed
```

---

DRAM:

```text
1 Transistor
+
1 Capacitor

Slower

Cheap

Needs Refresh
```

---

# Why Computers Use Both

Modern computers use:

```text
SRAM
```

for:

```text
CPU Cache
```

because it is extremely fast.

And use:

```text
DRAM
```

for:

```text
System RAM
```

because it is much cheaper.

---

# Flash Memory

DRAM solved the capacity problem.

But another problem remained.

Suppose we store:

```text
family_photo.jpg
```

inside RAM.

Now unplug the computer.

```text
Power Off

↓

RAM Empty
```

Everything disappears.

Engineers needed memory that survives power loss.

This led to:

```text
Flash Memory
```

---

# The Flash Idea

SRAM stores:

```text
Feedback State
```

DRAM stores:

```text
Electrical Charge
```

Flash stores:

```text
Electrons Trapped
Inside A Special Transistor
```

---

# The Floating Gate

Flash memory uses a special transistor called a:

```text
Floating Gate Transistor
```

Very simplified:

```text

+-------------+
| Electrons   |
| Trapped     |
+-------------+

```

The transistor can trap electrons inside an insulated region.

The electrons cannot easily escape.

---

# Storing A Bit

Suppose electrons are trapped.

```text

[ Electrons Present ]

```

This might represent:

```text
1
```

---

Suppose electrons are removed.

```text

[ Electrons Absent ]

```

This might represent:

```text
0
```

---

Unlike DRAM:

```text
Power Off

↓

Electrons Stay Trapped
```

The information survives.

---

# Volatile vs Non-Volatile Memory

Memory that loses data without power:

```text
Volatile Memory
```

Examples:

```text
SRAM
DRAM
```

---

Memory that keeps data without power:

```text
Non-Volatile Memory
```

Examples:

```text
Flash Memory
SSD
USB Drives
```

---

# SSD (Solid State Drive)

SSD stands for:

```text
Solid State Drive
```

An SSD is essentially:

```text
Millions

or

Billions

of Flash Memory Cells
```

plus a controller.

ASCII:

```text

+----------------------+
| SSD Controller       |
+----------------------+

+----------------------+
| Flash Memory Chips   |
+----------------------+

```

The controller manages:

```text
Reading

Writing

Error Correction

Wear Leveling
```

---

# Why SSDs Are Fast

SSDs contain:

```text
No Moving Parts
```

Reading data is purely electronic.

```text

CPU

↓

SSD Controller

↓

Flash Cells

```

No physical movement is required.

---

# HDD (Hard Disk Drive)

Before SSDs became common, computers used:

```text
Hard Disk Drives
```

or:

```text
HDDs
```

---

# The HDD Idea

Instead of storing:

```text
Electrical Charge
```

or:

```text
Trapped Electrons
```

an HDD stores:

```text
Magnetic Orientation
```

---

# Magnetic Bits

Imagine a tiny magnetic region.

It can point one way:

```text
↑
```

or the opposite way:

```text
↓

```

These orientations represent:

```text
0
```

and

```text
1
```

---

# Inside An HDD

An HDD contains spinning disks called:

```text
Platters
```

ASCII:

```text

       _________
     /           \
    |   Platter   |
     \___________/

```

These platters spin continuously.

Typical speeds:

```text
5400 RPM

7200 RPM

10000 RPM
```

RPM means:

```text
Revolutions Per Minute
```

---

# Reading Data

A read/write head floats above the platter.

```text

Disk Surface
====================

       ^
       |
   Read Head

```

The head detects magnetic patterns.

Those patterns become:

```text
0
```

and

```text
1
```

inside the computer.

---

# Why HDDs Are Slower

Before reading data:

```text
Disk Must Rotate

Head Must Move

Desired Sector Must Arrive
```

Everything involves physical movement.

Physics becomes the bottleneck.

---

# SSD vs HDD

SSD:

```text
No Moving Parts

Fast

Silent

More Expensive
```

---

HDD:

```text
Moving Parts

Slower

Mechanical

Cheaper
```

---

Think:

```text
SSD
=
Open A File Instantly
```

---

```text
HDD
=
Walk To A Filing Cabinet

Find The Folder

Open The Drawer

Retrieve The Paper
```

---

# Complete Memory Hierarchy So Far

We can now trace the evolution of memory.

```text

Register
(Flip-Flops)

        ↓

SRAM
(Cache)

        ↓

DRAM
(System RAM)

        ↓

Flash Memory
(SSD)

        ↓

Magnetic Storage
(HDD)

```

As we move downward:

```text
Capacity Increases

Cost Per Bit Decreases

Speed Decreases
```

---

# Key Takeaways

- SRAM stores bits using transistor feedback loops.
- DRAM stores bits using electrical charge in capacitors.
- DRAM must be refreshed constantly.
- Flash Memory stores bits using trapped electrons.
- Flash Memory survives power loss.
- SSDs are built from Flash Memory.
- HDDs store bits using magnetic orientation.
- SSDs have no moving parts.
- HDDs contain spinning platters and moving heads.
- SRAM is used for cache.
- DRAM is used for RAM.
- Flash is used for SSDs.
- HDDs provide large, low-cost storage.
- Modern computers use multiple memory technologies because no single technology is simultaneously fast, cheap, and large.
