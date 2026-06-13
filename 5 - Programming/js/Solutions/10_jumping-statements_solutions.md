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

## Print all numbers from 1 to 20, but skip multiples of 3

```js
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
```

## Print all numbers from 1 to 20, but stop when you reach 15

```js
for (let i = 1; i <= 20; i++) {
    if (i === 15) {
        break;
    }
    console.log(i);
}
```

## Print all even numbers from 1 to 20, but skip 10

```js
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0 && i !== 10) {
        console.log(i);
    }
}
```

## Print all numbers from 1 to 10, but return early if you find 7

```js
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        return;
    }
    console.log(i);
}
```

## Print all numbers from 1 to 15, but break when you find a number divisible by 7

```js
for (let i = 1; i <= 15; i++) {
    if (i % 7 === 0) {
        break;
    }
    console.log(i);
}
```

## Print all numbers from 1 to 20, but continue if the number is odd

```js
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}
```

## Print all numbers from 1 to 25, but break if you find a perfect square

```js
for (let i = 1; i <= 25; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
        break;
    }
    console.log(i);
}
```

## Print all numbers from 1 to 30, but skip numbers that are multiples of both 3 and 5

```js
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        continue;
    }
    console.log(i);
}
```
