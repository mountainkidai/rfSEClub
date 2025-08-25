# 029 Exception Handling

Exception handling in Python allows programs to manage errors gracefully, ensuring robustness and reliability. For students in the rfSE Club, mastering exception handling is critical for creating scientific programs that handle invalid inputs or unexpected conditions, such as errors in experiment data processing. The provided code includes examples of `try`, `except`, and `finally` blocks, which are used to illustrate these concepts.

## What is Exception Handling?

- Exceptions are errors that occur during program execution (e.g., dividing by zero, invalid input).
- Python uses `try`, `except`, `else`, and `finally` blocks to catch and handle exceptions, preventing program crashes.

## Key Components

- **try**: Contains code that might raise an exception.
- **except**: Handles specific exceptions or general errors if an exception occurs.
- **else**: Executes if no exception occurs in the `try` block.
- **finally**: Executes regardless of whether an exception occurs, often used for cleanup.

**Example**:

```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print(f"Result: {result}")
finally:
    print("Calculation complete.")
# Output: Result: 5.0
#         Calculation complete.
```

## Handling Specific Exceptions

- Specify exception types in `except` blocks to handle errors precisely (e.g., `ValueError`, `FileNotFoundError`).
- Use multiple `except` blocks for different error types.

**Example**:

```python
try:
    number = int(input("Enter a number: "))
except ValueError:
    print("Please enter a valid number!")
except KeyboardInterrupt:
    print("Input interrupted by user.")
```

## General Exception Handling

- Use a bare `except` to catch all exceptions, but only as a last resort to avoid missing specific errors.

**Example**:

```python
try:
    f = open("demo.txt", "r")
except FileNotFoundError:
    print("File not found!")
except:
    print("An unexpected error occurred.")
```

## Best Practices

- Catch specific exceptions rather than using a general `except` to avoid masking bugs.
- Use `finally` for cleanup tasks, like closing files or releasing resources.
- Provide clear error messages to guide users (e.g., "Enter a number, not text").
- Combine with input validation to enhance program robustness.

**Example from Provided Code**:

```python
try:
    name = input('Enter name: ')
except:
    print('Please Enter name only')
try:
    age = int(input('Enter age: '))
except:
    print('enter age as number only')
finally:
    print('all done')
# Example Output (if valid input): Enter name: Aariv
#                                 Enter age: 12
#                                 all done
```

## Practice Task

Write a Python script that:

1. Defines a function `divide_measurements` that takes two numbers as input and returns their division.
2. Uses `try`, `except`, `else`, and `finally` to handle division by zero and invalid input errors.
3. Prompts the user for two numbers and calls the function, printing the result or an error message.

**Solution**:

```python
def divide_measurements(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        return "Error: Division by zero is not allowed."
    except TypeError:
        return "Error: Invalid input type."
    else:
        return f"Result: {result}"
    finally:
        print("Calculation attempt completed.")

try:
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    print(divide_measurements(num1, num2))
except ValueError:
    print("Please enter valid numbers.")
# Example Output (valid input): Enter first number: 10
#                              Enter second number: 2
#                              Calculation attempt completed.
#                              Result: 5.0
```
