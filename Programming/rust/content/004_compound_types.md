## 2. Compound Types: Grouping Data

Compound types in Rust group multiple values into a single type, allowing you to organize related data efficiently. Understanding these types is crucial for writing well-structured, maintainable Rust code and becoming proficient in the language.

### Types

1. tuples
2. arrays

## User-defined Types in Rust

- User-defined Types — structs, enums, and unions. These let you create your own complex types by combining simpler ones.

## 1. Structs

- A struct is like a custom record or data container with named fields. It bundles related data into one type, making it easier to organize
  your program.

### Example

```rust
struct Person {
    name: String,
    age: u8,
}

let alice = Person {
    name: String::from("Alice"),
    age: 30,
};

```

You access fields with dot notation

```rust
alice.name
```

## 2. Enums

An enum in Rust is like a list of choices where a value can be exactly one of those choices, called variants (Quit,Move,Write). Each variant can also hold its own data if needed (Move {x:i32,y:i32}). This helps you represent things that can be different types or states but are still grouped as one overall concept.

Imagine you have a type called Shape that can be a Circle, Square, or Triangle. An enum lets you say "a shape is one of these kinds, but not more than one at the same time."

### Example

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
}

let msg1 = Message::Quit;
let msg = Message::Move { x: 10, y: 20 };
```

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

## Union

- Structs are like a container with multiple named fields, all existing together at the same time. Example: a Person struct contains name, age, and height fields.

- Enums represent a type that can be exactly one of several variants at a time. Each variant can have data, but only one variant is active at once. Rust stores a hidden tag internally to track which variant is active, making enums safe to use.

- Unions are similar to enums in that they store one of several variants at a time, but unions do not store a tag tracking the active variant. All variants share the same memory space, so you can only safely read the variant you last wrote to.

```rust
// Struct: holds all fields simultaneously
struct MyStruct {
    i: i32,
    f: f32,
}

let s = MyStruct { i: 10, f: 3.14 };
println!("Struct: i = {}, f = {}", s.i, s.f);  // Both values available safely


// Enum: holds exactly one variant at a time, with internal tag to track active variant
enum MyEnum {
    Int(i32),
    Float(f32),
}

let e1 = MyEnum::Int(10);
let e2 = MyEnum::Float(3.14);

match e1 {
    MyEnum::Int(i) => println!("Enum holds integer: {}", i),
    MyEnum::Float(f) => println!("Enum holds float: {}", f),
} // Safe — Rust knows which variant is active


// Union: holds all variants in the same memory location, no tag stored
union MyUnion {
    i: i32,
    f: f32,
}

let mut u = MyUnion { i: 10 };

unsafe {
    println!("Union as integer: {}", u.i);  // Correct reading of `i`
    u.f = 3.14;
    println!("Union as float: {}", u.f);    // Correct reading of `f`
    // println!("{}", u.i); // Would be unsafe here — we wrote `f`, not `i`
}
// n a union, Rust does not remember the field name or which variant is currently stored. Instead, it treats the entire union as a single memory location.
// When you write to one field (say, i), it updates the bits in that shared memory.
// Later, if you read from a different field (say, f), Rust reads the same bits but interprets them as a different type.
// The union itself just stores a shared chunk of memory, not metadata about which field is active.
```

### Pointer & Reference Types

#### References (&T and &mut T)

- References are borrowed pointers. They let you refer to some data without owning it.
- You can have immutable references (&T) or mutable references (&mut T).
- They live on the stack and don't directly own data.
- Rust ensures references are always safe with rules enforced by the borrow checker.

Example:

```rust
rust
let x = 5;
let y = &x; // Immutable reference to x
println!("y: {}", y);

let mut a = 10;
let b = &mut a; // Mutable reference to a
\*b += 5;
println!("a after mutation: {}", a);
```
