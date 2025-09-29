# Variables and Mutability in Rust

## Overview

Variables are a fundamental part of programming that store data values.
In Rust, variables are immutable by default, meaning once a value is assigned, it cannot be changed.

To allow a variable's value to be changed, it must be declared as mutable using the `mut` keyword.

Constants are similar to variables but have important differences:

- They must have a fixed value assigned at compile time.
- They are always immutable.
- They use the `const` keyword.
- They require an explicit type annotation.
- They are accessible throughout the entire program.

---

## Example: Declaring Immutable and Mutable Variables

## Declaring Variables

```rust
let x = 5; // Immutable variable
let mut y = 10; // Mutable variable

println!("The value of x is: {}", x);
println!("The value of y is: {}", y);

y = 15; // Valid because y is mutable

// x = 6; // This would cause a compile-time error because x is immutable
```

You can declare a variable as mutable using `mut`. Attempting to modify an immutable variable will cause a compile-time error.

---

## Constants and Their Declaration

Constants are declared using `const` keyword and must include type annotation.

```rust
const MAX_POINTS: u32 = 100_000;

println!("The maximum points are: {}", MAX_POINTS);
```

Constants are always immutable and are accessible throughout the entire program.

---

Constants are conventionally written in uppercase with underscores. They are handy for fixed values you want available everywhere.

---

## Variable Shadowing

Rust allows you to declare a new variable with the same name as a previous variable. This is called _shadowing_. The new variable shadows the old one.

```rust
let x = 5;
let x = x + 1; // Shadows previous x, now x is 6
let x = x * 2; // Shadows again, x is 12

println!("The value of x is: {}", x); // Prints 12
```

Shadowing is different from mutability because it allows you to re-bind a variable name to a new value and potentially change its type.

---

## Type Annotations and Variable Sizes

Rust allows—and sometimes requires—you to explicitly specify variable types. This is especially useful when the compiler can’t infer the type or you want to control the exact size.

Common scalar types with their sizes:

```rust
let a: u8 = 255; // unsigned 8-bit integer (0 to 255)
let b: i8 = -128; // signed 8-bit integer (-128 to 127)
let c: u32 = 1000; // unsigned 32-bit integer
let d: i64 = -50000; // signed 64-bit integer
let e: f32 = 3.14; // 32-bit floating-point number
let f: f64 = 2.71828; // 64-bit floating-point number
let g: bool = true; // boolean
let h: char = 'R'; // single Unicode character
```

Choosing the appropriate type ensures efficient memory usage and program correctness.

---

## Exercise: Swap Two Variables

Declare two mutable variables and swap their values without using a third variable. Print the values before and after swapping.

---

## Mini-Project: Calculate Simple Interest

Write a program that:

- Declares variables for Principal (P), Rate of Interest (R), and Time (T).
- Calculates simple interest using the formula: Simple Interest = (P × R × T) / 100.
- Prints the result.

Example:

```rust
let principal = 1000.0;
let rate = 5.0;
let time = 3.0;
let simple_interest = (principal * rate * time) / 100.0;

println!("The simple interest is: {}", simple_interest);
```

---

## Summary

- Variables are immutable by default; use `mut` to allow mutation.
- Constants use `const` and must include a type annotation; they are immutable and globally accessible.
- Shadowing lets you reuse variable names with new values or types.
- Explicit type annotations help control data size and behavior.

This concludes your introduction to variables and mutability. Next, you will explore Rust’s scalar data types in detail.
