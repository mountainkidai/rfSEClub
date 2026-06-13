## Shadowing

**Shadowing**: Shadowing in Rust creates a new variable with the same name in the current scope, hiding the original without destroying or deallocating it—the old binding remains in memory but becomes inaccessible by name until its scope ends.But it reappears outside the scope.

```rust
fn main() {
    let mut x = 5i32;      // Original: mutable integer
    println!("Original: {}", x);

    {                      // Inner scope
        let x = x.to_string();  // Shadowed: immutable String
        println!("Shadowed immutable str: {}", x);
        // x = "new";      // Error if tried: immutable
    }                      // Inner ends, original x reappears

    println!("Original reappears: {}", x);  // Still 5i32, mutable
    x = 10;                // Allowed on original
}

```

This demonstrates type change (i32 to String), mutability shift, and outer scope restoration.
