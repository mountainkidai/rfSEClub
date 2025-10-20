struct Dog;
struct Cat;

trait Animal {
    fn talk(&self);
}

impl Animal for Dog {
    fn talk(&self) {
        println!("dog says bow bow");
    }
}

impl Animal for Cat {
    fn talk(&self) {
        println!("Cat says meow meow");
    }
}

fn main() {
    let cat = Cat;
    let dog = Dog;

    // Trait object references: a pointer to a value of some type implementing Animal
    let animal1: &dyn Animal = &cat;
    let animal2: &dyn Animal = &dog;

    // When calling talk(), Rust uses dynamic dispatch:
    // it looks up the correct method for the actual type to call at runtime.
    animal1.talk();  // Output: Cat says meow meow
    animal2.talk();  // Output: dog says bow bow
}
