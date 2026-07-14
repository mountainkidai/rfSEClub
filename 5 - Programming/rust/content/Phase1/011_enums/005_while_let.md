# `while let`

## First Principle

`if let` asks:

> **Does this match once?**

If yes → execute once.

---

`while let` asks:

> **Does this keep matching?**

If yes → keep executing until it no longer matches.

---

## Think of a box of chocolates 🍫

Imagine a box.

```text
Box

🍫
🍫
🍫
🍫
Empty
```

You want to keep eating chocolates until the box is empty.

You don't know how many chocolates there are.

This is exactly what `while let` is for.

---

## Syntax

```rust
while let pattern = value {
    // code
}
```

Read it like English.

> While the value matches this pattern, keep executing.

---

## Example with Option

Suppose

```rust
let mut number = Some(5);
```

Now

```rust
while let Some(value) = number {
    println!("{}", value);

    number = None;
}
```

Output

```text
5
```

What happened?

Iteration 1

```text
number

↓

Some(5)

↓

Matches

↓

Print 5

↓

number = None
```

Iteration 2

```text
number

↓

None

↓

Doesn't match

↓

Loop stops
```

---

# Real Example using Vec

Suppose

```rust
let mut numbers = vec![10, 20, 30];
```

Rust's `pop()` returns

```rust
Option<T>
```

Every call returns

```text
Some(value)
```

or

```text
None
```

Now

```rust
while let Some(number) = numbers.pop() {
    println!("{}", number);
}
```

Output

```text
30
20
10
```

---

## Visualization

Initially

```text
Vec

10
20
30
```

First pop()

```text
Some(30)
```

Second pop()

```text
Some(20)
```

Third pop()

```text
Some(10)
```

Fourth pop()

```text
None
```

Loop stops automatically.

---

# Compare

Using `loop`

```rust
loop {
    match numbers.pop() {
        Some(number) => println!("{}", number),
        None => break,
    }
}
```

Same thing.

But much longer.

Rust lets you write

```rust
while let Some(number) = numbers.pop() {
    println!("{}", number);
}
```

Much cleaner.

---

# Real Life Analogy

Imagine your hotel receives bookings.

```text
Booking Queue

Booking 1

Booking 2

Booking 3

Empty
```

You keep processing bookings until there are none left.

```text
While

Booking Exists

↓

Process Booking
```

When queue becomes empty

```text
No Booking

↓

Stop
```

---

# Why does Rust have this?

Because many APIs return

```rust
Option<T>
```

Examples

- `Vec::pop()`
- Iterator `next()`
- Queue removal
- Stack removal

You'll often see

```rust
while let Some(item) = ...
```

---

# Mental Model

## if let

```text
Match once

YES

↓

Execute once
```

---

## while let

```text
Match

↓

Execute

↓

Match Again

↓

Execute

↓

Match Again

↓

Execute

↓

No Match

↓

Stop
```

---

# Example from Koel

Imagine a queue of pending notifications.

```text
Notification Queue

Email 1

Email 2

Email 3

Empty
```

Pseudo-code

```rust
while let Some(notification) = queue.pop() {
    send(notification);
}
```

Rust keeps processing notifications until the queue becomes empty.

---

# Rule to Remember

- **`if let`** → Check **once**.
- **`while let`** → Keep checking until it no longer matches.

---

## Mental Picture

```text
if let

        Value
          │
          ▼
      Match?

YES ─────────► Execute Once

NO  ─────────► Continue Program



while let

        Value
          │
          ▼
      Match?

YES ─────────► Execute
                  │
                  ▼
             Match Again

NO  ─────────► Exit Loop
```

---

This concept is used less frequently than `if let`, but it's very elegant when processing collections, iterators, queues, or stacks that return `Option<T>`.
