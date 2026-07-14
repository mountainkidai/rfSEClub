Awesome. The next concept is one of the most important in Rust because it appears **everywhere**.

# Pattern Matching

> **Pattern matching means checking a value against different possible patterns and running the matching code.**

The simplest example is with an enum.

---

## Imagine this enum

```rust
enum TrafficLight {
    Red,
    Yellow,
    Green,
}
```

Now suppose you have

```rust
let light = TrafficLight::Red;
```

How do you know which variant it is?

Rust gives you `match`.

```rust
match light {
    TrafficLight::Red => {
        println!("Stop");
    }

    TrafficLight::Yellow => {
        println!("Slow down");
    }

    TrafficLight::Green => {
        println!("Go");
    }
}
```

---

## Think like a security guard

Imagine someone enters a building.

The guard asks

```text
Who are you?

Employee?
Visitor?
Delivery?
```

Depending on the answer, they perform different actions.

```text
Person
   │
   ▼

Employee  → Allow

Visitor   → Register

Delivery  → Send to Warehouse
```

That's exactly what pattern matching is.

---

## Why is it called "Pattern" Matching?

Because Rust is trying to match a **pattern**.

Example:

```rust
TrafficLight::Red
```

is a pattern.

Rust asks

```text
Does light match

TrafficLight::Red ?

Yes

↓

Run this code.
```

If not,

```text
Does it match

TrafficLight::Yellow ?

No

↓

Check next.
```

---

## Another example

```rust
enum Direction {
    North,
    South,
    East,
    West,
}
```

```rust
let direction = Direction::West;
```

```rust
match direction {
    Direction::North => println!("Go Up"),
    Direction::South => println!("Go Down"),
    Direction::East => println!("Go Right"),
    Direction::West => println!("Go Left"),
}
```

---

## Why is this useful?

Imagine Phunsuk.

```rust
enum BookingStatus {
    Pending,
    Confirmed,
    Cancelled,
}
```

```rust
match booking {
    BookingStatus::Pending => {
        println!("Wait for confirmation");
    }

    BookingStatus::Confirmed => {
        println!("Send hotel details");
    }

    BookingStatus::Cancelled => {
        println!("Refund customer");
    }
}
```

Every state has different logic.

---

## First Principle

An enum asks

> **"What am I?"**

Pattern matching answers

> **"If you're this, I'll do this."**

```text
BookingStatus

Pending
      │
      ▼
Wait

Confirmed
      │
      ▼
Send Details

Cancelled
      │
      ▼
Refund
```

---

## One important thing

Rust forces you to handle **every possible variant**.

If your enum has

```rust
enum TrafficLight {
    Red,
    Yellow,
    Green,
}
```

and you forget

```rust
Green
```

Rust won't compile.

This is one of Rust's biggest safety features—it ensures you don't accidentally ignore a possible state.

---

### Your mental model

- **Enum** = "One of many possibilities."
- **Pattern matching** = "Figure out which possibility it currently is."

---
