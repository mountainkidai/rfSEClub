An array is a fixed-size collection where all elements must be of the same type. Arrays are allocated on the stack and provide excellent performance for fixed-size collections.

- All elements must be the same type
- Size is fixed at compile time using the syntax [type; size]
- They are static, meaning you define both the size and type at declaration
- They are allocated on the stack for optimal performance
- You can iterate over arrays

```rust
// Array with type and size annotation
let fruits: [&str; 3] = ["apple", "banana", "orange"];

// Access array elements by index
println!("{}", fruits[0]);  // prints "apple"
println!("{}", fruits[1]);  // prints "banana"

// Create array with repeated values
let numbers = [0; 5];  // [0, 0, 0, 0, 0]

// Iterate over array
for fruit in &fruits {
    println!("{}", fruit);
}

```
