We're now entering **Phase 2: Error Handling**, which is where Rust starts to feel very different from languages like JavaScript, Python, or Java.

The first concept is the foundation of all error handling.

# `Option<T>`

## First Principle

Sometimes a value exists.

Sometimes it doesn't.

Instead of using `null`, Rust forces you to explicitly handle both possibilities.

---

## Think about a hotel room

A guest asks:

> "Is Room 101 available?"

Possible answers:

```text
Yes, here is the room.
```

or

```text
No room is available.
```

There is no third possibility.

Rust models this using `Option`.

---

## Definition

The actual Rust source code is almost exactly this:

```rust
enum Option<T> {
    Some(T),
    None,
}
```

Look carefully.

**`Option` is just an enum.**

This is why learning enums first was important.

---

## Breaking it down

```rust
Some(T)
```

means

> There is a value.

---

```rust
None
```

means

> There is no value.

---

## Visualization

```text
Option

├── Some(value)

└── None
```

For example

```rust
let age = Some(25);
```

Visualization

```text
Option

↓

Some

↓

25
```

---

Or

```rust
let age: Option<u32> = None;
```

Visualization

```text
Option

↓

None
```

No number exists.

---

# Why not use `null`?

Imagine JavaScript.

```javascript
let user = null;
```

Later

```javascript
console.log(user.name);
```

💥 Runtime error.

Because `null` has no `name`.

Rust prevents this.

---

Instead

```rust
let user: Option<User> = None;
```

Rust won't let you access the value directly.

It forces you to check first.

---

# Creating an Option

With a value

```rust
let age = Some(25);
```

Without a value

```rust
let age: Option<u32> = None;
let age: Option<u32> = Some(25);        // A number
let name: Option<String> = None;        // A string (currently missing)
let logged_in: Option<bool> = None;     // A boolean (currently missing)
```

Notice

Rust needs the type because `None` doesn't tell Rust what is missing.

---

# Reading an Option

Since `Option` is an enum, we use `match`.

```rust
let age = Some(25);

match age {
    Some(value) => println!("{}", value),

    None => println!("No age"),
}
```

Output

```text
25
```

---

If

```rust
let age: Option<u32> = None;
```

Output

```text
No age
```

---

# Using `if let`

Since we only care about one case

```rust
let age = Some(25);

if let Some(value) = age {
    println!("{}", value);
}
```

Output

```text
25
```

If

```rust
None
```

Nothing happens.

```text
Is handling None optional?

Yes, with if let.
```

`If you need to handle both cases, use match:`

```rs
match age {
    Some(value) => println!("{}", value),
    None => println!("No age"),
}
```

# Real Life Example

Imagine Phunsuk.

Searching for a hotel.

Sometimes

```text
Hotel Found
```

Sometimes

```text
No Hotel Found
```

Rust

```rust
Option<Hotel>
```

Possible values

```text
Some(Hotel)
```

or

```text
None
```

---

# SQLx Example

Suppose you search for a user.

```rust
let user = find_user(email);
```

Can the database guarantee the user exists?

No.

So Rust returns

```rust
Option<User>
```

Either

```text
Some(User)
```

or

```text
None
```

---

# Vec Example

A `Vec` (vector) is a **growable list**.

```rust
let mut numbers = vec![10, 20, 30];
```

The `pop()` method **removes and returns the last item**.

### First call

```rust
let x = numbers.pop();
```

Result:

```rust
Some(30)
```

The vector is now:

```text
[10, 20]
```

### Second call

```rust
numbers.pop(); // Some(20)
```

Vector:

```text
[10]
```

### Third call

```rust
numbers.pop(); // Some(10)
```

Vector:

```text
[]
```

### Fourth call

```rust
numbers.pop(); // None
```

Why `None`?

Because there is **nothing left to remove**.

If `pop()` returned just `i32`, what should it return when the vector is empty?

```rust
[]  → ?
```

There is no valid number to return.

Instead of:

- crashing,
- returning a fake value like `0`,
- or causing undefined behavior,

Rust returns:

```rust
Option<i32>
```

which is either:

- `Some(number)` → a number was removed.
- `None` → the vector was empty.

Example:

```rust
let mut numbers = vec![10];

println!("{:?}", numbers.pop()); // Some(10)
println!("{:?}", numbers.pop()); // None
```

**Simple rule:** Whenever an operation **might not be able to produce a value**, Rust often returns `Option<T>` so you're forced to consider the "no value" case safely.

There is no number to return.

Instead of crashing,

Rust returns

---

# Why is this Beautiful?

```text
User Exists

↓

Some(User)
```

or

```text
User Doesn't Exist

↓

None
```

The compiler forces you to think about both.

---

# Mental Model

```text
Option<T>

         │

   ┌─────┴─────┐

   │           │

Some(T)      None

Value       No Value
```

---

# Rule to Remember

- `Option<T>` is an **enum**.
- `Some(T)` means a value exists.
- `None` means no value exists.
- Rust uses `Option` instead of `null`.
- You must explicitly handle both cases.

---

# Problems

## Problem 1

Create an `Option<i32>` containing the value `100`.

---

## Problem 2

Create an `Option<String>` with no value.

---

## Problem 3

Given:

```rust
let score = Some(95);
```

Print the score using `match`.

---

## Problem 4

Rewrite Problem 3 using `if let`.

---

## Problem 5

What is printed?

```rust
let name: Option<String> = None;

match name {
    Some(value) => println!("{}", value),
    None => println!("No name found"),
}
```

---

## Problem 6

Why does `numbers.pop()` return an `Option<T>` instead of just `T`?

---

## Problem 7

Which of these are valid `Option<i32>` values?

```rust
Some(10)

None

Some(999)
```

---

## Problem 8

Why is `Option<T>` implemented as an enum instead of using `null`?

---

# Solutions

## Solution 1

```rust
let number: Option<i32> = Some(100);
```

---

## Solution 2

```rust
let name: Option<String> = None;
```

---

## Solution 3

```rust
let score = Some(95);

match score {
    Some(value) => println!("{}", value),
    None => println!("No score"),
}
```

Output:

```text
95
```

---

## Solution 4

```rust
let score = Some(95);

if let Some(value) = score {
    println!("{}", value);
}
```

Output:

```text
95
```

---

## Solution 5

Output:

```text
No name found
```

because the value is `None`.

---

## Solution 6

A vector can be empty. If `pop()` always returned `T`, it wouldn't know what to return when there are no elements left.

Returning `Option<T>` makes both possibilities explicit:

- `Some(value)` → an element was removed.
- `None` → the vector was empty.

---

## Solution 7

All three are valid:

```rust
Some(10)

None

Some(999)
```

because an `Option<i32>` can either contain an `i32` or contain no value.

---

## Solution 8

`Option<T>` is an enum because it makes the absence of a value **part of the type system**. Unlike `null`, the compiler forces you to handle both `Some(T)` and `None`, preventing many common runtime errors such as null pointer exceptions.

---

### One important insight

Notice how almost everything we've learned connects:

- `Option<T>` is an **enum**.
- We use **`match`** or **`if let`** to work with it.
- `while let` also works because `Option` is an enum.
- Methods like `Vec::pop()` return `Option<T>` because a value might not exist.

This is why Rust feels so consistent: instead of inventing special rules, it builds many features on a few simple ideas. The next concept, **`Result<T, E>`**, follows the same pattern—you'll see it's "Option with an error message."
