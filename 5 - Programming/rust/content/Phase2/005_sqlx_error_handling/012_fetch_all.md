# `fetch_all()`

## First Principle

Imagine you're building Phunsuk.

A tourist searches for

> **Hotels in Shimla**

How many hotels could match?

```text
0 hotels
```

or

```text
1 hotel
```

or

```text
50 hotels
```

or

```text
500 hotels
```

You don't know beforehand.

Therefore, SQLx returns a **collection**.

---

# What does `fetch_all()` return?

```rust
Result<Vec<T>, sqlx::Error>
```

Notice

No `Option`.

Because an empty list is **not** an error.

---

# Visualization

```text
Database Query

↓

Result

├── Ok(Vec<User>)

│

└── Err(Database Error)
```

---

# Think of Shopping

You search Amazon for

```text
Laptop
```

Possible results

```text
0 Products
```

or

```text
5 Products
```

or

```text
500 Products
```

Amazon doesn't say

```text
Error
```

when nothing matches.

It simply returns

```text
[]
```

An empty list.

That's exactly how

```rust
fetch_all()
```

works.

---

# Example

```rust
let users = sqlx::query_as!(
    User,
    "SELECT * FROM users"
)
.fetch_all(&pool)
.await?;
```

After

```rust
.await?
```

the type becomes

```rust
Vec<User>
```

---

# Possible Outcomes

Suppose your database contains

```text
Steve
Amy
Leonard
Sony
```

Then

```rust
fetch_all()
```

returns

```rust
Ok(vec![
    Steve,
    Amy,
    Leonard,
    Sony
])
```

---

Suppose the table is empty.

It returns

```rust
Ok(vec![])
```

Not

```text
None
```

Not

```text
Error
```

Just

```rust
Vec::new()
```

---

Suppose the database crashes.

Then

```rust
Err(sqlx::Error)
```

---

# Why Not Option<Vec<T>>?

Imagine searching hotels.

If none exist,

should SQLx return

```text
None
```

or

```text
[]
```

The answer is

```text
[]
```

because the query succeeded.

There simply weren't any matching rows.

---

# Example

```rust
let hotels = sqlx::query_as!(
    Hotel,
    "SELECT * FROM hotels
     WHERE city = $1",
    city
)
.fetch_all(&pool)
.await?;
```

Possible outcomes

```text
[]
```

or

```text
[Hotel]
```

or

```text
[Hotel, Hotel, Hotel]
```

---

# Real Koel Example

Suppose

```rust
GET /devices
```

A user may have

```text
0 Devices

1 Device

3 Devices

20 Devices
```

Perfect use case.

```rust
let devices = sqlx::query_as!(
    Device,
    "SELECT * FROM devices
     WHERE user_id = $1",
    user_id
)
.fetch_all(&pool)
.await?;
```

---

# Compare All Three

## `fetch_one()`

```text
Exactly one row.
```

Returns

```rust
Result<T, Error>
```

---

## `fetch_optional()`

```text
Zero or one row.
```

Returns

```rust
Result<Option<T>, Error>
```

---

## `fetch_all()`

```text
Zero or many rows.
```

Returns

```rust
Result<Vec<T>, Error>
```

---

# Visualization

```text
fetch_one()

↓

User



fetch_optional()

↓

Some(User)

or

None



fetch_all()

↓

Vec<User>

↓

[]

↓

[User]

↓

[User, User, User]
```

---

# Real Example

```rust
let hotels = sqlx::query_as!(
    Hotel,
    "SELECT * FROM hotels"
)
.fetch_all(&pool)
.await?;
```

Read it.

```text
Run Query

↓

Collect Every Matching Row

↓

Put Them Into a Vec

↓

Return the Vec
```

---

# Mental Model

```text
fetch_all()

↓

Result<Vec<T>, Error>

        │

   ┌────┴────┐

   │         │

Ok(Vec)   Err(Error)
```

Notice

Inside

```text
Vec
```

there can be

```text
0

1

100

10,000
```

elements.

---

# Rule to Remember

- Use `fetch_all()` when you expect **zero or more rows**.
- Returns `Result<Vec<T>, sqlx::Error>`.
- An empty result is **not** an error.
- After `.await?`, you get `Vec<T>`.
- Ideal for lists, searches, dashboards, reports, and APIs that return collections.

---

# Problems

## Problem 1

What is the return type of `fetch_all()`?

---

## Problem 2

A query matches no rows.

What does `fetch_all()` return?

---

## Problem 3

A query matches five rows.

What does `fetch_all()` return?

---

## Problem 4

After this code:

```rust
let users = query
    .fetch_all(&pool)
    .await?;
```

What is the type of `users`?

---

## Problem 5

Which method should you use?

Display **all hotels** in Shimla.

- `fetch_one()`
- `fetch_optional()`
- `fetch_all()`

Why?

---

## Problem 6

Which method should you use?

Retrieve a user by their unique ID.

- `fetch_one()`
- `fetch_optional()`
- `fetch_all()`

Why?

---

## Problem 7

Fill in the flow.

```text
fetch_all()

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
Result<Vec<T>, sqlx::Error>
```

---

## Solution 2

```rust
Ok(vec![])
```

The query succeeded but found no matching rows, so it returns an empty vector.

---

## Solution 3

```rust
Ok(vec![row1, row2, row3, row4, row5])
```

All matching rows are collected into a `Vec<T>`.

---

## Solution 4

```rust
Vec<User>
```

The `?` unwraps the `Result`, leaving the vector of users.

---

## Solution 5

Use:

```rust
fetch_all()
```

Because there may be zero, one, or many hotels matching the search criteria.

---

## Solution 6

Use:

```rust
fetch_one()
```

If your application guarantees that the ID exists and expects exactly one row. If the user might not exist, `fetch_optional()` is a better choice.

---

## Solution 7

```text
fetch_all()

↓

Result<Vec<T>, sqlx::Error>

↓

await?

↓

Vec<T>
```

---

# The Big Picture

You now understand the three core SQLx fetch methods.

| Method             | Expected Rows | Return Type                      | No Rows Found      |
| ------------------ | ------------- | -------------------------------- | ------------------ |
| `fetch_one()`      | Exactly 1     | `Result<T, sqlx::Error>`         | `Err(RowNotFound)` |
| `fetch_optional()` | 0 or 1        | `Result<Option<T>, sqlx::Error>` | `Ok(None)`         |
| `fetch_all()`      | 0 or more     | `Result<Vec<T>, sqlx::Error>`    | `Ok(vec![])`       |

Think of them like this:

```text
Need exactly one item?
        │
        └── fetch_one()

Need maybe one item?
        │
        └── fetch_optional()

Need a list of items?
        │
        └── fetch_all()
```

This simple decision tree covers the vast majority of SQLx read queries you'll write.

---

## Next Concept

With the SQLx fetching methods complete, we'll move into **Async Rust** and start with **`async fn`**. This is the foundation that makes Axum handlers, SQLx queries, HTTP requests, and concurrent Rust programs work.
