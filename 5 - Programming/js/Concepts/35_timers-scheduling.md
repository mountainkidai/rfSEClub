# Timers & Scheduling in JavaScript

JavaScript provides built-in functions for scheduling code to run after a delay or repeatedly at fixed intervals. These are often used in animations, updates, polling APIs, and delayed actions.

There are four main timer-related functions:

* `setTimeout()` – Runs a function once after a specified delay
* `setInterval()` – Repeats a function at regular intervals
* `clearTimeout()` – Cancels a scheduled `setTimeout()`
* `clearInterval()` – Cancels a repeating `setInterval()`

---

## 1. `setTimeout()` – Run after a delay

```js
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("End");
```

* `setTimeout()` takes two arguments:

  1. A function to run
  2. Time to wait in milliseconds (1000 ms = 1 sec)
* The code inside `setTimeout` will run **after** the given time
* Other code continues running — it does **not block**

**Output:**

```txt
Start
End
This runs after 2 seconds
```

---

## 2. `setInterval()` – Run repeatedly

```js
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Repeating every second. Count:", count);

  if (count === 5) {
    clearInterval(intervalId); // stop after 5 times
  }
}, 1000);
```

* `setInterval()` runs the function again and again every 1000ms (1 sec)
* `clearInterval()` is used to stop it when you’re done

---

## 3. `clearTimeout()` – Cancel a timeout

```js
const timeoutId = setTimeout(() => {
  console.log("This will not run");
}, 3000);

clearTimeout(timeoutId); // Cancel before it runs
```

* `setTimeout()` returns an ID
* You can pass that ID to `clearTimeout()` to cancel the scheduled code
* Nothing will be logged in this example

---

## 4. Example: Countdown Timer

```js
let timeLeft = 5;

const timer = setInterval(() => {
  console.log("Time left:", timeLeft);
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer);
    console.log("Countdown finished!");
  }
}, 1000);
```

* Prints time every second
* Stops when it reaches 0

## Problems
