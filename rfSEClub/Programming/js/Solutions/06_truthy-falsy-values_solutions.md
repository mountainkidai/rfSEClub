## Write an if statement that checks if a variable is truthy

```js
let variable = "Hello, World!";
if (variable) {
    console.log("The variable is truthy.");
}
else {
    console.log("The variable is falsy.");
}
```

## Write an if statement that checks if a variable is falsy

```js
let falsyVariable = 0;
if (!falsyVariable) {
    console.log("The variable is falsy.");
}
```

## List all falsy values in JavaScript

```js
const falsyValues = [false, 0, "", null, undefined, NaN];
console.log("Falsy values in JavaScript:", falsyValues);
## List three examples of truthy values in JavaScript
const truthyValues = [true, 1, "Hello"];
console.log("Truthy values in JavaScript:", truthyValues);
```

## Check if an empty array is truthy or falsy

```js
const emptyArray = [];
if (emptyArray) {
    console.log("The empty array is truthy.");
}
```

## Check if an empty object is truthy or falsy

```js
const emptyObject = {};
if (emptyObject) {
    console.log("The empty object is truthy.");
}
```

## Check if the string '0' is truthy or falsy

```js
const stringZero = "0";
if (stringZero) {
    console.log("The string '0' is truthy.");
}
```

## Check if the number 0 is truthy or falsy

```js
const numberZero = 0;
if (!numberZero) {
    console.log("The number 0 is falsy.");
}
```

## Check if null is truthy or falsy

```js
const nullValue = null;
if (!nullValue) {
    console.log("null is falsy.");
}
```

## Check if undefined is truthy or falsy

```js
const undefinedValue = undefined;
if (!undefinedValue) {
    console.log("undefined is falsy.");
}
```

## Use a variable in an if statement and print whether it is truthy or falsy

```js
let myVariable = "Hello";
if (myVariable) {
    console.log("myVariable is truthy.");
}else {
    console.log("myVariable is falsy.");
}
```

## Use the double NOT operator (!!) to convert a value to boolean and print the result

```js
let myVariable = "Hello";
console.log("Boolean value of myVariable:", !!myVariable);
```
