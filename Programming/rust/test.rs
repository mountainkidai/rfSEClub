struct Pair<T>{
    first:T,
    second:T,
}
fn main(){
    let p1 = Pair{first:1,second:2}; // T is i32
    let p2 = Pair{first:'a',second:'b'}; // T is &str
    println!("p1:({},{}), p2:({}, {})",p1.first,p1.second,p2.first,p2.second);
}