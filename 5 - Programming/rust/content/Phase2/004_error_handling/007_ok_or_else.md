# `ok_or_else()`

## First Principle

Suppose you're checking if a user exists.

If the user exists,

everything is fine.

If the user doesn't exist,

then create an error.

Notice something.

The error is only needed **when the user doesn't exist**.

So why create it every time?

That's exactly why `ok_or_else()` exists.

---

# Recall `ok_or()`

```rust
let user = find_user()
    .ok_or(ApiError::UserNotFound)?;
```

Looks good.

But here's what happens.

```text
Create ApiError

↓

Call ok_or()

↓

Maybe use it

↓

Maybe throw it away
```

Even if the user exists,

the error was already created.

---

# `ok_or_else()`

Instead

```rust
let user = find_user()
    .ok_or_else(|| ApiError::UserNotFound)?;
```

Notice

```rust
|| ApiError::UserNotFound
```

This is a closure.

It says

> "If you need an error later, call me."

---

# Visualization

With `ok_or()`

```text
Create Error

↓

Option

↓

Some(User)

↓

Ignore Error
```

The error was created unnecessarily.

---

With `ok_or_else()`

```text
Option

↓

Some(User)

↓

Done
```

No error created.

---

If

```text
None
```

Then

```text
Create Error

↓

Err(ApiError)
```

Only now.

---

# Think of Ordering Food

Suppose you always prepare a refund.

Customer arrives.

```text
Customer Pays

↓

Prepare Refund

↓

Customer Happy

↓

Throw Refund Away
```

Wasteful.

Instead

```text
Customer Pays

↓

If something goes wrong

↓

Prepare Refund
```

That's `ok_or_else()`.

---

# Example

Suppose

```rust
let value = Some(100);
```

Using `ok_or_else()`

```rust
let result =
    value.ok_or_else(|| "Missing");
```

Output

```text
Ok(100)
```

The closure never runs.

---

Now

```rust
let value: Option<i32> = None;
```

```rust
let result =
    value.ok_or_else(|| "Missing");
```

Now Rust executes

```rust
|| "Missing"
```

Output

```text
Err("Missing")
```

---

# Why Use a Closure?

Imagine creating an error takes time.

```rust
ApiError {
    message,
    timestamp,
    request_id,
    user_id,
    stack_trace,
}
```

That's expensive.

If

```text
Some(User)
```

exists,

there's no reason to build all of that.

---

# Compare

## ok_or()

```rust
.ok_or(ApiError::UserNotFound)
```

Error created immediately.

---

## ok_or_else()

```rust
.ok_or_else(|| ApiError::UserNotFound)
```

Error created only if needed.

---

# Real SQLx Example

Suppose

```rust
let user =
    query.fetch_optional().await?;
```

Returns

```rust
Option<User>
```

Convert it.

```rust
let user = query
    .fetch_optional()
    .await?
    .ok_or_else(|| ApiError::UserNotFound)?;
```

Read it.

```text
Database

↓

Option<User>

↓

If None

↓

Create UserNotFound Error

↓

Return Error
```

---

# Why Does Rust Prefer This?

Rust loves avoiding unnecessary work.

Creating

```text
Strings

Vectors

Errors

HashMaps

Files
```

can be expensive.

Closures delay that work until it's actually needed.

This is called **lazy evaluation**.

---

# Mental Model

```text
Option

Some(Value)

↓

Ok(Value)



None

↓

Run Closure

↓

Create Error

↓

Err(Error)
```

---

# Rule to Remember

- `ok_or()` always creates the error.
- `ok_or_else()` creates the error only if needed.
- `ok_or_else()` takes a closure.
- Prefer `ok_or_else()` when creating the error is expensive.
- For simple, cheap errors (like enum variants), either is usually fine.

---

# Problems

## Problem 1

Convert

```rust
Some(50)
```

using `ok_or_else()`.

---

## Problem 2

Convert

```rust
None
```

into

```text
Err("Not Found")
```

using `ok_or_else()`.

---

## Problem 3

What is the output?

```rust
let value = Some(10);

let result =
    value.ok_or_else(|| "Missing");
```

---

## Problem 4

What is the output?

```rust
let value: Option<i32> = None;

let result =
    value.ok_or_else(|| "Missing");
```

---

## Problem 5

Which creates the error immediately?

```rust
.ok_or(ApiError::UserNotFound)
```

or

```rust
.ok_or_else(|| ApiError::UserNotFound)
```

---

## Problem 6

Which one performs lazy evaluation?

---

## Problem 7

When would you prefer `ok_or_else()` over `ok_or()`?

---

# Solutions

## Solution 1

```rust
let value = Some(50);

let result =
    value.ok_or_else(|| "Missing");
```

Output

```text
Ok(50)
```

The closure is never called because the value exists.

---

## Solution 2

```rust
let value: Option<i32> = None;

let result =
    value.ok_or_else(|| "Not Found");
```

Output

```text
Err("Not Found")
```

The closure runs because the value is `None`.

---

## Solution 3

Output

```text
Ok(10)
```

No error is created because `Some(10)` already contains a value.

---

## Solution 4

Output

```text
Err("Missing")
```

The closure executes and produces the error.

---

## Solution 5

```rust
.ok_or(ApiError::UserNotFound)
```

creates the error immediately.

```rust
.ok_or_else(|| ApiError::UserNotFound)
```

creates it only if needed.

---

## Solution 6

```rust
ok_or_else()
```

It delays creating the error until `None` is encountered.

---

## Solution 7

Use `ok_or_else()` when creating the error is expensive or involves extra work, such as:

- Building a long error message.
- Allocating a `String`.
- Computing additional diagnostic information.
- Creating a complex error struct.

For simple enum variants like `ApiError::UserNotFound`, the performance difference is usually negligible, so either form is acceptable.

---

# The Big Picture

Let's compare everything you've learned so far:

| Method         | Works On           | Transforms    | Lazy?   |
| -------------- | ------------------ | ------------- | ------- |
| `map()`        | `Option`, `Result` | `Some` / `Ok` | No      |
| `map_err()`    | `Result`           | `Err`         | No      |
| `ok_or()`      | `Option`           | `None → Err`  | No      |
| `ok_or_else()` | `Option`           | `None → Err`  | **Yes** |

Notice the pattern:

- **`map()`** changes successful values.
- **`map_err()`** changes errors.
- **`ok_or()`** converts `Option` into `Result`.
- **`ok_or_else()`** does the same thing but delays creating the error until it's actually needed.

These four methods are some of the most frequently used combinators in idiomatic Rust.

---

## Next Concept

The next topic is **`unwrap()`**.

This is probably the most abused method by beginners. It's extremely useful during learning and quick prototypes, but understanding **when not to use it** is just as important as understanding how it works.
