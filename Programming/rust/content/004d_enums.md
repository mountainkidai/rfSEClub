## 2. Enums

An enum in Rust is like a list of choices where a value can be exactly one of those choices, called variants (Quit,Move,Write). Each variant can also hold its own data if needed (Move {x:i32,y:i32}). This helps you represent things that can be different types or states but are still grouped as one overall concept.

### Example

```rust
// Basic enum with unit variants
enum Direction {
    North,
    South,
    East,
    West,
}

// Enum with associated data
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

// Create enum instances
let msg1 = Message::Quit;
let msg2 = Message::Write(String::from("hello"));
let msg3 = Message::Move { x: 10, y: 20 };

// Use match to handle enum variants
match msg2 {
    Message::Write(text) => println!("Text: {}", text),
    Message::Move { x, y } => println!("Move to ({}, {})", x, y),
    _ => println!("Other message"),
}

```
