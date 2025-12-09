A static variable has a fixed memory location for the entire duration of the program.

It is stored in the program’s Data Segment (if initialized) or BSS Segment (if uninitialized).

static variables are essentially global variables with a fixed address, accessible throughout the program.

Unlike const, static variables exist at runtime and you can take pointers to them, making them reachable by reference.

They can be mutable using static mut, but accessing or modifying mutable statics is unsafe to prevent data races.

static variables live for the program’s entire lifetime ('static lifetime).

```rust
static GREETING: &str = "Hello, static!";   // Immutable static data, stored in Data Segment
static mut COUNTER: u32 = 0;                 // Mutable static, stored in BSS Segment

fn main() {
    println!("{}", GREETING);

    unsafe {
        COUNTER += 1;                        // Accessing mutable static requires unsafe block
        println!("COUNTER: {}", COUNTER);
    }
}
```

GREETING is an immutable static string stored in the Data segment.

COUNTER is a mutable static integer, located in BSS segment (zero-initialized).

Both have a fixed location in memory and can be accessed globally.

- [refer to the 003d_ram_updated.md article]("")
