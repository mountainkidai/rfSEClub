# Phase 0.3 — Hexadecimal

## Introduction

In the previous chapter, we learned that computers store everything using binary.

Examples:

text 13 = 1101

text 255 = 11111111

text 1024 = 10000000000

While computers work perfectly with binary, humans quickly run into a problem:

> Binary is difficult to read.

Imagine debugging a program and seeing:

text 11010110101101011110101010101010

Is that:

- A memory address?
- A color value?
- A machine instruction?
- A number?

It's hard to tell.

To solve this problem, programmers use hexadecimal.

Hexadecimal is simply a more compact way to represent binary.

---

# Why Hexadecimal Exists

Suppose you have:

text 11111111

Humans can read it.

Now imagine:

text 11111111111111111111111111111111

Much harder.

Now imagine:

text 1111111111111111111111111111111111111111111111111111111111111111

Nearly impossible to read accurately.

Computers have no problem.

Humans do.

Hexadecimal was invented to make binary easier for humans.

---

# What Is Hexadecimal?

Hexadecimal is a number system that uses:

text 16 symbols

instead of:

text 10 symbols

used by decimal.

Therefore hexadecimal is called:

> Base 16

---

# Decimal Digits

Decimal uses:

text 0 1 2 3 4 5 6 7 8 9

Total:

text 10 symbols

---

# Binary Digits

Binary uses:

text 0 1

Total:

text 2 symbols

---

# Hexadecimal Digits

Hexadecimal uses:

text 0 1 2 3 4 5 6 7 8 9 A B C D E F

Total:

text 16 symbols

---

# What Do A-F Mean?

Hexadecimal extends decimal using letters.

| Hex | Decimal |
| --- | ------- |
| A   | 10      |
| B   | 11      |
| C   | 12      |
| D   | 13      |
| E   | 14      |
| F   | 15      |

Example:

text A = 10

text F = 15

---

# Hexadecimal Place Values

Decimal place values:

| Position | Value     |
| -------- | --------- |
| 1st      | 10⁰ = 1   |
| 2nd      | 10¹ = 10  |
| 3rd      | 10² = 100 |

---

Hexadecimal place values:

| Position | Value      |
| -------- | ---------- |
| 1st      | 16⁰ = 1    |
| 2nd      | 16¹ = 16   |
| 3rd      | 16² = 256  |
| 4th      | 16³ = 4096 |

Every position is a power of 16.

---

# Example: Hex To Decimal

Consider:

text 1A

Expand:

text (1 × 16) + (A × 1)

Remember:

text A = 10

Therefore:

text 16 + 10 = 26

Result:

text 1A₁₆ = 26₁₀

---

# Another Example

Convert:

text 2F

Expand:

text (2 × 16) + (F × 1)

Remember:

text F = 15

Calculate:

text 32 + 15 = 47

Result:

text 2F₁₆ = 47₁₀

---

# The Real Magic Of Hexadecimal

The reason programmers love hexadecimal is not because it is Base 16.

The real reason is:

> One hexadecimal digit represents exactly four binary bits.

This relationship is perfect.

---

# Four Bits

Four binary bits can represent:

text 0000

through:

text 1111

Total possibilities:

text 16

Exactly the same number of symbols available in hexadecimal.

---

# Binary To Hex Table

Memorize this table.

It will save thousands of hours later.

| Binary | Hex |
| ------ | --- |
| 0000   | 0   |
| 0001   | 1   |
| 0010   | 2   |
| 0011   | 3   |
| 0100   | 4   |
| 0101   | 5   |
| 0110   | 6   |
| 0111   | 7   |
| 1000   | 8   |
| 1001   | 9   |
| 1010   | A   |
| 1011   | B   |
| 1100   | C   |
| 1101   | D   |
| 1110   | E   |
| 1111   | F   |

---

# Note

Yes — `0x` is the common **prefix** used in programming to indicate that a number is written in **hexadecimal** (base 16).
So:

- `0xFF` means hex `FF`, which is decimal `255`.
- `0x10` means hex `10`, which is decimal `16`.

## Why it exists

It removes ambiguity, especially because hex numbers can start with letters like `A`, `B`, `C`, `D`, `E`, and `F`.

## Simple rule

- No prefix: usually assume decimal.
- `0x` prefix: treat it as hex.

So yes, `0x` is basically a label that says **“this is hex.”**

# Binary to Hex Example

Convert:

`11010110`

Split into groups of four:

`1101 0110`

Using the table:

- `1101 = D`
- `0110 = 6`

Result:

`D6`

Therefore:

`11010110₂ = D6₁₆`

---

# Another Example

Convert:

`11111111`

Group:

`1111 1111`

Convert:

- `1111 = F`
- `1111 = F`

Result:

`FF`

Therefore:

`11111111₂ = FF₁₆`

---

# Hex to Binary Example

Convert:

`3A`

Convert each digit separately:

- `3 = 0011`
- `A = 1010`

Combine:

`00111010`

Result:

`3A₁₆ = 00111010₂`

---

# Why Programmers Use Hex

Consider:

`1111111111111111`

Binary.

Same value in hexadecimal:

`FFFF`

- Much shorter.
- Much easier to read.
- Much easier to debug.

---

# Memory Addresses

When your program runs, memory locations might look like:

`0x7FFEAB12`

instead of:

`01111111111111101010101100010010`

Imagine debugging with the second version.

You would quit software engineering by lunch.

---

# The 0x Prefix

Hexadecimal numbers are usually written with:

`0x`

in front.

Examples:

- `0xFF`
- `0x1A`
- `0x7FFEAB12`

The prefix simply means:

> This number is hexadecimal.

---

# Colors in Hex

Web developers see hexadecimal constantly.

Example:

`#FF0000`

Represents:

- `Red = FF`
- `Green = 00`
- `Blue = 00`

Which means:

- `Red = 255`
- `Green = 0`
- `Blue = 0`

Pure red.

---

# Machine Code

CPU instructions are often displayed in hexadecimal.

Example:

`48 89 E5`

Instead of:

`01001000 10001001 11100101`

Hexadecimal makes machine code readable.

---

# Memory Dumps

Debuggers often display memory like:

`4F A2 19 FF`

Each pair represents:

`1 byte`

Because:

`2 hex digits = 8 bits = 1 byte`

This relationship is extremely important.

---

# The Important Relationship

Memorize this forever:

`1 Hex Digit = 4 Bits`

and

`2 Hex Digits = 8 Bits = 1 Byte`

This is why hexadecimal dominates systems programming.

---

# First Principles Summary

- Computers use binary because hardware operates using two states.
- Humans struggle to read large binary values.
- Hexadecimal provides a compact representation.
- Every hexadecimal digit maps perfectly to four binary bits.
- Hexadecimal is not used because computers understand it.
- Computers still use binary internally.
- Hexadecimal exists purely for humans.

---

# Key Takeaways

- Hexadecimal is Base 16.
- It uses digits:
  - `0–9`
  - `A–F`
- `A = 10`
- `F = 15`
- One hex digit represents four bits.
- Two hex digits represent one byte.
- Hexadecimal is easier to read than binary.
- Memory addresses are usually displayed in hexadecimal.
- Machine code is often displayed in hexadecimal.
- Debuggers heavily use hexadecimal.

---

# Mental Model

Whenever you see:

`0xFF`

Think:

`11111111`

Whenever you see:

`0xA`

Think:

`1010`

Whenever you see:

`0x7FFEAB12`

Think:

> This is simply a large binary number displayed in a human-friendly form.

Hexadecimal is just shorthand for binary.

Nothing more.

Nothing less.

---

# Check Your Understanding

1. Why was hexadecimal invented?
2. What does Base 16 mean?
3. What is the decimal value of `A`?
4. What is the decimal value of `F`?
5. Convert binary `1111` to hexadecimal.
6. Convert hexadecimal `A` to binary.
7. How many bits does one hexadecimal digit represent?
8. How many hex digits are needed for one byte?
9. Why are memory addresses displayed in hexadecimal?

If you understand this chapter, you now understand the numbering systems used throughout operating systems, networking, memory management, assembly language, debuggers, and systems programming.

---

# Next Topic

## Phase 0.4 — Boolean Logic

Now that we can represent information as bits, the next question becomes:

> How can we perform reasoning and decision-making using only 0 and 1?

That question leads directly to Boolean logic, the mathematical foundation of every CPU ever built.
