The next concept is **Modules**, which is how Rust organizes code into files and folders.

This is extremely important because your entire project is built around modules.

---

# Modules

## First Principle

Imagine you have one file.

```text
main.rs
```

Now your project grows to **10,000 lines**.

Everything is in one file.

```text
main.rs

Login

Signup

JWT

Database

OAuth

Users

Sessions

Cookies

Email

Redis

Logging
```

Finding anything becomes difficult.

So we split the project into **modules**.

---

# What is a Module?

A **module** is simply a way to organize related code together.

Think of it like folders on your computer.

```text
Documents

├── Photos

├── Projects

├── Music
```

You don't put every file in one folder.

Modules solve the same problem.

---

# Example

Instead of

```text
main.rs
```

You split it.

```text
src

├── main.rs

├── auth.rs

├── user.rs

├── jwt.rs
```

Each file handles one responsibility.

---

# Creating a Module

Suppose

```text
src

main.rs

math.rs
```

Inside

```rust
// math.rs

pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

Now tell Rust the module exists.

```rust
// main.rs

mod math;
```

Now the project looks like

```text
main.rs

↓

math module

↓

add()
```

---

# Calling Functions

```rust
mod math;

fn main() {
    let answer = math::add(5, 10);

    println!("{}", answer);
}
```

Output

```text
15
```

Notice

```text
math::add()
```

means

> Go inside the `math` module and call `add`.

---

# Think of a House

Imagine your house.

```text
House

Kitchen

Bedroom

Bathroom
```

If you want food

You go to

```text
House

↓

Kitchen

↓

Food
```

Similarly

```text
Project

↓

math module

↓

add()
```

Rust uses

```rust
math::add()
```

The `::` means

> "Go inside."

---

# Nested Modules

Projects grow.

Now

```text
src

auth

├── login.rs

├── signup.rs

├── oauth.rs
```

Visualization

```text
auth

├── login

├── signup

├── oauth
```

Each module can contain more modules.

---

# Real Koel Example

Imagine

```text
src

auth

├── login.rs

├── verify.rs

├── refresh.rs

├── logout.rs
```

Handler

↓

```rust
auth::login::login()
```

or

```rust
auth::refresh::refresh_token()
```

This keeps the project organized.

---

# Why Modules Matter

Without modules

```text
One Giant File

20,000 Lines
```

With modules

```text
Authentication

↓

Login

Signup

OAuth

JWT

Sessions
```

Much easier to navigate.

---

# Module Tree

Imagine

```text
src

main.rs

math.rs

user.rs

jwt.rs
```

Rust sees

```text
crate

├── math

├── user

├── jwt
```

Every file becomes a module.

---

# The `crate`

The whole project is called a **crate**.

```text
Crate

↓

math

↓

add()
```

or

```text
Crate

↓

user

↓

create()
```

Think of the crate as the root folder.

---

# `::` Operator

You'll constantly see

```rust
math::add()

User::new()

String::new()

std::fs::read_to_string()
```

The double colon means

> Go inside this namespace.

Think of it like folder navigation.

```text
Folder

↓

Subfolder

↓

File
```

Rust

```text
Module

↓

Submodule

↓

Function
```

---

# Real Example

```rust
mod math;

fn main() {
    println!("{}", math::add(2, 3));
}
```

Flow

```text
main

↓

math

↓

add()

↓

5
```

---

# Mental Model

```text
Project

├── auth

│   ├── login

│   ├── signup

│   └── oauth

├── jwt

├── database

├── user

└── email
```

Each folder has one responsibility.

---

# Rule to Remember

- A module organizes related code.
- A file usually becomes a module.
- Modules can contain submodules.
- Use `::` to access items inside a module.
- Modules make large projects manageable.

---

# Problems

## Problem 1

Your project has code for:

- Authentication
- Database
- Email

Create a module structure for it.

---

## Problem 2

You have

```text
math.rs
```

containing

```rust
pub fn multiply(a: i32, b: i32) -> i32
```

How would you call it from `main.rs`?

---

## Problem 3

What does the following mean?

```rust
math::add()
```

---

## Problem 4

Arrange the following project into modules.

```text
Login

Signup

JWT

Sessions

Users

Products

Orders
```

---

## Problem 5

Why are modules better than writing everything inside `main.rs`?

---

## Problem 6

What does `::` mean in Rust?

Give two examples.

---

## Problem 7

Draw the module tree for

```text
src

main.rs

math.rs

user.rs

database.rs
```

---

# Solutions

## Solution 1

```text
src

├── auth.rs

├── database.rs

└── email.rs
```

Each module has a single responsibility.

---

## Solution 2

```rust
mod math;

fn main() {
    println!("{}", math::multiply(4, 5));
}
```

---

## Solution 3

```rust
math::add()
```

means:

> Go inside the `math` module and call the `add()` function.

---

## Solution 4

One possible organization:

```text
src

├── auth
│   ├── login.rs
│   ├── signup.rs
│   ├── jwt.rs
│   └── sessions.rs

├── users.rs

└── products.rs

└── orders.rs
```

---

## Solution 5

Modules:

- Organize code
- Reduce file size
- Improve readability
- Make code easier to maintain
- Encourage separation of responsibilities

---

## Solution 6

`::` means:

> Access something inside a type or module.

Examples:

```rust
math::add()

User::new()

String::new()

std::fs::read_to_string()
```

---

## Solution 7

```text
crate

├── math

├── user

└── database
```

---

### One important note

There's one concept we intentionally skipped here: **`pub`**.

Right now, we wrote:

```rust
pub fn add(...)
```

but we haven't explained **why** `pub` is needed.

That's the perfect next concept, because without `pub`, other modules cannot access your functions. After `pub`, we'll cover `use`, and then you'll fully understand how Rust projects are organized.
