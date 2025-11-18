- Tuples

  - A tuple is a collection of items stored together in a specific order.
    Think of it like a container holding several things in a row—you can look at each thing by its position.
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

## You can also have nested tuples or collections inside a tuple

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

## Problems

1. Create a tuple `person` with three elements: a name (string), age (number), and city (string), then print all three values
2. Create a tuple `coordinates` with two f64 values (3.5, 7.2), destructure it into `x` and `y` variables, and print them
3. Create a function that takes a tuple `(i32, i32)` and returns a tuple `(i32, i32)` representing the sum and product of the two numbers
4. Create a mutable tuple `data` with values (10, "hello", true), change the first element to 20, and print the updated tuple
5. Create a nested tuple containing (42, ("inner", 100)), access both the outer and inner values, and print them.
