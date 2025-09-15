# JavaScript Arrays

An **array** is like a list that holds multiple values under one name. Think of it as a row of boxes, each box numbered starting at `0` (the first box is `0`, the next is `1`, and so on).

## 1. Creating an Array

Use square brackets `[]` and put items inside, separated by commas:

```js
let fruits = ["Apple", "Banana", "Cherry"];
```

* `fruits[0]` is "Apple".
* `fruits[1]` is "Banana".
* `fruits[2]` is "Cherry".

### Arrays Can Contain Mixed Types

Arrays can hold different types of values:

```js
let mixed = ["Hello", 42, true, null];
console.log(mixed);
```

**Output:**

```txt
["Hello", 42, true, null]
```

You can mix strings, numbers, booleans, `null`, even objects or other arrays!

## 2. Accessing and Changing Items

* **Access** any item by its index:

  ```js
  console.log(fruits[1]); // prints Banana
  ```

* **Change** an item by assigning a new value:

  ```js
  fruits[1] = "Blueberry";
  console.log(fruits); // ["Apple", "Blueberry", "Cherry"]
  ```

## 3. Array Size with `.length`

The `.length` property tells you how many items are in the array:

```js
console.log(fruits.length); // 3
```

## 4. Adding and Removing Items

* **`push(item)`**: Add `item` to the **end** of the array.

  ```js
  fruits.push("Date");
  console.log(fruits); // ["Apple", "Blueberry", "Cherry", "Date"]
  ```

* **`pop()`**: Remove and **return** the last item.

  ```js
  let last = fruits.pop();
  console.log(last);   // Date
  console.log(fruits); // ["Apple", "Blueberry", "Cherry"]
  ```

* **`unshift(item)`**: Add `item` to the **start** of the array.

  ```js
  fruits.unshift("Apricot");
  console.log(fruits); // ["Apricot", "Apple", "Blueberry", "Cherry"]
  ```

* **`shift()`**: Remove and **return** the first item.

  ```js
  let first = fruits.shift();
  console.log(first);  // Apricot
  console.log(fruits); // ["Apple", "Blueberry", "Cherry"]
  ```

## 5. Finding Items

* **`indexOf(item)`**: Find where `item` is. Returns `-1` if not found.

  ```js
  console.log(fruits.indexOf("Cherry")); // 2
  ```

* **`includes(item)`**: Check if `item` is in the array. Returns `true` or `false`.

  ```js
  console.log(fruits.includes("Banana")); // false (we changed it earlier)
  ```

## 6. Looping Over Arrays

Use a loop to do something with each item:

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

**Output:**

```txt
Apple
Blueberry
Cherry
```

Or use `for...of` for simpler code:

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

**Output:**

```txt
Apple
Blueberry
Cherry
```

## 7. Example: Putting It All Together

```js
let numbers = [10, 20, 30];
numbers.push(40);      // [10, 20, 30, 40]
numbers.shift();       // [20, 30, 40]
numbers[1] = 25;      // [20, 25, 40]

console.log(numbers);  // Output: [20, 25, 40]
```

## Problems

1. Print an array element by element
2. Find the size of the array elements
3. Remove duplicates from a list of numbers
4. Find the second largest number in an array
5. Find the Maximum Number in an Array
6. Find All Even Numbers in an Array
7. Find Common Elements in Two Arrays
8. Calculate the Sum of an Array
9. Filter Out Odd Numbers
10. Find Squares of All Elements in an Array
11. Convert Array of Strings to Uppercase
12. Flatten a Nested Array
13. Remove Duplicate Elements from an Array
