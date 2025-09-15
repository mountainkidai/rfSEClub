# JavaScript Performance Optimization

Optimizing performance is crucial to ensure your web application runs smoothly, loads fast, and consumes fewer resources. This involves strategies both at the code level and during runtime.

---

## 1. Lazy Loading

**Definition:**
Lazy loading is a design pattern that delays the loading of non-critical resources (e.g., images, modules, scripts) until they are needed.

**Example (Image Lazy Loading in HTML):**

```html
<img src="image.jpg" loading="lazy" alt="...">
```

**Example (Dynamic Import in JS):**

```js
button.addEventListener('click', async () => {
  const module = await import('./module.js');
  module.doSomething();
});
```

**Why Use It:**

* Reduces initial load time
* Improves time-to-interactive (TTI)

---

## 2. Memoization

**Definition:**
Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.

**Example:**

```js
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = args.join(',');
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const slowFunction = (x) => x * 1000;
const fastFunction = memoize(slowFunction);

console.log(fastFunction(5)); // Calculates
console.log(fastFunction(5)); // Returns cached
```

---

## 3. Minimizing Reflows and Repaints

**Definition:**

* **Reflow** occurs when changes in the DOM require layout recalculations (e.g., changing element dimensions).
* **Repaint** happens when changes affect visibility or appearance but not layout (e.g., color changes).

**Optimization Tips:**

* Batch DOM changes (use DocumentFragment or CSS classes)
* Avoid inline styles or frequent layout reads (like `.offsetHeight` inside loops)
* Use `requestAnimationFrame` for animations

**Bad:**

```js
for (let i = 0; i < 1000; i++) {
  element.style.left = `${i}px`;
}
```

**Good:**

```js
requestAnimationFrame(() => {
  element.style.left = '1000px';
});
```

---

## 4. Code Splitting

**Definition:**
Code splitting allows you to split your codebase into smaller chunks so that only the necessary code is loaded.

**Example (Using Webpack):**

```js
// Instead of importing everything at once
import('./bigModule.js').then(module => {
  module.run();
});
```

**Why Use It:**

* Reduces bundle size
* Improves initial load time

---

## Summary Table

| Technique        | Purpose                              |
| ---------------- | ------------------------------------ |
| Lazy Loading     | Load resources only when needed      |
| Memoization      | Cache expensive function results     |
| Minimize Reflows | Reduce layout recalculations         |
| Code Splitting   | Serve only needed JS per interaction |

## Problems
