# From Code to Execution: How Programs Run on Your Computer with OS and CPU Basics

Understanding how your code runs involves several layers:

- the Operating System (OS),
- the CPU hardware,
- and the instruction set architecture.
  We will walk through this process chronologically using a simple programming example.

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

- The **compiler** (language translator) (e.g., `gcc` for C, `rustc` for Rust) translates your human-readable source code into **machine code**, which is a set of binary instructions your CPU understands.
- C/rust --> COMPILER --> binary / machine code
- This machine code is specific to your CPU's **Instruction Set Architecture (ISA)**.

# Common Instruction Set Architectures (ISAs)

**Instruction Set Architecture (ISA)** defines how a processor executes instructions and communicates with software.

---

## x86 / x86-64 (CISC Architecture)

- **Developed by:** Intel (1978), later adopted by AMD
- **Type:** CISC (Complex Instruction Set Computer)
- **Key features:**
  - Complex instructions that can perform multiple operations
  - Backwards compatibility with older software
- **Mostly found in:**
  - Desktop PCs
  - Laptops
  - Servers
- **Examples:**
  - Intel Core series processors
  - AMD Ryzen processors

---

## ARM (RISC Architecture)

- **Developed by:** ARM Holdings (1983)
- **Type:** RISC (Reduced Instruction Set Computer)
- **Key features:**
  - Simple and fast instructions
  - Focus on energy efficiency and low power consumption
- **Common uses:**
  - Mobile devices (smartphones, tablets)
  - Embedded systems
  - Increasingly in laptops and desktops
- **Examples:**
  - Apple M1 and M2 chips
  - Qualcomm Snapdragon processors
  - Raspberry Pi (some versions)

---

## RISC-V (Open-source RISC Architecture)

- **Developed by:** University of California, Berkeley (2010)
- **Type:** RISC and open-source (free to use and modify)
- **Key features:**
  - Modular and simple design
  - Allows customization and extension by users
  - Supports academic and commercial innovation
- **Growing use in:**
  - Research projects
  - IoT and embedded devices
  - Emerging commercial processors
- **Examples:**
  - experimental chips

---

## Is RISC-V Fixing ARM's Issues?

- RISC-V is inspired by the same **RISC (Reduced Instruction Set Computer)** principles as ARM but designed to be **open-source and highly modular**.
- Unlike ARM, whose architecture and cores are **proprietary and license-based**, RISC-V is **free to use, extend, and customize without licensing fees**.
- This open and modular design allows chip makers to:
  - Build custom processors tailored exactly for their needs.
  - Avoid vendor lock-in and high licensing costs.
  - Encourage innovation with custom extensions.
- RISC-V is growing especially in fields like IoT, embedded systems, AI accelerators, and academic research where flexibility and cost are major factors.

## Why is it called RISC-V?

- The **"V"** in RISC-V means **"5"**, representing the **fifth generation** of RISC ISA developed at the University of California, Berkeley in 2010.
- It continues the lineage of earlier RISC research and projects, marking a new, modern, and open iteration.
- The name distinguishes it from previous internal RISC projects and emphasizes its modern, clean-slate design.

## Key Differences Between RISC-V and ARM

| Feature         | RISC-V                               | ARM                                |
| --------------- | ------------------------------------ | ---------------------------------- |
| Licensing Model | Open-source, free to use             | Proprietary, paid licenses         |
| Customizability | Highly modular and extensible        | Less customizable, fixed cores     |
| Ecosystem       | Growing ecosystem, new adoption      | Mature, vast ecosystem             |
| Performance     | Flexible, varies with implementation | Highly optimized, consistent       |
| Use Cases       | IoT, embedded, research, customized  | Mobile, embedded, servers, laptops |

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
