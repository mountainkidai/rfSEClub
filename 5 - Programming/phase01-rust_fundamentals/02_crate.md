# Rust Hierarchy (Simple Mental Model)

```text
crate
│
├── module
│   ├── function
│   ├── struct
│   ├── enum
│   ├── trait
│   └── constant
│
└── module
```

Example:

```rust
std::cmp::Ordering
```

```text
std       -> crate
cmp       -> module
Ordering  -> enum
```

---

# :: vs .

## `::` → Navigate / Find Something

Used to access things inside a crate, module, type, or enum.

```rust
rand::thread_rng()
String::new()
Ordering::Less
```

Think:

> "Go inside this thing and find that thing."

---

## `.` → Use an Object

Used when you already have a value/object.

```rust
let s = String::new();
s.len();

let rng = rand::thread_rng();
rng.gen_range(1..=100);
```

Think:

> "Hey object, do something."

---

# Function vs Method

## Function

No object required.

```rust
String::new()
rand::thread_rng()
```

Think:

> Create or find something.

---

## Method

Requires an object.

```rust
s.len()
vec.push(10)
rng.gen_range(1..=100)
```

Think:

> Use the object.

---

# Easy Rule

```text
:: = Find / Navigate
.  = Use Object
```

Example:

```rust
let rng = rand::thread_rng();
```

```text
rand
 ↓
thread_rng()
 ↓
creates object
```

Then:

```rust
rng.gen_range(1..=100);
```

```text
object
 ↓
method
```

So:

```text
Create/Find (::)
      ↓
Use Object (.)
```
