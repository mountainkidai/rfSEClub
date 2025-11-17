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
