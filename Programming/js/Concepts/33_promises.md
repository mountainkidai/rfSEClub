# Promises in JavaScript

A **Promise** is a built-in JavaScript object used to handle asynchronous operations. It acts as a placeholder for a value that may not be available yet but will be resolved in the future.

Promises help us deal with asynchronous operations in a more manageable and readable way, especially compared to deeply nested callbacks.

You order a product online. The company gives you a **promise**:

* If everything goes well, the package **will be delivered** (fulfilled).
* If something goes wrong, the package **won’t arrive** (rejected).

You don’t get the result immediately — you get a *promise* that something will happen later.

## Why Use Promises?

* To avoid **callback hell**
* To write cleaner, more readable asynchronous code
* To chain multiple asynchronous steps easily

---

## 1. States of a Promise

A Promise can be in one of **three states**:

* **Pending**: The initial state. The operation is still happening (e.g., fetching data).
* **Fulfilled (Resolved)**: The operation completed successfully.
* **Rejected**: The operation failed.

These states help JavaScript know whether to proceed or handle errors.

---

## 2. Creating a Promise

```js
const myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulate condition

  if (success) {
    resolve("Order delivered!"); // Mark promise as fulfilled
  } else {
    reject("Delivery failed.");  // Mark promise as rejected
  }
});
```

* A new `Promise` takes a function with two parameters: `resolve` and `reject`.
* Use `resolve(value)` when the async task is successful.
* Use `reject(error)` when something goes wrong.
* You can replace `success = true` with any logic — like a response from an API, a file being read, etc.

---

## 3. Consuming a Promise using .then and .catch

```js
myPromise
  .then((message) => {
    console.log("Success:", message); // Runs if promise is fulfilled
  })
  .catch((error) => {
    console.log("Error:", error); // Runs if promise is rejected
  })
  .finally(() => {
    console.log("Operation complete"); // Always runs
  });
```

* `.then()` receives the value from `resolve()`
* `.catch()` receives the error from `reject()`
* `.finally()` always runs, useful for cleanup tasks (e.g., hiding a loader)

---

## 4. Example: Simulating a Delayed Task

```js
function fakeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Your chai has arrived!");
    }, 3000); // Delay by 3 seconds
  });
}

fakeOrder()
  .then((msg) => console.log(msg))
  .catch((err) => console.log("Error:", err));
```

* The `fakeOrder()` function returns a promise
* `setTimeout()` simulates a 3-second delay
* After the delay, `resolve()` sends the message
* `.then()` gets the resolved value and logs it

**Output (after 3 seconds):**

```txt
Your chai has arrived!
```

---

## 5. Promise.all and Promise.race

### a. `Promise.all([])` – Wait for all

```js
Promise.all([
  Promise.resolve("Tea ready"),
  Promise.resolve("Snacks ready")
])
.then((results) => console.log(results))
.catch((err) => console.log("Error:", err));
```

* Takes an array of promises
* Waits for **all** to finish successfully
* If even one fails, it goes to `.catch()`

**Output:**

```txt
["Tea ready", "Snacks ready"]
```

### b. `Promise.race([])` – First to finish wins

```js
Promise.race([
  new Promise((res) => setTimeout(() => res("Tea"), 2000)),
  new Promise((res) => setTimeout(() => res("Snacks"), 1000))
])
.then((result) => console.log("First ready:", result));
```

* Takes an array of promises
* Resolves/rejects as soon as the **first** one finishes
* Useful for timeouts or prioritizing faster tasks

**Output:**

```txt
First ready: Snacks
```
