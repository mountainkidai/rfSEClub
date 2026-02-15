## **COPY TYPES vs MOVE TYPES**

Why does x survive sometimes... and die other times?

---

## **1️⃣ First-Principle Truth**

> **Only values that need no cleanup can be copied freely.**

If copying a value would cause **two owners to free the same resource** → Rust forbids it.

Simple. Ruthless. Correct.

---

## **2️⃣ What Is a "Copy" in Rust?**

A **copy** means:

- bit-for-bit duplication

- no heap ownership

- no destructor logic

When copied:

- both values are valid

- no ownership transfer

- no cleanup conflict

---

## **3️⃣ Examples of Copy Types**

```rust
let a = 5;
let b = a;

println!("{}", a); // ✅ still valid
```

Why?

- i32 lives fully on stack

- fixed size

- no heap

- no drop

Other Copy types:

- bool

- char

- f64

- tuples of Copy types

---

## **4️⃣ Move Types (The Default)**

```
let a = String::from("hi");
let b = a;

println!("{}", a); // ❌
```

Why?

- String owns heap memory

- heap must be freed exactly once

- copying pointer would cause double free

So Rust chooses **move**, not copy.

---

## **5️⃣ The **

## **Copy**

## ** Trait (Hidden Rule)**

Rust decides copy vs move using a trait:

```
Copy
```

Rule:

> If a type implements Copy, assignments copy.

> Otherwise, assignments move.

You don't usually see this --- but it controls everything.

---

## **6️⃣ Why **

## **String**

## ** Is NOT **

## **Copy**

If String were Copy:

- copying would duplicate pointer

- two owners

- both drop heap

- 💥 memory corruption

Rust refuses to allow this possibility.

Safety > convenience.

---

## **7️⃣ Copy Is Implicit --- Move Is Explicit**

This is important.

```rust
let x = 10;      // copy
let y = x;       // copy

let s = String::from("hi");
let t = s;       // move
```

Rust:

- copies silently when safe

- forces moves when dangerous

You don't opt in.

The type decides.

---

## **8️⃣ Can Custom Types Be Copy?**

Yes --- **only if safe**.

```rust
#[derive(Copy, Clone)]
struct Point {
    x: i32,
    y: i32,
}
```

Why allowed?

- all fields are Copy

- no heap

- no destructor

Rust enforces this strictly.

---

## **9️⃣ Big Design Insight (IMPORTANT)**

> **Copy types are values.**

> **Move types are resources.**

- Values → numbers, flags, coordinates

- Resources → strings, files, sockets, locks

Rust forces you to treat them differently.

This maps perfectly to reality.

---

## **10️⃣ Design Invariant (PRINT THIS)**

> **If duplicating a value could cause double cleanup, it must move, not copy.**

This single rule explains all behavior.

---

## **Checkpoint (Must Be Obvious)**

Answer cleanly:

1. Why is i32 Copy but String not?
2. What would break if String were Copy?
3. Why does Rust copy silently but move loudly?

---
