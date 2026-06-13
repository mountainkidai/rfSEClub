## 2. Enums

An enum in Rust is like a list of choices where a value can be exactly one of those choices, called variants (Quit,Move,Write). Each variant can also hold its own data if needed (Move {x:i32,y:i32}). This helps you represent things that can be different types or states but are still grouped as one overall concept.

### Example

```rust
enum Direction {
    East,
    West,
    South,
    North,
}


fn main(){
    let direction = Direction::East;

match direction {
    Direction::West => println!("go east"),
    Direction::East => println!("go east"),
    _=> println!("stand still"),
};
}
```

```rust
// Basic enum with unit variants
#[derive(Debug)]
enum Direction {
    East,
    West,
    South,
    North,
}
#[derive(Debug)]
enum Message{
    Quit,
    Move {x:i32,y:i32},
    Write(String),
    ChangeColor(i32,i32,i32),
}

fn main(){
    let destination = String::from("applehq");

    match destination.as_str() {
        "applehq" => {
            let direction = Direction::East;
            match direction {
                Direction::East => {
                    let message = Message::Move{x:1,y:2};
                    let newColor = Message::ChangeColor(244,232,211);
                    println!("mesage is {:?}",message);
                    println!("newColor is {:?}",newColor);

                },
                _ => println!("Stand still"),
            };

        }
        _ => println!("please enter a destination"),
    };
}

```

## Problems

1. Create an enum `Status` with variants `Active`, `Inactive`, and `Pending`, create an instance, and use match to print a message for each variant
2. Create an enum `Message` with variants `Quit`, `Move { x: i32, y: i32 }`, and `Write(String)`, create instances of each, and print them using Debug
3. Create an enum `Color` with variants `Red`, `Green`, `Blue`, use match to return a string description for each color, and print the result
4. Create an enum `Result` with variants `Success(String)` and `Error(String)`, create both types of instances, and handle them with match
5. Create an enum `Shape` with variants `Circle(f64)`, `Rectangle(f64, f64)`, and `Square(f64)`, use match to calculate and print the area for each shape.
