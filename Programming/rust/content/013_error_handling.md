#### Result is an enum type that has two variants:

- Ok(T) which represents success and contains a value of type T
- Err(E) which represents an error and contains an error value of type E

#### Option is an enum type that has two variants:

- Some(T) which contains a value of type T
- None which represents the absence of a value

Both Result and Option represent types that can either hold a value or represent a non-success/failure/absence.

#### The methods unwrap() and expect() are provided on both Option and Result to extract the contained value when you are certain it is present (i.e., either Some or Ok):

- unwrap() extracts the value and panics if called on None or Err.
- expect() does the same but lets you provide a custom panic message for better debugging and clarity when the extraction fails.

### Match

- The match statement in Rust is a powerful way to compare a value against a series of patterns and execute different code depending on which pattern matches. It works a bit like a switch in other languages but much more powerful and safe.

```rust
let number = 3;
match number {
    1 => println!("One"),
    2 => println!("Two"),
    3 => println!("Three"),
    _ => println!("Something else"),
}

```

### Important Features

- Exhaustiveness: You must cover all possible cases, so the compiler checks you've handled every scenario. The wildcard \_ pattern catches everything else.

- Multiple Values in One Arm: You can use | to combine patterns that run the same code.

```rust
match number {
    1 | 2 | 3 => println!("One, two, or three"),
    _ => println!("Other"),
}
```

### Ranging patterns

```rust
match number {
    1..=5 => println!("Between one and five"),
    _ => println!("Other"),
}
```

## Enums

- Take input from user

```rust


```

## Two Key Enums

### Math with Option enum

#### The Option enum represents a value that can either be

- Some(T) — contains a value of type T.
- None — means no value.
- This is Rust's way of handling values that might be missing (like "null" in other languages, but safer).

```rust
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,          // No value: return None
        Some(i) => Some(i + 1), // Value `i`: add 1 and wrap in Some
    }
}

fn main() {
    let five = Some(5);
    let none: Option<i32> = None;

    let six = plus_one(five);
    let still_none = plus_one(none);

    println!("six = {:?}", six);         // Outputs: six = Some(6)
    println!("still_none = {:?}", still_none); // Outputs: still_none = None
}

// When you write let five = 6;, the variable five directly holds the integer 6. Its type is i32 (by default).
// When you write let five: Option<i32> = Some(6);, the variable five holds an Option wrapping the integer 6. It’s not just an i32; it’s an Option<i32>, which means it may or may not have an i32 inside.


```

### Match with Result

#### Result<T, E> represents either a successful outcome

- Ok(value) — contains a successful value
- Err(error) — contains an error

```rust
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err(String::from("Cannot divide by zero"))
    } else {
        Ok(a / b)
    }
}

fn main() {
    let result1 = divide(10.0, 2.0);
    let result2 = divide(5.0, 0.0);

    match result1 {
        Ok(value) => println!("Success: {}", value),
        Err(e) => println!("Error: {}", e),
    }

    match result2 {
        Ok(value) => println!("Success: {}", value),
        Err(e) => println!("Error: {}", e),
    }
}

```

```rust
let fail = no_number.unwrap_or(0);  // Provide a default value instead of panicking
println!("no is {:?}", fail);

```
