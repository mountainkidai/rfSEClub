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
