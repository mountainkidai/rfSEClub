# Introduction to C

**Why C**: C provides direct hardware access, minimal runtime overhead, and is foundational for operating systems, embedded systems, and performance-critical applications. It prioritizes control and efficiency, enabling low-level memory manipulation and systems programming.

## Setup

### Installation

Install the GNU Compiler Collection (gcc) on Linux:

- Run `sudo apt install gcc` in the terminal.
- Verify installation with `gcc --version`.

## Writing Hello World

Create a file named `hello.c` with the following code:

```c
#include <stdio.h>
int main(void) {
    printf("Hello world\n");
    return 0;
}
```

- `#include <stdio.h>`: Imports the standard input-output library for functions like `printf`.
- `int main(void)`: Defines the program's entry point, returning an integer to indicate execution status.
- `printf("Hello world\n")`: Prints the string "Hello world" followed by a newline (`\n`).
- `return 0`: Signals successful program completion to the operating system.

```c
#include <stdio.h>
#include <errno.h>
int main() {
    FILE *fp = fopen("file.txt", "r");
    if (fp == NULL) {
        perror("File open error");
        return 1;
    }
    // ... rest of program
    fclose(fp);
    return 0;
}


```

## Compilation and Execution

Compile the program:

```bash
gcc hello.c -o hello
```

- This generates an executable file named `hello`.

Run the program:

```bash
./hello
```

- Output: `Hello world` followed by a newline.

Execution starts at `main`, with gcc linking standard library functions (e.g., `printf` from `libc`) to produce the executable.

## Exercises

1. **Modify Output String**:

   - Change the `printf` argument, e.g., `printf("Greetings, Steve!\n")` or `printf("Count: %d\n", 5)`.
   - Compile and run to observe changes.

2. **Experiment with printf**:
   - Use format specifiers: `%d` for integers, `%f` for floats, `%s` for strings.
   - Test escape sequences: `\t` (tab), `\b` (backspace), `\n` (newline).
   - Example: `printf("Name: %s, Age: %d\n", "Steve", 25)`.
   - Compile, run, and debug any format errors.

## Mini-Project

**Personalized Greeting**:
Modify `hello.c` to print a hardcoded name:

```c
#include <stdio.h>
int main(void) {
    printf("Hello, Steve\n");
    return 0;
}
```

- Replace "Steve" with another hardcoded name or constant (e.g., `#define NAME "Steve"`).
- Compile and run to verify output.
- Handle edge cases: Ensure the program handles long names (e.g., 50+ characters) without truncation and null-terminates strings correctly.
