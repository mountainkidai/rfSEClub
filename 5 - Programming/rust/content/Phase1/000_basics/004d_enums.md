# Enums in Rust

## What is an Enum?

An **enum** (Enumeration) is a custom data type that represents **one of many possible states**.

Think of it as a **choice**.

A value of an enum can only be **one variant at a time**.

---

## First Principles

Imagine a traffic light.

It can be:

- Red
- Yellow
- Green

But it can **never** be all three simultaneously.

```text
Traffic Light

      TrafficLight
      /     |      \
   Red   Yellow   Green
```

This is exactly what an enum models.

---

## Syntax

```rust
enum TrafficLight {
    Red,
    Yellow,
    Green,
}
```

Creating a value:

```rust
let light = TrafficLight::Red;
```

or

```rust
let light = TrafficLight::Green;
```

The variable can only hold **one** variant.

---

# Struct vs Enum

## Struct

A struct represents **one object with many fields**.

```rust
struct User {
    name: String,
    age: u32,
}
```

Memory

```text
User

+---------+
| name    |
| age     |
+---------+
```

Every `User` always has both fields.

---

## Enum

An enum represents **one object that can be one of many possibilities**.

```rust
enum BookingStatus {
    Pending,
    Confirmed,
    Cancelled,
}
```

Memory

```text
BookingStatus

Pending
OR
Confirmed
OR
Cancelled
```

Only one exists at any given time.

---

# Real World Example

Imagine Phunsuk.

A booking can be

- Pending
- Confirmed
- Cancelled

Never all three.

```rust
enum BookingStatus {
    Pending,
    Confirmed,
    Cancelled,
}
```

Usage

```rust
let booking = BookingStatus::Pending;

let booking = BookingStatus::Confirmed;

let booking = BookingStatus::Cancelled;
```

---

# Enum is a Type

An enum is **not** a variable.

The variable is

```rust
let booking = ...
```

The type is

```rust
BookingStatus
```

Exactly like

```rust
let age = 25;
```

where

Variable

```text
age
```

Type

```text
i32
```

Similarly

Variable

```text
booking
```

Type

```text
BookingStatus
```

---

# Enum Variants with Data

Variants can also store data.

Example

```rust
enum BookingStatus {
    Pending,
    Confirmed,
    Cancelled(String),
}
```

Now the cancelled state also stores the reason.

```rust
let booking =
    BookingStatus::Cancelled(
        String::from("Payment Failed")
    );
```

Visualization

```text
Cancelled
      │
      ▼
"Payment Failed"
```

---

## Another Example

```rust
enum PaymentMethod {
    Cash,
    Card(String),
    UPI(String),
}
```

Usage

```rust
let payment = PaymentMethod::Cash;
```

```rust
let payment =
    PaymentMethod::Card(
        String::from("****1234")
    );
```

```rust
let payment =
    PaymentMethod::UPI(
        String::from("aariv@upi")
    );
```

Each variant stores different data.

---

# Why not use a Struct?

Many beginners write

```rust
struct Payment {
    payment_type: String,
    card_number: String,
    upi_id: String,
}
```

Suppose payment is Cash.

Then

```text
payment_type = Cash
card_number = ""
upi_id = ""
```

Most fields are meaningless.

Enums solve this.

```rust
enum PaymentMethod {
    Cash,
    Card(String),
    UPI(String),
}
```

Now

Cash stores nothing.

Card stores only card information.

UPI stores only UPI information.

No unnecessary fields exist.

---

# Memory

Simple enum

```rust
enum Status {
    Pending,
    Success,
    Failed,
}
```

Internally Rust stores something similar to

```text
Tag

0 -> Pending

1 -> Success

2 -> Failed
```

This tag is called the **discriminant**.

It tells Rust which variant currently exists.

---

If variants contain data

```rust
enum Message {
    Text(String),
}
```

Memory roughly looks like

```text
Stack

+-----------------------+
| Tag = Text            |
| String metadata       |
+-----------------------+
            │
            ▼
Heap

+----------------------+
| Hello World          |
+----------------------+
```

The enum itself lives wherever the variable lives.

The `String` owns heap memory.

---

# Heap or Stack?

Enums do **not** automatically allocate memory on the heap.

Example

```rust
enum Status {
    Success,
    Failed,
}
```

Lives on the stack.

---

Example

```rust
enum Message {
    Text(String),
}
```

The enum still lives on the stack.

Only the `String` allocates memory on the heap.

---

# Why Enums are Powerful

Enums make **invalid states impossible**.

Instead of

```rust
struct Payment {
    payment_type: String,
    card: String,
    upi: String,
}
```

where

```text
payment_type = Cash

card = "1234"

upi = "abc"
```

(which makes no sense)

Rust forces you into valid states.

```rust
PaymentMethod::Cash
```

or

```rust
PaymentMethod::Card(card)
```

or

```rust
PaymentMethod::UPI(id)
```

Nothing else.

---

# Option is an Enum

Rust's famous `Option<T>` is simply

```rust
enum Option<T> {
    None,
    Some(T),
}
```

Meaning

Either

```text
No value
```

or

```text
Some value
```

Examples

```rust
let age = Some(21);

let age = None;
```

---

# Result is an Enum

`Result<T, E>` is

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

Meaning

Either

```text
Operation succeeded
```

or

```text
Operation failed
```

Example

```rust
Ok(user)
```

or

```rust
Err(error)
```

---

# Mental Models

## Struct

```text
Person

name
age
height
weight
```

Always has every field.

---

## Enum

```text
Traffic Light

Red

OR

Yellow

OR

Green
```

Only one state exists.

---

## Enum with Data

```text
Message

Text
 └── Hello

Image
 └── cat.png

Video
 └── movie.mp4
```

Each state carries different information.

---

# Problems

## Problem 1

Create an enum named `Season`.

Possible values

- Summer
- Winter
- Rainy
- Spring

---

## Problem 2

Create an enum called `Direction`.

Possible values

- North
- South
- East
- West

Create a variable storing `East`.

---

## Problem 3

Create an enum named `PaymentMethod`.

Possible values

- Cash
- Card(String)
- UPI(String)

Create one example of each.

---

## Problem 4

Create an enum named `OrderStatus`.

States

- Pending
- Preparing
- Delivered
- Cancelled(String)

Create an order cancelled because

```text
Restaurant Closed
```

---

## Problem 5

Which should be an enum?

```text
Car

brand
model
price
```

or

```text
Payment Status

Pending
Success
Failed
```

Explain why.

---

## Problem 6

Why is the following a bad design?

```rust
struct Payment {
    payment_type: String,
    card_number: String,
    upi_id: String,
}
```

How would an enum solve this?

---

# Solutions

## Solution 1

```rust
enum Season {
    Summer,
    Winter,
    Rainy,
    Spring,
}
```

---

## Solution 2

```rust
enum Direction {
    North,
    South,
    East,
    West,
}

let direction = Direction::East;
```

---

## Solution 3

```rust
enum PaymentMethod {
    Cash,
    Card(String),
    UPI(String),
}

let cash = PaymentMethod::Cash;

let card =
    PaymentMethod::Card(
        String::from("****1234")
    );

let upi =
    PaymentMethod::UPI(
        String::from("aariv@upi")
    );
```

---

## Solution 4

```rust
enum OrderStatus {
    Pending,
    Preparing,
    Delivered,
    Cancelled(String),
}

let order =
    OrderStatus::Cancelled(
        String::from("Restaurant Closed")
    );
```

---

## Solution 5

`Payment Status` should be an enum because it represents **one of several possible states**.

`Car` should be a struct because every car has all of its properties simultaneously.

---

## Solution 6

A struct allows invalid combinations.

```text
payment_type = Cash

card_number = ****1234
```

This makes no sense.

An enum guarantees that only valid states can exist.

```rust
PaymentMethod::Cash

PaymentMethod::Card(String)

PaymentMethod::UPI(String)
```

---

# Summary

- Struct = One object with many fields.
- Enum = One object with many possible states.
- An enum value can only be one variant at a time.
- Variants can store different data.
- Enums prevent invalid states.
- `Option<T>` and `Result<T, E>` are both enums.
- Enums usually live on the stack unless they contain heap-allocating types like `String` or `Vec`.

### Example

```rust
enum Direction {
    East,
    West,
    South,
    North,
}


fn main(){
    let direction = Direction::East;

match direction {
    Direction::West => println!("go east"),
    Direction::East => println!("go east"),
    _=> println!("stand still"),
};
}
```

```rust
// Basic enum with unit variants
#[derive(Debug)]
enum Direction {
    East,
    West,
    South,
    North,
}
#[derive(Debug)]
enum Message{
    Quit,
    Move {x:i32,y:i32},
    Write(String),
    ChangeColor(i32,i32,i32),
}

fn main(){
    let destination = String::from("applehq");

    match destination.as_str() {
        "applehq" => {
            let direction = Direction::East;
            match direction {
                Direction::East => {
                    let message = Message::Move{x:1,y:2};
                    let newColor = Message::ChangeColor(244,232,211);
                    println!("mesage is {:?}",message);
                    println!("newColor is {:?}",newColor);

                },
                _ => println!("Stand still"),
            };

        }
        _ => println!("please enter a destination"),
    };
}

```
