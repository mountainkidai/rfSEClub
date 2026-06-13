## **BORROW SCOPES & REBORROWING**

### **(Why Rust "lets go" earlier than braces)**

This explains **90% of "why does this compile?" questions**.

---

## **1️⃣ First-Principle Truth**

> **A borrow lasts only as long as it is actually used --- not the whole scope.**

Rust tracks **usage**, not braces.

This is called **Non-Lexical Lifetimes (NLL)**.

---

## **2️⃣ The Old (Wrong) Mental Model**

Most beginners think:

> "If I borrow here, it lasts until the closing }"

That was true in early Rust.

It is **not true anymore**.

Rust is smarter now.

---

## **3️⃣ Example: Borrow Ends Early**

```
let mut s = String::from("hello");

let r = &s;
println!("{}", r); // last use of r

s.push_str("!"); // ✅ allowed
```

Why is this allowed?

Because:

- immutable borrow r is no longer used

- borrow **ends immediately after last use**

- mutable borrow can begin

Rust reasons in time, not blocks.

---

## **4️⃣ What Is a Borrow Scope?**

A borrow scope is:

> the span of code where a reference is actually used

Not where it is declared.

This is subtle but powerful.

---

## **5️⃣ Reborrowing (Very Important)**

You can borrow from a borrow.

```rust
let mut s = String::from("hi");
let r1 = &mut s;        // r1 owns the mutable borrow of s
let r2 = &mut *r1;      // r2 = temporary reborrow (r1 paused)
r2.push_str("!");       // r2 modifies s
// r2 ends here, r1 resumes
println!("{r1}");       // "hi!" - r1 works again

```

### What happens step-by-step

```text
r1 = &mut s → r1 has exclusive mutable access to s

r2 = &mut *r1 →

*r1 derefs to get s

&mut creates short-lived child borrow

r1 is suspended during r2's life

r2.push_str("!") → modifies s through the child borrow

r2 ends → r1 resumes control
```

What happened?

- r1 borrows s

- r2 borrows through r1

- r1 is temporarily suspended

- r2 has exclusive access

This is called **reborrowing**.

---

## **6️⃣ Why Reborrowing Exists**

Without reborrowing:

- passing &mut to functions would be impossible

- nested access would break

- APIs would be unusable

Reborrowing allows:

- temporary delegation

- strict control

- safe nesting

---

## **7️⃣ Borrowing in Functions (Time-Based)**

```
fn add_exclamation(s: &mut String) {
    s.push_str("!");
}
```

When calling:

```
let mut s = String::from("hi");
add_exclamation(&mut s);
println!("{}", s); // ✅
```

Why?

- mutable borrow exists **only during function call**

- ends at return

- ownership restored

Again: time, not braces.

---

## **8️⃣ Common Confusion (Clear This Now)**

❌ "Mutable borrow blocks forever"

✅ Mutable borrow blocks **until last use**

❌ "References live until scope ends"

✅ References live until **last use**

This mental correction is huge.

---

## **9️⃣ Why This Makes Rust Ergonomic**

Without NLL:

- Rust would be painful

- too restrictive

- awkward code

With NLL:

- still safe

- much more flexible

- feels natural

Rust is strict **but fair**.

---

## **🔒 Design Invariant (PRINT THIS)**

> **Access rules apply only while access is needed --- no longer.**

This keeps safety **without unnecessary restriction**.

---

## **Checkpoint (CRITICAL)**

Answer these confidently:

1. When does a borrow actually end?
2. What is reborrowing and why is it needed?
3. Why can Rust allow mutation after an immutable borrow?

---
