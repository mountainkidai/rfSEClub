## Rust Ownership

Rust’s ownership system ensures memory safety without garbage collection.
Each value in Rust has a single owner; when the owner goes out of scope, Rust frees the memory automatically.
When you assign a variable, its “ownership” moves.
If you try to use the originfn main1() {
let s1 = String::from("hello"); // s1 comes into scope
let s2 = s1; // s1's value moves into s2
// println!("{}", s1); // this line would cause a compile-time error because s1 is no longer valid
println!("{}", s2); // this works fine
} // s2 goes out of scope and is dropped here

al after move, you’ll get an error

```rust
fn main1() {
let s1 = String::from("hello"); // s1 comes into scope
let s2 = s1; // s1's value moves into s2
// println!("{}", s1); // this line would cause a compile-time error because s1 is no longer valid
println!("{}", s2); // this works fine
} // s2 goes out of scope and is dropped here
```

![Ownership and Borrowing](../images/008_ownership/image.png)

## References

- A reference lets code read or modify data without moving ownership.

- An immutable reference:

```rust
let s = &text;
allows read-only access.
```

- A mutable reference:

```rust
let s = &mut text;
 allows changing the value (only if the variable is declared mutable).

```

## Problems

1. Create a `String` variable `text`, move it to another variable `text2`, and print `text2` (demonstrate ownership transfer)
2. Create a `String`, pass it to a function that takes ownership, and try to use it after the function call (this should fail - comment it out)
3. Create a `String`, create an immutable reference `&text`, print it using the reference, and then print the original string
4. Create a mutable `String`, create a mutable reference, modify the string through the reference, and print the modified value
5. Write a function that takes ownership of a `String` and returns it, then use the returned value in the caller.
