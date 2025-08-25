# 006 Operators

Operators in Python are symbols or keywords used to perform operations on variables and values. For young scientists in the rfSE Club, understanding operators is critical for manipulating data, performing calculations, and implementing logic in scientific programs, such as simulations or data analysis.

## Types of Operators

### 1. Arithmetic Operators

Used for mathematical calculations.

- `+`: Addition
- `-`: Subtraction
- `*`: Multiplication
- `/`: Division (returns float)
- `%`: Modulus (returns remainder)
- `**`: Exponentiation
- `//`: Floor Division (returns integer quotient)

**Example**:

```python
a = 7
b = 2
print(a + b)  # Output: 9
print(a - b)  # Output: 5
print(a * b)  # Output: 14
print(a / b)  # Output: 3.5
print(a % b)  # Output: 1
print(a ** b) # Output: 49
print(a // b) # Output: 3
```

### 2. Comparison Operators

Used to compare values, returning `True` or `False`.

- `==`: Equal to
- `!=`: Not equal to
- `>`: Greater than
- `<`: Less than
- `>=`: Greater than or equal to
- `<=`: Less than or equal to

**Example**:

```python
a = 5
b = 6
print(a == b)  # Output: False
print(a != b)  # Output: True
print(a > b)   # Output: False
print(a < b)   # Output: True
```

### 3. Logical Operators

Used to combine conditional statements.

- `and`: True if both conditions are true
- `or`: True if at least one condition is true
- `not`: Reverses the truth value

**Example**:

```python
a = 5
b = 6
c = 11
print(a + b == c and a < b)  # Output: True
print(a > b or b < c)        # Output: True
print(not a > b)             # Output: True
```

### 4. Assignment Operators

Used to assign values to variables, often combined with arithmetic operations.

- `=`: Assign
- `+=`: Add and assign
- `-=`: Subtract and assign
- `*=`: Multiply and assign
- `/=`: Divide and assign

**Example**:

```python
a = 2
b = 3
a += b  # Equivalent to a = a + b
print(a)  # Output: 5
```

## Best Practices

- Use parentheses to clarify the order of operations in complex expressions (e.g., `(a + b) * c`).
- Avoid division by zero to prevent errors.
- Use comparison and logical operators for clear control flow in decision-making.
- Keep assignment operators concise to improve code readability.

**Example from Provided Code**:

```python
a = 5
b = 6
c = a + b
if c == 11:
    print('true')
else:
    print('false')

# Arithmetic operators
print(7 + 2)  # Output: 9
print(7 - 2)  # Output:5
print(7 * 2)  # Output: 14
print(7 / 2)  # Output: 3.5
print(7 % 2)  # Output: 1
```

## Practice Task

Write a Python script that:

1. Takes two numbers as input from the user.
2. Performs addition, subtraction, multiplication, division, and modulus operations.
3. Checks if the first number is greater than the second using a comparison operator.
4. Uses a logical operator to verify if both numbers are positive.
5. Uses an assignment operator to increment the first number by the second.

**Solution**:

```python
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Arithmetic operations
print(f"Addition: {num1 + num2}")
print(f"Subtraction: {num1 - num2}")
print(f"Multiplication: {num1 * num2}")
print(f"Division: {num1 / num2}")
print(f"Modulus: {num1 % num2}")

# Comparison
print(f"Is {num1} greater than {num2}? {num1 > num2}")

# Logical
print(f"Are both numbers positive? {num1 > 0 and num2 > 0}")

# Assignment
num1 += num2
print(f"First number after increment: {num1}")
```
