# Debouncing and Throttling in JavaScript

Debouncing and throttling are techniques used to control how often a function runs. They’re especially useful for performance optimization in things like search boxes, window resizing, or scrolling.

When certain events happen very frequently (like typing, scrolling, or resizing), the browser can slow down if a function runs too often. To solve this, we use:

* **Debouncing**: Wait until a pause in activity, then run the function
* **Throttling**: Limit the function to run at most once every X milliseconds

---

## 1. Debouncing

Debouncing delays the execution of a function until a certain amount of **time has passed without the event happening again**.

You’re typing in a search box. You want to fetch suggestions from the server — but **only after the user has stopped typing** for 500ms.

```js
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId); // cancel the last timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const onSearch = debounce(() => {
  console.log("Search triggered");
}, 500);

// simulate typing by calling repeatedly
onSearch();
onSearch();
onSearch(); // Only this one will run after 500ms pause
```

* Each time `onSearch()` is called, the timer resets
* Only the **last** call runs after 500ms of no typing

---

## 2. Throttling

Throttling ensures a function can only run once every set time interval, **even if the event happens more often**.

When scrolling a page, you might want to check position every 200ms to avoid slowing down the browser.

```js
function throttle(func, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      func.apply(this, args);
      lastTime = now;
    }
  };
}

const onScroll = throttle(() => {
  console.log("Scroll event triggered");
}, 200);

// simulate scrolling by calling repeatedly
onScroll();
onScroll();
onScroll(); // Only one will trigger every 200ms
```

### Explanation

* Function runs immediately the first time
* Next calls are ignored until the `interval` has passed

---
