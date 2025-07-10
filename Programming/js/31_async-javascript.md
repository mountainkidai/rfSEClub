# Asynchronous JavaScript

JavaScript is a single-threaded language — it can only do **one thing at a time**. This is known as **synchronous** behavior. However, many real-world tasks (like reading a file, making a network request, or waiting for user input) take time. To avoid freezing the browser or blocking other operations, JavaScript provides **asynchronous** features that allow multitasking behavior.

* **Synchronous**: Imagine making tea step-by-step — boil water, add tea, pour into a cup, then drink. You wait for one step to finish before starting the next.

* **Asynchronous**: Imagine ordering tea and while it's being made, you continue chatting or reading. Once it’s ready, someone notifies you.

---

## 1. Synchronous Programming in JavaScript

JavaScript normally runs code in order — line by line. Each line blocks the next until it's finished.

```js
console.log("First");
console.log("Second");
console.log("Third");
```

**Output:**

```txt
First
Second
Third
```

Even loops follow this order:

```js
let last_number = 5;
for (let cn = 1; cn < last_number; cn++) {
  console.log("current number is", cn);
}
console.log("program execution completed");
```

Even if the loop takes time (e.g., with `last_number = 500000`), the final message won't print until the loop finishes.

### Problem with Synchronous Code

If one task takes too long (like a heavy loop or file read), everything else is paused — this is called **blocking**.

```js
console.log("Starting loop...");
for (let i = 0; i < 1e9; i++) {} // Heavy computation
console.log("Good Morning"); // This waits until the loop finishes
```

---

## 2. Asynchronous Programming

JavaScript avoids blocking using features like `setTimeout`, `fetch`, or `async/await`.

### Non-blocking Example

```js
console.log("Start");
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
console.log("End");
```

**Output:**

```txt
Start
End
This runs after 2 seconds
```

The `setTimeout()` tells the browser to run the callback after 2 seconds — without stopping the rest of the code.

### Using async/await

```js
console.log("Start");

const wait = async () => {
  console.log("Waiting...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Done waiting!");
};

wait();
console.log("End");
```

**Output:**

```txt
Start
Waiting...
End
Done waiting!
```

The `await` pauses only inside its function, letting the rest of the code run.

---

## 3. JavaScript Runtime: Event Loop & Web APIs

JavaScript uses these key components to handle async operations:

### a. Call Stack

Where JS keeps track of functions. When a function is called, it's added to the stack. When done, it's removed.

### b. Web APIs (Browser APIs)

Functions like `setTimeout`, DOM events, etc. When called, the browser handles them outside the call stack.

### c. Callback Queue

After the Web API finishes, the callback function is added here.

### d. Event Loop

Constantly checks if the call stack is empty. If so, it moves the first function from the callback queue to the stack.

### Main Thread → Web APIs → Callback Queue → Event Loop → Main Thread

---

## 4. Code Example: Timer vs Sync Task

### a. Simple Timer

```js
let time = 10;
console.log("starting timer");

function printTimer() {
  if (time <= 0) {
    console.log("time up");
    clearInterval(timeInterval);
  } else {
    console.clear();
    console.log(time--);
  }
}

let timeInterval = setInterval(printTimer, 1000);
```

**Output:** Counts down from 10 every second

### b. Timer with Sync Task

```js
let time = 10;
console.log("starting timer");

function printTimer() {
  if (time <= 0) {
    console.log("time up");
    clearInterval(timeInterval);
  } else {
    console.clear();
    console.log(time--);
  }
}
let timeInterval = setInterval(printTimer, 1000);

// Heavy synchronous task
let counter = 1;
for (let i = 0; i < 1000000000; i++) {
  counter++;
}
console.log(counter);
```

**Output:** Counter prints **before** the timer starts — because the loop blocks everything

---
