# Object-Oriented Programming (OOP) in JavaScript

**Object-Oriented Programming (OOP)** is a way of structuring code so that data and behavior are grouped together in reusable units called **objects**. This approach mirrors real-world entities. For example, a `Car` object can have properties like `color`, `model`, and `speed`, and behaviors like `drive()` and `stop()`.

JavaScript supports OOP through:

* Constructor functions
* Prototypes
* Modern `class` syntax (ES6 and beyond)

---

## 1. Constructor Functions

A **constructor function** is a regular function used with the `new` keyword to create multiple objects with the same structure.

```js
function Person(name, age) {
  this.name = name;           // Add a 'name' property to the new object
  this.age = age;             // Add an 'age' property to the new object
  this.sayHello = function () {
    console.log("Hi, I'm " + this.name);
  };
}

const p1 = new Person("Amit", 25); // Creates a new object with name = "Amit", age = 25
p1.sayHello(); // Output: Hi, I'm Amit
```

* `this` inside the function refers to the new object being created
* Each new object has its own copy of the `sayHello` function

---

## 2. Prototypes

A **prototype** is an object that other objects inherit methods and properties from.

### Why Use Prototypes?

To **share methods** between instances instead of duplicating them for every object.

```js
function Student(name) {
  this.name = name;
}

// Add method to the prototype instead of inside constructor
Student.prototype.greet = function () {
  console.log("Hello, I'm " + this.name);
};

const s1 = new Student("Pooja");
s1.greet(); // Output: Hello, I'm Pooja
```

* `greet()` is not recreated for every student
* All students share one function defined on the prototype

---

## 3. `class` Syntax (ES6)

The modern and clean way to create objects in JavaScript.

```js
class Animal {
  constructor(type) {
    this.type = type; // Add a 'type' property like "Cat" or "Dog"
  }

  speak() {
    console.log(this.type + " makes a sound");
  }
}

const cat = new Animal("Cat");
cat.speak(); // Output: Cat makes a sound
```

* `constructor()` is automatically called when `new Animal()` is used
* `speak()` is automatically added to the class prototype

---

## 4. Inheritance with `extends` and `super`

Inheritance allows one class to reuse properties and methods from another.

```js
class Vehicle {
  constructor(brand) {
    this.brand = brand; // Set brand like "Maruti"
  }

  start() {
    console.log(this.brand + " started");
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);        // Calls Vehicle constructor and sets this.brand
    this.model = model;  // Additional property for Car
  }

  display() {
    console.log(this.brand + " - " + this.model);
  }
}

const c1 = new Car("Maruti", "Swift");
c1.start();   // Output: Maruti started
c1.display(); // Output: Maruti - Swift
```

* `extends` creates a child class
* `super()` calls the parent class’s constructor
* Reuse code without duplicating logic

---

## 5. Static Methods

Static methods belong to the **class itself**, not its instances.

```js
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(2, 3)); // Output: 5
```

* You call static methods on the class, not on an object
* Useful for utility/helper functions

---

## When to Use OOP in JS

* When you need to create **multiple objects** with shared structure
* When modeling real-world entities like `User`, `Account`, `Car`, etc.
* When organizing code into **modular, reusable components**
