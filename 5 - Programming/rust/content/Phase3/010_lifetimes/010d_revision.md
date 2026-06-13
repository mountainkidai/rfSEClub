In Rust, the “three” you keep bumping into are **Move**, `Copy`, and `Clone`: move transfers ownership, `Copy` duplicates automatically (trivially), and `Clone` duplicates only when you explicitly ask.

## 1) Move (default)

For most types, `let b = a;` _moves_ `a` into `b`, so `a` can’t be used afterward (ownership transferred).[^1]
Example (this fails after the move):

```rust
let a = String::from("hi");
let b = a;        // move
// println!("{a}"); // error: a was moved
```

## 2) Copy (automatic duplicate)

If a type is `Copy`, Rust duplicates it automatically on assignment / passing to a function, and the old variable still works.
This duplication is basically a raw “bitwise/memory copy” (no custom code runs), so it’s limited to types where that’s always safe (like integers, or a struct of integers).

```rust
fn main() {
let mut a: i32 = 5;
let b = a;        // copy
println!("{a} {b}"); // 5 5
a = 6;
println!("after {a} {b}"); // 6 5

#[derive(Copy)]
struct Point { x: i32, y: i32 }
let p1 = Point { x: 1, y: 2 };
let p2 = p1;      // copy
println!("{} {}", p1.x, p2.x);
}
```

### You are NOT calling .clone() anywhere. #[derive(Copy, Clone)] makes Rust treat let p2 = p1 as an automatic copy, not a move.

```rust
#[derive(Copy, Clone)]  // ← This derives BOTH traits automatically
struct Point { x: i32, y: i32 }
let p1 = Point { x: 1, y: 2 };
let p2 = p1;      // This works because of Copy, NOT because you're calling .clone()
```

### Without the derive:

```rust
struct Point { x: i32, y: i32 } // No Copy trait
let p1 = Point { x: 1, y: 2 };
let p2 = p1; // ❌ ERROR: p1 moved into p2, can't use p1 anymore
```

### Remember

✅ You're not writing/using .clone() - Copy makes assignment automatically duplicate

✅ Without Copy, structs always move by default on assignment

## 3) Clone (explicit duplicate)

`Clone` means the type provides `.clone()` to make a duplicate, and this can run arbitrary code (so it may be cheap or expensive).
Example (works because you asked for a duplicate):

```rust
let a = String::from("hi");
let b = a.clone();   // explicit duplicate
println!("{a} {b}");
```

​

## One-line mental model

Move = “hand it over”; Copy = “photocopy automatically”; Clone = “photocopy, but you must press the button (and it might cost time/memory).”
