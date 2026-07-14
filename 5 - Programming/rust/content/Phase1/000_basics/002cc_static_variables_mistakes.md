## Common Mistakes and How to Avoid Them

### Mistake 1: Forgetting `unsafe` for Mutable Static

```rust
static mut VALUE: u32 = 0;

fn main() {
// ❌ Error: cannot access mutable static without unsafe
VALUE += 1;
// ✅ Correct
unsafe {
    VALUE += 1;
    }
}
```

**Prevention**: Remember that ANY access to a mutable static (reading or writing) requires `unsafe`.

---

### Mistake 2: Using Mutable Static When You Don't Need To

```rust
// ❌ Unnecessary unsafe code
static mut COUNTER: u32 = 0;

fn get_counter() -> u32 {
unsafe {
COUNTER
}
}

// ✅ Better: Use immutable static
static COUNTER: u32 = 0;

fn get_counter() -> u32 {
COUNTER // No unsafe needed!
}
```

**Prevention**: Only use `mut` if you actually need to change the value.

---

### Mistake 3: Using Static Instead of Const

```rust
// ❌ Unnecessary static
static SMALL_VALUE: u32 = 42;

// ✅ Better: Use const for small values
const SMALL_VALUE: u32 = 42;
```

**Prevention**: Use `const` for simple values that never change. Use `static` when you need a fixed memory address or for large data.

---

### Mistake 4: Race Conditions with Mutable Static

```rust
// ❌ Dangerous with multiple threads
static mut SHARED_VALUE: u32 = 0;

// Thread 1:
unsafe {
SHARED_VALUE = 10;
}

// Thread 2 (at same time):
unsafe {
SHARED_VALUE = 20; // Could overwrite Thread 1's value!
}
```

**Prevention**: Avoid mutable statics in multi-threaded code. Use `Arc<Mutex<T>>` instead (advanced topic).

---

### Mistake 5: Storing Non-'static Data in Static

```rust
// ❌ Error: String doesn't live forever
static MY_STRING: String = String::new();

// ✅ Correct: Use &str (string literal)
static MY_STRING: &str = "Hello";

// ✅ Correct: Use owned types if they're 'static
static MY_ARRAY: &[u32] = &;
```

**Prevention**: Static variables must contain only data that lives for `'static` (string literals, arrays, etc.).

---

## When to Use Static vs. Regular Variables

| Global? | Changes?    | Use                 |
| ------- | ----------- | ------------------- |
| No      | -           | let                 |
| Yes     | No          | const/static        |
| Yes     | Yes (rare)  | static mut (unsafe) |
| Yes     | Yes (often) | Arc<Mutex<T>>       |
