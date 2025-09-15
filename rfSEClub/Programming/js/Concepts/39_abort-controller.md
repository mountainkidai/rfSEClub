# AbortController: Canceling Fetch Requests in JavaScript

AbortController is a browser feature that allows you to cancel fetch requests before they complete. This is useful when:

* The user types fast in a search box and you only want to send the latest request
* A component unmounts in a web app before the fetch finishes

By default, once a `fetch()` is started, it can’t be stopped. If you send multiple fetch requests quickly, older ones may still continue running — even if you no longer need them. This wastes time, data, and can lead to unexpected results.

`AbortController` fixes this by giving you a way to cancel a fetch manually.

---

## 1. Basic Syntax

```js
const controller = new AbortController(); // Create a controller
const signal = controller.signal; // Get the signal to attach to fetch

fetch("https://api.example.com/data", { signal }) // Attach signal to fetch
  .then((response) => response.json()) // If response is successful, convert it to JSON
  .then((data) => console.log(data)) // Log the JSON data
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Fetch was canceled"); // If aborted, show cancel message
    } else {
      console.error("Other error:", error); // If another error, log it
    }
  });

controller.abort(); // Cancels the fetch before it finishes
```

### Explanation

* `AbortController()` creates a controller with a special signal object.
* You pass this signal in the fetch options using `{ signal }`.
* If you call `controller.abort()`, it stops the fetch request from completing.
* The `.catch()` block will receive an error — if it was due to the abort, its `name` will be `"AbortError"`.

---

## 2. Real Example: Typing in Search Box

```js
let controller; // Used to store current controller

function onSearchInput(query) {
  if (controller) controller.abort(); // Cancel any previous request

  controller = new AbortController(); // Create a new controller for the new request

  fetch(`https://api.example.com/search?q=${query}`, { signal: controller.signal })
    .then(res => res.json()) // Convert response to JSON
    .then(data => console.log("Results:", data)) // Log the result
    .catch(err => {
      if (err.name === "AbortError") {
        console.log("Previous request canceled"); // It was canceled intentionally
      } else {
        console.error(err); // Handle other types of errors
      }
    });
}

// Simulate fast typing
onSearchInput("hello");
onSearchInput("hello w");
onSearchInput("hello wo"); // Only the last one completes
```

### Step-by-step Explanation

1. User types a character.
2. `onSearchInput()` runs and cancels any ongoing request.
3. A new `AbortController` is created for this request.
4. `fetch()` begins, using the `signal` from the new controller.
5. If the user types again quickly:

   * The new call cancels the last one.
   * Only the final request after the user pauses will complete.

This pattern helps prevent unnecessary work and outdated results.

---

## Summary

* `AbortController` helps cancel fetch requests
* Prevents outdated network requests from interfering
* Useful for search inputs, form changes, or canceling fetches on navigation

## Problems
