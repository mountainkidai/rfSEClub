# 014 Defining Functions

Functions in Python are reusable blocks of code that perform specific tasks, promoting the DRY (Don't Repeat Yourself) principle. For young scientists in the rfSE Club, functions are essential for organizing scientific computations, such as calculating experiment results or automating repetitive tasks.

## Defining Functions

- Use the `def` keyword followed by the function name, parentheses `()`, and a colon `:`.
- The function body is indented and can include a `return` statement to send back a value.
- Functions can take parameters (arguments) or none, and may or may not return values.

**Example**:

```python
def welcome():
    print("Hello, rfSE Club!")
welcome()  # Output: Hello, rfSE Club!
```

## Types of Functions

1. **No Parameters, No Return**: Executes code without inputs or outputs.
   - Example: Printing a message.
2. **No Parameters, With Return**: Returns a value without taking inputs.
3. **With Parameters, No Return**: Takes inputs and performs actions.
4. **With Parameters, With Return**: Takes inputs, processes them, and returns a result.

**Examples**:

```python
# No Parameters, No Return
def wishes():
    print("Welcome to the lab!")

# No Parameters, With Return
def message():
    return "Experiment started successfully"

# With Parameters, No Return
def addition(a, b):
    print(f"Sum is {a + b}")

# With Parameters, With Return
def subtraction(a, b):
    return a - b

wishes()  # Output: Welcome to the lab!
print(message())  # Output: Experiment started successfully
addition(5, 3)  # Output: Sum is 8
result = subtraction(5, 3)
print(result)  # Output: 2
```

## Function Syntax

- **Definition**: `def function_name(parameters):`
- **Calling**: `function_name(arguments)`
- Parameters are placeholders in the definition; arguments are actual values passed when calling.
- Use `return` to output a value; if omitted, the function returns `None`.

**Example**:

```python
def rifaat_addition(first_no, second_no):
    sum = first_no + second_no
    print(f"addition is {sum}")

rifaat_addition(6, 5)  # Output: addition is 11
```

## Best Practices

- Use descriptive function names (e.g., `calculate_average` instead of `calc`) to indicate purpose.
- Keep functions focused on a single task for modularity.
- Include docstrings (`"""Description"""`) for complex functions to explain their purpose.
- Avoid side effects (e.g., modifying global variables) unless intentional.

**Example from Provided Code**:

```python
def addition(fn, sn):
    sum = fn + sn
    print('sum is ', sum)

addition(20, 30)  # Output: sum is 50
```

## Practice Task

Write a Python script that:

1. Defines a function with no parameters that prints a welcome message for a science experiment.
2. Defines a function with no parameters that returns the value of pi (3.14159).
3. Defines a function that takes two parameters (length, width) and prints their product (area).
4. Defines a function that takes two parameters and returns their difference.
5. Calls all functions and prints their outputs.

**Solution**:

```python
# No Parameters, No Return
def welcome_experiment():
    print("Welcome to the rfSE Club Science Experiment!")

# No Parameters, With Return
def get_pi():
    return 3.14159

# With Parameters, No Return
def calculate_area(length, width):
    print(f"Area: {length * width}")

# With Parameters, With Return
def calculate_difference(a, b):
    return a - b

welcome_experiment()  # Output: Welcome to the rfSE Club Science Experiment!
pi = get_pi()
print(f"Value of pi: {pi}")  # Output: Value of pi: 3.14159
calculate_area(5, 4)  # Output: Area: 20
diff = calculate_difference(10, 7)
print(f"Difference: {diff}")  # Output: Difference: 3
```
