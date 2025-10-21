// Trait without lifetime annotations
trait Greeter<T> {
    fn greet(&self, name: &str) -> T;
}

struct Dog;

impl Greeter<String> for Dog {
    fn greet(&self, name: &str) -> String {
        format!("{} the dog says woof!", name)
    }
}

fn greet_any<T, G>(greeter: &G, name: &str) -> T
where
    G: Greeter<T>,
{
    greeter.greet(name)
}

fn main() {
    let dog = Dog;
    let greeting = greet_any(&dog, "Rex");
    println!("{}", greeting);
}
