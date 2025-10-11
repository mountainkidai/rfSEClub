fn main(){
    let  x = 5; // by default size of x would be i32 means 4 bytes
    // range would be -2,147,483,648 to 2,147,483,647

    let x:u32 = 6; // valid in Rust
    // range would be 0 to 4,294,967,295
    println!("value of x is: {}", x);
}

//ownership example
fn main1() {
    let s1 = String::from("hello"); // s1 comes into scope
    let s2 = s1; // s1's value moves into s2
    // println!("{}", s1); // this line would cause a compile-time error because s1 is no longer valid
    println!("{}", s2); // this works fine
} // s2 goes out of scope and is dropped here
