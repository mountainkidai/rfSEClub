If you truly understand **`ok_or()`**, you'll suddenly understand a lot of production Rust code.

---

# `ok_or()`

## First Principle

You've already learned:

```text
Option<T>

↓

Some(Value)

None
```

Sometimes, however, **"no value" isn't enough**.

Imagine you're searching for a user.

Possible outcomes:

```text
Some(User)
```

or

```text
None
```

But your API returns

```rust
Result<User, ApiError>
```

Not

```rust
Option<User>
```

So how do we convert

```text
Some(User)

↓

Ok(User)
```

and

```text
None

↓

Err(ApiError)
```

That's exactly what `ok_or()` does.

---

# Visualization

```text
Option

        │

   ┌────┴────┐

   │         │

Some(User)   None

   │          │

ok_or()   ok_or()

   │          │

Ok(User)  Err(Error)
```

---

# Example

Suppose

```rust
let user = Some("Steve");
```

Convert it.

```rust
let result =
    user.ok_or("User not found");
```

Output

```text
Ok("Steve")
```

---

Now

```rust
let user: Option<&str> = None;

let result =
    user.ok_or("User not found");
```

Output

```text
Err("User not found")
```

---

# Think of a Hotel

Reception searches Room 101.

Possible

```text
Room Exists
```

↓

Give the room.

Or

```text
Room Missing
```

↓

Return

```text
Room Not Found
```

That's

```rust
ok_or(...)
```

---

# Why Do We Need This?

Suppose

```rust
fn find_user() -> Option<User>
```

But your handler returns

```rust
Result<User, ApiError>
```

Without `ok_or()`

You'd write

```rust
match find_user() {

    Some(user) => Ok(user),

    None => Err(ApiError::UserNotFound),
}
```

Works.

But Rust gives us

```rust
find_user()
    .ok_or(ApiError::UserNotFound)
```

Much shorter.

---

# Real Example

Suppose

```rust
let age = Some(25);
```

Convert it.

```rust
let result =
    age.ok_or("Age Missing");
```

Output

```text
Ok(25)
```

---

Now

```rust
let age: Option<i32> = None;

let result =
    age.ok_or("Age Missing");
```

Output

```text
Err("Age Missing")
```

---

# SQLx Example

One SQLx method is

```rust
fetch_optional()
```

It returns

```rust
Option<User>
```

Why?

Because the row might not exist.

Your API might need

```rust
Result<User, ApiError>
```

Simply write

```rust
let user =
    query.fetch_optional(...)
        .await?
        .ok_or(ApiError::UserNotFound)?;
```

Read it like this:

```text
Database

↓

Option<User>

↓

ok_or()

↓

Result<User, ApiError>

↓

?
```

Beautiful.

---

# Compare

Without `ok_or()`

```rust
match user {

    Some(user) => Ok(user),

    None => Err(ApiError::UserNotFound),
}
```

With

```rust
user.ok_or(ApiError::UserNotFound)
```

---

# Think of a Security Guard

Person arrives.

```text
ID Exists

↓

Allow Entry
```

or

```text
No ID

↓

Reject
```

`ok_or()` simply changes

```text
None
```

into

```text
Err(...)
```

---

# Mental Model

```text
Option

Some(Value)

↓

Ok(Value)



None

↓

Err(Error)
```

---

# Rule to Remember

- `ok_or()` converts **Option → Result**.
- `Some(x)` becomes `Ok(x)`.
- `None` becomes `Err(error_you_provide)`.
- It replaces a common `match` pattern.
- Often followed by `?`.

---

# Problems

## Problem 1

Convert

```rust
Some(100)
```

into a `Result` using

```rust
ok_or("Missing")
```

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

using `ok_or()`.

---

## Problem 3

What is the output?

```rust
let value = Some(50);

let result =
    value.ok_or("Missing");
```

---

## Problem 4

What is the output?

```rust
let value: Option<i32> = None;

let result =
    value.ok_or("Missing");
```

---

## Problem 5

Rewrite using `ok_or()`.

```rust
match value {

    Some(v) => Ok(v),

    None => Err("Missing"),
}
```

---

## Problem 6

Suppose

```rust
fn find_user() -> Option<User>
```

Your API returns

```rust
Result<User, ApiError>
```

Which method should you use?

Why?

---

## Problem 7

Complete the table.

```text
Some(5)

↓

________



None

↓

________
```

---

# Solutions

## Solution 1

```rust
let value = Some(100);

let result =
    value.ok_or("Missing");
```

Output

```text
Ok(100)
```

---

## Solution 2

```rust
let value: Option<i32> = None;

let result =
    value.ok_or("Not Found");
```

Output

```text
Err("Not Found")
```

---

## Solution 3

Output

```text
Ok(50)
```

Because `Some(50)` becomes `Ok(50)`.

---

## Solution 4

Output

```text
Err("Missing")
```

Because `None` becomes the error you provided.

---

## Solution 5

```rust
let result =
    value.ok_or("Missing");
```

This is equivalent to the original `match`.

---

## Solution 6

Use:

```rust
find_user()
    .ok_or(ApiError::UserNotFound)
```

Reason:

`find_user()` returns an `Option<User>`, but your API needs a `Result<User, ApiError>`. `ok_or()` performs that conversion cleanly.

---

## Solution 7

```text
Some(5)

↓

Ok(5)



None

↓

Err(Error)
```

(The specific error is whatever you pass to `ok_or()`.)

---

# The Big Picture

Notice how everything now connects:

```text
Option<T>

Some
None
```

↓

```text
ok_or()
```

↓

```text
Result<T, E>

Ok
Err
```

↓

```text
?
```

↓

```text
Return early on error
```

This is an extremely common pattern in production Rust:

```rust
let user = find_user()
    .ok_or(ApiError::UserNotFound)?;
```

Read it in plain English:

1. Try to find the user.
2. If a user exists, continue.
3. If no user exists, create `ApiError::UserNotFound`.
4. `?` immediately returns that error from the function.

You'll see this exact pattern throughout Axum handlers and authentication systems.

---

## Next Concept

The next concept is **`ok_or_else()`**.

At first glance it looks almost identical to `ok_or()`, but it solves a subtle performance problem: it **creates the error only if it's actually needed**. Once you understand `ok_or_else()`, you'll know when to use each version in production Rust.
