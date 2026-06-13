# 002 Variables and Data Types

Variables in Python are used to store data values, acting as named containers for information that can be manipulated throughout a program. Data types define the kind of data a variable can hold, such as numbers, text, or boolean values. Understanding variables and data types is fundamental for students in the rfSE Club to build robust Python programs for scientific applications.

## Variables

- A variable is created when a value is assigned to a name using the `=` operator.
- Variable names should be descriptive, follow snake_case for readability (e.g., `user_name`), and avoid Python reserved keywords.
- Variables can hold different data types and can be reassigned to new values.

**Example**:

```python
name = "Rifaat"  # Variable 'name' stores a string
age = 11  # Variable 'age' stores an integer
```

## Common Data Types

- **Strings (str)**: Text data, enclosed in single (`'`) or double (`"`) quotes.
  - Example: `name = "Rifaat"`
- **Integers (int)**: Whole numbers, positive or negative, without decimals.
  - Example: `marks = 95`
- **Floats (float)**: Numbers with decimal points.
  - Example: `percentage = 95.6`
- **Booleans (bool)**: Represents `True` or `False` values, used for logical operations.
  - Example: `is_raining = False`

## Type Checking

- Use the `type()` function to check a variable’s data type.
- Useful for debugging and ensuring correct data handling.

**Example**:

```python
name = "Rifaat"
marks = 95
percentage = 95.6
is_raining = False

print(type(name))  # Output: <class 'str'>
print(type(marks))  # Output: <class 'int'>
print(type(percentage))  # Output: <class 'float'>
print(type(is_raining))  # Output: <class 'bool'>
```

## Type Conversion

- Convert between data types using functions like `str()`, `int()`, `float()`, and `bool()`.
- Essential for operations requiring specific data types, such as concatenating strings or performing arithmetic.

**Example**:

```python
age = 14  # Integer
age_str = str(age)  # Convert to string
print("Age: " + age_str)  # Output: Age: 14

marks = "95"  # String
marks_int = int(marks)  # Convert to integer
print(marks_int + 5)  # Output: 100
```

## Best Practices

- Use meaningful variable names to improve code readability (e.g., `student_name` instead of `n`).
- Initialize variables before use to avoid errors.
- Be cautious with type conversions to prevent errors like `ValueError` (e.g., `int("abc")`).

**Example from Provided Code**:

```python
name = "rifaat"  # String
marks = 95  # Integer
age = 11  # Integer
grade = 'A'  # String
percentage = 95.6  # Float

print('hi i am', name)
print('type of name is', type(name))
print('type of marks is', type(marks))
print('type of age is', type(age))
print('type of grade is', type(grade))
print('type of percentage is', type(percentage))
```

## Practice Task

Create a Python script that:

1. Defines variables for a student’s name (string), age (integer), score (float), and passing status (boolean).
2. Prints each variable along with its type.
3. Converts the age to a string and concatenates it with the name in a sentence.

**Solution**:

```python
student_name = "Aariv"
student_age = 12
student_score = 92.5
has_passed = True

print(f"Name: {student_name}, Type: {type(student_name)}")
print(f"Age: {student_age}, Type: {type(student_age)}")
print(f"Score: {student_score}, Type: {type(student_score)}")
print(f"Passed: {has_passed}, Type: {type(has_passed)}")

age_str = str(student_age)
print(f"{student_name} is {age_str} years old.")
```
