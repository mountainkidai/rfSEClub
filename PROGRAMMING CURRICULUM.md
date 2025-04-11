# Programming Curriculum for rfSE Club | HP Initiative(First-Principles Approach)

## Level 2: How Computers Work (Expanded)

### 2.1 Overview of Computers

- **Input, Memory, Processing, Output**: Understanding the basic flow of a computer system.
- **Evolution of Computers**:
  - **The Beginning of Computation Devices**: Abacus, mechanical calculators (e.g., Pascaline, 1642).
  - **The Invention of the Computer**: Charles Babbage’s Analytical Engine (1837), ENIAC (1945) as the first electronic computer.
  - **Generations of Computers**: Vacuum tubes (1st gen), transistors (2nd gen), integrated circuits (3rd gen), microprocessors (4th gen), AI and quantum computing (5th gen).
- **Hardware**:
  - **Logical vs. Physical Structure**: CPU, memory, I/O devices vs. motherboard, RAM, hard disk.
  - **RAM vs. Hard Disk**: Volatile (RAM) vs. non-volatile (HDD/SSD) storage, speed, and use cases.
  - **Understanding Computer Configuration**: CPU (e.g., clock speed, cores), GPU, RAM size, storage capacity.
- **Software in Brief**:
  - **System Software**: OS (Windows, Linux), drivers.
  - **Application Software**: Browsers, IDEs, apps.
  - **Firmware**: BIOS/UEFI, embedded systems.
- **Algorithms and Programming**:
  - **What is an Algorithm?**: Step-by-step problem-solving process.
  - **Programming, Coding, and Languages**: Writing instructions for computers.
  - **Program**: A set of instructions in a programming language.
  - **Machine Code (Binary)**: 0s and 1s, the language computers understand.
  - **Assembly Language**: Mnemonics (e.g., ADD, MOV), closer to human-readable.
  - **Language Translator (Assembler)**: Converts assembly to machine code.
  - **High-Level Languages**: C, Python, JavaScript—easier for humans.
  - **Compiler, Interpreter, JIT Compilation**: Compiler (translates entire code, e.g., C), interpreter (line-by-line, e.g., Python), JIT (hybrid, e.g., Java).
  - **List of High-Level Languages**: C, C++, Java, Python, JavaScript, Ruby.
  - **Classification of High-Level Languages**: Procedural (C), Object-Oriented (Java), Functional (Haskell), Scripting (JavaScript).

### Level 3: Version Control (Git/GitHub)

- **Introduction to Git**:
  - What is Git?: Version control system for tracking code changes.
  - Importance in Software Development: Collaboration, history tracking.
  - Basic Git Terminology: Repository, commit, branch, merge.
- **Getting Started with Git**:
  - Installing Git: Instructions for Windows, macOS, Linux.
  - Configuring Git: Setting user information, global settings.
- **Basic Git Operations**:
  - Creating a Repository (git init).
  - Cloning a Repository (git clone).
  - Staging Changes (git add).
  - Committing Changes (git commit).
  - Viewing Status (git status), Commit History (git log).
- **Branching and Merging**:
  - Creating, Listing, Deleting Branches.
  - Switching Branches (git switch, git checkout).
  - Merging Changes: Process, resolving conflicts.
- **Remote Repositories**:
  - Pushing Changes (git push).
  - Pulling Changes (git pull).
  - Fetching Changes (git fetch).

### Level 4: JS Basics

- **Variables**: let, const, variable mutation.
- **Primitive Types**: Numbers, Strings, Undefined, null, Boolean, Symbol.
- **Static vs. Dynamic Typing**: Conceptual differences.
- **Operators**: Assignment, Arithmetic, Logical, Increment/Decrement.
- **Control Statements**: if, if-else, switch.
- **Loops**: for, while, do-while.
- **Jumping Statements**: break, continue.
- **Arrays**: Basic usage, methods (push, pop, map, filter).
- **Built-in Math Functions**: Math.round, Math.floor, Math.random.
- **Objects**: Object literals, property access.
- **Function Types**: Regular, expressions, anonymous, arrow, callbacks.

### Level 5: Asynchronous JavaScript

- **Sync vs. Async Theory**: Synchronous vs. asynchronous execution.
- **Event-Driven Architecture**: Callbacks, event loop.
- **Promises**: States (pending, fulfilled, rejected), chaining (.then, .catch).
- **Async/Await**: async functions, await keyword, error handling.
- **Timers**: setTimeout, setInterval, clearing timers.

### Level 6: ES6+ and Beyond

- **Destructuring**: Arrays, objects.
- **Rest & Spread Operators**: Hashmaps.
- **Block Scope & IIFEs**: Hoisting (var vs. let/const).
- **String Methods**: ES6+ enhancements.
- **Array Methods**: Map, filter, find.
- **this Keyword**: Nuances in different contexts.
- **OOP in JS**: Prototypes, constructors, classes.

### Level 21: C Programming

- **Introduction to C**:
  - Why C?: Low-level control, performance, hardware interaction.
  - History: Developed by Dennis Ritchie (1972), Bell Labs.
- **Basics**:
  - Syntax: Structure of a C program (main function, #include).
  - Data Types: int, float, char, double.
  - Variables and Constants: Declaration, initialization.
  - Input/Output: printf, scanf.
- **Control Structures**:
  - Conditionals: if, else-if, switch.
  - Loops: for, while, do-while.
  - Break, Continue: Flow control.
- **Functions**:
  - Declaration, Definition, Calling.
  - Pass by Value vs. Pass by Reference (pointers).
- **Arrays and Strings**:
  - Arrays: Declaration, initialization, accessing elements.
  - Strings: char arrays, string.h functions (strlen, strcpy).
- **Pointers**:
  - Pointer Basics: Declaration, dereferencing.
  - Pointer Arithmetic: Incrementing, decrementing.
  - Pointers and Arrays: Relationship.
- **Memory Management**:
  - Stack vs. Heap: Automatic vs. dynamic allocation.
  - malloc, calloc, free: Dynamic memory allocation.
  - Memory Leaks: Common pitfalls.
- **Structures and Unions**:
  - Structures: Defining, accessing members.
  - Unions: Memory sharing.
- **File Handling**:
  - Reading/Writing Files: fopen, fclose, fprintf, fscanf.
- **Project**: Build a simple calculator in C, managing memory and file I/O.

### Level 22: HTML, JS, CSS

- **HTML**:
  - **Basics**: All topics ,
- **CSS**:
  - **Basics**: Syntax (selector { property: value; }).
  - **Box Model**: Margin, padding, border, content.
  - **Positioning**: Static, relative, absolute, fixed, sticky.
  - **Flexbox and Grid**: Layout design.
  - **Responsive Design**: Media queries, viewport.
  - **Animations**: Keyframes, transitions.
- **JavaScript (Expanded from Level 4)**:
  - **DOM Manipulation**: document.getElementById, querySelector.
  - **Events**: onclick, onsubmit, event listeners.
  - **Dynamic Updates**: Changing HTML/CSS via JS.
- **Project**: Build a responsive webpage (e.g., a student dashboard) using HTML, CSS, and JS.

### Level 23: React & Memory Management

- **React**:
  - **Components**: Functional vs. class components.
  - **State and Props**: Managing data, passing data between components.
  - **Hooks**: useState, useEffect, useMemo, useCallback.
  - **Routing**: React Router for navigation.
  - **State Management**: Context API, Recoil.
- **Memory Management**:
  - **Memory Basics**: Stack (function calls), Heap (dynamic memory).
  - **Garbage Collection in JS**: Mark-and-sweep algorithm.
  - **Memory Leaks in React**: Unsubscribed event listeners, improper state updates.
  - **Optimization**: useMemo, useCallback to prevent unnecessary renders.
  - **Profiling**: React DevTools to identify memory issues.
- **Project**: Build a memory-efficient React app (e.g., a student progress tracker) with optimized state management.
