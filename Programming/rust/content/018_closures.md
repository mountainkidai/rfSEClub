|| { ... } is a Rust closure (anonymous function). Here || means it takes no arguments.

```rust
fn main() {
    let add = |a: i32, b: i32| a + b;  // closure taking two args and returning sum
    let result = add(2, 3);
    println!("Sum is {}", result);
}

```
