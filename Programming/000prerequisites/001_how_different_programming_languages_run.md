# From Code to Execution: How Programs Run on Your Computer with OS and CPU Basics

Understanding how your code runs involves several layers: the Operating System (OS), the CPU hardware, and the instruction set architecture. We will walk through this process chronologically using a simple programming example.

---

## Step 1: Writing Source Code

You write source code in a high-level language like C or Rust. For example:

```c
#include <stdio.h>

int main() {
int a = 2, b = 2;
int sum = a + b; // Task 1: compute addition
printf("Sum: %d\n", sum); // Task 2:
}
```

---

## Step 2: Compilation and Machine Code Generation

- The **compiler** (e.g., `gcc` for C, `rustc` for Rust) translates your human-readable source code into **machine code**, which is a set of binary instructions your CPU understands.
- This machine code is specific to your CPU's **Instruction Set Architecture (ISA)**.

**Common ISAs (Instruction Set Architectures):**

- **x86 / x86-64 (CISC architecture):** Most Intel and AMD processors.
- **ARM (RISC architecture):** Common in mobile devices and increasingly in laptops/desktops.
- **RISC-V (open-source architecture):** Emerging ISA designed for simplicity and efficiency.

---

## Step 3: Loading the Program - The Operating System's Role

When you run your compiled program (`./program`), the **OS kernel** performs:

1. **Process Creation:** The kernel creates a _process_ — a sandboxed environment with its own memory and resources.
2. **Memory Allocation:** Sets up _virtual memory_ space for your program, organizing it into:
   - **Text segment:** Your program’s instructions (machine code).
   - **Data segments:** Static/global variables.
   - **Heap:** Dynamic memory (e.g., allocated with `malloc` or Rust’s `Box`).
   - **Stack:** For function call frames and local variables.
3. **File System Access:** Prepares to load the executable from disk (managed by the kernel and file system drivers).
4. **Scheduling:** The kernel schedules your process on CPU cores.

---

## Step 4: Execution on the CPU

- Once loaded into memory, the **CPU** executes your program’s machine code.
- The CPU uses the **fetch-decode-execute cycle**:
  1. **Fetch:** Retrieve the next instruction pointed to by the Program Counter.
  2. **Decode:** Interpret the instruction to understand what operation to perform.
  3. **Execute:** Perform the operation using CPU components like:
     - **ALU (Arithmetic Logic Unit):** For calculations like addition.
     - **Registers:** Small, fast storage for current values.
     - **MMU (Memory Management Unit):** Translates virtual addresses to physical RAM locations.
- Your program’s tasks (like computing `sum` and printing) are transformed into low-level CPU instructions handled in this cycle.

---

## Step 5: Multi-Core and Threading

- Modern CPUs have multiple **cores**—each can run threads independently.
- Your program runs as one or more **threads**, each with a Program Counter and registers.
- The OS kernel manages threads and assigns them to cores to balance workload and maximize performance.

---

## Step 6: System Calls and Interaction with OS

- When your program prints the result (`printf`), it performs a **system call**:
  - The CPU switches from _user mode_ (running your program) to _kernel mode_ (OS trusted code).
  - The OS handles I/O tasks like interacting with the display hardware or writing to files.
  - Control returns to your program after the OS completes the operation.

---

## Summary: Chronological Flow

| Step                      | Responsible Component    | Description                                       |
| ------------------------- | ------------------------ | ------------------------------------------------- |
| 1. Write source code      | Programmer               | Code in C, Rust, etc.                             |
| 2. Compile code           | Compiler                 | Converts source to machine code for CPU ISA       |
| 3. Load program           | OS Kernel, File System   | Creates process, allocates memory, loads binary   |
| 4. Execute instructions   | CPU (Core, ALU, MMU)     | Runs machine code with fetch-decode-execute cycle |
| 5. Manage threads & cores | OS Kernel, CPU           | Schedules threads to CPU cores                    |
| 6. Perform I/O            | OS Kernel (System Calls) | Handles interaction with hardware                 |

---

This understanding clarifies how your high-level code transforms into running programs tightly coordinated by the OS and executed efficiently on hardware with specific instruction sets.

## JavaScript: Single-Threaded Explained

- **Single-Threaded**: JavaScript runs on a single thread (conveyor belt) in its execution environment (e.g., browser like Chrome, or Node.js). At any given time, this thread can execute only one task, using only one core.
- **How It Works**: JS has an event loop that manages tasks in a queue. The single thread picks one task at a time from the queue, delivers it to the core, and the core executes it. Tasks (e.g., run a function, handle a click event) are executed sequentially—no parallel task execution within the JS engine.
- **Example**:

  ```javascript
  let a = 2,
    b = 2;
  let sum = a + b; // Task 1
  console.log(sum); // Task 2
  ```

- **Async in JS**: JS can seem to multitask (e.g., `setTimeout`, `fetch`) using async, but it’s not parallel—it offloads tasks (e.g., network requests) to the browser/Node.js runtime, and the event loop handles callbacks later on the same thread.
