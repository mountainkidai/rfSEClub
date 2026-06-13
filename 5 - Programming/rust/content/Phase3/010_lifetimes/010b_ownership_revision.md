# Rust Ownership — First Principles

Ownership is Rust's **memory management strategy** that guarantees memory safety without garbage collection. Let me build this from the ground up.

## The Problem (Why Ownership Exists)

Every program needs to manage memory. Three traditional approaches:

1. **Manual (C/C++)**: You call `malloc`/`free`. Fast but error-prone (use-after-free, double-free, leaks).
2. **Garbage Collection (Java/Python)**: Runtime tracks objects and frees unused ones. Safe but unpredictable pauses + overhead.
3. **Rust's Ownership**: Compiler enforces rules at compile-time. Zero runtime cost, guaranteed safety.

## The Three Rules (Core Contract)

```
1. Each value has exactly ONE owner (a variable).
2. When the owner goes out of scope, the value is dropped (freed).
3. You can transfer ownership (move) or lend it (borrow).
```

## Rule 1: Each Value Has One Owner

```rust
let s1 = String::from("hello"); // s1 owns the heap string
let s2 = s1;                    // ownership MOVES to s2
// println!("{}", s1);          // ❌ Compile error: s1 no longer valid
```

**What happened in memory:**

```
Before move:
Stack:     s1 → [ptr, len, cap] → Heap: ['h','e','l','l','o']

After move:
Stack:     s2 → [ptr, len, cap] → Heap: ['h','e','l','l','o']
           s1   (invalidated, can't use)
```

**Why not copy the heap data?**

- **Performance**: Copying "hello" is cheap, but imagine a 1GB string. Rust defaults to moving (pointer copy, O(1)) instead of deep copy (O(n)).
- **Memory safety**: If both `s1` and `s2` pointed to the same heap memory, when `s1` goes out of scope, it would free the memory. Then `s2` would be a dangling pointer (use-after-free bug). Rust prevents this by invalidating `s1`.

## Rule 2: Automatic Cleanup (Drop)

```rust
{
    let s = String::from("hello"); // s owns heap memory
    // use s
} // s goes out of scope → Rust calls drop(s) → heap freed automatically
```

**Memory timeline:**

```
1. String::from allocates heap:     Heap: ['h','e','l','l','o']
2. Scope ends → Rust inserts:       drop(s)
3. drop deallocates heap:           Heap: [freed]
```

**Time complexity**: O(1) for drop call insertion (compile-time). The actual deallocation depends on the allocator, but typically O(1) for fixed-size blocks.

**Space complexity**: Zero runtime overhead. No reference counting, no GC metadata.

## Rule 3: Move vs Copy Semantics

### Types That Copy (Implement `Copy` trait)

```rust
let x = 5;       // i32 is Copy
let y = x;       // x is COPIED (bitwise), both valid
println!("{} {}", x, y); // ✅ Both work
```

**Why?** Stack-only types (integers, bool, char, tuples of Copy types) are cheap to copy (fixed size, no heap). Rust allows implicit copy for these.

### Types That Move (Don't implement `Copy`)

```rust
let s1 = String::from("hello"); // Heap-allocated
let s2 = s1;                    // MOVED (pointer copied, s1 invalidated)
```

**Why?** Heap types (String, Vec, Box) own heap memory. If we allowed copy, we'd have two owners → double-free on scope exit.

## Deep Dive: Memory Layout

### Stack vs Heap

```rust
let x: i32 = 42;              // Stack: [42] (4 bytes)
let s = String::from("rust"); // Stack: [ptr, len=4, cap=4] → Heap: ['r','u','s','t']
```

**Stack (s's metadata):**

```
| ptr (8 bytes) | len (8 bytes) | capacity (8 bytes) | = 24 bytes on 64-bit
```

**Heap (actual string data):**

```
| 'r' | 'u' | 's' | 't' | = 4 bytes
```

When you move `s`, only the 24-byte stack struct is copied. The heap stays put. **O(1) time, O(1) space** regardless of string length.

## Clone: Explicit Deep Copy

```rust
let s1 = String::from("expensive");
let s2 = s1.clone(); // Explicit heap copy
println!("{} {}", s1, s2); // ✅ Both valid, separate heap allocations
```

**Cost:** O(n) time where n = string length. O(n) space for new heap allocation.

## Functions Transfer Ownership

```rust
fn take_ownership(s: String) {
    println!("{}", s);
} // s dropped here

let s = String::from("hello");
take_ownership(s); // s MOVED into function
// println!("{}", s); // ❌ s is gone
```

**Why?** Passing `s` to the function moves ownership. When the function ends, it drops `s`. This prevents use-after-free.

## Return Values Transfer Ownership Back

```rust
fn give_ownership() -> String {
    String::from("yours")
} // Moves return value to caller

let s = give_ownership(); // s now owns the string
```

## Performance Characteristics

| Operation       | Time   | Space | Notes                                     |
| :-------------- | :----- | :---- | :---------------------------------------- |
| Move (assign)   | O(1)   | O(1)  | Copy stack bytes only                     |
| Drop            | O(1)\* | O(0)  | \*Depends on type; String dealloc is O(1) |
| Clone           | O(n)   | O(n)  | Deep copy heap data                       |
| Copy (i32, etc) | O(1)   | O(1)  | Bitwise copy                              |

## Common Pitfalls

### 1. Move in loop

```rust
let s = String::from("hello");
for _ in 0..3 {
    println!("{}", s); // ✅ Reading is fine (immutable borrow, covered next)
}

let v = vec![1, 2, 3];
for _ in 0..2 {
    let x = v; // ❌ Move on first iteration, v invalid on second
}
```

**Fix:** Borrow instead of move (next concept).

### 2. Partially moved structs

```rust
struct Person {
    name: String,
    age: i32,
}

let p = Person { name: String::from("Alice"), age: 30 };
let n = p.name; // Move name out
// println!("{}", p.age); // ❌ Can't use p after partial move
```

**Why?** Rust considers the entire struct moved if any non-Copy field moves.

## Mental Model

Think of ownership as a **single key** to a resource:

- Only one variable holds the key at a time.
- When the key-holder goes out of scope, the resource is destroyed.
- You can hand the key to someone else (move), but you can't use the resource anymore.
- You can make a photocopy of the resource (clone), giving someone a separate key to a duplicate resource.

---
