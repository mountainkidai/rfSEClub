What It Is
Mutability: The ability to change a variable’s value after declaration. In Rust, variables are immutable by default (cannot be changed). To allow changes, add the mut keyword when declaring with let

Scope: Mutability applies within the variable’s scope (e.g., inside {}).
Purpose: Controlled mutability ensures intentional changes, enhancing safety.

Why It Matters
Safety: Default immutability prevents accidental changes, but mut allows controlled updates, critical for software like aadhar kyc status.
Precision: Explicit mut makes code intent clear, reducing bugs in KoelPass validation.

Application
Koel Auth: Mutable KYC status (verified: bool) to update after API calls, immutable Aadhaar ID.
KoelPass: Mutable pass status to mark as used or expired.

```rust
IMMUTABLE BY DEFAULT
let x = 5; // Immutable
// x = 6; // Error: cannot assign to immutable variable
```

```rust
Mutable with mut:
let mut y = 5; // Mutable
y = 6; // OK
```

```rust
Scope Restriction: Changes only within the variable’s scope.
{
    let mut z = 10;
    z = 20; // OK
}
```
