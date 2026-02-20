# **SMART POINTERS**

## **FIRST PRINCIPLE (THE ROOT TRUTH)**

> **Ownership rules are strict.**

> **Smart pointers exist to relax ownership in controlled ways.**

They do **not** bypass Rust's rules.

They encode _allowed exceptions_.

---

## **THE ONLY THREE YOU NEED**

you only need to understand:

1.  Box<T> → heap ownership

2.  Arc<T> → shared ownership

3.  Mutex<T> → controlled mutation

---

## **1️⃣ Box<T> OWN BUT INDIRECTLY Why it exists**

Some things:

- are large

- recursive

- behind traits (dyn Trait)

They must live on the heap.

---

### **Simple example**

```rs
let x = Box::new(5);
println!("{}", x);
```

Meaning:

```text
Stack holds pointer
Heap holds value
Still ONE owner
```

Ownership rules unchanged.

---

### ** use-case: trait objects**

```rs
fn make_repo() -> Box<dyn UserRepo> {
    Box::new(PostgresRepo {})
}
```

Why?

- return a trait

- size unknown at compile time

- heap solves that

---

## **2️⃣ Arc<T> SHARED OWNERSHIP**

### **First principle**

> **Multiple parts of the program need the same thing.**

> Arc = Thread-Safe Shared Read-Only Data

Example:

- config

- database pool

- auth service

---

### **Why not normal ownership?**

```
let auth = AuthService {};
handler1(auth);
handler2(auth); // ❌ moved
```

Ownership is exclusive.

---

### **Arc<T> fixes this**

```rs
use std::sync::Arc;

let auth = Arc::new(AuthService {});
let h1 = auth.clone();
let h2 = auth.clone();
```

Meaning:

```
Multiple owners
Value dropped when last Arc is dropped
Thread-safe reference counting
```

---

### **Auth use-case**

Axum state:

```
struct AppState {
    auth: Arc<AuthService>,
}
```

Handlers clone Arc, not the data.

---

## **3️⃣ Mutex<T> CONTROLLED MUTATION**

### **First principle**

> **Shared data + mutation = danger.**

Rust refuses this:

```
Arc<AuthService> // immutable only
```

If mutation is needed:

```
use std::sync::Mutex;

Arc<Mutex<AuthService>>
```

---

### **Example**

```
let data = Arc::new(Mutex::new(0));

{
    let mut guard = data.lock().unwrap();
    *guard += 1;
}
```

Rules:

- lock → exclusive access

- guard drops → unlocks

---

### **Auth reality**

Most services:

- are stateless

- do NOT need Mutex

Use Mutex only for:

- in-memory counters

- caches

- rate-limiting

---

## **4️⃣ COMBINING THEM (REAL SHAPE)**

```
Arc<AuthService>                // best case
Arc<Mutex<AuthService>>         // only if mutable state exists
Box<dyn Trait>                  // abstraction
```

This covers **99% of backend needs**.

---

## **5️⃣ WHAT NOT TO DO (IMPORTANT)**

❌ Overuse Mutex

❌ Wrap everything in Arc

❌ Use smart pointers "just in case"

Rule:

> **Default to plain ownership.**

> **Add smart pointers only when forced.**

---

## **6️⃣ WHY SMART POINTERS DONT CAUSE LIFETIMES**

Because:

```
They own data
They manage drop timing
No borrowing involved
```

This is why they compose well with async.

---

## **7️⃣ AUTH SERVICE --- FINAL SHAPE (MENTAL MODEL)**

```
struct AuthService<R, H> {
    repo: R,
    hasher: H,
}
```

Wrapped at runtime as:

```
Arc<AuthService<PostgresRepo, BcryptHasher>>
```

No lifetimes.

No hacks.

Clean ownership.

---

## **🔒 DESIGN INVARIANTS**

1.  Box → indirection

2.  Arc → shared ownership

3.  Mutex → last resort

4.  Prefer immutability

5.  Smart pointers encode intent

---

## **CHECKPOINT (ANSWERED)**

1. Why not share ownership normally?
   → Rust forbids multiple owners.
2. Why is Arc safe in async servers?
   → Atomic ref counting.
