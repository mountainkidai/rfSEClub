# 027 Inheritance and Polymorphism

Inheritance and polymorphism are core object-oriented programming (OOP) concepts in Python that allow classes to share and extend functionality. For students in the rfSE Club, these concepts are vital for building modular and reusable scientific models, such as creating specialized experiment types from a generic base. The provided code includes basic class examples but not explicit inheritance or polymorphism, so this content introduces these concepts with relevant examples tailored to scientific contexts.

## Inheritance

- **Inheritance** allows a class (child/subclass) to inherit attributes and methods from another class (parent/base class).
- Defined using the syntax `class ChildClass(ParentClass):`.
- Enables code reuse and extension for specialized behavior.

**Example**:

```python
class Experiment:
    def __init__(self, id, duration):
        self.id = id
        self.duration = duration

    def run(self):
        return f"Running experiment {self.id} for {self.duration} hours"

class PhysicsExperiment(Experiment):  # Inherit from Experiment
    def __init__(self, id, duration, equipment):
        super().__init__(id, duration)  # Call parent constructor
        self.equipment = equipment

    def setup(self):
        return f"Setting up {self.equipment} for experiment {self.id}"

exp = PhysicsExperiment("PHY001", 2.5, "Particle Accelerator")
print(exp.run())    # Output: Running experiment PHY001 for 2.5 hours
print(exp.setup())  # Output: Setting up Particle Accelerator for experiment PHY001
```

## Polymorphism

- **Polymorphism** allows different classes to share the same method name, with each class implementing the method differently.
- Achieved through method overriding, where a child class redefines a parent class method.
- Enables flexible and interchangeable object behavior.

**Example**:

```python
class ChemistryExperiment(Experiment):
    def run(self):  # Override parent's run method
        return f"Conducting chemical experiment {self.id} for {self.duration} hours"

class BiologyExperiment(Experiment):
    def run(self):  # Override parent's run method
        return f"Performing biological experiment {self.id} for {self.duration} hours"

chem_exp = ChemistryExperiment("CHEM001", 3.0)
bio_exp = BiologyExperiment("BIO001", 4.0)
print(chem_exp.run())  # Output: Conducting chemical experiment CHEM001 for 3.0 hours
print(bio_exp.run())   # Output: Performing biological experiment BIO001 for 4.0 hours
```

## Using `super()`

- The `super()` function accesses parent class methods or constructors, allowing child classes to extend rather than replace parent behavior.
- Commonly used in `__init__` to initialize parent attributes.

**Example**:

```python
class AdvancedExperiment(Experiment):
    def __init__(self, id, duration, complexity):
        super().__init__(id, duration)
        self.complexity = complexity

    def run(self):
        parent_result = super().run()  # Call parent method
        return f"{parent_result} with complexity level {self.complexity}"

adv_exp = AdvancedExperiment("ADV001", 5.0, "High")
print(adv_exp.run())  # Output: Running experiment ADV001 for 5.0 hours with complexity level High
```

## Best Practices

- Use inheritance to model "is-a" relationships (e.g., a `PhysicsExperiment` _is an_ `Experiment`).
- Override methods only when the child class needs distinct behavior.
- Use `super()` to avoid duplicating parent class logic.
- Keep inheritance hierarchies shallow to maintain code clarity.

**Example Inspired by Provided Code**:
The provided code includes classes like `Book` and `DogHome` but lacks explicit inheritance. Below is an example adapting the `DogHome` class to demonstrate inheritance and polymorphism:

```python
class AnimalHome:
    def __init__(self, animal_type):
        self.animal_type = animal_type

    def response(self):
        return f"Processing {self.animal_type} in the home"

class DogHome(AnimalHome):
    def __init__(self, bark_type, ears):
        super().__init__("Dog")
        self.bark = bark_type
        self.ears = ears
        if self.bark == 'bow':
            print('Thank you for helping a Dog in finding a good home')

    def response(self):  # Polymorphic method
        return f"Dog with {self.bark} bark and {self.ears} ears accepted"

dog = DogHome('bow', 'down')
print(dog.response())  # Output: Thank you for helping a Dog in finding a good home
                       #         Dog with bow bark and down ears accepted
```

## Practice Task

Write a Python script that:

1. Defines a parent class `LabEquipment` with attributes `name` and `status` (e.g., "Active") and a method `operate` returning a generic operation message.
2. Defines a child class `Microscope` that inherits from `LabEquipment`, adding a `magnification` attribute and overriding `operate` to include magnification.
3. Creates a `Microscope` object and prints its operation message.

**Solution**:

```python
class LabEquipment:
    def __init__(self, name, status):
        self.name = name
        self.status = status

    def operate(self):
        return f"Operating {self.name} (Status: {self.status})"

class Microscope(LabEquipment):
    def __init__(self, name, status, magnification):
        super().__init__(name, status)
        self.magnification = magnification

    def operate(self):
        return f"Using {self.name} at {self.magnification}x magnification (Status: {self.status})"

microscope = Microscope("Optical Scope", "Active", 100)
print(microscope.operate())  # Output: Using Optical Scope at 100x magnification (Status: Active)
```
