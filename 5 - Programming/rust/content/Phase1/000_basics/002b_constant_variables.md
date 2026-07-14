## Constants and Their Declaration

- Constants are declared using `const` keyword and must include type annotation.
- Constants are values that are fixed and never change. They must be known before the program runs:

```rust
const MAX_POINTS: u32 = 100_000; // Must always have a type
const PI: f64 = 3.14159265359;
const SECONDS_PER_MINUTE: u32 = 60;

fn main() {
println!("Maximum points: {}", MAX_POINTS);
}
```

Constants are always immutable and are accessible throughout the entire program.

---

Constants are conventionally written in uppercase with underscores. They are handy for fixed values you want available everywhere.

---

Note:

- const variables do not have a fixed memory location.

- const is not stored in data or static memory regions.

- It exists only during compilation and is embedded directly into the executable code.

- When you compile the program, the value becomes part of the machine instructions.

**Differences between `const` and immutable `let`:**

| Feature            | `const`                     | `let` (immutable)           |
| ------------------ | --------------------------- | --------------------------- |
| Type Required      | YES, always                 | NO, can be guessed          |
| When Is It Set     | Before program runs         | When program runs           |
| Can Use Variables  | NO, only constant math      | YES, can use runtime values |
| Where Can It Exist | Anywhere (global or local)  | Local scope                 |
| Use Case           | Fixed settings for your app | Single value in function    |

```rust
// ✅ Valid constant
const BATCH_SIZE: usize = 32;

// ❌ Invalid constant (must be known before program runs)
// const random_value: i32 = generate_random();

// ✅ Valid immutable variable (decided when program runs)
let random_value = 10;
```

```rust
const API_TIMEOUT_SECS: u64 = 30;
const DATABASE_POOL_SIZE: usize = 10;
const DEFAULT_PORT: u16 = 8080;

fn main() {
println!("Server will timeout after {} seconds", API_TIMEOUT_SECS);
println!("Database pool size: {}", DATABASE_POOL_SIZE);
println!("Default port: {}", DEFAULT_PORT);
}
```

**Why `const`?** These values are fixed for the entire application. They don't change.

### Note

you cannot use let for global variables before main—Rust forbids it at the module level, allowing only const or static there.

```rust
let GLOBAL_X = 5;  // ERROR: `let` not allowed at module level

fn main() {
    println!("{}", GLOBAL_X);  // Won't compile
}

```

## Problems

1. Create a constant `MAX_USERS` with value 100 and print it
2. Create a constant `PI` with value 3.14159 and use it to calculate the circumference of a circle with radius 5
3. Create a constant `APP_NAME` with value "MyRustApp" and print a welcome message using it
4. Create two constants `MIN_AGE` and `MAX_AGE` with values 18 and 65, then print both
5. Create a constant `TIMEOUT_SECONDS` with value 30 and use it in a calculation (e.g., convert to milliseconds by multiplying by 1000)
