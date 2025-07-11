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
