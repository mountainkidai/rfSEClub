# JavaScript Function Types

A **function** is a reusable block of code that performs a specific task. Instead of repeating code, you can wrap it inside a function and call it whenever needed.

Real-world analogy: Think of a function as a mixer grinder. You give it input (ingredients), it performs an action (grinding), and returns output (paste or juice).

## Parts of a Function

When you look at a function, you often see `()` and `{}`. Here's what they mean:

* `()` — Parentheses: These are used to list **parameters** (placeholders for input values). If there are no inputs, you still write `()`.

  * Example: `function greet()` — this means the function takes no input.
  * Example: `function greet(name)` — this means the function takes one input called `name`.

* `{}` — Curly Braces: These hold the **function body**, which is the code that runs when the function is called.

  * Everything between the braces is part of the function.

Example:

```js
function greet(name) {        // 'name' is the input
  console.log("Hello, " + name);  // this is the body of the function
}
```

Now let’s explore different ways to write functions.

## Key Concepts and Syntax

### 1. Regular (Named) Functions

This is the most common and traditional way to define a function. It has a name and can be called anywhere in the code (if declared using `function`).

```js
function greet() {
  console.log("Hello!");
}

greet(); // Output: Hello!
```

You can also pass values to functions:

```js
function greetUser(name) {
  console.log("Hello, " + name);
}

greetUser("Priya"); // Output: Hello, Priya
```

### 2. Function Expressions

Here, the function is stored in a variable. The function can be **named** or **anonymous** (without a name).

```js
const sayHi = function() {
  console.log("Hi!");
};

sayHi(); // Output: Hi!
```

Even though it's stored in a variable, you can call it just like a regular function.

### 3. Anonymous Functions

These are functions without a name. They are usually used when you don’t need to refer to the function again.

```js
setTimeout(function() {
  console.log("Time's up!");
}, 2000);
```

Here, the function is used only once and passed directly to `setTimeout`.

### 4. Arrow Functions

Arrow functions are a shorter way to write functions, introduced in modern JavaScript.

```js
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // Output: 5
```

If the function has only one line and returns something, you can make it even shorter:

```js
const square = x => x * x;
console.log(square(4)); // Output: 16
```
