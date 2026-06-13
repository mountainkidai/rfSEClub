# Phase 0.5 — Logic Gates

## Introduction

In the previous chapter, we learned about Boolean Logic.

We discovered that computers make decisions using only two values:

`TRUE`, `FALSE`

or equivalently:

`1`, `0`

We also learned about three fundamental Boolean operations:

- NOT
- AND
- OR

A new question now appears:

> How does a physical computer perform Boolean Logic?

Mathematics exists on paper.

Computers are physical machines.

How can metal, silicon, and electricity perform logical reasoning?

The answer is:

> Logic Gates

Logic Gates are electronic circuits that implement Boolean Logic.

Every CPU, RAM chip, SSD controller, GPU, and network card is ultimately built from logic gates.

If transistors are the atoms of computing, then logic gates are the molecules.

---

## From Boolean Logic To Hardware

Consider the Boolean operation:

`TRUE AND TRUE = TRUE`

Mathematically this is simple.

But how can a machine perform it?

Engineers discovered that electrical circuits can be arranged so that:

- Certain voltage combinations produce an output.
- That output exactly matches Boolean Logic.

This is the foundation of digital electronics.

---

## Inputs And Outputs

Every logic gate has:

- One or more inputs.
- One output.

Example:

```text
Input A ──┐
          ├── Logic Gate ── Output
Input B ──┘
```

Inputs are electrical signals.

Output is an electrical signal.

Each signal represents:

`0 = LOW`, `1 = HIGH`

The gate simply transforms inputs into outputs according to rules.

---

## The NOT Gate

The simplest logic gate is the NOT gate.

Its job is:

> Reverse the input.

### Truth Table

| Input | Output |
| ----- | ------ |
| 0     | 1      |
| 1     | 0      |

### Example

Input:

`0`

Output:

`1`

Input:

`1`

Output:

`0`

### Visual Representation

```text
Input ───▷○─── Output
```

The small circle means inversion.

### Real Meaning

If voltage is:

`LOW`

the gate produces:

`HIGH`

If voltage is:

`HIGH`

the gate produces:

`LOW`

The NOT gate is the electronic implementation of Boolean NOT.

---

## The AND Gate

The AND gate answers:

> Are all inputs TRUE?

### Truth Table

| A   | B   | Output |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 1      |

### Visual Representation

```text
A ──┐
    ├── AND ── Output
B ──┘
```

### Real Example

Imagine a vault requiring:

- Correct key.
- Correct password.

Both are required.

`Key = TRUE`, `Password = TRUE`

Output:

`Access Granted`

If either is missing:

`Access Denied`

That is exactly how an AND gate behaves.

---

## The OR Gate

The OR gate answers:

> Is at least one input TRUE?

### Truth Table

| A   | B   | Output |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

### Visual Representation

```text
A ──┐
    ├── OR ── Output
B ──┘
```

### Real Example

Imagine a building with two entrances.

You can enter using:

- Front door.
- Side door.

Either works.

`Front Door Open = TRUE`

or

`Side Door Open = TRUE`

Result:

`Entry Allowed`

This is OR logic.

---

## The XOR Gate

XOR stands for:

> Exclusive OR

Meaning:

> Exactly one input must be TRUE.

### Truth Table

| A   | B   | Output |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 0      |

### Visual Meaning

`One TRUE -> TRUE`

`Both TRUE -> FALSE`

### Example

Suppose two light switches control a lamp.

If only one switch is on:

`Lamp ON`

If both switches are on:

`Lamp OFF`

This behavior resembles XOR.

---

## The NAND Gate

NAND means:

`NOT AND`

Perform AND first.

Then invert the result.

### Truth Table

| A   | B   | Output |
| --- | --- | ------ |
| 0   | 0   | 1      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 0      |

### Why NAND Matters

NAND is one of the most important gates in computer engineering.

A remarkable discovery:

> Every other logic gate can be built using only NAND gates.

This means:

- NOT can be built from NAND.
- AND can be built from NAND.
- OR can be built from NAND.
- XOR can be built from NAND.

An entire CPU can be built using only NAND gates.

---

## The NOR Gate

NOR means:

`NOT OR`

Perform OR first.

Then invert the result.

### Truth Table

| A   | B   | Output |
| --- | --- | ------ |
| 0   | 0   | 1      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 0      |

### Another Remarkable Fact

Just like NAND:

> Every logic gate can also be built using only NOR gates.

This property is called:

> Functional Completeness

---

## Combining Gates

A single gate is not very useful.

The real power comes from combining many gates.

Example:

```text
A ──┐
    ├── AND ──┐
B ──┘         │
              ├── OR ── Output
C ────────────┘
```

The output of one gate becomes the input of another.

This allows increasingly complex behavior.

---

## Building A Decision Circuit

Suppose access is granted if:

- User is admin.
- OR
- User is manager AND logged in.

Expression:

`Admin OR (Manager AND LoggedIn)`

Using gates:

```text
Manager ──┐
          ├── AND ──┐
LoggedIn ─┘         │
                    ├── OR ── Access
Admin ──────────────┘
```

Logic gates can implement any Boolean expression.

---

## Where Gates Come From

`Logic gates themselves are built from:`

> Transistors

A transistor is an electronic switch.

It can:

`Allow current`

or

`Block current`

Engineers discovered that arranging transistors in clever ways creates logic gates.

Example:

`Transistors -> Logic Gates -> Circuits -> CPU`

Modern processors contain billions of transistors.

---

## The Hierarchy Of Computing

We can now see a larger picture:

`Information -> Bits -> Boolean Logic -> Transistors(Logic Gates) -> Circuits -> CPU -> Programs`

Every layer builds on the previous one.

---

## Real CPU Example

When the CPU performs:

```rust
if x > y { do_something(); }
```

The processor is not executing magic.

Deep inside:

- Logic gates compare bits.
- Logic gates perform arithmetic.
- Logic gates determine TRUE or FALSE.
- Logic gates control execution flow.

Billions of logic gates work together every second.

---

## Why Logic Gates Matter

Without logic gates:

- No CPUs.
- No memory.
- No operating systems.
- No databases.
- No internet.
- No AI.

Logic gates are where computation begins.

Everything else is built on top.

---

## First Principles Summary

Boolean Logic is mathematics.

Logic gates are the physical implementation of Boolean Logic.

Each gate receives binary inputs:

`0`, `1`

and produces a binary output:

`0`, `1`

Complex circuits emerge by combining gates.

All modern computers are ultimately enormous collections of interconnected logic gates.

---

## Key Takeaways

- Logic gates implement Boolean Logic physically.
- Inputs and outputs are electrical signals.
- NOT inverts a value.
- AND requires all inputs to be TRUE.
- OR requires at least one TRUE input.
- XOR requires exactly one TRUE input.
- NAND means NOT AND.
- NOR means NOT OR.
- NAND alone can build every other gate.
- NOR alone can build every other gate.
- Logic gates are built from transistors.
- CPUs are built from billions of logic gates.

---

## Mental Model

Think of logic gates as tiny electronic decision-makers.

A gate receives:

`0`, `1`

and answers questions such as:

`Are both true?`

`Is either true?`

`Is this false?`

By combining billions of these tiny decisions, computers perform everything from arithmetic to artificial intelligence.

---

## Check Your Understanding

1. What is the purpose of a logic gate?
2. What does a NOT gate do?
3. When does an AND gate produce TRUE?
4. When does an OR gate produce TRUE?
5. What makes XOR different from OR?
6. What is NAND?
7. Why is NAND important?
8. What does "functional completeness" mean?
9. What are logic gates built from?
10. How do logic gates eventually become CPUs?

If you understand this chapter, you understand the first physical building blocks of computation.

---

## Solution

1. What is the purpose of a logic gate?
- To implement a Boolean operation in hardware; transform binary inputs into a binary output.

2. What does a NOT gate do?
- It inverts its input (0→1, 1→0).

3. When does an AND gate produce TRUE?
- When all of its inputs are TRUE.

4. When does an OR gate produce TRUE?
- When at least one input is TRUE.

5. What makes XOR different from OR?
- XOR is true only when exactly one input is true; OR is true when one or more inputs are true.

6. What is NAND?
- NAND = NOT(AND); it outputs false only when all inputs are true.

7. Why is NAND important?
- Because NAND is functionally complete: you can build any other gate using only NANDs.

8. What does "functional completeness" mean?
- A set of gates is functionally complete if it can implement any Boolean function (e.g., NAND or NOR alone suffice).

9. What are logic gates built from?
- Transistors arranged as switches to perform the required logic.

10. How do logic gates eventually become CPUs?
- Gates combine into circuits (adders, multiplexers, registers, etc.), which assemble into ALUs, register files, and control units; those combined systems form a CPU.

## Next Topic

# Phase 0.6 — Building Computation From Gates

We will learn how logic gates combine to build:

- Adders
- Comparators
- Multiplexers
- Decoders
- Registers

The first real computational components inside a CPU.
