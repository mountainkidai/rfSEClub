# Set and Map in JavaScript

JavaScript provides two special built-in objects — **Set** and **Map** — to handle collections of values in modern, efficient ways. These are introduced in ES6 and solve common problems like checking for duplicates and storing key-value data more flexibly than plain objects.

---

## 1. Set

A `Set` is a collection of **unique** values. This means it automatically removes duplicates — even if you try to add the same value multiple times.

```js
const mySet = new Set();
```

* `new Set()` creates an empty Set.
* You can also initialize with an array: `new Set([1, 2, 2, 3])` will result in `{1, 2, 3}`.

```js
mySet.add(10);
mySet.add(20);
mySet.add(10); // Duplicate — ignored
console.log(mySet); // Set(2) { 10, 20 }
```

* `.add(value)` adds a new unique value
* Duplicate values are not added again

* Automatically removes duplicates
* Stores values of any type (e.g., numbers, strings, objects, arrays)
* Preserves insertion order (first added stays first)
* Useful for filtering unique values from a list

```js
mySet.has(10);      // true → checks if 10 is in the Set
mySet.delete(20);   // removes 20 from the Set
mySet.size;         // 1 → returns the number of elements
```

```js
for (const value of mySet) {
  console.log(value);
}
```

* Works just like arrays — you can loop using `for...of`

Removing duplicates from an array:

```js
const numbers = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4]
```

---

## 2. Map

A `Map` is a collection of **key-value pairs** where the keys can be of **any type** — unlike objects which only allow strings or symbols as keys.

```js
const myMap = new Map();
```

* Creates an empty Map
* You can also initialize with pairs: `new Map([["a", 1], ["b", 2]])`

```js
myMap.set("name", "Raj");
myMap.set(123, true);
myMap.set({ key: 1 }, "value");
```

* `.set(key, value)` adds or updates a key-value pair
* Keys can be strings, numbers, objects, arrays, functions, etc.

* Keys can be any data type (object, number, string, etc.)
* Maintains the order of insertion
* Avoids collisions — unlike objects where keys are converted to strings
* Good for building dictionaries or caching data

```js
myMap.get("name");       // "Raj" → gets the value for the key
myMap.has(123);          // true → checks if key exists
myMap.delete(123);       // removes the entry with key 123
myMap.size;              // returns number of entries in the Map
```

### Looping through Map

```js
for (const [key, value] of myMap) {
  console.log(key, value);
}
```

* Uses array destructuring to access key and value in each entry

```js
const phoneBook = new Map();
phoneBook.set("Amit", "9876543210");
phoneBook.set("Pooja", "9876543222");

console.log(phoneBook.get("Pooja")); // "9876543222"
```

---

## Summary

| Feature    | Set                       | Map                               |
| ---------- | ------------------------- | --------------------------------- |
| Stores     | Unique values             | Key-value pairs                   |
| Key Type   | Not applicable            | Any type (string, object, number) |
| Value Type | Any                       | Any                               |
| Order      | Maintains insertion order | Maintains insertion order         |
| Use Case   | Filtering duplicates      | Dictionary-like structure         |

## Problems
