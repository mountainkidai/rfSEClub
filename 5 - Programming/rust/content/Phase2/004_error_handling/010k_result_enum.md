Once you understand `Result<T, E>`, you'll understand about 80% of real Rust code.

---

# `Result<T, E>`

## First Principle

`Option<T>` answers one question:

> **"Does a value exist?"**

It has only two possibilities.

```text
Some(Value)

None
```

---

But sometimes "no value" isn't enough.

Suppose login fails.

You don't just want to know it failed.

You want to know **why**.

- Wrong password?
- User not found?
- Database offline?
- Network timeout?

That's what `Result` is for.

---

## Definition

The real Rust source code is almost exactly this.

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

Look carefully.

**Result is also just an enum.**

---

## Breaking it down

```rust
Ok(T)
```

means

> Success.

---

```rust
Err(E)
```

means

> Something went wrong.

---

## Visualization

```text
Result

├── Ok(Value)

└── Err(Error)
```

---

## Think about ordering food

You order pizza.

Two possibilities.

```text
Restaurant

↓

Pizza Delivered
```

or

```text
Restaurant

↓

Out of Stock
```

The second one isn't simply "no pizza."

It tells you **why**.

Exactly like

```rust
Result<Pizza, Error>
```

---

# Creating a Result

Success

```rust
let score: Result<i32, String> = Ok(95);
```

Failure

```rust
let score: Result<i32, String> =
    Err(String::from("Exam not found"));
```

---

## Reading a Result

Since it's an enum,

we use `match`.

```rust
let score = Ok(95);

match score {
    Ok(value) => println!("{}", value),

    Err(error) => println!("{}", error),
}
```

Output

```text
95
```

---

Another example

```rust
let score =
    Err(String::from("Exam not found"));

match score {
    Ok(value) => println!("{}", value),

    Err(error) => println!("{}", error),
}
```

Output

```text
Exam not found
```

---

# Compare Option vs Result

## Option

```text
Some(User)

None
```

Question answered

> Does a user exist?

---

## Result

```text
Ok(User)

Err(Database Error)
```

Question answered

> Did the operation succeed?

If not,

> Why?

---

# Real Example

Searching for a user.

Using Option

```rust
Option<User>
```

Possible

```text
Some(User)

None
```

---

Connecting to the database.

Possible outcomes

```text
Connected

↓

Success
```

or

```text
Connection Refused

↓

Failure
```

Rust

```rust
Result<Connection, DatabaseError>
```

---

# Real Koel Example

Login

Possible outcomes

```text
Success

↓

Access Token
```

or

```text
Wrong Password
```

or

```text
Database Offline
```

or

```text
User Doesn't Exist
```

Instead of

```rust
Option<User>
```

Rust uses

```rust
Result<User, LoginError>
```

because you need the reason for failure.

---

# Why not use Option?

Suppose

```rust
None
```

What happened?

```text
Wrong Password?

Database Offline?

Network Failed?

User Missing?

JWT Invalid?
```

You don't know.

Result tells you exactly.

---

# Another Example

Reading a file.

Possible

```text
File Exists
```

↓

Read contents

or

```text
File Missing
```

↓

Return

```rust
Err("File not found")
```

---

# Mental Model

```text
Result<T, E>

             │

      ┌──────┴──────┐

      │             │

   Ok(Value)    Err(Error)

  Success        Failure
```

---

# Option vs Result

```text
Option

Some(Value)

None



Result

Ok(Value)

Err(Error)
```

One answers

> Is there a value?

The other answers

> Did the operation succeed?

---

# Rule to Remember

- `Result<T, E>` is an **enum**.
- `Ok(T)` means success.
- `Err(E)` means failure.
- Use `Option` when a value may or may not exist.
- Use `Result` when an operation can succeed or fail.

---

# Problems

## Problem 1

Create a `Result<i32, String>` representing a successful exam score of `90`.

---

## Problem 2

Create a `Result<i32, String>` representing the error:

```text
Student not found
```

---

## Problem 3

Print the value using `match`.

```rust
let result = Ok(100);
```

---

## Problem 4

Print the error using `match`.

```rust
let result =
    Err(String::from("Network Error"));
```

---

## Problem 5

Which should you use?

Finding a hotel.

```text
Hotel exists

Hotel doesn't exist
```

Option or Result?

Explain.

---

## Problem 6

Which should you use?

Connecting to PostgreSQL.

Option or Result?

Why?

---

## Problem 7

Fill in the blanks.

```text
Option

Some(____)

None



Result

Ok(____)

Err(____)
```

---

## Problem 8

Your login API can return:

- User logged in
- Wrong password
- Database offline

Should it return `Option<User>` or `Result<User, LoginError>`?

Explain why.

---

# Solutions

## Solution 1

```rust
let score: Result<i32, String> = Ok(90);
```

---

## Solution 2

```rust
let score: Result<i32, String> =
    Err(String::from("Student not found"));
```

---

## Solution 3

```rust
let result = Ok(100);

match result {
    Ok(value) => println!("{}", value),

    Err(error) => println!("{}", error),
}
```

Output

```text
100
```

---

## Solution 4

```rust
let result =
    Err(String::from("Network Error"));

match result {
    Ok(value) => println!("{}", value),

    Err(error) => println!("{}", error),
}
```

Output

```text
Network Error
```

---

## Solution 5

Use **`Option<Hotel>`**.

Reason:

You're only asking whether a hotel exists.

Possible outcomes:

- `Some(Hotel)`
- `None`

No detailed error is needed.

---

## Solution 6

Use **`Result<Connection, DatabaseError>`**.

Reason:

A database connection can fail for many reasons:

- Wrong credentials
- Server offline
- Network timeout
- SSL error

You need the specific reason for the failure.

---

## Solution 7

```text
Option

Some(Value)

None



Result

Ok(Value)

Err(Error)
```

---

## Solution 8

Use **`Result<User, LoginError>`**.

Reason:

Login is an **operation** that can fail for multiple reasons. Returning `Result` allows the caller to distinguish between:

- `Ok(User)` → login succeeded.
- `Err(LoginError::WrongPassword)`
- `Err(LoginError::UserNotFound)`
- `Err(LoginError::DatabaseOffline)`

This makes error handling precise and informative.

---

## The Big Picture

At this point, you've learned two of Rust's most important enums:

```text
Option<T>

├── Some(T)
└── None
```

```text
Result<T, E>

├── Ok(T)
└── Err(E)
```

Notice the pattern:

- **Enums** represent different states.
- **`match`**, **`if let`**, and **`while let`** let you work with those states.
- The compiler ensures you consider every possibility.

This consistency is one of Rust's biggest strengths.

### Next Concept

The next concept is the **`?` operator**.

It's one of Rust's most beloved features because it turns verbose error handling like this:

```rust
match read_file() {
    Ok(data) => data,
    Err(e) => return Err(e),
}
```

into a single, elegant line:

```rust
let data = read_file()?;
```

Once you understand `?`, a huge amount of Rust code suddenly becomes much easier to read.
