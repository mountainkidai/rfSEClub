Now we'll cover **`match`**, which is the syntax used for pattern matching.

---

# `match`

## First Principle

Think of `match` as a **decision machine**.

It takes **one value** and asks:

> Which pattern does this value match?

```text
          Value
            │
            ▼
        +---------+
        |  match  |
        +---------+
          │  │  │
          │  │  │
       Red Yel Green
          │  │   │
          ▼  ▼   ▼
       Stop Slow Go
```

---

## Basic Syntax

```rust
match value {
    pattern1 => action1,
    pattern2 => action2,
    pattern3 => action3,
}
```

Read it like English:

> If value matches pattern1 → do action1

Otherwise

> If value matches pattern2 → do action2

---

## Example

```rust
enum TrafficLight {
    Red,
    Yellow,
    Green,
}

let light = TrafficLight::Yellow;

match light {
    TrafficLight::Red => println!("Stop"),

    TrafficLight::Yellow => println!("Slow"),

    TrafficLight::Green => println!("Go"),
}
```

Output

```text
Slow
```

---

# Think of it like a receptionist

Someone enters your office.

```text
Person
   │
   ▼
Reception
```

Reception checks

```text
Employee?

Yes → Allow

No
    │
Visitor?

Yes → Register

No
    │
Delivery?

Yes → Warehouse
```

That's exactly what `match` does.

---

# Match is Exhaustive

Rust requires you to handle **every possibility**.

Suppose

```rust
enum Status {
    Pending,
    Success,
    Failed,
}
```

If you write

```rust
match status {
    Status::Pending => println!("Waiting"),
    Status::Success => println!("Done"),
}
```

Rust says

> ❌ What about `Failed`?

Compilation fails.

Unlike JavaScript or C++, Rust refuses to ignore possible states.

---

# Wildcard (`_`)

Sometimes you don't care about every case.

Instead of

```rust
match status {
    Status::Pending => println!("Waiting"),
    Status::Success => println!("Done"),
    Status::Failed => println!("Other"),
}
```

You can write

```rust
match status {
    Status::Pending => println!("Waiting"),

    _ => println!("Other"),
}
```

`_` means

> "Anything else."

---

Example

```text
Pending
     │
     ▼
Waiting

Anything Else
     │
     ▼
Other
```

---

# Match Can Return Values

This surprises many beginners.

`match` is an **expression**, not just a statement.

Instead of

```rust
let message;

if success {
    message = "Done";
} else {
    message = "Failed";
}
```

Rust prefers

```rust
let message = match status {
    Status::Pending => "Waiting",
    Status::Success => "Done",
    Status::Failed => "Failed",
};
```

Now

```text
message
```

contains

```text
Waiting

or

Done

or

Failed
```

depending on the match.

---

# Why this is beautiful

Think of a vending machine.

Input

```text
Coffee
```

Output

```text
₹20
```

Input

```text
Tea
```

Output

```text
₹15
```

Input

```text
Juice
```

Output

```text
₹30
```

That's exactly what `match` does.

```text
Input
   │
   ▼
 Match
   │
   ▼
Output
```

---

# Real Koel Example

Imagine

```rust
enum LoginResult {
    Success,
    InvalidPassword,
    UserNotFound,
}
```

```rust
let response = match login {
    LoginResult::Success => "Login Successful",

    LoginResult::InvalidPassword => "Wrong Password",

    LoginResult::UserNotFound => "Create Account",
};
```

Much cleaner than multiple `if` statements.

---

# Why Rust Loves `match`

Because it gives:

- Safety (every case handled)
- Readability
- No forgotten states
- Returns values
- Works perfectly with enums

---

## Mental Model

```text
        One Value
            │
            ▼
        +---------+
        |  match  |
        +---------+
         /   |    \
        /    |     \
 Pattern Pattern Pattern
    │       │       │
    ▼       ▼       ▼
 Action  Action  Action
```

---

### Rule to remember

> **An enum defines the possible states.**
>
> **`match` chooses what to do for each state.**

---

If this is clear, the next concept is **`if let`**, which is Rust's shorthand when you only care about **one** pattern instead of all of them.
