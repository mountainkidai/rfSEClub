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


## Problems

1. Write a program that asks the user to enter their name, reads the input, and prints a greeting message
2. Write a program that asks for two numbers, reads them as strings, converts them to integers, adds them, and prints the result
3. Write a program that asks the user to enter a destination, reads it, and uses match to print different messages based on the input
4. Write a program that asks for a number, reads it, and prints whether it's even or odd
5. Write a program that asks for three pieces of information (name, age, city), reads them all, and prints a formatted summary


