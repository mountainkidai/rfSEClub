# 007 Control Flow

Control flow in Python determines the order in which code is executed based on conditions and decisions. For young scientists in the rfSE Club, mastering control flow is essential for implementing logic in scientific programs, such as simulations, data analysis, or decision-making algorithms.

## If-Else Statements

- Use `if` to execute code when a condition is true.
- Use `else` for an alternative block when the condition is false.
- Conditions are evaluated using comparison and logical operators.

**Example**:

```python
number = int(input("Enter a number: "))
if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")
```

## Elif Ladder

- Use `elif` (else-if) to check multiple conditions sequentially.
- Only the first true condition’s block is executed; others are skipped.
- Ends with an optional `else` for when no conditions are met.

**Example**:

```python
fn = 5
sn = 7
tn = 2
if fn > sn and fn > tn:
    print(f"{fn} is the biggest number")
elif sn > fn and sn > tn:
    print(f"{sn} is the biggest number")
else:
    print(f"{tn} is the biggest number")
```

## Nested If Statements

- Place `if` statements inside other `if` or `else` blocks for complex decision-making.
- Useful for multi-level conditions but should be kept simple to maintain readability.

**Example**:

```python
score = int(input("Enter your score: "))
if score >= 50:
    if score >= 90:
        print("Excellent! Grade: A")
    else:
        print("Good! Grade: B")
else:
    print("Needs improvement. Grade: C")
```

## Best Practices

- Use clear and concise conditions to improve readability.
- Avoid excessive nesting; consider refactoring into functions for complex logic.
- Combine logical operators (`and`, `or`, `not`) to simplify conditions.
- Validate inputs to prevent errors in conditional logic.

**Example from Provided Code**:

```python
number = 5
if number % 2 == 0:
    print('number is even')
else:
    print('number is odd')

# Elif ladder
fn = 5
sn = 7
tn = 2
if fn > sn and fn > tn:
    print(fn, ' is big no')
elif sn > fn and sn > tn:
    print(sn, ' is big no')
else:
    print(tn, ' is big no')
```

## Practice Task

Write a Python script that:

1. Takes a number as input from the user.
2. Uses an if-elif-else structure to classify the number as:
   - "Positive" if greater than 0.
   - "Negative" if less than 0.
   - "Zero" if equal to 0.
3. Includes a nested check to determine if a positive number is even or odd.

**Solution**:

```python
number = int(input("Enter a number: "))
if number > 0:
    print(f"{number} is Positive")
    if number % 2 == 0:
        print(f"{number} is even")
    else:
        print(f"{number} is odd")
elif number < 0:
    print(f"{number} is Negative")
else:
    print("The number is Zero")
```
