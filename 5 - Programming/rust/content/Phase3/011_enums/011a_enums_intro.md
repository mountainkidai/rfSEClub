# **ENUMS (NOT "CHOICES", BUT STATE MACHINES)**

We'll again go **first principles → reality → code → rules**.

---

## **STEP 1 --- FIRST PRINCIPLE (THE REAL DEFINITION)**

> **An enum represents a value that can be in exactly ONE of several well-defined states.**

Not many.

Not optional.

Exactly one.

This is **how reality works**.

---

## **STEP 2 --- WHY ENUMS EXIST (THE PROBLEM THEY SOLVE)**

Without enums, people do this:

```
struct User {
    is_logged_in: bool,
    is_verified: bool,
    is_banned: bool,
}
```

This allows **nonsense states**:

```
logged_in = true
verified = false
banned = true
```

What does that even mean? 🤡

The compiler allows it. Bugs guaranteed.

---

## **STEP 3 --- ENUM = "ONLY VALID STATES ARE ALLOWED"**

### **Simple enum**

```
enum AuthState {
    LoggedOut,
    LoggedIn,
    Banned,
}
```

Now a user is **exactly one** of these.

You cannot create an invalid combination.

---

## **STEP 4 --- USING AN ENUM VALUE**

```
fn main() {
    let state = AuthState::LoggedIn;
}
```

Memory-wise:

```
state = one tag saying "LoggedIn"
```

No booleans.

No ambiguity.

No contradictions.

---

## **STEP 5 --- ENUMS CAN CARRY DATA (THIS IS HUGE)**

Enums are not just labels.

```
enum AuthState {
    LoggedOut,
    LoggedIn { user_id: u64 },
    Banned { reason: String },
}
```

Meaning:

```
User is either:
- LoggedOut (no data)
- LoggedIn WITH a user_id
- Banned WITH a reason
```

This mirrors **real systems**.

---

## **STEP 6 --- PATTERN MATCHING (THE ONLY WAY IN)**

Rust forces you to handle **every state**.

```
fn handle(state: AuthState) {
    match state {
        AuthState::LoggedOut => {
            println!("Please log in");
        }
        AuthState::LoggedIn { user_id } => {
            println!("Welcome user {}", user_id);
        }
        AuthState::Banned { reason } => {
            println!("Access denied: {}", reason);
        }
    }
}
```

You cannot "forget" a case.

---

## **STEP 7 --- WHY **match**  IS NON-NEGOTIABLE**

If you add a new state:

```
enum AuthState {
    LoggedOut,
    LoggedIn { user_id: u64 },
    Suspended,
    Banned { reason: String },
}
```

Compiler says:

```
non-exhaustive patterns
```

Meaning:

> "You changed reality.

> Update your logic."

This is **compile-time correctness**.

---

## **STEP 8 --- THIS IS WHY AUTH LOVES ENUMS**

Auth is nothing but state:

- Logged out

- Logged in

- OTP pending

- KYC pending

- Suspended

- Banned

- Expired

Enums model this **perfectly**.

No flags.

No guessing.

No runtime checks.

---

## **STEP 10 --- ENUM VS STRUCT (CLEAR DIFFERENCE)**

### **Struct = "HAS these fields"**

```
struct User {
    id: u64,
    email: String,
}
```

### **Enum = "IS one of these states"**

```
enum Session {
    Anonymous,
    Authenticated { user_id: u64 },
}
```

Use the right tool.

---

## **STEP 11 --- COMBINE ENUM + STRUCT (REALISTIC)**

```
struct Session {
    state: SessionState,
}

enum SessionState {
    Anonymous,
    Authenticated { user_id: u64 },
    Expired,
}
```

This is **production-grade modeling**.

---

## **STEP 12 --- ENUMS REMOVE BUGS BEFORE THEY EXIST**

Ask yourself:

> "Can this state exist?"

If answer is "no" → enum prevents it.

That's Rust's superpower.

---

## **🔒 DESIGN INVARIANT (PRINT THIS)**

> **If a state is impossible in reality,**

> **it must be impossible in code.**

Enums enforce this.

---

## **CHECKPOINT (ANSWER QUICKLY)**

1.  Why are enums better than booleans for auth?

2.  Why must match be exhaustive?

3.  Why are enums called state machines?
