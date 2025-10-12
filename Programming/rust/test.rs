trait Greet <T>  {
    fn greet(&self) -> String;
}
struct Person {
    name: String,
}

// impl Greet<String> for Person {
//     fn greet(&self) -> String {
//         format!("Hello, {}!", self.name)
//     }
// }
// Greet<String> means the Greet trait is implemented for the type String

impl <T> Greet<T> for Person {
    fn greet(&self) -> String {
        format!("Hello, {}!", self.name)
    }
}

// Greet<T:String> means the Greet trait is implemented for any type T that is a String
fn main() {
    let person = Person { name: "Alice".to_string() };
    println!("{}", person.greet());
    // Output: Hello, Alice!
}