If you've ever heard someone say:

> **"Never use `unwrap()` in production."**

this lesson explains why.

---

# `unwrap()`

## First Principle

You've learned that `Option` and `Result` force you to handle all possible outcomes.

Sometimes, however, **you are absolutely certain a value exists.**

In those situations, you can tell Rust:

> **"Trust me. This value is there."**

That's exactly what `unwrap()` does.

---

# What does `unwrap()` do?

It says

> **Give me the value.**

If there is no value,

**crash the program immediately.**

---

## Visualization

```text
Some(10)

↓

unwrap()

↓

10
```

---

or

```text
None

↓

unwrap()

↓

💥 Program Panics
```

---

# Option Example

```rust
let age = Some(25);

let value = age.unwrap();

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

let value = age.unwrap();
```

Output

```text
thread 'main' panicked at...
called Option::unwrap() on a None value
```

Program stops immediately.

---

# Result Example

```rust
let score: Result<i32, String> = Ok(90);

let value = score.unwrap();

println!("{}", value);
```

Output

```text
90
```

---

Now

```rust
let score: Result<i32, String> =
    Err(String::from("Exam Missing"));

let value = score.unwrap();
```

Output

```text
thread 'main' panicked...
called Result::unwrap() on an Err value
```

Again,

the program crashes.

---

# Think of Opening a Safe

Imagine you say

> "I know the safe contains money."

You open it.

If you're right

```text
Money

↓

Take Money
```

Everything is fine.

---

If you're wrong

```text
Empty Safe

↓

Panic
```

That's exactly what `unwrap()` does.

---

# Why Does Rust Allow This?

Sometimes you genuinely know a value must exist.

Example

```rust
let numbers = vec![10];

println!("{}", numbers.first().unwrap());
```

You created the vector.

You know it contains one element.

Using `unwrap()` is reasonable.

---

# When is `unwrap()` Dangerous?

Imagine login.

```rust
let user = find_user().unwrap();
```

What if the user doesn't exist?

```text
None

↓

unwrap()

↓

💥 Server Crashes
```

A production server should never crash because one user wasn't found.

---

# Real Koel Example

Bad

```rust
let user =
    find_user(email).unwrap();
```

If the email doesn't exist,

your authentication server crashes.

Instead

```rust
let user =
    find_user(email)
        .ok_or(ApiError::UserNotFound)?;
```

Now

```text
User Missing

↓

Return HTTP 404

↓

Server Continues Running
```

Much better.

---

# Why Beginners Overuse unwrap()

Because it's easy.

Instead of

```rust
match value {

    Some(v) => ...

    None => ...
}
```

they write

```rust
value.unwrap()
```

The code compiles.

Until one day

```text
None

↓

Panic

↓

Production Crash
```

---

# When is unwrap() Acceptable?

### During learning

```rust
let age = Some(20);

println!("{}", age.unwrap());
```

Perfectly fine.

---

### In tests

```rust
assert_eq!(result.unwrap(), 42);
```

Very common.

---

### When failure is impossible

```rust
let numbers = vec![1];

let first =
    numbers.first().unwrap();
```

You literally just created the vector.

---

# When Should You Avoid unwrap()?

Never use it when

- Reading user input.
- Reading files.
- Database queries.
- Network requests.
- HTTP requests.
- Authentication.
- API handlers.
- External data.

Because all of these can fail.

---

# Compare

Bad

```rust
let user =
    find_user().unwrap();
```

Good

```rust
let user =
    find_user()
        .ok_or(ApiError::UserNotFound)?;
```

---

# Mental Model

```text
Option

Some(10)

↓

unwrap()

↓

10



None

↓

unwrap()

↓

💥 Panic
```

Result

```text
Ok(User)

↓

unwrap()

↓

User



Err(Database)

↓

unwrap()

↓

💥 Panic
```

---

# Rule to Remember

- `unwrap()` extracts the value.
- If the value exists, everything works.
- If the value doesn't exist, the program panics.
- Great for learning and tests.
- Usually avoid it in production code.

---

# Problems

## Problem 1

What is the output?

```rust
let age = Some(25);

println!("{}", age.unwrap());
```

---

## Problem 2

What happens?

```rust
let age: Option<i32> = None;

println!("{}", age.unwrap());
```

---

## Problem 3

What is the output?

```rust
let score: Result<i32, String> =
    Ok(100);

println!("{}", score.unwrap());
```

---

## Problem 4

What happens?

```rust
let score: Result<i32, String> =
    Err(String::from("Failed"));

println!("{}", score.unwrap());
```

---

## Problem 5

Is this good production code?

```rust
let user =
    find_user(email).unwrap();
```

Why or why not?

---

## Problem 6

When is using `unwrap()` generally acceptable?

---

## Problem 7

Rewrite this safely.

```rust
let user =
    find_user(email).unwrap();
```

Assume the function should return

```rust
Result<User, ApiError>
```

---

# Solutions

## Solution 1

Output

```text
25
```

`Some(25)` contains a value, so `unwrap()` returns it.

---

## Solution 2

The program panics.

Example error:

```text
called Option::unwrap() on a None value
```

Execution stops immediately.

---

## Solution 3

Output

```text
100
```

Because the `Result` is `Ok(100)`.

---

## Solution 4

The program panics.

Example error:

```text
called Result::unwrap() on an Err value
```

Execution stops immediately.

---

## Solution 5

No.

`find_user(email)` can legitimately fail if the user doesn't exist.

Using `unwrap()` would crash the server instead of returning a proper HTTP response.

---

## Solution 6

`unwrap()` is generally acceptable when:

- You're learning Rust.
- You're writing tests.
- You're prototyping.
- You can logically prove the value must exist.

---

## Solution 7

```rust
let user = find_user(email)
    .ok_or(ApiError::UserNotFound)?;
```

This safely converts the missing user into an application error instead of crashing the program.

---

# The Big Picture

You've now learned another important tool in Rust's error-handling toolbox.

```text
Option

↓

Some / None
```

↓

```text
ok_or()

↓

Result
```

↓

```text
?
```

↓

```text
Return Error
```

or

```text
unwrap()

↓

Return Value

or

💥 Panic
```

The key difference is:

- **`?`** propagates errors gracefully.
- **`unwrap()`** assumes success and crashes if that assumption is wrong.

Experienced Rust developers treat `unwrap()` as a tool to use only when they can confidently guarantee success.

---

## Next Concept

The next concept is **`expect()`**.

It behaves just like `unwrap()`, but instead of Rust printing a generic panic message, **you provide your own explanation**. This makes debugging much easier because the panic tells you exactly what you expected to be true.
