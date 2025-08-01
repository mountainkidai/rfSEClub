# Error Handling in JavaScript

When something goes wrong in JavaScript (like trying to use a value that doesn't exist), an **error** is thrown. If you don’t catch it, the program will stop.

**Error handling** lets you catch and handle these problems so your program doesn’t crash.

If you try to open a file that doesn’t exist, a smart system would show an error message instead of shutting down your computer. That’s what error handling does in JavaScript.

## Key Concepts and Syntax

### 1. `try...catch` – Handle errors safely

```js
try {
  const result = 10 / 0; // Dividing by zero (not technically an error in JS, but unusual)
  console.log("Result:", result); // This will run
} catch (error) {
  console.log("Something went wrong:", error.message); // This won’t run in this case
}
```

* Code inside `try` is attempted.
* If an error occurs in `try`, the `catch` block runs.
* `error` is the error object that gives details.

### 2. Throwing Custom Errors

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero"); // Manually throwing an error
  }
  return a / b; // This runs only if b is not 0
}

try {
  console.log(divide(10, 0)); // This will trigger the error
} catch (e) {
  console.log("Error caught:", e.message); // This handles the thrown error
}
```

* `throw` is used to create your own error.
* If `b` is 0, we stop the function and raise a clear message.
* The `catch` block catches the error and handles it.

### 3. Error Object Properties

```js
try {
  let a = unknownVar; // This variable doesn’t exist
} catch (err) {
  console.log("Error Name:", err.name);     // ReferenceError
  console.log("Message:", err.message);     // unknownVar is not defined
  console.log("Stack:", err.stack);         // Trace of where the error happened
}
```

* `err.name` tells you what kind of error it is (e.g., ReferenceError).
* `err.message` gives the error’s message.
* `err.stack` shows where in the code the error came from.

## Problems
