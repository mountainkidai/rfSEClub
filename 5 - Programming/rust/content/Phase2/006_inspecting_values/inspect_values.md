# Rust `Option` and `Result` — Inspecting Values (`is_some()`, `is_none()`, `is_ok()`, `is_err()`)

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
> - `?`
> - `map()`
> - `map_err()`

---

# What You'll Learn

By the end of this article, you'll understand:

- Why Rust provides inspection methods
- What `is_some()` does
- What `is_none()` does
- What `is_ok()` does
- What `is_err()` does
- When to use them
- When **not** to use them

---

# The Problem

Suppose you have an `Option`.

```rust
let browser = Some("Brave");
```

Sometimes you don't actually need the value.

You only want to know:

> "Does a value exist?"

Similarly, with a `Result`:

```rust
let file = Ok("config.json");
```

Sometimes you only care whether the operation succeeded.

You don't need the value yet.

Rust provides simple inspection methods for this.

---

# The Big Picture

```
Option<T>

↓

Some(value)
None

↓

Inspect

↓

is_some()
is_none()
```

```
Result<T, E>

↓

Ok(value)
Err(error)

↓

Inspect

↓

is_ok()
is_err()
```

Notice something important:

These methods **do not extract the value.**

They simply answer a question.

---

# Think Like a Security Guard

Imagine a secure building.

Someone arrives carrying a box.

The security guard has two choices.

### Option 1

Open the box.

```
What's inside?
```

This is like

```rust
match
unwrap
?
```

---

### Option 2

Simply check whether a box exists.

```
Do they have a box?

Yes.

No.
```

This is exactly what

```
is_some()
is_none()
```

do.

They never open the box.

---

# `is_some()`

## Purpose

Returns

```rust
true
```

if the `Option` contains a value.

Otherwise

```rust
false
```

---

## Syntax

```rust
option.is_some()
```

Returns

```rust
bool
```

---

## Example

```rust
let browser = Some("Brave");

println!("{}", browser.is_some());
```

Output

```text
true
```

Because the `Option` contains a value.

---

Another example

```rust
let browser: Option<&str> = None;

println!("{}", browser.is_some());
```

Output

```text
false
```

---

# Visual

```
Some("Brave")

↓

is_some()

↓

true
```

```
None

↓

is_some()

↓

false
```

---

# `is_none()`

This is simply the opposite.

## Syntax

```rust
option.is_none()
```

Returns

```rust
bool
```

---

## Example

```rust
let browser = Some("Brave");

println!("{}", browser.is_none());
```

Output

```text
false
```

---

Example

```rust
let browser: Option<&str> = None;

println!("{}", browser.is_none());
```

Output

```text
true
```

---

# Visual

```
Some("Brave")

↓

is_none()

↓

false
```

```
None

↓

is_none()

↓

true
```

---

# `is_ok()`

Now let's look at `Result`.

Suppose we read a file.

```rust
let result: Result<&str, &str> = Ok("config.json");
```

We only want to know:

> "Did it succeed?"

We don't care about the file yet.

---

## Syntax

```rust
result.is_ok()
```

Returns

```rust
bool
```

---

## Example

```rust
let result: Result<&str, &str> = Ok("config.json");

println!("{}", result.is_ok());
```

Output

```text
true
```

---

Example

```rust
let result: Result<&str, &str> = Err("File not found");

println!("{}", result.is_ok());
```

Output

```text
false
```

---

# Visual

```
Ok(...)

↓

is_ok()

↓

true
```

```
Err(...)

↓

is_ok()

↓

false
```

---

# `is_err()`

This is the opposite.

It answers:

> "Did something go wrong?"

---

## Syntax

```rust
result.is_err()
```

Returns

```rust
bool
```

---

## Example

```rust
let result: Result<&str, &str> = Err("File not found");

println!("{}", result.is_err());
```

Output

```text
true
```

---

Example

```rust
let result: Result<&str, &str> = Ok("config.json");

println!("{}", result.is_err());
```

Output

```text
false
```

---

# Visual

```
Ok(...)

↓

is_err()

↓

false
```

```
Err(...)

↓

is_err()

↓

true
```

---

# Summary Table

| Method      | Works On | Returns | Meaning                    |
| ----------- | -------- | ------- | -------------------------- |
| `is_some()` | `Option` | `bool`  | Does this contain a value? |
| `is_none()` | `Option` | `bool`  | Is this empty?             |
| `is_ok()`   | `Result` | `bool`  | Did it succeed?            |
| `is_err()`  | `Result` | `bool`  | Did it fail?               |

---

# Important

These methods **never** extract the value.

```rust
let browser = Some("Brave");

browser.is_some();
```

The value is still there.

Nothing has been removed.

---

# When Should You Use Them?

Use them when you only need a **yes/no** answer.

Examples:

- Does the user have an email?
- Did login succeed?
- Was a token found?
- Did parsing fail?

---

# When Should You NOT Use Them?

Suppose you immediately need the value.

Don't write

```rust
if browser.is_some() {
    // somehow get the value...
}
```

Instead use

```rust
if let Some(browser) = browser {
    println!("{browser}");
}
```

or

```rust
match browser {
    Some(browser) => println!("{browser}"),
    None => println!("No browser"),
}
```

These let you inspect **and** use the value in one step.

---

# Mental Model

Think of these methods as asking a simple question.

```
Option

Some(value)

↓

"is there something?"

↓

true
```

```
None

↓

"is there something?"

↓

false
```

```
Result

Ok(value)

↓

"did it succeed?"

↓

true
```

```
Err(error)

↓

"did it succeed?"

↓

false
```

---

# Key Takeaways

- `is_some()` returns `true` if an `Option` contains a value.
- `is_none()` returns `true` if an `Option` is empty.
- `is_ok()` returns `true` if a `Result` succeeded.
- `is_err()` returns `true` if a `Result` failed.
- All four methods return a `bool`.
- None of these methods extract, move, or modify the value—they only inspect its state.
- Use them when you only need a yes/no answer. If you need the contained value, prefer `match`, `if let`, or `?`.
