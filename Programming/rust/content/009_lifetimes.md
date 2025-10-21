## Lifetimes

- In Rust, every reference points to some data in memory.

A lifetime is the span of time (or scope) during which that reference remains valid.

Rust's compiler uses lifetimes to ensure references never outlive the data they point to, preventing bugs like dangling pointers or use-after-free.

Why Lifetimes Exist (First Principles)

- Memory ownership in Rust means exactly one owner at a time.

When the owner goes out of scope, the data is dropped.

References must not outlive their owners.

Lifetimes represent these validity periods explicitly and statically.

Every Reference Has a Lifetime
By default, Rust infers lifetimes.

But sometimes you must declare them explicitly — especially for function inputs and outputs involving references.

### Lifetime Syntax Basics

```rust
fn foo<'a>(x: &'a i32) -> &'a i32 {
x
}
```

- <'a> declares a lifetime parameter named 'a.
- &'a i32 means "a reference valid at least as long as 'a".
- Both input x and output reference share the same lifetime 'a.

### Example

```rust
fn main() {
    let r;
    {
        let x = 5;
        r = &x; // reference to x
    } // x goes out of scope here
    // println!("{}", r); // ERROR! 'r' outlives 'x'
}
// Rust prevents r from living longer than x.
```

### another example

```rust
fn longer(x: &str, y: &str) -> &str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let string1 = String::from("short");
    let result;
    {
        let string2 = String::from("a longer string");
        result = longer(string1.as_str(), string2.as_str());
        println!("Longer string is {}", result);
    } // string2 is dropped here
    // println!("Longer string is {}", result); // ERROR if uncommented - dangling reference
}

```

- The function longer returns a reference without any lifetime annotations.

Rust compiler cannot understand how long the returned reference is valid.

Because parameter references x and y have different possible lifetimes, compiler cannot infer which one the return value refers to.

This ambiguity leads to a compilation error.

```rust
// Returns the longer of two string slices with shared lifetime 'a
fn longer<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let string1 = String::from("hello");  // 'string1' lives start here, label as lifetime 's1
    let result;
    {
        let string2 = String::from("goodbye");  // 'string2' starts lifetime 's2 here
        result = longer(string1.as_str(), string2.as_str());

        // 'a lifetime here is the overlap of 's1 and 's2 (shorter of the two lifetimes)
        println!("Longer string is {}", result);
    } // 's2 ends here, string2 is dropped

    // println!("Longer string is {}", result);
    // ERROR if uncommented:
    // 'result' references data in 'string2' which no longer exists (lifetime 's2 ended)
}


```

- What lifetimes do:

The lifetime parameter 'a connects input lifetimes to the output lifetime.

Declares that the returned reference is valid only as long as both input references are valid.

Rust compiler can now enforce that result cannot live longer than the shortest-lived input (string2’s slice).

This prevents dangling references at compile time.

```text
Without lifetimes                                                |  With lifetimes
-----------------------------------------------------------------+--------------------------------------------------------------------------
Compiler cannot infer returned reference lifetime; rejects code  |  Return lifetime explicitly tied to input lifetimes; code compiles safely
Ambiguous how long memory is valid                               |  Clear contract on reference validity
Risk of dangling references at runtime (if allowed)              |  Compile-time safety guarantees
```
