# ES6+ Features in JavaScript

ES6 (also called ECMAScript 2015) and newer versions introduced many powerful features that make JavaScript cleaner and more flexible. These include better ways to write functions, handle variables, extract values from data, and more.

---

## 1. Destructuring (Arrays and Objects)

### Definition

Destructuring allows you to extract values from arrays or properties from objects into separate variables easily.

### Example (Array)

```js
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first); // "red"
console.log(second); // "green"
```

### Example (Object)

```js
const person = { name: "Amit", age: 30 };
const { name, age } = person;
console.log(name); // "Amit"
console.log(age);  // 30
```

---

## 2. Spread and Rest Operators (`...`)

### Spread

Used to **expand** elements of an array or object.

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]
```

### Rest

Used to **collect** the rest of the values.

```js
function sum(a, b, ...others) {
  console.log(a, b); // first two values
  console.log(others); // rest of the values in an array
}

sum(1, 2, 3, 4, 5); // a=1, b=2, others=[3,4,5]
```

---

## 3. Block Scope: `let` and `const`

Before ES6, `var` was used for variables. But it has **function scope**, not block scope.

### `let` and `const` are block-scoped

```js
{
  let x = 10;
  const y = 20;
  console.log(x, y); // 10 20
}

console.log(x); // Error: x is not defined
```

### Key Points

* Use `let` when the value will change
* Use `const` when the value stays the same
* Avoid `var` in modern code

---

## 4. Enhanced String Methods

### Template Literals

Allows you to insert variables inside strings using backticks and `${}`.

```js
const name = "Priya";
console.log(`Hello, ${name}!`); // Hello, Priya!
```

### String methods

```js
const message = "Hello world";
console.log(message.startsWith("Hello")); // true
console.log(message.includes("wor"));     // true
console.log(message.endsWith("d"));       // true
```
