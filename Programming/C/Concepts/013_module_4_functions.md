# Functions and Memory in C — Module 4

Functions help you **modularize code** by breaking programs into smaller, reusable blocks. Understanding how to define, declare, and call functions properly is essential. Let’s go through functions step-by-step from first principles.

---

## What is a Function?

A **function** is a named block of code designed to perform a specific task. It can:

- Take input values (called _parameters_ or _arguments_)
- Process those inputs
- Return a value (or not)

Functions help avoid code repetition and make programs easier to manage and debug.

---

## Function Prototype (Declaration)

### What?

A **function prototype** tells the compiler about the function’s name, return type, and parameters _before_ you actually define or call it.

It's like a promise: "This function exists. It takes these inputs and returns this type."

### Why?

- Helps the compiler check that you use the function correctly (correct parameter types, correct number of parameters)
- Allows you to **call functions before defining them** in your code order

### Syntax

```c
return_type function_name(parameter_type1, parameter_type2, ...);
```

```c
//Example:
int add(int, int);
//Declares a function named `add` that takes two `int`s and returns an `int`.
```

---

## Function Definition (Implementation)

This is the actual code block where you write the function logic.

Syntax:

```c
return_type function_name(parameter_list) {
// body of the function
}
```

```c
int add(int a, int b) {
return a + b;
}
```

---

## Function Call

Using a function means **calling** it with appropriate inputs.

Syntax:

```c
function_name(argument1, argument2, ...);
```

Example:

```c
int result = add(5, 3);
```

Here, `5` and `3` are **actual parameters (arguments)** passed to the function.

---

## Parameters vs Arguments

- **Formal Parameters**: Variables in the function declaration/definition (placeholders) like `int a, int b`.

```c
int add(int a, int b) {
return a + b;
}
// a and b are formal parameters
```

- **Actual Parameters**: Actual values passed when calling the function, like `5` and `3`.

```c
int result = add(5, 3);
// 5 and 3 are actual Parameters
```

When the function is called, actual parameters' values are copied into the formal parameters.

---

## Types of Functions in C

Functions can be classified based on return type and parameters:

| Type                        | Explanation                        | Example                                                |
| --------------------------- | ---------------------------------- | ------------------------------------------------------ |
| 1. No parameters, no return | Function takes no input, no output | `void greet(void) { printf("Hi\n"); }`                 |
| 2. Parameters, no return    | Takes input, no output             | `void printSum(int a, int b) { printf("%d\n", a+b); }` |
| 3. No parameters, return    | No input, but returns a value      | `int getFive(void) { return 5; }`                      |
| 4. Parameters, return       | Takes input and returns a value    | `int add(int a, int b) { return a + b; }`              |

---

## Example: All Four Types

```c
#include <stdio.h>

// 1. No params, no return
void greet(void) {
printf("Hello!\n");
}

// 2. Params, no return
void printSum(int a, int b) {
printf("Sum: %d\n", a + b);
}

// 3. No params, return value
int getFive(void) {
return 5;
}

// 4. Params, return value
int multiply(int a, int b) {
return a * b;
}

int main() {
greet(); // Call type 1

printSum(4, 6);  // Call type 2

int val = getFive(); // Call type 3
printf("Value: %d\n", val);

int product = multiply(3, 5); // Call type 4
printf("Product: %d\n", product);

return 0;
}
```

---

## Mini-Project: Power Function Using Recursion

Write a function that calculates the power of a number using recursion.

```c
#include <stdio.h>

// Function to calculate power of base^exp
int power(int base, int exp) {
if (exp == 0)
return 1; // Base case: any number^0 = 1
else
return base * power(base, exp - 1); // Recursive case
}

int main() {
int base, exp;
printf("Enter base and exponent:\n");
scanf("%d %d", &base, &exp);

text
printf("%d^%d = %d\n", base, exp, power(base, exp));
return 0;
}
```
