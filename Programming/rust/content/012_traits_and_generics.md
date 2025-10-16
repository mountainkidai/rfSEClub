## Types

- A type tells Rust what kind of data a value holds.
- It defines:

  - How the data is stored (memory layout)
  - What operations you can perform (math, comparison, etc.)

- Why Types?

  - Why Are Types Important?
    - Safety: Rust uses types to prevent errors like mixing numbers and text.
    - Performance: Knowing types at compile time lets Rust generate efficient code.
    - Clarity: Types make your code self-explanatory and easier to maintain.

## Scalar Types

- Scalar types represent a single value.
- Imagine your data as items in boxes. Each box has a label:
- "Integer
  - Whole numbers without decimals.
- Floating-Point Numbers
  - Numbers with decimals.
- Booleans
  - Represent true or false.
- Characters
  - Represent a single Unicode scalar value.

```rust
fn main() {
    let x: i32 = 42;  // 32-bit signed integer
    let y: u8 = 255;  // 8-bit unsigned integer
    let pi: f64 = 3.1415;     // pi is a 64-bit floating point
    let is_rust_fun: bool = true; // is_rust_fun is a boolean
    let greeting: &str = "hello";    // greeting is a string slice

    println!("x = {}, pi = {}, fun = {}, greeting = {}", x, pi, is_rust_fun, greeting);
}
// Output: x = 10, pi = 3.1415, fun = true, greeting = hello
```

```text
Type    |  Description                      |  Example Values
--------+-----------------------------------+--------------------
i32     |  32-bit signed integer            |  -100, 0, 42
u8      |  8-bit unsigned integer           |  0, 255
f64     |  64-bit floating point (decimal)  |  3.14, -2.71
bool    |  Boolean value true or false      |  true,false
char    |  Single Unicode character         |  'a','Ω'
&str    |  String slice (immutable text)    |  "hello", "Rust"
String  |  Growable, heap-allocated string  |  String::from("hi")
```

## 2. Compound Types: Grouping Data

- Compound types hold multiple values together.
- Tuples

  - A tuple is a collection of items stored together in a specific order. Think of it like a container holding several things in a row—you can look at each thing by its position.
  - They are ordered, so the position of each item matters and doesn't change.
  - Tuples are fixed in size: once created, you can’t add or remove items.
  - Tuples are immutable by default: you can’t change their values unless declared mutable.
  - Tuples are heterogeneous: they can hold values of different types together.
  - Items inside a tuple can be of different types like numbers, words, or even true/false values.

```rust
fruit_tuple = ("apple", "banana", "cherry")
print(fruit_tuple)  # outputs: ('apple', 'banana', 'cherry')

```

## Types in Tuples

- Tuples can hold multiple types of data together. The items don’t all need to be the same type.

```rust
let person = ("Alice", 25, true);
let coordinates: (f64, f64) = (3.5, 7.2);
let info: (&str, u8, bool) = ("Bob", 30, false);

// Accessing Values
let name = person.0; // "Alice"
let age = person.1;     // 25
let active = person.2;  // true
```

## Destructuring Tuples

- You can unpack a tuple into individual variables

```rust
let (name, age, active) = person;
println!("{} is {} years old", name, age);

```

## Returning Multiple Values from Functions

- Tuples shine when returning more than one value:

```rust
fn divide_remainder(a: i32, b: i32) -> (i32, i32) {
    (a / b, a % b)
}

let result = divide_remainder(10, 3);
println!("Quotient: {}, Remainder: {}", result.0, result.1);

```

## You can also have nested tuples or collections inside a tuple:

```rust
nested = (42, (1, 2), [3, 4])  # contains an int, a tuple, and a list

```

## Creating a Tuple with One Item

- To create a tuple with a single value, add a comma after the item:

```rust
single = ("apple",)  # This is a tuple
not_tuple = ("apple")  # This is just a string in parentheses

```

```rust
let tup = (1, "hello", true);
// tup.0 = 2;  // Error: cannot assign to immutable tuple
let mut mut_tup = (1, "hello", true);
mut_tup.0 = 2;  // This works because mut_tup is mutable
```

## User-defined Types in Rust

- User-defined Types — structs, enums, and unions. These let you create your own complex types by combining simpler ones.

## 1. Structs

- A struct is like a custom record or data container with named fields. It bundles related data into one type, making it easier to organize
  your program.

### Example

```rust
struct Person {
    name: String,
    age: u8,
}

let alice = Person {
    name: String::from("Alice"),
    age: 30,
};

```

You access fields with dot notation

```rust
alice.name
```

## 2. Enums

An enum in Rust is like a list of choices where a value can be exactly one of those choices, called variants (Quit,Move,Write). Each variant can also hold its own data if needed (Move {x:i32,y:i32}). This helps you represent things that can be different types or states but are still grouped as one overall concept.

Imagine you have a type called Shape that can be a Circle, Square, or Triangle. An enum lets you say "a shape is one of these kinds, but not more than one at the same time."

### Example

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
}

let msg1 = Message::Quit;
let msg = Message::Move { x: 10, y: 20 };
```

### Match

- The match statement in Rust is a powerful way to compare a value against a series of patterns and execute different code depending on which pattern matches. It works a bit like a switch in other languages but much more powerful and safe.

```rust
let number = 3;
match number {
    1 => println!("One"),
    2 => println!("Two"),
    3 => println!("Three"),
    _ => println!("Something else"),
}

```

### Important Features

- Exhaustiveness: You must cover all possible cases, so the compiler checks you've handled every scenario. The wildcard \_ pattern catches everything else.

- Multiple Values in One Arm: You can use | to combine patterns that run the same code.

```rust
match number {
    1 | 2 | 3 => println!("One, two, or three"),
    _ => println!("Other"),
}
```

### Ranging patterns

```rust
match number {
    1..=5 => println!("Between one and five"),
    _ => println!("Other"),
}
```

## Two Key Enums

### The Option enum represents a value that can either be

- Some(T) — contains a value of type T.
- None — means no value.
- This is Rust's way of handling values that might be missing (like "null" in other languages, but safer).

```rust
fn double(num: Option<i32>) -> Option<i32> {
    match num {
        Some(n) => Some(n * 2),  // If a value exists, double it
        None => None,            // Otherwise, keep None
    }
}

fn main() {
    let five = Some(5);
    let none: Option<i32> = None;

    println!("Double of 5 is: {:?}", double(five)); // Prints: Some(10)
    println!("Double of None is: {:?}", double(none)); // Prints: None
}

```

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
trait Printable {
    fn print(&self);
}

struct Person {
    name: String,
}
// here we are implementing Printable for Person Struct type
impl Printable for Person {
    fn print(&self) {
        println!("Person: {}", self.name);
    }
}

```

- Here, Person now has a print() method as per the Printable trait.

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

## 4. Generic Traits

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

//Output:
// Got a value!
// Got a value!
// Got a value!

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
    println!("{}", value);
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
    println!("eop person name is: {}", person.name); // This will cause a compile-time error
}
//output:
// person name is: Alice
// Hello, my name is Alice
// eop person name is: Alice
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

1. Generic Functions

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

## 1. Generic Functions That Return a Value (No Display Needed)

```rust
    fn identity<T>(value: T) -> T {
        value
    }

    fn main() {
        let x = identity(42);        // Works, T = i32
        let y = identity("hello"); // Works, T = &str
    }

```

## 2. Generic Functions Using println! or Formatting Inside (Require Traits like Display)

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

## 5.Associated Types in Traits

- In Rust, associated types let a trait define one or more placeholder types inside it. These placeholder types are then specified by the implementations. This improves readability by avoiding long generic parameter lists and clearly associating the type with the trait.
