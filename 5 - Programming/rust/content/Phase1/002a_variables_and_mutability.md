# Variables and Mutability in Rust

Before diving into syntax, understand the foundational principles that shape Rust's approach to variables:

1. **Memory Safety by Default**: Rust prioritizes preventing bugs at compile time rather than runtime. Making variables immutable by default is a deliberate choice to catch unintended modifications before code runs.

2. **Explicit Intent**: When you write `mut`, you're explicitly saying "this value will change." This makes code intentions clear and self-documenting, reducing cognitive load when reading others' code.

3. **Performance & Predictability**: Immutable data is easier for the compiler to optimize. The compiler can make assumptions about immutable values that allow for better code generation.

---

## Overview

Variables store data values in memory. In Rust, understanding how variables work and when you can change them is critical because it directly affects:

- **Memory Safety**: Prevents accidental data corruption
- **Code Intent**: Makes it clear whether a value should change
- **Compiler Optimization**: Unchanging values enable better optimizations
- **Concurrency Safety**: Unchanging data can be safely shared across threads without locks

### Key Concepts

**Variables**: Named containers that hold values. Declared using `let`. Think of them as labeled boxes that store data.

**Immutable Variables** (default): Once you put a value in the box, you cannot change what's inside. This is Rust's default because it's safer and prevents mistakes.

**Mutable Variables**: Values that you can change after putting them in the box. Declared using `let mut`. You have to explicitly say "this can change" using `mut`.

**Constants**: Fixed values that never change, use `const` keyword, must have an explicit type, and are used throughout your entire program. They're known before the program even runs.

​

---

## Immutable vs. Mutable Variables: Deep Dive

### Immutability by Default

```rust
let x = 5;
// x = 6; // ❌ Error: cannot change x because it's immutable

println!("x is: {}", x); // ✅ Works: x is: 5
```

**Why immutable by default?**

- Easier to understand what the code does
- The compiler can guarantee the value never changes
- Prevents mistakes where you accidentally change something you didn't mean to
- The compiler can make the code faster

### Mutable Variables

```rust
let mut y = 10;
println!("y is: {}", y); // y is: 10

y = 15; // ✅ Works because y is mutable
println!("y is: {}", y); // y is: 15

y = 20; // ✅ Can change it again
println!("y is: {}", y); // y is: 20
```

**When to use mutable variables:**

- When a value needs to change (like counting from 1 to 10)
- When you're adding numbers together (like summing a list)
- When building something step by step

## Problems

1. Create an immutable variable `name` and assign your name to it, then print it
2. Create a mutable variable `count` initialized to 0, increment it by 1, and print the result
3. Create two variables `x` and `y`, swap their values using a mutable variable, and print both values
4. Create a mutable variable `temperature` set to 25, change it to 30, and print the new value
5. Create an immutable variable `pi` with value 3.14 and a mutable variable `radius` with value 5, calculate and print the area of a circle (pi _radius_ radius).
