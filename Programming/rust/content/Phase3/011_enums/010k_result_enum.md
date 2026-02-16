# **Result<T, E> (FAILURE IS ALSO A VALUE)**

If Option<T> models **absence**,

Result<T, E> models **outcomes**.

Auth systems live and die here.

---

## **STEP 1 --- FIRST PRINCIPLE (THE REAL WORLD TRUTH)**

In reality, actions can:

- succeed

- fail (for specific reasons)

Failure is **not exceptional**.

Failure is **expected**.

Rust treats failure as **data**, not chaos.

---

## **STEP 2 --- WHAT Result is really?**

```
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

That's it.

Meaning:

```
Success → Ok(value)
Failure → Err(reason)
```

No magic.

No exceptions.

No hidden control flow.

---

## **STEP 3 --- BASIC EXAMPLE**

```
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err("division by zero".to_string())
    } else {
        Ok(a / b)
    }
}
```

Usage:

```
fn main() {
    let result = divide(10, 2);

    match result {
        Ok(v) => println!("Result = {}", v),
        Err(e) => println!("Error = {}", e),
    }
}
```

Both paths handled.

No surprises.

---

## **STEP 4 --- WH Result  IS NOT "ERROR HANDLING"**

This is key.

Result is **protocol design**.

It answers:

> "What are all the possible outcomes of this operation?"

Auth example:

```
Result<Session, AuthError>
```

Meaning:

```
Either:
- you get a valid Session
OR
- you get a specific AuthError
```

No guessing.

---

## **STEP 5 --- DEFINING DOMAIN ERRORS (CRITICAL)**

```
enum AuthError {
    InvalidCredentials,
    UserNotFound,
    SessionExpired,
    UserBanned,
}
```

Now:

```
fn login(user: &str, pass: &str) -> Result<Session, AuthError> {
    // ...
}
```

This is **self-documenting logic**.

---

## **STEP 6 --- WHY NOT ?**

❌ Bad:

```
fn login(...) -> bool
```

What does false mean?

- wrong password?

- banned?

- server down?

- expired OTP?

You don't know. Bugs follow.

✅ Good:

```
Result<Session, AuthError>
```

Compiler enforces clarity.

---

## **STEP 7 ---  OPERATOR (CONTROL FLOW WITHOUT NOISE)**

```
fn authenticate() -> Result<User, AuthError> {
    let user = find_user()?;        // if Err → return early
    let session = create_session(user)?;
    Ok(session.user)
}
```

Meaning:

```
If any step fails → stop and return the error
If all succeed → continue
```

No try/catch.

No hidden jumps.

100% visible.

```rs
use std::fmt;  // For custom error

#[derive(Debug)]
enum AuthError {
    UserNotFound,
    SessionFailed,
}

impl fmt::Display for AuthError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            AuthError::UserNotFound => write!(f, "User not found"),
            AuthError::SessionFailed => write!(f, "Failed to create session"),
        }
}

impl std::error::Error for AuthError {}

// Helper: Pretends to find user (fails sometimes)
fn find_user() -> Result<User, AuthError> {
    // Simulate failure: e.g., DB query fails
    Err(AuthError::UserNotFound)  // Or Ok(User { name: "Alice".to_string() })
}

// Helper: Creates session
fn create_session(_user: User) -> Result<Session, AuthError> {
    // Simulate possible failure
    Ok(Session { user: User { name: "Alice".to_string() } })
}

#[derive(Debug)]
struct User {
    name: String,
}

#[derive(Debug)]
struct Session {
    user: User,
}

fn authenticate() -> Result<User, AuthError> {
    let user = find_user()?;     // Err? → return AuthError::UserNotFound early
    let session = create_session(user)?;  // Err? → return AuthError::SessionFailed early
    Ok(session.user)             // All good → return User
}

fn main() {
    match authenticate() {
        Ok(user) => println!("Success: Welcome, {}", user.name),
        Err(e) => println!("Failed: {}", e),  // Handles propagated error
    }
}

```

---

## **STEP 8 --- HOW ACTUALLY WORKS (IMPORTANT)**

This:

```
let x = foo()?;
```

Is equivalent to:

```
let x = match foo() {
    Ok(v) => v,
    Err(e) => return Err(e),
};
```

So:

- no magic

- no exceptions

- pure pattern matching

---

## **STEP 9 --- Result + Option TOGETHER (VERY COMMON)**

```
fn get_email(user: &User) -> Result<Option<String>, DbError> {
    // DB might fail
    // Email might not exist
}
```

Meaning:

```
Database may fail
Even if DB succeeds, email may be missing
```

Reality, modeled precisely.

---

## **STEP 10 --- NEVER unwrap() IN AUTH CODE**

This is a hard rule.

❌ Wrong:

```
let session = login(...).unwrap();
```

This means:

```
Crash the server if login fails
```

Unacceptable.

✅ Right:

```
match login(...) {
    Ok(session) => proceed(session),
    Err(err) => deny(err),
}
```

---

## **STEP 11 --- ERROR TRANSLATION (BOUNDARIES)**

Inside core logic:

```rs
AuthError::InvalidCredentials
```

At API boundary:

```rs
401 Unauthorized
```

At UI boundary:

```rs
"Incorrect email or password"
```

Same error.

Different representations.

This is **clean architecture**.

---

## **STEP 12 --- WHY AUTH WITHOUT Result IS BROKEN**

Auth is literally:

```
Try → Validate → Fail or Succeed
```

If failures are not explicit:

- security bugs appear

- logs lie

- clients misbehave

Rust forces honesty.

---

## **🔒 DESIGN INVARIANT**

> **If an operation can fail,**

> **its return type must say so.**

No exceptions.

---

## **✅ CHECKPOINT (ANSWERED)**

1.  **What does** **Result<T, E>** **represent?**

    → An operation that can succeed or fail, with explicit outcomes.

2.  **Why is** **Result** **better than exceptions?**

    → Control flow is visible and enforced by the compiler.

3.  **Why is** **?** **safe?**

    → It's just early-return pattern matching.

---
