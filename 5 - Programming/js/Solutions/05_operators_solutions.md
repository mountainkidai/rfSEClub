## Write a calculator app that does operations (+, -, ×, /, %)

```js
function calculator(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        default:
            return 'Invalid operation';
    }
}
console.log(calculator(10, 5, '+'));
```

## Calculate the sum of n natural numbers using formulae

```js
function sumOfNaturalNumbersFormula(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumOfNaturalNumbersFormula(10));
```

## Calculate the sum of n natural numbers without formulae

```js
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNaturalNumbers(10));
```

## Find the sum of the first N - 5 odd numbers

```js
function sumOfOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i < n; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumOfOddNumbers(15));
```

## Find the sum of the first N even numbers

```js
function sumOfEvenNumbers(n) {
    let sum = 0;
    for (let i = 0; i < n; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumOfEvenNumbers(10));
```

## Find the sum of squares of first N natural numbers

```js
function sumOfSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
}
console.log(sumOfSquares(5));
```

## Find the sum of cubes of first N natural numbers

```js
function sumOfCubes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i * i;
    }
    return sum;
}
console.log(sumOfCubes(3));
```

## Calculate the nth triangular number

```js
function triangularNumber(n) {
    return (n * (n + 1)) / 2;
}
console.log(triangularNumber(5));
```

## Calculate the sum of all divisors of a number

```js
function sumOfDivisors(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfDivisors(12));
```

## Calculate the area of a triangle

```js
function areaOfTriangle(base, height) {
    return (base * height) / 2;
}
console.log(areaOfTriangle(5, 10));
```

## Calculate the area of a circle

```js
function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}
console.log(areaOfCircle(5));
```
