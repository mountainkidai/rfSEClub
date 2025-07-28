# ES6+ Features in JavaScript

ES6 (also called ECMAScript 2015) and newer versions introduced many powerful features that make JavaScript cleaner and more flexible. These include better ways to write functions, handle variables, extract values from data, and more.

---

## 1. Destructuring (Arrays and Objects)

### Definition

Destructuring allows you to extract values from arrays or properties from objects into separate variables easily.

> 💡 Think of destructuring as "unpacking" values.

### Example (Array)

```js
const colors = ["red", "green", "blue"];
const [first, second] = colors; // Unpacks the first two elements
console.log(first); // "red"
console.log(second); // "green"
```

### Example (Object)

```js
const person = { name: "Amit", age: 30 };
const { name, age } = person; // Unpacks 'name' and 'age' from the object
console.log(name); // "Amit"
console.log(age);  // 30
```

---

## 2. Spread and Rest Operators (`...`)

> 💡 Both use `...` but behave differently depending on context.

### Spread — Expands data

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // Spreads the values of arr1 into arr2
console.log(arr2); // [1, 2, 3, 4]
```

**Use cases:**

* Combine arrays
* Copy arrays/objects
* Pass multiple values as function arguments

### Rest — Collects data

```js
function sum(a, b, ...others) {
  console.log(a, b);       // first two values
  console.log(others);     // remaining values as an array
}

sum(1, 2, 3, 4, 5); // a=1, b=2, others=[3,4,5]
```

**Use cases:**

* Functions with unlimited arguments
* Object destructuring to collect remaining fields

---

## 3. Block Scope: `let` and `const`

Before ES6, `var` was used, but it ignores block scope.

### `let` and `const` respect block scope

```js
{
  let x = 10;
  const y = 20;
  console.log(x, y); // 10 20
}

console.log(x); // ❌ Error: x is not defined
```

### Key Points

* `let` is for variables that may change.
* `const` is for constants (unchangeable values).
* Always avoid `var` unless you need function scope.

---

## 4. Enhanced String Methods

### Template Literals — Better strings

```js
const name = "Priya";
console.log(`Hello, ${name}!`); // Hello, Priya!
```

**Why useful?**

* Easier to create dynamic strings
* Supports multiline strings

```js
const multiline = `This is
on multiple lines.`;
console.log(multiline);
```

### Helpful String Methods

```js
const message = "Hello world";

console.log(message.startsWith("Hello")); // true
console.log(message.includes("wor"));     // true
console.log(message.endsWith("d"));       // true
```

These make it easier to check string content without writing complex logic.
