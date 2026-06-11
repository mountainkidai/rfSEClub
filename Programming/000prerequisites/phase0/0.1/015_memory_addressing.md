# Phase 0.15 — Memory Addressing

## Introduction

In the previous chapter we learned:

```text
Registers
↓
Cache
↓
RAM
↓
SSD
```

We learned where data is stored.

But a fundamental question remains:

> How does the CPU find a specific piece of data?

Suppose a computer contains:

```text
16 GB RAM
```

That is:

```text
16,000,000,000+
Bytes
```

Imagine a library with billions of books.

How do you find one specific book?

Computers face the same problem.

---

# The House Number Problem

Imagine a city.

Every house has a unique address.

```text

House #1

House #2

House #3

House #4

```

If someone says:

```text
Go to House #3
```

you immediately know where to go.

Memory works the same way.

---

# Memory Is A Giant Array Of Bytes

Conceptually RAM looks like this:

```text

+-----+-----+-----+-----+
|     |     |     |     |
+-----+-----+-----+-----+

```

Each box stores:

```text
1 Byte
```

Remember:

```text
1 Byte
=
8 Bits
```

---

A larger view:

```text

+-----+-----+-----+-----+
|  A  |  B  |  C  |  D  |
+-----+-----+-----+-----+

```

The problem:

```text
How do we identify one box?
```

---

# Addresses

Engineers solved this by numbering every byte.

Example:

```text

Address     Value

0           A
1           B
2           C
3           D

```

Now the CPU can say:

```text
Give me the value at address 2
```

Memory responds:

```text
C
```

Easy.

---

# Every Byte Has An Address

Consider:

```text

Address     Value

1000        A
1001        B
1002        C
1003        D

```

Notice:

```text
Addresses increase by 1
```

because each address refers to:

```text
One Byte
```

---

# Why Bytes?

A natural question:

> Why not address bits?

Because bits are too small.

Modern computers operate primarily on:

```text
Bytes
```

and groups of bytes.

Therefore memory is byte-addressable.

---

# Reading Memory

Suppose the CPU wants:

```text
Address 1002
```

ASCII:

```text

Address     Value

1000        A
1001        B
1002        C   ←
1003        D

```

The memory hardware locates:

```text
1002
```

and returns:

```text
C
```

This operation is called:

```text
Read
```

---

# Writing Memory

Suppose the CPU wants:

```text
Store X at address 1002
```

Before:

```text

1000    A
1001    B
1002    C
1003    D

```

After:

```text

1000    A
1001    B
1002    X
1003    D

```

This operation is called:

```text
Write
```

---

# Memory Addresses Are Numbers

An important realization:

```text
Addresses are just numbers.
```

Example:

```text
1000
1001
1002
1003
```

Nothing magical.

Just numbers.

---

# Why Programmers Use Hexadecimal

Real computers contain billions of addresses.

Writing:

```text
100000000001011010101001010101
```

is painful.

Engineers prefer:

```text
0x7FFE
```

The prefix:

```text
0x
```

means:

```text
Hexadecimal
```

We will study hexadecimal later.

For now:

```text
0x1000
0x2000
0x7FFE
```

are simply memory addresses.

---

# Multi-Byte Values

A byte can store:

```text
0 → 255
```

But many values are larger.

Example:

```rust
u32
```

requires:

```text
4 Bytes
```

Suppose:

```rust
42
```

is stored in memory.

```text

Address     Value

1000        Byte 1
1001        Byte 2
1002        Byte 3
1003        Byte 4

```

One number may occupy multiple bytes.

---

# Strings In Memory

Consider:

```rust
"CAT"
```

Characters are stored as bytes.

```text

Address     Value

1000        C
1001        A
1002        T

```

Strings are simply sequences of bytes.

---

# Arrays In Memory

Consider:

```rust
[10, 20, 30, 40]
```

Memory might look like:

```text

Address     Value

2000        10
2001        20
2002        30
2003        40

```

Arrays occupy consecutive memory addresses.

This fact is extremely important.

---

# Spatial Locality

Because arrays are stored together:

```text

2000
2001
2002
2003

```

if the CPU accesses:

```text
2000
```

it will likely access:

```text
2001

2002

2003
```

soon.

This is called:

```text
Spatial Locality
```

and is one reason caches work.

---

# What Is A Pointer?

A pointer is simply:

```text
An address.
```

Example:

```text
Pointer

=

1000
```

That's all.

A pointer tells us:

```text
Where data lives.
```

---

Suppose:

```text

Address     Value

1000        42

```

Then:

```text
Pointer = 1000
```

means:

```text
Go to address 1000
```

and retrieve:

```text
42
```

---

# Why Addresses Matter

Everything in a computer eventually becomes:

```text
Address
```

plus

```text
Data
```

Examples:

```text
Variables

Arrays

Strings

Functions

Programs

Files
```

All are stored somewhere in memory.

Everything has an address.

---

# Connecting Everything Together

We can now trace the complete chain:

```text

Transistor
    ↓

Logic Gate
    ↓

Memory Cell
    ↓

Register
    ↓

Cache
    ↓

RAM
    ↓

Addresses
    ↓

Data

```

The CPU performs computation by reading and writing data at addresses.

---

# Key Takeaways

- RAM is organized as bytes.
- Every byte has a unique address.
- Addresses are simply numbers.
- Reading memory means retrieving data from an address.
- Writing memory means changing data at an address.
- Large values occupy multiple bytes.
- Arrays occupy consecutive addresses.
- Strings are sequences of bytes.
- A pointer is simply an address.
- Everything stored in memory has an address.
- Memory addressing is the foundation of pointers, stacks, heaps, operating systems, and programming languages.

---

# Next Topic

## Phase 0.16 — Introduction to Assembly

Now that we understand:

```text
Registers

Memory

Addresses

Pointers
```

we can finally learn how a CPU executes instructions and how software directly controls hardware using assembly language.
