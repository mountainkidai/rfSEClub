# Rust `Option` and `Result` — Borrowing Values (`as_ref()`, `as_mut()`, `cloned()`, `copied()`)

> **Prerequisites**
>
> Before reading this article, you should know:
>
> - Ownership
> - Borrowing
> - References (`&T`)
> - Mutable References (`&mut T`)
> - `Option<T>`
> - `Result<T, E>`
> - `Some`
> - `None`

---

# What You'll Learn

By the end of this article, you'll understand:

- Why borrowing is important
- What `as_ref()` does
- What `as_mut()` does
- What `cloned()` does
- What `copied()` does
- When to use each one

---

# The Problem

Suppose you have

```rust
let name = Some(String::from("Steve"));
```

Now you want to print it.

```rust
println!("{:?}", name);
```

Easy.

But what if you also want to use it later?

Sometimes calling methods on an `Option` can move the value.

Rust prevents this because every value has exactly one owner.

Instead of moving the value, sometimes you only want to **borrow** it.

That's where these methods help.

---

# The Big Picture

```text
Option<String>

↓

Borrow

↓

as_ref()

↓

Option<&String>
```

```text
Option<String>

↓

Mutable Borrow

↓

as_mut()

↓

Option<&mut String>
```

```text
Option<&String>

↓

Clone

↓

Option<String>
```

```text
Option<&i32>

↓

Copy

↓

Option<i32>
```

---

# First Principles

Imagine you own a book.

There are four things you can do.

### Read it

You borrow it.

```
&
```

---

### Edit it

You borrow it with permission to change it.

```
&mut
```

---

### Buy another copy

You clone it.

```
clone()
```

---

### Photocopy a single page

If copying is cheap, Rust simply copies it.

```
copy
```

These four ideas directly correspond to

- `as_ref()`
- `as_mut()`
- `cloned()`
- `copied()`

---

# `as_ref()`

## Purpose

Borrow the value without taking ownership.

---

## Syntax

```rust
option.as_ref()
```

Returns

```rust
Option<&T>
```

---

## Example

```rust
let name = Some(String::from("Steve"));

let borrowed = name.as_ref();

println!("{:?}", borrowed);
println!("{:?}", name);
```

Output

```text
Some("Steve")
Some("Steve")
```

Notice

The original `name` is still available.

Nothing was moved.

---

# Visual

```text
Some(String)

↓

as_ref()

↓

Some(&String)
```

The value stays where it is.

Rust only creates a reference.

---

# Why Use `as_ref()`?

Suppose you only want to check the length.

```rust
let name = Some(String::from("Steve"));

let length = name.as_ref().map(|s| s.len());

println!("{:?}", length);
println!("{:?}", name);
```

Output

```text
Some(5)
Some("Steve")
```

Without `as_ref()`, the `String` could be moved.

---

# `as_mut()`

Sometimes you don't just want to read.

You want to modify the value.

---

## Syntax

```rust
option.as_mut()
```

Returns

```rust
Option<&mut T>
```

---

## Example

```rust
let mut name = Some(String::from("Steve"));

if let Some(n) = name.as_mut() {
    n.push_str(" Jobs");
}

println!("{:?}", name);
```

Output

```text
Some("Steve Jobs")
```

Notice

The original value changed.

---

# Visual

```text
Some(String)

↓

as_mut()

↓

Some(&mut String)

↓

Modify

↓

Original changes
```

---

# `cloned()`

Sometimes you have

```rust
Option<&String>
```

but you need

```rust
Option<String>
```

You want an owned copy.

---

## Syntax

```rust
option.cloned()
```

Returns

```rust
Option<T>
```

where `T` implements `Clone`.

---

## Example

```rust
let name = String::from("Steve");

let borrowed = Some(&name);

let owned = borrowed.cloned();

println!("{:?}", owned);
```

Output

```text
Some("Steve")
```

Now you own a new `String`.

---

# Visual

```text
Some(&String)

↓

cloned()

↓

Some(String)
```

A completely new value is created.

---

# `copied()`

Some types don't need cloning.

Integers

Characters

Booleans

Floating-point numbers

These types implement `Copy`.

Rust simply duplicates them.

---

## Example

```rust
let age = 25;

let borrowed = Some(&age);

let copied = borrowed.copied();

println!("{:?}", copied);
```

Output

```text
Some(25)
```

---

# Visual

```text
Some(&i32)

↓

copied()

↓

Some(i32)
```

---

# Why Have Both?

Consider

```rust
String
```

Copying a `String` means allocating new memory.

That's expensive.

So Rust requires

```rust
clone()
```

instead.

---

But an integer

```rust
42
```

is only 4 or 8 bytes.

Rust simply copies it.

No allocation is needed.

---

# Summary Table

| Method     | Input        | Output           | Ownership       |
| ---------- | ------------ | ---------------- | --------------- |
| `as_ref()` | `Option<T>`  | `Option<&T>`     | Borrow          |
| `as_mut()` | `Option<T>`  | `Option<&mut T>` | Mutable borrow  |
| `cloned()` | `Option<&T>` | `Option<T>`      | Clone the value |
| `copied()` | `Option<&T>` | `Option<T>`      | Copy the value  |

---

# Mental Model

```text
Have a value

↓

Need to read only?

↓

as_ref()
```

---

```text
Have a value

↓

Need to modify it?

↓

as_mut()
```

---

```text
Have a borrowed String

↓

Need ownership?

↓

cloned()
```

---

```text
Have a borrowed integer

↓

Need ownership?

↓

copied()
```

---

# When Should You Use Them?

### Use `as_ref()`

- Read a value without moving it.
- Call methods like `len()`.
- Chain methods such as `map()` while keeping ownership.

---

### Use `as_mut()`

- Modify the value inside an `Option` or `Result`.
- Update a `String`, `Vec`, or other mutable data.

---

### Use `cloned()`

- Turn a borrowed value into an owned value when the type implements `Clone`.
- Common with `String`, `Vec`, and custom structs.

---

### Use `copied()`

- Turn a borrowed value into an owned value for inexpensive `Copy` types like `i32`, `bool`, `char`, or `f64`.

---

# Key Takeaways

- `as_ref()` borrows the value and returns `Option<&T>` without moving ownership.
- `as_mut()` mutably borrows the value and returns `Option<&mut T>`, allowing you to modify it.
- `cloned()` creates a new owned copy from `Option<&T>` when the type implements `Clone`.
- `copied()` duplicates inexpensive `Copy` types from `Option<&T>` into `Option<T>`.
- These methods help you work with values while respecting Rust's ownership and borrowing rules.
