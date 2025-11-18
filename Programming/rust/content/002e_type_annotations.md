## Type Annotations and Variable Sizes

Rust allows—and sometimes requires—you to explicitly specify variable types. This is especially useful when the compiler can’t infer the type or you want to control the exact size.

Common scalar types with their sizes:

```rust
let a: u8 = 255; // unsigned 8-bit integer (0 to 255)
let b: i8 = -128; // signed 8-bit integer (-128 to 127)
let c: u32 = 1000; // unsigned 32-bit integer
let d: i64 = -50000; // signed 64-bit integer
let e: f32 = 3.14; // 32-bit floating-point number
let f: f64 = 2.71828; // 64-bit floating-point number
let g: bool = true; // boolean
let h: char = 'R'; // single Unicode character
```

Choosing the appropriate type ensures efficient memory usage and program correctness.

---

## Exercise: Swap Two Variables

Declare two mutable variables and swap their values without using a third variable. Print the values before and after swapping.

---

## Mini-Project: Calculate Simple Interest

Write a program that:

- Declares variables for Principal (P), Rate of Interest (R), and Time (T).
- Calculates simple interest using the formula: Simple Interest = (P × R × T) / 100.
- Prints the result.

Example:

```rust
let principal = 1000.0;
let rate = 5.0;
let time = 3.0;
let simple_interest = (principal * rate * time) / 100.0;

println!("The simple interest is: {}", simple_interest);
```

---

```rust
fn main() {
    let b = 4;
    {
        let a= 10;
        println!("inside block a is {a}");
    }
    println!("outside block a is {a}");

}
```

## Problems

1. Create a variable `age` with explicit type annotation `u8` and value 25, then print it
2. Create a variable `temperature` with explicit type `f32` and value 36.5, then print it
3. Create two variables `x: i32` and `y: i64`, assign values, and print both
4. Create a variable `is_active` with explicit type `bool` and value true, then print it
5. Create variables with different integer types (i8, u16, i32, u64) and print all of them.
