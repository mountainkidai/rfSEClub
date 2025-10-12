trait Printable<T> {
    fn print(&self);
}

struct Person {
    name: String,
    age: u8,
}

impl<T> Printable<T> for Person {
    fn print(&self) {
        println!("Person: {}, Age: {}", self.name, self.age);
    }
}
fn main() {
    let person = Person {
        name: String::from("Alice"),
        age: 30,
    };
    person.print(); // Output: Person: Alice, Age: 30
}