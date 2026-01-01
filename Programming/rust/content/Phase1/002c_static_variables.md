# Static Variables in Rust

## Core Principles from First Principles

Before diving into syntax, understand the foundational principles that shape Rust's approach to static variables:

1. **Fixed Memory Location**: Unlike regular variables that exist on the stack and disappear when a function ends, static variables have one permanent home in memory for the entire program's lifetime. This address never changes.

2. **Global Accessibility**: Static variables can be accessed from anywhere in your program. They're like a bulletin board on the wall that everyone can read (and possibly write to) from any room.

3. **Safety vs. Flexibility**: Rust makes immutable statics safe and simple, but mutable statics are dangerous because multiple parts of your program could try to change them at the same time. That's why mutable statics require `unsafe` code. [We will discuss this in phase3]

4. **Compile-Time vs. Runtime**: Unlike constants (which are replaced by their values at compile time), static variables actually exist as real variables in memory while your program runs.

---

## Overview

A static variable is a value that lives for the entire duration of your program and has a fixed location in computer memory. Think of it as a permanent storage location that exists from the moment your program starts until it stops.

### Key Concepts

**Static Variable**: A global variable that has one fixed memory address for the entire program. Created with the `static` keyword.

**Immutable Static**: A static variable that cannot be changed after it's created. Safe and simple to use.

**Mutable Static**: A static variable that can be changed. Must be wrapped in `unsafe` code because it's dangerous (multiple parts of the program could change it at the same time, causing bugs).

**Data Segment**: The part of your program's memory that stores initialized static values (values you give them when you create them).

**BSS Segment**: The part of your program's memory that stores uninitialized or zero-initialized static values.

**'static Lifetime**: Means "this lives for the entire program". This is Rust's way of saying "this variable never gets deleted".

---

```text
High Memory (0xFFFFFFFF)
+---------------------------+
| Command-line Arguments    | ← argc, argv[]
| Environment Variables     | ← PATH, HOME, etc.
+---------------------------+
| Stack                     | ← Grows downward ↓
| (Function calls, locals)  |   8MB default on Linux/Mac
+---------------------------+
|                           |
| ↕ Unused Virtual Space ↕  | ← Stack ↔ Heap collision protection
|                           |
+---------------------------+
| Heap                      | ← Grows upward ↑
| (Dynamic allocation)      |   Vec, String, Box allocations
+---------------------------+
| BSS Segment               | ← Uninitialized global/static vars
| (Zero-initialized)        |   Set to zero by OS
+---------------------------+
| Data Segment              | ← Initialized global/static vars
| (Read/Write)              |   static mut COUNTER: i32 = 0;
+---------------------------+
| Text Segment              | ← Program instructions (Read-only)
| (Machine Code)            |   Your compiled Rust code
+---------------------------+
Low Memory (0x00000000)
```

&#x20;• **.data**→ Stores initialized variables (static x: i32 = 10;)

&#x20;• **.bss**→ Stores uninitialized variables (static mut y: i32;)

```rust
static X: i32 = 100;  // ✅ Stored in `.data` (Initialized)
static mut Y: i32 = 0; // ✅ Stored in `.bss` (Uninitialized)
```

## Static vs. Other Variable Types

Let's compare static variables to what you already know:

| Feature              | `let` (Local)       | `const`              | `static`            | `static mut`        |
| -------------------- | ------------------- | -------------------- | ------------------- | ------------------- |
| Where It Lives       | Stack (disappears)  | Nowhere (replaced)   | Data/BSS Segment    | Data/BSS Segment    |
| Fixed Memory Address | NO                  | NO (not real)        | YES                 | YES                 |
| Can Take Pointer     | NO                  | NO                   | YES                 | YES                 |
| Can Be Mutable       | Yes (with mut)      | Never                | No (immutable)      | Yes (needs unsafe)  |
| Can Be Global        | NO (function scope) | YES                  | YES                 | YES                 |
| When Is It Created   | When function runs  | At compile time      | When program starts | When program starts |
| When Does It Die     | When function ends  | Never (compile-time) | When program ends   | When program ends   |

---

## Immutable Static Variables: Simple and Safe

Immutable static variables are straightforward. You create them once, and they never change:

```rust
static GREETING: &str = "Hello, static!";
static PI: f64 = 3.14159265359;
static MAX_PLAYERS: u32 = 100;

fn main() {
println!("{}", GREETING); // Hello, static!
println!("Pi is: {}", PI); // Pi is: 3.14159265359
println!("Max players: {}", MAX_PLAYERS); // Max players: 100
}
```

**Why safe?** Because the value never changes, there's no risk of multiple parts of the program trying to change it at the same time.

### Where Are They Stored?

```rust
static INITIALIZED: u32 = 42; // Stored in DATA SEGMENT (has a value)
static UNINITIALIZED: u32 = 0; // Stored in BSS SEGMENT (zero-initialized)
```

**Data Segment**: Memory for values that are set when the program loads (like `INITIALIZED = 42`). The actual value is saved in your executable file.

**BSS Segment**: Memory for values that start at zero. It's more efficient because the actual zero doesn't need to be stored in the executable file—the operating system just allocates space and fills it with zeros.

### Immutable Static Example: Game Constants

```rust
static GAME_NAME: &str = "My Awesome Game";
static GAME_VERSION: &str = "1.0.0";
static DEFAULT_DIFFICULTY: u32 = 2;
static MAX_LIVES: u32 = 3;

fn main() {
println!("Welcome to {}", GAME_NAME);
println!("Version: {}", GAME_VERSION);
println!("Difficulty level: {}", DEFAULT_DIFFICULTY);
println!("Lives: {}", MAX_LIVES);
}
```

**Why use static here?** These values need to be accessible from everywhere in the program and never change. They're global configuration.

---

## Mutable Static Variables: Powerful but Dangerous

Mutable static variables can change, but they're dangerous. That's why Rust requires `unsafe` code:

```rust
static mut COUNTER: u32 = 0;

fn main() {
unsafe {
COUNTER += 1;
println!("Counter: {}", COUNTER);
  COUNTER += 1;
    println!("Counter: {}", COUNTER);
}
}
// Output:
// Counter: 1
// Counter: 2
```

### Why Is Mutable Static Dangerous?

Imagine this scenario:

```rust
static mut BANK_BALANCE: i32 = 1000;

// This could happen in your program:
// Thread 1: Read balance (1000), add 100, write new balance (1100)
// Thread 2: Read balance (1000), add 50, write new balance (1050)
//
// PROBLEM: Both read the OLD value before either write!
// The balance should be 1150, but it's only 1050.
// Money disappeared!
```

This is called a **data race**. Multiple parts of your program try to change the same value at the same time, and the results are unpredictable.

**That's why Rust requires `unsafe`**: It's saying "you're on your own now. Make sure you know what you're doing, because I can't protect you."

### When to Use Mutable Static

Most of the time, you DON'T need mutable statics. But here are some cases where you might:

**Use Case 1: Global Flag**

```rust
static mut DEBUG_MODE: bool = false;

fn main() {
unsafe {
DEBUG_MODE = true; // Enable debugging
if DEBUG_MODE {
println!("Debug mode is ON");
}
}
}

```

**Use Case 2: Global Counter (Single-Threaded)**

```rust
static mut REQUEST_COUNT: u32 = 0;

fn handle_request() {
unsafe {
REQUEST_COUNT += 1;
println!("Request number: {}", REQUEST_COUNT);
}
}

fn main() {
handle_request();
handle_request();
handle_request();
}
// Output:
// Request number: 1
// Request number: 2
// Request number: 3
```

**Important**: This only works safely if your program runs on a single thread. If multiple threads try to change `REQUEST_COUNT` at the same time, you'll get a data race.

---

## Static vs. Const: When to Use Each

This is important! Let's clarify the difference:

### Const: Compile-Time Replacement

```rust
const PI: f64 = 3.14159;

fn main() {
println!("{}", PI); // Compiler replaces PI with 3.14159 directly
}
```

The compiler literally replaces every use of `PI` with `3.14159`. The variable doesn't really exist in your program—it's just a compile-time shortcut.

### Static: Runtime Variable

```rust
static PI: f64 = 3.14159;

fn main() {
println!("{}", PI); // PI is a real variable in memory
}
```

`PI` is a real variable stored in your program's memory. Your program accesses it every time you use it.

### Which Should You Use?

```text
Is this a configuration value that never changes?
├─ YES, and it's small (number, text) → Use const
└─ NO, or it's large (big array, struct)
├─ Uses lots of memory → Use static
└─ Needs to be global → Use static

Do you need to change it?
├─ YES → Use static mut (but be careful!)
└─ NO → Use static

```

### Example: Const vs. Static

```rust
// ✅ Use const for simple, compile-time values
const MAX_ITEMS: usize = 100;
const AUTHOR: &str = "Alice";

// ✅ Use static for large or global data
static LARGE_ARRAY: &[u32] = &;
static APP_CONFIG: &str = "config.txt";

// ✅ Use static mut for values that rarely change
static mut DEBUG_ENABLED: bool = false;

fn main() {
println!("Max items: {}", MAX_ITEMS);
println!("Array: {:?}", LARGE_ARRAY);
}
```

---

## Practical Examples: Building Intuition

### Example 1: Game Score Tracking

```rust
static mut PLAYER_SCORE: u32 = 0;

fn add_points(points: u32) {
unsafe {
PLAYER_SCORE += points;
println!("Score increased by {}. Total: {}", points, PLAYER_SCORE);
}
}

fn main() {
add_points(10);
add_points(25);
add_points(15);
}
// Output:
// Score increased by 10. Total: 10
// Score increased by 25. Total: 35
// Score increased by 15. Total: 50

text
```

**Key Point**: The score is accessible from anywhere, but we had to wrap the change in `unsafe` because it's mutable.

### Example 2: Immutable Static Strings

```rust
static APP_NAME: &str = "MyApp";
static APP_VERSION: &str = "2.0.1";
static AUTHOR: &str = "Bob";

fn print_app_info() {
println!("App: {} v{}", APP_NAME, APP_VERSION);
println!("Author: {}", AUTHOR);
}

fn main() {
print_app_info();
print_app_info();
}
// Output:
// App: MyApp v2.0.1
// Author: Bob
// App: MyApp v2.0.1
// Author: Bob
```

**Why immutable statics here?** These values are set once and never change. Safe and simple.

### Example 3: Request Logger

```rust
static mut TOTAL_REQUESTS: u32 = 0;
static API_ENDPOINT: &str = "https://api.example.com";

fn log_request(endpoint: &str) {
unsafe {
TOTAL_REQUESTS += 1;
println!("Request #{} to {}", TOTAL_REQUESTS, endpoint);
}
}

fn main() {
println!("API Endpoint: {}", API_ENDPOINT);

log_request("GET /users");
log_request("POST /data");
log_request("GET /status");
}
// Output:
// API Endpoint: https://api.example.com
// Request #1 to GET /users
// Request #2 to POST /data
// Request #3 to GET /status
```
