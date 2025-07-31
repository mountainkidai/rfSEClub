# JavaScript Callback Functions

A **callback function** is a function that is passed into another function as an argument and is run (called) later, usually after some operation is completed.

Real-world analogy: Think of ordering food at a restaurant. You place an order (main function), and once the food is ready, the waiter brings it to you (callback function). You don’t need to stand and wait — you’ll be notified when it’s done.

Callbacks are commonly used for things that take time, like loading data, responding to events, or waiting for user input.

## Key Concepts and Syntax

### 1. Basic Callback Usage

```js
function greet(name) {
  console.log("Hello, " + name);
}

function processUser(callback) {
  const userName = "Kiran";
  callback(userName); // calling the passed function
}

processUser(greet); // Output: Hello, Kiran
```

Here, `greet` is passed as a **callback** to `processUser`.

### 2. Using Anonymous Functions as Callbacks

Instead of naming the callback, you can define it directly where it’s passed:

```js
setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);
```

This is useful when the function is short or used only once.

### 3. Callbacks with Arrays

Array methods like `forEach`, `map`, and `filter` use callbacks:

```js
const numbers = [1, 2, 3];
numbers.forEach(function(num) {
  console.log(num * 2); // Output: 2, 4, 6
});
```

The function inside `forEach` is the callback that runs for each item in the array.

### 4. Passing Variables, Arrays, or Objects to Callbacks

```js
function showUser(user) {
  console.log("User: " + user.name);
}

const userObj = { name: "Deepak" };

function getUser(callback) {
  // simulate getting user data
  callback(userObj);
}

getUser(showUser); // Output: User: Deepak
```

## Uses

* Helps handle asynchronous operations (things that take time)
* Keeps your code modular and organized
* Common in handling events, timers, file reading, API calls, etc.
