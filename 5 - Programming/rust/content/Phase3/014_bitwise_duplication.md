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

## Problems

1. Create two integer variables `x = 10` and `y = x`, verify they are independent by modifying `y` and printing both
2. Create a variable `num: i32 = 42`, clone it to another variable, modify the clone, and verify the original is unchanged
3. Create a tuple of integers, assign it to another variable, modify one field in the new tuple, and verify they are independent
4. Create an array of integers, assign it to another variable, modify an element in one array, and check if the other is affected
5. Create a struct with only `Copy` types (like integers), assign it to another variable, and demonstrate that both are independent copies.
