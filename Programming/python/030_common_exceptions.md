# 030 Common Exceptions

Common exceptions in Python are specific error types that occur during program execution, such as invalid inputs or file issues. For students in the rfSE Club, understanding these exceptions is crucial for building robust scientific programs that handle errors gracefully, ensuring reliable data processing in experiments. The provided code includes examples of handling `ZeroDivisionError`, `FileNotFoundError`, and `ValueError`, which are referenced here.

## Common Exceptions

- **`ZeroDivisionError`**: Raised when dividing by zero.
- **`ValueError`**: Raised when a function receives an argument of the correct type but an invalid value (e.g., converting a non-numeric string to an integer).
- **`FileNotFoundError`**: Raised when attempting to access a file that doesn’t exist.
- **`TypeError`**: Raised when an operation is performed on an inappropriate data type.
- **`IndexError`**: Raised when accessing an invalid index in a sequence (e.g., list or tuple).
- **`KeyError`**: Raised when accessing a non-existent key in a dictionary.

## Handling Common Exceptions

- Use `try` and `except` blocks to catch specific exceptions and provide meaningful error messages.
- Avoid bare `except` to ensure specific errors are addressed.

**Example**:

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
```

**Example with Multiple Exceptions**:

```python
try:
    number = int(input("Enter a number: "))
    data = [1, 2, 3]
    print(data[5])
except ValueError:
    print("Invalid input! Please enter a number.")
except IndexError:
    print("Index out of range!")
```

## Examples of Common Exceptions

1. **ZeroDivisionError**:

```python
try:
    result = 5 / 0
except ZeroDivisionError:
    print("Error: Division by zero is not allowed.")
# Output: Error: Division by zero is not allowed.
```

2. **ValueError**:

```python
try:
    num = int("abc")
except ValueError:
    print("Error: Cannot convert text to a number.")
# Output: Error: Cannot convert text to a number.
```

3. **FileNotFoundError**:

```python
try:
    with open("nonexistent.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("Error: File not found!")
# Output: Error: File not found!
```

4. **TypeError**:

```python
try:
    result = "text" + 5
except TypeError:
    print("Error: Cannot concatenate string with integer!")
# Output: Error: Cannot concatenate string with integer!
```

5. **IndexError**:

```python
try:
    lst = [1, 2, 3]
    print(lst[10])
except IndexError:
    print("Error: Index out of range!")
# Output: Error: Index out of range!
```

6. **KeyError**:

```python
try:
    data = {"name": "Aariv"}
    print(data["age"])
except KeyError:
    print("Error: Key not found in dictionary!")
# Output: Error: Key not found in dictionary!
```

## Best Practices

- Catch specific exceptions to handle errors precisely and avoid masking unexpected issues.
- Provide clear, user-friendly error messages to guide users (e.g., “Enter a valid number”).
- Use `finally` for cleanup tasks, such as closing files, if needed.
- Test edge cases in scientific programs to anticipate common exceptions.

**Example from Provided Code**:

```python
try:
    c = 5 / 0
except ZeroDivisionError:
    print('hey this is zero by division error')
# Output: hey this is zero by division error

try:
    f = open('demo', 'w')
    f.write('hi prashanth')
except FileNotFoundError:
    print('file not found')
except:
    print('got file exception')

try:
    no = int(input("Enter a number: "))
except:
    print('I told you enter number, why you are entering string?')
```

## Practice Task

Write a Python script that:

1. Prompts the user for a number and a dictionary key.
2. Attempts to divide 100 by the input number, access an element from a list, and retrieve a value from a dictionary.
3. Handles `ZeroDivisionError`, `ValueError`, `IndexError`, and `KeyError` with appropriate messages.

**Solution**:

```python
data_list = [10, 20, 30]
data_dict = {"sample": "A1", "value": 42}

try:
    num = int(input("Enter a number: "))
    key = input("Enter a dictionary key: ")
    result = 100 / num
    print(data_list[5])  # Intentional index error
    print(data_dict[key])
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")
except ValueError:
    print("Error: Please enter a valid number!")
except IndexError:
    print("Error: List index out of range!")
except KeyError:
    print(f"Error: Key '{key}' not found in dictionary!")
```
