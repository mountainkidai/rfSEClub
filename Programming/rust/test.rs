fn longer(x: &str, y: &str) -> &str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let string1 = String::from("short");
    let result;
    {
        let string2 = String::from("a longer string");
        result = longer(string1.as_str(), string2.as_str());
        println!("Longer string is {}", result);
    } // string2 is dropped here
    // println!("Longer string is {}", result); // ERROR if uncommented - dangling reference
}
