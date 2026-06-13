# 024 Constructors and Attributes

Constructors and attributes in Python are core components of object-oriented programming (OOP) within classes. Constructors initialize objects with specific data, while attributes store the data associated with those objects. For students in the rfSE Club, mastering constructors and attributes is essential for modeling scientific entities, such as experiments or datasets, in a structured and reusable way. The provided code examples, such as `Book` and `AtmMachine`, are referenced to illustrate these concepts.

## Constructors

- A constructor is a special method called `__init__` that initializes a new object when it is created.
- It takes `self` (the instance) as the first parameter, followed by other parameters to set initial attributes.
- Automatically called when an object is instantiated using the class name.

**Example**:

```python
class Experiment:
    def __init__(self, id, type):
        self.id = id
        self.type = type
        print(f"Created experiment {self.id} of type {self.type}")

exp1 = Experiment("E001", "Physics")  # Output: Created experiment E001 of type Physics
```

## Attributes

- Attributes are variables that belong to an object, defined within the `__init__` method or elsewhere in the class.
- Accessed using dot notation (e.g., `object.attribute`).
- Can store any data type, such as strings, numbers, or lists, representing object properties.

**Example**:

```python
class Scientist:
    def __init__(self, name, field):
        self.name = name  # Instance attribute
        self.field = field  # Instance attribute

scientist1 = Scientist("Marie Curie", "Physics")
print(scientist1.name)   # Output: Marie Curie
print(scientist1.field)  # Output: Physics
```

## Instance vs. Class Attributes

- **Instance Attributes**: Defined in `__init__`, unique to each object (e.g., `self.name`).
- **Class Attributes**: Defined outside `__init__`, shared across all objects of the class.

**Example**:

```python
class Lab:
    location = "Building A"  # Class attribute
    def __init__(self, name):
        self.name = name  # Instance attribute

lab1 = Lab("Quantum Lab")
lab2 = Lab("Bio Lab")
print(lab1.name, lab1.location)  # Output: Quantum Lab Building A
print(lab2.name, lab2.location)  # Output: Bio Lab Building A
```

## Best Practices

- Initialize all essential attributes in `__init__` to ensure objects are fully configured.
- Use descriptive attribute names (e.g., `experiment_id` instead of `id`) for clarity.
- Avoid modifying class attributes unless shared behavior is intended.
- Use constructors to set up consistent object states for scientific modeling.

**Example from Provided Code**:

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

book1 = Book('The Alchemist', 'Paulo Coelho', 235)
print(f"{book1.title} by {book1.author}")  # Output: The Alchemist by Paulo Coelho

class AtmMachine:
    def __init__(self, name, balance, accno, password):
        print('Processing your information')
        self.cname = name
        self.cbalance = balance
        self.caccno = accno
        self.cpassword = password

aarivcard = AtmMachine('Aariv', 100000, 321456478, 12345)
# Output: Processing your information
print(f"hey {aarivcard.cname}, your balance is {aarivcard.cbalance}")
# Output: hey Aariv, your balance is 100000
```

## Practice Task

Write a Python script that:

1. Defines a class `Experiment` with a class attribute `lab_name = "rfSE Lab"`.
2. Uses a constructor to initialize instance attributes `experiment_id`, `category`, and `duration`.
3. Creates two `Experiment` objects with different values.
4. Prints the `experiment_id`, `category`, and `lab_name` for each object.

**Solution**:

```python
class Experiment:
    lab_name = "rfSE Lab"  # Class attribute
    def __init__(self, experiment_id, category, duration):
        self.experiment_id = experiment_id
        self.category = category
        self.duration = duration

exp1 = Experiment("EXP001", "Chemistry", 2.5)
exp2 = Experiment("EXP002", "Biology", 3.0)

print(f"Experiment 1: ID={exp1.experiment_id}, Category={exp1.category}, Lab={exp1.lab_name}")
print(f"Experiment 2: ID={exp2.experiment_id}, Category={exp2.category}, Lab={exp2.lab_name}")
# Output:
# Experiment 1: ID=EXP001, Category=Chemistry, Lab=rfSE Lab
# Experiment 2: ID=EXP002, Category=Biology, Lab=rfSE Lab
```
