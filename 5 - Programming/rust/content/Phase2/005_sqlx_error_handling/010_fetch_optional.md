The next concept from your roadmap is one you'll see **constantly** in SQLx.

# `fetch_optional()`

---

# First Principle

Imagine you're searching your database for a user.

There are two possibilities.

```text
User Exists
```

or

```text
User Doesn't Exist
```

Neither situation is an error.

If a user hasn't signed up yet,

that's completely normal.

Because of that,

SQLx returns an **`Option<T>`**.

---

# Think about a library

You ask the librarian,

> "Do you have the book Rust Programming?"

Possible answers

```text
Yes

↓

Here it is.
```

or

```text
No

↓

We don't have it.
```

Notice

Nobody made a mistake.

The book simply isn't there.

That's why SQLx returns

```rust
Option<User>
```

instead of

```rust
Result<User, Error>
```

---

# What does `fetch_optional()` return?

```rust
Result<Option<T>, sqlx::Error>
```

Read it carefully.

It is **not**

```rust
Option<T>
```

It is

```text
Result

↓

Option
```

---

# Visualization

```text
Database Query

↓

Result

├── Err(Database Error)

│

└── Ok

      │

      Option

      ├── Some(User)

      └── None
```

Notice

There are **three possibilities**.

---

## Case 1

Database works.

User exists.

```text
Database

↓

Ok

↓

Some(User)
```

Rust

```rust
Ok(Some(user))
```

---

## Case 2

Database works.

User doesn't exist.

```text
Database

↓

Ok

↓

None
```

Rust

```rust
Ok(None)
```

---

## Case 3

Database failed.

```text
Database

↓

Connection Lost
```

Rust

```rust
Err(sqlx::Error)
```

---

# Why not just Result<User>?

Because

```text
User Missing
```

is **not** a database error.

The database successfully answered your question.

It simply answered

> "No matching row."

---

# Example

```rust
let user = sqlx::query_as!(
    User,
    "SELECT * FROM users WHERE email = $1",
    email
)
.fetch_optional(&pool)
.await?;
```

After

```rust
.await?
```

the type becomes

```rust
Option<User>
```

Why?

Because

```text
?

↓

unwraps Result
```

Leaving

```text
Option<User>
```

---

# Now What?

Suppose your API requires a user.

You write

```rust
let user = sqlx::query_as!(
    User,
    "SELECT * FROM users WHERE email = $1",
    email
)
.fetch_optional(&pool)
.await?
.ok_or(ApiError::UserNotFound)?;
```

Let's understand every step.

---

## Step 1

```rust
.fetch_optional()
```

Returns

```rust
Result<Option<User>, sqlx::Error>
```

---

## Step 2

```rust
.await?
```

If database fails

↓

Return error.

Otherwise

↓

You now have

```rust
Option<User>
```

---

## Step 3

```rust
.ok_or(ApiError::UserNotFound)
```

Convert

```text
Some(User)

↓

Ok(User)
```

or

```text
None

↓

Err(UserNotFound)
```

---

## Step 4

```rust
?
```

If

```text
Err(UserNotFound)
```

Return immediately.

Otherwise

Continue with

```rust
User
```

---

# Entire Flow

```text
SQL Query

↓

Result<Option<User>, SqlxError>

↓

?

↓

Option<User>

↓

ok_or(UserNotFound)

↓

Result<User, ApiError>

↓

?

↓

User
```

This single line performs **four different operations**.

---

# Real Koel Example

Checking whether an email already exists.

```rust
let existing = sqlx::query_as!(
    User,
    "SELECT * FROM users WHERE email = $1",
    payload.email
)
.fetch_optional(&pool)
.await?;
```

Possible outcomes

```text
Ok(Some(User))
```

↓

Email already registered.

---

```text
Ok(None)
```

↓

Email available.

---

```text
Err(Database Error)
```

↓

Return HTTP 500.

---

# Compare SQLx Methods

## `fetch_one()`

Exactly one row must exist.

Returns

```rust
Result<User, sqlx::Error>
```

If no row exists,

it returns an error.

---

## `fetch_optional()`

Zero or one row may exist.

Returns

```rust
Result<Option<User>, sqlx::Error>
```

Missing rows are normal.

---

# Mental Model

```text
fetch_optional()

↓

Result<Option<T>, Error>

            │

       ┌────┴─────┐

       │          │

Database     Database

Success      Failed

       │

       Option

   ┌────┴────┐

Some(T)   None
```

---

# Rule to Remember

- `fetch_optional()` is used when **zero or one row** is expected.
- It returns `Result<Option<T>, sqlx::Error>`.
- `Err` means the query failed.
- `None` means the query succeeded but found no matching row.
- `Some(T)` means the row was found.
- It's commonly followed by `.await?` and `.ok_or(...)?`.

---

# Problems

## Problem 1

What is the return type of `fetch_optional()`?

---

## Problem 2

A user does not exist in the database.

Will `fetch_optional()` return:

- `Err`
- `None`
- `Some(User)`

---

## Problem 3

The database server is offline.

Will `fetch_optional()` return:

- `Err`
- `None`
- `Some(User)`

---

## Problem 4

After this line:

```rust
let user = query.fetch_optional(&pool).await?;
```

what is the type of `user`?

---

## Problem 5

Complete the chain:

```rust
query
    .fetch_optional(&pool)
    .await?
    .________(ApiError::UserNotFound)?;
```

---

## Problem 6

When should you choose `fetch_optional()` instead of `fetch_one()`?

---

## Problem 7

Fill in the flow:

```text
fetch_optional()

↓

________________

↓

await?

↓

________________

↓

ok_or()

↓

________________
```

---

# Solutions

## Solution 1

```rust
Result<Option<T>, sqlx::Error>
```

---

## Solution 2

```text
Ok(None)
```

The query succeeded, but no matching row was found.

---

## Solution 3

```text
Err(sqlx::Error)
```

The query itself failed because the database was unavailable.

---

## Solution 4

```rust
Option<User>
```

The `?` operator unwraps the `Result`, leaving the inner `Option<User>`.

---

## Solution 5

```rust
.ok_or(ApiError::UserNotFound)?;
```

This converts `Option<User>` into `Result<User, ApiError>`.

---

## Solution 6

Use `fetch_optional()` when **it's perfectly valid for no row to exist**, such as:

- Looking up a user by email during login.
- Checking if a username is already taken.
- Finding an optional profile.

Use `fetch_one()` when your application logic requires exactly one row to exist.

---

## Solution 7

```text
fetch_optional()

↓

Result<Option<T>, sqlx::Error>

↓

await?

↓

Option<T>

↓

ok_or()

↓

Result<T, ApiError>
```

---

## The Big Picture

This lesson ties together almost everything you've learned in error handling:

```text
fetch_optional()

↓

Result<Option<User>, SqlxError>

↓

?

↓

Option<User>

↓

ok_or(ApiError::UserNotFound)

↓

Result<User, ApiError>

↓

?

↓

User
```

When you see this in Koel:

```rust
let user = query
    .fetch_optional(&pool)
    .await?
    .ok_or(ApiError::UserNotFound)?;
```

you can now mentally execute each transformation step by step.

---

### Next Concept

The next SQLx method is **`fetch_one()`**. It's the counterpart to `fetch_optional()`: instead of saying **"zero or one row may exist,"** it says **"exactly one row must exist."** Understanding the difference between these two methods is essential for writing correct database code.
