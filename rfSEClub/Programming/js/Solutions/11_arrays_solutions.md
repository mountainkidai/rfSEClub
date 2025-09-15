
## Print an array element by element

```js
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

## Find the size of the array elements

```js
let arr = [1, 2, 3, 4, 5];
console.log("Size of array:", arr.length);
```

## Remove duplicates from a list of numbers

```js
let arr = [1, 2, 3, 4, 5];
let uniqueArr = [...new Set(arr)];
console.log("Array after removing duplicates:", uniqueArr);
```

## Find the second largest number in an array

```js
function findSecondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    return second;
}
console.log("Second largest number:", findSecondLargest([1, 2, 3, 4, 5]));
```

## Find the Maximum Number in an Array

```js
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log("Maximum number in array:", findMax([1, 2, 3, 4, 5]));
```

## Find All Even Numbers in an Array

```js
function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers in array:", findEvenNumbers([1, 2, 3, 4, 5]));
```

## Find Common Elements in Two Arrays

```js
function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}
console.log("Common elements:", findCommonElements([1, 2, 3], [2, 3, 4]));
```

## Calculate the Sum of an Array

```js
function calculateSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of array:", calculateSum([1, 2, 3, 4, 5]));
```

## Filter Out Odd Numbers

```js
function filterOutOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Array after filtering out odd numbers:", filterOutOddNumbers([1, 2, 3, 4, 5]));
```

## Find Squares of All Elements in an Array

```js
function findSquares(arr) {
    return arr.map(num => num * num);
}
console.log("Squares of array elements:", findSquares([1, 2, 3, 4, 5]));
```

## Convert Array of Strings to Uppercase

```js
function convertToUppercase(arr) {
    return arr.map(str => str.toUpperCase());
}
console.log("Uppercase strings:", convertToUppercase(["hello", "world"]));
```

## Flatten a Nested Array

```js
function flattenArray(arr) {
    return arr.flat();
}
console.log("Flattened array:", flattenArray([1, [2, 3], [4, 5]]));
```

## Remove Duplicate Elements from an Array

```js
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Array after removing duplicates:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
```
