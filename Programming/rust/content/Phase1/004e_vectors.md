A vector is a growable, heap-allocated collection of elements of the same type. Unlike arrays, vectors can grow or shrink at runtime.

- Dynamically sized and mutable
- Allocated on the heap for runtime flexibility
- Elements can be added or removed at runtime
- Share the same interface as arrays for element access

```rust
// Create an empty vector
let mut v: Vec<i32> = Vec::new();

// Create a vector with initial values
let v = vec![1, 2, 3, 4, 5];

// Add elements
let mut nums = vec![];
nums.push(1);
nums.push(2);
println!("Length: {}", nums.len()); // prints 2

// Access elements
println!("{}", v[0]); // prints 1

// Iterate
for num in &v {
println!("{}", num);
}
```

## Problems

1. Create an empty vector `numbers`, push three integers (1, 2, 3) into it, and print all elements
2. Create a vector `names` with initial values ["Alice", "Bob", "Charlie"], add a fourth name, and print all names
3. Create a vector `scores` of integers, calculate the sum of all scores, and print the result
4. Create a vector `items`, add 5 elements, remove the last element using `pop()`, and print the remaining length
5. Create a vector `data`, iterate over it using a for loop, and print each element with its index.
