```rs
use std::io;

fn main() {
    let a = [1, 2, 3, 4, 5];

    println!("Please enter an array index.");

    let mut index = String::new();

    io::stdin()
        .read_line(&mut index)
        .expect("Failed to read line");

    let index: usize = index
        .trim()
        .parse()
        .expect("Index entered was not a number");

    let element = a[index];

    println!("The value of the element at index {index} is: {element}");
}
```

You're asking about this:

```rust
[1; 2]
```

The `;` inside an array means:

> **"Create an array by repeating a value N times."**

Syntax:

```rust
[value; length]
```

Examples:

```rust
let a = [1; 2];
```

means:

```rust
let a = [1, 1];
```

---

```rust
let b = [5; 4];
```

means:

```rust
let b = [5, 5, 5, 5];
```

---

```rust
let c = [true; 3];
```

means:

```rust
let c = [true, true, true];
```

---

In your example:

```rust
let t = ([1; 2], [3; 4]);
```

Rust expands it conceptually to:

```rust
let t = ([1, 1], [3, 3, 3, 3]);
```

So:

```rust
t.0 == [1, 1]
t.1 == [3, 3, 3, 3]
```

and therefore:

```rust
a[0]      // 1
t.1[0]    // 3
```

Output:

```text
4
```

### Why is this useful?

Suppose you need an array of 100 zeros:

Without `;`:

```rust
let arr = [
    0,0,0,0,0,0,0,0,0,0,
    // ...
];
```

With `;`:

```rust
let arr = [0; 100];
```

Much shorter and cleaner.

**Memory model:**

```rust
[0; 5]
```

creates:

```text
Index: 0 1 2 3 4
Value: 0 0 0 0 0
```

Think of the semicolon as:

```text
[value ; how_many_times]
```
