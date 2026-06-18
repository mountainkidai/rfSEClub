# Method Chaining in Rust

Method chaining means:

> Take the result of one method and immediately call another method on it.

Instead of:

```rust
let a = something();
let b = a.method1();
let c = b.method2();
```

You write:

```rust
something()
    .method1()
    .method2();
```

---

# Real Life Analogy

Imagine:

```text
Take plate
 ↓
Put food
 ↓
Heat food
 ↓
Eat
```

Instead of:

```text
plate = get_plate()
food = put_food(plate)
hot_food = heat(food)
eat(hot_food)
```

You do:

```text
get_plate()
  .put_food()
  .heat()
  .eat()
```

Each step returns something that the next step can use.

---

# Example 1

```rust
let name = "  Aariv  ";

let name = name.trim().to_uppercase();
```

Step-by-step:

```text
"  Aariv  "
     ↓ trim()
"Aariv"
     ↓ to_uppercase()
"AARIV"
```

---

# Example 2 (Your Code)

```rust
let guess: u32 = guess.trim().parse().expect("Please type a number!");
```

Equivalent to:

```rust
let trimmed = guess.trim();

let parsed = trimmed.parse();

let guess = parsed.expect("Please type a number!");
```

---

# Visual Flow

```text
guess
  ↓
trim()
  ↓
"42"
  ↓
parse()
  ↓
Ok(42)
  ↓
expect(...)
  ↓
42
```

---

# Another Example

```rust
io::stdin()
    .read_line(&mut guess)
    .expect("Failed to read line");
```

Equivalent to:

```rust
let stdin = io::stdin();

let result = stdin.read_line(&mut guess);

result.expect("Failed to read line");
```

---

# Why Method Chaining?

Without chaining:

```rust
let stdin = io::stdin();

let result = stdin.read_line(&mut guess);

result.expect("Failed to read line");
```

With chaining:

```rust
io::stdin()
    .read_line(&mut guess)
    .expect("Failed to read line");
```

Less code.
Easier to read as a sequence of actions.

---

# Mental Model

```text
object
  ↓
method()
  ↓
new object/result
  ↓
method()
  ↓
new object/result
  ↓
method()
```

Each method returns something.

The next method uses that returned value.

That's method chaining.
