# Introduction to Rust

## Overview

Rust is a systems programming language that focuses on speed, memory safety, and parallelism. It achieves memory safety without a garbage collector through ownership rules and a powerful type system.

This session covers:

- Installing Rust and Cargo (Rust’s package manager and build tool)
- Writing your first Rust program (Hello World)
- Compiling and running a Rust program
- An introductory exercise and a mini-project to solidify your understanding

---

## Installing Rust and Cargo

Rust’s official installer is called `rustup`, which installs the Rust compiler `rustc`, Cargo, and standard libraries.

### Installation Steps (All Platforms)

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

```

Follow the on-screen instructions to complete installation.

Verify installation by running:

```sh
rustc --version
cargo --version
```

## Writing Your First Rust Program: Hello World

Create a file named `main.rs` with the following content:

```rust

fn main() {
println!("Hello, world!");
}

```

This defines the main function and prints "Hello, world!" to the console.

---

## Compile and Run Your Program

Compile the program using:

```sh
rustc main.rs
./main
OUTPUT: Hello, world!
```

## Problems

1. Write a Rust program that prints "Hello, Rust!" to the console
2. Create a program that prints your name and age on separate lines
3. Write a program that prints "Welcome to Rust programming!" using println!
4. Create a program that prints three different messages: "First message", "Second message", and "Third message"
5. Write a program that prints a personalized greeting message with your name.
