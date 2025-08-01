# Hashmaps in JavaScript

A **hashmap** is a data structure used to store key-value pairs. In JavaScript, we commonly implement hashmaps using either **objects** (`{}`) or the newer and more flexible **Map** object.

Hashmaps allow fast data lookup, insertion, and deletion — just like a dictionary in real life.

---

## 1. Using Objects as Hashmaps

An object in JavaScript can be used as a basic hashmap, where keys are always strings (or symbols) and each key maps to a value.

```js
const studentMarks = {
  Amit: 85,
  Pooja: 92,
  Rahul: 78
};

console.log(studentMarks["Pooja"]); // 92
```

* The keys are names (e.g., "Amit")
* The values are marks (e.g., 85)
* Access values using `object[key]` syntax

---

## 2. Using Map for Hashmaps

A `Map` is more advanced than a plain object and solves many limitations of using objects as hashmaps.

```js
const productPrices = new Map();
productPrices.set("pen", 10);
productPrices.set("notebook", 50);
productPrices.set("eraser", 5);

console.log(productPrices.get("notebook")); // 50
```

### Advantages of Map over Object

* Keys can be any type (not just strings)
* Does not inherit from `Object.prototype`, so no risk of key collisions
* Maintains insertion order
* Has useful built-in methods: `.get()`, `.set()`, `.has()`, `.delete()`

---

## When to Use Which?

| Feature          | Object                        | Map                         |
| ---------------- | ----------------------------- | --------------------------- |
| Key type         | Strings or Symbols only       | Any type (including object) |
| Preserves order  | No                            | Yes                         |
| Performance      | Slightly faster on small data | Better for large datasets   |
| Built-in methods | Basic                         | Rich set of methods         |
| Use for          | Simple config-like data       | Dynamic key-value storage   |

---

## Example

### Aadhar Database (Name → Aadhar Number)

```js
const aadharDB = {
  Ramesh: "2345-6789-1234",
  Sita: "4567-8912-3456",
  Ravi: "9876-5432-1098"
};

console.log(aadharDB["Ravi"]); // "9876-5432-1098"
```

### Using Map for Same

```js
const aadharMap = new Map();
aadharMap.set("Ramesh", "2345-6789-1234");
aadharMap.set("Sita", "4567-8912-3456");
aadharMap.set("Ravi", "9876-5432-1098");

console.log(aadharMap.get("Sita")); // "4567-8912-3456"
```

## Problems
