## Check if two variables with the same value but different types are equal using ==

```js
console.log(5 == '5'); 
```

## Check if two variables with the same value but different types are equal using ===

```js
console.log(5 === '5'); 
```

## Compare null and undefined using == and ===

```js
console.log(null == undefined); 
console.log(null === undefined); 
```

## Compare true and 1 using == and ===

```js
console.log(true == 1); 
console.log(true === 1); 
```

## Compare false and 0 using == and ===

```js
console.log(false == 0); 
console.log(false === 0); 
```

## Compare an empty string and 0 using == and ===

```js
console.log("" == 0);
console.log("" === 0); 
```

## Compare two arrays with the same values using == and ===

```js
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
console.log(array1 == array2); 
console.log(array1 === array2);
```

## Compare two objects with the same properties using == and ===

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
console.log(obj1 == obj2);
console.log(obj1 === obj2); 
```

## Compare a string and a number with the same value using == and ===

```js
console.log("5" == 5); 
console.log("5" === 5); 
```

## Compare NaN with NaN using == and ===

```js
console.log(NaN == NaN); 
console.log(NaN === NaN); 
```
