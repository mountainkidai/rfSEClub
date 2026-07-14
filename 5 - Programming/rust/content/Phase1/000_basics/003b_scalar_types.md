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

## Problems

1. Create variables of each scalar type: `num: i32 = 42`, `decimal: f64 = 3.14`, `flag: bool = true`, `letter: char = 'R'`, and print all of them
2. Create a variable `temperature: f32` with value 98.6 and print it with 2 decimal places
3. Create an unsigned integer `count: u8` with value 255 and print it
4. Create a boolean variable `is_even` that checks if a number is even, then use it to print a message
5. Create a character variable with a non-ASCII character (like 'ñ' or 'α') and print it.
