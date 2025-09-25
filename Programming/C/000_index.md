# C Programming Curriculum for Top 1% Programmers

## Module 1: Foundations

Goal: Master C basics, setup, and program flow for hardware control and efficiency.

1. **Introduction to C**

   - Why C: Low-level control, efficiency, systems programming.
   - Setup: Install gcc on Linux, write Hello World (`#include <stdio.h>`, `int main(void)`, `printf`).
   - Compile: `gcc hello.c -o hello`, run `./hello`.
   - Exercise: Modify output string, experiment with `printf`.
   - Mini-Project: Print personalized greeting using hardcoded name.

2. **Program Structure**

   - Anatomy: `main` function, variables, `#include` headers, `.c` convention.
   - Tools: Use `vi` (`i` insert, `:wq` save), verify with `ls`.
   - Exercise: Create program in `vi`, compile, run.
   - Mini-Project: Shell script to automate compile/run cycle.

3. **How C Works**

   - Preprocessor: `#include <stdio.h>`, `#define` macros.
   - `printf` mechanics, `\n` newline.
   - Exercise: Explain each line of Hello World, test without `\n`.
   - Mini-Project: Add comments, induce and fix syntax errors.

4. **Why Main**
   - `main` as entry point, linker role.
   - Exercise: Rename `main`, observe linker error.
   - Mini-Project: Write program with multiple `printf` statements.

## Module 2: Compilation and Data Types

Goal: Understand compilation pipeline and data types for robust code.

5. **Compilation Phases**

   - Stages: Preprocessor (`-E`), compiler (`-S`), assembler (`-c`), linker.
   - Exercise: Diagram phases, generate intermediates (`gcc -E`, `-S`, `-c`).
   - Mini-Project: Script to automate phase outputs, inspect with `objdump -D`.

6. **Advanced GCC Commands**

   - Flags: `-Wall` warnings, `-save-temps` intermediates.
   - Exercise: Fix warnings in sample code.
   - Mini-Project: Link multi-file program manually.

7. **Data Types and Sizes**

   - Types: `char` (1 byte), `int` (~4 bytes), `float` (32 bits), `double` (64 bits).
   - Use `sizeof()`.
   - Exercise: Print sizes for all types.
   - Mini-Project: Program to display machine-specific type sizes.

8. **Type Qualifiers and Constants & Format Specifiers**
   - Qualifiers: `short`, `long`, `signed`, `unsigned`.
   - Constants: Literals (`1234`, `12.34`, `"string"`), `const`, `#define`.
   - Exercise: Print min/max for `signed`/`unsigned`, test overflow.
   - Mini-Project: Math constants calculator using `#define`.

## Module 3: Operators and Control Flow

Goal: Build logic and control for problem-solving.

9. **Arithmetic and Relational Operators**

   - Operators: `+`, `-`, `*`, `/`, `%`, `>`, `<`, `==`.
   - Exercise: Evaluate complex expressions with precedence.
   - Mini-Project: Basic calculator with arithmetic ops.

10. **Logical and Bitwise Operators**

    - Logical: `&&`, `||`, `!`. Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>`.
    - Exercise: Test short-circuit logic, manipulate bits.
    - Mini-Project: Bit flag setter/clearer.

11. **Control Structures**

    - `if`, `if-else`, `switch`, `while`, `do-while`, `for`.
    - Exercise: Write even/odd checker, menu with `switch`.
    - Mini-Project: Leap year validator, multiplication table generator.

12. **Advanced Control**
    - `break`, `continue`, avoid `goto`.
    - Exercise: Early loop exit with `break`.
    - Mini-Project: Prime number checker with optimized loops.

## Module 4: Functions and Memory

Goal: Modularize code and manage memory effectively.

13. **Functions**

    - Define, call, parameters, return types.
    - Exercise: Write add/multiply functions.
    - Mini-Project: Power function with recursion.

14. **Pointers**

    - Basics: `&`, `*`, pointer arithmetic.
    - Exercise: Print addresses, traverse array via pointers.
    - Mini-Project: Pointer-based string copy.

15. **Memory Management**

    - Dynamic: `malloc`, `calloc`, `realloc`, `free`.
    - Exercise: Create dynamic array.
    - Mini-Project: Singly linked list (insert/delete/traverse).

16. **Advanced Functions**
    - Function pointers, variadic functions (`va_list`).
    - Exercise: Write comparator for sorting.
    - Mini-Project: Custom `printf` implementation.

## Module 5: Complexity and Analysis

Goal: Master algorithmic efficiency for scalable systems.

17. **Time and Space Complexity**

    - Definitions: Time (operations), space (memory).
    - Big-O Notation: `O(1)`, `O(n)`, `O(n^2)`, `O(log n)`, `O(n log n)`, `O(2^n)`.
    - Exercise: Calculate complexity for loops, recursive functions.
    - Mini-Project: Profile time/space for array sum vs. recursive sum.

18. **Amortized Analysis**
    - Concept: Average cost over sequence of operations (e.g., dynamic array resizing).
    - Methods: Aggregate, accounting, potential.
    - Exercise: Analyze amortized cost of stack push/pop.
    - Mini-Project: Implement dynamic array with amortized analysis.

## Module 6: Data Structures

Goal: Build and manipulate advanced data structures for real-world systems.

19. **Arrays and Strings**

    - 1D/2D arrays, null-terminated strings.
    - Operations: Access, traversal, manipulation.
    - Exercise: Sum 2D array, check palindrome.
    - Mini-Project: Matrix transpose, manual string copy with pointers.

20. **Linked Lists**

    - Singly, doubly, circular linked lists.
    - Operations: Insert, delete, traverse, reverse.
    - Exercise: Build singly linked list, reverse it.
    - Mini-Project: To-do list with insert/delete at head/tail.

21. **Stacks and Queues**

    - Stack: Push/pop, array vs. linked implementation.
    - Queue: Enqueue/dequeue, circular queue, priority queue.
    - Exercise: Implement stack with array, queue with linked list.
    - Mini-Project: Expression evaluator using stack.

22. **Trees**

    - Binary trees, BST, AVL trees, red-black trees.
    - Operations: Insert, delete, traverse (inorder, preorder, postorder).
    - Exercise: Implement BST insert/search.
    - Mini-Project: File system hierarchy using binary tree.

23. **Graphs**

    - Representations: Adjacency list/matrix.
    - Algorithms: BFS, DFS, Dijkstra’s, topological sort.
    - Exercise: Implement adjacency list, run BFS.
    - Mini-Project: Shortest path finder for weighted graph.

24. **Hash Tables**
    - Concepts: Hash functions, collision resolution (chaining, open addressing).
    - Operations: Insert, search, delete.
    - Exercise: Build hash table with chaining.
    - Mini-Project: Word frequency counter using hash table.

## Module 7: Algorithms

Goal: Master algorithms for efficient problem-solving.

25. **Searching Algorithms**

    - Linear search: `O(n)`, sequential scan.
    - Binary search: `O(log n)`, sorted array.
    - Exercise: Implement both, compare runtimes.
    - Mini-Project: Search engine for sorted dataset.

26. **Sorting Algorithms**

    - Bubble sort: `O(n^2)`, compare and swap.
    - Quick sort: `O(n log n)` average, pivot-based.
    - Merge sort: `O(n log n)`, divide-and-conquer.
    - Exercise: Implement quicksort, measure performance.
    - Mini-Project: Sort large dataset, optimize for cache.

27. **Graph Algorithms**

    - BFS/DFS: Traversal, cycle detection.
    - Dijkstra’s: Shortest path for weighted graphs.
    - Kruskal’s/Prim’s: Minimum spanning tree.
    - Exercise: Implement Dijkstra’s on adjacency list.
    - Mini-Project: Network routing simulator.

28. **Dynamic Programming**

    - Concepts: Memoization, tabulation, overlapping subproblems.
    - Examples: Fibonacci, knapsack, longest common subsequence.
    - Exercise: Solve knapsack with tabulation.
    - Mini-Project: Text alignment optimizer.

29. **Greedy Algorithms**
    - Concepts: Local optimal choices for global solution.
    - Examples: Activity selection, Huffman coding.
    - Exercise: Implement Huffman coding.
    - Mini-Project: File compression tool.

## Module 8: Advanced Systems Programming

Goal: Build high-performance systems with C.

30. **File I/O**

    - Functions: `fopen`, `fclose`, `fread`, `fwrite`, `fprintf`.
    - Modes: `r`, `w`, `a`.
    - Exercise: Write/read text file.
    - Mini-Project: Logger with timestamped entries.

31. **Concurrency with Pthreads**

    - Threads, mutexes, semaphores.
    - Exercise: Create parallel threads for summation.
    - Mini-Project: Parallel matrix multiplication.

32. **Networking Basics**

    - Sockets: TCP/UDP, client-server model.
    - Exercise: Build echo server.
    - Mini-Project: Simplebury Simple chat application.

33. **System Calls**
    - `fork`, `exec`, `pipe`, signals.
    - Exercise: Create child process with `fork`.
    - Mini-Project: Mini shell with basic commands.

## Module 9: Optimization and Ecosystem

Goal: Optimize code and integrate with modern development practices.

34. **Debugging and Optimization**

    - Tools: GDB, Valgrind, perf.
    - Techniques: Breakpoints, leak detection, loop unrolling.
    - Exercise: Fix segfault, optimize loop.
    - Mini-Project: Leak-free matrix multiply.

35. **Build Systems and Standards**

    - Make, CMake, C11/C17, avoid undefined behavior.
    - Exercise: Write multi-file Makefile.
    - Mini-Project: Build custom library.

36. **Version Control and Contribution**
    - Git: commit, branch, merge.
    - Exercise: Fork repo, submit pull request.
    - Mini-Project: Contribute to C-based open-source project.

## Module 10: Competitive Programming and Capstone

Goal: Apply skills to competitive and industry challenges.

37. **Competitive Programming**

    - Time/space complexity, LeetCode challenges.
    - Exercise: Solve medium/hard problems in C.
    - Mini-Project: Optimize solution for leaderboard.

38. **Capstone Project**
    - Build a system: Lightweight database, network server, or embedded system.
    - Requirements: Use pointers, structs, file I/O, optimization.
    - Outcome: Scalable, production-ready C application.
