// Union: holds all variants in the same memory location, no tag stored
union MyUnion {
    i: i32,
    f: f32,
}

fn main(){
let mut u = MyUnion { i: 10 };

unsafe {
    println!("Union as integer: {}", u.i);  // Correct reading of `i`
    u.f = 3.14;
    println!("Union as float: {}", u.a);    // Correct reading of `f`
    // println!("{}", u.i); // Would be unsafe here — we wrote `f`, not `i`
}
}