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
