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

## Problems

1. Create an array `numbers` of 5 integers [1, 2, 3, 4, 5] and print the first and last elements
2. Create an array `scores` with type annotation `[i32; 3]` containing three test scores, calculate the average, and print it
3. Create an array `zeros` of 10 zeros using the `[0; 10]` syntax and print its length
4. Create an array `colors` of 3 string slices, iterate over it, and print each color
5. Create an array `matrix` representing a 2x2 grid: `[[1, 2], [3, 4]]`, access element at `[1][0]`, and print it.
