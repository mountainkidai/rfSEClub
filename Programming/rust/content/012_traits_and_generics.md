### Traits basics

- impl for traits
- Traits with functions
- The next topics to deepen your understanding of traits and their ecosystem are:

## Trait Bounds

- How to use traits as constraints on generic parameters
- Inline bounds vs where clauses

## Trait Objects (dyn Trait)

- Dynamic dispatch with trait objects
- When and why to use them

## Default Implementations in Traits

- Providing default method bodies
- Overriding defaults in implementations

## Trait Inheritance (Supertraits)

- Traits requiring other traits

## Generic Traits

- Traits parameterized by generic types

## Associated Types in Traits

- Placeholder types inside traits tied to implementing types

## Advanced Trait Patterns

- Blanket implementations
- Combination with generics and lifetimes

## Traits

- They define shared behavior that types can implement. Think of them as a way to specify what a type can do, without saying how it does it.

```rust
trait Printable {
    fn print(&self);
}

```

- This trait says: any type that implements Printable must have a print() method.
- and type can be a struct, enum, or even a primitive type such as i32 or f64.

## 2. Implementing Traits

- Once a trait is defined, you implement it for specific types using the impl keyword.

```rust
trait Printable{
    fn print(&self);
}

struct Person{
    name:String,
}

impl Printable for Person {
    fn print(&self){
        println!("person:{}",self.name);
    }
}

fn main(){
    Person{name:"koel".to_string(),}.print();
}

```

- Here, Person now has a print() method as per the Printable trait.

## Generics

- What is a generic function?
  - A generic function is a function that can accept arguments of any type.
  - Instead of writing a different function for each type, you write one generic function that works for all.
  - The generic type parameter is usually written as `<T>`, but it can be any valid name.

```rust
fn print_value<T>(value: T) {
    println!("Got a value!");
}

fn main() {
    print_value(42);
    print_value("hello");
    print_value(3.14);
}

// but to add print feature , we need add Display trait and we will discuss this in detail later.


fn print_value<T: std::fmt::Debug>(value: T) {
    println!("Got a value! {:?}",value);
}

fn main() {
    print_value(42);
    print_value("hello");
    print_value(3.14);
}
//OUTPUT:
// Got a value! 42
// Got a value! "hello"
// Got a value! 3.14


```

## What happens here?

- print_value is generic over type T.
- When you call print_value(42), T becomes i32.
- When you call print_value("hello"), T becomes &str.
- No need to write separate functions for each type.

## Trait Bound

- To enhance the generic function to be able to perform specific operations with the value/T/Trait.
- If you want to actually do something with value, like print its contents, you need to add a trait bound to T:

```rust
use std::fmt::Display;

fn print_value<T: Display>(value: T) {
    println!("{:?}", value);
}

fn main() {
    print_value(42);
    print_value("hello");
    print_value(3.14);
}

```

```rust
trait Greet {
    fn print(self);
}

struct Person {
    name: String,
}

impl Greet for Person {
    fn print(self) {
        println!("Hello, my name is {}", self.name);
    }
}

fn main() {
    let person = Person {
        name: String::from("Alice"),
    };
    println!("person name is: {}", person.name);
    person.print();
    println!("eop person name is: {}", person.name); // This will cause a compile-time error
}
```

## Output

![traits](../images/012_traits.png)

```rust
trait Greet {
    fn print(self);
}

struct Person {
    name: String,
}

impl Greet for Person {
    fn print(self) {
        println!("Hello, my name is {}", self.name);
    }
}

fn main() {
    let person = Person {
        name: String::from("Alice"),
    };
    println!("person name is: {}", person.name);
    person.print();
    println!("eop person name is: {}", person.name); // This will cause a compile-time error
}

```

```rust
trait Greet {
    fn print(&self);
}

struct Person {
    name: String,
}

impl Greet for Person {
    fn print(&self) {
        println!("Hello, my name is {}", self.name);
    }
}

fn main() {
    let person = Person {
        name: String::from("Alice"),
    };
    println!("person name is: {}", person.name);
    person.print();
    println!("eop person name is: {}", person.name);
}

// OUTPUT:
// person name is: Alice
// Hello, my name is Alice
```

```rust
trait Printable {
    fn print(&self);
}

struct Circle {
    radius: f64,
}
impl Printable for Circle {
    fn print(&self){
        println!("Circle with radius: {}", self.radius);
    }
}

fn print_item<T:Printable>(item:T){
    item.print();
}

// the type T must implement the Printable trait

struct Square {
    side: f64,
}

fn main() {
    let circle = Circle { radius: 5.0 };
    print_item(circle);
    // Output: Circle with radius: 5.0
    let square = Square { side: 3.0 };
    // print_item(square); // This will cause a compile-time error
}


```

## Types of Generics

### Generic Functions

- A generic function lets you write one function that works for any type.
- Instead of separate functions for numbers and text, write one generic function.
- Generics allow you to write code with placeholder types like `<T>`.
- They enable code reuse without losing type safety.

```rust
You specify generics with

fn print_anything<T> (variable:T){}
fn print_anything<A> (variable:T){}
```

## `<T>` after the function name

- This declares T as a generic type parameter for the function.
- It tells Rust: "This function is generic and uses the placeholder type T."

## value: T inside the parentheses

- This means the function takes an argument named value whose type is T (the generic type parameter declared earlier).
- It connects the parameter value to the generic type placeholder T.

### Generic Functions That Return a Value (No Display Needed)

```rust
    fn identity<T>(value: T) -> T {
        value
    }

    fn main() {
        let x = identity(42);        // Works, T = i32
        let y = identity("hello"); // Works, T = &str
        println!("x and y are {} and {}",x,y);
    }
// x and y are 42 and hello

```

### Generic Functions Using println! or Formatting Inside (Require Traits like Display)

```rust
    fn print_anything<T: Display> (variable:T){
        println!("{}",variable);
    }
```

## Why Rust Requires Display Trait to Print Generic Values

- When you write a generic function in Rust that prints or formats a generic parameter value, Rust must be sure that the type of value supports printing.

- What does T: Display mean?

- It means "type T must implement the trait Display".
- So when you use T in your function, Rust knows it can call methods defined in the Display trait on values of that type.

## Understanding Display Trait with Examples

What is the Display Trait?

- The Display trait defines how to present a type to end-users as readable text.

- It is used by Rust's {} formatting marker in println! and string-related macros.

- Many standard types like integers, strings, and floats implement Display behind so they can print nicely.

```rust
use std::fmt::Display;

fn print_anything<T: Display>(value: T) {
    println!("Value: {}", value);
}

fn main() {
    print_anything(10);
    print_anything("world");
}

```

## 2. Generic Structs

- Define structs with generic types to hold any type of data.
- Example

```rust
struct Pair<T>{
    first:T,
    second:T,
}
fn main(){
    let p1 = Pair{first:1,second:2}; // T is i32
    let p2 = Pair{first:'a',second:'b'}; // T is &str
    println!("p1:({},{}), p2:({}, {})",p1.first,p1.second,p2.first,p2.second);
}
//Output: p1:(1,2), p2:(a, b)
```

## 3. Using Trait Bounds on Generic Functions

- You can define your own traits that describe behaviors you want generic types to have.
- Define the trait with required methods.
- Implement the trait for custom or existing types.
- Use trait bounds to restrict generic parameters to those types.
  - What Are Trait Bounds in Rust?
    - Simple Explanation:
    - Trait bounds are rules Rust uses to limit what types can be used in generic functions or structs. They say: "The type you use must implement certain traits (behaviors) for the code to work."

```rust
trait Printable {
    fn print(&self);
}

struct Circle {
    radius: f64,
}
impl Printable for Circle {
    fn print(&self){
        println!("Circle with radius: {}", self.radius);
    }
}

fn print_item<T:Printable>(item:T){
    item.print();
}

// the type T must implement the Printable trait

struct Square {
    side: f64,
}

fn main() {
    let circle = Circle { radius: 5.0 };
    print_item(circle);
    // Output: Circle with radius: 5.0
    let square = Square { side: 3.0 };
    // print_item(square); // This will cause a compile-time error
}



```

## 4. Where Clause in Rust

- where clause is a way to specify trait bounds for generic types in a clear and readable way, especially when the bounds get complicated or there are multiple.
- Instead of writing trait bounds directly in the generic parameters, you can write them separately after the function signature with where.
- Suppose we extend the example to compare two items that both implement Printable. Instead of putting the trait bounds inline, we use a where clause:

```rust
trait Printable {
    fn print(&self);
}

trait Describable {
    fn describe(&self) -> String;
}

struct Square {
    side: f64,
}

impl Printable for Square {
    fn print(&self) {
        println!("Square with side: {}", self.side);
    }
}
impl Describable for Square {
    fn describe(&self) -> String {
        format!("A square with side length {}", self.side)
    }
}

fn show_item<T: Printable + Describable>(item: T) {
    item.print();
    println!("Description: {}", item.describe());
}

fn main() {
    let square = Square { side: 4.0 };
    show_item(square);
    // Output:
    // Square with side: 4
    // Description: A square with side length 4
}
```

## How where can fix this:

```rust
trait Printable {
    fn print(&self);
}

trait Describable {
    fn describe(&self) -> String;
}

struct Square {
    side: f64,
}

impl Printable for Square {
    fn print(&self) {
        println!("Square with side: {}", self.side);
    }
}
impl Describable for Square {
    fn describe(&self) -> String {
        format!("A square with side length {}", self.side)
    }
}

// a generic function with where clause
fn show_item<T>(item: T)
where
    T: Printable + Describable,
{
    item.print();
    println!("Description: {}", item.describe());
}


fn main() {
    let square = Square { side: 4.0 };
    show_item(square);
    // Output:
    // Square with side: 4
    // Description: A square with side length 4
}
```

## Using Traits with functions

- You can write functions that accept any type that implements a certain trait, making your code flexible:

```rust
trait Printable {
    fn print(&self);
}
// This trait says: any type that implements Printable must have a print() method.
// and type can be a struct, enum, or even a primitive type such as i32 or f64.

struct Person {
    name: String,
    age: u32,
}
impl Printable for Person {
    fn print(&self) {
        println!("Person: {}, Age: {}", self.name, self.age);
    }
}

// using traits with function display- its saying any type must implement Printable
fn display<T: Printable>(item: T) {
    item.print();
}

fn main() {
    let person = Person {
        name: "Alice".to_string(),
        age: 30,
    };
    person.print(); // Output: Person: Alice, Age: 30
    let person2 = Person {
        name: "Bob".to_string(),
        age: 25,
    };
    display(person2); // Output: Person: Bob, Age: 25
}
```

## Why both can produce the same output but serve different roles:

- Trait implementations (impl) provide abilities to types:
  - They attach behavior to a type.
  - Once you impl Printable for Person, any Person value can be printed anywhere.
- Generic functions using trait bounds describe what kinds of types they accept:
  - They allow writing code once that works for any printable type.
  - You can reuse display with Person, String, or any other type that implements Printable.

## Trait Bounds

## Generic Traits

- When you declare a trait with a generic type parameter <T>, you create a trait family parameterized by T.
- The trait functions might depend on that generic type.
- You usually use the generic type inside the trait methods, like:

```rust
trait Printable<T> {
    fn print(&self, value: T);
}
// When implementing this trait, you specify the concrete type for T:
impl Printable<String> for Person {
    fn print(&self, value: String) {
        println!("Person: {}, Value: {}", self.name, value);
    }
}

```

## 4. Traits with Default Implementations and Inheritance

```rust
// Traits can provide default method implementations:

rust
trait Greet {
    fn greet(&self) {
        println!("Hello!");
    }
}

```

## 5.Associated Types in Traits

- In Rust, associated types let a trait define one or more placeholder types inside it. These placeholder types are then specified by the implementations. This improves readability by avoiding long generic parameter lists and clearly associating the type with the trait.
