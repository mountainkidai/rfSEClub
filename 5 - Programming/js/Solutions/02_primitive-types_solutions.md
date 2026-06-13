## Create variables of each primitive type (number, string, boolean, undefined, null)

```js
let numberVar = 42; 
let stringVar = "Hello, World!"; 
let booleanVar = true; 
let undefinedVar; 
let nullVar = null; 
```

## Check the type of a variable using typeof operator

```js
let numberVar = 42; 
let stringVar = "Hello, World!"; 
let booleanVar = true; 
let undefinedVar; 
let nullVar = null; 
console.log(typeof numberVar);
console.log(typeof stringVar);
console.log(typeof booleanVar);
console.log(typeof undefinedVar);
console.log(typeof nullVar);
```

## Convert a string to a number using Number()

```js
let str = "123";
let num = Number(str);
console.log(num); 
```

## Convert a number to a string using String()

```js
let numb = "123";
let strn = String(numb);
console.log(strn); 
```

## Convert a string to a boolean using Boolean()

```js
let strBool = "true";
let bool = Boolean(strBool);
console.log(bool);
```

## Check if a variable is undefined

```js
let myVar;
if (typeof myVar === 'undefined') {
    console.log("myVar is undefined");
}
```

## Check if a variable is null

```js
let myNullVar = null;
if (myNullVar === null) {
    console.log("myNullVar is null");
}
```

## Create a string with different quote types (single, double, backticks)

```js
let singleQuoteString = 'This is a string with single quotes';
let doubleQuoteString = "This is a string with double quotes";
let templateLiteralString = `This is a string with backticks`;
```

## Create a number with decimal places

```js
let decimalNumber = 3.14;
```

## Create a boolean variable and use it in a condition

```js
let isTrue = true;
if (isTrue) {
    console.log("The condition is true");
}
```
