## **OWNERSHIP RULE & MOVE SEMANTICS**

This is **the law of Rust**.

Break it → code does not exist.

---

## **1️⃣ The Ownership Rule (The Law)**

> **Each value in Rust has exactly ONE owner at any time.**

Not zero.

Not two.

Exactly one.

This is not a guideline.

This is enforced by the compiler.

---

## **2️⃣ What "Owner" Actually Means**

The owner is the variable that:

- decides the lifetime

- is responsible for cleanup

- controls mutation

When the owner dies:

- value dies

- heap memory freed (if any)

Ownership = **responsibility**.

---

## **3️⃣ Move Semantics (Ownership Transfer)**

Example:

```
let a = String::from("hello");
let b = a;
```

What happened?

- Ownership of heap data moved from a → b

- a is now **invalid**

- Only b can be used

Rust treats this as:

> "You handed over the keys.

> You no longer own the house."

---

## **4️⃣ Why Rust Does This (No Compromise)**

If Rust allowed both a and b:

- both would free the same heap memory

- double free

- undefined behavior

Rust chooses:

> "No ambiguity. Ever."

So it makes moves **explicit and final**.

---

## **5️⃣ Visual Model (Burn This In)**

Before move:

```
a ──▶ heap("hello")
```

After move:

```
a ✖️
b ──▶ heap("hello")
```

a is not "empty".

It is **invalid**.

---

## **6️⃣ Using a Moved Value Is a Compile-Time Error**

```
let a = String::from("hi");
let b = a;
println!("{}", a); // ❌
```

Rust says:

> "Value used after move."

This is **not negotiable**.

---

## **7️⃣ Why Moves Are Cheap**

Important insight:

- Only the **pointer** moves

- Heap data stays where it is

- No copy of bytes

So:

- moves are fast

- safety is preserved

Rust gives you safety **without performance cost**.

---

## **8️⃣ Function Calls ALSO Move**

This is where people get shocked.

```
fn consume(s: String) {
    println!("{}", s);
}

let a = String::from("hello");
consume(a);
// a is dead here
```

Passing by value = ownership transfer.

This forces you to decide:

- does the function **own** the data?

- or just **borrow** it?

There is no accidental ownership.

---

## **9️⃣ Why This Makes APIs Honest**

Rust APIs cannot lie.

If a function takes String:

- it consumes it

If it takes &String or &str:

- it borrows it

You know behavior **by reading the signature**.

That's rare in programming languages.

---

## **10️⃣ Design Invariant (PRINT THIS)**

> **Ownership moves are explicit, final, and cheap.**

> **There is never more than one owner.**

This is the foundation of Rust safety.

---

## **Checkpoint (Critical)**

Answer these **without hesitation**:

1. Why does String move but i32 copy?
2. What exactly becomes invalid after a move?
3. Why is moving cheap despite heap data?
   If these are crystal clear → you're doing it right.

---
