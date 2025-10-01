fn main(){
    let  x = 5; // by default size of x would be i32 means 4 bytes
    // range would be -2,147,483,648 to 2,147,483,647

    let x:u32 = 6; // valid in Rust
    // range would be 0 to 4,294,967,295
    println!("value of x is: {}", x);
}