You've learned:

- `map()` transforms **success (`Ok`)**.
- Now you'll learn how to transform **errors (`Err`)**.

---

# `map_err()`

## First Principle

Imagine you're talking to a customer.

The database returns this error.

```text
Database Error:
Connection Timeout
```

But your API shouldn't expose database internals.

Instead, you want to return

```text
Internal Server Error
```

You didn't change the successful result.

You only changed the **error**.

That's exactly what `map_err()` does.

---

# What does `map_err()` do?

It means

> **If there is an error, transform it into another error.**

If there isn't,

Leave the success value alone.

---

## Visualization

```text
Err(Database Error)

↓

Transform

↓

Err(Api Error)
```

or

```text
Ok(User)

↓

Nothing Happens

↓

Ok(User)
```

---

# Example

Suppose

```rust
let result: Result<i32, String> =
    Err(String::from("Database Failed"));
```

Now we want a friendlier error.

```rust
let result = result.map_err(|e| {
    format!("Internal Error: {}", e)
});
```

Output

```text
Err("Internal Error: Database Failed")
```

---

# If it's Ok?

```rust
let result: Result<i32, String> =
    Ok(100);

let result =
    result.map_err(|e| {
        format!("Internal Error: {}", e)
    });
```

Output

```text
Ok(100)
```

Notice

Nothing changed.

---

# Think of a Translator

Imagine your database speaks Japanese.

```text
接続失敗
```

But your frontend speaks English.

```text
Connection Failed
```

`map_err()` is the translator.

It only translates errors.

---

# Compare with map()

## map()

Changes

```text
Ok(Value)
```

Leaves

```text
Err(Error)
```

alone.

---

## map_err()

Changes

```text
Err(Error)
```

Leaves

```text
Ok(Value)
```

alone.

---

# Visualization

```text
Result

        │

   ┌────┴────┐

   │         │

 Ok(User)  Err(Database Error)

     │             │

   map()      map_err()

     │             │

 Ok(Name)   Err(Api Error)
```

---

# Real Example

Suppose

```rust
fn login() -> Result<User, DatabaseError>
```

But your API expects

```rust
Result<User, ApiError>
```

Instead of writing

```rust
match login() {

    Ok(user) => Ok(user),

    Err(error) => Err(ApiError::Internal),
}
```

Rust lets you write

```rust
login()
    .map_err(|_| ApiError::Internal)
```

Much cleaner.

---

# Another Example

Suppose

```rust
let result =
    Err(String::from("Timeout"));
```

Convert it.

```rust
let result =
    result.map_err(|e| {
        format!("Network Error: {}", e)
    });
```

Output

```text
Err("Network Error: Timeout")
```

---

# Real SQLx Example

You'll often see something like

```rust
sqlx::query(...)
    .execute(&pool)
    .await
    .map_err(|_| {
        ApiError::Database
    })?;
```

Flow

```text
Database Query

↓

Result

↓

Ok

↓

Continue

──────────────

Err

↓

Convert

↓

ApiError::Database

↓

?
```

---

# Why is this Useful?

Imagine every library had its own error type.

```text
SQLx Error

JWT Error

IO Error

Redis Error

Email Error
```

Your API doesn't want five different error types.

It wants

```text
ApiError
```

`map_err()` converts everything into one common type.

---

# Another Example

Without `map_err()`

```rust
match result {

    Ok(value) => Ok(value),

    Err(error) => Err(ApiError::Internal),
}
```

With

```rust
result.map_err(|_| ApiError::Internal)
```

Much shorter.

---

# Mental Model

```text
Result

        │

   ┌────┴────┐

   │         │

Ok(Value)  Err(Error)

               │

          map_err()

               │

       Err(New Error)
```

---

# Rule to Remember

- `map()` transforms **`Ok`**.
- `map_err()` transforms **`Err`**.
- `Ok` values pass through `map_err()` unchanged.
- `Err` values pass through `map()` unchanged.
- `map_err()` is commonly used to convert one error type into another.

---

# Problems

## Problem 1

Convert

```rust
Err(String::from("Timeout"))
```

into

```text
Network Error: Timeout
```

using `map_err()`.

---

## Problem 2

What is the output?

```rust
let value: Result<i32, String> =
    Ok(20);

let answer =
    value.map_err(|e| {
        format!("Error: {}", e)
    });
```

---

## Problem 3

What is the output?

```rust
let value: Result<i32, String> =
    Err(String::from("Failed"));

let answer =
    value.map_err(|e| {
        format!("Error: {}", e)
    });
```

---

## Problem 4

Rewrite using `map_err()`.

```rust
match value {

    Ok(v) => Ok(v),

    Err(_) => Err(ApiError::Internal),
}
```

---

## Problem 5

Which one should you use?

Transforming

```text
Ok(User)

↓

Ok(UserDTO)
```

`map()` or `map_err()`?

Why?

---

## Problem 6

Which one should you use?

Transforming

```text
Err(SqlxError)

↓

Err(ApiError)
```

`map()` or `map_err()`?

Why?

---

## Problem 7

Fill in the blanks.

```text
map()

Transforms __________

Leaves __________ unchanged



map_err()

Transforms __________

Leaves __________ unchanged
```

---

# Solutions

## Solution 1

```rust
let result: Result<i32, String> =
    Err(String::from("Timeout"));

let result = result.map_err(|e| {
    format!("Network Error: {}", e)
});
```

Output

```text
Err("Network Error: Timeout")
```

---

## Solution 2

Output

```text
Ok(20)
```

Because `map_err()` only transforms errors.

---

## Solution 3

Output

```text
Err("Error: Failed")
```

The error message is transformed.

---

## Solution 4

```rust
value.map_err(|_| ApiError::Internal)
```

This is equivalent to the original `match`.

---

## Solution 5

Use **`map()`**.

Reason:

You're transforming the successful value from `User` to `UserDTO`.

---

## Solution 6

Use **`map_err()`**.

Reason:

You're transforming the error from `SqlxError` to `ApiError`.

---

## Solution 7

```text
map()

Transforms Ok

Leaves Err unchanged



map_err()

Transforms Err

Leaves Ok unchanged
```

---

# The Big Picture

You now have two complementary tools:

```text
Result

├── Ok(Value)
│      │
│    map()
│
└── Err(Error)
       │
    map_err()
```

Think of them like two conveyor belts:

- **`map()`** works only on the **success belt**.
- **`map_err()`** works only on the **error belt**.

Everything else passes through untouched.

For example:

```rust
let user = find_user()
    .map(|user| user.email)
    .map_err(|_| ApiError::Database)?;
```

Read it as:

1. Find the user.
2. If successful, extract the email.
3. If there's a database error, convert it to `ApiError::Database`.
4. Use `?` to return the error immediately if one occurred.

This chaining style is very common in production Rust code.

### Next Concept

The next concept is **`ok_or()`**, where you'll learn how to convert an `Option<T>` into a `Result<T, E>`. This is one of the most frequently used patterns in Axum, SQLx, and authentication code because many APIs return `Option`, but your function often needs to return a `Result`.
