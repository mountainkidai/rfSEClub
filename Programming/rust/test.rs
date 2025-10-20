struct Dog;
struct Cat;

trait Animal{
    fn talk(&self);
}

impl Animal for Dog{
    fn talk(&self){
        println!("dog says bow bow");
    }
}

impl Animal for Cat{
    fn talk(&self){
        println!("Cat says meow meow");
    }
}

fn main(){
    let cat = Cat;
    let dog = Dog;
    cat.talk();
    dog.talk();
}