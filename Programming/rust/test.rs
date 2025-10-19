trait Printable{
    fn print(&self);
}

struct Person{
    name:String,
}

impl Printable for Person {
    fn print(&self){
        println!("person:{}",self.name);
    }
}

fn display<T:Printable>(item:T){
    item.print();
}

fn main(){
    let p = Person{name:"koeld".to_string(),};
    display(p);
}