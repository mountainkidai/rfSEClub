// Time and Space Complexity Guide

// 1. O(1) - Constant Time & Space
function getFirstElement(arr) {
  return arr[0]; // Time: O(1), Space: O(1)
  // Takes same time regardless of array size
  // Only stores one value regardless of input
}

// 2. O(n) - Linear Time & Space
function sumArray(arr) {
  let sum = 0; // One extra space
  for (let i = 0; i < arr.length; i++) {
    // Loops through each element once
    sum += arr[i];
  }
  return sum;
  // Time: O(n) - visits each element once
  // Space: O(1) - only uses one variable regardless of input size
}

// 3. O(n²) - Quadratic Time
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
  // Time: O(n²) - nested loops
  // Space: O(1) - only uses loop variables
}

// 4. O(log n) - Logarithmic Time
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
  // Time: O(log n) - divides search space in half each time
  // Space: O(1) - only uses a few variables
}

// Examples with explanations:
const numbers = [1, 2, 3, 4, 5];

// Example 1: O(1) operation
console.log("\nConstant Time Example:");
console.log("First element:", getFirstElement(numbers)); // Always instant

// Example 2: O(n) operation
console.log("\nLinear Time Example:");
console.log("Sum:", sumArray(numbers)); // Takes longer with more numbers

// Example 3: O(n²) operation
console.log("\nQuadratic Time Example:");
console.log("First few pairs:");
for (let i = 0; i < 2; i++) {
  // Showing just first few pairs
  for (let j = 0; j < 2; j++) {
    console.log(`(${numbers[i]},${numbers[j]})`);
  }
}

// Example 4: O(log n) operation
console.log("\nLogarithmic Time Example:");
console.log("Finding 3:", binarySearch(numbers, 3)); // Very efficient for large sorted arrays

/* Common Space Complexities Explained:
1. O(1) - Constant Space
   - Uses fixed amount of extra space
   - Example: Simple variables, fixed-size arrays

2. O(n) - Linear Space
   - Space used grows linearly with input
   - Example: Creating a new array same size as input

3. O(n²) - Quadratic Space
   - Space used grows quadratically
   - Example: Creating a matrix/2D array

Note: Space complexity considers extra space used by the algorithm,
      not including the space taken by the input itself.
*/
