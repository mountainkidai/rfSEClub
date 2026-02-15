## **BORROWING (SHARING WITHOUT OWNING)**

Ownership alone is too strict.

Borrowing makes Rust usable.

---

## **1️⃣ First-Principle Truth**

> **Borrowing is temporary permission to access a value you do not own.**

Key words:

- temporary

- permission

- no ownership transfer

The owner stays responsible.

---

## **2️⃣ Why Borrowing Must Exist**

Without borrowing:

- every function would consume ownership

- code would be unusable

- everything would need to be cloned

Borrowing allows:

- read access

- controlled write access

- safety without copying

---

## **3️⃣ The Two Borrow Types (The Law)**

Rust has **exactly two kinds** of borrows:

1.  **Immutable borrow** → &T

2.  **Mutable borrow** → &mut T

No others. No shortcuts.

---

## **4️⃣ Immutable Borrow (**

## **&T**

## **)**

```
let s = String::from("hello");
let r = &s;

println!("{}", r);
println!("{}", s); // ✅ allowed
```

Properties:

- read-only

- many allowed at once

- owner still usable (read-only)

Mental model:

> "Many people can read a document."

---

## **5️⃣ Mutable Borrow (**

## **&mut T**

## **)**

```
let mut s = String::from("hello");
let r = &mut s;

r.push_str("!");
```

Properties:

- write access

- only ONE allowed at a time

- owner cannot be used while borrowed

Mental model:

> "Only one editor can modify the document."

---

## **6️⃣ The Two Borrowing Rules (PRINT THIS)**

> **Rule 1:** You can have many &T **or** one &mut T

> **Rule 2:** Borrows must not outlive the owner

These two rules eliminate:

- data races

- inconsistent reads

- use-after-free

No runtime locks needed.

---

## **7️⃣ Why Rust Forbids Mixed Borrows**

This is illegal:

```
let mut s = String::from("hi");
let r1 = &s;
let r2 = &mut s; // ❌
```

Why?

- reader + writer at same time

- race condition potential

Rust blocks this **at compile time**.

---

## **8️⃣ Borrowing in Functions (CRITICAL)**

```
fn print_len(s: &String) {
    println!("{}", s.len());
}
```

This function:

- does not own s

- cannot modify it

- cannot outlive it

API honesty again.

---

## **9️⃣ Borrowing Is About TIME, Not Just Access**

Important insight:

> **Borrowing is about when access happens, not just who can access.**

A mutable borrow **locks the value** until it ends.

Once the borrow ends:

- owner regains full control

Rust tracks this precisely.

---

## **10️⃣ Why This Prevents Data Races**

In other languages:

- race conditions appear at runtime

In Rust:

- illegal code does not compile

You cannot even _express_ a data race.

That's insane power.

---

## **🔒 Design Invariant (PRINT THIS)**

> **At any moment in time:**

> **either many readers or one writer --- never both.**

This is enforced by the compiler.

---

## **Checkpoint (VERY IMPORTANT)**

Answer cleanly:

1. Why can't you have &T and &mut T at the same time?
2. Why must mutable borrows be exclusive?
3. Why does borrowing make Rust safe without locks?

If you can explain these --- you've crossed the hardest part.

---
