# 020 \*args and \*\*kwargs

`*args` and `**kwargs` in Python allow functions to accept a variable number of arguments, providing flexibility in handling inputs. For students in the rfSE Club, mastering these constructs is essential for creating versatile functions that can process varying amounts of data, such as multiple experiment measurements or configuration options.

## `*args` (Variable Positional Arguments)

- The `*args` parameter collects any number of positional arguments into a tuple.
- Useful when the number of inputs is unknown or variable.
- The name `args` is conventional; the `*` is what enables the functionality.

**Example**:

```python
def sum_measurements(*args):
    print(args)  # Prints tuple of arguments
    return sum(args)

print(sum_measurements(2, 3))        # Output: (2, 3) \n 5
print(sum_measurements(2, 3, 5, 6))  # Output: (2, 3, 5, 6) \n 16
```

## `**kwargs` (Variable Keyword Arguments)

- The `**kwargs` parameter collects any number of keyword arguments into a dictionary.
- Useful for passing named parameters dynamically.
- The name `kwargs` is conventional; the `**` enables the functionality.

**Example**:

```python
def log_experiment(**kwargs):
    print(kwargs)  # Prints dictionary of key-value pairs
    if 'sample' in kwargs:
        print(f"Sample used: {kwargs['sample']}")

log_experiment(sample="A1", temp=25, unit="C")
# Output: {'sample': 'A1', 'temp': 25, 'unit': 'C'}
#         Sample used: A1
```

## Combining `*args` and `**kwargs`

- Use both in a function to handle positional and keyword arguments.
- Order in function definition: regular parameters, `*args`, `**kwargs`.

**Example**:

```python
def experiment_details(id, *args, **kwargs):
    print(f"Experiment ID: {id}")
    print(f"Measurements: {args}")
    print(f"Metadata: {kwargs}")

experiment_details(101, 10, 20, 30, name="Test", lab="Physics")
# Output: Experiment ID: 101
#         Measurements: (10, 20, 30)
#         Metadata: {'name': 'Test', 'lab': 'Physics'}
```

## Best Practices

- Use `*args` for lists of similar inputs (e.g., a series of measurements).
- Use `**kwargs` for flexible, named configurations (e.g., experiment settings).
- Keep function signatures clear by using descriptive parameter names.
- Avoid overusing `*args` and `**kwargs` when the number of arguments is predictable.

**Example from Provided Code**:

```python
def addition(*args):
    print(args)
    return sum(args)

print(addition(2, 3, 5, 54, 69, 4, 7))  # Output: (2, 3, 5, 54, 69, 4, 7) \n 144

def food(**kwargs):
    print(kwargs)
    if 'fruit' in kwargs:
        print(f"thank you for offering {kwargs['fruit']}")

food(fruit='apple', snacks='coffee', drink='thumsup')
# Output: {'fruit': 'apple', 'snacks': 'coffee', 'drink': 'thumsup'}
#         thank you for offering apple
```

## Practice Task

Write a Python script that:

1. Defines a function `analyze_data` that takes a dataset name (regular parameter), variable measurements (`*args`), and metadata (`**kwargs`).
2. Prints the dataset name, sum of measurements, and any metadata provided.
3. Calls the function with a dataset name, at least three measurements, and two metadata key-value pairs.

**Solution**:

```python
def analyze_data(dataset, *args, **kwargs):
    print(f"Dataset: {dataset}")
    print(f"Sum of measurements: {sum(args)}")
    print(f"Metadata: {kwargs}")

analyze_data("Experiment1", 10, 20, 30, 40, temp=22.5, location="Lab A")
# Output: Dataset: Experiment1
#         Sum of measurements: 100
#         Metadata: {'temp': 22.5, 'location': 'Lab A'}
```
