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

  fn identity<T>(value: T) -> T {
        value
    }

    fn main() {
        let x = identity(42);        // Works, T = i32
        let y = identity("hello"); // Works, T = &str
        println!("x and y are {} and {}",x,y);
    }