# Shadowing in Rust

Shadowing can look like mutation at first glance, but the two are completely different concepts. 
## What Shadowing Actually Means

Shadowing means creating a **new variable** that happens to have the **same name** as an existing one. Once you do this, Rust always uses the newest variable whenever you refer to that name. The old variable hasn't vanished. It's still sitting in memory, but you can no longer access it by name until the new variable goes out of scope.

This is different from `mut`. When you mutate a variable, you're changing the value *inside the same box*. When you shadow a variable, you're creating a *brand new box* with its own type and its own rules, which just happens to wear the same name tag as the old one.

## Example

```rust
fn main() {
    let mut x = 5i32;          // Original: mutable integer
    println!("Original: {}", x);

    {                            // Inner scope begins
        let x = x.to_string();  // Shadowed: immutable String
        println!("Shadowed immutable str: {}", x);
        // x = "new";           // Error if tried: this x isn't mutable
    }                            // Inner scope ends, original x reappears

    println!("Original reappears: {}", x);  // Still 5i32, still mutable
    x = 10;                      // Allowed, this is the original x
}
```

**Output:**
```
Original: 5
Shadowed immutable str: 5
Original reappears: 5
```

## Line-by-Line Explanation

**`let mut x = 5i32;`**
This creates a variable named `x`, gives it the number `5`, and marks it as mutable, meaning its value can be changed later.

**`println!("Original: {}", x);`**
This prints the current value of `x`, which is `5`.

**`{`**
This opens a new inner scope, a block of code with its own boundaries. Anything created inside here only exists until the closing `}`.

**`let x = x.to_string();`**
This is the shadowing step. Rust takes the current value of `x` (which is `5`), converts it into text using `.to_string()`, and stores that text in a **brand new variable**, also named `x`. This new `x` is completely separate from the old one. It has a different type (text instead of a number) and, unless stated otherwise, it is not mutable.

**`println!("Shadowed immutable str: {}", x);`**
This prints the value of the *new* `x`, which is the text `"5"`.

**`// x = "new";`**
This line is commented out because it would cause an error. The inner `x` was never declared with `mut`, so it can't be reassigned directly. The only way to change it would be to shadow it again with another `let`.

**`}`**
This closes the inner scope. The inner `x` (the text version) is dropped here, along with its name. It no longer exists after this point.

**`println!("Original reappears: {}", x);`**
Now that the inner scope has ended, the name `x` refers to the original variable again: the mutable number, still holding the value `5`. It was never touched while the inner scope was running.

**`x = 10;`**
This works because it refers to the original `x`, which was declared with `mut` at the very start. Since it's mutable, its value can be updated without creating a new variable.

## Why Not Just Use `mut` for Everything?

Shadowing has two advantages that `mut` cannot offer:

1. **You can change the type.** A `mut` variable is locked into one type for its entire life. Shadowing lets you reuse the same name while changing type. This is useful when processing input step by step, such as turning a `String` into a validated `u32`, without inventing names like `raw_input`, `cleaned_input`, and `final_input`.

2. **You can change mutability.** Shadowing lets you turn a mutable value into an immutable one, or vice versa, without ever touching the original.

Since shadowing always creates a new variable, you also don't need `mut` just to "replace" something like a `String` or a `Vec` with a new value. You're not changing anything. You're creating something new that happens to share a name with the old thing.

## Shadowing vs. Mutation

| | Shadowing (`let x = ...`) | Mutation (`mut x`) |
|---|---|---|
| Creates a new variable | Yes | No, it's the same variable the whole time |
| Type can change | Yes | No |
| Mutability can change | Yes | No |
| What happens to the old value | Stays hidden until its scope ends, then gets dropped | Gets overwritten immediately |

## The Core Idea

Shadowing never touches the original variable. It simply places a new variable in front of it for a while. Once that new variable goes out of scope, you're back to the original, completely unchanged the entire time.
