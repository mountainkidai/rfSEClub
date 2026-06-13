# Introduction to Rust

## Overview

Rust is a systems programming language that focuses on **speed**, **memory safety**, and **parallelism**.

Unlike languages with garbage collection (like Java or Python), Rust guarantees safety through **ownership**, **borrowing**, and **lifetimes** — enforced by the _borrow checker_ at compile time.

By combining low-level control with a robust type system, Rust prevents common bugs such as:

- **Null pointer dereferencing** (accessing a null value and crashing)
- **Data races** (two threads modifying the same data simultaneously without synchronization)

### What You'll Learn

- Installing Rust and understanding toolchains
- Writing your first Rust program
- How compilation works: from code to machine executable
- Build profiles and optimization strategies
- When to use binaries vs libraries
- Async runtimes for concurrent programming

---

## Installing Rust and Cargo

Rust uses **`rustup`**, the official toolchain installer. When you install Rust, you're installing:

- **`rustc`** — the compiler that converts your Rust code to machine code
- **`cargo`** — the build tool and package manager
- **`rust-std`** — the standard library (core functionality like I/O, collections, etc.)

### Installation Steps (All Platforms)

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Follow the on-screen instructions to complete installation.

Verify installation:

```sh
rustc --version
cargo --version
```

### Understanding: What Gets Installed?

When you run the installer, you're **not installing a runtime** like the JVM or .NET CLR. Instead, you're installing:

1. **The compiler (`rustc`)** — a program that reads your Rust code and outputs machine code
2. **The package manager (`cargo`)** — a tool to manage your project and dependencies
3. **The standard library (`std`)** — pre-written code for common tasks that gets compiled _into_ your binary

**Simple analogy:** It's like installing a recipe book and a kitchen. You use the recipes (std) and tools (cargo) to make a meal (your binary).

---

## 🔧 Advanced Concept: Rust Toolchains Explained

A **toolchain** is a complete set of compiler versions and tools. Rustup lets you install and manage _multiple_ toolchains simultaneously:

| Channel     | Stability                           | Release Schedule | Use Case                                    |
| ----------- | ----------------------------------- | ---------------- | ------------------------------------------- |
| **Stable**  | Production-ready, thoroughly tested | Every 6 weeks    | Everyday development, production apps       |
| **Beta**    | Next stable candidate, very stable  | Weekly           | Testing features before stable release      |
| **Nightly** | Experimental, features may change   | Daily            | Cutting-edge features, compiler experiments |

### Why Multiple Toolchains?

Imagine you're developing:

- **Your main app:** Use `stable` (safe, predictable)
- **Experimental feature:** Use `nightly` on a separate branch (test new APIs)
- **Help debug compiler bug:** Use `beta` (report issues)

### Commands to Switch Toolchains

```sh
# Set stable as your default
rustup default stable

# Switch to nightly for a single command
cargo +nightly build

# Override for the current project directory only
rustup override set nightly

# List installed toolchains
rustup toolchain list

# Update all toolchains
rustup update
```

### Example: Nightly-Only Features

Some Rust features only exist on nightly. To use them:

```rs
#![feature(advanced_feature)] // Only works on nightly

fn main() {
println!("This requires nightly!");
}
```

Running `cargo build` with stable would **fail**. You'd use `cargo +nightly build` instead.

---

## Writing Your First Rust Program: Hello World

Create a file named `main.rs`:

```rs
fn main() {
println!("Hello, world!");
}
```

Let's break this down:

- `fn main()` — defines the **entry point** (where your program starts)
- `println!(...)` — a **macro** (special syntax expanded at compile-time) that prints text to the console
- `;` — statement terminator

---

## 🔄 Advanced Concept: What Happens When You Compile?

When you run `rustc main.rs`, Rust's compiler goes through multiple phases:

### Phase 1: Lexing (Breaking Code into Tokens)

```rs
Input: fn main() { println!("Hello"); }
Output: [fn] [main] [(] [)] [{] [println] [!] [...] [}]
```

The compiler reads your raw text and breaks it into meaningful chunks (tokens).

### Phase 2: Parsing (Building a Structure)

```rs
Output (simplified):
Function {
name: "main"
body: [
MacroCall {
name: "println"
argument: "Hello"
}
]
}
```

The compiler arranges tokens into a tree structure (Abstract Syntax Tree or AST).

### Phase 3: Type Checking & Borrow Checking

```text
Check: Does "Hello" fit the println! macro?
Check: Are we using memory safely?
Check: Do lifetimes make sense?
Result: ✓ All checks pass
```

This is where Rust's safety guarantees happen. If your code breaks memory rules, it fails **here** (compile-time), not at runtime.

### Phase 4: Code Generation (via LLVM)

Rust code → LLVM Intermediate Representation (IR) → Machine code

Rust uses LLVM (Low-Level Virtual Machine), an industry-standard compiler backend. LLVM optimizes your code and generates native machine instructions.

### Phase 5: Linking (Creating the Executable)

Compiled code + Standard library + Dependencies = Final binary

The compiler links together all the pieces into a standalone executable.

**Result:** A binary file (e.g., `main` on Linux/Mac, `main.exe` on Windows) that runs directly on your CPU.

```sh
rustc main.rs # Runs all 5 phases
./main # Execute the resulting binary
Output: Hello, world!
```

---

## Compile Time vs Runtime: The Core Distinction

This is **critical** to understanding Rust.

### What is Compile Time?

**Compile time** is when the compiler is running — converting your Rust code to machine code. This happens on _your machine_ (or a build server), _before_ your program runs.

**Example:**

```rs
fn main() {
let x: i32 = 5;
let y: String = x; // ❌ ERROR: can't assign i32 to String
}
```

When you run `cargo build`, the compiler rejects this **instantly** at compile time. You never get a binary.

### What is Runtime?

**Runtime** is when your compiled binary is _executing_ on someone's machine. This is after compilation finishes.

**Runtime is fast** because all the expensive checking already happened at compile time.

**Example:**

```rs
fn main() {
let x: i32 = 5;
let y: i32 = x; // ✓ Correct, compiles fine
println!("{}", y); // This prints at runtime
}
```

**Timeline:**

```text
Compile time: rustc checks everything (slow)
↓
Binary created (main.exe)
↓
Runtime: Binary executes (fast, no checking needed)
↓
Output printed to console
```

---

## Compile and Run Your Program

### Manual Compilation with rustc

```sh
rustc main.rs # Compile
./main # Run

Output: Hello, world!
```

This produces a binary called `main` in your current directory.

### Using Cargo (Recommended)

Cargo automates project creation, compilation, and dependency management:

```sh
cargo new hello_world # Create a new project
cd hello_world
cargo run # Compile and run in one command
```

```text

Cargo creates this structure:

hello_world/
├── Cargo.toml # Project metadata & dependencies
└── src/
└── main.rs # Your code
```

---

Build Profiles and Optimization

Compilation has **two modes**: **development** (fast compile, slow runtime) and **release** (slow compile, fast runtime).

### Development Profile (Default)

```sh
cargo build # Or: cargo run
```

**Settings (implicit):**

- **No optimization** (`opt-level = 0`)
- **Full debug info** (can use debugger, see variable values)
- **Fast compilation** (1-5 seconds for small projects)

**Good for:** Rapid iteration during development. You want quick feedback while coding.

### Release Profile (Production)

```rs
// main.rs
fn main() {
let mut sum = 0;
for i in 0..1_000_000_000 {
sum += i;
}
println!("{}", sum);
}
```

**Execution time:**

```text
$ cargo run # Development mode
Finished dev [unoptimized + debuginfo]
Runtime: ~20 seconds

$ cargo run --release # Release mode
Finished release [optimized]
Runtime: ~0.05 seconds (400x faster!)
```

The binary is the same _logic_, but the CPU can execute optimized machine code much faster.

---

## Customizing Build Profiles with Cargo.toml

You can fine-tune how Rust optimizes your code:

```toml
Cargo.toml
[profile.release]
opt-level = 3 # 0 = no opt, 1 = fast, 2 = balanced, 3 = max speed
# "s" = optimize for size, "z" = minimize size

lto = true # Link-Time Optimization
# Rust can inline functions across crates
# Pro: 10-30% faster | Con: 2-5x slower compile

debug = false # Strip debug symbols from binary
# Smaller binary, but can't debug

codegen-units = 1 # Use 1 unit instead of 16 (parallel)
# Pro: Better optimization | Con: Much slower compile

panic = "abort" # Crash immediately on panic
# Pro: 20-50% smaller binary | Con: No panic recovery
```

### Example: Extreme Optimization (for critical code)

```toml
[profile.release]
opt-level = 3
lto = "fat" # Most aggressive LTO
codegen-units = 1 # Single unit for max inlining
panic = "abort"
```

---

## When to Optimize: The Top 1% Workflow

| Stage            | Command                                    | Purpose                                             |
| ---------------- | ------------------------------------------ | --------------------------------------------------- |
| **Developing**   | `cargo run`                                | Fast feedback (compile fast, accept slower runtime) |
| **Testing perf** | `cargo run --release`                      | See what your final binary will do                  |
| **Benchmarking** | `cargo bench`                              | Measure performance systematically                  |
| **Deploying**    | `cargo build --release` with tuned profile | Maximum speed/size tradeoff                         |

---
