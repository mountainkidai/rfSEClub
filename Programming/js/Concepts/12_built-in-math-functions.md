# JavaScript Built-in Math Functions

JavaScript has a `Math` object that includes lots of helpful math functions. Here are the most common ones:

## 1. `Math.round()`

Rounds a number to the nearest integer.

```js
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.3)); // 4
```

## 2. `Math.floor()`

Rounds a number **down** to the nearest integer.

```js
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4
```

## 3. `Math.ceil()`

Rounds a number **up** to the nearest integer.

```js
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5
```

## 4. `Math.random()`

Returns a random number between `0` and `1` (not including 1).

```js
console.log(Math.random()); // Output: a decimal like 0.7243 (changes each time)
```

To get a random number between 1 and 10:

```js
let rand = Math.floor(Math.random() * 10) + 1;
console.log(rand); // 1 to 10
```

## 5. `Math.max()` and `Math.min()`

Find the largest or smallest number from a list.

```js
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10
```

## 6. `Math.pow()`

Raises a number to a power.

```js
console.log(Math.pow(2, 3)); // 8 (2 × 2 × 2)
```

## 7. `Math.sqrt()`

Returns the square root of a number.

```js
console.log(Math.sqrt(25)); // 5
```

***

🔗 **More on MDN:** [JavaScript Math Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
