// generics in rust

// generics allow you to write flexible and reusable code
// that can work with different data types
use std::fmt::Debug;
// lets your write a function or a struct that can work with different data types
// print pair function with generics
fn print_pair<T: Debug, U: Debug>(a: T, b: U) {
    //Debug trait bound to ensure that the types can be printed using {:?}
    println!("Pair: ({:?}, {:?})", a, b);
}  

fn main() {
    // calling print_pair with different types
    print_pair(1, "hello");
    print_pair(3.14, true);
    print_pair("rust", 'R');
}
// output:
// Pair: (1, hello)
// Pair: (3.14, true)
// Pair: (rust, R)
// here T and U are type parameters that can be any type
// this makes the function flexible and reusable with different data types