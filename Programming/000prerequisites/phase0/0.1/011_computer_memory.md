# Phase 0.12 — The Birth of Memory

## Introduction

Before learning about:

- Registers
- RAM
- Cache
- CPUs

we must answer a much deeper question:

> How can a circuit remember something?

A CPU can remember numbers.

RAM can remember programs.

Caches can remember recently used data.

> But where does memory come from?

Let’s rebuild memory from absolute first principles.

---

## The Problem

Imagine somebody gives you an AND gate.

```text
A and B go into an AND gate.
The gate produces an output.
```

Suppose:

```text
A = 1
B = 1
```

The output becomes:

```text
1
```

Now disconnect both inputs.

```text
A = ?
B = ?
```

What happens?

The output disappears.

The gate forgot everything.

---

The same is true for:

```text
AND
OR
NOT
XOR
NAND
NOR
```

All logic gates have the same limitation:

```text
They react.
They do not remember.
```

---

## What Does Memory Mean?

Imagine this conversation.

```text
Store: 1
```

Some time later:

```text
What was stored?
```

If the answer is:

```text
1
```

then memory exists.

---

Memory means:

> The present depends on the past.

Normal logic gates cannot do this.

Their outputs depend only on current inputs.

---

## Why Gates Forget

A normal circuit looks like this:

```text
Input goes into a gate.
The gate produces an output.
Information moves only forward.
```

Once the input disappears:

```text
Input gone.
Output gone.
```

No memory exists.

---

## The Missing Ingredient

Engineers eventually discovered the secret.

Memory appears when a circuit can see its own output.

In other words:

```text
The output is fed back into the circuit.
```

This idea is called:

```text
Feedback
```

Feedback is the birth of memory.

---

## Understanding Feedback

Imagine two people.

Alice and Bob.

Rules:

```text
Alice repeats what Bob says.
Bob repeats what Alice says.
```

Suppose we start the system by telling Alice:

```text
1
```

Alice says:

```text
1
```

Bob hears:

```text
1
```

So Bob says:

```text
1
```

Alice hears:

```text
1
```

So Alice says:

```text
1
```

The cycle continues forever.

---

Even if the original speaker disappears:

```text
Someone injects a value into the system.

Then stops interacting with it.
Teacher: "Say 1"

Alice: "1"
Bob:   "1"

Teacher leaves.
Alice and Bob keep repeating the same value.
```

The information survives.

The system is now remembering.

---

## Stable States

Memory requires stability.

Imagine a ball sitting on a hill.

```text
The ball rolls away.
This is unstable.
```

Now imagine a valley.

```text
The ball naturally stays there.
This is stable.
```

Memory circuits work exactly the same way.

They create stable electrical states.

For a single bit, we need only two stable states:

```text
State A = remember 0
State B = remember 1
```

---

## The First Memory Circuit

Engineers discovered that two NOR gates can create these stable states.

This circuit is called an SR latch.

SR stands for:

```text
Set
Reset
```

Meaning:

```text
Set = store 1
Reset = store 0
```

---

## Understanding a NOR Gate

A NOR gate behaves like this:

```text
0 NOR 0 = 1
0 NOR 1 = 0
1 NOR 0 = 0
1 NOR 1 = 0
```

Only one situation produces a 1:

```text
0 NOR 0
```

Everything else becomes 0.

---

## Building the SR Latch

A NOR gate normally forgets everything once its inputs disappear.

To create memory, engineers connected two NOR gates together so that each gate uses the other gate's output as one of its inputs.

```text
                S
                |
                v

      Q' ---> NOR A -----> Q




                R
                |
                v

      Q  ---> NOR B -----> Q'
```

Notice what is happening:

```text
NOR A inputs:
- S
- Q'

NOR B inputs:
- R
- Q
```

This means:

```text
Q depends on Q'

Q' depends on Q
```

The outputs feed back into the circuit.

This is called **feedback**.

---

## Storing a 1

Suppose we want the circuit to remember a `1`.

Apply:

```text
S = 0
R = 1
```

The circuit becomes:

```text
                S=0
                 |
                 v

      Q' ---> NOR A -----> Q




               R=1
                 |
                 v

      Q  ---> NOR B -----> Q'
```

### Step 1: Evaluate NOR B

NOR B receives:

```text
R = 1
Q = anything
```

From the NOR truth table:

```text
1 NOR anything = 0
```

Therefore:

```text
Q' = 0
```

---

### Step 2: Evaluate NOR A

NOR A receives:

```text
S  = 0
Q' = 0
```

From the NOR truth table:

```text
0 NOR 0 = 1
```

Therefore:

```text
Q = 1
```

The circuit has now settled into:

```text
Q  = 1
Q' = 0
```

> `we are really using Q as the memory bit.`

So the bit `1` is stored.

---

## Why Does It Stay There?

Notice the current state:

```text
Q  = 1
Q' = 0
```

Now look at the circuit again:

```text
                S=0
                 |
                 v

      Q'=0 --> NOR A -----> Q=1




               R=1
                 |
                 v

      Q=1  --> NOR B -----> Q'=0
```

NOR B sees:

```text
R = 1
Q = 1
```

Therefore:

```text
Q' = 0
```

NOR A sees:

```text
S  = 0
Q' = 0
```

Therefore:

```text
Q = 1
```

Nothing changes.

The state reinforces itself.

---

## Removing the Input

Now remove the forcing signal:

```text
S = 0
R = 0
```

The circuit becomes:

```text
                S=0
                 |
                 v

      Q'=0 --> NOR A -----> Q=1




               R=0
                 |
                 v

      Q=1  --> NOR B -----> Q'=0
```

Let's evaluate again.

### NOR B

Inputs:

```text
R = 0
Q = 1
```

Result:

```text
0 NOR 1 = 0
```

Therefore:

```text
Q' = 0
```

### NOR A

Inputs:

```text
S  = 0
Q' = 0
```

Result:

```text
0 NOR 0 = 1
```

Therefore:

```text
Q = 1
```

The state remains:

```text
Q  = 1
Q' = 0
```

---

## The Feedback Loop

The reason memory exists is that the outputs keep recreating each other.

```text
Q = 1
   |
   v

NOR B

   |
   v

Q' = 0
   |
   v

NOR A

   |
   v

Q = 1
```

Read it like this:

```text
Q = 1
forces
Q' = 0
```

and

```text
Q' = 0
forces
Q = 1
```

The two outputs keep each other alive.

The original input is gone, but the state survives.

This is the first true memory circuit.

Memory is born when feedback allows a circuit to preserve a state after the original input disappears.

---

## The Limitation of SR Latches

SR latches work.

But modern CPUs contain billions of memory elements.

Imagine if each one changed whenever it wanted.

```text
Chaos
```

Computers require coordination.

Everything must update at predictable moments.

---

## Enter the Clock

A CPU contains a clock signal.

Not a wall clock.

An electrical pulse.

```text
Tick
Tick
Tick
Tick
```

A simplified waveform:

```text
High
Low
High
Low
High
Low
```

Every tick tells the CPU:

```text
Update now.
```

---

## From Latch to Flip-Flop

Engineers added clock control to memory circuits.

The result is called a:

```text
Flip-Flop


---

SR Latch + Clock = Flip-Flop
```

A flip-flop behaves like a latch with discipline.

Think of it like this:

```text
SR latch = store whenever inputs change
Flip-flop = store only when the clock allows
```

---

## One Flip-Flop Stores One Bit

A single flip-flop can store exactly one bit.

```text
0
```

or

```text
1
```

Almost.

The confusion is between:

```text
Q
```

and

```text
Flip-Flop
```

They are not the same thing.

Think of it like this:

```text id="zn36bo"
SR Latch
   |
   +----> Q
   |
   +----> Q'
```

The latch is the **memory circuit**.

`Q` is just the output where you read the stored value.

---

For example:

```text id="q1hb1n"
      SR Latch

      +-------+
      |       |
      +-------+
          |
          v

          Q = 1
```

We say:

```text id="34jpjc"
Stored value = 1
```

because Q is 1.

---

Now engineers added a clock.

Instead of:

```text id="nl03cq"
Change whenever S or R changes
```

they wanted:

```text id="c8gm3h"
Change only when clock says so
```

So they built:

```text id="j4qzcm"
SR Latch
     +
Clock
     =
Flip-Flop
```

---

A flip-flop still has an output:

```text id="77xekm"
Q
```

and often:

```text id="mvv1l5"
Q'
```

too.

Example:

```text id="8iwf6j"
       Flip-Flop

      +-----------+
      |           |
CLK ->|           |
D   ->|           |
      |           |
      +-----------+
            |
            v

            Q
```

---

Now the important statement:

> One flip-flop stores one bit.

means:

```text id="p4ekso"
If Q = 0

Stored bit = 0
```

or

```text id="6njlwm"
If Q = 1

Stored bit = 1
```

The flip-flop is the memory device.

Q is the value currently stored inside it.

---

Think of a flip-flop like a box:

```text id="dgtf7g"
+-----------+
| Flip-Flop |
+-----------+
      |
      v

      Q
```

If:

```text id="5n1lkt"
Q = 1
```

the box contains 1.

If:

```text id="yzwsga"
Q = 0
```

the box contains 0.

---

So:

```text id="6l8g57"
Flip-Flop = memory cell
```

```text id="7q3itn"
Q = value stored in that memory cell
```

This is why later we can build a register:

```text id="bq1g0j"

             CPU Clock
                 |
      -----------------------
      |     |     |     |
      v     v     v     v

     FF1   FF2   FF3   FF4

School Bell (master clock)
     |
     +--> Student 1 ears
     +--> Student 2 ears
     +--> Student 3 ears

Flip-Flop 1 -> Q = 1
Flip-Flop 2 -> Q = 0
Flip-Flop 3 -> Q = 1
Flip-Flop 4 -> Q = 0
```

Together:

```text id="52f3wl"
1010
```

So a register is just multiple flip-flops, each contributing its own `Q` bit.

The next mental model should be:

```text id="zuxk1r"
SR Latch
    ↓
Clock added
    ↓
Flip-Flop
    ↓
Stores 1 bit
    ↓
Many Flip-Flops
    ↓
Register
```

That's the correct hierarchy.

Nothing else.

Examples:

```text
Stored = 0
Stored = 1
```

Can one flip-flop store:

```text
1010
```

No.

That requires four bits.

---

## Building Larger Memory

Suppose we want to store:

```text
1010
```

Each digit requires one flip-flop.

```text
1
0
1
0
```

Total:

```text
4 flip-flops
```

working together.

---

## Register

A collection of flip-flops working together is called a register.

Definition:

> A register is a group of flip-flops that stores multiple bits as a single value.

Example:

```text
Bit 3 = 1
Bit 2 = 0
Bit 1 = 1
Bit 0 = 0
```

Together:

```text
1010
```

---

## Why Registers Have Different Sizes

Different CPUs need different amounts of storage.

Common register sizes:

```text
8-bit
16-bit
32-bit
64-bit
```

The size simply means:

```text
Number of flip-flops inside the register
```

Example:

```text
8-bit register = 8 flip-flops
64-bit register = 64 flip-flops
```

---

## Why Modern CPUs Use 64 Bits

Modern CPUs frequently store:

- Numbers
- Memory addresses
- Pointers

These values can become very large.

Therefore modern processors usually use:

```text
64-bit registers
```

---

## Register File

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

+------+
| RCX  |
+------+

```

A CPU needs many registers.

Not just one.

Examples:

```text
RAX
RBX
RCX
RDX
```

Each register stores 64 bits.

Together they form the:

```text
Register file
```

Think of a register file as:

```text
A small cabinet containing many registers inside the CPU.
```

---

## Where Registers Live

Registers are physically located inside the processor.

Very close to the ALU.

```text
Registers are placed near the ALU.
```

Because the distance is tiny:

```text
Access is extremely fast.
```

---

## Memory Hierarchy So Far

We can now trace the entire evolution of memory.

```text
Transistor
    ↓
Logic Gate
    ↓
Feedback
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
    ↓
Cache
    ↓
CPU
```

---

## Key Takeaway

Memory is not magic.

A transistor does not remember.

A logic gate does not remember.

Memory appears when feedback creates stable electrical states.

Everything else is simply larger and more organized versions of that idea.

```text
Transistor
Gate
Feedback
Memory
Flip-flop
Register
CPU
```

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
