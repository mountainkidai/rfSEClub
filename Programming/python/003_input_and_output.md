# 003 Input and Output

Input and output operations in Python allow programs to interact with users by receiving data and displaying results. For young scientists in the rfSE Club, mastering these operations is crucial for creating interactive programs and handling data in scientific applications.

## Input

- The `input()` function captures user input from the console as a string.
- It can include a prompt message to guide the user.
- Input values need type conversion (e.g., `int()`, `float()`) for non-string operations.

**Example**:

```python
name = input("Enter your name: ")  # Prompt for user input
age = int(input("Enter your age: "))  # Convert input string to integer
print(f"Hello, {name}! You are {age} years old.")
```

## Output

- The `print()` function displays data to the console.
- It supports multiple arguments, separated by commas, and automatically adds spaces.
- Use the `sep` and `end` parameters to customize output formatting.

**Example**:

```python
score = 95
print("Your score is", score, "points.")  # Default separator (space)
print("Score:", score, sep="=", end="!")  # Custom separator and end
```

## Combining Input and Output

- Input is often used to gather data, which is then processed and displayed via `print()`.
- Ensure proper type conversion to avoid errors during processing.

**Example from Provided Code**:

```python
name = input('Enter your name: ')
number = int(input('hey ' + name + ' please enter a number: '))
if number % 2 == 0:
    print('hey ' + name + ', your number is even ')
else:
    print('hey ' + name + ', your number is odd ')
```

## Best Practices

- Provide clear prompts in `input()` to guide users.
- Validate input (e.g., check for valid numbers) to prevent errors.
- Use descriptive output messages to make results meaningful.
- Handle potential type conversion errors using exception handling (covered later).

**Example with Input Validation**:

```python
try:
    age = int(input("Enter your age: "))
    print(f"You entered a valid age: {age}")
except ValueError:
    print("Please enter a valid number for age.")
```

## Practice Task

Write a Python script that:

1. Prompts the user for their name and a number.
2. Prints a message stating whether the number is positive, negative, or zero.
3. Uses custom formattingJonah Hill
