# 032 Code Linting with Pylint

Code linting with Pylint in Python involves analyzing code for errors, style issues, and potential improvements to ensure high-quality, readable, and maintainable code. For students in the rfSE Club, linting is essential for writing professional-grade scientific programs that adhere to coding standards, making collaboration and debugging easier. The provided code includes a reference to Pylint usage, which is used to illustrate this concept.

## What is Code Linting?

- Linting is the process of checking code for stylistic and logical errors without executing it.
- Pylint is a popular Python linter that enforces the PEP 8 style guide, detects potential bugs, and suggests improvements.
- Benefits include improved code readability, consistency, and early error detection.

## Installing Pylint

- Install Pylint using pip:

```bash
pip install pylint
```

- Run Pylint on a Python file:

```bash
pylint filename.py
```

## Common Pylint Checks

- **Style Issues**: Incorrect indentation, missing docstrings, long lines, or improper variable names (e.g., not using snake_case).
- **Errors**: Undefined variables, unused imports, or incorrect function arguments.
- **Warnings**: Potential issues like unused variables or redundant code.
- Pylint assigns a score out of 10 based on code quality.

**Example**:
Consider the following code with issues:

```python
# Bad variable names and no docstring
a=1
b=2
print(a)
print(B)  # Undefined variable
```

Running `pylint` on this code might produce:

- `invalid-name`: Variables `a`, `b`, and `B` should use descriptive names.
- `undefined-variable`: `B` is not defined.
- `missing-function-docstring`: Missing docstring for the module.

**Improved Version**:

```python
"""Module to demonstrate basic variable usage."""
def print_numbers():
    """Print two numbers."""
    first_number = 1
    second_number = 2
    print(first_number)
    print(second_number)

print_numbers()
```

Running `pylint` on the improved code gives a higher score due to proper naming and docstrings.

## Using Pylint Effectively

- Run Pylint regularly during development to catch issues early.
- Configure Pylint with a `.pylintrc` file to customize rules (e.g., disable specific warnings).
- Example `.pylintrc`:

```ini
[MASTER]
disable=missing-docstring,too-few-public-methods
```

- Integrate Pylint into IDEs (e.g., VS Code) for real-time feedback.

## Best Practices

- Follow PEP 8 guidelines: use snake_case for variables, include docstrings, and limit line length to 79 characters.
- Address critical errors (e.g., undefined variables) before stylistic warnings.
- Use descriptive variable names to avoid `invalid-name` warnings.
- Ignore non-critical warnings selectively, but document the rationale.

**Example from Provided Code**:

```python
# pip install pylint
# pylint testing.py
def fun():
    ''' this is a sample function '''
    first = 1
    second = 2
    print(first)
    print(second)
```

Pylint might flag:

- `invalid-name` for `fun` (suggest `print_numbers` for clarity).
- Improved version:

```python
"""Module to print two numbers."""
def print_numbers():
    """Print the numbers 1 and 2."""
    first_number = 1
    second_number = 2
    print(first_number)
    print(second_number)
```

## Practice Task

Write a Python script that:

1. Defines a function `calculate_average` to compute the average of a list of numbers.
2. Includes proper docstrings and PEP 8-compliant variable names.
3. Intentionally introduces a Pylint-detectable issue (e.g., an unused variable).
4. Suggests how Pylint would flag it and how to fix it.

**Solution**:

```python
"""Module to calculate the average of a list of numbers."""
def calculate_average(numbers):
    """Calculate the average of a list of numbers.

    Args:
        numbers (list): List of numbers to average.

    Returns:
        float: The average of the numbers.
    """
    unused_var = 42  # Pylint will flag this as unused-variable
    total = sum(numbers)
    count = len(numbers)
    return total / count if count > 0 else 0

print(calculate_average([10, 20, 30]))  # Output: 20.0
```

**Pylint Feedback**:

- `unused-variable`: `unused_var` is defined but not used.
- **Fix**: Remove `unused_var` from the function:

```python
"""Module to calculate the average of a list of numbers."""
def calculate_average(numbers):
    """Calculate the average of a list of numbers.

    Args:
        numbers (list): List of numbers to average.

    Returns:
        float: The average of the numbers.
    """
    total = sum(numbers)
    count = len(numbers)
    return total / count if count > 0 else 0
```
