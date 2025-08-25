# 001 Comments

Comments in Python are used to add explanatory notes to code, making it easier to understand and maintain. They are ignored by the Python interpreter and do not affect program execution. Comments are essential for documenting code, especially in open-source projects like the rfSE Club, to help students understand the purpose and logic of code segments.

## Single-Line Comments

- Start with the `#` symbol.
- Everything after `#` on the same line is ignored by the interpreter.
- Used for short explanations or to temporarily disable code.

**Example**:

```python
# This is a single-line comment
print("Hello, rfSE Club!")  # Prints a welcome message
```

## Multi-Line Comments

- Python does not have a specific syntax for multi-line comments.
- Use triple quotes (`"""` or `'''`) to create multi-line strings, which can serve as comments when not assigned to a variable.
- Often used for longer explanations, function documentation, or module descriptions.

**Example**:

```python
"""
This is a multi-line comment.
It can span multiple lines and is useful for detailed explanations.
Here, we are welcoming users to the rfSE Club curriculum.
"""
print("Learning Python with rfSE Club")
```

## Best Practices

- Use comments to explain _why_ code exists, not just _what_ it does.
- Keep comments concise and relevant.
- Avoid redundant comments that restate obvious code logic.
- Update comments when code changes to maintain accuracy.

**Example from Provided Code**:

```python
# single line comment
"""
hi this is trinadh
and i started learning python
"""
print("Welcome to Python!")
```

## Practice Task

Write a Python script that prints "Welcome to rfSE Club!" with:

1. A single-line comment explaining the purpose of the print statement.
2. A multi-line comment at the top describing the script's goal.

**Solution**:

```python
"""
This script demonstrates the use of comments in Python.
It prints a welcome message for the rfSE Club curriculum.
"""
# Print a greeting for rfSE Club members
print("Welcome to rfSE Club!")
```
