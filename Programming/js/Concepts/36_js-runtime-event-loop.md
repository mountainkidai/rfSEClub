# JavaScript Runtime and Event Loop

Understanding the JavaScript runtime and event loop is key to mastering asynchronous behavior in JavaScript. It explains why code doesn’t run from top to bottom like you might expect, especially when using `setTimeout`, `fetch`, or `promises`.

JavaScript is **single-threaded**, meaning it runs one task at a time. But thanks to the **event loop**, it can still handle asynchronous tasks (like API calls or delays) without blocking the main thread.

## Key Components

* **Call Stack**: A structure where function calls are stored and executed. Functions are added (pushed) and removed (popped) in a last-in-first-out order.
* **Web APIs** (Browser) or **Node APIs**: Environment-provided features that handle asynchronous tasks like timers, HTTP requests, DOM events.
* **Callback Queue (Task Queue)**: Where functions from asynchronous operations (like `setTimeout`) are queued once ready.
* **Event Loop**: A mechanism that constantly checks if the call stack is empty and if there’s any function waiting in the callback queue or microtask queue to be executed.
* **Microtask Queue**: A special queue for tasks like Promises. It is prioritized over the callback queue.

---

## 1. Call Stack

```js
function greet() {
  console.log("Hello");
}

greet();
```

* `greet()` is called, so it is pushed onto the call stack.
* Inside it, `console.log("Hello")` is also pushed and executed.
* After the `console.log` finishes, it's removed (popped) from the stack.
* Then `greet()` is also removed.

This demonstrates how synchronous (immediate) code is executed using the call stack.

---

## 2. Web API + setTimeout Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 0);

console.log("End");
```

```txt
Start
End
Inside timeout
```

* First, `console.log("Start")` is added to the call stack and executed.
* `setTimeout(...)` is called, but the actual function inside is sent to the Web API for scheduling.
* `console.log("End")` runs next.
* After 0ms (very small delay), the Web API sends the function to the **callback queue**.
* The **event loop** waits for the stack to be empty and then moves the callback to the call stack to be executed.

Even though `setTimeout(..., 0)` has zero delay, it still waits its turn.

---

## 3. Promises and Microtask Queue

```js
console.log("Start");

Promise.resolve().then(() => {
  console.log("Microtask");
});

console.log("End");
```

```txt
Start
End
Microtask
```

* `console.log("Start")` runs.
* `Promise.resolve().then(...)` is added to the **microtask queue**.
* `console.log("End")` runs.
* After the call stack is empty, the event loop checks the microtask queue **before** the callback queue.
* So `console.log("Microtask")` runs next.

**Note:** Microtasks (like `.then()`) have higher priority than `setTimeout` or `setInterval` callbacks.

---

## 4. Complete Flow Example

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

```txt
1
4
3
2
```

### Step-by-step Execution

1. `console.log("1")` → added to stack → prints 1
2. `setTimeout(...)` → Web API schedules it after 0ms
3. `Promise.then(...)` → added to **microtask queue**
4. `console.log("4")` → prints 4
5. Call stack is now empty
6. Event loop checks microtask queue → runs `console.log("3")`
7. Then runs `setTimeout` callback → prints `console.log("2")`

This shows how JavaScript decides **what runs when**, based on queues.
