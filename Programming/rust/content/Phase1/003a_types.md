### Understanding Memory in Programming from First Principles

## What is a type?

- A type defines what kind of data a value represents and what operations can be performed on it.

- Types give structure and meaning to data, helping the compiler catch errors and organize memory.

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

## Compound types

- Structs (custom data types grouping multiple values)
- Enums (types with variants)
- Arrays and tuples (fixed collections of values)

## Problems

1. Create variables of different scalar types: an integer `x: i32`, a float `y: f64`, a boolean `z: bool`, and a character `c: char`, then print all of them
2. Create a variable `number` with value 42 and print its type size using `std::mem::size_of_val(&number)`
3. Create variables representing different number types: `small: i8`, `medium: i32`, `large: i64`, and print their values
4. Create a boolean variable `is_rust_fun` set to true and use it in an if statement to print a message
5. Create a character variable with a Unicode emoji and print it along with a descriptive message.
