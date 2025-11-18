## Summary

- Variables are immutable by default; use `mut` to allow mutation.
- Constants use `const` and must include a type annotation; they are immutable and globally accessible.
- Shadowing lets you reuse variable names with new values or types.
- Explicit type annotations help control data size and behavior.

This concludes your introduction to variables and mutability. Next, you will explore Rust's scalar data types in detail.

## Problems

1. Create an immutable variable `name` and a mutable variable `age`, then print both
2. Create a constant `MAX_SIZE` with type annotation `u32` and value 1000, then print it
3. Create a variable `x` with value 5, shadow it to 10, then shadow it again to a string "ten", and print the final value
4. Create a mutable variable `counter` initialized to 0, increment it three times, and print the final value
5. Create an immutable variable `value` with value 42, then try to change it (this should cause a compile error - comment it out and explain why)
