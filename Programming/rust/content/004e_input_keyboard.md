```rust
use std::io; #[derive(Debug)]
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
    let mut destination = String::new();
    println!("Enter destination");
    io::stdin()
    .read_line(&mut destination)
    .expect("failed to read input");
    let destination = destination.trim();
    println!("finding directions for {}",destination);
    match destination {
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
