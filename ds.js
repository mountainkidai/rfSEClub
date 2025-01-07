/*

Here’s a one-liner summary of common time and space complexities, ordered from fastest to slowest:
O(1): Constant time – independent of input size.
O(log n): Logarithmic time – halves the problem at each step.
O(√n): Square root time – grows with the square root of the input.
O(n): Linear time – grows directly with input size.
O(n log n): Linearithmic time – linear growth with a logarithmic multiplier.
O(n²): Quadratic time – nested loops over input size.
O(n³): Cubic time – triple nested loops or operations on input.
O(2ⁿ): Exponential time – doubles with each added input.
O(n!): Factorial time – grows explosively with input permutations.

*/
//small js programs with output and explanation to understand the concept of time complexity and space complexity
//1. O(1) time complexity
//example 1
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); //5
//explantion: The function add takes two arguments and returns their sum.
// The time complexity of this function is O(1) because it has 2 operations,
// regardless of the size of the input.

// space complexity
//explanation: The function add takes two arguments and returns their sum.
// The space complexity of this function is O(1) because it has 2 variables (a and b), and they occupy
// a constant amount of space.

// O(log n): Logarithmic time – halves the problem at each step.
//example 2
//simple for loop to explain the concept of O(log n)
function logTime(n) {
  for (let i = 1; i < n; i = i * 2) {
    console.log(i);
  }
}
logTime(8);
//output: 1, 2, 4
//explanation: The function logTime takes a number n and iterates over the numbers from 1 to n,
// doubling the value of i at each step. The loop runs until i is less than n.
// The time complexity of this function is O(log n) because the loop runs log(n) times.
//space complexity
//explanation:
//  is O(1) because it only uses a single variable i.

//O(√n)
//example 3
let i = 1,
  sum = 1;
while (sum < n) {
  i++;
  sum = sum + i;
  console.log("sum");
}

// time complexity of this function is O(√n) because the loop runs until the sum is less than n,
// which is the square root of n.
//space complexity
//explanation: The space complexity of this function is O(1) because it only uses two variables i and sum,
// which occupy a constant amount of space.

//O(n)
//example 4
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sumArray([some array with n elements])); //15
//explanation: The function sumArray takes an array of numbers and returns the sum of all the elements.
// The time complexity of this function is O(n) because the loop runs n times, where n is the size of the input array.
//space complexity
//explanation: The space complexity of this function is O(1) because it only uses a single variable sum,
