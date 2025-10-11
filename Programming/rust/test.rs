fn main() {
    let s1 = String::from("hello"); // s1 comes into scope
    let s2 = s1; // s1's value moves into s2
    println!("{}", s1); // this line would cause a compile-time error because s1 is no longer valid
    println!("{}", s2); // this works fine
} // s2 goes out of scope and is dropped here

