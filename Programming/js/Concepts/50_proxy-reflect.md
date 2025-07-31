# Proxy and Reflect in JavaScript

**Proxy** and **Reflect** are powerful tools introduced in ES6 that allow developers to intercept and control the behavior of objects at a low level.

They are often used to add custom behavior to objects, such as validation, logging, access control, or even building advanced APIs like data binding frameworks.

---

## 1. What is a Proxy?

A **Proxy** in JavaScript is an object that wraps another object and allows you to control how the wrapped object behaves when it's interacted with (like reading, writing, deleting properties, etc).

```js
const proxy = new Proxy(targetObject, handlerObject);
```

* `targetObject`: the original object you want to wrap
* `handlerObject`: an object with methods (called **traps**) that define custom behavior

```js
const user = {
  name: "Ravi",
  age: 25
};

const handler = {
  get(target, prop) {
    console.log(`Getting ${prop}`);
    return target[prop];
  },

  set(target, prop, value) {
    if (prop === "age" && typeof value !== "number") {
      console.log("Age must be a number");
      return false;
    }
    target[prop] = value;
    console.log(`Set ${prop} to ${value}`);
    return true;
  }
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.name); // Logs: Getting name -> Output: Ravi
proxyUser.age = 30;          // Logs: Set age to 30
proxyUser.age = "thirty";    // Logs: Age must be a number
```

* The `get` trap runs whenever a property is read
* The `set` trap runs whenever a property is changed
* You can intercept behavior and enforce rules like type-checking

---

## 2. What is Reflect?

**Reflect** is a built-in JavaScript object that provides default methods to perform the same operations that Proxies intercept (get, set, delete, etc). It’s usually used **inside proxy traps** to forward the default behavior after adding custom logic.

```js
const handler = {
  get(target, prop) {
    console.log(`Accessing ${prop}`);
    return Reflect.get(target, prop); // use default behavior
  },

  set(target, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    return Reflect.set(target, prop, value); // use default behavior
  }
};

const user = { name: "Anjali" };
const proxy = new Proxy(user, handler);

proxy.name = "Kiran"; // Logs: Setting name to Kiran
console.log(proxy.name); // Logs: Accessing name -> Output: Kiran
```

* Reflect makes the code cleaner and more consistent
* You don’t have to manually do `target[prop] = value`, you just delegate to `Reflect.set`

---

## 3. Why Use Proxy and Reflect?

* To **validate data** before setting it
* To **log or debug** property access and updates
* To create **virtual properties** or **computed values**
* To build libraries like form validators, observables, reactivity systems (e.g., Vue.js uses proxies)

---

## 4. Common Proxy Traps

| Trap             | Description                               |
| ---------------- | ----------------------------------------- |
| `get`            | Intercepts property access                |
| `set`            | Intercepts property assignment            |
| `has`            | Intercepts `in` operator                  |
| `deleteProperty` | Intercepts `delete obj.prop`              |
| `apply`          | Intercepts function calls (for functions) |
| `construct`      | Intercepts `new` operator on constructors |

---

## Summary

* A **Proxy** wraps an object and lets you intercept and customize operations
* **Reflect** helps perform the default operations in a clean and consistent way
* Together, they let you build smarter, safer, or more controlled objects
