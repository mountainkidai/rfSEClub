# Tuples in Rust

Before diving into syntax, understand the foundational principles that shape Rust's approach to tuples:

1. **Fixed Containers**: A tuple is like a box with specific compartments. Once you create the box, you can't add or remove compartments. The size is fixed forever.

2. **Position Matters**: Each item in a tuple has a specific position (0, 1, 2, etc.). You find items by their position, not by a name. The position never changes.

3. **Many Types Together**: Unlike arrays (which hold only one type), tuples can mix different types together. One compartment can hold a number, another can hold text, another can hold true/false.

4. **Immutable by Default**: Like variables, tuples are immutable by default. If you want to change what's inside, you must use `mut`.

---

## Overview

A tuple is a collection of values grouped together in a specific order. Think of it like a row of labeled boxes, where each box holds one value. The position of each box never changes, and you can have different types in different boxes.

### Key Concepts

**Tuple**: A fixed-size container that holds multiple values in a specific order. Created using parentheses like `(value1, value2, value3)`.

**Ordered**: The position of each item matters. The first item is always at position 0, the second at position 1, etc.

**Heterogeneous**: Tuples can contain different types of data in the same tuple. One position can be a number, another can be text, another can be true/false.

**Fixed Size**: Once created, a tuple always has the same number of items. You can't add or remove items.

**Immutable by Default**: You cannot change the values inside a tuple unless you declare it with `mut`.

**Accessing by Position**: You use a dot and a number to get a value. `tuple.0` gets the first item, `tuple.1` gets the second item, etc.

**Destructuring**: Unpacking a tuple into individual variables in one line.

---

## Creating and Accessing Tuples

### Simple Tuple Creation

```rust
// Create a tuple with different types
let person = ("Alice", 25, true);
println!("{:?}", person); // Output: ("Alice", 25, true)

// Access each element by position
let name = person.0; // "Alice"
let age = person.1; // 25
let active = person.2; // true

println!("Name: {}", name);
println!("Age: {}", age);
println!("Active: {}", active);
// Output:
// Name: Alice
// Age: 25
// Active: true
```

**How it works:**

- Position 0 (`.0`) = the first item
- Position 1 (`.1`) = the second item
- Position 2 (`.2`) = the third item

### Tuples with Type Annotations

When you create a tuple, Rust can usually guess the types. But you can also write them explicitly:

```rust
// Rust guesses the types
let point1 = (3.5, 7.2);

// You write the types explicitly
let point2: (f64, f64) = (3.5, 7.2);

// Mixing types explicitly
let info: (&str, u8, bool) = ("Bob", 30, false);
println!("Name: {}, Age: {}, Active: {}", info.0, info.1, info.2);
// Output: Name: Bob, Age: 30, Active: false
```

**Why write types explicitly?** It's clearer what the tuple contains, and it helps catch mistakes.

### Empty Tuple

```rust
let empty = (); // This is a tuple with nothing in it
println!("{:?}", empty); // Output: ()
```

**When to use?** When a function returns "nothing". You'll see this later.

---

## Destructuring Tuples: Unpacking Values

Destructuring means unpacking a tuple into separate variables in one step. It's like taking items out of a box and putting each one on a shelf:

```rust
let person = ("Alice", 25, true);

// Destructure the tuple
let (name, age, active) = person;

println!("Name: {}", name); // Alice
println!("Age: {}", age); // 25
println!("Active: {}", active); // true
```

**Why destructure?** Instead of typing `person.0`, `person.1`, `person.2` everywhere, you can unpack once and use simple names.

### Partial Destructuring

Sometimes you only want some values. Use `_` (underscore) to ignore the rest:

```rust
let person = ("Alice", 25, true, "Engineer");

// Only care about name and age
let (name, age, _, _) = person;
println!("{} is {} years old", name, age); // Alice is 25 years old

// Or keep the rest
let (name, _, _, job) = person;
println!("{} works as a {}", name, job); // Alice works as a Engineer
```

**Use `_` for values you don't need**. This tells Rust (and other programmers) "I'm ignoring this on purpose."

---

## Mutable Tuples

Like variables, tuples are immutable by default. To change what's inside, use `mut`:

```rust
let mut data = (1, "hello", true);

println!("Before: {:?}", data); // Before: (1, "hello", true)

// Change the first element
data.0 = 2;
// Change the second element
data.1 = "world";
// Change the third element
data.2 = false;

println!("After: {:?}", data); // After: (2, "world", false)
```

**Important**: You can only change existing values, not add new ones. The tuple always has 3 items.

### Immutable Tuple Error

```rust
let data = (1, "hello", true);

// ❌ Error: cannot change immutable tuple
// data.0 = 2;

// ✅ Solution: use mut
let mut data = (1, "hello", true);
data.0 = 2; // Now it works
```

---

## Returning Multiple Values from Functions

Tuples are perfect when a function needs to return more than one value:

### Example 1: Division with Remainder

```rust
fn divide_with_remainder(a: i32, b: i32) -> (i32, i32) {
let quotient = a / b;
let remainder = a % b;
(quotient, remainder)
}

fn main() {
let result = divide_with_remainder(10, 3);

println!("Quotient: {}", result.0);   // Quotient: 3
println!("Remainder: {}", result.1);  // Remainder: 1

// Or destructure
let (q, r) = divide_with_remainder(10, 3);
println!("10 ÷ 3 = {} remainder {}", q, r);
// Output: 10 ÷ 3 = 3 remainder 1
}
```

**Why tuples?** Without tuples, you could only return one value. Tuples let you return as many as you need.

### Example 2: Min and Max

```rust
fn find_min_max(a: i32, b: i32) -> (i32, i32) {
if a < b {
(a, b) // Return (min, max)
} else {
(b, a) // Return (min, max)
}
}

fn main() {
let (min, max) = find_min_max(10, 5);
println!("Min: {}, Max: {}", min, max); // Min: 5, Max: 10
}
```

---

## Nested Tuples: Tuples Inside Tuples

You can put a tuple inside another tuple:

```rust
// Nested tuple: (number, (text, number))
let nested = (42, ("inner", 100));

// Access outer value
println!("Outer: {}", nested.0); // Outer: 42

// Access inner tuple
println!("Inner tuple: {:?}", nested.1); // Inner tuple: ("inner", 100)

// Access inner values
println!("Inner string: {}", nested.1.0); // Inner string: inner
println!("Inner number: {}", nested.1.1); // Inner number: 100
```

**How nested access works:**

- `nested.1` gets the second item (which is a tuple)
- `nested.1.0` gets the first item of that inner tuple
- `nested.1.1` gets the second item of that inner tuple

```rust
let nested = (42, ("inner", 100));

// Unpack everything
let (outer, (inner_text, inner_num)) = nested;

println!("Outer: {}", outer); // Outer: 42
println!("Inner text: {}", inner_text); // Inner text: inner
println!("Inner num: {}", inner_num); // Inner num: 100
```

**Nested destructuring**: You can unpack tuples inside tuples in one line.

---

## Single-Item Tuples: The Comma Trick

To create a tuple with one item, you need a comma after it. Without the comma, it's just a value in parentheses:

### Destructuring Nested Tuples

```rust
// This is a tuple with one item
let single_tuple = ("apple",);
println!("{:?}", single_tuple); // Output: ("apple",)

// This is NOT a tuple - just a string in parentheses
let not_tuple = ("apple");
println!("{:?}", not_tuple); // Output: "apple"

// Access single-item tuple
let fruit = single_tuple.0; // "apple"
println!("{}", fruit); // apple
```

**The comma is important!** Without it, Rust treats it as a regular value.

### Single-Item Tuple Example

```rust
fn return_one_value() -> (String,) {
("Hello".to_string(),)
}

fn main() {
let result = return_one_value();
println!("{}", result.0); // Hello
}
```

---

## Comparing Tuples with Other Data Types

| Feature            | Tuple                  | Array                   | Struct         |
| ------------------ | ---------------------- | ----------------------- | -------------- |
| Different Types    | YES (can mix)          | NO (same type)          | YES (can mix)  |
| Fixed Size         | YES                    | YES                     | YES            |
| Access By Position | YES (0, 1, 2)          | YES (0, 1, 2)           | NO (use names) |
| Access By Name     | NO                     | NO                      | YES            |
| Mutable By Default | NO (use mut)           | NO (use mut)            | NO (use mut)   |
| Use Case           | Return multiple values | Many items of same type | Named fields   |

---

## Practical Examples: Building Intuition

### Example 1: Store Person Information

```rust
fn main() {
let person = ("Alice", 25, "Engineer");

println!("Name: {}", person.0);
println!("Age: {}", person.1);
println!("Job: {}", person.2);
}
// Output:
// Name: Alice
// Age: 25
// Job: Engineer
```

### Example 2: Coordinates in 2D Space

```rust
fn main() {
let point = (3.5, 7.2);

println!("X: {}", point.0);
println!("Y: {}", point.1);

// Calculate distance from origin
let distance = (point.0.powi(2) + point.1.powi(2)).sqrt();
println!("Distance from origin: {}", distance);
}
// Output:
// X: 3.5
// Y: 7.2
// Distance from origin: 8.0
```

### Example: Mutable Tuple State

```rust
fn main() {
let mut game_state = (0, 100, true); // score, health, alive

println!("Start - Score: {}, Health: {}, Alive: {}",
    game_state.0, game_state.1, game_state.2);

// Player takes damage
game_state.1 -= 10; // health reduced
game_state.0 += 5;  // score increased

println!("After damage - Score: {}, Health: {}, Alive: {}",
    game_state.0, game_state.1, game_state.2);

// Player defeated
game_state.2 = false; // alive = false

println!("Final - Score: {}, Health: {}, Alive: {}",
    game_state.0, game_state.1, game_state.2);
}
// Output:
// Start - Score: 0, Health: 100, Alive: true
// After damage - Score: 5, Health: 90, Alive: true
// Final - Score: 5, Health: 90, Alive: false
```

## Problems

1. Create a tuple `person` with three elements: a name (string), age (number), and city (string), then print all three values
2. Create a tuple `coordinates` with two f64 values (3.5, 7.2), destructure it into `x` and `y` variables, and print them
3. Create a function that takes a tuple `(i32, i32)` and returns a tuple `(i32, i32)` representing the sum and product of the two numbers
4. Create a mutable tuple `data` with values (10, "hello", true), change the first element to 20, and print the updated tuple
5. Create a nested tuple containing (42, ("inner", 100)), access both the outer and inner values, and print them.
6. Game inventory - item name, quantity, price.

```rust
fn main() {
let inventory = vec![
("Sword", 5, 50.0),
("Shield", 3, 30.0),
("Potion", 20, 5.0),
];

let mut total_value = 0.0;

for item in inventory {
    let (name, quantity, price) = item;
    let item_value = (quantity as f64) * price;
    total_value += item_value;

    println!("{}: {} × ${:.2} = ${:.2}",
        name, quantity, price, item_value);
}

println!("Total inventory value: ${:.2}", total_value);
}
// Output:
// Sword: 5 × $50.00 = $250.00
// Shield: 3 × $30.00 = $90.00
// Potion: 20 × $5.00 = $100.00
// Total inventory value: $440.00

```
