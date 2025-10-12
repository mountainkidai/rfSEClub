trait Greet {
    fn print(&self);
}

struct Person {
    name: String,
}

impl Greet for Person {
    fn print(&self) {
        println!("Hello, my name is {}", self.name);
    }
}

fn main() {
    let person = Person {
        name: String::from("Alice"),
    };
    println!("person name is: {}", person.name);
    person.print();
    println!("eop person name is: {}", person.name); // This will cause a compile-time error
}