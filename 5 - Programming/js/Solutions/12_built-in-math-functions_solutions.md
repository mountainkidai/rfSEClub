## Find the square root of a number using Math.sqrt()

```js
function squareRoot(num) {
    return Math.sqrt(num);
}
console.log("Square root of 16:", squareRoot(16));
```

## Find the absolute value of a number using Math.abs()

```js
function absoluteValue(num) {
    return Math.abs(num);
}
console.log("Absolute value of -5:", absoluteValue(-5));
```

## Round a number to the nearest integer using Math.round()

```js
function roundNumber(num) {
    return Math.round(num);
}
console.log("Rounded value of 4.7:", roundNumber(4.7));
```

## Find the ceiling of a number using Math.ceil()

```js
function ceilingValue(num) {
    return Math.ceil(num);
}
console.log("Ceiling value of 4.1:", ceilingValue(4.1));
```

## Find the floor of a number using Math.floor()

```js
function floorValue(num) {
    return Math.floor(num);
}
console.log("Floor value of 4.9:", floorValue(4.9));
```

## Generate a random number between 1 and 10 using Math.random()

```js
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random number between 1 and 10:", randomNumber(1, 10));
```

## Find the maximum of two numbers using Math.max()

```js
function maxOfTwo(a, b) {
    return Math.max(a, b);
}
console.log("Maximum of 5 and 10:", maxOfTwo(5, 10));
```

## Find the minimum of two numbers using Math.min()

```js
function minOfTwo(a, b) {
    return Math.min(a, b);
}
console.log("Minimum of 5 and 10:", minOfTwo(5, 10));
```

## Calculate the power of a number using Math.pow()

```js
function power(base, exponent) {
    return Math.pow(base, exponent);
}
console.log("2 raised to the power of 3:", power(2, 3));
```

## Find the natural logarithm of a number using Math.log()

```js
function naturalLog(num) {
    return Math.log(num);
}
console.log("Natural logarithm of 10:", naturalLog(10));
```

## Calculate the sine of an angle using Math.sin()

```js
function sine(angle) {
    return Math.sin(angle);
}
console.log("Sine of 30 degrees:", sine(30 * Math.PI / 180)); 
```

## Calculate the cosine of an angle using Math.cos()

```js
function cosine(angle) {
    return Math.cos(angle);
}
console.log("Cosine of 30 degrees:", cosine(30 * Math.PI / 180));
```

## Calculate the tangent of an angle using Math.tan()

```js
function tangent(angle) {
    return Math.tan(angle);
}
console.log("Tangent of 30 degrees:", tangent(30 * Math.PI / 180));
```

## Convert degrees to radians using Math.PI

```js
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}   
console.log("45 degrees in radians:", degreesToRadians(45));
```

## Generate a random integer between two given numbers

```js
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random integer between 1 and 100:", randomInteger(1, 100));
```
