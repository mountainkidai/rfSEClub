# Functions

## First Principle

A **function** is simply a **machine**.

You give it some input.

It does some work.

It may give you an output.

```text
Input
   │
   ▼
+-----------+
| Function  |
+-----------+
   │
   ▼
Output
```

---

## Why do functions exist?

Imagine you need to calculate tax.

Without functions:

```rust
let tax1 = 1000 * 0.18;
let tax2 = 2500 * 0.18;
let tax3 = 5000 * 0.18;
```

You're repeating the same logic.

Instead, create a machine.

```rust
fn calculate_tax(amount: f64) -> f64 {
    amount * 0.18
}
```

Now use it everywhere.

```rust
let tax1 = calculate_tax(1000.0);
let tax2 = calculate_tax(2500.0);
let tax3 = calculate_tax(5000.0);
```

One function.

Many uses.

---

# Syntax

```rust
fn function_name(parameters) -> return_type {
    // code
}
```

Example

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

---

## Breaking it down

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

### `fn`

Means

> "I'm creating a function."

---

### `add`

Function name.

Like naming a person.

```text
add
multiply
login
send_email
create_user
```

---

### Parameters

```rust
(a: i32, b: i32)
```

These are the inputs.

Think of them as boxes.

```text
a = ?

b = ?
```

When calling the function

```rust
add(5, 10)
```

Rust fills them.

```text
a = 5

b = 10
```

---

### Return Type

```rust
-> i32
```

Means

"This function returns an integer."

---

### Body

```rust
{
    a + b
}
```

This is the work the machine performs.

---

# Calling a Function

```rust
fn greet() {
    println!("Hello");
}

fn main() {
    greet();
}
```

Output

```text
Hello
```

---

# Function with Parameters

```rust
fn greet(name: &str) {
    println!("Hello {}", name);
}
```

Usage

```rust
greet("Aariv");
greet("Steve");
```

Output

```text
Hello Aariv
Hello Steve
```

---

# Function Returning a Value

```rust
fn square(x: i32) -> i32 {
    x * x
}
```

Usage

```rust
let result = square(5);

println!("{}", result);
```

Output

```text
25
```

---

# Notice there is no `return`

Rust allows

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

The last expression becomes the return value.

This is called an **implicit return**.

You can also write

```rust
fn add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Both work.

Rust developers usually prefer the first style because it's cleaner.

---

# Authentication Example

Instead of writing login logic everywhere

```text
Receive Request

↓

Validate Token

↓

Check Database

↓

Create Session

↓

Return Response
```

You create functions.

```rust
login_verify()

create_identity_session()

issue_access_token()

create_refresh_token()
```

Each function has one responsibility.

Then your handler simply connects them together.

```text
Handler

↓

login_verify()

↓

create_identity_session()

↓

issue_access_token()

↓

Response
```

This is why your Koel code is split into many small functions.

---

# Why Functions Matter

Functions help you:

- Reuse code
- Avoid duplication
- Organize logic
- Test easily
- Read code faster

---

# Mental Model

```text
        Inputs
           │
           ▼
    +----------------+
    |   Function     |
    +----------------+
           │
           ▼
        Output
```

Example

```text
5, 10
   │
   ▼
 add()
   │
   ▼
15
```

---

# Rule to Remember

- A function is a **reusable machine**.
- Parameters are the **inputs**.
- The function body is the **work**.
- The return value is the **output**.
- Build small functions that do **one thing well**.

---

Once you're comfortable with functions, the next concept is **Associated Functions**, where you'll understand why Rust code often looks like:

```rust
String::new()

Uuid::new_v4()

User::new()
```

instead of calling ordinary functions. That's the first step toward understanding methods and object-oriented patterns in Rust.
