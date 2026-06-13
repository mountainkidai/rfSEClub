
## Create a variable and assign a number to it, then change it to a string

```js
let myVar = 42;
myVar = String(myVar);
console.log(myVar, typeof myVar); 
```

## Create a variable and assign a string to it, then change it to a boolean

```js
let myString = "Hello";
myString = Boolean(myString);
console.log(myString, typeof myString);
```

## Create a variable and assign a boolean to it, then change it to a number

```js
let myBoolean = true;
myBoolean = Number(myBoolean);
console.log(myBoolean, typeof myBoolean);
```

## Create a variable and assign an array to it, then change it to an object

```js
let myArray = [1, 2, 3];
myArray = { a: 1, b: 2, c: 3 };
console.log(myArray, typeof myArray);
```

## Create a variable and assign null to it, then change it to a string

```js
let myNull = null;
myNull = "This is now a string";
console.log(myNull, typeof myNull);
```

## Check the type of a variable before and after changing its value

```js
let myVar = 42;
console.log(myVar, typeof myVar);
myVar = String(myVar);
console.log(myVar, typeof myVar);
```

## Create a variable and assign different types in a loop

```js
let mixedArray = [1, "two", 3, "four"];
mixedArray.forEach(item => {
    console.log(item, typeof item);
});
```

## Create a variable and assign it different types based on a condition

```js
let conditionalVar;
if (Math.random() > 0.5) {
    conditionalVar = 10;
} else {
    conditionalVar = "Hello";
}
console.log(conditionalVar, typeof conditionalVar);
```

## Create a variable and assign it the result of different operations

```js
let result;
result = 5 + 10;
console.log(result, typeof result);
result = "Hello" + " World";
console.log(result, typeof result);
```

## Demonstrate how JavaScript allows type changes that static languages don't

```js
let dynamicVar = 100;
console.log(dynamicVar, typeof dynamicVar);
dynamicVar = "Now I'm a string"; 
console.log(dynamicVar, typeof dynamicVar);
dynamicVar = true; 
console.log(dynamicVar, typeof dynamicVar);
dynamicVar = [1, 2, 3]; 
console.log(dynamicVar, typeof dynamicVar);
dynamicVar = { key: "value" }; 
console.log(dynamicVar, typeof dynamicVar);
```
