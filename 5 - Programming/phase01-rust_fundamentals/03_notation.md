# Rust `::` vs `.` — The Shortest Explanation

## The Shortest Way

### `::`

→ **Go to a place**  
Used to access something inside a crate, module, type, or enum.

```rs
rand::thread_rng()
```

Read as: _In `rand`, find `thread_rng`._

```rs
String::new()
```

Read as: _In `String`, find `new`._

```rs
Ordering::Less
```

Read as: _In `Ordering`, find `Less`._

---

### `.`

→ **Use an object**  
Used when you already have a value/object.

```rs
let s = String::new();
s.len()
```

Read as: _String object `s`, tell me your length._

```rs
let rng = rand::thread_rng();
rng.gen_range(1..=100)
```

Read as: _RNG object, generate a random number._

---

## One Sentence Rule

> `::` = navigate to something.  
> `.` = do something with an object.

---

## Example

```rs
let rng = rand::thread_rng();
```

`rand::thread_rng()` → find and call a function (`::`)

Now you have an object: `rng`

Then:

```rs
rng.gen_range(1..=100)
```

use that object (`.`)

---

## The Flow

```
Find/Create object (::)
        ↓
Use object (.)
```

That's the mental model that works for **90% of Rust code**.
