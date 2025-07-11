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

* The function runs once for every item in the array.
* `name` represents each item in the array one by one.
* It simply prints a greeting with the name.

### 2. `map()` – Create a new array by transforming each item

```js
const nums = [1, 2, 3];
const doubled = nums.map(function(n) {
  return n * 2;
});

console.log(doubled); // [2, 4, 6]
```

* `map` creates a new array.
* For each number `n`, it multiplies by 2.
* The original array stays the same.

### 3. `filter()` – Create a new array with items that match a condition

```js
const marks = [65, 45, 90];
const passed = marks.filter(function(score) {
  return score >= 50;
});

console.log(passed); // [65, 90]
```

* `filter` returns only items that match a condition.
* Here, we keep only the marks that are 50 or above.

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

* `find` looks for the first matching item.
* It stops searching after the first match.

### 5. `reduce()` – Turn array into a single value (like sum)

```js
const numbers = [10, 20, 30];
const total = numbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(total); // 60
```

* `reduce` combines items into one value.
* `acc` is the running total (accumulator), `curr` is the current item.
* It starts from 0 and adds each number to the total.

### 6. `some()` – Check if at least one item meets a condition

```js
const ages = [15, 20, 30];
const hasAdult = ages.some(function(age) {
  return age >= 18;
});

console.log(hasAdult); // true
```

* `some` returns true if any value passes the test.
* In this case, it checks if there is at least one adult (18 or older).

### 7. `every()` – Check if all items meet a condition

```js
const scores = [80, 85, 90];
const allPassed = scores.every(function(score) {
  return score >= 50;
});

console.log(allPassed); // true
```

* `every` returns true only if all values pass the test.
* Here, it checks that every score is at least 50.

### 8. `flat()` – Flatten nested arrays (1 level deep)

```js
const nested = [1, [2, 3], [4]];
const flatArray = nested.flat();

console.log(flatArray); // [1, 2, 3, 4]
```

* `flat` removes one level of nested arrays.
* It joins sub-arrays into the main array.

### 9. `flatMap()` – Map and flatten in one step

```js
const arr = [1, 2, 3];
const flatMapped = arr.flatMap(x => [x, x * 2]);

console.log(flatMapped); // [1, 2, 2, 4, 3, 6]
```

* First, it maps: turns each number into two values (original and double).
* Then, it flattens the result into a single array.

### 10. `at()` – Get item by index (supports negative index too)

```js
const items = ["a", "b", "c"];
console.log(items.at(1));  // b
console.log(items.at(-1)); // c
```

* `at()` works like indexing, but supports negative numbers.
* `-1` gives the last item, `-2` gives the second last, etc.
