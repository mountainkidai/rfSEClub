# `async fn`

## First Principle

Imagine you're ordering food.

You place your order.

The chef starts cooking.

While waiting, do you...

### Option 1

Stand in front of the kitchen doing absolutely nothing.

```text
Order Food

↓

Wait...

↓

Wait...

↓

Wait...

↓

Food Ready
```

Very inefficient.

---

### Option 2

Order the food.

Go answer emails.

Read a book.

Talk to friends.

Come back when the food is ready.

```text
Order Food

↓

Chef Cooking

↓

You Work On Other Things

↓

Food Ready
```

Much better.

This is exactly what **asynchronous programming** is.

---

# The Problem

Suppose your server receives a login request.

It needs to ask the database

```text
Does this user exist?
```

The database may take

```text
50ms

100ms

500ms
```

Should your server do absolutely nothing while waiting?

No.

Instead,

it should handle other requests.

---

# Without Async

Imagine one cashier.

```text
Customer 1

↓

Wait 5 Seconds

↓

Customer 2

↓

Wait 5 Seconds

↓

Customer 3
```

Everyone waits.

---

# With Async

```text
Customer 1

↓

Database Working

↓

Serve Customer 2

↓

Serve Customer 3

↓

Database Finished

↓

Continue Customer 1
```

The CPU stays busy instead of waiting.

---

# What is `async fn`?

Normally you write

```rust
fn hello() {

}
```

An asynchronous function is

```rust
async fn hello() {

}
```

One extra keyword.

But that keyword changes everything.

---

# What Does It Mean?

It means

> "This function may need to wait for something."

Examples

- Database query
- File read
- HTTP request
- Network request
- Sleep timer
- WebSocket message

---

# Example

Normal function

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

Runs immediately.

---

Async function

```rust
async fn load_user() {

}
```

This function **may pause** while waiting.

---

# Think of Netflix

Imagine downloading a movie.

Without async

```text
Download Movie

↓

Do Nothing

↓

Download Finished

↓

Continue Life
```

---

With async

```text
Start Download

↓

Watch Another Movie

↓

Download Finished

↓

Open It
```

---

# Why Do We Need Async?

Imagine Google.

Millions of users.

Each request waits

```text
Database

Redis

API

Disk
```

If every thread waited,

Google would need millions of threads.

Instead,

Rust pauses waiting tasks and lets the CPU work on something else.

---

# What Does `async fn` Return?

This surprises every beginner.

Suppose

```rust
async fn hello() {

}
```

It does **NOT** immediately execute.

Instead,

it returns a

```text
Future
```

Think of it like

```text
A Promise

"I'll do this work later."
```

---

# Visualization

```text
Call async fn

↓

Future Created

↓

Nothing Happens Yet

↓

.await

↓

Now Execute
```

We'll learn `Future` next.

---

# Real Axum Example

```rust
async fn login_handler(
    State(state): State<AppState>,
    Json(payload): Json<LoginRequest>,
) -> Result<Json<User>, ApiError> {

    ...
}
```

Why async?

Because inside

```rust
sqlx::query(...)
    .fetch_one(...)
    .await?;
```

The handler waits for the database.

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

The database might need

```text
20ms

50ms

200ms
```

Rust doesn't waste those milliseconds.

It works on other requests.

---

# Think of a Restaurant

Without async

```text
Waiter

↓

Order

↓

Stand In Kitchen

↓

Food Ready

↓

Serve
```

Very inefficient.

---

With async

```text
Take Order

↓

Kitchen Cooking

↓

Take More Orders

↓

Food Ready

↓

Serve
```

That's asynchronous programming.

---

# Rule to Remember

- `async fn` defines an asynchronous function.
- Async functions may pause while waiting.
- Waiting does **not** block the thread.
- Calling an async function creates a **Future**.
- The function actually runs when it is **awaited**.
- Used for databases, networking, file I/O, timers, and web servers.

---

# Problems

## Problem 1

What keyword makes a function asynchronous?

```rust
_____ fn login() {

}
```

---

## Problem 2

Why do we use `async fn` instead of a normal function for database queries?

---

## Problem 3

True or False?

An `async fn` always finishes immediately.

---

## Problem 4

Which operations commonly require `async`?

- Database queries
- HTTP requests
- Reading files
- Network requests
- All of the above

---

## Problem 5

Does calling an `async fn` immediately execute all of its code?

---

## Problem 6

What does an `async fn` return before it is awaited?

---

## Problem 7

Why is `async` useful for web servers like Axum?

---

# Solutions

## Solution 1

```rust
async fn login() {

}
```

The `async` keyword makes the function asynchronous.

---

## Solution 2

Database queries take time. While waiting for the database to respond, Rust can work on other tasks instead of blocking the thread.

---

## Solution 3

**False.**

An `async fn` may pause while waiting for external operations like databases or network requests.

---

## Solution 4

**All of the above.**

These operations often involve waiting, making them ideal candidates for asynchronous execution.

---

## Solution 5

**No.**

Calling an `async fn` creates a **Future**. The work begins when that future is driven forward (typically with `.await`).

---

## Solution 6

It returns a **Future**.

You can think of a `Future` as a description of work that will produce a value later.

---

## Solution 7

A web server handles many requests simultaneously. While one request is waiting for a database or another service, the server can continue processing other requests, improving throughput and resource usage.

---

# The Big Picture

Here's the lifecycle of an asynchronous function:

```text
async fn

↓

Creates a Future

↓

.await

↓

Function Starts Running

↓

May Pause While Waiting

↓

Resumes Automatically

↓

Returns Result
```

For example:

```rust
let user = sqlx::query_as!(
    User,
    "SELECT * FROM users WHERE id = $1",
    id
)
.fetch_one(&pool)
.await?;
```

Read it as:

1. Start the database query.
2. Wait without blocking the thread.
3. Resume when the database responds.
4. Continue executing the rest of the function.

This pattern is at the heart of Axum, SQLx, Tokio, and most modern Rust web applications.

---

## Next Concept

The next topic is **`.await`**.

This is the operator that tells Rust, **"I'm ready to wait for this asynchronous operation to complete."** Once you understand `.await`, the relationship between `async fn` and `Future` becomes much clearer.
