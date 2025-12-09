### Functions

Provide reusable blocks of code.

Take parameters as inputs and return values.

Defined with fn keyword.

Support return type declarations.

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b  // last expression is returned implicitly
}

fn main() {
    let result = add(5, 7);
    println!("Sum is {}", result);
}
```

```rust

```

```rust
fn add(a:i32,b:i32) -> i32{
    a+b
}



fn main() {
    let num1 = 2;
    let num2 = 4;
    let sub = |a:i32,b:i32| a+b;
    let result = add(num1,num2);
    let sub_result = sub(num1,num2);
    println!("sub of {num1} and {num2} is {sub_result}");
    println!("addition of {num1} and {num2} is {result}");
}
```

```rust

fn wrapper_function<F>(func:F)-> i32
where F: Fn()-> i32,
{
    func()
}

fn add(a:i32,b:i32) -> i32 {
    a+b
}


fn main(){
    let result = wrapper_function(|| add(2,3));
    println!("result is {result}");
}



```

```rust
struct Calc;

// In Rust, associated functions (like constructors or static methods) with the signature fn new() -> Self are called on the type with ::.
//Instance methods that take &self or &mut self are called on a specific instance with .

impl Calc{
//static methodod

    pub fn add(a:i32,b:i32) -> i32 {
    a+b
    }
}


fn main(){
    let rr = Calc::add(2,3);
    println!("result is {rr}");
}


impl Calc{
//static methodod

    pub fn new() -> Self{
        println!("object created");
        Calc
    }
    pub fn add(&self,a:i32,b:i32) -> i32 {
    a+b
    }
}


fn main(){
    let rr = Calc::new().add(2,3);
    println!("result is {rr}");
}


```

## Problems

1. Write a function `add` that takes two `i32` parameters and returns their sum, then call it and print the result
2. Write a function `greet` that takes a `&str` parameter (name) and prints a greeting message
3. Write a function `max` that takes two `i32` parameters and returns the larger one, test it with different values
4. Write a function `is_even` that takes an `i32` and returns a `bool` indicating if the number is even
5. Write a function `calculate_area` that takes `width` and `height` as `f64` parameters and returns the area of a rectangle.
