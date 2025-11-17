fn main(){
let some_number = Some(7);
let no_number: Option<i32> = None;

let number = some_number.unwrap();
let fail = no_number.unwrap();

println!("no is {:?}",number);
println!("no is {:?}",fail);

}