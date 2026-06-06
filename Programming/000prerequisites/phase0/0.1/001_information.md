# Phase 0.1 — What Is Information?

## Introduction

Before we learn about binary numbers, CPUs, memory, operating systems, Rust, databases, networking, or distributed systems, we must answer a more fundamental question:

> What exactly is a computer storing and processing?

Most people would answer:

- Numbers
- Text
- Images
- Videos
- Programs

While these answers seem correct, they are not fundamental enough.

From first principles, a computer stores and processes information.

Everything in computing is ultimately a representation of information.

To understand how computers work, we must first understand what information actually is.

---

# Information Is A Difference Between States

Imagine a room with a light bulb.

The bulb can be in one of two states:

| State | Meaning |
| ----- | ------- |
| Off   | 0       |
| On    | 1       |

The bulb itself does not understand mathematics.

It simply exists in one physical state or another.

Yet a human observing the bulb can assign meaning to those states.

For example:

| Physical State | Human Meaning |
| -------------- | ------------- |
| Off            | No            |
| On             | Yes           |

or

| Physical State | Human Meaning |
| -------------- | ------------- |
| Off            | False         |
| On             | True          |

or

| Physical State | Human Meaning |
| -------------- | ------------- |
| Off            | 0             |
| On             | 1             |

Information emerges because we can distinguish one state from another.

If every bulb in the world were permanently on, no information could be communicated.

Information requires differences.

No difference means no information.

---

# Information Requires Physical Reality

One of the most important concepts in computer science is:

> Information is physical.

Information does not float through space as magic.

It must be represented by something physical.

Examples include:

| Medium            | Physical Representation |
| ----------------- | ----------------------- |
| Paper             | Ink                     |
| Whiteboard        | Marker                  |
| Hard Disk         | Magnetic orientation    |
| RAM               | Electrical charges      |
| CPU Register      | Electrical states       |
| SSD               | Trapped electrons       |
| Fiber Optic Cable | Light pulses            |

Whenever information exists, it exists as some physical arrangement of matter or energy.

There is no information without a physical medium.

---

# Why Computers Use Physical States

A computer is an electronic machine.

Electronics manipulate electrical signals.

Electrical signals naturally create distinct states.

For example:

- Voltage present
- Voltage absent

or

- High voltage
- Low voltage

Engineers discovered that using only two distinguishable states makes systems reliable.

Instead of trying to distinguish hundreds of possible values, a computer only needs to determine:

text Is the signal high? or Is the signal low?

This simplicity allows modern computers to operate reliably billions of times every second.

---

# A Computer Does Not Understand Numbers

This statement surprises many new engineers.

Consider the number:

text 5

Humans understand the meaning immediately.

A CPU does not.

The CPU does not understand:

- 5
- 10
- 1000
- Pi
- Negative numbers

Instead, it only sees patterns of electrical states.

For example:

text 00000101

Humans interpret that pattern as the number 5.

The CPU only sees a pattern of bits.

The meaning comes from how we choose to interpret those bits.

---

# A Computer Does Not Understand Text

Consider the word:

text HELLO

Humans see letters and language.

Computers do not.

The computer sees something closer to:

text 01001000 01000101 01001100 01001100 01001111

Even those binary values are merely abstractions.

At the hardware level they are represented by electrical states.

The computer never sees:

text HELLO

It only sees patterns.

Humans assign meaning to those patterns.

---

# A Computer Does Not Understand Images

Consider a photograph.

Humans see:

- Mountains
- Trees
- People
- Colors

A computer sees none of these.

Instead it stores:

text Pixel 1: Red value Pixel 2: Green value Pixel 3: Blue value ...

Each value is ultimately stored as binary data.

An image is simply a very large collection of numbers.

---

# A Computer Does Not Understand Videos

Videos appear complex.

However, a video is simply:

text Image + Image + Image + Image + Audio Data

Each frame is an image.

Each image is binary data.

Each audio sample is binary data.

Everything eventually becomes bits.

---

# What Is A Bit?

The smallest unit of information in computing is called a bit.

Bit stands for:

> Binary Digit

A bit can only have one of two possible values:

text 0

or

text 1

You can think of a bit as a switch.

text 0 = OFF 1 = ON

Or:

text 0 = FALSE 1 = TRUE

Or:

text 0 = LOW VOLTAGE 1 = HIGH VOLTAGE

The interpretation changes.

The underlying concept remains the same.

A bit is simply one choice between two possible states.

---

# Why Binary Won

A natural question arises:

Why not use ten states?

Why not use one hundred states?

Why not use one thousand states?

The answer is reliability.

Imagine building a computer that must distinguish:

text State 1 State 2 State 3 ... State 100

Tiny electrical noise could easily cause mistakes.

Now compare that with:

text OFF ON

The distinction becomes much easier.

As a result:

- Hardware becomes simpler
- Error rates decrease
- Manufacturing becomes easier
- Performance increases

Binary is not used because it is mathematically beautiful.

Binary is used because it is physically practical.

---

# Everything Becomes Bits

Every piece of software eventually becomes bits.

Examples:

| Human Concept    | Computer Representation |
| ---------------- | ----------------------- |
| Number 42        | Bits                    |
| Letter A         | Bits                    |
| Image            | Bits                    |
| Song             | Bits                    |
| Video            | Bits                    |
| Database         | Bits                    |
| Operating System | Bits                    |
| Rust Program     | Bits                    |

Everything eventually reduces to binary information.

No exceptions.

---

---

# First Principles View

At the deepest level:

text Information ↓ Physical States ↓ Bits ↓ Logic ↓ Computation ↓ Software

Everything in modern computing begins with information represented as physical states.

The operating system.

The Rust compiler.

PostgreSQL.

Distributed systems.

Artificial intelligence.

All of them are built on top of this foundation.

---

# Key Takeaways

- Information is the foundation of all computing.
- Information requires physical representation.
- Computers do not understand numbers, text, images, or videos directly.
- Computers only process physical states.
- A bit is the smallest unit of information.
- A bit can have only two values: 0 or 1.
- Binary is used because it is reliable in physical systems.
- Everything in computing eventually becomes bits.
- Every computer performs only four operations:
  - Store information
  - Retrieve information
  - Move information
  - Transform information

---

# Mental Model

Whenever you encounter a new technology, ask:

> What information is being stored, moved, retrieved, or transformed?

That question alone will help you understand systems from first principles.

Everything else in computer science is built on top of this idea.

---

# Next Topic

Phase 0.2 — Binary Numbers

In the next chapter, we will learn how humans invented a numbering system that maps perfectly to physical two-state machines, and how every number inside a computer becomes binary.
