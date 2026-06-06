# Phase 0.9 — Control Unit

## Introduction

So far we have built several pieces of a computer.

We have:

```text
Bits -> Logic Gates -> Digital Circuits -> Registers -> ALU
```

At this point, our machine can:

- Store data in registers.
- Add numbers.
- Compare values.
- Perform logical operations.

But there is a huge problem.

Imagine having:

- A calculator.
- A notebook.

Sitting on a desk.

Nothing happens.

Why?

Because nobody is telling them what to do.

The calculator waits.

The notebook waits.

A CPU has the same problem.

The ALU can calculate.

Registers can store data.

`But something must coordinate everything.`

Something must decide:

- `Which instruction to execute.`
- `Which registers to read.`
- `Which operation the ALU should perform.`
- `Where the result should go.`
- `What instruction comes next.`

That "something" is called the:

> Control Unit

`The Control Unit is the conductor of the CPU orchestra.`

---

## The CPU Before The Control Unit

Imagine a CPU containing:

```text
+-----------+
| Registers |
+-----------+
+-----------+
|    ALU    |
+-----------+
```

`Can it perform:`

```rust
let x = 5;
let y = 3;
let z = x + y;
```

`No.`

`Why?`

`Because nobody is telling:`

```text
Register A <- 5
Register B <- 3
ALU <- ADD
Store result in Register C
```

The hardware exists.

The instructions do not.

---

## Real World Analogy

Imagine a restaurant.

You have:

```text
Chef
Oven
Ingredients
```

But no manager.

Chaos.

Nobody knows:

- What to cook.
- When to cook.
- Which ingredients to use.

The manager coordinates everything.

In a CPU:

```text
Registers = Ingredients
ALU = Chef
Control Unit = Manager
```

---

`## What Is The Control Unit?`

`The Control Unit is a circuit inside the CPU that:`

> Directs all CPU operations.

It does not perform calculations.

The ALU does that.

It does not store data.

Registers do that.

Instead, the Control Unit tells every component:

```text
What to do
When to do it
```

---

## The Big Picture

A simplified CPU looks like:

```text
+----------------+
|  Control Unit  |
+----------------+
        |
        v
+-----------+    +-----------+
| Registers  |<-->|    ALU    |
+-----------+    +-----------+
```

The Control Unit controls the entire system.

---

## What Is An Instruction?

A computer program is simply a sequence of instructions.

Example:

```assembly
LOAD A, 5
LOAD B, 3
ADD A, B
STORE C
```

The CPU executes them one at a time.

---

## The Problem

Suppose the CPU sees:

```assembly
ADD A, B
```

How does the CPU know what this means?

Some circuit must interpret the instruction.

That circuit is the Control Unit.

---

## What The Control Unit Actually Does

Given:

```assembly
ADD A, B
```

The Control Unit performs:

```text
Step 1: Read Register A
Step 2: Read Register B
Step 3: Configure ALU for Addition
Step 4: Send A and B to ALU
Step 5: Store Result
```

The Control Unit is essentially issuing commands continuously.

---

## The Fetch-Decode-Execute Cycle

Every CPU follows the same pattern.

```text
1. Fetch
2. Decode
3. Execute
```

Over and over.

Billions of times per second.

---

## Step 1: Fetch

The CPU retrieves the next instruction.

Example:

```assembly
ADD A, B
```

The instruction is loaded into the CPU.

ASCII:

```text
Memory
  |
  v
+----------------+
|   ADD A, B     |
+----------------+
  |
  v
CPU
```

This is called:

> Fetch

---

## Step 2: Decode

The instruction arrives.

The CPU must determine:

```text
What does this instruction mean?
```

The Control Unit decodes it.

Example:

```assembly
ADD A, B
```

becomes:

```text
Operation = ADD
Source1 = A
Source2 = B
```

Now the CPU understands what needs to happen.

---

## Step 3: Execute

The Control Unit activates the required hardware.

Example:

```text
Read Register A
Read Register B
ALU = ADD
Store Result
```

The instruction is executed.

---

## Entire Cycle

ASCII view:

```text
Instruction
   |
   v
+------------------+
|      FETCH       |
+------------------+
   |
   v
+------------------+
|      DECODE      |
+------------------+
   |
   v
+------------------+
|     EXECUTE      |
+------------------+
   |
   v
Next Instruction
```

This loop never stops while the CPU is running.

---

## Example Program

Suppose:

```assembly
MOV A, 5
MOV B, 3
ADD A, B
```

Execution:

```text
Instruction 1
MOV A, 5
Fetch -> Decode -> Execute
A = 5
```

---

```text
Instruction 2
MOV B, 3
Fetch -> Decode -> Execute
B = 3
```

---

```text
Instruction 3
ADD A, B
Fetch -> Decode -> Execute
Result = 8
```

---

## Control Signals

The Control Unit controls hardware using:

> Control Signals

Think of them as electrical commands.

Example:

```text
READ_REGISTER_A
READ_REGISTER_B
ENABLE_ALU_ADD
WRITE_REGISTER_C
```

The Control Unit generates these signals.

---

## Inside The CPU

When the CPU executes:

```assembly
ADD A, B
```

Internally:

```text
Control Unit
+---- Enable Register A
+---- Enable Register B
+---- ALU Mode = ADD
+---- Store Result
```

Thousands of tiny signals coordinate the operation.

---

## Hardwired Control

Early CPUs often used:

> Hardwired Control

Meaning:

```text
Instruction -> Electrical Circuit -> Control Signals
```

Everything was physically wired.

Advantages:

- Fast.
- Simple.

Disadvantages:

- Hard to modify.

---

## Microcode

More advanced CPUs introduced:

> Microcode

Instead of directly controlling hardware:

```text
Instruction -> Microcode -> Control Signals
```

Microcode is like a tiny program inside the CPU.

---

## Example

Instruction:

```assembly
ADD A, B
```

May actually become:

```text
Micro-Step 1: Read A
Micro-Step 2: Read B
Micro-Step 3: Configure ALU
Micro-Step 4: Store Result
```

Modern CPUs often combine both approaches.

---

This is actually much simpler than it sounds.

---

# Human Version

Suppose I tell you:

```text
ADD
```

You understand:

```text
Take two numbers
+
Add them
```

because you know English.

---

# CPU Version

CPU doesn't understand:

```text
ADD
```

CPU only understands:

```text
0
1
```

So instead of storing:

```text
ADD
```

memory stores something like:

```text
10110010
```

---

# Dictionary Analogy

Imagine a secret code book.

```text
10110010 = ADD

11000001 = SUB

00110110 = MUL

11100010 = MOV
```

When CPU sees:

```text
10110010
```

it thinks:

```text
"Oh, this means ADD."
```

---

# Who Looks Up The Code?

The Control Unit.

Suppose memory contains:

```text
10110010
```

Control Unit fetches it:

```text
Memory
   ↓
10110010
```

Then Control Unit asks:

```text
"What instruction is this?"
```

Its decoding logic says:

```text
10110010 = ADD
```

Now it knows what to do.

---

# What Happens Next?

Control Unit generates commands:

```text
Read Register A
Read Register B
ALU = ADD
Store Result
```

---

# Real Example

Suppose memory contains:

```text
10110010
```

and ISA says:

```text
10110010 = ADD
```

CPU executes:

```text
R1 = 10
R2 = 20

10 + 20 = 30
```

---

# Why ISA Exists

Imagine Intel says:

```text
10110010 = ADD
```

but ARM says:

```text
10110010 = SUB
```

Then the same program would behave differently.

That's why every CPU family defines an ISA.

The ISA is simply:

> **The dictionary that maps binary patterns to instructions.**

---

# First Principles Definition

```text
Binary Pattern
       ↓
Control Unit Decodes
       ↓
Instruction Meaning
       ↓
Control Signals
       ↓
Hardware Action
```

Example:

```text
10110010
   ↓
ADD
   ↓
Read registers
   ↓
ALU add
   ↓
Store result
```

---

# One-Line Mental Model

```text
ISA = The CPU's language.

Instruction = A word in that language.

Control Unit = The translator that converts binary words into hardware actions.
```

So when people say:

> "x86-64 and ARM have different ISAs"

they simply mean:

> **They use different binary-to-instruction dictionaries.**

---

## The Control Unit And The ALU

The ALU never decides anything.

The ALU simply obeys.

Example:

```text
ALU: "Tell me what operation to perform."
```

Control Unit:

```text
"Perform ADD."
```

or

```text
"Perform AND."
```

or

```text
"Perform XOR."
```

The ALU follows instructions.

---

## The Control Unit And Registers

Registers also obey the Control Unit.

Example:

Control Unit says:

```text
Read Register A
```

Register A responds:

```text
Current Value = 5
```

Control Unit says:

```text
Store 8 in Register C
```

Register C updates its contents.

---

## The CPU As A Team

At this point our CPU looks like:

```text
                    Instruction
                    (ADD R1,R2)
                          |
                          v

                +------------------+
                |   Control Unit   |
                |    (Manager)     |
                +------------------+
                  |      |      |
                  |      |      |
                  |      |      +------------------+
                  |      |                         |
                  v      v                         v

           Read R1    Read R2             ALU Operation
                                            (ADD)

              |         |                     |
              v         v                     v

         +-----------------------------------------+
         |               Registers                 |
         |                                         |
         | R1 = 10                                |
         | R2 = 20                                |
         | R3 = ?                                 |
         +-----------------------------------------+
                     |                 |
                     |                 |
                     +--------+--------+
                              |
                              v

                     +----------------+
                     |      ALU       |
                     |                |
                     | 10 + 20 = 30   |
                     +----------------+
                              |
                              |
                              v

                  Control Unit says:
                     "Write R3"

                              |
                              v

         +-----------------------------------------+
         |               Registers                 |
         |                                         |
         | R1 = 10                                |
         | R2 = 20                                |
         | R3 = 30                                |
         +-----------------------------------------+
```

---

```text
                 ISA (CPU Language)

        10110010 = ADD
        11000001 = SUB
        11100010 = MOV

                        |
                        |
                        v

               Program In Memory

                  10110010
                  11000001
                  11100010

                        |
                        |
                        v

               +------------------+
               |   Control Unit   |
               |   (Translator)   |
               +------------------+

      Sees: 10110010

      ISA Dictionary says:

      10110010 = ADD

                        |
                        |
                        v

      "Read R1"
      "Read R2"
      "ALU Perform ADD"
      "Store Result In R3"

                        |
                        |
                        v

      +--------------------------------+
      |           Registers            |
      |                                |
      | R1 = 10                        |
      | R2 = 20                        |
      | R3 = ?                         |
      +--------------------------------+
                  |          |
                  |          |
                  +-----+----+
                        |
                        v

                +---------------+
                |      ALU      |
                |               |
                | 10 + 20 = 30  |
                +---------------+
                        |
                        |
                        v

             Control Unit:
             "Write Result To R3"

                        |
                        |
                        v

      +--------------------------------+
      |           Registers            |
      |                                |
      | R1 = 10                        |
      | R2 = 20                        |
      | R3 = 30                        |
      +--------------------------------+
```

## Why The Control Unit Matters

Without the Control Unit:

```text
Registers = Useless Storage
ALU = Useless Calculator
```

Nothing coordinates the system.

The Control Unit transforms disconnected circuits into:

> A programmable computer.

---

## First Principles Summary

The Control Unit is the CPU's coordinator.

It:

- Fetches instructions.
- Decodes instructions.
- Generates control signals.
- Directs registers.
- Directs the ALU.
- Controls execution flow.

Every instruction executed by a CPU passes through the Control Unit.

---

## Key Takeaways

- The Control Unit controls CPU operations.
- It does not perform arithmetic.
- It does not store data.
- It tells other components what to do.
- Every instruction goes through:
  - Fetch
  - Decode
  - Execute
- The Control Unit generates control signals.
- Registers and the ALU obey those signals.
- The Control Unit makes a CPU programmable.

---

## Mental Model

Think of the CPU as a company:

```text
Control Unit = CEO
Registers = Filing Cabinets
ALU = Accountant

CPU
│
├── Control Unit
│
├── Registers
│
├── ALU
│    ├── Adders
│    ├── Comparators
│    ├── AND/OR/XOR
│    └── Shifters
│
├── MUXes
│
└── Decoders
```

The CEO never performs calculations.

The CEO never stores documents.

The CEO coordinates everyone else.

That is exactly what the Control Unit does.

---

## Check Your Understanding

1. What problem does the Control Unit solve?
2. Why can't the ALU work by itself?
3. What are control signals?
4. What are the three stages of CPU execution?
5. What happens during Fetch?
6. What happens during Decode?
7. What happens during Execute?
8. What is microcode?
9. Why is the Control Unit necessary?
10. How does the Control Unit interact with registers and the ALU?

---

## Next Topic

# Phase 0.10 — Building A Simple CPU

Now that we have:

```text
Logic Gates -> Circuits -> Registers -> ALU -> Control Unit
```

we finally have enough pieces to build a complete CPU from first principles and understand how a processor executes an actual program.

```

```
