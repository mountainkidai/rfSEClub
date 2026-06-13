## Compilation Phases with GCC Flags & Inspection

### Stages of Compilation

1. **Preprocessing (`-E` flag)**

   - The preprocessor processes directives like `#include` and `#define`.
   - Use `gcc -E program.c -o program.i` to generate the preprocessed output.

2. **Compilation (`-S` flag)**

   - The compiler converts preprocessed C code to assembly language.
   - Use `gcc -S program.i -o program.s` to produce assembly code.

3. **Assembly (`-c` flag)**

   - The assembler transforms assembly into machine code generating an object file (`.o`).
   - Use `gcc -c program.s -o program.o` to generate object code without linking.

4. **Linking**
   - The linker combines object files and libraries into the final executable.
   - Done automatically by `gcc program.o -o program`.

### Exercise: Generate and Inspect Intermediate Files

- Run:

```sh
gcc -E program.c -o program.i
gcc -S program.i -o program.s
gcc -c program.s -o program.o
gcc program.o -o program
```
