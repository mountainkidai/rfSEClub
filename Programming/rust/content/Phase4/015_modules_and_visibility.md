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

## Problems

1. Create a module `math` with a public function `add` that takes two `i32` and returns their sum, then call it from `main`
2. Create a module `utils` with a public function and a private function, demonstrate that only the public one is accessible
3. Create a nested module structure (e.g., `outer::inner`), make functions public at the right levels, and call them from `main`
4. Create a module with a public struct and implement a public method on it, then use the struct in `main`
5. Create multiple modules (`math`, `string_utils`), each with public functions, and use functions from both modules in `main`.
