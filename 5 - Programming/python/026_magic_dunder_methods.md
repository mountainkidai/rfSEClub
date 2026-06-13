# 026 Magic/Dunder Methods

Magic methods, also known as dunder (double underscore) methods, are special methods in Python that customize the behavior of classes for built-in operations. For students in the rfSE Club, understanding magic methods is crucial for creating objects that integrate seamlessly with Python’s built-in functionality, enabling custom behaviors for scientific models like experiment data or simulation objects. The provided code examples, such as the `Book` class, are referenced to illustrate these concepts.

## What are Magic/Dunder Methods?

- Defined with double underscores (e.g., `__init__`, `__str__`).
- Automatically invoked by Python for specific operations (e.g., string representation, length calculation).
- Allow classes to emulate built-in types or customize behavior.

## Common Magic Methods

- `__init__(self, ...)`: Constructor to initialize object attributes.
- `__str__(self)`: Returns a human-readable string representation of the object, used by `print()` or `str()`.
- `__len__(self)`: Returns the length of the object, used by `len()`.
- `__del__(self)`: Called when an object is deleted, used for cleanup.

**Example**:

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return f"{self.title} by {self.author}"

    def __len__(self):
        return self.pages

book = Book("The Alchemist", "Paulo Coelho", 235)
print(book)  # Output: The Alchemist by Paulo Coelho
print(len(book))  # Output: 235
```

## Using `__del__`

- Invoked when an object is deleted using `del` or when it goes out of scope.
- Useful for releasing resources or logging object destruction.

**Example**:

```python
class Sample:
    def __init__(self, name):
        self.name = name

    def __del__(self):
        print(f"{self.name} object has been deleted")

sample = Sample("Test")
del sample  # Output: Test object has been deleted
```

## Best Practices

- Use `__str__` for user-friendly string representations, not for debugging (use `__repr__` for that).
- Implement only the magic methods needed for your class’s purpose to keep code simple.
- Ensure `__len__` returns an integer, as required by Python.
- Use `__del__` cautiously, as its execution timing depends on Python’s garbage collection.

**Example from Provided Code**:

```python
class Book:
    def __init__(self, title, author, pages):
        print('Welcome to Zica Bookstore')
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return f'{self.title} is written by {self.author}'

    def __len__(self):
        return self.pages

alchemist = Book('The Alchemist', 'Paulo Coelho', 235)
print(alchemist)  # Output: Welcome to Zica Bookstore
                 #         The Alchemist is written by Paulo Coelho
print(alchemist.title + ' : ' + str(len(alchemist)))  # Output: The Alchemist : 235
```

## Practice Task

Write a Python script that:

1. Defines a class `Experiment` with attributes `id` and `data_points` (a list of measurements).
2. Implements `__init__` to initialize `id` and `data_points`.
3. Implements `__str__` to return a string like "Experiment [id] with [n] data points".
4. Implements `__len__` to return the number of data points.
5. Creates an object, prints it, and its length.

**Solution**:

```python
class Experiment:
    def __init__(self, id, data_points):
        self.id = id
        self.data_points = data_points

    def __str__(self):
        return f"Experiment {self.id} with {len(self.data_points)} data points"

    def __len__(self):
        return len(self.data_points)

exp = Experiment("EXP001", [10.5, 20.3, 15.7])
print(exp)  # Output: Experiment EXP001 with 3 data points
print(len(exp))  # Output: 3
```
