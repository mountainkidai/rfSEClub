# 028 OOP Applications

Object-oriented programming (OOP) applications in Python leverage classes and objects to model real-world entities and their interactions. For students in the rfSE Club, OOP applications are critical for building structured, reusable, and scalable scientific programs, such as simulations, data management systems, or experiment trackers. The provided code includes examples like `Book`, `DogHome`, and `AtmMachine`, which are used to illustrate practical OOP applications in a scientific context.

## Why Use OOP for Applications?

- **Modularity**: Encapsulates data and behavior, making code easier to maintain.
- **Reusability**: Classes can be reused across projects or extended via inheritance.
- **Scalability**: Supports complex systems by organizing related data and functions.
- Common applications include simulations, data models, and interactive systems.

## Example 1: Book Store Management

A `Book` class models a bookstore’s inventory, with attributes for title, author, and pages, and methods to manage book details.

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
print(f"{alchemist.title} : {len(alchemist)} pages")  # Output: The Alchemist : 235 pages
```

## Example 2: ATM Machine Simulation

An `AtmMachine` class simulates a banking system, managing user account details and transactions.

**Example from Provided Code**:

```python
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

## Example 3: Animal Shelter Simulation

A `DogHome` class models an animal shelter, managing pet data and behaviors based on their type.

**Example from Provided Code**:

```python
class DogHome:
    def __init__(self, barktype, ears):
        self.bark = barktype
        self.ear = ears
        if self.bark == 'bow':
            print('Thank you for helping a Dog in finding a good home')
        elif self.bark == 'meow':
            print('oh sorry, we cannot accept cats as we have no place')
        else:
            print('oh sorry, we are not accepting any animal except dogs')

    def sleep(self):
        if self.bark == 'bow':
            print('Zzz. bow bow......')
        else:
            print('ZZZzzzz....')

dog1 = DogHome('bow', 'down')
dog1.sleep()  # Output: Thank you for helping a Dog in finding a good home
              #         Zzz. bow bow......
```

## Extended Application: Experiment Tracker

A practical OOP application for scientific work is an `ExperimentTracker` class to manage experiment details, track results, and compute summaries.

**Example**:

```python
class ExperimentTracker:
    def __init__(self, id, category, measurements):
        self.id = id
        self.category = category
        self.measurements = measurements

    def add_measurement(self, value):
        self.measurements.append(value)
        print(f"Added measurement {value} to experiment {self.id}")

    def average_result(self):
        return sum(self.measurements) / len(self.measurements) if self.measurements else 0

exp = ExperimentTracker("EXP001", "Physics", [10.5, 12.3, 11.7])
exp.add_measurement(13.2)
print(f"Average result: {exp.average_result()}")
# Output: Added measurement 13.2 to experiment EXP001
#         Average result: 11.925
```

## Best Practices

- Design classes to model specific entities (e.g., `ExperimentTracker` for experiments) with clear attributes and methods.
- Use methods to encapsulate behavior, such as calculations or updates, rather than external functions.
- Ensure classes are reusable and extensible for future scientific projects.
- Include validation in methods to handle edge cases (e.g., empty measurement lists).

## Practice Task

Write a Python script that:

1. Defines a class `LabInventory` with attributes `item_name`, `quantity`, and `category`.
2. Includes a method `update_quantity` to add or subtract from the quantity and print the new total.
3. Includes a method `check_availability` that returns whether the item is in stock (quantity > 0).
4. Creates an object, updates its quantity, and checks its availability.

**Solution**:

```python
class LabInventory:
    def __init__(self, item_name, quantity, category):
        self.item_name = item_name
        self.quantity = quantity
        self.category = category

    def update_quantity(self, change):
        self.quantity += change
        print(f"Updated {self.item_name} quantity to {self.quantity}")

    def check_availability(self):
        return self.quantity > 0

item = LabInventory("Beaker", 10, "Glassware")
item.update_quantity(-3)  # Output: Updated Beaker quantity to 7
print(f"Is {item.item_name} in stock? {item.check_availability()}")  # Output: Is Beaker in stock? True
item.update_quantity(-7)  # Output: Updated Beaker quantity to 0
print(f"Is {item.item_name} in stock? {item.check_availability()}")  # Output: Is Beaker in stock? False
```
