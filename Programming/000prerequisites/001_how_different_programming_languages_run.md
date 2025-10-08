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

### Step 4: Execution on the CPU – How ISA and Memory Work Together (From First Principles)

To understand how a CPU runs a program, start with the most basic idea:

- The **CPU understands a language** called the Instruction Set Architecture (ISA).
- ISA defines the **binary instructions** (series of 0s and 1s) the CPU knows and what each instruction does.
- The CPU reads, decodes, and executes these instructions step-by-step using a process called the **fetch-decode-execute cycle**.

---

## What is the ISA?

- Think of the ISA as the **rulebook or language** the CPU speaks.
- The program you write gets translated into this language (machine code) so the CPU can run it.
- Each instruction has a precise meaning, like "add these two numbers" or "store this value in memory."

---

## How Does Memory Support ISA Execution?

The CPU can’t work without memory to store instructions and data. Memory works in a hierarchy based on speed and size:

### 1. Registers: The CPU’s Working Desk

- Registers are the CPU's **smallest and fastest memory**.
- They hold the data the CPU is currently working on.
- Imagine a small desk where you keep only the papers you are actively using.
- **Example:** When adding 2 + 3, CPU places 2 and 3 in registers, adds them, and stores the result back in a register.

### 2. Cache Memory: The Nearby Drawer

- Cache is a small, fast storage area right next to the CPU.
- Think of it as a drawer where you keep frequently used papers to avoid searching the whole room repeatedly.
- Cache reduces delays accessing data and instructions.
- **Example:** The instruction "load value" or recently used numbers might be in cache for quick access.

### 3. Main Memory (RAM): The Filing Cabinet

- RAM is larger but slower than cache.
- It keeps the full program and data while your computer is on.
- Think of RAM as a filing cabinet where you store all the documents needed for your current work.
- **Example:** The whole Rust program you're running, including `let a = 2; let b = 3; let sum = a + b;` is stored in RAM.

### 4. Secondary Storage (Hard Drive / SSD): The Storage Room

- This is the slowest but largest memory.
- It keeps files and programs **permanently**, even when power is off.
- Imagine a storage room where you keep all your archived records and only bring what you need to the office.
- When you run a program, the OS copies it from this storage into RAM.

---

## Putting It All Together: Execution Flow

1. The program binary is loaded from secondary storage into RAM by the operating system.
2. The CPU fetches instructions from RAM or cache, reading binary patterns defined by ISA.
3. Values being operated on (like numbers 2 and 3) go into registers.
4. The CPU performs operations (like addition) via its Arithmetic Logic Unit (ALU), following ISA instructions.
5. Intermediate results stay in registers until stored back in RAM or used further.
6. This cycle repeats for every instruction until the program completes.

---

## Summary (From First Principles)

- The **ISA** defines how instructions are encoded and what the CPU must do.
- The CPU hardware is physically designed to interpret and execute this instruction set.
- Memory hierarchy (registers, cache, RAM, storage) exists to balance speed and size constraints.
- Together, ISA and memory enable the CPU to execute programs efficiently and correctly, from the simplest calculation to complex applications.

This foundational understanding demystifies how your Rust program or any software actually _runs_ on a processor at the hardware level.

## Memory Hierarchy Sizes and Quantities

Understanding memory sizes and quantities helps clarify how computers balance speed, cost, and capacity to efficiently run programs.

---

## 1. Registers: Tiny but Lightning Fast

- Registers are the **smallest and fastest memory units inside the CPU**.
- Typical Quantity: Between **16 to 128 registers**, depending on the CPU architecture.
- Typical Size: Each register is usually **32-bit or 64-bit** wide (matching the CPU’s word size).
- Size Example: Total register file size is roughly a few kilobytes (KB) or less.
- Registers store immediate values and computation results for the CPU’s current instruction.

---

## 2. Cache Memory: Small, Fast Layers Near CPU

- Cache memory sits between registers and main memory to speed access to frequently used data.
- Organized in **levels:** L1, L2, L3.

| Cache Level | Typical Size                    | Purpose                                                           |
| ----------- | ------------------------------- | ----------------------------------------------------------------- |
| L1 Cache    | ~16KB to 128KB per core         | Fastest cache, split into instruction and data caches             |
| L2 Cache    | ~256KB to 2MB per core          | Slower but larger; holds more data                                |
| L3 Cache    | ~2MB to 64MB shared among cores | Slowest and largest cache, shared for communication between cores |

- Cache sizes are small compared to RAM but improve performance significantly by reducing memory access times.

---

## 3. Main Memory (RAM): Larger but Slower

- RAM stores all actively used programs and data.
- Typical Size: Most modern computers have between **4GB to 64GB or more** of RAM.
- Type and Speed:
  - **DRAM:** Large capacity, slower speed; requires refreshing every few milliseconds.
  - **SRAM:** Used inside caches; faster, doesn’t require refreshing, but expensive and less dense.
- RAM is significantly larger than cache but slower, forming the main working memory space.

---

## 4. Secondary Storage (Hard Disk / SSD): Largest and Slowest

- Secondary storage devices keep all data and programs persistently.
- Typical Sizes:
  - Hard Disk Drives (HDDs): **500GB to multiple terabytes (TB)**
  - Solid State Drives (SSDs): Typically **256GB to 4TB or more**
- Access speeds are orders of magnitude slower than RAM.
- Used for storing operating systems, applications, files, and databases permanently.

---

## Summary of Memory Sizes and Quantities

| Memory Type        | Approximate Size                | Speed Rank (Fastest to Slowest)        | Typical Quantity                    |
| ------------------ | ------------------------------- | -------------------------------------- | ----------------------------------- |
| Registers          | Few kilobytes (e.g., 128 bytes) | Fastest (cycles per instruction)       | 16 to 128 registers per CPU         |
| Cache (L1, L2, L3) | Tens of KB to tens of MB        | Very fast, close to CPU                | Multiple levels per CPU core        |
| Main Memory (RAM)  | Several GBs (4GB to 64GB+)      | Slower than cache but faster than disk | 1 or more RAM modules (DIMMs)       |
| Secondary Storage  | Hundreds of GBs to multiple TB  | Slowest, persistent storage            | Single or multiple drives in system |

---

By structuring memory this way, CPUs can execute complex programs efficiently despite the vast differences in size and speed between these memory types.
![Memory Hierarchy Diagram](./image/memory.png)

# Explaining Your Memory Usage Image – Simple Definitions

This image shows a summary of your computer’s memory usage. Here’s what each part means:

---

**Physical Memory (16.00 GB):**

- The total amount of RAM (Random Access Memory) installed in your computer.
- RAM is very fast, temporary memory used to keep active programs and data.

**Memory Used (13.68 GB):**

- The amount of RAM currently being used by all running programs and system processes.
- Eg: Brave Browser, VS Code...
- When programs run, they use up RAM to store data and instructions they need immediately.

**Cached Files (2.26 GB):**

- Cached files are a part of RAM.
- Recently accessed data kept in RAM for quick reuse.
- Cached files help speed up repeated tasks because they avoid reloading from slower storage.

## What Does Cached Files Store When Browsing Websites Like rfse.club or YouTube?

When you browse websites, cached files in your RAM store temporary copies of parts of those websites to speed up future visits. This helps the website load faster and reduces data usage.

---

Browsers like Chrome use **two types of caches** to speed up web browsing:

## 1. Memory Cache (RAM Cache)

- Stores recently accessed website resources **temporarily in RAM**.
- Very fast access but **non-persistent** — cleared when browser is closed or system is restarted.
- Holds small pieces of data or frequently used resources while the browser is open.
- Example: using 3d models on rfse club site.

---

## 2. Disk Cache (Storage Cache)

- Stores website files like images, scripts, and pages **persistently on your disk (SSD or HDD)**.
- Larger but much slower than RAM.
- Survives browser restarts and system reboots.
- Used when browser is reopened to avoid redownloading the same files.
- Example: Images from a YouTube video or rfse.club thumbnail files saved on disk remain cached even after browser closes.

---

## Examples of What Is Cached

- **Images:** Logos, profile pictures, thumbnails, background images.
- **Videos:** Small previews or portions of videos you have recently watched.
- **HTML Files:** The basic structure of the webpage.
- **CSS Files:** Stylesheets that control how the webpage looks (fonts, colors, layout).
- **JavaScript Files:** Scripts that add interactive features like buttons, forms, video players.
- **API Responses:** Data fetched from servers, like your YouTube recommendations or latest posts on rfse.club.
- **Cookies and Session Data:** Small pieces of information to remember your login or preferences.

---

**In simple terms:**  
The cache stores "copies" of website pieces (pictures, code, data) in fast memory, so websites load quickly without repeated downloading every time you visit.

**Swap Used (3.58 GB):**

- Amount of data temporarily stored on your disk because RAM is nearly full.
- The operating system moves less-used data from RAM to swap space (on SSD/HDD) to free up RAM for active tasks.
- Swap is much slower than RAM.

**App Memory (4.12 GB):**

- The RAM being used by application programs (e.g., browsers, editors, etc.).

**Wired Memory (1.97 GB):**

- RAM reserved for critical system tasks and cannot be moved to swap.
- Needed for the operating system’s core operations.

**Compressed (6.99 GB):**

- RAM that stores data in a compressed format to fit more into limited physical memory.
- Helps use memory more efficiently before moving to swap.

---

**Summary:**  
Your system has 16 GB of RAM. Most of it is used by apps and system functions, some data is cached for speed, and when RAM isn’t enough, extra or less-used data is moved to swap space on your disk. Wired memory is locked for essential system use, while compressed memory squeezes more data into RAM.

Each value in the image shows how different types of memory help balance speed and capacity for your computer’s smooth operation.

## Step 5: Multi-Core and Threading (We have already discussed this)

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

````

```

- **Async in JS**: JS can seem to multitask (e.g., `setTimeout`, `fetch`) using async, but it’s not parallel—it offloads tasks (e.g., network requests) to the browser/Node.js runtime, and the event loop handles callbacks later on the same thread.
```
````
