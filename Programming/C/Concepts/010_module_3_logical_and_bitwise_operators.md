# Logical and Bitwise Operators in C

Logical operators are used in decision-making, while bitwise operators perform operations on the binary representation of numbers.

---

### Logical Operators

Logical operators return either **true (1)** or **false (0)** based on conditions.

- `&&` (Logical AND): Returns true if both operands are true.
- `||` (Logical OR): Returns true if at least one operand is true.
- `!` (Logical NOT): Reverses the logic (true becomes false, false becomes true).

**Example:**

```c
#include <stdio.h>

int main() {
int a = 5, b = 10, c = 0;

text
printf("(a < b) && (b > 0) = %d\n", (a < b) && (b > 0)); // true -> 1
printf("(a > b) || (b > 0) = %d\n", (a > b) || (b > 0)); // true -> 1
printf("!(c) = %d\n", !c);                              // true -> 1 (since c is 0)

return 0;
}
```

```text
OUTPUT:
(a < b) && (b > 0) = 1
(a > b) || (b > 0) = 1
!(c) = 1
```

---

### Short-Circuit Evaluation

Logical operators `&&` and `||` use _short-circuit logic_.  
This means if the result can be determined from the first operand, the second operand is not evaluated.

**Example:**

```c
#include <stdio.h>

int main() {
int x = 0;

text
if (x != 0 && (10 / x > 1)) {  // Second condition skipped since x != 0 is false
    printf("True\n");
} else {
    printf("False\n");
}

return 0;
}
```

```text
Output:

False
```

---

### Bitwise Operators

Bitwise operators work **directly on bits** of integer values.

- `&` (Bitwise AND): Sets each bit to 1 if both bits are 1.
- `|` (Bitwise OR): Sets each bit to 1 if one of the bits is 1.
- `^` (Bitwise XOR): Sets each bit to 1 if only one of the bits is 1.
- `~` (Bitwise NOT): Inverts all bits.
- `<<` (Left Shift): Shifts bits to the left by given positions.
- `>>` (Right Shift): Shifts bits to the right by given positions.

**Example:**

```c
#include <stdio.h>

int main() {
unsigned int a = 5, b = 9;

text
printf("a & b = %d\n", a & b);  // 5 (0101) & 9 (1001) = 0001 = 1
printf("a | b = %d\n", a | b);  // 0101 | 1001 = 1101 = 13
printf("a ^ b = %d\n", a ^ b);  // 0101 ^ 1001 = 1100 = 12
printf("~a = %d\n", ~a);        // -6
printf("b << 1 = %d\n", b << 1); // 1001 << 1 = 00010010 = 18
printf("b >> 1 = %d\n", b >> 1); // 1001 >> 1 = 00000100 = 4

return 0;
}
```

**BITWISE ~**

```c
#include <stdio.h>

#include <stdio.h>

int main() {
    // Signed integer with value -6
    signed char signed_num = -6;        // Binary: 11111010 (two's complement)
    // Unsigned integer with value 250 (same bits as -6)
    unsigned char unsigned_num = 250;   // Binary: 11111010

    // Print signed and unsigned values
    printf("Signed number: %d\n", signed_num);
    printf("Unsigned number: %u\n", unsigned_num);

    // Bitwise NOT operation results
    printf("~signed_num = %d\n", ~signed_num);
    printf("~unsigned_num = %u\n", (unsigned char)~unsigned_num);

    return 0;
}


```

```text
Signed number: -6
Unsigned number: 250
~signed_num = 5
~unsigned_num = 5
```

```text
The key difference between:
Arithmetic negation (-): This gives the negative (opposite) of a number as you know it in math.
Example:

− 256 = − 256

Bitwise NOT (~): This flips all the bits of a number in binary. Because of how negative numbers are stored in two's complement, the result corresponds to:

∼x = −(x+1)

```
