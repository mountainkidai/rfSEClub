# 008 Loops

Loops in Python allow repetitive execution of code blocks, enabling efficient handling of repetitive tasks in scientific programs. For young scientists in the rfSE Club, mastering loops is crucial for iterating over data, performing simulations, or processing large datasets in experiments.

## For Loops

- Used to iterate over a sequence (e.g., list, tuple, string, or `range()`).
- Ideal for known iteration counts or iterating over collections.

**Example**:

```python
# Iterating over a range
for number in range(1, 6):  # Iterates from 1 to 5
    print(number)  # Output: 1, 2, 3, 4, 5

# Iterating over a list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I love {fruit}")
```

## While Loops

- Executes as long as a condition remains true.
- Suitable for scenarios where the number of iterations is unknown.

**Example**:

```python
starting_no = 1
while starting_no <= 5:
    print(starting_no)
    starting_no += 1  # Output: 1, 2, 3, 4, 5
```

## Loop Control Statements

- `break`: Exits the loop immediately.
- `continue`: Skips the current iteration and continues with the next.
- `else`: Executes when the loop completes normally (without `break`).

**Example**:

```python
for i in range(1, 6):
    if i == 3:
        continue  # Skip printing 3
    print(i)  # Output: 1, 2, 4, 5
else:
    print("Loop completed")
```

## Best Practices

- Use `for` loops for known iteration counts or sequences; use `while` loops for condition-based iteration.
- Avoid infinite loops by ensuring `while` conditions eventually become false.
- Use descriptive variable names (e.g., `fruit` instead of `x`) for clarity.
- Minimize use of `break` and `continue` to keep code readable.

**Example from Provided Code**:

```python
# For loop with range
for number in range(1, 11, 3):  # Step by 3
    print(number)  # Output: 1, 4, 7, 10

# While loop
starting_no = 1
while starting_no <= 10:
    print(starting_no)
    starting_no = starting_no + 1  # Output: 1, 2, 3, ..., 10
```

## Practice Task

Write a Python script that:

1. Uses a `for` loop to print all even numbers from 2 to 10.
2. Uses a `while` loop to ask the user for numbers until they enter 0, then prints the sum of all entered numbers.
3. Includes a `break` statement to exit early if the user enters a negative number.

**Solution**:

```python
# For loop to print even numbers
for num in range(2, 11, 2):
    print(num)  # Output: 2, 4, 6, 8, 10

# While loop for sum of numbers
total = 0
while True:
    num = int(input("Enter a number (0 to stop): "))
    if num == 0:
        break
    if num < 0:
        print("Negative number entered, stopping.")
        break
    total += num
print(f"Sum of entered numbers: {total}")
```
