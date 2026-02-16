# **PATTERN MATCHING (THE CORE THINKING TOOL IN RUST)**

If lifetimes taught you **time**,

pattern matching teaches you **logic**.

Pattern matching is how Rust makes branching **safe, explicit, and complete**.

---

## **FIRST PRINCIPLE (THE WHY)**

> **Reality has cases.**

> **Code must handle all cases.**

Bugs happen when:

- a case exists

- code forgets to handle it

Rust says: _"You don't get to forget."_

---

## **WHAT match REALLY IS**

> **match is a proof to the compiler that all possible states are handled.**

---

## **STEP 1 --- MATCH ON ENUM (THE CANONICAL CASE)**

```rs
enum AuthState {
    LoggedOut,
    LoggedIn { user_id: u64 },
    Banned,
}
```

Now use it:

```rs
fn handle(state: AuthState) {
    match state {
        AuthState::LoggedOut => {
            println!("Please log in");
        }
        AuthState::LoggedIn { user_id } => {
            println!("Welcome user {}", user_id);
        }
        AuthState::Banned => {
            println!("Access denied");
        }
    }
}
```

### **What Rust enforces**

- Exactly **one** branch executes

- All variants **must** be handled

- No invalid states possible

---

## **STEP 2 --- WHAT HAPPENS IF YOU MISS A CASE**

Add a new variant:

```
enum AuthState {
    LoggedOut,
    LoggedIn { user_id: u64 },
    Suspended,
    Banned,
}
```

Compiler error:

```
non-exhaustive patterns
```

Meaning:

> "Reality changed. Update your logic."

This is **compile-time correctness**.

---

## **STEP 3 --- MATCH RETURNS VALUES (VERY IMPORTANT)**

match is an **expression**, not a statement.

```
fn message(state: AuthState) -> &'static str {
    match state {
        AuthState::LoggedOut => "Please log in",
        AuthState::LoggedIn { .. } => "Welcome",
        AuthState::Banned => "Access denied",
    }
}
```

Rule:

> **All match arms must return the same type.**

This keeps logic predictable.

---

## **STEP 4 --- DESTRUCTURING (UNPACKING DATA SAFELY)**

```
AuthState::LoggedIn { user_id }
```

This:

- checks the variant

- extracts user_id

- guarantees it exists

No nulls.

No casts.

No runtime checks.

---

## **STEP 5 --- MATCH ON **

## **Option<T>**

```
fn print_email(email: Option<String>) {
    match email {
        Some(e) => println!("Email: {}", e),
        None => println!("No email"),
    }
}
```

First principle:

> **If something may be missing, code must say what to do when it is missing.**

---

## **STEP 6 --- MATCH ON **

## **Result<T, E>**

```
fn handle_login(result: Result<u64, AuthError>) {
    match result {
        Ok(user_id) => println!("Logged in: {}", user_id),
        Err(err) => println!("Login failed: {:?}", err),
    }
}
```

This forces:

- success path

- failure path

No silent failure.

---

## **STEP 7 --- **

## **if let**

## ** (CONTROLLED SHORTCUT)**

When you care about **one case only**:

```
if let AuthState::LoggedIn { user_id } = state {
    println!("User {}", user_id);
}
```

Meaning:

```
If matches → run
Else → ignore
```

Rule:

> Use if let for **single-branch interest**

> Use match for **full logic**

---

## **STEP 8 --- MATCH GUARDS (CONDITIONAL LOGIC)**

```
fn classify(age: u8) -> &'static str {
    match age {
        a if a < 18 => "Minor",
        a if a < 65 => "Adult",
        _ => "Senior",
    }
}
```

Guards allow:

- value-based logic

- still exhaustive

- no if/else mess

---

## **STEP 9 --- MATCH ON STRUCTS**

```
struct Session {
    user_id: u64,
    expired: bool,
}
```

```
fn check(session: Session) {
    match session {
        Session { expired: true, .. } => println!("Session expired"),
        Session { user_id, expired: false } => println!("User {}", user_id),
    }
}
```

You can:

- match on fields

- ignore others with ..

---

## **STEP 10 --- WHY **

## **\_**

## ** EXISTS (BUT MUST BE USED CAREFULLY)**

```
match state {
    AuthState::LoggedOut => {}
    _ => println!("Other"),
}
```

Rule:

> \_ is acceptable **only when you truly don't care**.

In auth logic:

- ❌ often dangerous

- hides future states

Prefer explicit matches.

---

## **STEP 11 --- MATCH AS STATE TRANSITION ENGINE**

This is how auth should look:

```
fn login(state: AuthState, user_id: u64) -> AuthState {
    match state {
        AuthState::LoggedOut => AuthState::LoggedIn { user_id },
        AuthState::LoggedIn { .. } => state,
        AuthState::Banned => state,
    }
}
```

Rules:

- transitions explicit

- illegal transitions impossible

- no hidden mutation

---

## **STEP 12 --- WHY THIS MAKES AUTH SAFE**

Without pattern matching:

- forgotten states

- invalid transitions

- runtime bugs

With pattern matching:

- compiler-enforced correctness

- future-proof logic

- readable intent

---

## **🔒 DESIGN INVARIANT**

> **If logic depends on "which case",**

> **use pattern matching --- not flags, not if-else chains.**

---

## **✅ CHECKPOINT (ANSWERED)**

1.  **Why is** **match** **safer than** **if/else\*\***?\*\*

    → It forces all possible cases to be handled.

2.  **When should you avoid** **\_\*\***?\*\*

    → When future states could cause bugs.

3.  **Why is pattern matching essential for auth?**

    → Auth is state-driven; missing a state is a security bug.

---
