# 023 Classes and Objects

Classes and objects in Python are the foundation of object-oriented programming (OOP), allowing structured data organization and behavior encapsulation. For students in the rfSE Club, mastering classes and objects is essential for modeling scientific entities, such as experiments, datasets, or simulations, in a modular and reusable way. The provided code examples, including `Book`, `Dog`, and `AtmMachine`, are used to illustrate these concepts.

## Classes

- A class is a blueprint for creating objects, defining attributes (data) and methods (functions).
- Defined using the `class` keyword followed by the class name and a colon.
- Conventionally, class names use CamelCase (e.g., `ExperimentData`).

**Example**:

```python
class Experiment:
    pass  # Placeholder for class definition
```

## Objects

- Objects are instances of a class, created by calling the class as a function.
- Each object can have its own set of attributes and can invoke the class’s methods.

**Example**:

```python
class Dog:
    def __init__(self, name, age):
        self.name = name  # Attribute
        self.age = age    # Attribute

dog1 = Dog('jimmy', 12)  # Object creation
print(dog1.name)  # Output: jimmy
```

## The `__init__` Method

- The `__init__` method (constructor) initializes object attributes when the object is created.
- Takes `self` (the instance) as the first parameter, followed by other parameters.

**Example**:

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

book1 = Book('The Alchemist', 'Paulo Coelho', 235)
print(f"{book1.title} by {book1.author}")  # Output: The Alchemist by Paulo Coelho
```

## Best Practices

- Use descriptive class and attribute names to reflect their scientific purpose (e.g., `Experiment` instead of `Exp`).
- Initialize all necessary attributes in `__init__` to ensure objects are fully configured.
- Keep classes focused on a single responsibility (e.g., a `Dog` class for pet data, not experiment data).
- Use classes to model real-world entities in scientific projects for clarity and reusability.

**Example from Provided Code**:

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

dog1 = Dog('jimmy', 12)
dog2 = Dog('tommy', 13)
print(dog1.name)  # Output: jimmy

class AtmMachine:
    def __init__(self, name, balance, accno, password):
        print('Processing your information')
        self.cname = name
        self.cbalance = balance
        self.caccno = accno
        self.cpassword = password

aarivcard = AtmMachine('Aariv', 100000, 321456478, 12345)
print(f"hey {aarivcard.cname}, your balance is {aarivcard.cbalance}")
# Output: Processing your information
#         hey Aariv, your balance is 100000
```

## Practice Task

Write a Python script that:

1. Defines a class `Scientist` with attributes `name`, `field`, and `experience_years`.
2. Creates two `Scientist` objects with different values.
3. Prints the name and field of each scientist in a formatted string.

**Solution**:

```python
class Scientist:
    def __init__(self, name, field, experience_years):
        self.name = name
        self.field = field
        self.experience_years = experience_years

scientist1 = Scientist('Marie Curie', 'Physics', 20)
scientist2 = Scientist('Alan Turing', 'Computer Science', 15)

print(f"{scientist1.name} works in {scientist1.field}")
print(f"{scientist2.name} works in {scientist2.field}")
# Output: Marie Curie works in Physics
#         Alan Turing works in Computer Science
```
