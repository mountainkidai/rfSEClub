## String in rust

For numbers, the default type for an integer literal like 1 is i32 (signed 32-bit integer).

For string literals like "AlpKid", the default type is &'static str — a string slice with static lifetime because the string data is baked into the binary and lives for the entire program duration.

```text
Literal   |  Default Rust Type
----------+-------------------
1         |  i32
"AlpKid"  |  &'static str
```

So:

1. String Literal (&'static str) — Immutable, stored in read-only data segment

- What is 'static?
- Rust references have lifetimes, specifying how long data is valid.
- 'static lifetime means "lives for the entire program duration."

### Static Memory

- Fixed size determined at compile time, exists for lifetime of program.
- Accessible globally.

```rust
let name: &'static str = "AlpKid";
// same as
let name = "AlpKid";
//same as
let name: &str = "AlpKid"; // type is &'static str (inferred)

// So, even though you write &str explicitly, the actual type here is still &'static str because the data is a string literal with a static lifetime.

// name is an immutable binding to a string slice referring to data in read-only data segment.

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

## **Note:**

The variable name of type String is a struct stored on the stack containing these fields:

```rust
struct String {
    ptr: *const u8,  // pointer to heap data
    len: usize,      // current length of string
    capacity: usize, // allocated space in heap
}
So name's stack frame holds this 3-field struct (pointer, length, capacity). The actual string data ("AlpKid Rocks") lives on the heap.
```

2.Mutable Binding to String Literal Slice

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

## Note

- string literals like "AlpKid" and "OtherName" both live permanently in the read-only data segment. Changing name to point elsewhere doesn't remove or move those literals—they remain in memory as static data.

3.Owned, Mutable String (Heap allocated)

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

## Note

The variable name of type String is a struct stored on the stack containing these fields:

```rust
struct String {
    ptr: *const u8,  // pointer to heap data
    len: usize,      // current length of string
    capacity: usize, // allocated space in heap
}
So name's stack frame holds this 3-field struct (pointer, length, capacity). The actual string data ("AlpKid Rocks") lives on the heap.
```

4.## changing static lifetime

- To have a &str with a shorter or different lifetime than 'static, the data you borrow from must itself not live for the whole program, but only a part of it.

```rust
// Incorrect example: will NOT compile due to dangling reference
fn get_slice() -> &str {
    let s = String::from("Hello world");  // s is created locally
    &s[0..5]                               // returning reference to local s
}  // s is dropped here, reference would be invalid

fn main() {
    let slice = get_slice();  // ERROR: cannot return reference to local data
    println!("{}", slice);
}

```

```text
get_slice stack frame:
| s: String struct (ptr, len, cap) |
------------------------------------
      |
      V
heap: "Hello world"

Function returns:
&str pointing to heap data owned by s

BUT after function ends:

stack frame removed, s dropped
heap memory freed

Returned &str points to freed memory (dangling pointer)

```

## Problem: Dangling Reference

- Here, s is created inside the function get_slice and owned by it.

- When the function ends, s is dropped (freed).

- Returning &s[0..5] tries to return a reference to data that no longer exists — a dangling reference.

- Rust prevents this by refusing to compile such code.

## The Fix

## Understanding Lifetimes in Rust

[Lifetimes in Rust - Click to explore](/Programming/rust/content/009_lifetimes.md)

## Problems

1. Create a string literal `greeting = "Hello"` and a `String` from it, then print both
2. Create a mutable `String` `name` with value "Rust", append " Programming" to it, and print the result
3. Create a string slice `&str` from a string literal and a `String`, then print both
4. Create a function that takes a `&str` parameter, prints it, and call it with both a string literal and a `String`
5. Create a `String` variable, use `push_str` to add text to it, and print the final string.
