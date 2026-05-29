# Result, Option, Error Handling, match, ?, and if let

---

# WHY THIS TOPIC MATTERS

This is one of the BIGGEST differences between:

- beginner engineers
  and
- production backend engineers

Most backend systems fail because of:

- ignored errors
- null values
- silent failures
- unpredictable states

Rust forces you to handle reality properly.

That is why Rust systems become extremely reliable.

---

# FIRST PRINCIPLE

In backend engineering:

everything fails eventually.

Examples:

- database connection fails
- invalid input
- user not found
- payment fails
- file upload fails
- network timeout
- parsing error

Rust says:

> “Handle failure explicitly.”

This is elite engineering mindset.

---

# PART 1 — OPTION<T>

Used when value may or may not exist.

Think:

> “This is optional.”

---

# EXAMPLE

```rust
let username: Option<String> = Some(String::from("Aariv"));
```

OR:

```rust
let username: Option<String> = None;
```

---

# WHY OPTION EXISTS

Instead of:

```rust
null
```

Rust uses:

```rust
Some(value)
None
```

This eliminates huge categories of production bugs.

---

# REAL BACKEND EXAMPLES

Examples where Option is perfect:

- user middle name
- optional profile image
- employee vehicle number
- deleted_at timestamp
- search query
- optional GPS coordinates

---

# ACCESSING OPTION VALUES

Must handle safely.

---

# USING match

```rust
match username {
    Some(name) => println!("{}", name),
    None => println!("No username"),
}
```

Rust forces handling BOTH cases.

This is intentional.

---

# USING if let

Cleaner syntax.

```rust
if let Some(name) = username {
    println!("{}", name);
}
```

Use this often.

Very common in backend systems.

---

# OPTION IN DATABASE QUERIES

This statement:

```rust id="s6m9k6"
let user = find_user(id).await?;
```

For it to make sense as "maybe user exists, maybe not", the function would need something like:

```rust id="krmwwn"
async fn find_user(id: i32) -> Result<Option<User>, DbError>
```

Then:

```rust id="ql0k0n"
let user = find_user(id).await?;
```

works like:

- DB error → `?` returns early
- Query succeeds → gives:

```rust id="lszv4v"
user: Option<User>
```

For `Option`:

```rust id="l3v2qx"
let x = some_option?;
```

works like:

```rust id="r3cjlwm"
match some_option {
    Some(v) => v,
    None => return None,
}
```

So here `?` handles **`None`**.

---

For `Result`:

```rust id="n6j2ra"
let x = some_result?;
```

works like:

```rust id="5n4m2o"
match some_result {
    Ok(v) => v,
    Err(e) => return Err(e),
}
```

So here `?` handles **`Err`**.

---

Examples:

```rust id="0e1w7o"
let user = find_user()?;      // Result -> handles Err
let name = username?;         // Option -> handles None
```

So:

**`?` is not "for None". It works on types like `Option` and `Result`, and returns early on their failure/empty variants.**

Now this sentence becomes correct:

> Maybe user exists. Maybe not.

because:

```rust id="1y4q8t"
Some(User)   // found
None         // not found
```

---

# PART 2 — RESULT<T, E>

THIS is daily life in backend Rust.

---

# FIRST PRINCIPLE

Result represents:

success OR failure.

---

# STRUCTURE

```rust
Result<T, E>
```

Meaning:

- T = success value
- E = error value

---

# EXAMPLE

```rust
let result: Result<i32, String> = Ok(10);
```

OR:

```rust
let result: Result<i32, String> = Err(String::from("Something failed"));
```

---

# WHY RESULT IS POWERFUL

Instead of crashes:

Rust forces controlled failure handling.

This is MASSIVE in production systems.

---

# REAL BACKEND EXAMPLES

Database query:

```rust
Result<User, sqlx::Error>
```

JSON parsing:

```rust
Result<CreateUser, serde_json::Error>
```

File upload:

```rust
Result<(), std::io::Error>
```

---

# USING match WITH RESULT

```rust
match result {
    Ok(value) => println!("Success: {}", value),
    Err(error) => println!("Error: {}", error),
}
```

This is explicit systems thinking.

---

# PART 3 — THE ? OPERATOR

CRITICAL.

Burn this into memory.

---

# WITHOUT ?

```rust
fn get_number() -> Result<i32, String> {
    let result = parse_number();

    match result {
        Ok(value) => Ok(value),
        Err(err) => Err(err),
    }
}
```

Ugly.

---

# WITH ?

```rust
fn get_number() -> Result<i32, String> {
    let value = parse_number()?;
    Ok(value)
}
```

Much cleaner.

---

# WHAT ? ACTUALLY DOES

If success:

```rust
Ok(value)
```

continue execution.

If failure:

```rust
Err(error)
```

return immediately.

This becomes:
daily backend coding.

---

# REAL AXUM EXAMPLE

```rust
async fn create_user(
    State(state): State<AppState>,
) -> Result<Json<User>, AppError> {

    let user = sqlx::query_as!(
        User,
        "SELECT * FROM users LIMIT 1"
    )
    .fetch_one(&state.db)
    .await?;

    Ok(Json(user))
}
```

If query fails:

automatic error return.

Beautiful.

---

# PART 4 — unwrap()

DANGEROUS.

---

# EXAMPLE

```rust
let value = result.unwrap();
```

If error occurs:

application PANICS.

Crashes.

---

# RULE

Never casually use unwrap in production backend code.

Beginners abuse unwrap.
Production engineers handle errors properly.

---

# WHEN unwrap IS ACCEPTABLE

Mostly:

- quick experiments
- tests
- temporary debugging

Not production APIs.

---

# PART 5 — expect()

Similar to unwrap.

```rust
let config = env::var("DATABASE_URL")
    .expect("DATABASE_URL missing");
```

This is acceptable during startup.

Because app literally cannot run without DB URL.

---

# PART 6 — CUSTOM ERROR TYPES

VERY IMPORTANT.

Eventually:

you create your own app errors.

---

# BASIC EXAMPLE

```rust
enum AppError {
    DatabaseError,
    Unauthorized,
    NotFound,
}
```

Later:

you’ll implement:

```rust
IntoResponse
```

for Axum APIs.

This becomes:
professional backend architecture.

---

# PART 7 — OPTION VS RESULT

CRITICAL INTERVIEW QUESTION.

---

# OPTION

Use when:

absence is NORMAL.

Examples:

- user may not exist
- profile image optional
- search parameter optional

---

# RESULT

Use when:

failure happened.

Examples:

- DB connection failed
- parsing failed
- file upload failed

---

# SIMPLE MEMORY RULE

Option:

> “Maybe no value.”

Result:

> “Operation succeeded or failed.”

---

# PART 8 — COMMON BACKEND PATTERNS

---

# Pattern 1 — Optional Query Params

```rust
struct UserFilter {
    city: Option<String>,
}
```

---

# Pattern 2 — Database Fetch

```rust
let user: Option<User>
```

because user may not exist.

---

# Pattern 3 — API Errors

```rust
Result<Json<User>, AppError>
```

This becomes extremely common.

---

# Pattern 4 — Environment Variables

```rust
let db_url = env::var("DATABASE_URL")?;
```

---

# PART 9 — MATCH STATEMENTS

EXTREMELY IMPORTANT.

Rust pattern matching is elite-level language design.

---

# EXAMPLE

```rust
match role {
    UserRole::Admin => println!("Full access"),
    UserRole::Employee => println!("Limited access"),
    UserRole::Supervisor => println!("Management access"),
}
```

This becomes:

- permission systems
- workflow engines
- state transitions
- approval systems

---

# REAL INFRA SYSTEM THINKING

Example:

```rust
match invoice.status {
    InvoiceStatus::Pending => approve_invoice(),
    InvoiceStatus::Approved => send_payment(),
    InvoiceStatus::Paid => archive_invoice(),
}
```

That’s operational systems engineering.

---

# PART 10 — PRACTICE TASKS

Do ALL of these.

---

# TASK 1

Create:

```rust
fn find_employee(id: i32) -> Option<String>
```

Return:

- Some(name)
- None

Handle using:

- match
- if let

---

# TASK 2

Create:

```rust
fn divide(a: i32, b: i32) -> Result<i32, String>
```

If b == 0:
return error.

Otherwise:
return success.

---

# TASK 3

Use:

```rust
?
```

operator inside function.

---

# TASK 4

Create:

```rust
enum AppError {
    NotFound,
    Unauthorized,
    DatabaseError,
}
```

Use match statement.

---

# TASK 5

Write code WITHOUT unwrap.

Force yourself to handle errors properly.

This is important.

---

# NEXT TOPIC

Async Rust
tokio
async/await
concurrency

This is where:
Rust becomes truly powerful for backend systems.

And where most beginners get mentally destroyed.

But once understood:
Axum suddenly becomes intuitive.
