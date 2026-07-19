`expect()` is almost identical to `unwrap()`, but it's much more helpful when something goes wrong.

---

# `expect()`

## First Principle

Suppose your program starts and needs to load a configuration file.

If the file doesn't exist,

the program cannot continue.

Instead of Rust printing

```text
called Result::unwrap() on an Err value
```

you'd rather see

```text
Failed to load configuration file.
Please make sure config.toml exists.
```

That's exactly what `expect()` is for.

---

# What does `expect()` do?

It says

> **"I expect this value to exist."**

If it exists,

return it.

If it doesn't,

panic **with my custom message**.

---

# Visualization

```text
Some(Value)

↓

expect("Message")

↓

Value
```

or

```text
None

↓

expect("Message")

↓

💥 Panic

↓

Your Message
```

---

# Option Example

```rust
let age = Some(25);

let value = age.expect("Age should exist");

println!("{}", value);
```

Output

```text
25
```

---

Now

```rust
let age: Option<i32> = None;

let value =
    age.expect("Age should exist");
```

Output

```text
thread 'main' panicked:

Age should exist
```

Notice

Your message appears.

---

# Result Example

```rust
let score: Result<i32, String> =
    Ok(90);

println!(
    "{}",
    score.expect("Score missing")
);
```

Output

```text
90
```

---

Now

```rust
let score: Result<i32, String> =
    Err(String::from("Database Error"));

score.expect("Unable to load score");
```

Output

```text
thread 'main' panicked:

Unable to load score:

Database Error
```

Much more useful.

---

# Compare unwrap() vs expect()

## unwrap()

```rust
value.unwrap();
```

Error message

```text
called Result::unwrap() on an Err value
```

Very generic.

---

## expect()

```rust
value.expect("User should exist");
```

Error message

```text
User should exist
```

Much easier to debug.

---

# Think of a Security Guard

Imagine opening a vault.

With `unwrap()`

```text
Open Vault

↓

Empty

↓

Panic
```

No explanation.

---

With `expect()`

```text
Open Vault

↓

Empty

↓

Panic

↓

"Vault should contain today's cash."
```

Now you immediately know what went wrong.

---

# Real Example

Suppose your application reads an environment variable.

```rust
let secret =
    std::env::var("JWT_SECRET")
        .expect("JWT_SECRET environment variable must be set");
```

If it's missing,

the application stops with

```text
JWT_SECRET environment variable must be set
```

This is much better than

```text
called Result::unwrap()...
```

---

# When is expect() Good?

Application startup.

Loading configuration.

Loading environment variables.

Reading files that must exist.

Unit tests.

Anything where failure means

> Stop immediately.

---

# When Should You Avoid expect()?

Same situations as `unwrap()`.

Never use it for

- User input
- Login requests
- Database lookups
- HTTP handlers
- Network requests
- Authentication
- External APIs

Because these failures are expected and should be handled properly.

---

# Compare

Bad

```rust
let user =
    find_user(email)
        .expect("User missing");
```

If the user types the wrong email,

the server crashes.

---

Good

```rust
let user =
    find_user(email)
        .ok_or(ApiError::UserNotFound)?;
```

The server returns

```text
HTTP 404
```

instead of crashing.

---

# Mental Model

```text
Some(Value)

↓

expect("Message")

↓

Value



None

↓

expect("Message")

↓

💥 Panic

↓

Custom Message
```

---

# Rule to Remember

- `expect()` is like `unwrap()`.
- If the value exists, return it.
- If it doesn't, panic.
- Unlike `unwrap()`, you provide your own panic message.
- Use it when failure is truly unrecoverable and a custom explanation helps debugging.

---

# Problems

## Problem 1

What is the output?

```rust
let age = Some(30);

println!(
    "{}",
    age.expect("Age should exist")
);
```

---

## Problem 2

What happens?

```rust
let age: Option<i32> = None;

age.expect("Age should exist");
```

---

## Problem 3

What is the output?

```rust
let score: Result<i32, String> =
    Ok(95);

println!(
    "{}",
    score.expect("Score missing")
);
```

---

## Problem 4

What happens?

```rust
let score: Result<i32, String> =
    Err(String::from("Database Error"));

score.expect("Unable to load score");
```

---

## Problem 5

Which gives a more useful panic message?

```rust
unwrap()
```

or

```rust
expect("Configuration file missing")
```

Why?

---

## Problem 6

Should you use `expect()` inside an Axum login handler?

Why or why not?

---

## Problem 7

Rewrite this using `expect()`.

```rust
let secret =
    std::env::var("JWT_SECRET").unwrap();
```

---

# Solutions

## Solution 1

Output

```text
30
```

`Some(30)` contains a value, so `expect()` returns it.

---

## Solution 2

The program panics with your custom message.

Example:

```text
thread 'main' panicked:

Age should exist
```

---

## Solution 3

Output

```text
95
```

Because the `Result` is `Ok(95)`.

---

## Solution 4

The program panics.

Example:

```text
thread 'main' panicked:

Unable to load score:

Database Error
```

The custom message appears along with the original error.

---

## Solution 5

```rust
expect("Configuration file missing")
```

It produces a much more descriptive panic message, making debugging easier than the generic message from `unwrap()`.

---

## Solution 6

No.

A login handler deals with user input and expected failures, such as an incorrect email or password. Panicking would crash the request (or potentially the server), whereas returning a proper `Result` lets the API respond with an appropriate HTTP status.

---

## Solution 7

```rust
let secret = std::env::var("JWT_SECRET")
    .expect("JWT_SECRET environment variable must be set");
```

If the environment variable is missing, the application will stop immediately with a clear explanation.

---

# The Big Picture

Here's how the error-handling tools you've learned fit together:

```text
Option<T>

↓

Some / None
```

↓

```text
ok_or()

↓

Result<T, E>
```

↓

```text
map()

Transforms Ok
```

↓

```text
map_err()

Transforms Err
```

↓

```text
?

Return errors gracefully
```

or

```text
unwrap()

↓

💥 Panic
```

or

```text
expect()

↓

💥 Panic

(with your own message)
```

## `unwrap()` vs `expect()` at a glance

| Method          | On Success        | On Failure | Custom Message? |
| --------------- | ----------------- | ---------- | --------------- |
| `unwrap()`      | Returns the value | Panics     | ❌ No           |
| `expect("...")` | Returns the value | Panics     | ✅ Yes          |

For real-world applications:

- Prefer **`?`** for recoverable errors.
- Use **`ok_or()` / `ok_or_else()`** to convert `Option` into `Result`.
- Reserve **`unwrap()`** and **`expect()`** for situations where failure is genuinely unrecoverable, such as application startup, tests, or missing required configuration.
