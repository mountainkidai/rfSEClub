### Bitwise Duplication Explained

Bitwise duplication means copying the exact raw bytes of a value from one memory location to another.

```rust
let x = 5;           // i32 occupies 4 bytes on stack
let y = x;           // Those 4 bytes are bitwise copied
```

```text
x (stack address 0x1000): [0x05, 0x00, 0x00, 0x00]  ← 5 in little-endian
                                ↓ copy ↓
y (stack address 0x1004): [0x05, 0x00, 0x00, 0x00]  ← same 4 bytes
```

- Both x and y are now independent values at different addresses with identical bytes. This is safe.

### How Clone Works

- Clone is just a trait. Each type implements it differently:

```rust
pub trait Clone {
    fn clone(&self) -> Self;
}
```

The type author writes the implementation. Different types do different things.

Category 1: Primitives (i32, f64, bool, char)

```rust
impl Clone for i32 {
    fn clone(&self) -> Self {
        *self  // Return a bitwise copy of the 4 bytes
    }
}
```

- What happens: Bitwise copy of stack bytes. Two independent values.
- Memory: Very low (stack only, ~4-8 bytes)
