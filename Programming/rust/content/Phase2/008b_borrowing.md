# Rust Borrowing:

## Table of Contents

1. [Memory Fundamentals](#memory-fundamentals)
2. [The Ownership System](#ownership-system)
3. [Borrowing Mechanics](#borrowing-mechanics)
4. [Immutable Borrowing](#immutable-borrowing)
5. [Mutable Borrowing](#mutable-borrowing)

---

## 1. Memory Fundamentals {#memory-fundamentals}

### Computer Memory Layout (For Any Program)

When your program runs, the OS allocates memory divided into segments:

```
┌─────────────────────────────────┐  Higher Addresses (grows down)
│      STACK                      │
│  ┌─────────────────────────────┐│
│  │ Local Variables             ││
│  │ Function Parameters         ││
│  │ Return Addresses            ││
│  └─────────────────────────────┘│
│                                 │
│    [free space]                 │
│                                 │
├─────────────────────────────────┤
│      HEAP                       │
│  ┌─────────────────────────────┐│
│  │ Dynamically Allocated Data  ││
│  │ (grows upward)              ││
│  └─────────────────────────────┘│
├─────────────────────────────────┤
│   BSS (Block Started by Symbol) │ Uninitialized global/static
├─────────────────────────────────┤
│   DATA SEGMENT                  │ Initialized global/static
├─────────────────────────────────┤
│   TEXT SEGMENT (CODE)           │ Read-only, your program
└─────────────────────────────────┘  Lower Addresses (0x0)
```

### The Problem: Ownership Without Borrowing

In languages like C, you manually manage memory:

```c
// C example (NOT Rust)
int* create_user() {
    int user = 42;
    return &user;  // ❌ DANGER: Returning pointer to stack variable
}
// When function returns, user is deallocated
// But caller has pointer to freed memory = Use-After-Free
```

**The Three Core Problems Rust Solves:**

1. **Use-After-Free** - Accessing memory that's been freed
2. **Double-Free** - Freeing same memory twice
3. **Data Races** - Two threads modifying same memory simultaneously

---

## 2. The Ownership System {#ownership-system}

Before borrowing, understand **ownership**. Every value in Rust has ONE owner.

### Rule 1: One Owner Per Value

```rust
let s1 = String::from("user_id");  // s1 owns the String
let s2 = s1;                        // s1 moves to s2, s1 is INVALID now
println!("{}", s1);                 // ❌ Compiler error: s1 moved
```

**Memory visualization:**

```
BEFORE: let s2 = s1;
┌──────────────────────────┐
│ STACK                    │
├──────────────────────────┤
│ s1: [ptr | len | cap]───┐│
│                          ││
│ (other locals)           ││
└──────────────────────────┘│
                            │
          HEAP              │
        ┌─────────────────┐ │
        │ "user_id"       │◄┘
        │ [u s e r _ i d ]│
        └─────────────────┘

AFTER: let s2 = s1;
┌──────────────────────────┐
│ STACK                    │
├──────────────────────────┤
│ s1: [invalid]            │
│ s2: [ptr | len | cap]───┐│
│                          ││
│ (other locals)           ││
└──────────────────────────┘│
                            │
          HEAP              │
        ┌─────────────────┐ │
        │ "user_id"       │◄┘
        │ [u u s e r _ i]│
        └─────────────────┘

Key: The HEAP data isn't copied (expensive).
     The STACK pointer just moved to s2.
     s1 is marked invalid to prevent double-free.
```

**Time Complexity:** O(1) - Just copying a 24-byte pointer/len/capacity
**Space Complexity:** No extra heap allocation

---

## 3. Borrowing Mechanics {#borrowing-mechanics}

**Borrowing is lending a reference to data WITHOUT transferring ownership.**

The data is borrowed temporarily, then the reference is returned to the owner.

### Core Rules (Borrow Checker)

```
1. At any time, you can have:
   - MULTIPLE immutable borrows (&T) OR
   - ONE mutable borrow (&mut T)
   BUT NOT BOTH

2. The borrowed reference must not outlive the data
```

### Borrow Diagram

```
┌─────────────────────────────────────────┐
│ Owner Function                          │
├─────────────────────────────────────────┤
│ let user_id = String::from("usr_001")   │
│                                         │
│ fn process(&user_id)  ← Borrow (loan)   │
│    └─→ prints "usr_001"                 │
│    └─→ returns reference back            │
│                                         │
│ user_id still owned here                │
│ When function ends, user_id deallocated │
└─────────────────────────────────────────┘
```

---

## 4. Immutable Borrowing (&T) {#immutable-borrowing}

### Definition

An **immutable borrow** (`&T`) lets you READ the data but NOT modify it.

### Memory Layout: Immutable Borrow

```
Initial State:
┌─────────────────────────┐
│ STACK                   │
├─────────────────────────┤
│ user_id: [ptr|len|cap]──┐
│                         │
└─────────────────────────┘
         ↓
      HEAP: "usr_001"

When we call: fn_that_reads(&user_id)
┌─────────────────────────┐
│ STACK                   │
├─────────────────────────┤
│ user_id: [ptr|len|cap]──┐
│ ref1: &user_id ────────┐│
│ ref2: &user_id ────────┼┐
│ ref3: &user_id ────────┼┼┐
│                        │││
└─────────────────────────┘││
         ↓                 │
      HEAP: "usr_001"◄─────┴┘

Key Points:
- Multiple immutable refs point to SAME data
- None can modify the data
- All refs must be used before owner moves/deallocates
```

### Code Example

```rust
fn main() {
    let user_id = String::from("usr_001");  // Owner

    // Creating multiple immutable borrows
    let ref1 = &user_id;
    let ref2 = &user_id;
    let ref3 = &user_id;

    println!("ref1: {}", ref1);  // O(1) read
    println!("ref2: {}", ref2);  // O(1) read
    println!("ref3: {}", ref3);  // O(1) read

    // All refs used, now dropped
}
// user_id dropped here, heap freed
```

**Time Complexity:** O(1) per read
**Space Complexity (Stack):** 8 bytes per reference (pointer only, on x64)
**Space Complexity (Heap):** 0 - No new data allocated

---

## 5. Mutable Borrowing (&mut T) {#mutable-borrowing}

### Definition

A **mutable borrow** (`&mut T`) lets you MODIFY the data, but:

- Only ONE mutable borrow at a time
- No immutable borrows while mutable borrow exists

### Memory Layout: Mutable Borrow

```
Initial State:
┌─────────────────────────┐
│ STACK                   │
├─────────────────────────┤
│ user_id: [ptr|len|cap]──┐
│                         │
└─────────────────────────┘
         ↓
      HEAP: "usr_001"

When we do: let mut_ref = &mut user_id;

┌─────────────────────────┐
│ STACK                   │
├─────────────────────────┤
│ user_id: [ptr|len|cap]──┐
│ mut_ref: &mut [ptr]────┐│
│                        ││
│ (No other refs allowed!)││
└─────────────────────────┘│
         ↓                 │
      HEAP: "usr_001"◄─────┘

The mutable ref has EXCLUSIVE access.
It can read AND write.
```

### Code Example

```rust
fn main() {
    let mut user_id = String::from("usr_001");  // Mutable owner

    // Creating mutable borrow
    let mut_ref = &mut user_id;

    // Modifying through mutable reference
    mut_ref.push_str("_admin");  // O(1) amortized

    println!("mut_ref: {}", mut_ref);  // "usr_001_admin"

    // mut_ref dropped here
    // Now user_id is borrowable again

    println!("user_id: {}", user_id);  // "usr_001_admin"
}
```

**Time Complexity:** O(1) amortized for push_str (may reallocate heap)
**Space Complexity (Stack):** 8 bytes for one &mut reference
**Space Complexity (Heap):** May grow heap if String capacity exceeded

### The Borrow Checker Rule In Action

```rust
let mut user_id = String::from("usr_001");

let ref1 = &user_id;           // Immutable borrow #1
let ref2 = &user_id;           // Immutable borrow #2
let mut_ref = &mut user_id;    // ❌ ERROR!
// Can't have mutable borrow while immutable borrows active

// ✓ This works:
let ref1 = &user_id;
let ref2 = &user_id;
// ref1, ref2 dropped here (last use above)

let mut_ref = &mut user_id;    // ✓ OK, no immutable refs active
```

# Rust Borrowing — First Principles

Borrowing solves the problem: **"How do I use a value without taking ownership?"** It's Rust's way of lending access temporarily.

## The Problem (Why Borrowing Exists)

With ownership alone, you'd have to move and return values constantly:

```rust
fn calculate_length(s: String) -> (String, usize) {
    let length = s.len();
    (s, length) // Return ownership back
}

let s1 = String::from("hello");
let (s2, len) = calculate_length(s1); // Tedious!
```

**Solution:** References let you **read or modify data without owning it**.

## Two Types of References

1. **Immutable reference** `&T` — Read-only access
2. **Mutable reference** `&mut T` — Exclusive read-write access

## Immutable References (\&T)

```rust
fn calculate_length(s: &String) -> usize {
    s.len() // Read access
} // s goes out of scope, but doesn't drop the String (doesn't own it)

let s1 = String::from("hello");
let len = calculate_length(&s1); // Borrow s1
println!("{} has length {}", s1, len); // ✅ s1 still valid
```

**Memory layout:**

```
Stack:
s1:  [ptr, len, cap] → Heap: ['h','e','l','l','o']
  ↑
  &s1 (just points to s1's stack location)
```

**Performance:**

- Creating `&s1`: O(1) time, O(1) space (just a pointer, 8 bytes on 64-bit)
- No heap allocation, no copying data
- When reference goes out of scope: Nothing happens (no drop)

## The Borrowing Rules (Compiler-Enforced)

```
Rule 1: You can have EITHER:
   • Any number of immutable references (&T), OR
   • Exactly ONE mutable reference (&mut T)

Rule 2: References must always be valid (no dangling pointers)
```

These rules prevent **data races** at compile time.

## Multiple Immutable References (Allowed)

```rust
let s = String::from("hello");
let r1 = &s;  // ✅
let r2 = &s;  // ✅
let r3 = &s;  // ✅
println!("{} {} {}", r1, r2, r3); // All can read simultaneously
```

**Why safe?** Multiple readers can't corrupt data. Like multiple people reading the same book.

**Memory:**

```
Stack:
s:   [ptr, len, cap] → Heap: ['h','e','l','l','o']
r1:  [ptr to s]
r2:  [ptr to s]
r3:  [ptr to s]
```

Each reference is 8 bytes. **Space: O(1) per reference.**

## Mutable References (\&mut T)

```rust
fn change(s: &mut String) {
    s.push_str(", world"); // Modify the borrowed String
}

let mut s = String::from("hello"); // Must be mut
change(&mut s);
println!("{}", s); // "hello, world"
```

**Key point:** The original variable (`s`) must be declared `mut` to allow mutable borrowing.

## Rule 1 Enforcement: No Mixing

```rust
let mut s = String::from("hello");
let r1 = &s;      // ✅ Immutable borrow
let r2 = &s;      // ✅ Another immutable borrow
let r3 = &mut s;  // ❌ ERROR: Can't borrow as mutable while immutable refs exist
println!("{} {}", r1, r2);
```

**Why?** If `r3` modifies the string (e.g., reallocates), `r1` and `r2` would become dangling pointers.

## Only One Mutable Reference at a Time

```rust
let mut s = String::from("hello");
let r1 = &mut s; // ✅
let r2 = &mut s; // ❌ ERROR: Can't have two mutable borrows
```

**Why?** Prevents data races. Imagine two threads both trying to `push_str` — the string's length/capacity would be inconsistent.

**Analogy:** A mutable reference is like having the only pen to edit a document. Can't have two people with pens simultaneously.

## Non-Lexical Lifetimes (NLL) — Smart Scope

Modern Rust (2018+) ends a reference's borrow when it's **last used**, not at scope end:

```rust
let mut s = String::from("hello");

let r1 = &s;
let r2 = &s;
println!("{} {}", r1, r2); // Last use of r1, r2

let r3 = &mut s; // ✅ OK! r1, r2 no longer active
r3.push_str(" world");
```

**Before NLL (2015 edition):** This would error because `r1`, `r2` lived until the `}`.

## Rule 2: No Dangling References

```rust
fn dangle() -> &String { // ❌ ERROR: Missing lifetime specifier
    let s = String::from("hello");
    &s // s dropped here, returning a reference to freed memory
} // Rust prevents this at compile time
```

**Fix:** Return the owned value:

```rust
fn no_dangle() -> String {
    String::from("hello") // Move ownership to caller
}
```

## Dereferencing (\*) — Following the Pointer

```rust
let mut x = 5;
let r = &mut x;
*r += 1; // Dereference to modify the value
println!("{}", x); // 6
```

**Memory:**

```
Stack:
x: [5]
r: [ptr to x] → dereference → modifies x's location
```

**Performance:** O(1) time to dereference (pointer lookup). O(0) extra space.

## Borrowing in Functions

### Immutable Borrow

```rust
fn print_length(s: &String) {
    println!("Length: {}", s.len()); // Read-only
}

let s = String::from("hello");
print_length(&s); // s still valid after call
```

### Mutable Borrow

```rust
fn append(s: &mut String, suffix: &str) {
    s.push_str(suffix);
}

let mut s = String::from("hello");
append(&mut s, " world");
// s is "hello world" now
```

## Slices — Borrowing Part of Data

Slices are references to a contiguous sequence:

```rust
let s = String::from("hello world");
let hello = &s[0..5];   // Immutable slice
let world = &s[6..11];
```

**Memory:**

```
Stack:
s:     [ptr, len=11, cap=11] → Heap: ['h','e','l','l','o',' ','w','o','r','l','d']
hello: [ptr to s[0], len=5]
world: [ptr to s[6], len=5]
```

**Slice type:** `&str` (for strings) or `&[T]` (for arrays/vecs).

**Performance:**

- Creating slice: O(1) (just pointer + length)
- Space: 16 bytes (8 for ptr, 8 for len)

## Common Patterns

### 1. Read-only operations (use \&T)

```rust
fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes();
    for (i, &byte) in bytes.iter().enumerate() {
        if byte == b' ' {
            return &s[0..i];
        }
    }
    &s[..]
}
```

### 2. Modifying in place (use \&mut T)

```rust
fn clear(v: &mut Vec<i32>) {
    v.clear(); // Modifies the vector
}
```

### 3. Ownership when needed

```rust
fn consume(s: String) {
    // Takes ownership, s dropped at end
}
```

## Performance Characteristics

| Operation        | Time | Space    | Notes                |
| :--------------- | :--- | :------- | :------------------- |
| Create `&T`      | O(1) | 8 bytes  | Just a pointer       |
| Create `&mut T`  | O(1) | 8 bytes  | Pointer              |
| Dereference `*r` | O(1) | O(0)     | Direct memory access |
| Slice `&s[a..b]` | O(1) | 16 bytes | Pointer + length     |
| Borrow check     | O(0) | O(0)     | Compile-time only    |

**Key insight:** Borrowing has **zero runtime cost**. All safety checks happen at compile time.

## Common Pitfalls

### 1. Holding a borrow too long

```rust
let mut v = vec![1, 2, 3];
let first = &v[0]; // Immutable borrow
v.push(4);         // ❌ Can't mutate while borrowed
println!("{}", first);
```

**Why?** `push` might reallocate the vector, invalidating `first`.

**Fix:** Narrow the borrow scope:

```rust
let mut v = vec![1, 2, 3];
{
    let first = &v[0];
    println!("{}", first);
} // first dropped here
v.push(4); // ✅ OK now
```

### 2. Returning borrowed data

```rust
fn get_first(v: &Vec<i32>) -> &i32 {
    &v[0] // ✅ Lifetime tied to input
}

let v = vec![1, 2, 3];
let first = get_first(&v); // first's lifetime ≤ v's lifetime
```

This works because the returned reference's lifetime is **connected** to the input's lifetime (lifetimes concept, next topic).

### 3. Borrowing in loops

```rust
let mut v = vec![1, 2, 3];
for i in &v {          // Immutable borrow
    println!("{}", i);
}
v.push(4); // ✅ OK, borrow ended

for i in &mut v {      // Mutable borrow
    *i += 1;
}
```

## Mental Model

Think of borrowing as **library rules**:

1. **Immutable borrow (`&T`)**: Checkout a book to read. Many people can read copies simultaneously, but no one can edit.
2. **Mutable borrow (`&mut T`)**: Check out the only editable manuscript. You have exclusive access to make changes, no one else can read or write until you return it.
3. **Compiler as librarian**: Enforces rules at checkout time (compile time), preventing conflicts.

## Why This Matters

```rust
async fn auth_me(
    State(pool): State<PgPool>,     // Shared read-only pool (&PgPool internally)
    Extension(user_id): Extension<Uuid>,
) -> Result<Json<User>, ApiError> {
    let user = sqlx::query_as!(User, "SELECT * FROM users WHERE id = $1", user_id)
        .fetch_one(&pool) // Borrows pool, doesn't consume it
        .await?;
    Ok(Json(user))
}
```

Each request borrows `pool` without moving it, allowing thousands of concurrent requests.

---
