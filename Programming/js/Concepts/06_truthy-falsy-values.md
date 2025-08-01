# JavaScript Truthy and Falsy Values

In JavaScript, some values are treated as `true` (truthy) and some as `false` (falsy) when used in a condition like an `if` statement.

## Falsy Values

These values act like `false`:

* `false`
* `0`
* `""` (empty string)
* `null`
* `undefined`
* `NaN` (Not a Number)

```js
if (0) {
  console.log("This won't run");
} else {
  console.log("0 is falsy");
}
```

**Output:**

```txt
0 is falsy
```

## Truthy Values

All other values are truthy, like:

* `true`
* Any number except 0 (like 1, -5)
* Any non-empty string (like "hello")
* Arrays `[]`
* Objects `{}`

```js
if ("hello") {
  console.log("This is truthy");
}
```

**Output:**

```txt
This is truthy
```

## Problems

1. Write an if statement that checks if a variable is truthy
2. Write an if statement that checks if a variable is falsy
3. List all falsy values in JavaScript
4. List three examples of truthy values in JavaScript
5. Check if an empty array is truthy or falsy
6. Check if an empty object is truthy or falsy
7. Check if the string '0' is truthy or falsy
8. Check if the number 0 is truthy or falsy
9. Check if null is truthy or falsy
10. Check if undefined is truthy or falsy
11. Use a variable in an if statement and print whether it is truthy or falsy
12. Use the double NOT operator (!!) to convert a value to boolean and print the result
