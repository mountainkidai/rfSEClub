# 036 Nested Statements and Enclosing Variables

Nested statements and enclosing variables in Python involve functions defined within other functions and the use of variables from outer scopes. For students in the rfSE Club, understanding these concepts is crucial for creating modular scientific programs, such as simulations or data processing pipelines, where functions need to share data hierarchically. The provided code includes examples of nested functions and enclosing variables, which are referenced to illustrate these concepts.

## Nested Statements

- **Nested statements** refer to functions defined inside other functions, creating a hierarchy of scopes.
- The inner function has access to variables in its own scope, the outer function’s scope (enclosing), and global/built-in scopes (LEGB rule).
- Useful for encapsulating logic that is only relevant within the context of the outer function.

**Example**:

```python
def outer_function():
    message = "Experiment in progress"
    def inner_function():
        print(message)  # Accesses enclosing variable
    inner_function()

outer_function()  # Output: Experiment in progress
```

## Enclosing Variables

- **Enclosing variables** are variables defined in the outer function’s scope, accessible to inner functions.
- Follows the LEGB rule (Local, Enclosing, Global, Built-in) for variable lookup.
- Inner functions can read enclosing variables but need the `nonlocal` keyword to modify them.

**Example**:

```python
def experiment_setup():
    experiment_type = "Physics"
    def run_experiment():
        print(f"Running {experiment_type} experiment")
    run_experiment()

experiment_setup()  # Output: Running Physics experiment
```

## Modifying Enclosing Variables

- Use the `nonlocal` keyword in the inner function to modify an enclosing variable.
- Without `nonlocal`, assigning to a variable creates a local variable in the inner function.

**Example**:

```python
def experiment_tracker():
    count = 0
    def increment_count():
        nonlocal count
        count += 1
        print(f"Experiment count: {count}")
    increment_count()
    return count

print(experiment_tracker())  # Output: Experiment count: 1
                            #         1
```

## Best Practices

- Use nested functions for helper logic that is only relevant within the outer function.
- Avoid deep nesting to maintain code readability and simplicity.
- Use `nonlocal` sparingly to modify enclosing variables, preferring return values for data flow.
- Ensure enclosing variables are clearly named to avoid confusion with local or global variables.

**Example from Provided Code**:

```python
name = 'Friend - Global'
def greetings():
    name = 'Sandeep'  # Enclosing variable
    def hello():
        name = 'prashanth'  # Local variable
        print('hello ' + name)
    hello()

greetings()  # Output: hello prashanth
```

**Example with `nonlocal`**:

```python
def admin_access():
    permission_level = "user"
    def grant_access():
        nonlocal permission_level
        permission_level = "admin"
        print(f"Permission set to: {permission_level}")
    grant_access()
    return permission_level

print(admin_access())  # Output: Permission set to: admin
                       #         admin
```

## Practice Task

Write a Python script that:

1. Defines an outer function `experiment_manager` with an enclosing variable `trial_count` initialized to 0.
2. Defines an inner function `run_trial` that increments `trial_count` using `nonlocal` and prints the current count.
3. Calls `run_trial` twice within `experiment_manager` and returns the final `trial_count`.
4. Executes `experiment_manager` and prints the returned value.

**Solution**:

```python
def experiment_manager():
    trial_count = 0  # Enclosing variable
    def run_trial():
        nonlocal trial_count
        trial_count += 1
        print(f"Trial {trial_count} executed")
    run_trial()
    run_trial()
    return trial_count

final_count = experiment_manager()
print(f"Final trial count: {final_count}")
# Output:
# Trial 1 executed
# Trial 2 executed
# Final trial count: 2
```
