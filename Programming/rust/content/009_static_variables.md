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
