# 022 Maps and Filters

`map()` and `filter()` in Python are functional programming tools that process iterables efficiently. For students in the rfSE Club, these functions are powerful for transforming and selecting data in scientific applications, such as processing experiment measurements or filtering datasets.

## `map()`

- Applies a function to every item in an iterable (e.g., list, tuple) and returns a map object (convertible to a list).
- Syntax: `map(function, iterable)`.
- Often used with lambda expressions for concise transformations.

**Example**:

```python
def double(n):
    return n * 2

numbers = [3, 4, 7, 8, 9]
doubled = list(map(double, numbers))
print(doubled)  # Output: [6, 8, 14, 16, 18]

# Using lambda with map
tripled = list(map(lambda x: x * 3, numbers))
print(tripled)  # Output: [9, 12, 21, 24, 27]
```

## `filter()`

- Applies a function to each item in an iterable, returning only items where the function evaluates to `True`.
- Syntax: `filter(function, iterable)`.
- Returns a filter object (convertible to a list).

**Example**:

```python
def is_even(n):
    return n % 2 == 0

numbers = [1, 2, 4, 5, 6, 7, 8, 9, 28]
evens = list(filter(is_even, numbers))
print(evens)  # Output: [2, 4, 6, 8, 28]

# Using lambda with filter
eligible = list(filter(lambda x: x > 5, numbers))
print(eligible)  # Output: [6, 7, 8, 9, 28]
```

## Combining `map()` and `filter()`

- Use `map()` to transform data and `filter()` to select specific elements in a pipeline.
- Efficient for processing large datasets in scientific computations.

**Example**:

```python
numbers = [1, 2, 3, 4, 5]
# Filter numbers > 2, then square the results
result = list(map(lambda x: x ** 2, filter(lambda x: x > 2, numbers)))
print(result)  # Output: [9, 16, 25]
```

## Best Practices

- Use `map()` for transformations (e.g., scaling measurements) and `filter()` for selection (e.g., removing outliers).
- Convert map/filter objects to lists for display or further use.
- Prefer lambda expressions for simple operations to keep code concise.
- Ensure functions used with `map()` and `filter()` are clear and focused.

**Example from Provided Code**:

```python
def multiply(n):
    return n * 2

numbers_list = [3, 4, 7, 8, 9]
print(list(map(multiply, numbers_list)))  # Output: [6, 8, 14, 16, 18]

def filtername(username):
    return len(username) % 2 == 0

names = ['steve', 'bill', 'jimmy', 'fallon', 'donald']
print(list(map(filtername, names)))  # Output: [False, True, False, True, False]
```

## Practice Task

Write a Python script that:

1. Creates a list of measurements `[5, 10, 15, 20, 25, 30]`.
2. Uses `map()` to calculate the square root of each measurement (use `math.sqrt`).
3. Uses `filter()` to select measurements greater than 15.
4. Prints both results.

**Solution**:

```python
import math

measurements = [5, 10, 15, 20, 25, 30]

# Map to calculate square roots
sqrt_values = list(map(lambda x: math.sqrt(x), measurements))
print(f"Square roots: {sqrt_values}")

# Filter measurements > 15
filtered_values = list(filter(lambda x: x > 15, measurements))
print(f"Measurements > 15: {filtered_values}")
```
