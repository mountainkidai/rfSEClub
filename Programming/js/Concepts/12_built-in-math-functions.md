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

## Problems

1. Find the square root of a number using Math.sqrt()
2. Find the absolute value of a number using Math.abs()
3. Round a number to the nearest integer using Math.round()
4. Find the ceiling of a number using Math.ceil()
5. Find the floor of a number using Math.floor()
6. Generate a random number between 1 and 10 using Math.random()
7. Find the maximum of two numbers using Math.max()
8. Find the minimum of two numbers using Math.min()
9. Calculate the power of a number using Math.pow()
10. Find the natural logarithm of a number using Math.log()
11. Calculate the sine of an angle using Math.sin()
12. Calculate the cosine of an angle using Math.cos()
13. Calculate the tangent of an angle using Math.tan()
14. Convert degrees to radians using Math.PI
15. Generate a random integer between two given numbers
