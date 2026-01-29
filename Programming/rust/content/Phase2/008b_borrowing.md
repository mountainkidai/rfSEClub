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
