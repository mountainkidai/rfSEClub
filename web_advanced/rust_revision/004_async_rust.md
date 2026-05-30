# Rust Mastery Journey — Topic 4

# Async Rust, Tokio, async/await, and Concurrency

---

# WHY THIS TOPIC MATTERS

Without async:

Axum makes no sense.

Modern backend systems are basically:

- waiting for database
- waiting for APIs
- waiting for file uploads
- waiting for network responses

Backend engineering is mostly:

efficient waiting.

Rust async exists to make waiting scalable.

---

# FIRST PRINCIPLE

Imagine:

10,000 users hit your API.

If every request blocks a thread:

your server dies.

Async allows:

one thread
→ handling many waiting operations efficiently.

This is how modern high-performance systems work.

---

# WHAT IS BLOCKING?

Example:

```rust id="8y3v4r"
let users = db.query();
```

Database takes:
200ms.

If thread waits doing nothing:
that thread is blocked.

Wasteful.

---

# WHAT ASYNC DOES

Instead of:

> “Wait here doing nothing.”

Async says:

> “Pause this task temporarily and work on other tasks.”

Huge difference.

---

# REAL WORLD ANALOGY

Blocking:

One cashier.
One customer.
Everyone waits.

Async:

Cashier takes order.
Customer waits for food.
Cashier serves next customer meanwhile.

That’s async.

---

# PART 1 — async fn

Basic syntax:

```rust id="wrz99h"
async fn fetch_user() {
}
```

This creates:
an asynchronous function.

---

# WHY async EXISTS

Because operations like:

- database queries
- HTTP calls
- file uploads
- disk IO

take time.

Async prevents wasting threads.

---

# PART 2 — await

CRITICAL.

---

# EXAMPLE

```rust id="2mdh9q"
fetch_user().await;
```

Meaning:

> “Pause here until operation completes.”

BUT:

thread itself is NOT blocked.

This is the important part.

---

# MOST IMPORTANT MENTAL MODEL

Async is cooperative multitasking.

Tasks voluntarily pause.

Runtime schedules other tasks meanwhile.

---

# PART 3 — TOKIO

VERY IMPORTANT.

Tokio is the async runtime.

Think:

> “Engine powering async Rust.”

Without Tokio:
async Rust cannot execute.

---

# WHAT TOKIO PROVIDES

Tokio handles:

- task scheduling
- timers
- async networking
- async filesystem
- async synchronization

Tokio is basically:
backend operating system layer.

---

# BASIC TOKIO EXAMPLE

```rust id="f2v7i0"
#[tokio::main]
async fn main() {
    println!("Hello");
}
```

This starts Tokio runtime.

You will see this constantly.

---

# WHY AXUM USES TOKIO

Because web servers are massively concurrent.

Axum depends on Tokio internally.

---

# PART 4 — CONCURRENCY

CRITICAL CONCEPT.

---

# CONCURRENCY != PARALLELISM

Most beginners confuse this.

---

# CONCURRENCY

Handling many tasks efficiently.

Example:

- 10,000 HTTP requests
- database waiting
- file uploads

Tasks overlap.

---

# PARALLELISM

Multiple CPU cores executing simultaneously.

Different concept.

---

# RUST ASYNC MAINLY OPTIMIZES

Concurrency.

Especially:
IO-heavy systems.

Backend APIs are mostly IO-heavy.

---

# PART 5 — WHY ASYNC BACKENDS SCALE

Imagine:

10,000 users hitting API.

Without async:
10,000 threads needed.

Insane memory usage.

With async:
few threads
handle thousands of tasks.

Massive efficiency.

This is why:

- Node.js
- Go
- Rust async
  became huge for backend systems.

---

# PART 6 — REAL AXUM HANDLER

```rust id="w5hqzi"
async fn get_users(
    State(state): State<AppState>,
) -> Result<Json<Vec<User>>, AppError> {

    let users = sqlx::query_as!(
        User,
        "SELECT * FROM users"
    )
    .fetch_all(&state.db)
    .await?;

    Ok(Json(users))
}
```

Notice:

```rust id="7flp8r"
.await?
```

This becomes daily life.

---

# UNDERSTAND THIS FLOW CAREFULLY

1. Request arrives
2. Query starts
3. Query waits for Postgres
4. Task pauses
5. Tokio works on other requests
6. Query finishes
7. Task resumes

This is backend scalability.

---

# PART 7 — tokio::spawn

VERY IMPORTANT.

Used for concurrent tasks.

---

# EXAMPLE

```rust id="rzw4y8"
tokio::spawn(async move {
    println!("Running task");
});
```

This creates background task.

---

# REAL BACKEND EXAMPLES

Useful for:

- sending emails
- processing uploads
- notifications
- background reports
- analytics

---

# IMPORTANT WARNING

Do NOT randomly spawn tasks everywhere.

Bad engineers create async chaos.

Always ask:

> “Does this task truly need background execution?”

---

# PART 8 — async move

IMPORTANT.

---

# EXAMPLE

```rust id="h3f0k9"
tokio::spawn(async move {
    println!("{}", name);
});
```

move transfers ownership into async task.

Because spawned task may outlive current scope.

Very important ownership concept.

---

# PART 9 — COMMON BEGINNER MISTAKES

---

# MISTAKE 1 — Blocking Inside Async

BAD:

```rust id="b5i99p"
std::thread::sleep(Duration::from_secs(5));
```

This blocks thread.

Use:

```rust id="4zps3q"
tokio::time::sleep(Duration::from_secs(5)).await;
```

instead.

---

# MISTAKE 2 — Using Mutex Incorrectly

Beginners often lock everything.

Creates bottlenecks.

We’ll cover later.

---

# MISTAKE 3 — Cloning Excessively

People panic:

- ownership scary
- clone everything

Terrible habit.

Learn ownership properly instead.

---

# MISTAKE 4 — Spawning Unnecessary Tasks

Not everything needs concurrency.

Sometimes simple sequential logic is cleaner.

Operational clarity > async cleverness.

---

# PART 10 — Arc

VERY IMPORTANT FOR AXUM.

---

# WHY Arc EXISTS

In backend systems:

multiple requests need shared access.

Examples:

- database pool
- config
- cache
- storage clients

Rust ownership rules require safe sharing.

---

# EXAMPLE

```rust id="xg7t9m"
Arc<AppState>
```

Meaning:

> “Shared thread-safe ownership.”

You’ll see this constantly in Axum.

---

# PART 11 — Send + Sync

IMPORTANT HIGH-LEVEL UNDERSTANDING.

Do NOT go too deep yet.

---

# Send

Can move safely between threads.

---

# Sync

Can share safely across threads.

Tokio + Axum require many types to be:

- Send
- Sync

for thread safety.

Rust compiler enforces this.

Huge production advantage.

---

# PART 12 — REAL SYSTEMS THINKING

Bad engineers think:

> “How do I write async syntax?”

Elite backend engineers think:

> “What operations are IO-bound?”

Examples:

- DB calls
- uploads
- HTTP requests
- disk access

Those should be async.

---

# CPU-HEAVY WORK IS DIFFERENT

Examples:

- image processing
- AI inference
- video encoding

These are NOT typical async strengths.

Different optimization strategy.

---

# PART 13 — PRACTICE TASKS

Do ALL of these carefully.

---

# TASK 1

Create:

```rust id="vd43wi"
#[tokio::main]
async fn main()
```

Print message.

---

# TASK 2

Create:

```rust id="h4s6bm"
async fn fetch_data()
```

Call using:

```rust id="oz1g9m"
.await
```

---

# TASK 3

Use:

```rust id="6r06tw"
tokio::time::sleep()
```

instead of thread sleep.

---

# TASK 4

Spawn background task:

```rust id="zyd6gv"
tokio::spawn()
```

---

# TASK 5

Read Axum handler carefully:

```rust id="9bltv4"
async fn get_users(
    State(state): State<AppState>,
) -> Result<Json<Vec<User>>, AppError>
```

Understand EVERY part:

- async
- State
- Result
- await
- ?

This structure becomes your daily life.

---

# CRITICAL MINDSET SHIFT

Async is NOT about:
“speed”.

It is about:

efficient resource utilization.

That is real backend engineering.

---

# WHY RUST + TOKIO ARE ELITE

Because they combine:

- high concurrency
- memory safety
- thread safety
- performance
- predictable behavior

This is why:

- AI infrastructure
- trading systems
- distributed platforms
- real-time systems

increasingly choose Rust.

---

# WHAT YOU SHOULD FEEL AFTER THIS TOPIC

You should start realizing:

backend engineering is fundamentally:
resource orchestration.

Not:
“writing endpoints.”

That mindset shift matters enormously.

---

# NEXT TOPIC

Axum Core:

- Router
- route()
- nesting
- extractors
- Json<T>
- Path<T>
- Query<T>
- State<T>

This is where:
you finally begin building real APIs.
