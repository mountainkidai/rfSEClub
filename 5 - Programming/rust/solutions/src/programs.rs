// Write a Rust program that declares variables of different primitive types (i32, f64, bool, char),
// assigns values, and prints them. 
fn main() {
    let grade:char = 'A';
    let marks:i32 = 90;
    let percentage:f64 = 75.5;
    let result:bool = true;
    println!("grade is {}",grade);
    println!("marks : {}",marks);
    println!("percentage : {}",percentage);
    println!("result : {}",result);
}

// Write a Rust program that declares tuples,
// assign values, and prints them. 
fn main() {
    let grades :(i32,f64,bool,&str) = (92,93.2,true,"koel");
    grades.0 = 23;
    println!("Student name: {}",grades.3);
    println!("Student marks: {}",grades.0);

}

// Write a Rust program that declares array,
// assign values, and prints them. 
fn main() {
    let mut grades :[i32;3] = [92,93,32];
    grades[0] = 23;
    println!("Student subject 1: {}",grades[2]);
    println!("Student sub 2: {}",grades[1]);
    println!("Student sub 3: {}",grades[0]);

}
