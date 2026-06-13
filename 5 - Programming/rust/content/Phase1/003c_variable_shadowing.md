## Variable Shadowing

Rust allows you to declare a new variable with the same name as a previous variable. This is called _shadowing_. The new variable shadows the old one.

```rust
let x = 5;
let x = x + 1; // Shadows previous x, now x is 6
let x = x * 2; // Shadows again, x is 12

println!("The value of x is: {}", x); // Prints 12
```

Shadowing is different from mutability because it allows you to re-bind a variable name to a new value and potentially change its type.

## Problems

1. Create a variable `x` with value 5, shadow it to 10, then shadow it again to 15, and print the final value
2. Create a variable `value` as an integer 42, then shadow it to a string "forty-two", and print both the original type concept and the new value
3. Create a variable `count` with value 0, shadow it by adding 1, then shadow it again by multiplying by 2, and print the result
4. Create a variable `data` as a number 100, then shadow it to a boolean true, and print the final value
5. Create a variable `name` shadowed three times with different string values, printing each shadowed version.
