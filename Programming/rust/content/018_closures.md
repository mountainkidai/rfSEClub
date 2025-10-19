## Functions and Closures in Rust (detailed explanation)

Functions:
Functions are named blocks of code that take inputs (parameters) and produce outputs.

Declared with fn keyword.

They help avoid repetition and organize code logically.

```rust

fn add(a: i32, b: i32) -> i32 {
    a + b  // last expression returned implicitly
}

fn main() {
    let result = add(3, 4);
    println!("Sum: {}", result);
}

```

## Closures

Anonymous functions that can capture variables from the environment.

Defined with |parameters| expression syntax.

Useful for quick, inline functions.

They can be stored as variables and passed around.

|| { ... } is a Rust closure (anonymous function). Here || means it takes no arguments.

```rust
fn main() {
    let add = |a: i32, b: i32| a + b;  // closure taking two args and returning sum
    let result = add(2, 3);
    println!("Sum is {}", result);
}

```

```text
Functions                  |  Closures
---------------------------+--------------------------------------
Named, declared withfn     |  Anonymous, inline
Cannot capture variables   |  Can capture surrounding vars
Fixed types in signatures  |  Can infer parameter and return types
```
