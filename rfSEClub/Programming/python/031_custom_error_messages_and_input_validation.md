# 031 Custom Error Messages and Input Validation

Custom error messages and input validation in Python enhance program robustness by providing clear feedback to users and ensuring valid data. For students in the rfSE Club, these techniques are vital for scientific applications, such as validating experiment inputs or guiding users through data entry. The provided code includes examples of input validation with `try-except` blocks, which are referenced to illustrate these concepts.

## Custom Error Messages

- Use `try-except` blocks to catch exceptions and provide user-friendly error messages.
- Tailor messages to guide users toward correct input (e.g., specifying expected format).
- Improves user experience and debugging in scientific programs.

**Example**:

```python
try:
    age = int(input("Enter your age: "))
except ValueError:
    print("Error: Please enter a valid integer for age, like '25'.")
```

## Input Validation

- Validate user input to ensure it meets program requirements (e.g., numeric, within range).
- Use loops (e.g., `while`) to repeatedly prompt until valid input is received.
- Combine with exception handling to catch invalid inputs.

**Example**:

```python
def get_positive_number():
    while True:
        try:
            num = int(input("Enter a positive number: "))
            if num <= 0:
                print("Error: Number must be positive.")
                continue
            return num
        except ValueError:
            print("Error: Please enter a valid integer.")

valid_num = get_positive_number()
print(f"Valid number entered: {valid_num}")
```

## Combining Custom Messages and Validation

- Use descriptive error messages within loops to guide users.
- Validate specific conditions (e.g., range, type) before proceeding.

**Example**:

```python
def get_valid_temperature():
    while True:
        try:
            temp = float(input("Enter temperature in Celsius (0-100): "))
            if not 0 <= temp <= 100:
                print("Error: Temperature must be between 0 and 100 Celsius.")
                continue
            return temp
        except ValueError:
            print("Error: Please enter a valid number, like '23.5'.")

temp = get_valid_temperature()
print(f"Valid temperature: {temp}°C")
```

## Best Practices

- Provide specific, actionable error messages (e.g., “Enter a number, not text” instead of “Invalid input”).
- Use loops to ensure valid input before proceeding in critical scientific applications.
- Handle expected exceptions explicitly (e.g., `ValueError` for invalid conversions).
- Test edge cases (e.g., empty input, negative numbers) to ensure robust validation.

**Example from Provided Code**:

```python
try:
    no = int(input("Enter no only: "))
except:
    print("We take nos only, so please enter no")
else:
    print("Thank you for entering no")
finally:
    print("program done")

try:
    name = input('Enter name: ')
except:
    print('Please Enter name only')
try:
    age = int(input())
except:
    print('enter age as number only')
finally:
    print('all done')
```

## Practice Task

Write a Python script that:

1. Defines a function `get_valid_measurement` that prompts for a measurement (float) between 1.0 and 10.0.
2. Uses a `while` loop and `try-except` to validate input, with custom error messages for invalid types and out-of-range values.
3. Returns the valid measurement and prints a confirmation message.

**Solution**:

```python
def get_valid_measurement():
    while True:
        try:
            measurement = float(input("Enter a measurement (1.0 to 10.0): "))
            if not 1.0 <= measurement <= 10.0:
                print("Error: Measurement must be between 1.0 and 10.0.")
                continue
            return measurement
        except ValueError:
            print("Error: Please enter a valid number, like '5.5'.")

valid_measurement = get_valid_measurement()
print(f"Valid measurement received: {valid_measurement}")
```
