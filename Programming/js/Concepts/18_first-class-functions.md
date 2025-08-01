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

## Problems

1. Create a function and assign it to a variable
2. Pass a function as an argument to another function
3. Return a function from another function
4. Create a function that takes a function as a parameter
5. Create a function that returns different functions based on input
6. Store multiple functions in an array
7. Create a function that accepts a callback function
8. Create a function that returns a function with specific behavior
9. Pass a function as a property of an object
10. Create a function that can be called immediately after definition
