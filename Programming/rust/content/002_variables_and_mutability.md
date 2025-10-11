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

## String in rust

1. String Literal (&'static str) — Immutable, stored in read-only data segment

- What is 'static?
- Rust references have lifetimes, specifying how long data is valid.
- 'static lifetime means "lives for the entire program duration."

```rust
let name: &'static str = "AlpKid";
// same as
let name = "AlpKid";

name is an immutable binding to a string slice referring to data in read-only data segment.

```

Diagram:

```text
Memory:

name (stack)  -->  "AlpKid" (read-only data segment)
Diagram:

stack:    | name pointer |
          --------------
name
stack:
| pointer -----> read-only data segment: "AlpKid"
| length
| capacity
```

## Note How stack holds the pointer name

Stack holds the pointer, length, and capacity of the String.

Memory visualization:

```text


text
stack:    | name struct (pointer, len, capacity) |
          ------------------------------------

heap:     | "AlpKid"                      |
Diagram:

text
stack:
| pointer -----> readonly data segment data: "AlpKid"
| length
| capacity
```

## Note:

The variable name of type String is a struct stored on the stack containing these fields:

```rust
struct String {
    ptr: *const u8,  // pointer to heap data
    len: usize,      // current length of string
    capacity: usize, // allocated space in heap
}
So name's stack frame holds this 3-field struct (pointer, length, capacity). The actual string data ("AlpKid Rocks") lives on the heap.
```

2. Mutable Binding to String Literal Slice

```rust
let mut name = "AlpKid";
name = "OtherName";  // rebind allowed
name is a mutable variable on the stack.

Each string literal referenced is immutable and lives in read-only data segment.

mut allows you to point name to a different string slice, but cannot modify the string content.
```

```text
stack:    | name pointer |
          --------------

read-only data segment:
          "AlpKid"
          "OtherName"

```

## Note:

- string literals like "AlpKid" and "OtherName" both live permanently in the read-only data segment. Changing name to point elsewhere doesn't remove or move those literals—they remain in memory as static data.

3. Explicit Type Annotation for String Slice

```rust
let name: &str = "AlpKid";
Same as above but with explicit &str type annotation.

Data stored immutably in read-only segment.

```

```text
Memory layout is identical to example 1.


name (stack)  -->  "AlpKid" (read-only data segment)
Diagram:

stack:    | name pointer |
          --------------

read-only data segment: "AlpKid"
```

## Note:

- the above all three involve immutable string slices (&'static str) referring to data embedded in the binary. They differ only in mutability of the variable binding.

4. Owned, Mutable String (Heap allocated)

```rust
let mut name = String::from("AlpKid");
name.push_str(" Rocks");

```

name owns its data.

String data stored on the heap (because it can grow/modify).

Stack holds the pointer, length, and capacity of the String.

Memory visualization:

```text


text
stack:    | name struct (pointer, len, capacity) |
          ------------------------------------

heap:     | "AlpKid Rocks"                      |
Diagram:

text
stack:
| pointer -----> heap data: "AlpKid Rocks"
| length
| capacity
```

## Note:

The variable name of type String is a struct stored on the stack containing these fields:

```rust
struct String {
    ptr: *const u8,  // pointer to heap data
    len: usize,      // current length of string
    capacity: usize, // allocated space in heap
}
So name's stack frame holds this 3-field struct (pointer, length, capacity). The actual string data ("AlpKid Rocks") lives on the heap.
```

5. Box<T>

Box<T> is a smart pointer for heap allocation of any value T.

Like String, a Box stores a pointer on the stack to heap memory.

Useful when you want ownership and heap allocation but don't need the extra features of String.

```rust
let b: Box<i32> = Box::new(10);
```

## note

- ASCII — Simple Character Encoding
  ASCII encodes 128 characters (letters, digits, symbols) using 7 bits.
- Each character mapped to one byte (8 bits, with most significant bit unused).

Example: Letter 'A' is represented as 65 in decimal or 01000001 in binary.

```text
Char  |  Decimal  |  Binary
------+-----------+----------
A     |  65       |  01000001
B     |  66       |  01000010
```

Limit: ASCII cannot represent symbols or letters beyond English.

2. UTF-8 — Modern Universal Encoding
   UTF-8 encodes all Unicode characters (think: every language and symbol).

Uses 1 to 4 bytes per character:

ASCII characters use 1 byte (compatible with ASCII).

More complex characters use multiple bytes.

```text
Example:
'A' = 1 byte: same as ASCII

'€' (Euro sign) = 3 bytes: 11100010 10000010 10101100
```
