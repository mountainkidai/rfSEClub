# `if let`

## First Principle

Suppose you have an enum.

```rust
enum BookingStatus {
    Pending,
    Confirmed,
    Cancelled,
}
```

Normally you'd use `match`.

```rust
match booking {
    BookingStatus::Pending => println!("Waiting"),
    BookingStatus::Confirmed => println!("Booked"),
    BookingStatus::Cancelled => println!("Refund"),
}
```

But what if you **only care about one case**?

For example:

> "I only care if it's cancelled."

Writing a full `match` feels unnecessary.

That's why Rust gives us `if let`.

---

# Syntax

```rust
if let pattern = value {
    // code
}
```

Read it like English:

> **If value matches this pattern, execute this block.**

---

## Example

```rust
enum BookingStatus {
    Pending,
    Confirmed,
    Cancelled,
}

let booking = BookingStatus::Cancelled;

if let BookingStatus::Cancelled = booking {
    println!("Refund customer");
}
```

Output

```text
Refund customer
```

If `booking` were `Pending`, nothing would happen.

---

# Think of it like this

Imagine you're waiting for a friend.

You don't care about everyone.

You only care if Aariv arrives.

```text
People entering

Rahul
Aariv
Vikas
```

Instead of checking everyone:

```text
Is it Rahul?

No


Is it Aariv?

Yes

→ Welcome!
```

You simply ask:

```text
If Aariv comes

↓

Welcome!
```

That's exactly what `if let` does.

---

# Why not use match?

You could write

```rust
match booking {
    BookingStatus::Cancelled => {
        println!("Refund");
    }

    _ => {}
}
```

But that's a lot of code.

Rust lets you write

```rust
if let BookingStatus::Cancelled = booking {
    println!("Refund");
}
```

Much cleaner.

---

# The Real Superpower

Remember

```rust
enum Option<T> {
    Some(T),
    None,
}
```

Suppose

```rust
let age = Some(21);
```

You only care if a value exists.

Instead of

```rust
match age {
    Some(value) => println!("{}", value),

    None => {}
}
```

Rust allows

```rust
if let Some(value) = age {
    println!("{}", value);
}
```

Output

```text
21
```

---

# Visualize It

```text
age

Some(21)
     │
     ▼

if let Some(value)

YES

↓

value = 21
```

If

```text
age

None
```

then

```text
Some(value)

↓

Doesn't match

↓

Skip block
```

---

# Another Example

```rust
enum Payment {
    Cash,
    Card(String),
}
```

```rust
let payment =
    Payment::Card(String::from("****1234"));
```

Now

```rust
if let Payment::Card(number) = payment {
    println!("{}", number);
}
```

Output

```text
****1234
```

Notice something amazing.

Rust automatically extracts the value.

```text
Card
    │
    ▼
****1234
```

becomes

```text
number = ****1234
```

This is called **destructuring**, and we'll study it in depth later.

---

# if let with else

Sometimes you also want to handle the opposite case.

```rust
if let Some(age) = value {
    println!("Age: {}", age);
} else {
    println!("No age");
}
```

---

# When should I use `match` vs `if let`?

### Use `match`

When you care about **all possibilities**.

```rust
match login_status {
    ...
}
```

---

### Use `if let`

When you care about **only one possibility**.

```rust
if let Some(user) = current_user {
    ...
}
```

---

# Real Koel Example

Suppose SQLx returns

```rust
Option<User>
```

You often write

```rust
if let Some(user) = user {
    println!("Welcome {}", user.name);
}
```

instead of

```rust
match user {
    Some(user) => println!("Welcome {}", user.name),

    None => {}
}
```

You'll see this pattern constantly in Rust web applications.

---

# Mental Model

```text
match

Check every possibility

──────────────

if let

Check only one possibility
```

or

```text
          Value
             │
             ▼

      if let Some(x)

        YES → Execute

        NO  → Ignore
```

---

## Rule to remember

> **Use `match` when every variant matters.**
>
> **Use `if let` when you only care about one variant.**

---
