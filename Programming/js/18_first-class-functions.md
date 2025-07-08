# JavaScript First-Class Functions

In JavaScript, **functions are first-class citizens**. This means they are treated like any other value — you can store them in variables, pass them as arguments to other functions, and return them from functions.

Think of a function like a file on your computer. You can store it, attach it to an email, or send it to someone else. JavaScript treats functions the same way — you can pass them around like regular data.

## Key Concepts and Syntax

### 1. Functions as Values

You can assign a function to a variable, just like a string or number.

```js
const sayHello = function() {
  console.log("Hello!");
};

sayHello(); // Output: Hello!
```

You can also reassign it to another variable:

```js
const greet = sayHello;
greet(); // Output: Hello!
```

### 2. Passing Functions as Arguments

You can pass a function as a parameter to another function.

```js
function callFunction(fn) {
  fn();
}

callFunction(function() {
  console.log("This is passed as an argument.");
});
```

### 3. Returning Functions from Other Functions

A function can return another function.

```js
function outerFunction() {
  return function() {
    console.log("Inner function called.");
  };
}

const inner = outerFunction();
inner(); // Output: Inner function called.
```
