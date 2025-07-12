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
