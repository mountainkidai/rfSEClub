## Variable Shadowing

Rust allows you to declare a new variable with the same name as a previous variable. This is called _shadowing_. The new variable shadows the old one.

```rust
let x = 5;
let x = x + 1; // Shadows previous x, now x is 6
let x = x * 2; // Shadows again, x is 12

println!("The value of x is: {}", x); // Prints 12
```

Shadowing is different from mutability because it allows you to re-bind a variable name to a new value and potentially change its type.
