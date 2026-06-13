### Static Variables in Rust

Declared with the static keyword, these are variables that have a fixed location in memory throughout the program's execution.

They exist for the entire lifetime of the program, meaning they are allocated once and remain allocated until the program ends.

#### Immutable by Default, Mutable with static mut

- When you declare a static variable using static in Rust, it is immutable by default. This means its value cannot change after initialization. For example:

```rust
static MAX_USERS: u32 = 100;
// This variable lives for the entire program duration and its value cannot be changed.
```

#### Mutable statics (static mut)

- You can declare a mutable static variable with static mut if you need to change its value:

```rust
static mut COUNTER: u32 = 0;
```

- However, accessing or mutating a static mut variable is unsafe because Rust’s safety guarantees cannot prevent data races in concurrent environments automatically. You must use an unsafe block to read or write:

Because they have a fixed memory address, static variables are most often used for global state, configuration, or interfacing with C code.

```rust
unsafe {
    COUNTER += 1;
}

```

## Problems

1. Create a static immutable variable `APP_NAME` with value "MyApp" and print it
2. Create a static variable `MAX_CONNECTIONS` with type `u32` and value 100, then print it
3. Create a static mutable variable `COUNTER`, increment it in an unsafe block, and print the value
4. Create two static variables `MIN_VALUE` and `MAX_VALUE`, use them in a calculation, and print the result
5. Create a static string slice `WELCOME_MSG` and use it in a function that prints a welcome message.
