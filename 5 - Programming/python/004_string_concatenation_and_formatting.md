# 004 String Concatenation and Formatting

String concatenation and formatting in Python allow you to combine strings and present data in a readable way. For students in the rfSE Club, mastering these techniques is essential for creating clear output in scientific programs, such as displaying experiment results or user interactions.

## String Concatenation

- Uses the `+` operator to join strings.
- Non-string data (e.g., integers, floats) must be converted to strings using `str()` before concatenation.
- Suitable for simple string combinations but can become cumbersome for complex outputs.

**Example**:

```python
name = "Rifaat"
age = 11
print("Hi, I am " + name + " and I am " + str(age) + " years old.")
```

## String Formatting

Python offers several methods to format strings, making them more flexible and readable than concatenation.

### 1. `.format()` Method

- Uses curly braces `{}` as placeholders in a string, filled by arguments passed to `.format()`.
- Allows specifying order or reusing values.

**Example**:

```python
name = "Aariv"
score = 95
print("Name is {}, and the score is {}".format(name, score))
print("Name is {0}, and score is {1}".format(name, score))
```

### 2. F-Strings (Formatted String Literals)

- Introduced in Python 3.6, f-strings use `f` prefix and embed expressions directly in curly braces `{}`.
- Cleaner and more intuitive than `.format()`.

**Example**:

```python
name = "Aariv"
score = 95
print(f"Name is {name} and the score is {score}")
```

## Best Practices

- Prefer f-strings for their simplicity and readability in modern Python code.
- Use concatenation for simple cases but avoid for complex outputs to maintain clarity.
- Ensure non-string data is converted to strings to prevent `TypeError`.
- Keep formatted strings concise to enhance user understanding.

**Example from Provided Code**:

```python
name = "rifaat"
marks = 95
age = 11
grade = 'A'
percentage = 95.6
print('hi i am ' + name + ' and my marks are ' + str(marks) + ' my age is ' + str(age) + '. my grade is ' + grade + '. my percentage is ' + str(percentage))
```

**Improved with F-Strings**:

```python
name = "rifaat"
marks = 95
age = 11
grade = 'A'
percentage = 95.6
print(f"Hi, I am {name}, my marks are {marks}, my age is {age}, my grade is {grade}, and my percentage is {percentage}.")
```

## Practice Task

Write a Python script that:

1. Takes user input for name (string) and test score (integer).
2. Uses both concatenation and f-strings to print a message like: "Hello, [name]! Your test score is [score]."
3. Uses `.format()` to print the same message in a different order (e.g., score first, then name).

**Solution**:

```python
name = input("Enter your name: ")
score = int(input("Enter your test score: "))

# Concatenation
print("Hello, " + name + "! Your test score is " + str(score) + ".")

# F-String
print(f"Hello, {name}! Your test score is {score}.")

# .format() with different order
print("Score is {1}, and name is {0}!".format(name, score))
```
