# 016 Scope and LEGB Rule

Scope in Python determines where a variable is accessible within a program. The LEGB rule defines the order in which Python searches for a variable's name. For students in the rfSE Club, understanding scope and the LEGB rule is critical for managing variables in scientific programs, ensuring proper data handling in experiments or simulations.

## Variable Scope

- **Scope**: The region of code where a variable is defined and accessible.
- Types of scope:
  - **Local**: Variables defined inside a function, accessible only within that function.
  - **Enclosing**: Variables in the outer function of nested functions.
  - **Global**: Variables defined at the top level of a module, accessible throughout the module.
  - **Built-in**: Predefined names in Python (e.g., `len`, `print`).

## LEGB Rule

Python follows the **LEGB** rule to resolve variable names:

- **L**ocal: Check the local scope (inside the current function).
- **E**nclosing: Check the enclosing scope (outer function in nested functions).
- **G**lobal: Check the global scope (module level).
- **B**uilt-in: Check Python’s built-in namespace.

**Example**:

```python
name = "Global Scientist"  # Global variable

def greetings():
    name = "Enclosing Researcher"  # Enclosing variable
    def hello():
        name = "Local Experimenter"  # Local variable
        print(f"Hello, {name}")
    hello()
    print(f"Greetings from {name}")

greetings()  # Output: Hello, Local Experimenter
             #         Greetings from Enclosing Researcher
print(name)  # Output: Global Scientist
```

## Global Keyword

- Use the `global` keyword to modify a global variable inside a function.
- Without `global`, a new local variable is created.

**Example**:

```python
x = 50  # Global variable
print(f"Total likes before post: {x}")

def post1():
    global x
    x = 520  # Modifies global x
    print(f"No of likes for post1: {x}")

post1()  # Output: No of likes for post1: 520
print(f"Total likes after post1: {x}")  # Output: Total likes after post1: 520
```

## Best Practices

- Minimize use of global variables to avoid unintended side effects.
- Use descriptive variable names to distinguish between scopes (e.g., `local_count` vs. `global_count`).
- Prefer passing arguments to functions over modifying global variables.
- Understand LEGB to debug variable access issues effectively.

**Example from Provided Code**:

```python
x = 25  # Global variable
def display():
    x = 50  # Local variable
    print(x)  # Output: 50
display()
print(x)  # Output: 25

# Enclosing example
name = 'Friend - Global'
def greetings():
    name = 'Sandeep'  # Enclosing variable
    def hello():
        name = 'prashanth'  # Local variable
        print('hello ' + name)
    hello()  # Output: hello prashanth
greetings()
```

## Practice Task

Write a Python script that:

1. Defines a global variable `experiment_count = 10`.
2. Creates a function `run_experiment` with an enclosing variable `experiment_type = "Physics"`.
3. Inside `run_experiment`, defines a nested function `log_result` with a local variable `result = "Success"`.
4. Prints variables at each scope level to demonstrate LEGB.
5. Uses the `global` keyword to increment `experiment_count` inside `run_experiment`.

**Solution**:

```python
experiment_count = 10  # Global variable

def run_experiment():
    global experiment_count
    experiment_type = "Physics"  # Enclosing variable
    experiment_count += 1
    print(f"Enclosing scope: Experiment type is {experiment_type}")

    def log_result():
        result = "Success"  # Local variable
        print(f"Local scope: Result is {result}")

    log_result()
    print(f"Global scope inside function: Experiment count is {experiment_count}")

run_experiment()
print(f"Global scope: Experiment count is {experiment_count}")
# Output:
# Enclosing scope: Experiment type is Physics
# Local scope: Result is Success
# Global scope inside function: Experiment count is 11
# Global scope: Experiment count is 11
```
