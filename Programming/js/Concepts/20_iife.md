# JavaScript IIFE (Immediately Invoked Function Expression)

An **IIFE** (Immediately Invoked Function Expression) is a function that runs as soon as it is defined. It is used to execute code right away and often to keep variables private.

## Syntax

An IIFE has two sets of parentheses:

1. The first `()` wraps the function definition.
2. The second `()` immediately calls the function.

```js
(function() {
  console.log("This runs immediately");
})();
```

Or with arrow function:

```js
(() => {
  console.log("Arrow IIFE");
})();
```

## Example with Parameters

You can also pass arguments to an IIFE:

```js
(function(name) {
  console.log("Hello, " + name);
})("Suman");
```

## Problems

1. Create an IIFE that prints "Hello World"
2. Create an IIFE that takes a parameter and prints it
3. Create an IIFE that returns a value
4. Create an IIFE that creates a private variable
5. Create an IIFE that returns a function
6. Create an IIFE with arrow function syntax
7. Create an IIFE that takes multiple parameters
8. Create an IIFE that performs a calculation
9. Create an IIFE that creates an object
10. Create an IIFE that creates an array
