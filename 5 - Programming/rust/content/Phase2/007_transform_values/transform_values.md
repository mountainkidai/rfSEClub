# Rust `Option` and `Result` — Transforming Values with `and_then()` and `filter()`

> **Prerequisites**
>
> Before reading this article, you should know:
>
> - `Option<T>`
> - `Result<T, E>`
> - `Some`
> - `None`
> - `Ok`
> - `Err`
> - `match`
> - `map()`
> - `map_err()`
> - `?`

---

# What You'll Learn

By the end of this article, you'll understand:

- Why `map()` is sometimes not enough
- What `and_then()` does
- Why it's called **flatMap** in other languages
- What `filter()` does
- When to use each one

---

# The Big Picture

```text
Option<T>

↓

map()

↓

Transforms the value

↓

Some(new_value)
```

```text
Option<T>

↓

and_then()

↓

Transforms into another Option

↓

Some(...)
or
None
```

```text
Option<T>

↓

filter()

↓

Keep it?

↓

Yes → Some(value)

No  → None
```

---

# The Problem with `map()`

Suppose you have

```rust
let age = Some(20);
```

You want to double it.

```rust
let result = age.map(|x| x * 2);
```

Output

```text
Some(40)
```

Perfect.

`map()` works because the closure returns a **normal value**.

```rust
|x| x * 2
```

returns

```rust
40
```

---

# But What If...

Suppose you only want adults.

If the age is under 18,

return `None`.

Your closure becomes

```rust
|x| {
    if x >= 18 {
        Some(x)
    } else {
        None
    }
}
```

Notice something important.

The closure now returns

```rust
Option<i32>
```

instead of

```rust
i32
```

---

# Using `map()`

```rust
let age = Some(20);

let result = age.map(|x| Some(x));
```

Output

```text
Some(Some(20))
```

Uh oh.

You now have

```text
Option<Option<i32>>
```

A box inside another box.

---

# Visual

```text
Some(20)

↓

map()

↓

Some(Some(20))
```

This is almost never what we want.

---

# The Solution

Rust provides

```rust
and_then()
```

Instead of creating

```text
Some(Some(...))
```

it automatically removes the extra layer.

---

# `and_then()`

## Purpose

Run another operation that already returns an `Option`.

---

## Syntax

```rust
option.and_then(|value| ...)
```

The closure must return

```rust
Option<T>
```

---

# Example

```rust
let age = Some(20);

let result = age.and_then(|x| {
    Some(x * 2)
});
```

Output

```text
Some(40)
```

Notice

There is **no**

```text
Some(Some(40))
```

---

# Another Example

Only adults are allowed.

```rust
let age = Some(16);

let result = age.and_then(|x| {
    if x >= 18 {
        Some(x)
    } else {
        None
    }
});
```

Output

```text
None
```

---

Adult

```rust
let age = Some(25);

let result = age.and_then(|x| {
    if x >= 18 {
        Some(x)
    } else {
        None
    }
});
```

Output

```text
Some(25)
```

---

# Visual

```text
Some(25)

↓

and_then()

↓

Some(25)
```

```text
Some(16)

↓

and_then()

↓

None
```

---

# Mental Model

Think of `map()` like replacing an object.

```text
Apple

↓

map()

↓

Orange
```

One object becomes another object.

---

Think of `and_then()` like opening one door that leads to another room.

```text
Room

↓

Open Door

↓

Another Room
```

You don't want

```text
Room
└── Room
```

You just want

```text
Room
```

`and_then()` removes the extra layer automatically.

---

# Why Is It Called "FlatMap"?

Imagine

```text
Some(Some(10))
```

`and_then()` "flattens" it into

```text
Some(10)
```

Other languages call this

```text
flatMap()
```

Rust calls it

```text
and_then()
```

They mean the same idea.

---

# `filter()`

Sometimes you don't want to transform the value.

You simply want to decide

> "Should I keep this value?"

That's what `filter()` does.

---

# Syntax

```rust
option.filter(|value| condition)
```

The closure returns

```rust
bool
```

---

# Example

Keep only adults.

```rust
let age = Some(25);

let result = age.filter(|x| *x >= 18);
```

Output

```text
Some(25)
```

---

Example

```rust
let age = Some(15);

let result = age.filter(|x| *x >= 18);
```

Output

```text
None
```

---

# Visual

```text
Some(25)

↓

filter(age >= 18)

↓

Some(25)
```

---

```text
Some(15)

↓

filter(age >= 18)

↓

None
```

---

# Difference Between `map()` and `filter()`

`map()`

Changes the value.

```rust
Some(20)

↓

map(|x| x * 2)

↓

Some(40)
```

---

`filter()`

Keeps or removes the value.

```rust
Some(20)

↓

filter(|x| *x >= 18)

↓

Some(20)
```

---

```rust
Some(15)

↓

filter(|x| *x >= 18)

↓

None
```

---

# Difference Between `map()` and `and_then()`

### `map()`

Closure returns a normal value.

```rust
Some(10)

↓

map(|x| x * 2)

↓

Some(20)
```

---

### `and_then()`

Closure returns another `Option`.

```rust
Some(10)

↓

and_then(...)

↓

Some(...)
or
None
```

---

# Summary Table

| Method       | Closure Returns | Result                    |
| ------------ | --------------- | ------------------------- |
| `map()`      | `T`             | `Some(T)`                 |
| `and_then()` | `Option<T>`     | `Option<T>`               |
| `filter()`   | `bool`          | Keep or discard the value |

---

# When Should You Use Them?

Use `map()` when you want to transform the value.

Use `and_then()` when the next operation may fail and already returns an `Option`.

Use `filter()` when you simply want to keep or discard the existing value based on a condition.

---

# Key Takeaways

- `map()` transforms a value into another value.
- `and_then()` transforms a value into another `Option` without creating nested `Option`s.
- `and_then()` is called **flatMap** in many other programming languages.
- `filter()` never changes the value—it only decides whether to keep or discard it.
- Use `map()` for transformations, `and_then()` for chaining fallible operations, and `filter()` for conditional retention.
