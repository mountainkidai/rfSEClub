```rust
use axum::{
    routing::get,
    Router,
};

```

```rust
use calc::{
    arithmetic::add,
    Calculator,
};

// crate name - calc
//arithmetic is a module inside calc.

// arithmetic::add is a function or submodule under the arithmetic module.

// Calculator is a struct or type directly inside calc.

```

```text
Aspect       |  Binary Crate                 |  Library Crate
-------------+-------------------------------+---------------------------------------
Output       |  Executable program (binary)  |  Reusable code library (no executable)
Entry point  |  fn main()                    |  Nomain()function
Usage        |  Run as a program             |  Used as dependency in other crates
Cargo setup  |  cargo new my_app             |  cargo new my_lib --lib
```

```text
File structure:
-------------
src/
  arithmetic.rs
  lib.rs
  main.rs




```

```rust
// arithmetic.rs
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

```rust
// src/lib.rs

pub mod arithmetic;  // expose arithmetic module

pub struct Calculator;

impl Calculator {
    pub fn new() -> Self {
        Calculator
    }

    pub fn multiply(&self, a: i32, b: i32) -> i32 {
        a * b
    }
}

```

```rust
//src/main.rs
use calc::{arithmetic::add, Calculator};

fn main() {
    let sum = add(3, 4);
    println!("Sum: {}", sum);

    let calc = Calculator::new();
    let product = calc.multiply(5, 6);
    println!("Product: {}", product);
}

```

## Crates

A crate is a compilation unit and package in Rust.

Can be a binary crate (executable) or library crate (reusable code).

cargo manages crates and dependencies.

Each crate has a root file (main.rs for binary, lib.rs for library).

## Why use modules & crates?

Keep code organized and manageable in large codebases.

Enable code reuse (libraries).

Control visibility (private/public).

Crates allow publishing packages for reuse.

We can create a project using cargo new.
We can build a project using cargo build.
We can build and run a project in one step using cargo run.
We can build a project without producing a binary to check for errors using cargo check.
Instead of saving the result of the build in the same directory as our code, Cargo stores it in the target/debug directory.

## Problems

1. Create a new Cargo project called "my_project", add a dependency to `Cargo.toml`, and use it in `main.rs`
2. Write a program that uses the `rand` crate to generate and print a random number between 1 and 100
3. Create a library crate with a public function, then use it in a binary crate in the same project
4. Add a dependency to your `Cargo.toml` file, run `cargo build`, and verify it compiles successfully
5. Create a project structure with a `src/lib.rs` and `src/main.rs`, where `main.rs` uses functions from `lib.rs`.
