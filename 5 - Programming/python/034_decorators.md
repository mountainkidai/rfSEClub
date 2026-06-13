# 034 Decorators

Decorators in Python are functions that modify or extend the behavior of other functions or methods without changing their source code. For students in the rfSE Club, decorators are powerful for enhancing scientific functions, such as logging experiment results or timing computations. The provided code includes examples of creating and using decorators, which are referenced to illustrate these concepts.

## What are Decorators?

- A decorator is a higher-order function that takes a function as input, adds functionality, and returns a new function.
- Defined using the `@decorator_name` syntax above a function or method.
- Commonly used for logging, timing, access control, or input validation.

## Defining a Decorator

- Create a decorator function that wraps the target function with additional behavior.
- Use a nested function (wrapper) to execute the original function and add functionality.
- Return the wrapper function to replace the original function.

**Example**:

```python
def my_decorator(func):
    def wrapper():
        print("Before the function runs")
        func()
        print("After the function runs")
    return wrapper

@my_decorator
def say_hello():
    print("Hello, rfSE Club!")

say_hello()
# Output:
# Before the function runs
# Hello, rfSE Club!
# After the function runs
```

## Decorators with Arguments

- Decorators can handle functions with arguments by using `*args` and `**kwargs` in the wrapper.
- This makes decorators flexible for various function signatures.

**Example**:

```python
def log_experiment(func):
    def wrapper(*args, **kwargs):
        print(f"Running experiment: {args}, {kwargs}")
        result = func(*args, **kwargs)
        print(f"Experiment result: {result}")
        return result
    return wrapper

@log_experiment
def calculate_energy(mass, velocity):
    return 0.5 * mass * velocity ** 2

print(calculate_energy(2, 10))
# Output:
# Running experiment: (2, 10), {}
# Experiment result: 50.0
# 50.0
```

## Multiple Decorators

- Apply multiple decorators to a function, executed from the innermost to the outermost.
- Useful for combining behaviors like logging and timing.

**Example**:

```python
def decorator1(func):
    def wrapper():
        print("Decorator 1")
        func()
    return wrapper

def decorator2(func):
    def wrapper():
        print("Decorator 2")
        func()
    return wrapper

@decorator1
@decorator2
def experiment():
    print("Running experiment")

experiment()
# Output:
# Decorator 1
# Decorator 2
# Running experiment
```

## Best Practices

- Use decorators for cross-cutting concerns (e.g., logging, timing) to keep functions focused.
- Ensure decorators are reusable and don’t alter the original function’s expected output.
- Use `*args` and `**kwargs` to make decorators flexible for any function signature.
- Include docstrings in the wrapper to preserve the original function’s documentation (use `functools.wraps`).

**Example from Provided Code**:

```python
def new_decorator(original_fun):
    def wrap_fun():
        print('some extra code before the original function executes')
        original_fun()
        print('some extra code, after the original function!')
    return wrap_fun

@new_decorator
def fun_needs_decorator():
    print('I want to be decorated')

fun_needs_decorator()
# Output:
# some extra code before the original function executes
# I want to be decorated
# some extra code, after the original function!
```

## Using `functools.wraps`

- The `functools.wraps` decorator preserves the original function’s metadata (e.g., name, docstring).
- Improves debugging and introspection.

**Example**:

```python
from functools import wraps

def log_time(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time() - start} seconds")
        return result
    return wrapper

@log_time
def compute_sum(numbers):
    """Sum a list of numbers."""
    return sum(numbers)

print(compute_sum([1, 2, 3, 4, 5]))  # Output: 15
# Example output: compute_sum took 0.0001 seconds
print(compute_sum.__name__)  # Output: compute_sum
```

## Practice Task

Write a Python script that:

1. Defines a decorator `log_parameters` that prints the arguments passed to a function.
2. Applies it to a function `calculate_average` that computes the average of a list of numbers.
3. Tests the function with a sample list `[10, 20, 30]` and verifies the decorator logs the input.

**Solution**:

```python
from functools import wraps

def log_parameters(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with arguments: {args}, {kwargs}")
        result = func(*args, **kwargs)
        return result
    return wrapper

@log_parameters
def calculate_average(numbers):
    """Calculate the average of a list of numbers."""
    return sum(numbers) / len(numbers) if numbers else 0

result = calculate_average([10, 20, 30])
print(f"Average: {result}")
# Output:
# Calling calculate_average with arguments: ([10, 20, 30],), {}
# Average: 20.0
```
