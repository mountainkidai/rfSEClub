# C Programming Curriculum (Rust-Ready)

## Module 1: Foundations

1. **Introduction to C**

   - Why C: Low-level control, efficiency, systems programming. **[Rust-Relevant]** Foundation for Rust’s zero-cost abstractions and systems programming.
   - Setup: Install `gcc` on Linux, write Hello World (`#include <stdio.h>`, `int main(void)`, `printf`).
   - Compile: `gcc hello.c -o hello`, run `./hello`.
   - Exercise: Modify output string, experiment with `printf` format specifiers.
   - Mini-Project: Print personalized greeting using hardcoded name.

2. **Program Structure**

   - Anatomy: `main` function, variables, `#include` headers, `.c` convention.
   - Tools: Use `vi` (`i` insert, `:wq` save), verify with `ls`.
   - Exercise: Create program in `vi`, compile, run.
   - Mini-Project: Shell script to automate compile/run cycle.

3. **How C Works**

   - Preprocessor: `#include <stdio.h>`, `#define` macros. **[Rust-Relevant]** Understand macros for Rust’s `macro_rules!` and procedural macros.
   - `printf` mechanics, `\n` newline.
   - Exercise: Explain each line of Hello World, test without `\n`.
   - Mini-Project: Add comments, induce and fix syntax errors.

4. **Why Main**

   - `main` as entry point, linker role. **[Rust-Relevant]** Maps to Rust’s `fn main()` and program entry.
   - Exercise: Rename `main`, observe linker error.
   - Mini-Project: Write program with multiple `printf` statements.

## Module 2: Compilation and Data Types

Goal: Understand compilation pipeline and data types for robust code, preparing for Rust’s type system and memory safety.

5. **Compilation Phases**

   - Stages: Preprocessor (`-E`), compiler (`-S`), assembler (`-c`), linker. **[Rust-Relevant]** Understands Rust’s `cargo` build process and LLVM backend.
   - Exercise: Diagram phases, generate intermediates (`gcc -E`, `-S`, `-c`).
   - Mini-Project: Script to automate phase outputs, inspect with `objdump -D`.

6. **Advanced GCC Commands**

   - Flags: `-Wall` warnings, `-save-temps` intermediates. **[Rust-Relevant]** Aligns with Rust’s `clippy` for code quality.
   - Exercise: Fix warnings in sample code.
   - Mini-Project: Link multi-file program manually.

7. **Data Types and Sizes**

   - Types: `char` (1 byte), `int` (~4 bytes), `float` (32 bits), `double` (64 bits). **[Rust-Relevant]** Maps to Rust’s `i8`, `i32`, `f32`, `f64`.
   - Use `sizeof()`. **[Rust-Relevant]** Compare with Rust’s `std::mem::size_of`.
   - Exercise: Print sizes for all types, compare across machines.
   - Mini-Project: Program to display machine-specific type sizes.

8. **Type Qualifiers, Constants, and Format Specifiers**

   - Qualifiers: `short`, `long`, `signed`, `unsigned`, `const`. **[Rust-Relevant]** `const` maps to Rust’s immutability; `unsigned` to `u32`, `u64`.
   - Constants: Literals (`1234`, `12.34`, `"string"`), `const`, `#define`.
   - Format specifiers: `%d`, `%f`, `%s` for `printf`.
   - Exercise: Print min/max for `signed`/`unsigned`, test overflow.
   - Mini-Project: Math constants calculator using `#define` and `const`.

9. **[Rust-Relevant] Type Casting** (Added)

   - Purpose: Convert types (e.g., `(int)float_val`, `void*` for polymorphism). Critical for Rust’s safe type conversions (`as`, `into`, `try_into`).
   - Exercise: Cast between `int`, `float`, and `void*`, observe behavior.
   - Mini-Project: Implement a generic swap function using `void*` and casts.

## Module 3: Operators and Control Flow

Goal: Build logic and control for problem-solving, aligning with Rust’s pattern matching and control flow.

10. **Arithmetic and Relational Operators**

    - Operators: `+`, `-`, `*`, `/`, `%`, `>`, `<`, `==`. **[Rust-Relevant]** Same in Rust, but safer division (no undefined behavior).
    - Exercise: Evaluate complex expressions with precedence.
    - Mini-Project: Basic calculator with arithmetic ops.

11. **Logical and Bitwise Operators**

    - Logical: `&&`, `||`, `!`. Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>`. **[Rust-Relevant]** Identical in Rust; used in low-level systems code.
    - Exercise: Test short-circuit logic, manipulate bits.
    - Mini-Project: Bit manipulation program to toggle specific bits.

12. **Control Structures**

    - `if`, `if-else`, `switch`, `while`, `do-while`, `for`. **[Rust-Relevant]** Maps to Rust’s `if`, `match`, `loop`, `while`, `for`.
    - Exercise: Write even/odd checker, menu with `switch`.
    - Mini-Project: Leap year validator, multiplication table generator.

13. **Jumping Statements**

    - `break`, `continue`, `goto`. **[Rust-Relevant]** Rust avoids `goto`, uses `break`/`continue` in loops.
    - Exercise: Early loop exit with `break`, skip iterations with `continue`.
    - Mini-Project: Prime number checker with optimized loops.

## Module 4: Functions and Memory

Goal: Modularize code and manage memory effectively, critical for Rust’s ownership and borrowing.

14. **Functions**

    - Define, call, parameters, return types. **[Rust-Relevant]** Maps to Rust’s `fn`, with explicit return types.
    - Exercise: Write add/multiply functions.
    - Mini-Project: Power function with recursion.

15. **Arrays & Pointers**

    - Arrays: Declaration, access, bounds issues. **[Rust-Relevant]** Maps to Rust’s `[T; N]`, `Vec<T>`, slices (`&[T]`).
    - Pointers: `&`, `*`, pointer arithmetic. **[Rust-Relevant]** Critical for Rust’s `&T`, `&mut T`, `*const T`, `*mut T`.
    - Exercise: Print addresses, traverse array via pointers.
    - Mini-Project: Pointer-based string copy, compare with array-based.

16. **Memory Management**

    - Dynamic: `malloc`, `calloc`, `realloc`, `free`. **[Rust-Relevant]** Maps to Rust’s `Box<T>`, `Rc`, `Arc`; eliminates manual `free`.
    - Exercise: Create dynamic array, handle allocation failures.
    - Mini-Project: Singly linked list (insert/delete/traverse) with proper memory cleanup.

17. **Advanced Functions**

    - Function pointers, variadic functions (`va_list`). **[Rust-Relevant]** Function pointers map to Rust’s `dyn Trait` and closures.
    - Exercise: Write comparator for sorting using function pointers.
    - Mini-Project: Custom `printf` implementation with variadic args.

18. **[Rust-Relevant] Structs and Unions** (Added)

    - Structs: Group data, access via `.`, `->`. Critical for Rust’s structs and type system.
    - Unions: Store different types in same memory. Maps to Rust’s enums (`Option`, `Result`).
    - Exercise: Create struct for coordinates, union for int/float storage.
    - Mini-Project: Implement a tagged union to store different data types safely.

## Module 5: Complexity and Analysis

Goal: Master algorithmic efficiency for scalable systems, relevant for Rust’s performance focus.

19. **Time and Space Complexity**

    - Definitions: Time (operations), space (memory). **[Rust-Relevant]** Same in Rust; critical for AlpKid Pro’s low-latency trading.
    - Big-O Notation: `O(1)`, `O(n)`, `O(n^2)`, `O(log n)`, `O(n log n)`, `O(2^n)`.
    - Exercise: Calculate complexity for loops, recursive functions.
    - Mini-Project: Profile time/space for array sum vs. recursive sum.

20. **Amortized Analysis**

    - Concept: Average cost over sequence of operations (e.g., dynamic array resizing). **[Rust-Relevant]** Applies to Rust’s `Vec` resizing.
    - Methods: Aggregate, accounting, potential.
    - Exercise: Analyze amortized cost of stack push/pop.
    - Mini-Project: Implement dynamic array with amortized analysis.

## Module 6: Data Structures

Goal: Build and manipulate advanced data structures, preparing for Rust’s safe data structures.

21. **Arrays and Strings**

    - 1D/2D arrays, null-terminated strings. **[Rust-Relevant]** Maps to Rust’s `&str`, `String`, slices.
    - Operations: Access, traversal, manipulation.
    - Exercise: Sum 2D array, check palindrome.
    - Mini-Project: Matrix transpose, manual string copy with pointers.

22. **Linked Lists**

    - Singly, doubly, circular linked lists. **[Rust-Relevant]** Maps to Rust’s ownership challenges in linked structures.
    - Operations: Insert, delete, traverse, reverse.
    - Exercise: Build singly linked list, reverse it.
    - Mini-Project: To-do list with insert/delete at head/tail.

23. **Stacks and Queues**

    - Stack: Push/pop, array vs. linked implementation. **[Rust-Relevant]** Maps to Rust’s `Vec` for stacks.
    - Queue: Enqueue/dequeue, circular queue, priority queue.
    - Exercise: Implement stack with array, queue with linked list.
    - Mini-Project: Expression evaluator using stack.

24. **Trees**

    - Binary trees, BST, AVL trees, red-black trees. **[Rust-Relevant]** Rust’s ownership makes recursive structures tricky.
    - Operations: Insert, delete, traverse (inorder, preorder, postorder).
    - Exercise: Implement BST insert/search.
    - Mini-Project: File system hierarchy using binary tree.

25. **Graphs**

    - Representations: Adjacency list/matrix. **[Rust-Relevant]** Use Rust’s `Vec` or crates like `petgraph`.
    - Algorithms: BFS, DFS, Dijkstra’s, topological sort.
    - Exercise: Implement adjacency list, run BFS.
    - Mini-Project: Shortest path finder for weighted graph.

26. **Hash Tables**

    - Concepts: Hash functions, collision resolution (chaining, open addressing). **[Rust-Relevant]** Maps to Rust’s `HashMap`.
    - Operations: Insert, search, delete.
    - Exercise: Build hash table with chaining.
    - Mini-Project: Word frequency counter using hash table.

## Module 7: Algorithms

Goal: Master algorithms for efficient problem-solving, aligning with Rust’s performance focus.

27. **Searching Algorithms**

    - Linear search: `O(n)`, sequential scan. **[Rust-Relevant]** Rust’s iterators simplify searches.
    - Binary search: `O(log n)`, sorted array.
    - Exercise: Implement both, compare runtimes.
    - Mini-Project: Search engine for sorted dataset.

28. **Sorting Algorithms**

    - Bubble sort: `O(n^2)`, compare and swap.
    - Quick sort: `O(n log n)` average, pivot-based.
    - Merge sort: `O(n log n)`, divide-and-conquer. **[Rust-Relevant]** Rust’s `sort` methods are optimized.
    - Exercise: Implement quicksort, measure performance.
    - Mini-Project: Sort large dataset, optimize for cache.

29. **Graph Algorithms**

    - BFS/DFS: Traversal, cycle detection.
    - Dijkstra’s: Shortest path for weighted graphs.
    - Kruskal’s/Prim’s: Minimum spanning tree.
    - Exercise: Implement Dijkstra’s on adjacency list.
    - Mini-Project: Network routing simulator.

30. **Dynamic Programming**

    - Concepts: Memoization, tabulation, overlapping subproblems. **[Rust-Relevant]** Rust’s ownership aids memoization.
    - Examples: Fibonacci, knapsack, longest common subsequence.
    - Exercise: Solve knapsack with tabulation.
    - Mini-Project: Text alignment optimizer.

31. **Greedy Algorithms**

    - Concepts: Local optimal choices for global solution.
    - Examples: Activity selection, Huffman coding.
    - Exercise: Implement Huffman coding.
    - Mini-Project: File compression tool.

## Module 8: Advanced Systems Programming

Goal: Build high-performance systems, critical for Rust’s systems programming strengths.

32. **File I/O**

    - Functions: `fopen`, `fclose`, `fread`, `fwrite`, `fprintf`. **[Rust-Relevant]** Maps to Rust’s `std::fs`, `std::io`.
    - Modes: `r`, `w`, `a`.
    - Exercise: Write/read text file.
    - Mini-Project: Logger with timestamped entries.

33. **Concurrency with Pthreads**

    - Threads, mutexes, semaphores. **[Rust-Relevant]** Critical for Rust’s `Mutex`, `Arc`, `async/await`.
    - Exercise: Create parallel threads for summation.
    - Mini-Project: Parallel matrix multiplication.

34. **Networking Basics**

    - Sockets: TCP/UDP, client-server model. **[Rust-Relevant]** Maps to Rust’s `std::net` or `tokio`.
    - Exercise: Build echo server.
    - Mini-Project: Simple chat application.

35. **System Calls**

    - `fork`, `exec`, `pipe`, signals. **[Rust-Relevant]** Rust’s `std::process` for safe process handling.
    - Exercise: Create child process with `fork`.
    - Mini-Project: Mini shell with basic commands.

36. **[Rust-Relevant] Foreign Function Interface (FFI)** (Added)

    - Purpose: Call C functions from other languages or vice versa. Critical for Rust’s `extern "C"` and `libc` crate.
    - Exercise: Write C function, call from another C program.
    - Mini-Project: Wrap C function in a safe interface for a mock Rust FFI.

## Module 9: Optimization and Ecosystem

Goal: Optimize code and integrate with modern development practices, preparing for Rust’s ecosystem.

37. **Debugging and Optimization**

    - Tools: GDB, Valgrind, perf. **[Rust-Relevant]** Maps to Rust’s `cargo`, `clippy`, `miri`.
    - Techniques: Breakpoints, leak detection, loop unrolling.
    - Exercise: Fix segfault, optimize loop.
    - Mini-Project: Leak-free matrix multiply.

38. **Build Systems and Standards**

    - Make, CMake, C11/C17, avoid undefined behavior. **[Rust-Relevant]** Maps to Rust’s `cargo` and strict safety.
    - Exercise: Write multi-file Makefile.
    - Mini-Project: Build custom library.

39. **Version Control and Contribution**

    - Git: commit, branch, merge. **[Rust-Relevant]** Essential for Rust’s open-source ecosystem.
    - Exercise: Fork repo, submit pull request.
    - Mini-Project: Contribute to C-based open-source project.

## Module 10: Competitive Programming and Capstone

Goal: Apply skills to competitive and industry challenges, preparing for Rust’s real-world applications.

40. **Competitive Programming**

    - Time/space complexity, LeetCode challenges. **[Rust-Relevant]** Rust’s performance is ideal for competitive programming.
    - Exercise: Solve medium/hard problems in C.
    - Mini-Project: Optimize solution for leaderboard.

41. **Capstone Project**

    - Build a system: Lightweight database, network server, or embedded system. **[Rust-Relevant]** Design with Rust’s ownership and traits in mind.
    - Requirements: Use pointers, structs, file I/O, function pointers, concurrency, optimization.
    - Outcome: Scalable, production-ready C application, translatable to Rust for AlpKid Pro or Koel auth.
