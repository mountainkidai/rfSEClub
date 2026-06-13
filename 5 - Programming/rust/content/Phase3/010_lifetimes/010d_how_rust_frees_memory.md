## **DROP (WHEN AND HOW RUST FREES MEMORY)**

This is where Rust replaces the garbage collector.

---

## **1️⃣ First-Principle Truth**

> **Memory must be freed exactly once, at a predictable time.**

Not "eventually".

Not "when GC runs".

Exactly once.

Rust guarantees this **at compile time**.

---

## 2️⃣ What Is Drop ?

Drop is Rust's **destructor mechanism**.

When a value's owner goes out of scope:

- Rust automatically calls drop

- cleanup happens immediately

- resources are released deterministically

You never call drop manually in normal code.

---

## **3️⃣ Example (Simple)**

```rust
{
    let s = String::from("hello");
}
// drop(s) happens here
```

At }:

- stack frame ends

- String's drop runs

- heap memory freed

No delay. No guessing.

---

## **4️⃣ Why This Beats Garbage Collection**

GC:

- runs when it wants

- causes pauses

- hard to reason about latency

Rust:

- frees memory **exactly at scope end**

- predictable

- ideal for infra, auth, databases

That's why Rust is chosen for serious systems.

---

## **5️⃣ Drop + Ownership = Safety**

Because:

- only one owner exists

- drop runs once

- double free is impossible

Rust doesn't "detect" double free.

It **makes it unrepresentable**.

---

## **6️⃣ Drop Order (VERY IMPORTANT)**

Rust drops values in **reverse order of creation**.

```rust
let a = String::from("A");
let b = String::from("B");
```

Drop order:

1.  b

2.  a

Why?

- stack unwinding

- predictable cleanup

- dependencies clean up safely

This matters for locks, files, DB connections.

---

## **7️⃣ Drop in Structs**

```rust
struct Wrapper {
    s: String,
}

{
    let w = Wrapper { s: String::from("hi") };
}
// w dropped → then w.s dropped
```

Ownership flows **downward**.

You never manually clean child fields.

---

## **8️⃣ Custom Drop (Advanced, Rare)**

You _can_ implement Drop:

```rust
impl Drop for Wrapper {
    fn drop(&mut self) {
        println!("cleaning up");
    }
}
```

Use only for:

- logging

- releasing external resources

- invariants

Never for:

- complex logic

- panicking

- async work

Drop must be **boring and safe**.

---

## **🔒 Design Invariant (PRINT THIS)**

> **Every resource has exactly one owner**
> **and exactly one drop.**

No exceptions.

---

## **Problems**

Answer these:

1. When exactly does Rust free heap memory?
2. Why is drop order reverse?
3. Why is deterministic drop important for systems?
