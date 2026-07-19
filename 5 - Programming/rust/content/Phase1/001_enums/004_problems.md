# Problems

## Problem 1

Given the following enum

```rust
enum TrafficLight {
    Red,
    Yellow,
    Green,
}
```

Create a variable storing `Green`.

Print `"Go"` only if the light is `Green` using `if let`.

---

## Problem 2

Given

```rust
enum BookingStatus {
    Pending,
    Confirmed,
    Cancelled,
}
```

Create a variable storing `Cancelled`.

Print

```text
Refund Customer
```

using `if let`.

---

## Problem 3

Given

```rust
enum PaymentMethod {
    Cash,
    Card(String),
    UPI(String),
}
```

Create a card payment.

Using `if let`, print only the card number.

---

## Problem 4

Given

```rust
let age = Some(25);
```

Using `if let`, print

```text
Age: 25
```

---

## Problem 5

Given

```rust
let age: Option<u32> = None;
```

Using `if let`, print the age if it exists.

What will be the output?

---

## Problem 6

Given

```rust
enum LoginResult {
    Success,
    InvalidPassword,
    UserNotFound,
}
```

Create a variable storing

```text
InvalidPassword
```

Print

```text
Wrong Password
```

using `if let`.

---

## Problem 7

Given

```rust
enum Message {
    Text(String),
    Image(String),
}
```

Create

```text
Image("cat.png")
```

Using `if let`, print only the image filename.

---

## Problem 8

Convert this `match` into `if let`.

```rust
match age {
    Some(value) => println!("{}", value),
    None => {}
}
```

---

## Problem 9

Convert this `match` into `if let`.

```rust
match payment {
    PaymentMethod::UPI(id) => println!("{}", id),
    _ => {}
}
```

---

## Problem 10

When should you use `if let` instead of `match`?

Explain in your own words.

---

# Solutions

## Solution 1

```rust
enum TrafficLight {
    Red,
    Yellow,
    Green,
}

let light = TrafficLight::Green;

if let TrafficLight::Green = light {
    println!("Go");
}
```

---

## Solution 2

```rust
enum BookingStatus {
    Pending,
    Confirmed,
    Cancelled,
}

let booking = BookingStatus::Cancelled;

if let BookingStatus::Cancelled = booking {
    println!("Refund Customer");
}
```

---

## Solution 3

```rust
enum PaymentMethod {
    Cash,
    Card(String),
    UPI(String),
}

let payment =
    PaymentMethod::Card(
        String::from("****1234")
    );

if let PaymentMethod::Card(number) = payment {
    println!("{}", number);
}
```

---

## Solution 4

```rust
let age = Some(25);

if let Some(age) = age {
    println!("Age: {}", age);
}
```

Output

```text
Age: 25
```

---

## Solution 5

```rust
let age: Option<u32> = None;

if let Some(age) = age {
    println!("{}", age);
}
```

Output

```text
Nothing is printed.
```

Because `None` does not match `Some(age)`.

---

## Solution 6

```rust
enum LoginResult {
    Success,
    InvalidPassword,
    UserNotFound,
}

let login = LoginResult::InvalidPassword;

if let LoginResult::InvalidPassword = login {
    println!("Wrong Password");
}
```

---

## Solution 7

```rust
enum Message {
    Text(String),
    Image(String),
}

let message =
    Message::Image(
        String::from("cat.png")
    );

if let Message::Image(filename) = message {
    println!("{}", filename);
}
```

Output

```text
cat.png
```

---

## Solution 8

Original

```rust
match age {
    Some(value) => println!("{}", value),
    None => {}
}
```

Equivalent `if let`

```rust
if let Some(value) = age {
    println!("{}", value);
}
```

---

## Solution 9

Original

```rust
match payment {
    PaymentMethod::UPI(id) => println!("{}", id),
    _ => {}
}
```

Equivalent `if let`

```rust
if let PaymentMethod::UPI(id) = payment {
    println!("{}", id);
}
```

---

## Solution 10

Use **`match`** when every possible state matters.

```rust
match status {
    Status::Pending => ...
    Status::Success => ...
    Status::Failed => ...
}
```

Use **`if let`** when you only care about one specific state.

```rust
if let Some(user) = current_user {
    println!("Welcome {}", user.name);
}
```

`if let` is simply a shorter and cleaner way of writing a `match` with one useful branch and ignoring all the others.
