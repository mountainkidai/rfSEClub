## Advanced GCC Commands with Examples

### Important Flags

- `-Wall`

  - Turns on most compiler warnings to alert you about potential issues.
  - Helps you write safer and cleaner code by catching common mistakes early.

- `-save-temps`
  - Saves intermediate files generated during compilation (`.i`, `.s`, `.o`).
  - Lets you inspect preprocessing, assembly, and object files for debugging or learning.

### Exercise: Fix Warnings in Sample Code

Here is a sample program with warnings:

```c
#include <stdio.h>

int main() {
int x; // Uninitialized variable warning
printf("Value of x is %d\n", x);
return 0;
}
```

Compile with warnings:

```sh
gcc -Wall warning_example.c -o warning_example
```

Typical warning output:
warning_example.c: In function ‘main’:
warning_example.c:4:19: warning: ‘x’ is used uninitialized in this function [-Wuninitialized]

Fix the warning by initializing `x`:

```c
int x = 10; // Initialized
printf("Value of x is %d\n", x);
```

Recompile with no warnings and run:

```sh
./warning_example
Value of x is 10
```

Manually Link Multi-File Program
Suppose you have two files: file1.c and file2.c.

file1.c

```c
void greeting();
int main() {
    greeting();
    return 0;
}
```

file2.c

```c
#include <stdio.h>
void greeting() {
    printf("Hello from file2!\n");
}

```

Compile each separately:

```sh
gcc -c file1.c -o file1.o
gcc -c file2.c -o file2.o

```

Link the object files:

```sh
gcc file1.o file2.o -o multi_file_program
./multi_file_program
Hello from file2!
```

Why we need multiple files:

Modularity: Helps divide large programs into smaller, understandable parts.

Reusability: Common functions can be written once and used in multiple programs.

Collaboration: Multiple developers can work on different files simultaneously without conflicts.

Incremental compilation: When only one file changes, only that file needs recompiling, saving time.
