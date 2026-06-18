# Guess the Number in Rust

## Code

```rs
use std::io;
use rand::Rng;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    println!("The secret number is: {secret_number}");
    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {guess}");
}
```

## Why `use rand::Rng;` is needed

You imported:

```rs
use rand::Rng;
```

but you never wrote:

```rs
Rng::something()
```

So why is it needed?

---

## Traits as abilities

Think about traits as **abilities**.

Imagine:

```rs
trait Rng {
    fn gen_range(...);
}
```

This trait says:

> Any type that implements `Rng` gets the ability to call `gen_range()`.

---

## What happens here

In this code:

```rs
rand::thread_rng().gen_range(1..=100);
```

Rust sees:

```rs
thread_rng()
```

which returns a random number generator object.

Then you call:

```rs
.gen_range(...)
```

But `gen_range()` is not defined directly on that object.

It comes from the `Rng` trait.

---

## Similar example

```rs
trait Fly {
    fn fly(&self);
}

struct Bird;

impl Fly for Bird {
    fn fly(&self) {
        println!("Flying!");
    }
}
```

Now:

```rs
let bird = Bird;
bird.fly();
```

This only works if the trait is in scope:

```rs
use Fly;
```

Because `fly()` comes from the trait, not directly from `Bird`.

---

## What Rust does internally

When Rust sees:

```rs
rand::thread_rng().gen_range(1..=100)
```

it effectively asks:

> Where is `gen_range` defined?

It searches:

1. Methods directly on the type.
2. Methods from traits currently in scope.

Since you imported:

```rs
use rand::Rng;
```

Rust can find the trait method and allow the call.

---

## What happens if you remove it

If you write:

```rs
use std::io;
// use rand::Rng;
```

then this line:

```rs
rand::thread_rng().gen_range(1..=100);
```

will fail.

Rust will complain with an error similar to:

```text
no method named `gen_range` found
```

or:

```text
trait `Rng` is not in scope
```

That happens because the generator object exists, but the trait providing `gen_range()` is not available to method resolution.

---

## Mental model

```rs
use rand::Rng;
```

- Does not create an object.
- Does not call a function.
- Does not allocate memory.
- It tells the compiler to consider methods provided by the `Rng` trait.

That is why this works:

```rs
.gen_range(...)
```

because `gen_range` comes from the `Rng` trait.

---

## Useful rule

If you see:

```rs
use some_crate::SomeTrait;
```

and the trait name never appears again, it is often imported only so trait methods can be called with dot syntax like:

```rs
object.method()
```

That is exactly what is happening with `Rng` and `gen_range()`.

# Understanding `rand::thread_rng().gen_range()` in Rust

Excellent question.

The object is **not** `rand`.

`rand` is the **crate/module name**, similar to a namespace.

---

## Breaking down this line:

```rs
rand::thread_rng().gen_range(1..=100)
```

### Step 1

```rs
rand::thread_rng()
```

calls a function.

Think:

```rs
let rng = rand::thread_rng();
```

Now you have:

```rs
rng
```

This is the **object**.

---

### Step 2

The type is something like:

```rs
ThreadRng
```

(you don't need to know the exact type yet)

So conceptually:

```rs
let rng: ThreadRng = rand::thread_rng();
```

---

### Step 3

Inside the `rand` crate, there's something like:

```rs
impl Rng for ThreadRng {
    // implementation
}
```

This means:

> `ThreadRng` implements `Rng`

Exactly like:

```rs
impl Fly for Bird {
    ...
}
```

means:

> `Bird` implements `Fly`

---

## So when Rust sees:

```rs
rng.gen_range(1..=100)
```

it thinks:

- `rng` is a `ThreadRng`
- `ThreadRng` implements `Rng`
- `Rng` provides `gen_range()`

Therefore:

```rs
rng.gen_range(...)
```

is allowed.

---

## A more explicit version

```rs
use rand::Rng;

fn main() {
    let rng = rand::thread_rng();

    let number = rng.gen_range(1..=100);
}
```

Although this won't compile because `gen_range` needs mutable access, so the real version would be:

```rs
let mut rng = rand::thread_rng();
let number = rng.gen_range(1..=100);
```

The important part is:

> `rng` is the **object**.

Not:

> `rand`

---

## Think of it like this:

```rs
Bird.fly()
```

wouldn't make sense because `Bird` is a **type**.

You need:

```rs
let bird = Bird;
bird.fly();
```

Similarly:

> `rand` is just the crate name.

You need:

```rs
let rng = rand::thread_rng();
rng.gen_range(...);
```

where `rng` is the actual **value/object**.

---

## Translation: Bird Example ↔ Rand Example

| Bird Example | Rand Example      |
| ------------ | ----------------- |
| `Bird`       | `ThreadRng` type  |
| `bird`       | `rng` object      |
| `Fly` trait  | `Rng` trait       |
| `fly()`      | `gen_range()`     |
| `bird.fly()` | `rng.gen_range()` |

That's the **exact same mechanism** Rust is using.
