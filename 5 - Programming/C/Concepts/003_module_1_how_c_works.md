## How C Works

### Preprocessor

- The preprocessor runs before actual compilation.
- Directives like `#include <stdio.h>` tell the compiler to include the standard input/output header file, which provides functions like `printf`.
- `#define` macros allow defining constants or expressions that are replaced by the preprocessor before compilation.

### `printf` Mechanics and `\n` Newline

- `printf` is a standard library function to print text/output to the screen.
- It interprets special characters like `\n` to format output; `\n` means a newline, moving the cursor to the next line.
- Without `\n`, output continues on the same line.

### Exercise: Explain Hello World Line-by-Line

```c
#include <stdio.h> // Include standard I/O functions
int main(void) { // Starting point of the program
printf("Hello World\n"); // Print message with newline
return 0; // Indicate program ended successfully
}
```

- If you remove `\n` in `printf`, output stays on the same line and the prompt may appear immediately after the message without moving to the next line.
