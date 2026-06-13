# 017 Global Keyword Usage

The `global` keyword in Python allows a function to modify a global variable, overriding the default behavior of creating a local variable with the same name. For students in the rfSE Club, understanding the `global` keyword is key to managing shared data across functions in scientific programs, such as tracking experiment counts or shared resources.

## Global Variables

- Defined outside functions at the module level, accessible throughout the program.
- Functions can read global variables but cannot modify them without the `global` keyword.

**Example**:

```python
counter = 10  # Global variable
def read_counter():
    print(f"Counter value: {counter}")  # Can read global variable

read_counter()  # Output: Counter value: 10
```

## Using the Global Keyword

- Use `global variable_name` inside a function to indicate that the function should modify the global variable instead of creating a local one.
- Without `global`, assigning to a variable inside a function creates a local variable.

**Example**:

```python
total_likes = 50  # Global variable
print(f"Total likes before post: {total_likes}")

def post1():
    global total_likes
    total_likes = 520  # Modifies global variable
    print(f"No of likes for post1: {total_likes}")

post1()  # Output: No of likes for post1: 520
print(f"Total likes after post1: {total_likes}")  # Output: Total likes after post1: 520
```

## Without Global Keyword

- If a function assigns to a variable without `global`, Python creates a local variable, leaving the global variable unchanged.

**Example**:

```python
x = 25  # Global variable
def display():
    x = 50  # Local variable
    print(f"Inside function: {x}")  # Output: Inside function: 50

display()
print(f"Outside function: {x}")  # Output: Outside function: 25
```

## Best Practices

- Use `global` sparingly to avoid complex code and unintended side effects.
- Prefer passing arguments and returning values to manage data flow.
- Use descriptive names for global variables to avoid confusion (e.g., `global_experiment_count`).
- Document the use of `global` in functions to clarify intent for collaborators.

**Example from Provided Code**:

```python
x = 50
print(f"total like before post1 are: {x}")

def post1():
    global x
    x = 520
    print(f"no of likes for post1 is {x}")

post1()  # Output: no of likes for post1 is 520
print(f"total likes after post1 are: {x}")  # Output: total likes after post1 are: 520
```

## Practice Task

Write a Python script that:

1. Defines a global variable `experiment_trials = 0`.
2. Creates a function `run_trial` that uses the `global` keyword to increment `experiment_trials` by 1.
3. Creates another function `reset_trials` that uses `global` to set `experiment_trials` to 0.
4. Calls `run_trial` twice, prints the trial count, then calls `reset_trials` and prints the final count.

**Solution**:

```python
experiment_trials = 0  # Global variable

def run_trial():
    global experiment_trials
    experiment_trials += 1
    print(f"Current trial count: {experiment_trials}")

def reset_trials():
    global experiment_trials
    experiment_trials = 0
    print(f"Trials reset to: {experiment_trials}")

run_trial()  # Output: Current trial count: 1
run_trial()  # Output: Current trial count: 2
print(f"Total trials: {experiment_trials}")  # Output: Total trials: 2
reset_trials()  # Output: Trials reset to: 0
print(f"Final trial count: {experiment_trials}")  # Output: Final trial count: 0
```
