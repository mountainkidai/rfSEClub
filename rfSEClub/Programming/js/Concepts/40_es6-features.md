# ES6+ Features in JavaScript

ES6 (also called ECMAScript 2015) and newer versions introduced many powerful features that make JavaScript cleaner and more flexible. These include better ways to write functions, handle variables, extract values from data, and more.

---

## 1. Destructuring (Arrays and Objects)

### Definition

Destructuring allows you to extract values from arrays or properties from objects into separate variables easily.

### Why Use Destructuring?

Think of destructuring like unpacking a suitcase. Instead of opening the suitcase every time you need something, you take out what you need and keep it handy. It makes your code cleaner and saves you from writing repetitive code.

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

### Real-world Example

```js
// Instead of this old way:
const user = { username: "john123", email: "john@email.com" };
const username = user.username;
const email = user.email;

// You can do this:
const { username, email } = user;
console.log(username); // "john123"
```

---

## 2. Spread and Rest Operators (`...`)

### What's the Difference?

The same `...` symbol does two opposite things:

- **Spread** = "Take this box and spread all items out"
- **Rest** = "Take all these loose items and put them in a box"

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

### Easy Example - Copying Arrays

```js
const fruits = ["apple", "banana"];
const moreFruits = [...fruits, "orange", "mango"];
console.log(moreFruits); // ["apple", "banana", "orange", "mango"]
// Original array stays unchanged!
console.log(fruits); // ["apple", "banana"]
```

---

## 3. Block Scope: `let` and `const`

### Why This Matters

Before ES6, `var` was used for variables. But it has **function scope**, not block scope. This caused many bugs because variables would "leak" outside where you expected them to work.

Think of block scope like rooms in a house. What happens in one room (block) stays in that room. With `var`, it was like having no walls - everything was mixed together!

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

- Use `let` when the value will change
- Use `const` when the value stays the same
- Avoid `var` in modern code

### Simple Rule

```js
const name = "Raj"; // Won't change
let age = 25;       // Might change
age = 26;           // ✅ This works
// name = "Sam";    // ❌ This would cause an error
```

---

## 4. Enhanced String Methods

### Why Template Literals Are Amazing

Before ES6, combining strings and variables was messy and error-prone. Template literals make it as easy as writing a normal sentence!

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

### Multi-line Strings Made Easy

```js
// Old way (messy):
const oldWay = "Line 1\n" + "Line 2\n" + "Line 3";

// New way (clean):
const newWay = `Line 1
Line 2
Line 3`;
```

## Problems

1. Use destructuring to extract values from an array
2. Use destructuring to extract properties from an object
3. Use spread operator to combine two arrays
4. Use spread operator to copy an object
5. Use rest operator in a function to collect remaining arguments
6. Use destructuring with default values
7. Use destructuring to swap two variables
8. Use spread operator to create a new array with additional elements
9. Use destructuring to extract nested object properties
10. Use rest operator to collect array elements
11. Use spread operator to merge objects
12. Use destructuring to extract function parameters
13. Use spread operator to pass array elements as function arguments
14. Use destructuring to extract values from a function return
15. Use rest operator to create a function that accepts variable arguments
