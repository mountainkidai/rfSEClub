# Associated Functions

## First Principle

You already know ordinary functions.

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

You call them like this.

```rust
let answer = add(5, 10);
```

Simple.

---

Now suppose you have a struct.

```rust
struct User {
    name: String,
    age: u32,
}
```

You want a function that creates a new user.

Without associated functions, you'd write

```rust
fn create_user(name: String, age: u32) -> User {
    User { name, age }
}
```

This works.

But it feels strange.

The function belongs to **User**, yet it's floating outside.

Rust lets you attach the function to the type itself.

---

# Associated Function

```rust
struct User {
    name: String,
    age: u32,
}

impl User {
    fn new(name: String, age: u32) -> User {
        User { name, age }
    }
}
```

Now call it like

```rust
let steve = User::new(
    String::from("Steve"),
    28,
);
```

Notice

```text
User::new()
```

The function belongs to the `User` type.

---

# Why is it called "Associated"?

Because it is **associated with a type**.

Think of it like this.

```text
User

├── new()
├── from_json()
├── anonymous()
```

These functions belong to `User`.

---

# Think of a Car Factory

Imagine a car company.

```text
Toyota

↓

Creates Cars
```

You don't say

```text
create_car()
```

You naturally think

```text
Toyota::create_car()
```

Exactly the same idea.

```text
User

↓

Creates Users
```

So

```rust
User::new(...)
```

feels natural.

---

# Syntax

```rust
impl User {

    fn new(...) -> User {

    }

}
```

Read it like English.

> Inside the implementation of `User`, create a function named `new`.

---

# Example

```rust
struct User {
    name: String,
}

impl User {

    fn new(name: String) -> User {

        User {
            name,
        }

    }

}
```

Usage

```rust
let amy = User::new(
    String::from("Amy")
);
```

---

# Why use `new`?

Instead of

```rust
let user = User {
    name: String::from("Amy"),
};
```

you simply write

```rust
let user = User::new(
    String::from("Amy")
);
```

Cleaner.

Many Rust libraries follow this pattern.

---

# Real Rust Examples

You'll constantly see

```rust
String::new()

Vec::new()

HashMap::new()

PathBuf::new()
```

All of these are associated functions.

---

Another example

```rust
Uuid::new_v4()
```

Creates a brand new UUID.

---

# Associated Function vs Normal Function

Normal Function

```rust
fn calculate_tax() {}
```

Call

```rust
calculate_tax();
```

---

Associated Function

```rust
impl User {

    fn new() {}

}
```

Call

```rust
User::new();
```

---

# Important Observation

Notice something missing.

```rust
impl User {

    fn new(...) -> User {

    }

}
```

There is **no `self`**.

That means

The function does **not** need an existing `User`.

It creates one.

---

Think of it this way.

```text
Before

No User Exists
```

↓

```rust
User::new(...)
```

↓

```text
Now User Exists
```

---

# Real Koel Example

Imagine

```rust
struct AccessToken {
    token: String,
}
```

You might write

```rust
impl AccessToken {

    fn new(token: String) -> AccessToken {

        AccessToken {
            token,
        }

    }

}
```

Usage

```rust
let token =
    AccessToken::new(jwt);
```

Much cleaner than writing the struct manually everywhere.

---

# Mental Model

```text
          User

             │

      Associated Functions

      ├── new()

      ├── guest()

      ├── from_json()
```

The functions belong to the type.

---

# Rule to Remember

- Ordinary functions belong to the module.
- Associated functions belong to a type.
- They are called using `Type::function()`.
- They usually create or construct values.
- They do **not** use `self`.

---

# Problems

## Problem 1

Create a struct.

```text
Book

title

pages
```

Write an associated function named `new`.

---

## Problem 2

Create

```text
Student

name

age
```

Write `Student::new()`.

Create a student named **Leonard**, age **24**.

---

## Problem 3

Create

```text
Rectangle

width

height
```

Write `Rectangle::new()`.

Create a rectangle with width `100` and height `50`.

---

## Problem 4

Which of the following is an associated function?

```rust
calculate_tax()
```

or

```rust
User::new()
```

Explain why.

---

## Problem 5

Why doesn't `User::new()` need a `self` parameter?

---

## Problem 6

Which of these are associated functions?

```rust
Vec::new()

HashMap::new()

String::new()

Uuid::new_v4()
```

---

# Solutions

## Solution 1

```rust
struct Book {
    title: String,
    pages: u32,
}

impl Book {
    fn new(title: String, pages: u32) -> Book {
        Book { title, pages }
    }
}
```

---

## Solution 2

```rust
struct Student {
    name: String,
    age: u32,
}

impl Student {
    fn new(name: String, age: u32) -> Student {
        Student { name, age }
    }
}

let leonard =
    Student::new(
        String::from("Leonard"),
        24,
    );
```

---

## Solution 3

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn new(width: u32, height: u32) -> Rectangle {
        Rectangle {
            width,
            height,
        }
    }
}

let rect =
    Rectangle::new(100, 50);
```

---

## Solution 4

`User::new()` is an associated function because it belongs to the `User` type and is called using the `Type::function()` syntax.

`calculate_tax()` is a normal function because it belongs to the module, not a specific type.

---

## Solution 5

`User::new()` creates a brand new `User`. Since no `User` exists yet, there is no `self` to work with. That's why associated functions don't take `self`.

---

## Solution 6

All of these are associated functions:

```rust
Vec::new()

HashMap::new()

String::new()

Uuid::new_v4()
```

Each one belongs to its respective type and is called with the `Type::function()` syntax.

---

### One small note

The **next concept (Methods)** is where the missing piece clicks into place. You'll finally understand the difference between:

```rust
User::new("Steve")
```

and

```rust
user.get_name()
```

The only difference is one keyword: `self`. Once you understand that, the entire `impl` block will make complete sense.
