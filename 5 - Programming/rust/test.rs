async fn say_hello() {
    println!("Hello, world!");
}

#[tokio::main]
async fn main() {
    say_hello().await; // Waits async for say_hello to finish
}
