1. Actual memory addresses
2. What lives on stack
3. What lives on heap
4. What the pointer points to

This is how I would draw future diagrams.

---

# Example 1: `Box::new(5)`

```rust
let b = Box::new(5);
```

```text
Stack Memory                               Heap Memory
┌─────────────────────────┐           ┌─────────────────────┐
│ 0x7ffe_1000: b          │           │ 0x6000_4000: 5      │
│ ┌─────────────────────┐ │           └─────────────────────┘
│ │ ptr: 0x6000_4000    │ ├───────────────▶
│ └─────────────────────┘ │
└─────────────────────────┘
```

---

# Example 2: String

```rust
let name = String::from("Koel");
```

```text
Stack Memory                               Heap Memory
┌────────────────────────┐            ┌─────────────────────────┐
│ 0x7ffe_abc130: name    │            │ 0x6000_4000: 'K' 0x4B  │
│ ┌────────────────────┐ │            │ 0x6000_4001: 'o' 0x6F  │
│ │ ptr: 0x6000_4000   │ ├───────────▶│ 0x6000_4002: 'e' 0x65  │
│ │ len: 4             │ │            │ 0x6000_4003: 'l' 0x6C  │
│ │ capacity: 4        │ │            └─────────────────────────┘
│ └────────────────────┘ │
└────────────────────────┘
```

---

# Example 3: Move Ownership

```rust
let s1 = String::from("Koel");
let s2 = s1;
```

After the move:

```text
Stack Memory                               Heap Memory
┌────────────────────────┐            ┌─────────────────────────┐
│ 0x7ffe_abc130: s1      │            │ 0x6000_4000: 'K'       │
│ moved / invalid        │            │ 0x6000_4001: 'o'       │
└────────────────────────┘            │ 0x6000_4002: 'e'       │
                                      │ 0x6000_4003: 'l'       │
┌────────────────────────┐            └─────────────────────────┘
│ 0x7ffe_abc150: s2      │
│ ┌────────────────────┐ │
│ │ ptr: 0x6000_4000   │ ├──────────────▶
│ │ len: 4             │ │
│ │ capacity: 4        │ │
│ └────────────────────┘ │
└────────────────────────┘
```

---

# Example 4: Function Call

```rust
let s = String::from("Koel");
print_name(s);
```

Before call:

```text
Stack Memory                               Heap Memory
┌────────────────────────┐            ┌─────────────────────────┐
│ main                   │            │ 'K'                    │
│ s                      │───────────▶│ 'o'                    │
└────────────────────────┘            │ 'e'                    │
                                      │ 'l'                    │
                                      └─────────────────────────┘
```

---

Inside function:

```rust
fn print_name(name: String)
```

Ownership moved:

```text
Stack Memory                               Heap Memory
┌────────────────────────┐
│ main                   │
│ s (invalid)            │
└────────────────────────┘

┌────────────────────────┐            ┌─────────────────────────┐
│ print_name             │            │ 'K'                    │
│ name                   │───────────▶│ 'o'                    │
└────────────────────────┘            │ 'e'                    │
                                      │ 'l'                    │
                                      └─────────────────────────┘
```

---

# Example 5: Drop

When function ends:

```text
Stack Memory                               Heap Memory
┌────────────────────────┐
│ main                   │
│ s (invalid)            │
└────────────────────────┘


Heap Allocation Freed
─────────────────────

0x6000_4000 - released
0x6000_4001 - released
0x6000_4002 - released
0x6000_4003 - released
```

---

# Example 6: Your `make_and_drop`

```rust
fn main() {
    let a_num = 4;
    make_and_drop();
}

fn make_and_drop() {
    let a_box = Box::new(5);
}
```

### L2

```text
Stack Memory                               Heap Memory

┌────────────────────────┐
│ main                   │
│ a_num = 4              │
└────────────────────────┘


┌────────────────────────┐            ┌─────────────────────────┐
│ make_and_drop          │            │ 0x6000_5000: 5         │
│ a_box                  │            └─────────────────────────┘
│ ┌────────────────────┐ │
│ │ ptr: 0x6000_5000   │ ├──────────────▶
│ └────────────────────┘ │
└────────────────────────┘
```

---

### L3

Function returns.

```text
Stack Memory                               Heap Memory

┌────────────────────────┐
│ main                   │
│ a_num = 4              │
└────────────────────────┘


Heap Allocation Freed
─────────────────────

0x6000_5000 released
```

---

This is actually much closer to how a systems programmer mentally visualizes Rust.

For the rest of your Rust journey (ownership, borrowing, references, lifetimes, `Vec`, `String`, `HashMap`, `Arc`, `Rc`, async Rust), this stack/heap address style will make the concepts significantly easier to understand than the simplified `b ---> 5` diagrams from the book.

Let's explain it using the stack/heap diagrams you like.

---

# What Most Beginners Think

After learning `Box`, many people think:

```text id="slps9w"
Heap Memory
=
Box
```

Like:

```rust id="y7e0fw"
let b = Box::new(5);
```

```text id="aqlr41"
Stack Memory                    Heap Memory
┌───────────────┐              ┌─────────┐
│ b             │─────────────▶│    5    │
└───────────────┘              └─────────┘
```

Then they see:

```rust id="xgzl95"
let s = String::from("Koel");
```

and wonder:

```text id="26f44x"
Where is Box?
```

---

# The Truth

There is NO Box here:

```rust id="n00c8y"
let s = String::from("Koel");
```

But the memory looks similar:

```text id="u4ixnn"
Stack Memory                        Heap Memory
┌────────────────────────┐       ┌─────────────────────────┐
│ s                      │       │ 'K'                    │
│ ptr ───────────────────┼──────▶│ 'o'                    │
│ len = 4               │       │ 'e'                    │
│ cap = 4               │       │ 'l'                    │
└────────────────────────┘       └─────────────────────────┘
```

Notice:

```text id="uqkrrv"
Stack owns pointer
Heap owns actual data
```

Exactly like Box.

---

# What Is Actually Happening?

Internally:

```text id="22ltte"
String
   │
   ▼
Vec<u8>
   │
   ▼
RawVec<u8>
   │
   ▼
Heap Memory
```

Think of it like layers.

---

# Analogy: Delivery Company

Imagine:

```text id="itqf6i"
String
```

is the CEO.

Under it:

```text id="9cpr7r"
Vec
```

is a manager.

Under it:

```text id="zkrn9x"
RawVec
```

is the warehouse worker.

The warehouse worker actually manages the storage.

---

# Why Does The Book Mention RawVec?

Because eventually you might think:

```text id="ms8o2g"
Ownership only applies to Box
```

Wrong.

Ownership applies to:

```text id="t8f6v4"
Anything that owns heap memory
```

---

# Box

```rust id="w8vutw"
let b = Box::new(5);
```

```text id="ibevk5"
Stack Memory                    Heap Memory
┌───────────────┐              ┌─────────┐
│ b             │─────────────▶│    5    │
└───────────────┘              └─────────┘
```

---

# String

```rust id="cl1npw"
let s = String::from("Koel");
```

```text id="h6hd50"
Stack Memory                        Heap Memory
┌────────────────────────┐       ┌─────────────────────────┐
│ s                      │       │ K o e l               │
│ ptr ───────────────────┼──────▶│                         │
│ len = 4               │       └─────────────────────────┘
│ cap = 4               │
└────────────────────────┘
```

---

# Vec

```rust id="x6ej4h"
let v = vec![1,2,3];
```

```text id="pd6m4l"
Stack Memory                        Heap Memory
┌────────────────────────┐       ┌─────────────────────────┐
│ v                      │       │ 1  2  3               │
│ ptr ───────────────────┼──────▶│                         │
│ len = 3               │       └─────────────────────────┘
│ cap = 3               │
└────────────────────────┘
```

---

# Different Types, Same Ownership

Rust doesn't care whether the owner is:

```rust id="d8vnvq"
Box<i32>
String
Vec<i32>
HashMap<String, i32>
```

Rust only cares:

```text id="8iv27l"
Who owns this heap allocation?
```

---

# Why Does Move Work On String?

Because String owns heap memory.

```rust id="cvvqq8"
let s1 = String::from("Koel");
let s2 = s1;
```

Rust does:

```text id="8tzj5l"
s1 loses ownership

s2 becomes owner
```

Memory:

```text id="uvbhq4"
Stack Memory                        Heap Memory

┌───────────────┐
│ s1 INVALID    │
└───────────────┘


┌───────────────┐               ┌─────────────────┐
│ s2            │──────────────▶│ K o e l         │
└───────────────┘               └─────────────────┘
```

Same ownership rule as `Box`.

---

# What The Footnote Is Really Saying

The footnote is basically saying:

> "Don't get attached to the `Box` type. Box is just the simplest example. `String`, `Vec`, and many other types are not literally Box, but they behave the same way because they own heap memory."

---

# The Mental Model I Use

Whenever you see:

```rust id="3kvgff"
String
Vec
HashMap
Box
```

don't think:

```text id="zjlwmh"
What exact type is this?
```

Think:

```text id="7hdu9o"
Does this own heap memory?
```

If YES:

```text id="jz6wya"
Move applies
Drop applies
Ownership applies
Clone creates new heap data
```

That's the entire point of that footnote.
