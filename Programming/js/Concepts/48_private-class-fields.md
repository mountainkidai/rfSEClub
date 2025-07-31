# Private Class Fields in JavaScript

Private class fields allow you to create variables that **cannot be accessed directly from outside the class**. This is useful for protecting data, following proper design principles, and avoiding bugs from unwanted changes. This concept is part of **encapsulation** — a core principle of Object-Oriented Programming (OOP).

In JavaScript, this is done using a special syntax that starts with a `#` symbol.

---

## 1. What Are Private Fields?

A private field is a variable defined inside a class that is hidden from the outside world. Only code inside the class can read or change it.

### Syntax

```js
class ClassName {
  #privateField = initialValue;
}
```

* The `#` symbol makes the field private
* You **cannot access** it using `object.#fieldName` outside the class

```js
class BankAccount {
  #balance = 0; // private field to store account balance

  constructor(name) {
    this.name = name; // public property
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount; // modify private field from inside
    }
  }

  checkBalance() {
    return this.#balance; // access private field from inside
  }
}

const user1 = new BankAccount("Riya");
user1.deposit(1000);
console.log(user1.checkBalance()); // 1000
console.log(user1.#balance); // ❌ Error: Private field '#balance' must be declared in an enclosing class
```

* `#balance` is used only inside the class methods.
* Anyone using the `BankAccount` object cannot see or change `#balance` directly.
* This makes sure only the class controls how the balance is modified.

---

## 2. Why Use Private Fields?

### Main Benefits

* **Data Protection**: Important variables are hidden from the outside
* **Encapsulation**: Internal logic stays internal
* **Cleaner Interfaces**: Only necessary parts of the class are exposed

Think of private fields like your ATM PIN — it's known and used only inside the ATM system (class), not something publicly visible.

---

## 3. Private Methods

Just like private variables, JavaScript also allows **private methods** (functions inside classes that can’t be accessed from outside).

```js
class Counter {
  #count = 0; // private counter

  #log() { // private helper method
    console.log("Current count: " + this.#count);
  }

  increment() {
    this.#count++; // update private field
    this.#log();   // call private method
  }
}

const c = new Counter();
c.increment(); // Output: Current count: 1
c.#log();      // ❌ Error: Private method not accessible from outside
```

* `#log()` is only for internal use and cannot be called by other code.
* You can use private methods for things like logging, validation, or calculations you want to keep hidden.

---

## 4. Common Use Case: Encapsulation

Encapsulation is about **hiding internal details** and showing only what's necessary. It allows you to change your class's internal code without affecting how others use it.

Example: Even if the way you calculate balance changes internally, the public method `checkBalance()` still works the same.

```js
class TemperatureSensor {
  #celsius = 0;

  setTemperatureC(degree) {
    this.#celsius = degree;
  }

  getTemperatureF() {
    return (this.#celsius * 9) / 5 + 32; // public method using private field
  }
}

const sensor = new TemperatureSensor();
sensor.setTemperatureC(25);
console.log(sensor.getTemperatureF()); // 77
```

Even though the user sets Celsius, they can only get Fahrenheit — and they never directly access `#celsius`.

---
