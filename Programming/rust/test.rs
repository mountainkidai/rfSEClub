fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,          // No value: return None
        Some(i) => Some(i + 1), // Value `i`: add 1 and wrap in Some
    }
}

fn main() {
    let five: Option<i32> = Some(5);
    let none: Option<i32> = None;

    let six = plus_one(five);
    let still_none = plus_one(none);

    println!("six = {:?}", six);         // Outputs: six = Some(6)
    println!("still_none = {:?}", still_none); // Outputs: still_none = None
}
