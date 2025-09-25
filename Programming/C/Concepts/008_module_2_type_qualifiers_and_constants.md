## Type Qualifiers, Constants, and Format Specifiers in C

### Type Qualifiers

- `short`, `long`  
  Modify integer size to smaller or larger than the default `int`.  
  Example: `short int` (usually 2 bytes), `long int` (usually 8 bytes on 64-bit systems).

- `signed`, `unsigned`  
  Specify whether integers can be negative (`signed`) or only non-negative (`unsigned`).  
  Example: `unsigned int` stores 0 and positive numbers only.

### Constants

- **Literals**  
  Fixed values in code, like `1234`, `12.34`, or `"string"`.

- **`const` keyword**  
  Declares variables whose value cannot be changed after initialization.  
  Example: `const int DAYS_IN_WEEK = 7;`

- **`#define` macros**  
  Preprocessor directive to define constants or macros.  
  Example: `#define PI 3.14159`

### Format Specifiers

Format specifiers are placeholders used in `printf` and `scanf` to indicate the type of data being printed or read. They start with `%`.

| Format Specifier | Description         | Example usage              |
| ---------------- | ------------------- | -------------------------- |
| `%c`             | Character           | `printf("%c", 'A');`       |
| `%d` or `%i`     | Signed integer      | `printf("%d", 100);`       |
| `%u`             | Unsigned integer    | `printf("%u", 100U);`      |
| `%f`             | Float               | `printf("%f", 3.14f);`     |
| `%lf`            | Double              | `printf("%lf", 3.141592);` |
| `%s`             | String              | `printf("%s", "Hello");`   |
| `%x` or `%X`     | Hexadecimal integer | `printf("%x", 255);`       |
| `%o`             | Octal integer       | `printf("%o", 8);`         |
| `%p`             | Pointer address     | `printf("%p", &var);`      |

### Example: Print Min/Max for Signed/Unsigned and Test Overflow

```c
#include <stdio.h>
#include <limits.h>

int main() {
printf("Signed int min: %d\n", INT_MIN);
printf("Signed int max: %d\n", INT_MAX);
printf("Unsigned int max: %u\n", UINT_MAX);

unsigned int u = UINT_MAX;
printf("Unsigned int before overflow: %u\n", u);
u += 1; // Overflow
printf("Unsigned int after overflow: %u\n", u);

return 0;
}
```

Output:

```text
Signed int min: -2147483648
Signed int max: 2147483647
Unsigned int max: 4294967295
Unsigned int before overflow: 4294967295
Unsigned int after overflow: 0
```

### Math Constants Calculator Using `#define`

```c
#include <stdio.h>
#define PI 3.14159
#define E 2.71828

int main() {
float radius = 5.0;
printf("Area of circle with radius %.2f: %.2f\n", radius, PI * radius * radius);
printf("Value of e: %.5f\n", E);
return 0;
}
```

In the format specifier "%.2f" used in printf, the .2 means:

Print the floating-point number with 2 digits after the decimal point.
Here is a breakdown:

% starts the format specifier.

.2 is the precision which controls how many digits to show after the decimal.

f means the argument is a floating-point number (float or double).

```c
float pi = 3.14159;
printf("%.2f", pi);
```

```text
3.14
```

```c
float pi = 3.14159;
printf("%5.2f", pi);
```

5 — Minimum field width. The total space reserved by this output is at least 5 characters wide. If the number's full length is less than 5, it will be padded with spaces on the left (right-justified by default).

```text
-3.14
```

```c
float pi = 3.14159;
printf("%6.2f", pi);
```

```text
--3.14
```

## Difference Between `const` and `#define` in C

### `#define`

- It is a **preprocessor directive**.
- The preprocessor replaces every occurrence of the macro name with its value **before compilation**.
- It is purely **text substitution**, so there is no type checking.
- Does **not** allocate memory.
- Scope is global from the point of definition.
- Harder to debug because errors happen after substitution.

Example:

```c
#define PI 3.14
printf("%f\n", PI); // Preprocessor replaces PI with 3.14 before compiling
```

### `const`

- It is a **type qualifier** that defines a constant variable.
- The compiler enforces **type checking**.
- Allocates memory to store the constant value.
- Has scope rules like normal variables (block, file, etc.).
- Easier to debug because it behaves like a variable.

Example:

```c
const float PI = 3.14;
printf("%f\n", PI);
```

---

### What is a Literal?

- A **literal** is a fixed value written directly in the source code.
- Examples: `1234` (integer literal), `12.34` (floating-point literal), `"string"` (string literal).
- These are the actual constant values used in the program.

---

### Summary Table

| Aspect           | `#define`                     | `const`                     |
| ---------------- | ----------------------------- | --------------------------- |
| Handled by       | Preprocessor (before compile) | Compiler (during compile)   |
| Type checking    | No                            | Yes                         |
| Memory allocated | No                            | Yes                         |
| Scope            | Global                        | Local/block scope           |
| Debugging        | Difficult                     | Easier                      |
| Usage            | Simple constants, macros      | Typed constants, safer code |

---

Use `#define` for simple constant values or macros that do not need type safety. Use `const` when you want type safety, scoped constants, and easier debugging.

This distinction helps write more robust and maintainable code in C.
