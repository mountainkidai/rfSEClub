//traits example


struct Person {
    name:String,
    age:u8,
}

struct Dog {
    name:String,
}

trait Greet {
    fn greet(&self);
}

impl Greet for Person {
    fn greet(&self) {
        println!("Hello, my name is {} and I am {} years old.", self.name, self.age);
    }
}

impl Greet for Dog {
    fn greet(&self) {
        println!("Woof! My name is {}.", self.name);
    }
}

fn main() {
    let person = Person {
        name: String::from("Steve"),
        age: 12,
    };
    let dog = Dog {
        name: String::from("Buddy"),
    };
    person.greet();
    dog.greet();
}
