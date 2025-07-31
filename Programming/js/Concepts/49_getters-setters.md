# Getters and Setters in JavaScript

**Getters and setters** are special methods that let you control how properties of an object are read or modified. They are helpful for:

* **Validation** (checking input before setting a value)
* **Formatting output** (like combining names)
* **Hiding internal details** (encapsulation)
* **Reacting** when a value is read or changed (like triggering an update)

JavaScript allows you to define these using the `get` and `set` keywords inside a class.

---

## 1. What is a Getter?

A **getter** is a method used to **access or retrieve** the value of a property. It allows you to perform logic **before returning** the value.

```js
class Example {
  get propertyName() {
    // logic to return a value
  }
}
```

* You **don't call** a getter with `()`. It behaves like a normal property.

```js
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;   // public property
    this.lastName = lastName;     // public property
  }

  get fullName() {
    // Combines firstName and lastName into one string
    return this.firstName + " " + this.lastName;
  }
}

const u = new User("Anita", "Kumar");
console.log(u.fullName); // Output: Anita Kumar
```

* `fullName` is a **computed property**. It doesn’t exist as a value — it’s generated every time it’s accessed.
* You use it like `u.fullName` instead of `u.fullName()` — it looks like a property but works like a method internally.

---

## 2. What is a Setter?

A **setter** is a method used to **update or assign** a value to a property. You can add custom logic to validate or modify the input before storing it.

```js
class Example {
  set propertyName(value) {
    // logic to handle incoming value
  }
}
```

```js
class Product {
  constructor(name) {
    this._name = name; // underscore means it's a backing field (real storage)
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    // Only accept non-empty string values
    if (typeof newName === "string" && newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Invalid name");
    }
  }
}

const item = new Product("Laptop");
console.log(item.name); // Laptop

item.name = "";       // Triggers setter: prints "Invalid name"
item.name = "Tablet";  // Triggers setter: updates name
console.log(item.name); // Tablet
```

* The setter uses the `newName` parameter as input.
* You can perform checks before updating the property.
* We usually use a private backing field like `_name` to store the actual value.
