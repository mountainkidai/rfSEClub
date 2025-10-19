## Modules

Modules organize related code into namespaces.

They help group functions, structs, enums, and other items logically.

Modules can be nested.

Use mod keyword to define a module.

Modules control visibility through pub keyword.

```rust
mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }

    mod inner {
        pub fn sub(a: i32, b: i32) -> i32 {
            a - b
        }
    }
}

fn main() {
    let sum = math::add(3, 4);
    println!("Sum: {}", sum);

    // let difference = math::inner::sub(7, 2); // error: not public

    // To access inner::sub, it must be made public up to outer:
}

```
