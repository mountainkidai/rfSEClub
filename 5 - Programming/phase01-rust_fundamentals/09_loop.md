# Rust `loop` — First Principles

## What is `loop`?

A `loop` tells Rust:

> "Keep running this code forever until I explicitly stop."

```rust
loop {
    println!("Hello");
}
```

This will print:

```text
Hello
Hello
Hello
...
```

forever.

---

# Stopping a Loop with `break`

Since `loop` runs forever, you usually stop it using `break`.

```rust
loop {
    println!("Hello");
    break;
}
```

Execution:

```text
Hello
```

Then Rust exits the loop.

---

# Example

```rust
fn main() {
    let mut counter = 0;

    loop {
        counter += 1;

        if counter == 5 {
            break;
        }
    }

    println!("{counter}");
}
```

Execution:

```text
counter = 1
counter = 2
counter = 3
counter = 4
counter = 5
break
```

Output:

```text
5
```

---

# The Special Thing About Rust's `loop`

In many languages:

```text
break
```

only means:

> "Exit the loop."

In Rust:

```text
break VALUE
```

means:

> "Exit the loop and return VALUE."

---

# Example: Returning a Value

```rust
fn main() {
    let result = loop {
        break 42;
    };

    println!("{result}");
}
```

Output:

```text
42
```

What happened?

```rust
let result = loop {
    break 42;
};
```

is conceptually similar to:

```rust
let result = 42;
```

---

# Why Does This Work?

Because `loop` is an **expression**.

An expression produces a value.

Examples of expressions:

```rust
5
```

```rust
5 + 3
```

```rust
true
```

```rust
loop {
    break 42;
}
```

All of these produce values.

---

# Your Example

```rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {result}");
}
```

---

## Iteration 1

```text
counter = 1
```

Condition:

```text
counter == 10 ?
```

No.

Loop again.

---

## Iteration 2

```text
counter = 2
```

No.

Loop again.

---

...

---

## Iteration 10

```text
counter = 10
```

Condition:

```text
counter == 10
```

Yes.

Execute:

```rust
break counter * 2;
```

which becomes:

```rust
break 20;
```

Rust:

1. Exits the loop.
2. Returns `20` from the loop.

So:

```rust
let result = 20;
```

Output:

```text
The result is 20
```

---

# Mental Model

Think of a loop as a machine:

```text
          loop
            │
            ▼
      Run code again
            │
            ▼
      Run code again
            │
            ▼
      Run code again
            │
            ▼
      break VALUE
            │
            ▼
      Return VALUE
```

---

# `break` vs `break VALUE`

## Just Exit

```rust
loop {
    break;
}
```

Meaning:

```text
Stop the loop.
Return nothing.
```

---

## Exit and Return a Value

```rust
loop {
    break 100;
}
```

Meaning:

```text
Stop the loop.
Return 100.
```

---

# Analogy

Imagine a worker digging for gold:

```text
Keep digging
Keep digging
Keep digging
Found gold!
```

Normal break:

```text
Found gold!
Stop working.
```

Rust break with value:

```text
Found gold!
Take 5kg gold back with you.
```

```rust
break 5;
```

The `5` is the value the loop returns.

---

# Summary

```rust
loop {
    // runs forever
}
```

```rust
break;
```

→ Exit the loop.

```rust
break VALUE;
```

→ Exit the loop and return `VALUE`.

```rust
let x = loop {
    break 42;
};
```

is equivalent to:

```rust
let x = 42;
```

The key idea:

> Rust's `loop` is not just a control-flow statement. It is also an expression that can produce a value.
