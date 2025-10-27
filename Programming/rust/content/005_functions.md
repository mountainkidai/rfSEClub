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
