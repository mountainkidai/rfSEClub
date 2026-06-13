## Data Types and Sizes in C

### Basic Data Types and Their Typical Sizes

- **`char`**:

  - Size: 1 byte
  - Used to store a single character (e.g., letter, digit).
  - Example: `'A'`

- **`int`**:

  - Size: Usually 4 bytes (may vary by machine)
  - Used to store integer numbers (whole numbers).

- **`float`**:

  - Size: 4 bytes (32 bits)
  - Stores single precision decimal numbers.

- **`double`**:
  - Size: 8 bytes (64 bits)
  - Stores double precision decimal numbers (more precise than `float`).

### Use of `sizeof()` Operator

- The `sizeof()` operator gives the size (in bytes) of any data type or variable on your machine.
- It is useful because the size of types may vary between systems and compilers.

### Exercise: Print Size of All Basic Types

```c
#include <stdio.h>

int main() {
printf("Size of char: %zu byte(s)\n", sizeof(char));
printf("Size of int: %zu byte(s)\n", sizeof(int));
printf("Size of float: %zu byte(s)\n", sizeof(float));
printf("Size of double: %zu byte(s)\n", sizeof(double));
return 0;
}
```

```text
### Sample Output (may vary by machine):

Size of char: 1 byte(s)
Size of int: 4 byte(s)
Size of float: 4 byte(s)
Size of double: 8 byte(s)

```
