Here’s a small Rust program that shows how memory is used when it runs, plus a simple explanation of stack vs heap.

### Example program

```rust
fn main() {
    let a = 42;                     // i32 on the stack
    let b = Box::new(84);           // i32 on the heap, `b` is a pointer on stack

    println!("a = {}, *b = {}", a, *b);

    let s = String::from("hello");  // String data on heap, `s` on stack
    let t = s;                      // `s` moves to `t`; heap data stays, pointer moves

    println!("t = {}", t);
} // `t` and `b` go out of scope → Rust drops heap data automatically
```

1.  Disk to RAM (load phase)
    - Your Rust binary file lives on disk. OS loads it into RAM (text/code + data segments) when you run ./program.

2.  Stack & Heap in RAM
    - Stack: Local vars (let a = 42;), pointers (Box), function frames auto-allocated in RAM's stack region.
    - Heap: Dynamic data (String, Vec) allocated in RAM's heap region via Rust allocator.

3.  Execution: Cache → Registers
    - CPU executes from RAM, but:
    - Cache: Hardware auto-copies chunks (~64 bytes) from RAM (stack/heap/code) into L1/L2 cache on first access. Later accesses hit cache (fast).

    - Registers: CPU loads tiny values (e.g., 42, addresses) from cache into registers for actual computation (add, multiply, etc.).

    - Flow: Disk → RAM (stack/heap) → Cache (on-demand) → Registers (per instruction).

Heap: Dynamic data (String, Vec) allocated in RAM's heap region via Rust allocator.

### How memory is used step‑by‑step

1. **Stack allocation (fast, automatic)**
   - `a` and `b` are **local variables in `main`** → they live on the **stack**.
   - `a` stores the value `42` directly in stack memory.
   - `b` stores a pointer (address) that points into the **heap** where the `84` is stored.[^2][^9]
2. **Heap allocation (dynamic, owned)**
   - `Box::new(84)` allocates space on the **heap** for an `i32` and writes `84` there.
   - The stack variable `b` holds the address of that heap slot.
   - When `b` goes out of scope at the end of `main`, Rust automatically calls `drop` and frees that heap memory.[^3][^7][^2]
3. **String and ownership**
   - `String::from("hello")` allocates a buffer on the **heap** for `"hello"` and stores metadata (pointer, length, capacity) on the **stack** inside `s`.
   - `let t = s;` **moves** ownership: `s` is no longer valid, `t` now owns the heap buffer.
   - When `t` goes out of scope, Rust drops the heap buffer automatically.[^9][^2]

So in this program:

- Stack: `a`, `b`, `t`, and the `String` metadata.
- Heap: the `84` behind `Box::new(84)` and the `"hello"` buffer behind `String::from("hello")`.

When `main` ends, the stack frame is popped, and Rust automatically frees the heap blocks owned by `b` and `t`—no manual `free` needed.

## References

- A reference lets code read or modify data without moving ownership.

- An immutable reference:

```rust
let s = &text;
allows read-only access.
```

- A mutable reference:

```rust
let s = &mut text;
 allows changing the value (only if the variable is declared mutable).

```

### Ownership — The Memory Model That Prevents Double-Free

- The Problem Rust Solves
- In C/C++, you manually manage memory:

```c
int *ptr = malloc(sizeof(int) * 1000);
 // Allocate 1000 ints on HEAP
// ... use ptr ...
free(ptr);                              // YOU must remember to free
free(ptr);                              // OOPS! Double-free bug → crash
```

### Why is this so dangerous?

- From your memory hierarchy understanding:
  - Heap is in RAM (100-200 cycles to access)
  - When you free(ptr), that RAM block goes back to the OS pool
  - If another allocation reuses that address, you're now reading/writing another variable's data

- Rust's solution: Make the compiler prove at compile time that:
  - Each heap allocation has exactly one owner
  - That owner is responsible for freeing it
  - No code can use the allocation after it's freed

### The Core Idea: Ownership is Just Responsibility

- Think of a variable as a responsibility marker:

```rust
fn main() {
    let name = String::from("Alice");  // Ownership of heap memory
    println!("{}", name);              // Use the name
    // name goes out of scope here → Rust calls drop() → free heap memory
}  // ← End of main() scope
   // Memory automatically freed, no leak!
```

```text
STACK (grows down):
┌─────────────────────┐
│ name (24 bytes)     │
│  ├─ ptr: 0x2000    │ ──→ HEAP at 0x2000: ['A','l','i','c','e']
│  ├─ len: 5         │     (100-200 cycles to fetch)
│  └─ capacity: 5    │
└─────────────────────┘

When scope ends:
1. Rust sees: "name is going out of scope"
2. Calls: drop(name) → frees heap block at 0x2000
3. Stack automatically reclaimed (no code needed)
```

### Three Rules of Ownership

1. Rule 1: Each value has exactly one owner

```rust
let s1 = String::from("Rust");  // s1 owns the heap data
let s2 = s1;                     // Ownership MOVES to s2
                                 // s1 is now INVALID

println!("{}", s1);  // ERROR! s1 no longer owns the data
println!("{}", s2);  // OK! s2 owns it
```

- Why? Because two owners would mean two variables both think they should free the same memory (double-free).

## Problems

1. Create a `String` variable `text`, move it to another variable `text2`, and print `text2` (demonstrate ownership transfer)
2. Create a `String`, pass it to a function that takes ownership, and try to use it after the function call (this should fail - comment it out)
3. Create a `String`, create an immutable reference `&text`, print it using the reference, and then print the original string
4. Create a mutable `String`, create a mutable reference, modify the string through the reference, and print the modified value
5. Write a function that takes ownership of a `String` and returns it, then use the returned value in the caller.

```

```

# Understanding Rust's Memory Model and Ownership System: A First-Principles Guide

## Table of Contents

1. [The Memory Hierarchy](#the-memory-hierarchy)
2. [Stack vs Heap](#stack-vs-heap)
3. [Padding and Memory Alignment](#padding-and-memory-alignment)
4. [Cache Lines and CPU Execution](#cache-lines-and-cpu-execution)
5. [Ownership: The Core Concept](#ownership-the-core-concept)
6. [The Three Rules of Ownership](#the-three-rules-of-ownership)
7. [References: Borrowing Without Ownership](#references-borrowing-without-ownership)
8. [Practical Examples with Detailed Walkthrough](#practical-examples-with-detailed-walkthrough)
9. [The Problem Rust Solves: Double-Free Bugs](#the-problem-rust-solves-double-free-bugs)

---

## The Memory Hierarchy

When you run a Rust program, your code travels through several layers of storage, each with different speeds and sizes:

```
Disk (storage - slow, 1000+ ms)
    ↓ [OS loads binary]
RAM (working memory - medium, 50-200 ns)
    ├─ Stack (local variables, fast access)
    ├─ Heap (dynamic data, allocator-managed)
    └─ Code/Data segments
        ↓ [CPU caches on demand]
L3 Cache (shared, ~40-75 cycles)
    ↓
L2 Cache (per-core, ~10-20 cycles)
    ↓
L1 Cache (per-core, ~4 cycles)
    ↓
Registers (CPU, ~1 cycle)
```

**Key insight:** Your program doesn't execute from RAM. The CPU fetches data from RAM into progressively faster caches and registers, then executes instructions on that cached data.

### Step 1: Disk to RAM (Load Phase)

When you run `./program`:

1. The OS reads your compiled Rust binary from disk.
2. It loads the executable into RAM with three main sections:
   - **Text segment:** Your compiled code (read-only).
   - **Data segment:** Static variables initialized at compile-time.
   - **Stack & Heap:** Allocated at runtime for local variables and dynamic data.

### Step 2: Stack and Heap Regions

RAM is divided into manageable regions:

- **Stack:** A fast, structured region where local variables live. It grows _downward_ (in typical x86 architecture) as you enter function scopes and shrinks automatically when you exit.
- **Heap:** A larger, unstructured region where dynamic data lives. Allocation and deallocation are managed by the runtime allocator (not automatic).

### Step 3: Execution: Cache → Registers

Once in RAM, the CPU doesn't directly fetch data from RAM every time. Instead:

1. **On first access**, the CPU loads the data from RAM into cache layers (L3 → L2 → L1).
2. **On subsequent accesses**, it reads from the faster cache (saving 150+ cycles per access).
3. **For computation**, the CPU loads tiny values from cache into registers, where actual arithmetic happens.

**Flow during execution:**

```
Disk → RAM (stack/heap/code) → Cache (on-demand) → Registers (per instruction)
```

---

## Stack vs Heap

### The Stack: Fast and Automatic

The stack is a **Last-In-First-Out (LIFO)** structure that stores local variables.

**Characteristics:**

- **Size:** Known at compile-time.
- **Lifetime:** Automatically freed when the variable goes out of scope.
- **Speed:** Fast because the CPU knows the exact address.
- **Management:** Automatic (no manual `free` needed).

**Example:**

```rust
fn main() {
    let a = 42;              // 4 bytes for i32, stored on stack
    let b = 3.14;            // 8 bytes for f64, stored on stack

    // Both a and b occupy fixed, known positions on the stack
    // When main() ends, both are automatically freed
}
```

**Memory layout during execution:**

```
Stack (grows downward):
┌─────────────────┐
│ b: 3.14 (8B)   │  ← Top of stack
├─────────────────┤
│ a: 42 (4B)     │
├─────────────────┤
│ [padding] (4B) │  ← Alignment to 8-byte boundary
└─────────────────┘
```

### The Heap: Dynamic and Manual (in C) / Automatic (in Rust)

The heap is a large, unstructured memory region for data whose size is unknown at compile-time.

**Characteristics:**

- **Size:** Unknown until runtime.
- **Lifetime:** Must be explicitly freed (C/C++) or automatically managed by ownership (Rust).
- **Speed:** Slower than stack (50-200 cycles to fetch from RAM).
- **Management:** Via allocator; in Rust, managed automatically through ownership.

**Example:**

```rust
fn main() {
    let s = String::from("hello");  // Stack: metadata (24B)
                                     // Heap: actual string data (5B)

    // Stack stores pointer, length, capacity
    // Heap stores the characters
}
```

---

## Padding and Memory Alignment

### What is Padding?

CPUs prefer to read data from **aligned addresses**—addresses that are multiples of 4, 8, 16, etc. This is called **alignment**.

When you have multiple variables of different sizes, the compiler adds unused bytes (padding) between them to ensure each variable starts at an aligned address.

**Why?** A misaligned read requires multiple bus transactions; aligned reads are faster.

### Example: Padding in Action

```rust
struct DataExample {
    a: i32,     // 4 bytes
    b: i64,     // 8 bytes
    c: i16,     // 2 bytes
}
```

Without alignment:

```
Offset 0: [a: i32] (4 bytes)        = bytes 0–3
Offset 4: [b: i64] (8 bytes)        = bytes 4–11  ← Not aligned to 8!
Offset 12: [c: i16] (2 bytes)       = bytes 12–13
Total: 14 bytes
```

With alignment (Rust's default):

```
Offset 0: [a: i32] (4 bytes)        = bytes 0–3
Offset 4: [padding] (4 bytes)       = bytes 4–7   ← Added padding
Offset 8: [b: i64] (8 bytes)        = bytes 8–15  ← Now aligned!
Offset 16: [c: i16] (2 bytes)       = bytes 16–17
Offset 18: [padding] (6 bytes)      = bytes 18–23 ← Struct padding
Total: 24 bytes
```

The struct is now 24 bytes instead of 14, but **faster** because all fields are aligned.

**Key insight:** Padding is **wasted space**, but it's a worthwhile trade-off for performance. The actual data (4 + 8 + 2 = 14 bytes) is still just that; the padding ensures fast access.

### You Don't Control Padding Directly

Rust's default alignment is usually fine. If you need compact memory:

```rust
#[repr(C)]
struct Packed {
    a: i32,
    b: i64,
    c: i16,
}
// Still respects alignment rules
```

---

## Cache Lines and CPU Execution

### What is a Cache Line?

A **cache line** is the smallest unit of data the CPU loads from RAM to cache. On modern processors (x86, ARM), it's typically **64 bytes**.

**Important:** This is a _fetch_ size, not an _allocation_ size.

### How Cache Lines Work

When the CPU accesses a single byte (or any data), it loads the entire 64-byte cache line containing that byte.

**Example:**

```rust
let a = 42;              // 4 bytes
                         // CPU loads 64 bytes (the cache line)
                         // That line includes nearby variables
```

The CPU uses **prefetching**: it guesses you might access nearby data next, so it loads extra bytes in advance.

### Cache Locality and Performance

**Spatial locality:** Data near each other in memory are often accessed together.

- **Good locality:** Multiple small variables in the same cache line → fast.
- **Bad locality (false sharing):** Two variables in the same cache line, used by different CPU cores → slow.

### Cache Line Doesn't Force 64-Byte Allocations

Here's the crucial point: **You don't allocate 64 bytes per variable.**

```rust
let a = 42;              // Allocates 4 bytes (i32)
let b = 3.14;            // Allocates 8 bytes (f64)
let c = 100;             // Allocates 4 bytes (i32)
// Total: 16 bytes (with padding ~24)
```

All three fit in one 64-byte cache line. When the CPU accesses `a`, it loads the line once and gets all three variables "for free."

If you allocate a large `String`:

```rust
let s = String::from("hello world this is a longer string");
// Heap data spans multiple cache lines (64, 128, 192... bytes)
// But Rust only allocates exactly what's needed (~35 bytes)
```

**Summary:**

- Cache lines affect _how fast_ the CPU can access data.
- They don't affect _how much_ memory is allocated.
- Rust optimizes allocation precisely; the CPU handles caching automatically.

---

## Ownership: The Core Concept

### The Problem: Manual Memory Management (C/C++)

In C, you manually allocate and free memory:

```c
int *ptr = malloc(sizeof(int) * 1000);  // Allocate heap memory
// ... use ptr ...
free(ptr);                               // YOU must free
free(ptr);                               // BUG! Double-free → crash
```

Why is double-free dangerous?

1. When you `free(ptr)` the first time, the OS marks that 1000 × 4 = 4000 bytes as available.
2. If another allocation reuses that address, you're now reading/writing another variable's data (memory corruption).
3. When you `free(ptr)` the second time, you're freeing memory you don't own, causing a crash.

### Rust's Solution: Ownership

**Ownership** is a compile-time system that ensures:

1. **Each value has exactly one owner.**
2. **When the owner goes out of scope, the value is dropped (freed).**
3. **No one can use a value after it's been freed.**

This is enforced at **compile-time**, so you get memory safety without runtime overhead.

### Ownership is Responsibility

Think of a variable as a **responsibility marker**:

```rust
fn main() {
    let name = String::from("Alice");  // name owns the heap memory

    println!("{}", name);              // Use the name

    // name goes out of scope here
    // Rust automatically calls drop(name)
    // Heap memory is freed
}  // ← End of main() scope
   // No leak! No manual free! No double-free!
```

**Memory layout:**

```
STACK (grows down):
┌──────────────────────────┐
│ name: String (24 bytes)  │
│  ├─ ptr: 0x2000        │ ──→ HEAP at 0x2000: ['A','l','i','c','e']
│  ├─ len: 5             │     (5 bytes, but CPU loads 64-byte line)
│  └─ capacity: 5        │
└──────────────────────────┘

HEAP (grows up):
0x2000: ['A', 'l', 'i', 'c', 'e', ...unused... 59 more bytes in cache line]
```

When `name` goes out of scope:

1. Rust sees: "name is no longer needed."
2. Calls: `drop(name)` → frees heap block at 0x2000.
3. Stack automatically reclaimed (no code needed).

---

## The Three Rules of Ownership

### Rule 1: Each Value Has Exactly One Owner

```rust
fn main() {
    let s1 = String::from("Rust");  // s1 owns the heap data
    let s2 = s1;                     // Ownership MOVES to s2
                                     // s1 is now INVALID

    println!("{}", s1);  // ❌ ERROR! s1 no longer owns the data
    println!("{}", s2);  // ✅ OK! s2 owns it
}
```

**Why?** If both `s1` and `s2` owned the data, both would try to free it on drop → double-free bug.

**Mental model:**

- Before the move: `s1` holds the responsibility to free.
- After `let s2 = s1;`: Responsibility moves to `s2`.
- `s1` is a "moved-from" variable: it's invalid.

### Rule 2: Ownership Can Move

When you assign a variable or pass it to a function, ownership **moves** (not copied).

```rust
fn take_ownership(s: String) {
    println!("Inside function: {}", s);
    // s is dropped here; heap memory is freed
}

fn main() {
    let s = String::from("hello");
    take_ownership(s);             // Ownership moves to the function

    println!("{}", s);  // ❌ ERROR! s no longer owns the data
}
```

**Why?** The function now owns the `String`. When the function ends, it frees the heap data. Using `s` afterward would access freed memory.

### Rule 3: Copy Types Don't Move

Some types (primitives like `i32`, `f64`, `bool`) are **Copy**. They're copied on assignment, not moved.

```rust
fn main() {
    let a = 42;           // i32 (Copy type)
    let b = a;            // COPIED, not moved

    println!("{}", a);    // ✅ OK! a is still valid
    println!("{}", b);    // ✅ OK! b is valid
}
```

Why? Because these types are small (stack-only) and copying is cheap.

```rust
fn main() {
    let s1 = String::from("Rust");  // String (not Copy)
    let s2 = s1;                     // MOVED

    let x = 42;                      // i32 (Copy)
    let y = x;                       // COPIED

    println!("{}", x);  // ✅ OK
    println!("{}", s1); // ❌ ERROR (s1 was moved)
}
```

---

## References: Borrowing Without Ownership

Sometimes you want to use a value without taking ownership. **References** (borrowing) let you do this.

### Immutable References (&T)

An immutable reference allows **read-only** access to a value without moving ownership.

```rust
fn main() {
    let s = String::from("hello");
    let r1 = &s;  // Borrow s immutably
    let r2 = &s;  // Another immutable borrow (OK, multiple reads are safe)

    println!("{}", r1);  // ✅ OK
    println!("{}", r2);  // ✅ OK
    println!("{}", s);   // ✅ OK, s still owns the data
}
// s is dropped here; heap memory is freed
```

**Memory layout:**

```
STACK:
┌──────────────────┐
│ s: String        │
│  └─ ptr: 0x2000 │
├──────────────────┤
│ r1: &String      │
│  └─ ptr: 0x2000 │  ← Points to s's data
├──────────────────┤
│ r2: &String      │
│  └─ ptr: 0x2000 │  ← Points to s's data
└──────────────────┘
```

**Rule:** You can have multiple immutable references to the same data, but they cannot outlive the original owner.

### Mutable References (&mut T)

A mutable reference allows **read and modify** access to a value without moving ownership.

```rust
fn main() {
    let mut s = String::from("hello");
    let r = &mut s;      // Borrow s mutably

    r.push_str(" world"); // Modify through the reference

    println!("{}", s);   // ✅ OK, prints "hello world"
}
// s is dropped here
```

**Crucial rule:** Only **one** mutable reference can exist at a time (for a given scope).

```rust
fn main() {
    let mut s = String::from("hello");

    let r1 = &mut s;
    let r2 = &mut s;  // ❌ ERROR! Two mutable references

    println!("{}", r1);
}
```

Why? If two pieces of code could mutate the same data, you'd have unpredictable behavior (race conditions).

### References Don't Take Ownership

```rust
fn print_string(s: &String) {  // Takes an immutable reference
    println!("{}", s);
}

fn main() {
    let s = String::from("hello");
    print_string(&s);  // Borrow s; don't move it

    println!("{}", s);  // ✅ OK, s still valid
}
```

**Mental model:**

- **Ownership (move):** "I take full responsibility for freeing this."
- **Immutable borrow (`&`):** "I promise not to modify this; you're still responsible."
- **Mutable borrow (`&mut`):** "I need to modify this temporarily; you're still responsible."

---

## Practical Examples with Detailed Walkthrough

### Example Program: The Memory Journey

```rust
fn main() {
    let a = 42;                     // i32 on the stack
    let b = Box::new(84);           // i32 on the heap, `b` is a pointer on stack

    println!("a = {}, *b = {}", a, *b);

    let s = String::from("hello");  // String data on heap, `s` on stack
    let t = s;                      // `s` moves to `t`; heap data stays, pointer moves

    println!("t = {}", t);
} // `t` and `b` go out of scope → Rust drops heap data automatically
```

### Memory Diagram Step-by-Step

**After line 2 (`let a = 42;`):**

```
STACK:
┌─────────────────┐
│ a: 42 (4 bytes) │
└─────────────────┘

HEAP: (empty)
```

**After line 3 (`let b = Box::new(84);`):**

```
STACK:
┌──────────────────────┐
│ b: 0x1000 (8 bytes)  │  ← Pointer to heap
├──────────────────────┤
│ a: 42 (4 bytes)      │
│ [padding] (4 bytes)  │  ← Alignment
└──────────────────────┘

HEAP:
0x1000: [84] (4 bytes, allocator may round up to ~16+ bytes)
```

**After line 6 (`let s = String::from("hello");`):**

```
STACK:
┌──────────────────────┐
│ s: String (24 bytes) │
│  ├─ ptr: 0x2000    │  ← Points to heap
│  ├─ len: 5         │
│  └─ capacity: 5    │
├──────────────────────┤
│ b: 0x1000 (8 bytes)  │
├──────────────────────┤
│ a: 42 (4 bytes)      │
└──────────────────────┘

HEAP:
0x1000: [84]
0x2000: ['h', 'e', 'l', 'l', 'o'] (5 bytes)
```

**After line 7 (`let t = s;`):**

```
STACK:
┌──────────────────────┐
│ t: String (24 bytes) │
│  ├─ ptr: 0x2000    │  ← Now points to the data
│  ├─ len: 5         │
│  └─ capacity: 5    │
├──────────────────────┤
│ s: [INVALID]         │  ← s is no longer valid
├──────────────────────┤
│ b: 0x1000 (8 bytes)  │
├──────────────────────┤
│ a: 42 (4 bytes)      │
└──────────────────────┘

HEAP:
0x1000: [84]
0x2000: ['h', 'e', 'l', 'l', 'o']
```

**At the end (scope exit):**

1. `t` goes out of scope → `drop(t)` frees heap at 0x2000.
2. `b` goes out of scope → `drop(b)` frees heap at 0x1000.
3. `a` goes out of scope → no heap to free (it's a Copy type on stack).

---

### Problem Set: Hands-On Ownership Practice

#### Problem 1: Demonstrate Ownership Transfer

**Objective:** Create a String, move it to another variable, and print the new owner.

```rust
fn main() {
    let text = String::from("Rust ownership");
    let text2 = text;              // Ownership moves to text2

    // println!("{}", text);       // ❌ Would cause error
    println!("{}", text2);         // ✅ OK, text2 owns the data
}
```

**Expected output:**

```
Rust ownership
```

**What's happening:**

- `text` is created on the stack with a pointer to heap data.
- `let text2 = text;` moves ownership; `text` becomes invalid.
- Printing `text` would fail at compile-time (Rust prevents use-after-move).
- Printing `text2` works because it now owns the data.

#### Problem 2: Function Takes Ownership (Use After Move)

**Objective:** Pass a String to a function and observe that you can't use it afterward.

```rust
fn takes_ownership(s: String) {
    println!("Function received: {}", s);
    // s is dropped here; heap memory is freed
}

fn main() {
    let text = String::from("Hello");
    takes_ownership(text);         // Ownership moves to the function

    // println!("{}", text);       // ❌ ERROR! text is no longer valid
}
```

**Expected output:**

```
Function received: Hello
```

**Compilation error (if uncommented):**

```
error[E0382]: borrow of moved value: `text`
 --> src/main.rs:X:X
  |
  | takes_ownership(text);
  |                 ---- value moved here
  | println!("{}", text);
  |                ^^^^ value borrowed after move
```

**What's happening:**

- `text` owns the heap data.
- Calling `takes_ownership(text)` moves ownership into the function.
- Inside the function, `s` is the owner and frees the data when it exits.
- `text` is now invalid; using it causes a compile-time error.

#### Problem 3: Immutable References (Borrowing Without Moving)

**Objective:** Create a String, borrow it immutably, and use both the reference and the original.

```rust
fn main() {
    let text = String::from("Borrowing is safe");
    let borrowed = &text;          // Immutable borrow

    println!("Original: {}", text);
    println!("Borrowed: {}", borrowed);
}
```

**Expected output:**

```
Original: Borrowing is safe
Borrowed: Borrowing is safe
```

**What's happening:**

- `&text` creates an immutable reference; ownership stays with `text`.
- Both `text` and `borrowed` can be used; both are valid.
- `borrowed` is just a read-only pointer to `text`'s data.
- When the scope ends, `text` is dropped (not `borrowed`, since `borrowed` never owned it).

#### Problem 4: Mutable References (Modifying Through a Reference)

**Objective:** Create a mutable String, modify it through a mutable reference.

```rust
fn main() {
    let mut text = String::from("Hello");
    let borrowed = &mut text;      // Mutable borrow

    borrowed.push_str(" World");   // Modify through the reference

    println!("Modified: {}", text);
}
```

**Expected output:**

```
Modified: Hello World
```

**What's happening:**

- `let mut text` declares that `text` can be mutated.
- `&mut text` creates a mutable reference; `text` still owns the data.
- `borrowed.push_str(...)` modifies the data through the reference.
- When we print `text`, it shows the modified value.
- Only one mutable reference can exist at a time (Rust prevents data races).

#### Problem 5: Return Ownership From a Function

**Objective:** Write a function that takes ownership and returns it, demonstrating ownership transfer back.

```rust
fn return_ownership(s: String) -> String {
    println!("Received: {}", s);
    s  // Return ownership back to the caller
}

fn main() {
    let text = String::from("ownership");
    let text2 = return_ownership(text);  // Function takes and returns ownership

    println!("After function: {}", text2);
    // println!("{}", text);  // ❌ ERROR! text was moved
}
```

**Expected output:**

```
Received: ownership
After function: ownership
```

**What's happening:**

- `return_ownership` takes ownership of `text`.
- Instead of dropping it, the function returns `s` (returning ownership).
- The caller receives ownership back via `text2`.
- `text` is invalid (it was moved into the function), but `text2` is valid.

---

## The Problem Rust Solves: Double-Free Bugs

### Why This Matters

In C/C++, the double-free bug is common and destructive:

```c
#include <stdlib.h>

int main() {
    int *ptr = malloc(sizeof(int) * 1000);  // Allocate 4000 bytes
    // ... use ptr ...
    free(ptr);                              // Free memory
    free(ptr);                              // BUG! Freeing again
    return 0;
}
```

**What happens:**

1. **First `free(ptr)`:** OS marks the 4000-byte block as available.
2. **Second `free(ptr)`:** Heap corrupts because:
   - The OS sees a freed block being freed again.
   - Memory metadata gets corrupted.
   - Subsequent allocations may overwrite critical data.
   - Program crashes unpredictably (sometimes immediately, sometimes later).

### Rust's Guarantee

Rust's ownership system **prevents double-free at compile time**:

```rust
fn main() {
    let data = Box::new(vec![1, 2, 3, 4, 5]);
    drop(data);              // Explicitly free
    // drop(data);           // ❌ ERROR! data already moved/dropped

    println!("{:?}", data);  // ❌ ERROR! Can't use after drop
}
```

**Rust enforces:**

1. **One owner:** Only one variable is responsible for freeing.
2. **No double-free:** Once dropped, the variable is invalid; you can't drop it again.
3. **No use-after-free:** The compiler prevents accessing freed data.

### From Cache Line Perspective

Recall: A heap allocation might span a cache line (64 bytes):

- **In C:** Two pointer variables could both point to the same 64-byte block. When both go out of scope, both try to `free` → corruption of that cache line's metadata.
- **In Rust:** Only one owner is allowed. Ownership transfer ensures one "drop," preventing cache line corruption.

**Summary:**

- Cache line = smallest fetch unit (64 bytes).
- Ownership = compiler-enforced rule that prevents double-free bugs.
- Together, they ensure memory safety without runtime cost.

---

## Key Takeaways

1. **Memory layers:** Disk → RAM (stack/heap) → Cache → Registers.
2. **Stack vs Heap:** Stack is fast/automatic; heap is dynamic/allocator-managed.
3. **Padding:** Unused bytes ensure alignment; trade space for speed.
4. **Cache lines:** CPU fetches 64-byte blocks; doesn't force 64-byte allocations.
5. **Ownership:** Each value has one owner; drop is called automatically.
6. **Three rules:**
   - One owner per value.
   - Ownership can move.
   - Copy types are duplicated (not moved).
7. **References:** Borrow data (&T or &mut T) without moving ownership.
8. **Double-free prevention:** Rust's ownership prevents the dangerous double-free bug that plagues C/C++.

---

## References and Further Reading

- [Rust Book: The Stack and the Heap](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)
- [Rust Book: References and Borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)
- [Cache Line Explanation](https://en.algorithmica.org/hpc/cpu-cache/cache-lines/)
- [Memory Alignment in Rust](https://doc.rust-lang.org/reference/type-layout.html)
