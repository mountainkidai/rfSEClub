# 035 Generators

Generators in Python are a special type of function that produce values one at a time, allowing efficient iteration over large or infinite datasets. For students in the rfSE Club, generators are crucial for handling scientific data streams, such as processing large experiment results or generating sequences, without consuming excessive memory. The provided code does not explicitly include generators, so this section introduces them with examples tailored to scientific applications.

## What are Generators?

- Generators are functions that use the `yield` keyword to produce a sequence of values lazily (on demand).
- Unlike regular functions that return a single value, generators return an iterator, yielding one value at a time.
- Benefits include memory efficiency and the ability to handle large or infinite sequences.

## Defining a Generator

- Use `def` like a regular function, but include `yield` to produce values.
- Calling a generator function returns a generator object, which can be iterated using a `for` loop or `next()`.

**Example**:

```python
def number_sequence(n):
    for i in range(n):
        yield i

gen = number_sequence(5)
for num in gen:
    print(num)  # Output: 0, 1, 2, 3, 4
```

## Using `next()` and Iteration

- Use `next(generator)` to retrieve the next value manually.
- Generators can only be iterated once; attempting to reuse them requires creating a new generator.

**Example**:

```python
def measurements():
    yield 10.5
    yield 20.3
    yield 15.7

gen = measurements()
print(next(gen))  # Output: 10.5
print(next(gen))  # Output: 20.3
print(next(gen))  # Output: 15.7
# next(gen) would raise StopIteration
```

## Infinite Generators

- Generators can produce infinite sequences by using a `while` loop, yielding values indefinitely.
- Use with caution, typically with a loop control mechanism.

**Example**:

```python
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib = fibonacci()
for _ in range(5):
    print(next(fib))  # Output: 0, 1, 1, 2, 3
```

## Generator Expressions

- Similar to list comprehensions but use parentheses `()` to create a generator.
- More memory-efficient than list comprehensions for large datasets.

**Example**:

```python
squares = (x * x for x in range(4))
print(list(squares))  # Output: [0, 1, 4, 9]
```

## Best Practices

- Use generators for large datasets or streams to save memory (e.g., reading experiment data incrementally).
- Avoid storing generator results in memory unless necessary; convert to a list only when required.
- Use clear `yield` statements to indicate the data being produced.
- Handle `StopIteration` gracefully when manually iterating with `next()`.

**Example Inspired by Scientific Context**:
While the provided code lacks explicit generators, we can adapt a scientific use case, such as generating a sequence of experiment measurements:

```python
def experiment_readings(start, step, count):
    """Generate a sequence of experiment readings."""
    current = start
    for _ in range(count):
        yield current
        current += step

readings = experiment_readings(10.0, 0.5, 4)
for reading in readings:
    print(f"Measurement: {reading}")
# Output:
# Measurement: 10.0
# Measurement: 10.5
# Measurement: 11.0
# Measurement: 11.5
```

## Practice Task

Write a Python script that:

1. Defines a generator function `temperature_sequence` that yields temperatures starting from an initial value, increasing by a step, for a given number of steps.
2. Uses the generator to print the first 5 temperatures starting at 20.0°C with a step of 1.5°C.
3. Creates a generator expression to produce squares of the first 5 positive integers and converts it to a list.

**Solution**:

```python
def temperature_sequence(start, step, count):
    """Generate a sequence of temperatures."""
    current = start
    for _ in range(count):
        yield current
        current += step

# Use generator to print temperatures
temps = temperature_sequence(20.0, 1.5, 5)
for temp in temps:
    print(f"Temperature: {temp}°C")
# Output:
# Temperature: 20.0°C
# Temperature: 21.5°C
# Temperature: 23.0°C
# Temperature: 24.5°C
# Temperature: 26.0°C

# Generator expression for squares
squares = (x * x for x in range(1, 6))
print(f"Squares: {list(squares)}")  # Output: Squares: [1, 4, 9, 16, 25]
```
