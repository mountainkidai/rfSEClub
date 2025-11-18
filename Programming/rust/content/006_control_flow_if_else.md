### Control Flow

If-else: branching logic

Loops: repeating logic

Match: powerful pattern matching

```rust
fn is_even(num: i32) -> bool {
    if num % 2 == 0 {
        true
    } else {
        false
    }
}

```

## Problems

1. Write a function that takes a number and prints "positive" if it's greater than 0, "negative" if less than 0, or "zero" if equal to 0
2. Write a function that takes an age and prints "child" if age < 18, "adult" if age >= 18 and < 65, or "senior" if age >= 65
3. Write a function that takes two numbers and prints which one is larger, or "equal" if they're the same
4. Write a function that takes a score (0-100) and prints the grade: "A" for >= 90, "B" for >= 80, "C" for >= 70, "D" for >= 60, "F" otherwise
5. Write a function that checks if a year is a leap year (divisible by 4, but not by 100 unless also divisible by 400) and prints the result.
