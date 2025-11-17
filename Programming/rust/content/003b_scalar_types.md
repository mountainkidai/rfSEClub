## Scalar Types

- Scalar types represent a single value.
- Imagine your data as items in boxes. Each box has a label:
- "Integer
  - Whole numbers without decimals.
- Floating-Point Numbers
  - Numbers with decimals.
- Booleans
  - Represent true or false.
- Characters

  - Represent a single Unicode scalar value.

```rust
fn main() {
    let x: i32 = 42;  // 32-bit signed integer
    let y: u8 = 255;  // 8-bit unsigned integer
    let pi: f64 = 3.1415;     // pi is a 64-bit floating point
    let is_rust_fun: bool = true; // is_rust_fun is a boolean
    let greeting: &str = "hello";    // greeting is a string slice

    println!("x = {}, pi = {}, fun = {}, greeting = {}", x, pi, is_rust_fun, greeting);
}
// Output: x = 10, pi = 3.1415, fun = true, greeting = hello
```

```text
Type    |  Description                      |  Example Values
--------+-----------------------------------+--------------------
i32     |  32-bit signed integer            |  -100, 0, 42
u8      |  8-bit unsigned integer           |  0, 255
f64     |  64-bit floating point (decimal)  |  3.14, -2.71
bool    |  Boolean value true or false      |  true,false
char    |  Single Unicode character         |  'a','Ω'
&str    |  String slice (immutable text)    |  "hello", "Rust"
String  |  Growable, heap-allocated string  |  String::from("hi")
```
