# `fetch_one()`

## First Principle

Imagine you're checking your own bank account.

You know your account number is unique.

There should be **exactly one account**.

Possible outcomes:

```text
Account Exists

↓

Return Account
```

or

```text
Something is Wrong

↓

Error
```

Unlike `fetch_optional()`, **"no account found" is not considered normal.**

That's exactly what `fetch_one()` represents.

---

# What does `fetch_one()` return?

```rust
Result<T, sqlx::Error>
```

Notice

There is **no Option**.

Why?

Because SQLx assumes

> **Exactly one row must exist.**

---

# Visualization

```text
Database Query

↓

Result

├── Ok(User)

│

└── Err(sqlx::Error)
```

Only two possibilities.

---

# Compare with `fetch_optional()`

`fetch_optional()`

```text
Database

↓

Result<Option<User>, Error>

↓

Some(User)

or

None

or

Database Error
```

Three possible outcomes.

---

`fetch_one()`

```text
Database

↓

Result<User, Error>

↓

User

or

Error
```

Only two outcomes.

---

# What happens if no row exists?

Suppose

```sql
SELECT * FROM users
WHERE email = 'amy@example.com';
```

But Amy doesn't exist.

With

```rust
.fetch_one()
```

SQLx returns

```text
Err(sqlx::Error::RowNotFound)
```

Notice

Missing rows become **errors**.

---

# Example

```rust
let user = sqlx::query_as!(
    User,
    "SELECT * FROM users WHERE id = $1",
    id
)
.fetch_one(&pool)
.await?;
```

After

```rust
.await?
```

The type becomes

```rust
User
```

Not

```rust
Option<User>
```

Because the `?` unwraps the `Result`.

---

# Flow

```text
fetch_one()

↓

Result<User, SqlxError>

↓

?

↓

User
```

Simple.

---

# Why Doesn't It Return Option?

Because you're telling SQLx

> "I guarantee this row exists."

If you're wrong,

that's an error.

---

# Think of a Passport Office

You search by Passport Number.

Passport numbers are unique.

Possible outcomes

```text
Passport Found

↓

Return Passport
```

or

```text
Passport Missing

↓

Error
```

Not

```text
Maybe Passport
```

---

# Real Example

Suppose every authenticated session must exist.

```rust
let session = sqlx::query_as!(
    Session,
    "SELECT * FROM sessions
     WHERE id = $1",
    session_id
)
.fetch_one(&pool)
.await?;
```

If the session disappeared,

that's an error.

---

# Compare

## `fetch_one()`

```text
Exactly one row expected
```

Returns

```rust
Result<T, Error>
```

---

## `fetch_optional()`

```text
Zero or one row expected
```

Returns

```rust
Result<Option<T>, Error>
```

---

## `fetch_all()`

```text
Zero or many rows expected
```

Returns

```rust
Result<Vec<T>, Error>
```

We'll learn this next.

---

# Real SQLx Example

```rust
let user = sqlx::query_as!(
    User,
    "SELECT * FROM users WHERE id = $1",
    id
)
.fetch_one(&pool)
.await?;
```

Read it like English.

```text
Run Query

↓

Exactly one user must exist

↓

If found

↓

Return User

↓

Otherwise

↓

Return Database Error
```

---

# Mental Model

```text
fetch_one()

↓

Result<User, Error>

        │

   ┌────┴────┐

   │         │

Ok(User)   Err(Error)
```

No `Option`.

---

# Rule to Remember

- Use `fetch_one()` when **exactly one row must exist**.
- Returns `Result<T, sqlx::Error>`.
- Missing rows become `sqlx::Error::RowNotFound`.
- After `.await?`, you get the actual value (`T`).
- No `Option` is involved.

---

# Problems

## Problem 1

What is the return type of `fetch_one()`?

---

## Problem 2

A matching row exists.

What does `fetch_one()` return?

---

## Problem 3

No matching row exists.

What does `fetch_one()` return?

---

## Problem 4

After this code:

```rust
let user = query
    .fetch_one(&pool)
    .await?;
```

What is the type of `user`?

---

## Problem 5

Which method should you use?

A user **may or may not** exist.

- `fetch_one()`
- `fetch_optional()`

Why?

---

## Problem 6

Which method should you use?

A session **must exist**.

- `fetch_one()`
- `fetch_optional()`

Why?

---

## Problem 7

Fill in the flow.

```text
fetch_one()

↓

________________

↓

await?

↓

________________
```

---

# Solutions

## Solution 1

```rust
Result<T, sqlx::Error>
```

---

## Solution 2

```text
Ok(User)
```

The query succeeds and returns the matching row.

---

## Solution 3

```text
Err(sqlx::Error::RowNotFound)
```

A missing row is treated as an error because `fetch_one()` expects exactly one row.

---

## Solution 4

```rust
User
```

The `?` unwraps the `Result`, leaving the actual `User`.

---

## Solution 5

Use:

```rust
fetch_optional()
```

Because it is perfectly valid for the user to be absent. It returns `Ok(None)` instead of an error.

---

## Solution 6

Use:

```rust
fetch_one()
```

Because your application expects the session to exist. If it doesn't, something is wrong and an error should be returned.

---

## Solution 7

```text
fetch_one()

↓

Result<T, sqlx::Error>

↓

await?

↓

T
```

---

# The Big Picture

You now know the two most common SQLx query methods:

| Method             | Expected Rows | Return Type                      | If No Row Exists   |
| ------------------ | ------------- | -------------------------------- | ------------------ |
| `fetch_one()`      | Exactly 1     | `Result<T, sqlx::Error>`         | `Err(RowNotFound)` |
| `fetch_optional()` | 0 or 1        | `Result<Option<T>, sqlx::Error>` | `Ok(None)`         |

Think of them like this:

```text
fetch_one()

"I know this row exists."

↓

User

or

Error



fetch_optional()

"This row may or may not exist."

↓

Some(User)

or

None
```

Choosing between them depends on your business logic—not just the SQL query itself.

---

## Next Concept

Next we'll cover **`fetch_all()`**, which is used when you expect **zero, one, or many rows**. It returns a `Vec<T>` and is the method you'll use for lists such as all users, all hotels, all bookings, or all destinations.
