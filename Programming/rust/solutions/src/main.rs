// Write a Rust program that declares array,
// assign values, and prints them. 

fn main() {
    let mut grades :[i32;3] = [92,93,32];
    grades[0] = 23;
    println!("Student subject 1: {}",grades[2]);
    println!("Student sub 2: {}",grades[1]);
    println!("Student sub 3: {}",grades[0]);

}
