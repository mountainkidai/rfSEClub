/*
array in detail
/*
Arrays in JavaScript - Comprehensive Guide

1. FUNDAMENTALS
- An array is a linear data structure that stores elements in contiguous memory locations
- Elements can be of any type (numbers, strings, objects, etc.)
- Arrays in JavaScript are zero-indexed
- Arrays are dynamic (can grow or shrink in size)


/*
DATA STRUCTURES AND COMPLEXITY ANALYSIS

1. WHAT IS A DATA STRUCTURE?
- Organized format for storing and managing data
- Enables efficient data access and modification
- Forms the building blocks of algorithms

2. COMPLEXITY ANALYSIS
Time Complexity: Performance measured in operations
Space Complexity: Memory usage requirements

3. COMMON DATA STRUCTURES AND THEIR COMPLEXITIES:

Arrays:
- Access: O(1)
- Search: O(n)
- Insert/Delete at end: O(1)
- Insert/Delete at position: O(n)
Example: [1,2,3,4,5]

Linked Lists:
- Access: O(n)
- Search: O(n)
- Insert/Delete at start: O(1)
- Insert/Delete at position: O(n)
Example: 1->2->3->4->5

Hash Tables:
- Access/Insert/Delete: O(1) average
- Worst case: O(n)
Example: { key1: value1, key2: value2 }

Binary Search Trees:
- Access/Search/Insert/Delete: O(log n) average
- Worst case: O(n)
Example: 
    3
   /   \
  1     5

Stacks:
- Push/Pop: O(1)
- Search: O(n)
Example: Last-In-First-Out (LIFO)

Queues:
- Enqueue/Dequeue: O(1)
- Search: O(n)
Example: First-In-First-Out (FIFO)

Heaps:
- Insert/Delete: O(log n)
- Get min/max: O(1)
Example: Binary Heap for Priority Queue

4. CHOOSING THE RIGHT STRUCTURE:
- Based on operation frequency
- Memory constraints
- Data access patterns
- Required guarantees
*/
2. CREATING ARRAYS
let array1 = [1, 2, 3];              // Array literal syntax
let array2 = new Array(1, 2, 3);     // Constructor syntax
let array3 = Array.from("hello");     // Array.from() method

3. TIME COMPLEXITIES
Access:     O(1)  - Constant time
Search:     O(n)  - Linear time
Insertion:  O(n)  - Linear time (worst case)
Deletion:   O(n)  - Linear time (worst case)

4. SPACE COMPLEXITY
- O(n) where n is the number of elements

5. ARRAY ACCESS METHODS
a) Direct Index Access - O(1)
let arr = [10, 20, 30];
console.log(arr[0]);  // Returns 10

b) Array Methods
- push()    - O(1) - Add to end
- pop()     - O(1) - Remove from end
- shift()   - O(n) - Remove from start
- unshift() - O(n) - Add to start
- splice()  - O(n) - Modify at any position

6. EFFICIENT PRACTICES
- Use push()/pop() instead of unshift()/shift() when possible
- Use appropriate array methods for better readability
- Consider using typed arrays for numerical data
- Use Array.prototype methods for better performance

7. EXAMPLE IMPLEMENTATIONS
*/

// Example 1: Efficient array traversal
function efficientTraversal(arr) {
  const length = arr.length; // Cache length for better performance
  for (let i = 0; i < length; i++) {
    console.log(arr[i]);
  }
}

// Example 2: Efficient search using indexOf
function efficientSearch(arr, element) {
  return arr.indexOf(element); // Returns -1 if not found
}

// Example 3: Efficient array manipulation
function efficientArrayOps(arr) {
  // Adding elements - O(1)
  arr.push(1);

  // Removing elements - O(1)
  arr.pop();

  // Accessing elements - O(1)
  const firstElement = arr[0];

  return arr;
}

// Example 4: Memory-efficient array copying
function efficientCopy(arr) {
  return [...arr]; // Spread operator for shallow copy
}

/*
8. BEST PRACTICES
- Always use const for arrays unless reassignment is needed
- Use array methods over loops when possible
- Consider using TypedArrays for better memory usage
- Be mindful of array mutations vs creating new arrays

9. COMMON PITFALLS
- Forgetting that arrays are zero-indexed
- Not considering performance implications of unshift/shift
- Improper array copying (shallow vs deep)
- Not handling empty array cases
*/

// Export if needed for module usage
module.exports = {
  efficientTraversal,
  efficientSearch,
  efficientArrayOps,
  efficientCopy,
};
