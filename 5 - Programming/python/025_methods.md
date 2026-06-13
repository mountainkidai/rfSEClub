# 025 Methods

Methods in Python are functions defined within a class that operate on its objects, encapsulating behavior specific to those objects. For students in the rfSE Club, methods are essential for implementing functionality in object-oriented programming, such as performing calculations or updating states in scientific models like experiments or simulations. The provided code examples, such as the `DogHome` class, are used to illustrate method usage.

## Defining Methods

- Methods are defined inside a class using the `def` keyword, with `self` as the first parameter to reference the instance.
- They can access and modify instance attributes or perform actions specific to the object.
- Methods can take additional parameters and return values, similar to regular functions.

**Example**:

```python
class Experiment:
    def __init__(self, name, value):
        self.name = name
        self.value = value

    def increase_value(self, increment):
        self.value += increment
        return self.value

exp = Experiment("Test", 100)
new_value = exp.increase_value(50)
print(f"Updated value: {new_value}")  # Output: Updated value: 150
```

## Instance Methods

- Operate on instance attributes using `self`.
- Most common type of method, used for object-specific behavior.

**Example**:

```python
class Scientist:
    def __init__(self, name, field):
        self.name = name
        self.field = field

    def describe(self):
        return f"{self.name} works in {self.field}"

scientist = Scientist("Marie Curie", "Physics")
print(scientist.describe())  # Output: Marie Curie works in Physics
```

## Class Methods

- Defined with the `@classmethod` decorator and take `cls` as the first parameter, referring to the class itself.
- Used for operations that involve the class rather than a specific instance, such as creating alternative constructors.

**Example**:

```python
class Lab:
    lab_count = 0

    def __init__(self, name):
        self.name = name
        Lab.lab_count += 1

    @classmethod
    def get_lab_count(cls):
        return f"Total labs: {cls.lab_count}"

lab1 = Lab("Physics Lab")
lab2 = Lab("Chemistry Lab")
print(Lab.get_lab_count())  # Output: Total labs: 2
```

## Best Practices

- Use descriptive method names (e.g., `calculate_result` instead of `calc`) to clarify functionality.
- Keep methods focused on a single task to maintain modularity.
- Use instance methods for object-specific operations and class methods for class-level operations.
- Include docstrings for complex methods to document their purpose and parameters.

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
            print('oh sorry, we are not acceping any animal except dogs')

    def sleep(self):  # Instance method
        if self.bark == 'bow':
            print('Zzz. bow bow......')
        else:
            print('ZZZzzzz....')

dog1 = DogHome('bow', 'down')
dog1.sleep()  # Output: Zzz. bow bow......
cat1 = DogHome('meow', 'straight')
cat1.sleep()  # Output: ZZZzzzz....
```

## Practice Task

Write a Python script that:

1. Defines a class `Experiment` with attributes `id` and `temperature`.
2. Includes an instance method `raise_temperature` that increases the temperature by a given amount and returns the new value.
3. Includes a class method `reset_count` that tracks and resets the number of experiments created (using a class attribute).
4. Creates two `Experiment` objects, calls `raise_temperature` on one, and prints the experiment count before and after resetting.

**Solution**:

```python
class Experiment:
    experiment_count = 0

    def __init__(self, id, temperature):
        self.id = id
        self.temperature = temperature
        Experiment.experiment_count += 1

    def raise_temperature(self, increment):
        self.temperature += increment
        return self.temperature

    @classmethod
    def reset_count(cls):
        cls.experiment_count = 0
        return "Experiment count reset"

exp1 = Experiment("EXP001", 25.0)
exp2 = Experiment("EXP002", 30.0)
print(f"New temperature for {exp1.id}: {exp1.raise_temperature(5.0)}")  # Output: New temperature for EXP001: 30.0
print(f"Total experiments: {Experiment.experiment_count}")  # Output: Total experiments: 2
print(Experiment.reset_count())  # Output: Experiment count reset
print(f"Total experiments after reset: {Experiment.experiment_count}")  # Output: Total experiments after reset: 0
```
