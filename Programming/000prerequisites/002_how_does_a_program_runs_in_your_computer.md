# How Programs Run: From Source Code to Execution

Understanding how your code transforms from human-readable text into a running program involves four key players: **Compiler**, **Operating System (OS)**, **CPU**, and **Memory Management Unit (MMU)**.

---

## Phase 1: Before Execution - The Compilation Process

The **compiler's primary job** is to convert high-level language (Rust, C, Go, etc.) into machine code that the CPU can execute directly.

### Compilation Pipeline

```rust
// Example Rust code
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let sum: i32 = numbers.iter().sum();
    println!("Sum: {}", sum);
}
```

**Compilation Steps:**

## Choosing the Right Phase Model – First Principles

At the core, every program goes through these fundamental steps:

1. **High-Level Code → Compiler IR**

   - Transforms human-readable syntax into a uniform, analyzable form (IR).
   - Enables semantic checks (types, borrow rules) and early optimizations.

2. **IR → Assembly / Machine Code**

   - Low-level translation: IR maps to CPU-specific instructions (assembly), then to binary object code.
   - This is where constant expressions get folded (e.g., `2+3` → `5`) by the compiler itself, before the CPU ever runs your program.

3. **Assembly/Object Code → Linked Executable**

   - The linker resolves external symbols (like `printf`) by embedding or referencing library code.
   - Produces a self-contained binary ready for loading.

4. **Loader → Runtime Execution**
   - The OS loader maps the executable into memory (text, data, heap, stack), sets up the process, and jumps to `main`.
   - Finally, the CPU executes each machine instruction via fetch-decode-execute, invoking system calls when I/O is needed.

---

**Result:** You end up with a standalone binary (`./my_program`) that the OS can load and the CPU can execute directly.

## Phase 2: Program Loading - OS Takes Control

When you run `./my_program`, the OS is responsible for preparing everything:

### OS Loading Process

#### **Step 1: Executable Discovery**

- OS locates the binary file on disk
- Reads file headers to understand program structure (ELF on Linux, PE on Windows)

#### **Step 2: Virtual Memory Setup**

- Creates a **virtual address space** for the program (typically 4GB on 32-bit, 256TB on 64-bit)
- Maps virtual addresses to physical RAM through page tables

#### **Step 3: Memory Layout Creation**

```txt
High Memory (0xFFFFFFFF)
+---------------------------+
| Command-line Arguments    | ← argc, argv[]
| Environment Variables     | ← PATH, HOME, etc.
+---------------------------+
| Stack                     | ← Grows downward ↓
| (Function calls, locals)  |   8MB default on Linux
+---------------------------+
|                           |
| ↕ Unused Virtual Space ↕  | ← Stack ↔ Heap collision protection
|                           |
+---------------------------+
| Heap                      | ← Grows upward ↑
| (Dynamic allocation)      |   Vec, String, Box allocations
+---------------------------+
| BSS Segment               | ← Uninitialized global/static vars
| (Zero-initialized)        |   Set to zero by OS
+---------------------------+
| Data Segment              | ← Initialized global/static vars
| (Read/Write)              |   static mut COUNTER: i32 = 0;
+---------------------------+
| Text Segment              | ← Program instructions (Read-only)
| (Machine Code)            |   Your compiled Rust code
+---------------------------+
Low Memory (0x00000000)
```

#### **Step 4: Process Creation**

- Assigns Process ID (PID)
- Sets up process control block (PCB) with execution state
- Initializes CPU registers, including Program Counter (PC)

#### **Step 5: Dynamic Linking (if needed)**

- Loads shared libraries into memory
- Resolves external function addresses
- Updates Global Offset Table (GOT) and Procedure Linkage Table (PLT)

---

## Phase 3: Program Execution - CPU in Action

The **CPU executes your program** using the fetch-decode-execute cycle, but modern processors are far more sophisticated than simple sequential execution.

### CPU Execution Cycle

```txt
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   FETCH     │───>│   DECODE    │───>│   EXECUTE   │───>│   WRITEBACK │
│ Get next    │    │ Understand  │    │ Perform     │    │ Store       │
│ instruction │    │ instruction │    │ operation   │    │ results     │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
       ▲                                                         │
       └─────────────────────────────────────────────────────────┘
                              Repeat until program exits
```

**Modern CPU Enhancements:**

1. **Instruction Pipeline**

   - Multiple instructions processed simultaneously at different stages
   - While one instruction executes, the next is being decoded, and another is being fetched

2. **Branch Prediction**

   - CPU predicts which way `if` statements will go
   - Speculatively executes likely path to avoid pipeline stalls

3. **Out-of-Order Execution**

   - Instructions can execute in different order if no dependencies exist
   - Maximizes CPU resource utilization

4. **Cache Hierarchy**
   - **L1 Cache**: Fastest, smallest (32KB), per-core
   - **L2 Cache**: Medium speed/size (256KB), per-core
   - **L3 Cache**: Slower, larger (8MB+), shared across cores
   - Frequently accessed data stays close to CPU for speed

### Memory Management During Execution

**Virtual Memory Translation:**

```txt
Virtual Address → MMU → Physical Address
    0x08000000    →     →    0x1A2B3000
```

- Memory Management Unit (MMU) translates virtual to physical addresses
- Page faults trigger OS to load data from disk if not in RAM
- Copy-on-Write: Multiple processes can share read-only pages

**Stack Operations:**

```rust
fn calculate(x: i32) -> i32 {  // ← Stack frame created
    let temp = x * 2;          // ← Local variable on stack
    temp + 10                  // ← Return value
}                              // ← Stack frame destroyed
```

**Heap Operations:**

```rust
let numbers = vec![1, 2, 3];   // ← Heap allocation
// Vec metadata on stack, actual data on heap
drop(numbers);                 // ← Heap deallocation (automatic in Rust)
```

---

## Phase 4: System Interactions - Beyond Pure Computation

Real programs interact with the outside world through **system calls**.

### System Call Mechanism

```rust
use std::fs::File;
use std::io::prelude::*;

fn main() {
    // This println! eventually becomes a write() system call
    println!("Hello, World!");

    // File operations require multiple system calls
    let mut file = File::create("output.txt").unwrap(); // open() syscall
    file.write_all(b"Hello file").unwrap();             // write() syscall
}   // File closed here via close() syscall
```

**System Call Process:**

1. Program requests OS service (file I/O, network, etc.)
2. CPU switches from **user mode** to **kernel mode**
3. OS validates request and performs operation
4. Control returns to program with result

### Multi-tasking and Scheduling

Modern systems run hundreds of programs simultaneously through **time-sharing**:

1. **Timer Interrupts**: Hardware timer triggers every few milliseconds
2. **Context Switch**: OS saves current program state and loads another
3. **Scheduler**: Decides which program runs next based on priority, fairness
4. **Return**: Eventually, your program gets CPU time again

---

## Phase 5: Program Termination - Cleanup

When your program ends (reaches end of `main()` or calls `exit()`):

### Cleanup Process

1. **Return Code**: Program provides exit status (0 = success, non-zero = error)
2. **Resource Deallocation**:
   - Stack memory automatically freed
   - Heap memory freed (garbage collected or explicit deallocation)
   - File descriptors closed
   - Network connections terminated
3. **Process Removal**: OS removes process from active process table
4. **Parent Notification**: If program was launched by shell, parent process is notified

---

## Summary

| **Phase**              | **Responsible Component**    | **Key Activities**                   |
| ---------------------- | ---------------------------- | ------------------------------------ |
| **Compilation**        | Compiler (rustc, gcc, clang) | Source code → Optimized machine code |
| **Loading**            | Operating System             | Binary → Virtual memory layout       |
| **Execution**          | CPU + MMU                    | Machine code → Computations          |
| **System Interaction** | OS Kernel                    | System calls, I/O operations         |
| **Termination**        | Operating System             | Resource cleanup, process removal    |

### Real-World Example Flow

```txt
1. You write: `rustc main.rs -o my_program`
2. Compiler generates: Binary executable with machine code
3. You run: `./my_program arg1 arg2`
4. OS creates: Virtual memory space, loads binary
5. CPU executes: Fetch-decode-execute cycle begins
6. Program requests: File I/O via system calls
7. OS schedules: Your program among hundreds of others
8. Program completes: Exit code returned, memory freed
```
