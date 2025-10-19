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

fn print_value<T: std::fmt::Debug>(value: T) {
    println!("Got a value! {:?}",value);
}

fn main() {
    print_value(42);
    print_value("hello");
    print_value(3.14);
}
