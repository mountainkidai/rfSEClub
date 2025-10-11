// reference in rust

fn main() {
   let mut name = "AlpKid";
name = "OtherName"; // Okay, rebinds to new string slice
// But you cannot mutate the text "AlpKid" in-place
println!("name is: {}", name);

}