# 018 Variable and Function Copying

Variable and function copying in Python involves creating references to existing variables or functions, allowing reuse without redefinition. For students in the rfSE Club, understanding copying is essential for managing data and functions efficiently in scientific programs, such as reusing experiment configurations or sharing computational logic.

## Variable Copying

- Assigning a variable to another creates a reference to the same object for mutable types (e.g., lists), while immutable types (e.g., integers, strings) create a new copy.
- Use `id()` to check if two variables point to the same memory location.
- For mutable objects, modifying one variable affects the other unless a deep copy is made (using `copy.copy()` or `copy.deepcopy()` for nested objects).

**Example**:

```python
a = 2  # Immutable integer
b = a  # Creates a copy
print(id(a))  # Same or different ID depending on Python's integer caching
print(id(b))
a = 3  # Does not affect b
print(b)  # Output: 2

numbers = [1, 2, 3]  # Mutable list
new_numbers = numbers  # Reference to same list
print(id(numbers))  # Same ID as new_numbers
print(id(new_numbers))
new_numbers.append(4)  # Modifies both lists
print(numbers)  # Output: [1, 2, 3, 4]
```

## Function Copying

- Assigning a function to a new name creates a reference to the same function object.
- The new name can be used to call the function, even if the original name is deleted.
- Use `id()` to confirm both names point to the same function object.

**Example**:

```python
def hello():
    return "Hello, rfSE Club!"

greet = hello  # Function reference
print(id(hello))  # Same ID as greet
print(id(greet))
print(greet())  # Output: Hello, rfSE Club!
del hello
print(greet())  # Still works: Hello, rfSE Club!
```

## Deep vs. Shallow Copying

- **Shallow Copy** (`copy.copy()`): Copies the object but not nested objects.
- **Deep Copy** (`copy.deepcopy()`): Copies the object and all nested objects.
- Use the `copy` module for safe copying of mutable objects like lists or dictionaries.

**Example**:

```python
import copy
data = [[1, 2], [3, 4]]
shallow = copy.copy(data)  # Shallow copy
deep = copy.deepcopy(data)  # Deep copy
shallow[0][0] = 9  # Affects data
deep[1][0] = 7  # Does not affect data
print(data)    # Output: [[9, 2], [3, 4]]
print(shallow) # Output: [[9, 2], [3, 4]]
print(deep)    # Output: [[1, 2], [7, 4]]
```

## Best Practices

- Use variable copying cautiously with mutable objects to avoid unintended changes.
- Prefer `copy.copy()` or `copy.deepcopy()` for lists and dictionaries when independent copies are needed.
- Use function copying to create aliases for reusable logic without redefinition.
- Check `id()` during debugging to verify object references.

**Example from Provided Code**:

```python
a = 2
b = a
print(id(a))  # Same ID as b
print(id(b))
del a
print(b)  # Output: 2

def hello():
    return 'hello function'

greet = hello
print('address of hello', hello)  # Prints function address
print('address of greet', greet)  # Same address
print(greet())  # Output: hello function
```

## Practice Task

Write a Python script that:

1. Creates a variable `experiment_value = 42` and copies it to `new_value`.
2. Creates a list `results = [10, 20, 30]` and makes both a shallow and deep copy.
3. Defines a function `record_data` that returns a message, and assigns it to a new name `log_data`.
4. Modifies the shallow copy’s first element and prints all variables to show effects.
5. Calls the copied function to verify it works.

**Solution**:

```python
import copy

# Variable copying
experiment_value = 42
new_value = experiment_value
print(f"Original: {experiment_value}, Copy: {new_value}, IDs: {id(experiment_value)}, {id(new_value)}")

# List copying
results = [10, 20, 30]
shallow_copy = copy.copy(results)
deep_copy = copy.deepcopy(results)
shallow_copy[0] = 99
print(f"Original list: {results}")  # Output: [99, 20, 30]
print(f"Shallow copy: {shallow_copy}")  # Output: [99, 20, 30]
print(f"Deep copy: {deep_copy}")  # Output: [10, 20, 30]

# Function copying
def record_data():
    return "Data recorded for rfSE Club experiment"

log_data = record_data
print(f"Function IDs: {id(record_data)}, {id(log_data)}")
print(log_data())  # Output: Data recorded for rfSE Club experiment
```
