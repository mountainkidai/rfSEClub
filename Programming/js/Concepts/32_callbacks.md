# Callbacks in JavaScript

**Callback** – A function passed as an argument to another function, which is then executed inside the outer function to complete a routine or action.

You place a delivery order and give the shop your number. Once the delivery is ready, they **call you back**. You don’t wait at the shop; you go do other things. Similarly, JavaScript can call a function back once a task finishes.

---

## 1. Basic Callback Structure

```js
function greet(name, callback) {
  console.log("Hi, " + name); // First, print a greeting
  callback(); // Then call the provided callback function
}

function askQuestion() {
  console.log("How are you today?"); // This is the callback function
}

greet("Ravi", askQuestion); // Pass the callback function into the greet function
```

**Output:**

```txt
Hi, Ravi
How are you today?
```

* `greet()` is a function that takes two arguments: a name and a callback function.
* `askQuestion()` is defined separately and passed as a callback.
* `callback()` inside `greet()` is a placeholder — it gets replaced by `askQuestion` when the function is called.

---

## 2. Callback in Asynchronous Code

Callbacks are essential when a task takes time, like waiting for a timer, fetching data, or reading a file. You don’t want to stop your program — just get notified when the task is done.

```js
console.log("Start");

setTimeout(function () {
  console.log("This runs later");
}, 2000); // Runs after 2 seconds

console.log("End");
```

**Output:**

```txt
Start
End
This runs later
```

* `setTimeout()` is an example of an asynchronous function.
* It takes two arguments: a **callback function**, and a **delay time** (in milliseconds).
* The callback function is executed after the delay is complete.
* Meanwhile, the program moves on and prints "End" without waiting.

---

## 3. Nested Callbacks and "Callback Hell"

If one async task depends on the result of another, you may end up **nesting** callbacks. This makes code hard to read and maintain.

```js
loginUser("nisha", function(user) {
  getUserProfile(user.id, function(profile) {
    getProfileSettings(profile.id, function(settings) {
      console.log("Done");
    });
  });
});
```

* `loginUser()` logs the user in.
* Inside its callback, `getUserProfile()` uses that user's ID.
* Inside **that** callback, `getProfileSettings()` uses the profile ID.
* Finally, you log "Done" when everything finishes.

This is called **Callback Hell** because:

* The code becomes hard to read due to many layers of nesting
* Errors become difficult to track

```js
loginUser(...,
  getUserProfile(...,
    getProfileSettings(...,
      console.log("Done")
    )
  )
)
```

Imagine you're filling out a government form:

1. First you log in
2. Then you download the profile form
3. Then you fill in a settings form based on your profile
4. Then finally you submit

If any step fails or changes, the whole process breaks — and it's hard to go back and fix it because everything is nested.

This is why **Callback Hell** is a problem.

---

## 4. Drawbacks of Callbacks

* **Readability**: Hard to read and understand deeply nested callbacks
* **Maintainability**: Difficult to make changes without breaking code
* **Error handling**: No built-in error-catching like `try...catch`
* **Scalability**: Managing many nested callbacks quickly becomes messy

---

## 5. Alternatives to Callbacks

Modern JavaScript uses better tools for async tasks:

### a. **Promises**

* A cleaner way to handle async operations
* Provides `.then()` and `.catch()` for handling success and error

### b. **async/await**

* Makes async code look like synchronous code
* Uses `try...catch` for cleaner error handling

---

## Problems
