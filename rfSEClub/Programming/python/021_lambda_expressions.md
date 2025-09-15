# 021 Lambda Expressions

Lambda expressions in Python are concise, anonymous functions defined using the `lambda` keyword. For students in the rfSE Club, lambda expressions are valuable for creating quick, throwaway functions for tasks like data processing or functional programming in scientific applications, such as applying transformations to experiment data.

## Defining Lambda Expressions

- Syntax: `lambda arguments: expression`
- Creates a function without a name, used for short, simple operations.
- Can take any number of arguments but must return a single expression.

**Example**:

```python
# Lambda function to square a number
square = lambda x: x * x
print(square(5))  # Output: 25
```

## Using Lambda Expressions

- Often used with functions like `map()`, `filter()`, or `sorted()` for inline operations.
- Ideal for situations where defining a full function is unnecessary.

**Example with `map()`**:

```python
numbers = [1, 2, 3, 4]
squares = list(map(lambda x: x * x, numbers))
print(squares)  # Output: [1, 4, 9, 16]
```

**Example with `filter()`**:

```python
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # Output: [2, 4, 6]
```

## Lambda with Multiple Arguments

- Can handle multiple inputs, but the expression must remain simple.

**Example**:

```python
multiply = lambda x, y: x * y
print(multiply(3, 4))  # Output: 12
```

## Best Practices

- Use lambda expressions for short, simple functions to maintain readability.
- Avoid complex logic in lambdas; use regular functions for clarity.
- Combine with `map()`, `filter()`, or similar for concise data transformations.
- Ensure the expression is intuitive to avoid confusion for collaborators.

**Example from Provided Code**:

```python
# Lambda equivalent of a named function
def multiply(n):
    return n * 2

numbers = [3, 4, 7, 8, 9]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)  # Output: [6, 8, 14, 16, 18]
```

## Practice Task

Write a Python script that:

1. Defines a lambda function to calculate the cube of a number.
2. Uses `map()` with a lambda to triple a list of measurements `[10, 20, 30, 40]`.
3. Uses `filter()` with a lambda to select numbers greater than 25 from the same list.
4. Prints the results of both operations.

**Solution**:

```python
# Lambda to calculate cube
cube = lambda x: x ** 3
print(f"Cube of 5: {cube(5)}")  # Output: Cube of 5: 125

# Using map to triple measurements
measurements = [10, 20, 30, 40]
tripled = list(map(lambda x: x * 3, measurements))
print(f"Tripled measurements: {tripled}")  # Output: Tripled measurements: [30, 60, 90, 120]

# Using filter to select numbers > 25
filtered = list(filter(lambda x: x > 25, measurements))
print(f"Measurements > 25: {filtered}")  # Output: Measurements > 25: [30, 40]
```
