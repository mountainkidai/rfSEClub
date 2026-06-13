# 005 Type Checking and Conversion

Type checking and conversion in Python are essential for ensuring data is in the correct format for operations, especially in scientific programming for the rfSE Club. Type checking verifies the data type of a variable, while type conversion transforms data from one type to another, enabling flexible data manipulation in experiments and algorithms.

## Type Checking

- Use the `type()` function to determine a variable's data type.
- Returns the class of the variable, such as `<class 'str'>`, `<class 'int'>`, `<class 'float'>`, or `<class 'bool'>`.
- Critical for debugging and ensuring variables are used correctly in operations.

**Example**:

```python
name = "Aariv"
age = 12
score = 92.5
is_passed = True

print(type(name))  # Output: <class 'str'>
print(type(age))   # Output: <class 'int'>
print(type(score)) # Output: <class 'float'>
print(type(is_passed))  # Output: <class 'bool'>
```

## Type Conversion

- Convert data types using built-in functions: `str()`, `int()`, `float()`, and `bool()`.
- Necessary for operations like string concatenation, arithmetic, or logical comparisons.
- Be cautious, as invalid conversions (e.g., `int("abc")`) raise `ValueError`.

**Example**:

```python
age = 14  # Integer
age_str = str(age)  # Convert to string
print("Age: " + age_str)  # Output: Age: 14

marks = "95"  # String
marks_int = int(marks)  # Convert to integer
print(marks_int + 5)  # Output: 100

score = 88.5  # Float
score_int = int(score)  # Convert to integer (truncates decimal)
print(score_int)  # Output: 88
```

## Practical Use Cases

- **Input Handling**: The `input()` function always returns a string, so conversion is needed for numerical operations.
- **Data Validation**: Check types before performing operations to avoid errors.
- **Scientific Computing**: Ensure correct types for calculations, such as converting measurements to floats for precision.

**Example from Provided Code**:

```python
name = "rifaat"
marks = 95
age = 11
grade = 'A'
percentage = 95.6

print('type of name is', type(name))  # Output: <class 'str'>
print('type of marks is', type(marks))  # Output: <class 'int'>
print('type of age is', type(age))  # Output: <class 'int'>
print('type of grade is', type(grade))  # Output: <class 'str'>
print('type of percentage is', type(percentage))  # Output: <class 'float'>
```

**Example with Input Conversion**:

```python
number = input("Enter a number: ")  # Input is a string
number_int = int(number)  # Convert to integer
print(f"Number plus 10 is: {number_int + 10}")
```

## Best Practices

- Always validate input before conversion to avoid errors (e.g., use exception handling for invalid inputs).
- Use `type()` during debugging to confirm variable types.
- Avoid unnecessary conversions to maintain code efficiency.
- Be aware that converting floats to integers truncates decimal parts.

## Practice Task

Write a Python script that:

1. Takes user input for a name (string) and a test score (string).
2. Prints the type of each input.
3. Converts the test score to a float and adds 5.5 to it, then prints the result.
4. Handles potential conversion errors using a try-except block.

**Solution**:

```python
name = input("Enter your name: ")
score = input("Enter your test score: ")

print(f"Name type: {type(name)}")
print(f"Score type: {type(score)}")

try:
    score_float = float(score)  # Convert to float
    print(f"Score plus 5.5: {score_float + 5.5}")
except ValueError:
    print("Please enter a valid number for the score.")
```
