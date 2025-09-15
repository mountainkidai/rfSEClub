
## Printing 1 to 10 numbers using for loop

```js
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

## Printing 1 to 10 numbers using while loop

```js
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
```

## Printing 10 to 1 numbers using for loop

```js
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

## Printing 10 to 1 numbers using while loop

```js
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}
```

## Print 1 to 10, using for loop but if your number is 5, stop the loop and print "TICKETS ARE OVER"

```js
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("TICKETS ARE OVER");
        break;
    }
    console.log(i);
}
```

## Print 1 to 10 numbers using for loop but if number is 5 print "SKIPPING NUMBER 5"

```js
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("SKIPPING NUMBER 5");
        continue;
    }
    console.log(i);
}
```

## Printing 2 table up to 2 X 10 = 20 with for loop

```js
for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}
```

## Printing 2 table up to 2 X 10 = 20 with while loop

```js
let k = 1;
while (k <= 10) {
    console.log(`2 x ${k} = ${2 * k}`);
    k++;
}
```

## Printing n table with for loop

```js
for (let i = 1; i <= 10; i++) {
    console.log(`n x ${i} = ${n * i}`);
}
```

## Print all numbers divisible by 4 between 1 and 100

```js
for (let i = 1; i <= 100; i++) {
    if (i % 4 === 0) {
        console.log(i);
    }
}
```

## Print all numbers that are multiples of 6 up to N using a loop

```js
function multiplesOfSix(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 6 === 0) {
            console.log(i);
        }
    }
}
multiplesOfSix(60);
```

## Print up to n prime numbers (Note: 2<=n<=100)

```js
function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}
printPrimes(100);
```

## Print a pattern of stars (e.g., triangle or pyramid pattern)

```js
for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars);
}
```

## Print a pyramid pattern of numbers (e.g., 1, 1 2, 1 2 3)

```js
for (let i = 1; i <= 5; i++) {
    let numbers = '';
    for (let j = 1; j <= i; j++) {
        numbers += j + ' ';
    }
    console.log(numbers);
}
```

## Print a reverse pyramid pattern of stars

```js
for (let i = 5; i >= 1; i--) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars);
}
```

## Write a program to print a right-angled triangle pattern using numbers

```js
for (let i = 1; i <=5; i++){
    let numbers = '';
    for (let j=1; j <= i; j++){
        numbers += j + ' ';
    }
    console.log(numbers);
}
```

## Print the multiplication table of a given number

```js
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplicationTable(3);
```

## Printing n table up to m factor

```js
function printTableUpToM(n, m) {
    for (let i = 1; i <= m; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
printTableUpToM(4, 6);
```

## Printing tables between m and n (e.g., print 2 to 5 tables)

```js
function printTablesBetween(m, n) {
    for (let i = m; i <= n; i++) {
        console.log(`Table of ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log('');
    }
}
printTablesBetween(2, 5);
```

## Left Increasing star pattern

```js
for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars);
}
```

## Left decreasing star pattern

```js
for (let i = 5; i >= 1; i--) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars);
}
```

## Right increasing star pattern

```js
for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let j = 1; j <= 5 - i; j++) {
        stars += ' ';
    }
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars);
}
```

## Right decreasing star pattern

```js
for (let i = 5; i >= 1; i--) {
    let stars = '';
    for (let j = 1; j <= 5 - i; j++) {
        stars += ' ';
    }
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars);
}
```

## Print all prime numbers between 1 and N using a for loop

```js
function printPrimesUpToN(n) {
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}
printPrimesUpToN(50);
```

## Implement a program to print the Fibonacci series using a while loop

```js
function fibonacciWhileLoop(n) {
    let a = 0, b = 1, count = 0;
    while (count < n) {
        console.log(a);
        let temp = a;
        a = b;
        b = temp + b;
        count++;
    }
}
fibonacciWhileLoop(10);
```

## Print the sum of all even numbers up to N

```js
function sumEvenNumbers(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    console.log(`Sum of even numbers up to ${n}: ${sum}`);
}
sumEvenNumbers(10);
```

## Print the sum of all odd numbers up to N

```js
function sumOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    console.log(`Sum of odd numbers up to ${n}: ${sum}`);
}
sumOddNumbers(10);
```

## Print the factorial of a number using a while loop

```js
function factorialWhileLoop(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    console.log(`Factorial of ${n}: ${result}`);
}
factorialWhileLoop(5);
```

## Find the largest prime factor of a number using a for loop

```js
function largestPrimeFactor(n) {
    let largest = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            largest = i;
            n /= i;
        }
    }
    if (n > 1) {
        largest = n;
    }
    console.log(`Largest prime factor: ${largest}`);
}
largestPrimeFactor(13195);
```

## Write a program that prints all divisors of a number using a for loop

```js
function printDivisors(n) {
    console.log(`Divisors of ${n}:`);
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
}
printDivisors(28);
```

## Calculate the nth Fibonacci number using iteration

```js
function fibonacciIterative(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return n === 0 ? a : b;
}
console.log(`Fibonacci number at position 10: ${fibonacciIterative(10)}`);
```

## Write a program to reverse a string using a loop

```js
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(`Reversed string: ${reverseString("Hello World")}`);
```

## Implement a program to count the number of digits in a number using a loop

```js
function countDigitsInNumber(num) {
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}
console.log(`Number of digits: ${countDigitsInNumber(12345)}`);
```

## Write a program to find the sum of the digits of a number using a while loop

```js
function sumOfDigitsWhileLoop(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(`Sum of digits: ${sumOfDigitsWhileLoop(12345)}`);
```

## Implement a program to check whether a number is an Armstrong number using a while loop

```js
function isArmstrongNumber(num) {
    let sum = 0;
    const digits = String(num).length;
    let temp = num;
    
    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    
    return sum === num;
}
console.log(`Is Armstrong number: ${isArmstrongNumber(153)}`);
```

## Implement a program that calculates the sum of first N even numbers using a for loop

```js
function sumOfEvenNumbersForLoop(n) {
    let sum = 0;
    for (let i = 0; i < n; i += 2) {
        sum += i;
    }
    return sum;
}
```

## Write a program that calculates the sum of the first N odd numbers using a for loop

```js
function sumOfOddNumbersForLoop(n) {
    let sum = 0;
    for (let i = 1; i < n; i += 2) {
        sum += i;
    }
    return sum;
}
```

## Create a program to generate a number triangle (like Pascal's triangle) using loops

```js
function generateNumberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}
```

## Implement a program that calculates the sum of cubes of numbers from 1 to N

```js
function sumOfCubes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i * i;
    }
    return sum;
}
```

## Write a program to print a table for factorial calculation

```js
function factorialTable(n) {
    console.log(`Factorial Table up to ${n}:`);
    for (let i = 0; i <= n; i++) {
        console.log(`${i}! = ${factorial(i)}`);
    }
}
```

## Calculate the nth triangular number using a while loop

```js
function triangularNumberWhileLoop(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}
```

## Print the Fibonacci series using a for loop

```js
function fibonacciForLoop(n) {
    let a = 0, b = 1;
    console.log(a);
    for (let i = 1; i < n; i++) {
        console.log(b);
        const temp = a;
        a = b;
        b = temp + b;
    }
}
```

## Implement a program to find whether a number is even or odd using a ternary operator

```js
function isEvenOrOdd(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}
console.log(`Number 5 is: ${isEvenOrOdd(5)}`);
```

## Write a program that outputs the sum of even and odd numbers separately for the first N numbers

```js
function sumEvenOdd(n) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }
    console.log(`Sum of even numbers: ${evenSum}`);
    console.log(`Sum of odd numbers: ${oddSum}`);
}
```

## Implement a program to check if a number is a prime using a loop

```js
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
```
