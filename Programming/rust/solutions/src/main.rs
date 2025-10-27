// Write a Rust program that declares array,
// assign values, and prints them. 

mod custom_crate;

fn main() {
    let output = custom_crate::arithmetic::add(2,4).result();
    println!("output is {output}");

}
