# Advanced Control or jumping statements in C: `break`, `continue`

Loop control statements like `break` and `continue` help manage the flow inside loops, making your programs cleaner and more efficient.

---

## 1. `break`

- Immediately exits the **nearest enclosing loop** or a `switch` statement.
- Useful to stop looping early based on a condition.

**Example: Early loop exit using `break`**

```c
#include <stdio.h>

int main() {
int num;
for (int i = 1; i <= 10; i++) {
printf("Enter number %d: ", i);
scanf("%d", &num);

    if (num < 0) {
        printf("Negative number entered. Exiting loop early.\n");
        break;  // Exit loop if negative number entered
    }
}
printf("Loop ended.\n");
return 0;
}
```

---

## 2. `continue`

- Skips the **current iteration** of a loop, jumps to the next iteration.
- Useful to ignore certain cases but keep looping.

---

```c
//Example: Skip printing multiples of 3
#include <stdio.h>

int main() {
for (int i = 1; i <= 10; i++) {
if (i % 3 == 0) {
continue; // Skip multiples of 3
}
printf("%d ", i);
}
printf("\n");
return 0;
}
```
