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

## note

## Problems

1. Create an immutable variable `name` and assign your name to it, then print it
2. Create a mutable variable `count` initialized to 0, increment it by 1, and print the result
3. Create two variables `x` and `y`, swap their values using a mutable variable, and print both values
4. Create a mutable variable `temperature` set to 25, change it to 30, and print the new value
5. Create an immutable variable `pi` with value 3.14 and a mutable variable `radius` with value 5,   calculate and print the area of a circle (pi *radius* radius).
