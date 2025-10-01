# Arrays & Pointers in C — Simple Guide from First Principles

---

## Arrays in Detail

An **array** is a collection of many boxes placed side-by-side in memory. Each box holds one value (e.g., an integer). All boxes in an array hold values of the same type.

You access each box by its **index number**, starting from 0.

---

### How to Declare an Array

To create an array, you specify the data type and the number of boxes you want inside square brackets `[ ]`.

Example:

```c
int numbers[5];

//This creates **5 boxes** named `numbers[0]`, `numbers[1]`, `numbers[2]`, `numbers[3]`, and `numbers[4]`.
```

---

### How to Initialize an Array

You can assign values to these boxes **right when you create the array**:

1. **Full initialization:**

   ```c
   int numbers = {10, 20, 30, 40, 50};
   ```

2. **Partial initialization:** Boxes not explicitly assigned get zero.

   ```c
   int numbers = {1, 2};
   ```

3. **Omitting the size:** The compiler counts for you.

   ```c
   int numbers[] = {5, 10, 15};
   ```

---

### Accessing Array Elements

Use the array name plus the index inside square brackets `[ ]`:

````c
int x = numbers[2]; // Gets the value in the 3rd box
numbers[5] = 100; // Changes the 5th box value to 100   ```
````

---

## Basics of Pointers: `&`, `*`, Pointer Arithmetic

- `&` gets the **address** of a variable.
- `*` accesses the **value stored** at a given address.

Example:

```c
int a = 10;
int *p = &a;

printf("%d\n", *p); // Prints 10
```

---

### Pointer Arithmetic with Arrays

Since an array name is a pointer to its first element, you can use pointer arithmetic:

```c
int nums = {10, 20, 30};
int *p = nums;

printf("%d\n", *p); // 10
printf("%d\n", *(p+1)); // 20
printf("%d\n", *(p+2)); // 30
```

```text

`p + 1` points to the next integer (advances by the size of int).

---


```

```c
// Exercise: Print Addresses and Traverse Array via Pointers
#include <stdio.h>

int main() {
int numbers = {10, 20, 30, 40};
int *ptr = numbers;

for (int i = 0; i < 4; i++) {
    printf("Value: %d, Address: %p\n", *(ptr + i), (ptr + i));
}
return 0;
}

```

# Call by Value vs Call by Reference in C — Simple Explanation

---

## Call by Value

- When you pass a variable to a function by value, **a copy** of the variable is made.
- The function works on the copy, so changes inside the function **do not affect** the original variable.

### Example:

```c
#include <stdio.h>

void increment(int x) {
x = x + 1; // modifies copy only
printf("Inside function: %d\n", x);
}

int main() {
int num = 5;
increment(num);
printf("After function call: %d\n", num); // Original unchanged
return 0;
}
```

```text
Output:
Inside function: 6
After function call: 5

```

---

## Call by Reference

- Pass the **address** (pointer) of the variable to the function.
- The function works on the original variable via the pointer, so changes **affect the original** variable.

### Example:

```c
#include <stdio.h>

void increment(int *x) {
*x = *x + 1; // modifies original variable
printf("Inside function: %d\n", *x);
}

int main() {
int num = 5;
increment(&num); // pass address of num
printf("After function call: %d\n", num); // Original modified
return 0;
}


```

```text
Output:

Inside function: 6
After function call: 6
```

---

Summary:

| Concept           | How it works             | Effect on original variable           |
| ----------------- | ------------------------ | ------------------------------------- |
| Call by Value     | Copies value to function | Original variable remains unchanged   |
| Call by Reference | Passes address/pointer   | Function can modify original variable |

---

# Function Pointers in C — Simple Guide

---

## What is a Function Pointer?

- A **function pointer** is a pointer variable that stores the **address of a function**.
- It allows calling a function indirectly through the pointer.
- Useful for callbacks, dynamic function calls, and implementing function tables.

---

## How to Declare a Function Pointer

Syntax:

```c
return_type (*pointer_name)(parameter_types);

```

```c
int (*fptr)(int, int);
```

- `fptr` is a pointer to a function that takes two `int` parameters and returns an `int`.

---

## How to Assign a Function to a Function Pointer

Given a function:

```c
int add(int a, int b) {
return a + b;
}

```

Assign its address to the pointer:

```c
fptr = add; // or fptr = &add;
```

---

## How to Call a Function Through a Function Pointer

You call it just like a regular function:

```c
int result = fptr(5, 3);
printf("%d\n", result); // prints 8

```

## Complete Example

```c
#include <stdio.h>

// Function definition
int add(int a, int b) {
return a + b;
}

int main() {
// Declare function pointer
int (*fptr)(int, int);

// Assign function to pointer
fptr = add;

// Call function through pointer
int sum = fptr(10, 20);
printf("Sum: %d\n", sum);

return 0;
}
```

# Function Pointers as Callbacks in C — Example

---

## What is a Callback?

A **callback** is a function passed as an argument to another function so that the receiving function can call it when needed.

---

## Example: Using Function Pointers as Callbacks

```c
#include <stdio.h>

// Function that adds two numbers
int add(int a, int b) {
return a + b;
}

// Function that multiplies two numbers
int multiply(int a, int b) {
return a * b;
}

// Function that takes a callback (function pointer) and two integers
void compute(int (*operation)(int, int), int x, int y) {
int result = operation(x, y); // Call the function pointed by operation
printf("Result: %d\n", result);
}

int main() {
// Pass 'add' function as callback
compute(add, 5, 3); // Output: Result: 8

// Pass 'multiply' function as callback
compute(multiply, 5, 3);   // Output: Result: 15

return 0;
}
```

---

## Explanation:

- `compute` takes a pointer to a function `operation` which accepts two `int` and returns an `int`.
- Inside `compute`, the callback is called using `operation(x, y)`.
- In `main`, different functions `add` and `multiply` are passed as callbacks to `compute`.

---

# Function Pointer Array Example — Simple Calculator

```c
#include <stdio.h>

int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }
int divide(int a, int b) { return b != 0 ? a / b : 0; }

int main() {
// Array of function pointers
int (*operations)(int, int) = {add, subtract, multiply, divide};

text
int x = 20, y = 10;

printf("Add: %d\n", operations(x, y));        // 30
printf("Subtract: %d\n", operations(x, y));   // 10
printf("Multiply: %d\n", operations(x, y));   // 200
printf("Divide: %d\n", operations(x, y));     // 2

return 0;
}
```
