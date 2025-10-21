fn main(){
    let  x = 5; // by default size of x would be i32 means 4 bytes
    // range would be -2,147,483,648 to 2,147,483,647

    let x:u32 = 6; // valid in Rust
    // range would be 0 to 4,294,967,295
    println!("value of x is: {}", x);
}

//ownership example

/* 
Rust’s ownership system ensures memory safety without garbage collection. 
Each value in Rust has a single owner; when the owner goes out of scope, Rust frees the memory automatically.
When you assign a variable, its “ownership” moves.
If you try to use the originfn main1() {
    let s1 = String::from("hello"); // s1 comes into scope
    let s2 = s1; // s1's value moves into s2
    // println!("{}", s1); // this line would cause a compile-time error because s1 is no longer valid
    println!("{}", s2); // this works fine
} // s2 goes out of scope and is dropped here

al after move, you’ll get an error

*/
fn main1() {
    let s1 = String::from("hello"); // s1 comes into scope
    let s2 = s1; // s1's value moves into s2
    // println!("{}", s1); // this line would cause a compile-time error because s1 is no longer valid
    println!("{}", s2); // this works fine
} // s2 goes out of scope and is dropped here


/* 



*/

fn print_value<T>(value: T) -> T{
    value
}

fn main() {
    print_value(42);
    print_value("hello");
    println!("Generic function called s {}.", print_value(3.14));
}

trait Printable {
    fn print(&self);
}

struct Circle {
    radius: f64,
}
impl Printable for Circle {
    fn print(&self){
        println!("Circle with radius: {}", self.radius);
    }
}

fn print_item<T:Printable>(item:T){
    item.print();
}

// the type T must implement the Printable trait

struct Square {
    side: f64,
}

fn main() {
    let circle = Circle { radius: 5.0 };
    print_item(circle);
    // Output: Circle with radius: 5.0
    let square = Square { side: 3.0 };
    // print_item(square); // This will cause a compile-time error
}

trait Printable {
    fn print(&self);
}

trait Describable {
    fn describe(&self) -> String;
}

struct Square {
    side: f64,
}

impl Printable for Square {
    fn print(&self) {
        println!("Square with side: {}", self.side);
    }
}
impl Describable for Square {
    fn describe(&self) -> String {
        format!("A square with side length {}", self.side)
    }
}

fn show_item<T: Printable + Describable>(item: T) {
    item.print();
    println!("Description: {}", item.describe());
}

fn main() {
    let square = Square { side: 4.0 };
    show_item(square);
    // Output:
    // Square with side: 4
    // Description: A square with side length 4
}

trait Printable {
    fn print(&self);
}
// This trait says: any type that implements Printable must have a print() method.
// and type can be a struct, enum, or even a primitive type such as i32 or f64.

struct Person {
    name: String,
    age: u32,
}
impl Printable for Person {
    fn print(&self) {
        println!("Person: {}, Age: {}", self.name, self.age);
    }
}

struct Animal {
    species: String,
}

impl Barkable for Animal {
    fn bark(&self) {
        println!("{} says Woof!", self.species);
    }
}

fn display<T: Printable>(item: T) {
    item.print();
}

fn main() {
    let person = Person {
        name: "Alice".to_string(),
        age: 30,
    };
    person.print(); // Output: Person: Alice, Age: 30
    let person2 = Person {
        name: "Bob".to_string(),
        age: 25,
    };
    display(person2); // Output: Person: Bob, Age: 25

    let animal = Animal {
        species: "Dog".to_string(),
    };
    animal.bark(); // Output: Dog says Woof!
    // display(animal); // This will cause a compile-time error
    animal.Printable(); // This will cause a compile-time error
    
}

// Union: holds all variants in the same memory location, no tag stored
union MyUnion {
    i: i32,
    f: f32,
}

fn main(){
let mut u = MyUnion { i: 10 };

unsafe {
    println!("Union as integer: {}", u.i);  // Correct reading of `i`
    u.f = 3.14;
    println!("Union as float: {}", u.a);    // Correct reading of `f`
    // println!("{}", u.i); // Would be unsafe here — we wrote `f`, not `i`
}
}

trait FoodProvider<T>{
    fn food(&self) ->T;
}

struct Dog;

impl FoodProvider<String> for Dog {
    fn food(&self)->String {
        "Fish".to_string()
    }
}

fn print_food<P:FoodProvider<String>>(p:&P){
    println!("Food : {} ", p.food());
}


fn main(){
    let dog = Dog;
    print_food(&dog);
}

trait FoodProvider{
    type Food;
    fn food(&self) ->Self::Food;
}

struct Dog;

impl FoodProvider for Dog {
    type Food = String;
    fn food(&self)->Self::Food {
        "Fish".to_string()
    }
}

fn print_food<P>(p:&P)
where
P:FoodProvider,
P::Food:std::fmt::Display,
{
    println!("Food : {} ", p.food());
}


fn main(){
    let dog = Dog;
    print_food(&dog);
}