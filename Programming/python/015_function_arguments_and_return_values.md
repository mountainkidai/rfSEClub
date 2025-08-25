# 015 Function Arguments and Return Values

Function arguments and return values in Python allow functions to accept inputs and produce outputs, enabling modular and reusable code. For young scientists in the rfSE Club, understanding how to use arguments and return values is crucial for creating functions that process scientific data, perform calculations, or drive experiments.

## Function Arguments

- **Arguments** are values passed to a function when it is called, mapped to parameters defined in the function.
- **Parameters** are placeholders in the function definition that receive the argument values.
- Types of arguments:
  - **Positional Arguments**: Passed in the order of parameters.
  - **Keyword Arguments**: Passed with parameter names, allowing any order.
  - **Default Parameters**: Parameters with default values, used if no argument is provided.

**Example**:

```python
def experiment_data(sample, value, unit="mg"):  # Default parameter: unit
    print(f"Sample: {sample}, Value: {value} {unit}")

# Positional arguments
experiment_data("A1", 50)  # Output: Sample: A1, Value: 50 mg

# Keyword arguments
experiment_data(value=75, sample="B2", unit="g")  # Output: Sample: B2, Value: 75 g
```

## Return Values

- Use the `return` statement to send a value back to the caller.
- Functions without `return` implicitly return `None`.
- Return values allow functions to produce results for further processing.

**Example**:

```python
def calculate_average(a, b, c):
    return (a + b + c) / 3

avg = calculate_average(10, 20, 30)
print(f"Average: {avg}")  # Output: Average: 20.0
```

## Combining Arguments and Return Values

- Functions can take multiple arguments and return one or more values (using tuples for multiple returns).
- Useful for complex computations, such as processing scientific measurements.

**Example**:

```python
def process_measurement(length, width, height=1):
    volume = length * width * height
    return volume, volume > 100  # Returns tuple: (volume, is_large)

vol, is_large = process_measurement(5, 4, 2)  # Positional arguments
print(f"Volume: {vol}, Is large? {is_large}")  # Output: Volume: 40, Is large? False
```

## Best Practices

- Use descriptive parameter names to clarify their purpose (e.g., `length` instead of `l`).
- Specify default values for optional parameters to make functions flexible.
- Return meaningful values for use in other parts of the program.
- Avoid side effects (e.g., modifying global variables) unless intentional.

**Example from Provided Code**:

```python
def addition(a, b):
    c = a + b
    return c

print(addition(5, 6))  # Output: 11

def subtraction(a, b):
    sub = a - b
    print('subtraction is', sub)

subtraction(80, 2)  # Output: subtraction is 78
```

## Practice Task

Write a Python script that:

1. Defines a function that takes two positional arguments (mass, acceleration) and one optional keyword argument (unit="N") to calculate force (mass \* acceleration).
2. Returns the force and a boolean indicating if the force exceeds 100.
3. Calls the function twice: once with positional arguments and once with keyword arguments.
4. Prints the returned values in a formatted message.

**Solution**:

```python
def calculate_force(mass, acceleration, unit="N"):
    force = mass * acceleration
    return force, force > 100

# Positional arguments
force, is_high = calculate_force(10, 5)
print(f"Force: {force} {unit}, Exceeds 100? {is_high}")  # Output: Force: 50 N, Exceeds 100? False

# Keyword arguments
force, is_high = calculate_force(mass=20, acceleration=10, unit="Newtons")
print(f"Force: {force} {unit}, Exceeds 100? {is_high}")  # Output: Force: 200 Newtons, Exceeds 100? True
```
