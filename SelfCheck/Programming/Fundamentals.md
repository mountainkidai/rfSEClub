# rfSE Club Open Book Self Check Assessment

## Computer Systems, Programming & Rust Fundamentals

**Club #002** Medha, Lavesh, Nanda,Trinadh

**Instructions:**

- This is an open book examination
- Refer to the discussed articles while answering
- Each question requires deep thinking and first-principles understanding
- Provide detailed explanations with examples where applicable
- Time limit: As needed for thorough responses (One week)

---

## Section 1: Evolution of Computing & Hardware (Questions 1-7)

### Question 1: The Transistor Revolution

Explain why the transition from vacuum tubes to transistors was not just a size reduction but a fundamental paradigm shift in computing. Discuss how this affected heat dissipation, power consumption, and the possibility of integrated circuits. What would have happened to computing if we had continued improving vacuum tubes instead of switching to transistors?

### Question 2: Von Neumann Bottleneck

The Von Neumann architecture stores both data and instructions in the same memory. Explain why this creates a bottleneck in modern computing. How do modern CPUs attempt to overcome this limitation through architectural innovations? Design a hypothetical non-Von Neumann architecture and explain how it would work.

### Question 3: Physics of Semiconductor Scaling

Moore's Law predicted the doubling of transistors every 18-24 months. We're now approaching atomic-scale limits. Explain the **physical** reasons why we cannot keep shrinking transistors indefinitely. Discuss quantum tunneling, heat dissipation, and the electron mean free path. What happens when transistor gates become just a few atoms thick?

### Question 4: Memory Hierarchy Tradeoffs

A computer has registers, L1 cache, L2 cache, L3 cache, RAM, and disk storage. Explain why we need this hierarchy instead of just having one type of fast memory. Calculate the effective access time if:

- Register access: 1ns (hit rate 100%)
- L1 cache: 2ns (hit rate 90%)
- L2 cache: 10ns (hit rate 70%)
- RAM: 100ns
  Explain your reasoning and show your calculations.

### Question 5: Clock Speed Plateau

CPU clock speeds stopped increasing dramatically around 2004-2005 and have remained relatively stable since then. Explain the physical and thermal reasons for this plateau. Why can't we just increase voltage to achieve higher clock speeds? How does this relate to the power equation P = CV²f?

### Question 6: Instruction Set Architecture Evolution

Compare CISC and RISC architectures from first principles. Why did Intel continue with CISC (x86) while ARM chose RISC? Explain how x86 processors internally convert CISC instructions to RISC-like micro-operations. What are the implications for power consumption in mobile devices?

### Question 7: Hardware-Software Co-evolution

The evolution of hardware enabled new software paradigms, and software demands drove hardware innovation. Trace this co-evolution from the 1960s mainframes to modern cloud computing. Give specific examples of how software needs (e.g., graphical interfaces, virtual machines, AI workloads) drove specific hardware innovations.

---

## Section 2: Concurrency & Parallelism Fundamentals (Questions 8-14)

### Question 8: Concurrency vs Parallelism - Deep Understanding

Many people confuse concurrency with parallelism. Using real-world analogies and technical examples, explain:

- What is concurrency without parallelism?
- What is parallelism without concurrency?
- Can you have one without the other?
- Design a scenario where you have high concurrency but low parallelism, and vice versa.

### Question 9: The Dining Philosophers Problem

Explain the classic dining philosophers problem and why it demonstrates the challenges of concurrent programming. Design three different solutions:

1. A solution that prevents deadlock but may cause starvation
2. A solution that prevents both deadlock and starvation
3. An optimal solution with minimal waiting time
   Analyze the tradeoffs of each approach.

### Question 10: Race Conditions - Root Cause Analysis

Consider this code snippet:

```text
int counter = 0;

Thread 1: counter = counter + 1;
Thread 2: counter = counter + 1;
```

Explain **at the CPU instruction level** (not just conceptually) why this creates a race condition. Break down what assembly instructions would be generated and show how interleaving can cause data loss. How would you fix this in C and in Rust?

### Question 11: Memory Ordering & Visibility

Modern CPUs reorder instructions for performance. Explain how this can break concurrent programs even when there are no apparent race conditions. What is a memory fence/barrier? Provide an example where two threads communicate through shared memory and explain why memory barriers are necessary.

### Question 12: Async/Await vs Threads

Compare async/await programming with traditional threading:

- When would you choose async/await over threads?
- When would threads be more appropriate?
- How does async/await achieve concurrency on a single thread?
- What is the role of the event loop/executor?
- Why is async particularly useful for I/O-bound operations?

### Question 13: Lock-Free Programming

Explain what lock-free and wait-free algorithms are. Why are they desirable? Implement a conceptual lock-free stack using compare-and-swap (CAS) operations. What are the challenges with the ABA problem, and how would you solve it?

### Question 14: Concurrency Models Comparison

Compare and contrast these concurrency models:

- Shared memory with locks (C/C++ threads)
- Message passing (Go channels, Erlang)
- Actor model (Akka, Erlang)
- Software Transactional Memory (STM)
- Rust's ownership model for concurrency
  Which model prevents which types of bugs? What are the performance implications of each?

---

## Section 3: Program Execution & Compilation (Questions 15-19)

### Question 15: From Source to Execution - Complete Journey

Trace the complete journey of a Rust program from source code to execution:

1. Lexical analysis and parsing
2. Type checking and borrow checking
3. MIR (Mid-level IR) generation
4. LLVM IR generation
5. Optimization passes
6. Machine code generation
7. Linking (static vs dynamic)
8. Loading into memory
9. Execution by CPU
   Explain what happens at each stage and why each stage is necessary.

### Question 16: Compilation Models Deep Dive

Compare these compilation approaches in detail:

- Ahead-of-Time (AOT) compilation (C, Rust, Go)
- Just-in-Time (JIT) compilation (Java, JavaScript V8)
- Interpretation (Python CPython)
- Hybrid approaches (Python PyPy, Java GraalVM)
  For each approach, analyze: startup time, peak performance, memory usage, deployment complexity, and optimization opportunities.

### Question 17: Static vs Dynamic Linking

Explain the difference between static and dynamic linking. Why do most Linux programs use dynamic linking while Go uses static linking by default?

- What is the "DLL Hell" problem?
- How does it affect system updates and security patches?
- Why might an embedded system prefer static linking?
- What is the relationship between linking and memory usage?

### Question 18: Virtual Memory & Address Spaces

Explain how virtual memory works from first principles:

- Why can a 32-bit process access 4GB of memory even if the system has only 2GB of RAM?
- What is a page table and how does the MMU use it?
- What happens during a page fault?
- Explain demand paging and why it's beneficial
- How does virtual memory enable process isolation and security?

### Question 19: Bootloader to Main Function

When you power on a computer and run a program, explain the complete sequence:

1. BIOS/UEFI initialization
2. Bootloader execution
3. Kernel loading
4. Init process
5. Shell/OS environment
6. Program execution
7. Dynamic library loading
8. Stack and heap initialization
9. Entry point (main function) call
   Why is this sequence necessary? What would break if we skipped certain steps?

---

## Section 4: Memory Management In-Depth (Questions 20-25)

### Question 20: Stack vs Heap - Fundamental Differences

Explain stack and heap memory from first principles:

- How is each implemented at the hardware/OS level?
- Why is stack allocation faster than heap allocation?
- What determines the stack size limit?
- What happens during a stack overflow?
- How does the heap allocator (malloc/free) manage free memory blocks?
- Explain fragmentation and how it affects long-running programs.

### Question 21: Memory Layout of a Process

Draw and explain the memory layout of a running process:

- Text segment (code)
- Data segment (initialized globals)
- BSS segment (uninitialized globals)
- Heap (growing upward)
- Memory-mapped files
- Stack (growing downward)
  Why is this organization used? What happens when heap and stack collide? How does ASLR (Address Space Layout Randomization) affect this layout?

### Question 22: Memory Allocation Strategies

Compare different memory allocation strategies:

- First-fit vs best-fit vs worst-fit
- Buddy allocation system
- Slab allocation
- Region-based allocation
- Garbage collection (mark-and-sweep, generational)
  For each strategy, analyze: fragmentation behavior, allocation speed, deallocation speed, and best use cases.

### Question 23: Cache Coherency Problem

In a multi-core system, each core has its own L1 cache. Explain the cache coherency problem:

- What happens when two cores cache the same memory location?
- Explain the MESI protocol (Modified, Exclusive, Shared, Invalid)
- Why is false sharing a performance problem?
- How can you avoid false sharing in your code?
- What is the typical cache line size and why does it matter?

### Question 24: Memory Barriers & Consistency Models

Explain these memory consistency models:

- Sequential Consistency
- Total Store Ordering (TSO) - used by x86
- Weak Ordering - used by ARM
  For each model, explain what reorderings are allowed and why hardware designers chose to allow them. How does Rust's memory model (`Ordering::Relaxed`, `Acquire`, `Release`, `SeqCst`) map to these hardware models?

### Question 25: Memory-Mapped I/O

Explain memory-mapped I/O:

- How can reading/writing to a memory address control hardware?
- Why is this approach used instead of having separate I/O instructions?
- What happens at the hardware level when you write to a memory-mapped address?
- How does the OS map physical device memory into a process's address space?
- Why do drivers need special permissions to access memory-mapped regions?

---

## Section 5: Rust-Specific Concepts (Questions 26-30)

### Question 26: Ownership System - The Core Innovation

Rust's ownership system is its most distinctive feature. Explain:

- What problem does it solve that garbage collection doesn't?
- How does the borrow checker work at compile time?
- Explain the three rules of ownership
- Why can't you have two mutable references to the same data?
- How does this prevent data races at compile time?
- What is the relationship between ownership and move semantics?
- Compare memory management in C, C++ (RAII), Java (GC), and Rust (Ownership)

### Question 27: Lifetimes - Why Are They Necessary?

Many Rust learners struggle with lifetimes. Explain:

- What is a dangling reference and why is it dangerous?
- How do lifetime annotations help prevent dangling references?
- Explain lifetime elision rules
- Provide an example where explicit lifetime annotations are required
- What is the `'static` lifetime and when should it be used?
- How do lifetimes interact with structs and methods?

### Question 28: Zero-Cost Abstractions

Rust claims to provide "zero-cost abstractions." Explain:

- What does this mean in practice?
- Give examples of Rust abstractions that compile to the same machine code as hand-written C
- How does Rust's iterator chain compare to a manual loop in terms of generated assembly?
- What is monomorphization and how does it relate to zero-cost abstractions?
- Are there any cases where Rust's abstractions are NOT zero-cost?

### Question 29: Immutability by Default - Design Philosophy

Rust makes variables immutable by default, requiring explicit `mut` keyword. Explain:

- Why is this design choice beneficial for program correctness?
- How does immutability help with concurrent programming?
- Explain the difference between immutability and const
- What is interior mutability (`Cell`, `RefCell`, `Mutex`, `RwLock`)?
- When would you use `RefCell` vs `Mutex`?
- How does Rust's immutability compare to functional programming languages?

### Question 30: Rust's Concurrency Model

Rust's motto is "fearless concurrency." Explain how Rust achieves this:

- How does the ownership system prevent data races at compile time?
- What is the `Send` trait and when is it automatically implemented?
- What is the `Sync` trait and when is it automatically implemented?
- Why can't you send a `Rc<T>` between threads?
- Why can you send an `Arc<T>` between threads?
- Explain how `Mutex<T>` uses the type system to enforce correct usage
- Compare Rust's approach to C++'s `std::shared_ptr` and mutex usage

---

Explain your approach in detail, provide code examples when needed.

---

## Submission Guidelines

- Answer each question thoroughly with proper explanations
- Use diagrams where helpful
- Provide code examples to illustrate concepts
- Reference specific sections from the articles
- Show your reasoning process, not just final answers
- For calculation-based questions, show all work
- Feel free to add your own examples and experiments
- **SEND A PR TO self-check branch**

### **Total Questions: 30**

**Evaluation Criteria:**

- Depth of understanding
- Clarity of explanation
- Use of examples and analogies
- Connection between concepts
- Critical thinking and analysis
- First-principles reasoning

---

_Remember: The goal is not just to answer correctly, but to demonstrate deep understanding. Take your time (one week) and think through each question carefully. Good luck!_
