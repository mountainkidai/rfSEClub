## **1️⃣ First-Principle Truth**

> **A value exists only inside its scope.**

> **Its lifetime is exactly the time its scope is active.**

Rust does not guess.

Rust does not extend lifetimes "because it seems fine".

---

## **2️⃣ What Is Scope?**

Scope is **just a pair of braces** {}.

```
{
    let x = 10;
    // x is valid here
}
// x is dead here
```

At the closing brace:

- x is destroyed

- if x owns heap data → heap is freed

- references to x become invalid

No exceptions.

---

## **3️⃣ Lifetime = Duration of Validity**

Lifetime answers one question:

> **For how long is this value safe to use?**

In Rust:

- lifetime starts at creation

- lifetime ends at scope exit

This is enforced **at compile time**.

---

## **4️⃣ Stack Frame Mental Model**

Each function call creates a **stack frame**.

```
fn main() {
    let a = 5;
    foo();
}

fn foo() {
    let b = 10;
}
```

Call order:

1. main frame created
2. a lives
3. foo frame created
4. b lives
5. foo ends → b dies
6. main ends → a dies
   Perfectly nested. No overlap confusion.

---

## **5️⃣ Why Rust Hates Dangling References**

Classic C bug:

```
int* get() {
    int x = 5;
    return &x;
}
```

Returns address of **dead memory**.

Rust says:

> "No."

Rust refuses to compile anything that allows:

- reference outliving its owner

- pointer to freed memory

This is the core reason lifetimes exist.

---

## **6️⃣ Rust Example (Safe by Design)**

```
fn main() {
    let r;
    {
        let x = 5;
        r = &x;
    }
    println!("{}", r); // ❌
}
```

Why rejected?

- x dies at inner scope end

- r would point to nothing

Rust blocks this **before runtime**.

---

## **7️⃣ Important Insight (THIS IS BIG)**

> **Lifetimes are not about syntax.**

> **They are about preventing time travel.**

A reference cannot travel to the future

where its owner no longer exists.

---

## **8️⃣ Scope vs Lifetime (Subtle but Important)**

Usually:

- scope == lifetime

But later you'll see:

- borrows can end **before** scope ends

- Rust tracks _actual usage_, not braces

This is called **non-lexical lifetimes**.

We'll get there.

---

## **9️⃣ Why This Makes Rust Hard (Initially)**

Other languages:

- let you write bad code

- crash later

Rust:

- stops you immediately

- forces clarity upfront

Pain now → peace forever.

---

## **10️⃣ Design Invariant (PRINT THIS)**

> **Nothing may outlive its owner.**

> **If it tries, the compiler says no.**

This rule alone kills entire bug classes.

---

## **Checkpoint (You Must Answer)**

1. Why can't a reference outlive the value it points to?

2. What exactly happens at } in Rust?

3. Why does Rust reject code that "might work"?

---
