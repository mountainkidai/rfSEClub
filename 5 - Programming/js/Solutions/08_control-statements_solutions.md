
## Find the largest of three numbers (a, b, c)

```js
function largestOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log(largestOfThree(10, 20, 30));
```

## Find out whether a number is even or odd

```js
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEvenOrOdd(10));
```

## Find the smallest of three numbers (a, b, c)

```js
function smallestOfThree(a, b, c) {
    return Math.min(a, b, c);
}
console.log(smallestOfThree(10, 20, 30));
```

## Check if a number is divisible by 2

```js
function isDivisibleBy2(num) {
    return num % 2 === 0;
}
console.log(isDivisibleBy2(10));
```

## Check if a number is divisible by 3

```js
function isDivisibleBy3(num) {
    return num % 3 === 0;
}
console.log(isDivisibleBy3(9));
```

## Check if a number is divisible by 5

```js
function isDivisibleBy5(num) {
    return num % 5 === 0;
}
console.log(isDivisibleBy5(10));
```

## Find the greatest of four numbers

```js
function findGreatestOfFour(a, b, c, d) {
    return Math.max(a, b, c, d);
}
console.log(findGreatestOfFour(1, 2, 3, 4));
```

## Find the smallest of four numbers

```js
function findSmallestOfFour(a, b, c, d) {
    return Math.min(a, b, c, d);
}
console.log(findSmallestOfFour(1, 2, 3, 4));
```

## Check if a number is a power of 2

```js
function isPowerOf2(num) {
    return (num & (num - 1)) === 0;
}
console.log(isPowerOf2(16));
```

## Check if a number is a perfect square

```js
function isPerfectSquare(num) {
    const sqrt = Math.sqrt(num);
    return sqrt * sqrt === num;
}
console.log(isPerfectSquare(16));
```
