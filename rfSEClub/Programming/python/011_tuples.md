# 011 Tuples

Tuples in Python are immutable, ordered collections of items that can hold various data types. For students in the rfSE Club, tuples are useful for storing fixed datasets, such as constants or experiment parameters, ensuring data integrity in scientific applications.

## Creating Tuples

- Tuples are defined using parentheses `()`, with items separated by commas.
- Can contain mixed data types (e.g., strings, integers, booleans).
- Single-element tuples require a trailing comma (e.g., `(item,)`).

**Example**:

```python
aariv_details = ('aariv', 22, 'apple')
print(aariv_details)  # Output: ('aariv', 22, 'apple')
single_item = ('test',)  # Single-element tuple
print(single_item)  # Output: ('test',)
```

## Immutability

- Tuples are immutable, meaning their elements cannot be changed after creation.
- Attempts to modify a tuple (e.g., `tuple[0] = value`, `append()`, `pop()`) raise errors.

**Example**:

```python
aariv_details = ('aariv', 22, 'apple')
# aariv_details[0] = 'rifaat'  # This would raise TypeError
# aariv_details.append('hyd')  # This would raise AttributeError
print(aariv_details)  # Output: ('aariv', 22, 'apple')
```

## Iterating Over Tuples

- Use `for` loops to access each item in a tuple.
- Useful for processing fixed datasets or iterating over constant values.

**Example**:

```python
experiment_data = ('sample1', 100, 3.14)
for item in experiment_data:
    print(f"Data point: {item}")
# Output:
# Data point: sample1
# Data point: 100
# Data point: 3.14
```

## Common Tuple Operations

- `len(tuple)`: Returns the number of items in the tuple.
- Indexing and slicing: Access elements using `tuple[index]` or `tuple[start:stop:step]`.
- Concatenation: Combine tuples using `+`.
- `count(item)`: Counts occurrences of an item.
- `index(item)`: Returns the index of the first occurrence of an item.

**Example**:

```python
data = ('a', 'b', 'a', 'c')
print(len(data))  # Output: 4
print(data[1])    # Output: b
print(data[1:3])  # Output: ('b', 'a')
print(data.count('a'))  # Output: 2
print(data.index('c'))  # Output: 3
new_data = data + ('d',)
print(new_data)  # Output: ('a', 'b', 'a', 'c', 'd')
```

## Tuples vs. Lists

- **Tuples**: Immutable, faster, used for fixed data (e.g., constants, coordinates).
- **Lists**: Mutable, flexible, used for dynamic data (e.g., user inputs, datasets).

## Best Practices

- Use tuples for data that should not change, such as constants or configuration settings.
- Keep tuples concise to maintain readability.
- Use descriptive names for tuples to indicate their purpose (e.g., `experiment_data`).
- Avoid using tuples for data that requires frequent modification; use lists instead.

**Example from Provided Code**:

```python
aariv_details = ('aariv', 22, 'apple')
print(aariv_details)  # Output: ('aariv', 22, 'apple')
# aariv_details.append('hyd')  # Would raise AttributeError
# aariv_details.pop()  # Would raise AttributeError
print('after adding item', aariv_details)  # Output: ('aariv', 22, 'apple')
```

## Practice Task

Write a Python script that:

1. Creates a tuple with four scientific constants (e.g., pi, gravity, speed of light, Avogadro’s number).
2. Prints the tuple and its length.
3. Uses a `for` loop to print each constant with a formatted message.
4. Slices the tuple to print the first two constants and concatenates a new constant to the tuple.

**Solution**:

```python
constants = (3.14159, 9.81, 299792458, 6.022e23)  # pi, gravity, speed of light, Avogadro's number
print(f"Constants: {constants}")
print(f"Length: {len(constants)}")

for constant in constants:
    print(f"Scientific constant: {constant}")

first_two = constants[:2]
print(f"First two constants: {first_two}")

new_constants = constants + (1.602e-19,)  # Add elementary charge
print(f"Updated tuple: {new_constants}")
```
