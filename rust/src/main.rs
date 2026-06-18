// use std::io;

// fn main(){
//     println!("guess a number");
//     println!("Please input your guess.");

//     let mut guess = String::new();
//     io::stdin()
//     .read_line(&mut guess)
//     .expect("failed");
//     println!("You guessed: {}", guess);
// }



// use std::io;

// use rand::Rng;

// fn main() {
//     println!("Guess the number!");

//     let secret_number = rand::thread_rng().gen_range(1..=100);

//     println!("The secret number is: {secret_number}");

//     println!("Please input your guess.");

//     let mut guess = String::new();

//     io::stdin()
//         .read_line(&mut guess)
//         .expect("Failed to read line");

//     println!("You guessed: {guess}");
// }



use std::cmp::Ordering;
use std::io;
use rand::Rng;

fn main(){
    println!("Guess the number!");
    let secret_number = rand::thread_rng().gen_range(1..=100);

    loop{
        println!("Please input your guess.");
        let mut guess = String::new();
        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        // if guess is q then quit the game
        if guess.trim() == "q"{
            println!("Quitting the game. The secret number was: {secret_number}");
            break;
        }
       

        let guess:u32 = match guess.trim().parse(){
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {guess}");

        match guess.cmp(&secret_number){
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }

    }

}