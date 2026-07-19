You already know:

- Associated functions → `User::new()`
- Next comes **Methods**, which explains `user.get_name()`.

---

# Methods

## First Principle

An **associated function** belongs to a type.

A **method** belongs to an **instance (object)** of that type.

Think of it this way.

---

## Imagine a Car

There is a factory.

```text
Car::new()
```

The factory creates a car.

Now suppose a car already exists.

```text
My Car
```

What can it do?

- Start
- Stop
- Accelerate

These actions belong to **that specific car**.

Those are methods.

---

# Associated Function

```rust
Car::new()
```

Creates a new car.

---

# Method

```rust
my_car.start();
```

Uses an existing car.

---

## Rust Example

```rust
struct User {
    name: String,
}
```

Associated function

```rust
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
let user = User::new(
    String::from("Steve")
);
```

Now suppose we want to print the user's name.

We don't create another user.

We use the existing one.

---

# Method Syntax

```rust
impl User {

    fn get_name(&self) -> &str {

        &self.name

    }

}
```

Notice something new.

```rust
&self
```

This is what makes it a method.

---

# Calling a Method

```rust
let user =
    User::new(String::from("Steve"));

println!(
    "{}",
    user.get_name()
);
```

Notice

```text
User::new()

↓

user

↓

user.get_name()
```

---

# What is `self`?

Think of `self` as

> **"Me."**

Imagine Steve says

```text
My name is Steve.
```

The word **My** refers to Steve.

Similarly,

```rust
self.name
```

means

> The name of **this user**.

---

## Visualize

```text
User

name = Steve
age = 28
```

Calling

```rust
user.get_name()
```

is like Rust secretly doing

```text
get_name(user)
```

Inside the method

```rust
self
```

points to

```text
user
```

So

```rust
self.name
```

becomes

```rust
user.name
```

---

# Why `&self`?

Suppose we have

```rust
fn get_name(&self) -> &str
```

We only want to read the name.

We don't want to change it.

So Rust gives us a shared borrow.

---

Think

```text
Read Only
```

Exactly like

```rust
&String
```

---

# What about `&mut self`?

Suppose the user changes their name.

```rust
impl User {

    fn rename(
        &mut self,
        new_name: String,
    ) {

        self.name = new_name;

    }

}
```

Usage

```rust
let mut user =
    User::new(String::from("Steve"));

user.rename(
    String::from("Amy")
);
```

Now

```text
Steve

↓

Amy
```

The method changed the object.

---

# What about `self`?

Sometimes the method consumes the object.

```rust
fn destroy(self)
```

Ownership moves into the method.

After that

```text
User

↓

Gone
```

You can't use it again.

You'll see this less often.

---

# Three Kinds of Methods

## Read Only

```rust
fn name(&self)
```

Can read.

Cannot modify.

---

## Mutable

```rust
fn rename(&mut self)
```

Can modify.

---

## Ownership

```rust
fn consume(self)
```

Takes ownership.

Original value disappears.

---

# Real Rust Example

Everyone uses

```rust
let text =
    String::from("hello");
```

Now

```rust
text.len()

text.is_empty()

text.contains("h")
```

These are methods.

They belong to that specific string.

---

# Real Koel Example

Imagine

```rust
struct AccessToken {
    token: String,
}
```

Method

```rust
impl AccessToken {

    fn is_expired(&self) -> bool {

        ...

    }

}
```

Usage

```rust
token.is_expired()
```

Notice

The token already exists.

The method simply asks

> "Are you expired?"

---

# Associated Function vs Method

Associated Function

```rust
User::new("Steve")
```

Needs no existing object.

Creates one.

---

Method

```rust
user.get_name()
```

Needs an existing object.

Uses it.

---

# Mental Model

```text
             User

      ┌──────────────────┐

      │ new()            │

      │ guest()          │

      └──────────────────┘

          Creates Users



          Existing User

      ┌──────────────────┐

      │ get_name()       │

      │ rename()         │

      │ is_admin()       │

      └──────────────────┘

       Works on that User
```

---

# Biggest Rule

If a function has

```rust
self
```

or

```rust
&self

&mut self
```

it's a **method**.

If it doesn't,

it's an **associated function**.

---

# Problems

## Problem 1

Create a struct.

```text
Book

title
pages
```

Write a method named `title()` that returns the book title.

---

## Problem 2

Create

```text
Student

name
age
```

Write a method `greet()` that prints

```text
Hello, I am Leonard
```

for a student named Leonard.

---

## Problem 3

Create

```text
BankAccount

balance
```

Write a method

```rust
deposit(&mut self, amount: u32)
```

that increases the balance.

---

## Problem 4

Which one is a method?

```rust
User::new()
```

or

```rust
user.get_name()
```

Explain why.

---

## Problem 5

When should you use

```rust
&self
```

instead of

```rust
&mut self
```

---

## Problem 6

What will this print?

```rust
struct User {
    name: String,
}

impl User {
    fn get_name(&self) -> &str {
        &self.name
    }
}

fn main() {
    let user = User {
        name: String::from("Amy"),
    };

    println!("{}", user.get_name());
}
```

---

## Problem 7

Create a `Rectangle` struct with:

- width
- height

Write a method:

```rust
area(&self) -> u32
```

that returns `width * height`.

---

# Solutions

## Solution 1

```rust
struct Book {
    title: String,
    pages: u32,
}

impl Book {
    fn title(&self) -> &str {
        &self.title
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
    fn greet(&self) {
        println!("Hello, I am {}", self.name);
    }
}

let student = Student {
    name: String::from("Leonard"),
    age: 24,
};

student.greet();
```

---

## Solution 3

```rust
struct BankAccount {
    balance: u32,
}

impl BankAccount {
    fn deposit(&mut self, amount: u32) {
        self.balance += amount;
    }
}

let mut account = BankAccount {
    balance: 100,
};

account.deposit(50);
```

Balance becomes:

```text
150
```

---

## Solution 4

```rust
User::new()
```

is an **associated function** because it creates a new `User`.

```rust
user.get_name()
```

is a **method** because it operates on an existing `user` instance.

---

## Solution 5

Use:

```rust
&self
```

when you only need to **read** data.

Use:

```rust
&mut self
```

when you need to **modify** the object.

---

## Solution 6

Output:

```text
Amy
```

---

## Solution 7

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

let rect = Rectangle {
    width: 10,
    height: 20,
};

println!("{}", rect.area());
```

Output:

```text
200
```

---

### A useful shortcut to remember

Whenever you see a function, ask yourself one question:

> **"Does this function need an existing object to work?"**

- **No** → It's probably an **associated function** (`User::new()`).
- **Yes** → It's a **method** (`user.get_name()`, `user.rename()`, `token.is_expired()`).

This simple question will help you identify almost every function you encounter in Rust.
