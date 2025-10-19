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
