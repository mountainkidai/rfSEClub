Variables

Reference: The Rust Programming Language, Chapter 3.1 (page 32)

### What It Is

Variables: Named storage for data, declared with let. By default, variables are immutable (cannot be changed after assignment).
Scoping: Variables are valid within their scope (e.g., inside {} blocks).
Naming: Variables use snake_case (e.g., user_id).

### Why It Matters

Memory Safety: Immutability prevents accidental changes, critical for secure Aadhaar IDs in Koel Auth.
Clarity: Clear scoping ensures variables don’t leak, important for KoelPass logic.

### Application to Your Projects

Koel Auth: Store Aadhaar IDs immutably to prevent tampering.
Blockchain ledger to store the transactions history

Declaration: Use let to bind a value to a variable.

```
let x = 5; // Immutable variable
// x = 6; // Error: cannot assign to immutable variable
```

Scoping: Variables are only accessible within their scope.

```
{
    let y = 10; // y exists only in this block
    println!("{}", y); // OK
}
// println!("{}", y); // Error: y out of scope
```

Type Inference: Rust infers (the compiler automatically determines the data type of a variable based on its usage or context, without requiring explicit type annotations.
) types, but you can annotate if needed.

```
let id = 123; //infers i32
let aadhaar: String = "123412341234".to_string(); //explicit type
```

Example:
A function to store an Aadhaar ID immutably:

```
fn store_aadhaar(input: &str) -> String {
    let aadhaar = input.to_string(); // Immutable variable
    aadhaar // Return immutable Aadhaar
}

fn main() {
    let result = store_aadhaar("123456789012");
    println!("Stored Aadhaar: {}", result); // Output: Stored Aadhaar: 123456789012
}
```
