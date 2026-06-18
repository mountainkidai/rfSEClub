# `usize` and `isize`

These types depend on your computer's architecture.

---

# What is a 64-bit Computer?

A CPU processes data in chunks.

```text
32-bit CPU
    ↓
Processes 32 bits at a time

64-bit CPU
    ↓
Processes 64 bits at a time
```

Think:

```text
32-bit CPU = 32-lane highway
64-bit CPU = 64-lane highway
```

A 64-bit CPU can handle larger numbers and access much more memory.

Most modern laptops and servers are:

```text
64-bit
```

---

# Why `usize` and `isize` Exist?

Rust needs an integer type that matches the CPU's native size.

```text
32-bit machine
    ↓
usize = u32
isize = i32

64-bit machine
    ↓
usize = u64
isize = i64
```

So Rust automatically chooses the correct size.

---

# Signed vs Unsigned

```rust
usize
```

Can store:

```text
0, 1, 2, 3, ...
```

No negative numbers.

---

```rust
isize
```

Can store:

```text
..., -2, -1, 0, 1, 2, ...
```

Negative and positive numbers.

---

# Why Use `usize`?

Memory addresses and array indexes can never be negative.

```rust
let numbers = vec![10, 20, 30];

let index: usize = 1;

println!("{}", numbers[index]);
```

Rust uses `usize` for indexing.

---

# Integer Literal Formats

## Decimal (Base 10)

```rust
98_222
```

Same as:

```rust
98222
```

`_` is only for readability.

---

## Hexadecimal (Base 16)

```rust
0xff
```

```text
0x = hex
ff = 255
```

Result:

```text
255
```

---

## Octal (Base 8)

```rust
0o77
```

```text
0o = octal
77 = 63
```

Result:

```text
63
```

---

## Binary (Base 2)

```rust
0b1111_0000
```

Result:

```text
240
```

---

# Byte Literal

```rust
b'A'
```

Means:

```text
ASCII value of 'A'
```

Result:

```text
65
```

Type:

```rust
u8
```

---

# Type Suffixes

Tell Rust exactly what type to use.

```rust
57u8
```

Means:

```rust
let x: u8 = 57;
```

---

```rust
100i32
```

Means:

```rust
let x: i32 = 100;
```

---

# Quick Cheat Sheet

```rust
98_222       // Decimal
0xff         // Hexadecimal
0o77         // Octal
0b1111_0000  // Binary
b'A'         // Byte (u8)

57u8         // u8 integer
100i32       // i32 integer
```

---

# Easy Mental Model

```text
u8   = small positive integer
i8   = small positive/negative integer

u32  = positive integer
i32  = positive/negative integer

u64  = large positive integer
i64  = large positive/negative integer

usize = size of your CPU (unsigned)
isize = size of your CPU (signed)
```
