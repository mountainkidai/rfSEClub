// trait Printable{
//     fn print(&self);
// }

// struct Person{
//     name:String,
// }

// impl Printable for Person {
//     fn print(&self){
//         println!("person:{}",self.name);
//     }
// }

// fn display<T:Printable>(item:T){
//     item.print();
// }

// fn main(){
//     Person{name:"koeld".to_string(),}.display();
// }

trait Greet {
    fn print(self);
}

struct Person {
    name: String,
}

impl Greet for Person {
    fn print(self) {
        println!("Hello, my name is {}", self.name);
    }
}

fn main() {
    let person = Person {
        name: String::from("Alice"),
    };
    println!("person name is: {}", person.name);
    person.print();
    println!("eop person name is: {}", person.name); 
}