## Why Main?

### `main` as Entry Point

- The `main` function is the starting point of every C program. When a program runs, execution begins from `main`.
- The linker expects exactly one `main` function as the entry point to the program.
- If `main` is missing or renamed, the linker cannot find where to start execution and throws an error.
- `main` is where program flow is controlled and from which other functions are called.

### Exercise: Rename `main` Function

- Try renaming `main` to another name like `start`.
- Compile the program.

- This shows that the linker needs `main` to know where to start.

### Mini-Project: Multiple `printf` Statements

Write a program with several `printf` lines to output multiple messages:

```c
#include <stdio.h>

int main(void) {
printf("Welcome to C Programming!\n");
printf("This is the first message.\n");
printf("This is the second message.\n");
printf("Goodbye!\n");
return 0;
}
```

- Compile and run to see all messages printed sequentially.
- Experiment by adding or removing `printf` statements to understand flow.

---

The `main` function is essential to program execution and program structure in C.
