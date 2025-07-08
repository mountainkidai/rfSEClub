# JavaScript Closures

A **closure** is when a function “remembers” the variables from the place where it was created, even after that place is gone.

## Key Concepts and Syntax

### 1. Creating a Closure

A closure is formed when a function is returned from another function and still has access to the outer function’s variables.

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log("Count:", count);
  };
}

const counter = outer();
counter(); // Count: 1
counter(); // Count: 2
```

The `inner` function keeps access to `count` even after `outer` has finished running.

### 2. Data Privacy with Closures

Closures allow us to hide variables from the outside world.

```js
function createUser(name) {
  return function greet() {
    console.log("Welcome, " + name);
  };
}

const greetRiya = createUser("Riya");
greetRiya(); // Output: Welcome, Riya
```

Here, `name` is not accessible outside `createUser`, but `greet` still remembers it.

### 3. Closures in Loops

Without closures, loop-based functions may behave unexpectedly:

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // Output: 4, 4, 4
  }, 1000);
}
```

Fix using closure:

```js
for (var i = 1; i <= 3; i++) {
  (function(num) {
    setTimeout(function() {
      console.log(num); // Output: 1, 2, 3
    }, 1000);
  })(i);
}
```

Or using `let` (which creates block scope):

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // Output: 1, 2, 3
  }, 1000);
}
```
