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

## Common Instruction Set Architectures (ISAs)

## Instruction Set Architecture (ISA) is the **language** that a CPU understands. It defines the set of binary commands (called instructions) that a CPU can execute to perform operations.

## Simple Example of ISA Instructions

Imagine a simple CPU that understands only a few instructions like:

| Instruction   | Description                                              |
| ------------- | -------------------------------------------------------- |
| ADD R1, R2    | Add the value in register R2 to R1                       |
| LOAD R1, 100  | Load the value from memory address 100 into register R1  |
| STORE R1, 200 | Store the value from register R1 into memory address 200 |
| JMP 300       | Jump to instruction at address 300                       |
| CMP R1, R2    | Compare values in R1 and R2                              |

Each of these instructions is represented as a **binary pattern** in actual machine code, for example:

- ADD R1, R2 might be encoded as: `0001 0001 0010`
- LOAD R1, 100 might be encoded as: `0010 0001 01100100`

---

## Breakdown

- These instructions tell the CPU **what to do** in simple steps.
- The CPU can recognize and execute these commands because it is designed (wired) to understand these binary patterns.
- Different CPUs have different ISAs (sets of instructions and encodings) like ARM, x86, and RISC-V.

---

## Why ISA Matters

- It provides a consistent way for software (compilers, operating systems) to communicate with hardware.
- Without ISAs, software would have no common language to tell different CPUs what to do.
- ISAs help hardware and software evolve separately but stay compatible.

---

ARM provides a blueprint (the ISA) that defines how a CPU should process instructions.
CPU manufacturers use this blueprint to design and build the CPU hardware — essentially wiring and connecting circuits so the chip understands and executes those instructions.

- This blueprint covers things like:

- The exact binary instruction formats,

- What each instruction does,

- How data moves around inside the CPU,

- How the CPU handles branching and arithmetic, etc.

- ARM’s ISA is a guide to create compatible CPUs (like Apple’s A17 Pro chip) that understand ARM instructions and carry them out efficiently.

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

When you run your compiled program (`./program`), the **OS kernel** performs several critical tasks to prepare and execute your program:

1. **Process Creation:**  
   The kernel creates a _process_ — a sandboxed environment with its own memory space and system resources dedicated to your program.

2. **Memory Allocation:**  
   The kernel sets up _virtual memory_ for the process, dividing it into segments:
   (WE WILL LEARN THIS IN FURTHER DISCUSSIONS)

   - **Text segment:** Contains your program’s machine code instructions loaded into RAM.
   - **Data segments:** Holds static or global variables.
   - **Heap:** Manages dynamic memory for allocations (e.g., `malloc` in C or `Box` in Rust).
   - **Stack:** Stores function call frames, local variables, and manages control flow.

3. **File System Access:**  
   The kernel reads the executable file from disk, using file system drivers, and loads the necessary contents (code and data) into memory.

4. **Scheduling:**  
   The kernel schedules your process on the CPU cores, deciding when and for how long your program runs.

---

### Background Context: Boot Process and Firmware

- Before the OS kernel takes control, the computer’s **firmware (BIOS or UEFI)** runs when the system powers on.

## What is Firmware?

- Firmware is a small, low-level program embedded on a chip on your computer’s motherboard.
- It initializes hardware and provides an interface between the operating system and the hardware.
- Firmware runs **right after you power on** your computer.

---

### What is BIOS?

- BIOS stands for **Basic Input/Output System**.
- It is a type of firmware stored on a chip (EPROM) on your motherboard.
- BIOS initializes hardware components (CPU, memory, devices) and starts the boot process.
- It runs in a basic, text-only interface.
- BIOS loads the bootloader (like GRUB) to start the operating system.

---

## What is GRUB?

- **GRUB** stands for **GNU GRand Unified Bootloader**.
- It is a small program that runs **right after your computer is powered on**.
- GRUB’s job is to **load the operating system kernel into memory** and then hand over control to it.
- Think of GRUB as a **gatekeeper** between your computer’s hardware and the OS.
- It can also provide a menu if multiple operating systems are installed, letting you choose which one to boot.
- GRUB supports many file systems and hardware setups, making it very versatile for Linux and Unix-based systems.

### What is UEFI?

- UEFI stands for **Unified Extensible Firmware Interface**.
- It is a modern replacement for BIOS with more features:
  - Supports large hard drives (>2 TB).
  - Faster boot times.
  - Graphical user interface with mouse support.
  - Enhanced security (Secure Boot).
- Like BIOS, UEFI initializes hardware and loads the bootloader to start the OS.

---

### Summary

- **Booting** is the process of starting a computer and loading the operating system.
- When the computer powers up, firmware (like BIOS or UEFI) runs first.
- The firmware then loads the **bootloader** (like GRUB).
- The bootloader loads the operating system kernel into the main memory.
- Once loaded, the kernel takes control and starts running program

---

This sequence ensures your program is loaded into memory correctly, provided with its execution environment, and scheduled efficiently by the operating system.

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
