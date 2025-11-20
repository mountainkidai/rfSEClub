## Constants and Their Declaration

Constants are declared using `const` keyword and must include type annotation.

```rust
const MAX_POINTS: u32 = 100_000;

println!("The maximum points are: {}", MAX_POINTS);
```

Constants are always immutable and are accessible throughout the entire program.

---

Constants are conventionally written in uppercase with underscores. They are handy for fixed values you want available everywhere.

---

Note:

- const variables do not have a fixed memory location.

- const is not stored in data or static memory regions.

- It exists only during compilation and is embedded directly into the executable code.

- When you compile the program, the value becomes part of the machine instructions.

## Problems

1. Create a constant `MAX_USERS` with value 100 and print it
2. Create a constant `PI` with value 3.14159 and use it to calculate the circumference of a circle with radius 5
3. Create a constant `APP_NAME` with value "MyRustApp" and print a welcome message using it
4. Create two constants `MIN_AGE` and `MAX_AGE` with values 18 and 65, then print both
5. Create a constant `TIMEOUT_SECONDS` with value 30 and use it in a calculation (e.g., convert to milliseconds by multiplying by 1000)
