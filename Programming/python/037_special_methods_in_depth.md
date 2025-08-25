# 037 Special Methods in Depth

Special methods, also known as magic or dunder (double underscore) methods, are predefined methods in Python that allow customization of class behavior for built-in operations. For students in the rfSE Club, mastering special methods is essential for creating objects that integrate seamlessly with Python’s ecosystem, enabling advanced functionality in scientific applications like data modeling or simulations. The provided code includes examples like `__str__`, `__len__`, and `__del__` in the `Book` class, which are expanded upon here with a deeper exploration of additional special methods.

## What are Special Methods?

- Special methods are defined with double underscores (e.g., `__init__`, `__str__`).
- They are invoked automatically by Python for operations like object creation, string representation, arithmetic, or comparisons.
- Enable classes to emulate built-in types or customize behavior for specific use cases.

## Commonly Used Special Methods

### 1. Object Initialization and Destruction

- `__init__(self, *args, **kwargs)`: Constructor, initializes object attributes.
- `__del__(self)`: Destructor, called when an object is deleted (e.g., via `del` or garbage collection).
- **Note**: `__del__` execution timing is not guaranteed due to Python’s garbage collection.

**Example**:

```python
class Experiment:
    def __init__(self, id, data):
        self.id = id
        self.data = data
        print(f"Experiment {id} initialized")

    def __del__(self):
        print(f"Experiment {self.id} deleted")

exp = Experiment("EXP001", [10, 20])
del exp  # Output: Experiment EXP001 initialized
         #         Experiment EXP001 deleted
```

### 2. String Representation

- `__str__(self)`: Returns a user-friendly string representation, used by `print()` and `str()`.
- `__repr__(self)`: Returns a developer-friendly string, often used for debugging, called by `repr()` or in interactive shells.

**Example**:

```python
class Sample:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"Sample: {self.name}"

    def __repr__(self):
        return f"Sample(name='{self.name}')"

sample = Sample("Test")
print(sample)       # Output: Sample: Test
print(repr(sample)) # Output: Sample(name='Test')
```

### 3. Length and Iteration

- `__len__(self)`: Returns the length of the object, used by `len()`. Must return an integer.
- `__iter__(self)`: Returns an iterator object, enabling iteration with `for` loops.
- `__next__(self)`: Defines the next item in iteration (used with `__iter__`).

**Example**:

```python
class Dataset:
    def __init__(self, data):
        self.data = data

    def __len__(self):
        return len(self.data)

    def __iter__(self):
        self.index = 0
        return self

    def __next__(self):
        if self.index >= len(self.data):
            raise StopIteration
        value = self.data[self.index]
        self.index += 1
        return value

data = Dataset([1.5, 2.7, 3.2])
print(len(data))  # Output: 3
for value in data:
    print(value)  # Output: 1.5, 2.7, 3.2
```

### 4. Comparison Operators

- `__eq__(self, other)`: Defines equality (`==`).
- `__lt__(self, other)`: Defines less than (`<`).
- `__gt__(self, other)`: Defines greater than (`>`).
- Others: `__ne__`, `__le__`, `__ge__`.

**Example**:

```python
class Measurement:
    def __init__(self, value):
        self.value = value

    def __eq__(self, other):
        return self.value == other.value

    def __lt__(self, other):
        return self.value < other.value

m1 = Measurement(10)
m2 = Measurement(10)
m3 = Measurement(15)
print(m1 == m2)  # Output: True
print(m1 < m3)   # Output: True
```

### 5. Arithmetic Operators

- `__add__(self, other)`: Defines addition (`+`).
- `__sub__(self, other)`: Defines subtraction (`-`).
- Others: `__mul__`, `__div__`, `__pow__`, etc.

**Example**:

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
v3 = v1 + v2
print(v3)  # Output: Vector(4, 6)
```

## Best Practices

- Implement only necessary special methods to avoid overcomplicating classes.
- Ensure `__str__` returns user-friendly strings and `__repr__` provides unambiguous, ideally recreatable, representations.
- Use `__len__` and `__iter__` for objects that represent collections to integrate with Python’s iteration protocols.
- Test special methods thoroughly, as they affect core Python behavior.
- Use `__del__` cautiously, as its execution depends on garbage collection timing.

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
print(len(alchemist))  # Output: 235
```

## Advanced Example: Custom Iteration

```python
class ExperimentLog:
    def __init__(self, results):
        self.results = results

    def __len__(self):
        return len(self.results)

    def __iter__(self):
        self.index = 0
        return self

    def __next__(self):
        if self.index >= len(self.results):
            raise StopIteration
        value = self.results[self.index]
        self.index += 1
        return value

    def __str__(self):
        return f"Experiment Log with {len(self.results)} results"

log = ExperimentLog([10.1, 20.2, 30.3])
print(log)  # Output: Experiment Log with 3 results
print(len(log))  # Output: 3
for result in log:
    print(result)  # Output: 10.1, 20.2, 30.3
```

## Practice Task

Write a Python script that:

1. Defines a class `LabSample` with attributes `sample_id` and `values` (a list of measurements).
2. Implements `__init__` to initialize attributes, `__str__` for a readable string, `__len__` for the number of values, and `__eq__` to compare samples based on their IDs.
3. Creates two `LabSample` objects, compares them, and prints their string representation and length.

**Solution**:

```python
class LabSample:
    def __init__(self, sample_id, values):
        self.sample_id = sample_id
        self.values = values

    def __str__(self):
        return f"Sample {self.sample_id} with {len(self.values)} measurements"

    def __len__(self):
        return len(self.values)

    def __eq__(self, other):
        return self.sample_id == other.sample_id

sample1 = LabSample("S001", [1.5, 2.7, 3.9])
sample2 = LabSample("S001", [4.0, 5.0])
sample3 = LabSample("S002", [1.0, 2.0])

print(sample1)  # Output: Sample S001 with 3 measurements
print(len(sample1))  # Output: 3
print(sample1 == sample2)  # Output: True
print(sample1 == sample3)  # Output: False
```
