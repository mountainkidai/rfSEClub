# JavaScript Modern Array Methods

Modern JavaScript provides powerful methods to work with arrays. These methods let you loop, filter, modify, and reduce data in simple ways.

## Key Methods and Syntax

### 1. `forEach()` – Loop through each item

```js
const names = ["Asha", "Ravi", "Priya"];

names.forEach(function(name) {
  console.log("Hello, " + name);
});
```

**Explanation:**

- `forEach` runs the given function for every element of the array.

- Here, `name` will be "Asha", then "Ravi", then "Priya".

- The output will be:

    ```txt
    Hello, Asha
    Hello, Ravi
    Hello, Priya
    ```

---

### 2. `map()` – Create a new array by transforming each item

```js
const nums = [1, 2, 3];
const doubled = nums.map(function(n) {
  return n * 2;
});

console.log(doubled); // [2, 4, 6]
```

**Explanation:**

- `map` applies the function to each item and returns a **new array**.
- For `1` it returns `2`, for `2` it returns `4`, and so on.
- The original `nums` array is unchanged.

---

### 3. `filter()` – Create a new array with items that match a condition

```js
const marks = [65, 45, 90];
const passed = marks.filter(function(score) {
  return score >= 50;
});

console.log(passed); // [65, 90]
```

**Explanation:**

- `filter` checks each item.
- If `score >= 50`, the item is included.

- Result: `[65, 90]`.

---

### 4. `find()` – Return the first item that matches a condition

```js
const users = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Neha" }
];

const user = users.find(function(u) {
  return u.id === 2;
});

console.log(user); // { id: 2, name: "Neha" }
```

**Explanation:**

- `find` goes through each user until it finds one with `id === 2`.
- It stops and returns that user object.

---

### 5. `reduce()` – Turn array into a single value (like sum)

```js
const numbers = [10, 20, 30];
const total = numbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(total); // 60
```

**Explanation:**

- `reduce` combines values step by step.

- `acc` (accumulator) starts at `0`.

- Steps:
  - `0 + 10 = 10`
  - `10 + 20 = 30`
  - `30 + 30 = 60`
- Final result: `60`.

---

### 6. `some()` – Check if at least one item meets a condition

```js
const ages = [15, 20, 30];
const hasAdult = ages.some(function(age) {
  return age >= 18;
});

console.log(hasAdult); // true
```

**Explanation:**

- `some` returns `true` if **any** item passes the test.

- Here, 20 and 30 are >= 18, so the result is `true`.

---

### 7. `every()` – Check if all items meet a condition

```js
const scores = [80, 85, 90];
const allPassed = scores.every(function(score) {
  return score >= 50;
});

console.log(allPassed); // true
```

**Explanation:**

- `every` returns `true` only if **all** items pass the test.
- Since all scores are >= 50, it returns `true`.

---

### 8. `flat()` – Flatten nested arrays (1 level deep)

```js
const nested = [1, [2, 3], [4]];
const flatArray = nested.flat();

console.log(flatArray); // [1, 2, 3, 4]
```

**Explanation:**

- `flat` merges sub-arrays into a single array, removing one level of nesting.

---

### 9. `flatMap()` – Map and flatten in one step

```js
const arr = [1, 2, 3];
const flatMapped = arr.flatMap(x => [x, x * 2]);

console.log(flatMapped); // [1, 2, 2, 4, 3, 6]
```

**Explanation:**

- For each number `x`, the arrow function returns `[x, x*2]`.

- Then `flatMap` flattens all small arrays into one.

**Example:**

```js
const phrases = ["hi world", "hello js"];
const words = phrases.flatMap(p => p.split(" "));
console.log(words); // ["hi", "world", "hello", "js"]
```

- Each phrase is split into words, and then all words are combined into one array.

---

### 10. `at()` – Get item by index (supports negative index)

```js
const items = ["a", "b", "c"];
console.log(items.at(1));  // b
console.log(items.at(-1)); // c
```

**Explanation:**

- `items.at(1)` gives the second item (`b`).
- `items.at(-1)` gives the last item (`c`).
