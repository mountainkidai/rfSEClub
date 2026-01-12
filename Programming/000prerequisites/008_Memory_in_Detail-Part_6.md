# Memory in Detail - Part 6- How Program runs

## **RAM is split into different memory regions:**

&#x20;1\. **Text Segment**→ Stores program instructions (binary code).

&#x20;2\. **Data Segment**→ Stores global & static variables.

&#x20;3\. **Stack**→ Stores function calls, local variables, and return addresses.

&#x20;4\. **Heap**→ Stores dynamically allocated memory (Box\<T>,Vec\<T>,String).

```txt
+---------------------------+  <--- High Memory (Largest Addresses)
| Command-Line Arguments    |  (argc, argv)
+---------------------------+
| Environment Variables     |
+---------------------------+
| Heap (Dynamic Memory)     |  (Grows upwards)
+---------------------------+
| Unused Memory (Gap)       |
+---------------------------+
| Stack (Function Calls)    |  (Grows downwards)
+---------------------------+
| Data Segment              |  (Initialized & Uninitialized Global Variables)
+---------------------------+
| Text Segment (Code)       |  (Executable Instructions)
+---------------------------+  <--- Low Memory (Smallest Addresses)
```

✅ **Text, Data, Stack, and Heap are key sections in RAM.**

✅ **Stack grows downward, Heap grows upward, ensuring efficient memory usage.**

### **1️⃣ What Are Command-Line Arguments?**

📌 **Command-line arguments are inputs passed when running a program from the terminal.**

📌 **They allow dynamic input without modifying code.**

📌 **Stored in memory as an array of strings (argv\[]).**

```rust
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect(); // ✅ Get command-line arguments

    println!("Arguments: {:?}", args);
}
```

```bash
$ cargo run hello world 123
OUTPUT:
Arguments: ["target/debug/program", "hello", "world", "123"]
```

✅ **args\[0] is always the program name.**

✅ **args\[1], args\[2], etc., are the actual input arguments.**

## **📌 Memory Layout for Command-Line Arguments**

```txt
High Memory (Largest Addresses)
-------------------------------
| Command-Line Args (argc, argv[]) |
| argv[0] -> "target/debug/program" |
| argv[1] -> "hello"                |
| argv[2] -> "world"                |
| argv[3] -> "123"                  |
-------------------------------
```

✅ **The OS passes these arguments to the program at startup.**

✅ **They are stored in a reserved section of memory (not stack/heap).**

| **Feature**       | **Command-Line Args (argc, argv\[])**    | **Environment Variables**           |
| ----------------- | ---------------------------------------- | ----------------------------------- |
| **Purpose**       | Pass runtime input to a program          | Store system settings globally      |
| **Lifetime**      | Exists only while the program is running | Exists as long as the OS is running |
| **Where Stored?** | High memory (not stack/heap)             | System memory (not stack/heap)      |
| **Example**       | \$ cargo run hello world                 | HOME=/Users/username                |

### **1️⃣ Text Segment (Code)**

📌 **Stores compiled machine code (program instructions).**

📌 **Read-only to prevent modification (protects the program).**

📌 **Contains all functions & logic.**

```rust
fn add(x: i32, y: i32) -> i32 { x + y } // ✅ Stored in Text Segment
```

### **2️⃣ Data Segment (Static Variables)**

📌 **Stores global & static variables for the program’s lifetime.**

📌 **Divided into:**

&#x20;• **.data**→ Stores initialized variables (static x: i32 = 10;)

&#x20;• **.bss**→ Stores uninitialized variables (static mut y: i32;)

```rust
static X: i32 = 100;  // ✅ Stored in `.data` (Initialized)
static mut Y: i32 = 0; // ✅ Stored in `.bss` (Uninitialized)
```

### **3️⃣ Stack (Function Calls)**

📌 **Stores function calls, local variables, and return addresses.**

📌 **Follows LIFO (Last In, First Out) → Each function call creates a “stack frame”.**

📌 **Grows downward to use available memory efficiently.**

```rust
fn main() {
    let a = 10;  // ✅ Stored in Stack (Stack Row)
    let b = add(a, 20);  // ✅ Creates a Stack Frame
}
```

### **4️⃣ Heap (Dynamic Memory)**

📌 **Stores dynamically allocated data (Box\<T>, Vec\<T>, String).**

📌 **Managed by Rust’s memory allocator.**

📌 **Heap grows upwards (opposite direction of the stack).**

```rust
fn main() {
    let heap_val = Box::new(50);  // ✅ Stored in Heap (Pointer in Stack)
}

// js
let arr = [1,2,4,5] // stored in heap (Pointer - starting address of array is stored in Stack)
```

### **5️⃣ Unused Memory (Gap)**

📌 **A reserved gap between the Stack and Heap.**

📌 **Ensures that they don’t collide (prevents memory corruption).**

| **Memory Section**    | **Purpose**                             | **Example**                            |
| --------------------- | --------------------------------------- | -------------------------------------- |
| **Text Segment**      | Stores compiled code                    | Function logic (addition, subtraction) |
| **Data Segment**      | Stores global & static variables        | static X: i32 = 10;                    |
| **Stack**             | Stores function calls & local variables | let a = 10;                            |
| **Heap**              | Stores dynamically allocated memory     | let b = Box::new(10);                  |
| **Unused Memory**     | Buffer space between stack & heap       | N/A                                    |
| **Command-Line Args** | Stores input arguments                  | \$ cargo run hello world               |
| **Environment Vars**  | Stores system-wide settings             | HOME=/Users/username                   |

✅ **Text → Code logic.**

✅ **Data → Global/static variables.**

✅ **Stack → Function calls & local variables.**

✅ **Heap → Dynamic memory (e.g., Strings, Vecs).**

✅ **Command-line args → Temporary runtime input.**

✅ **Environment vars → System-wide settings.**

# Memory in Detail - Part 5- How Program runs

**&#x20;The compiler’s job is to** **convert high-level language (Rust, C, etc.) into a binary executable file**.

✅ **Then, the CPU and OS work together to load and run that executable in RAM.**

**&#x20;The Role of the Compiler (Before Execution)**

A**compiler**(like Rust’srustc) converts your Rust code into**machine code (binary executable)**&#x74;hat the CPU can understand.

```txt
🔹 Steps Performed by the Compiler

1️⃣ Lexical Analysis → Breaks code into tokens (fn, let, staic,main, etc.).
2️⃣ Syntax Analysis (Parsing) → Checks if the syntax is valid.
3️⃣ Semantic Analysis → Checks type correctness (i32, String, etc.).
4️⃣ Intermediate Representation (IR) → Converts code to an optimized internal form.
5️⃣ Optimization → Reduces redundant computations & improves performance.
6️⃣ Code Generation → Translates IR into machine code (binary executable).
7️⃣ Linking → Combines dependencies & libraries into the final binary.

```

## **📌 2️⃣ What Happens After Compilation? (OS & CPU Work Together)**

Once the binary is generated, the**CPU & OS take over**.

### **🔹 How the OS Loads the Program into RAM**

1️⃣ **Finds the binary file on disk** (./my_program).

2️⃣ **Allocates memory (Text, Data, Stack, Heap) in RAM.**

3️⃣ **Creates a Process ID (PID) for the program.**

4️⃣ **Loads command-line arguments & environment variables.**

5️⃣ **Sets the CPU’s Program Counter (PC) to the first instruction in Text Segment.**

✅ **Now the program is in RAM and ready to run.**

## **📌 3️⃣ What Does the CPU Do? (Execution Phase)**

The **CPU executes instructions** from the **Text Segment** using the **Fetch-Decode-Execute Cycle**.

### **🔹 CPU Execution Steps**

1️⃣**Fetch**→ Get the next instruction from RAM (Text Segment).

2️⃣**Decode**→ Translate it into CPU operations.

3️⃣**Execute**→ Perform the operation (e.g., add two numbers).

4️⃣**Store**→ If needed, save results in registers, stack, or memory.

5️⃣**Repeat**→ The cycle continues until the program finishes.

✅ **The CPU keeps executing instructions until the program exits.**

---

## **📌 4️⃣ Overview: Compiler vs OS vs CPU Responsibilities**

| **Stage**                          | **Who Handles It?** | **What Happens?**                                         |
| ---------------------------------- | ------------------- | --------------------------------------------------------- |
| **1. Convert HLL to Machine Code** | ✅ Compiler         | Rust → Binary Executable (rustc main.rs -o my_program)    |
| **2. Load Binary file into RAM**   | ✅ OS               | Allocates RAM memory (Text, Data, Stack, Heap)            |
| **3. Assign Process ID (PID)**     | ✅ OS               | Creates & tracks the running process                      |
| **4. Start Execution**             | ✅ CPU              | Fetches first instruction from Text Segment               |
| **5. Run Program**                 | ✅ CPU              | Executes instructions in a loop (Fetch-Decode-Execute)    |
| **6. Manage Memory (Stack, Heap)** | ✅ OS & CPU         | Handles function calls, variables, and dynamic allocation |
| **7. End Program**                 | ✅ OS               | Frees allocated memory & removes the process from system  |

✅ **Compiler** → **Converts Rust to Machine Code (before execution).**

✅ **OS** → **Loads the binary into RAM & manages the process.**

✅ **CPU** → **Executes the program step by step.**

### **Step 1: You run a program**

`$ ./my_program`

&#x20;• The OS finds the**binary executable file**on disk.

### **Step 2: The OS allocates memory for the program**

&#x20;• The OS loads the **program sections (Text, Data, Stack, Heap)** into RAM.

### **Step 3: Creates a process & assigns a Process ID (PID)**

&#x20;• OS gives your program a unique identifier to manage execution.

### **Step 4: Loads Command-Line Arguments & Environment Variables**

&#x20;• Command-line args (argc, argv\[]) and environment vars (PATH,HOME) are copied into memory.

### **Step 5: CPU sets the Program Counter (PC) to the first instruction**

&#x20;• The CPU starts execution from the**entry point (main())**&#x6F;f the program

## **📌 2️⃣ How the CPU Executes the Program (Step-by-Step)**

The **CPU follows the “Fetch-Decode-Execute” cycle** to run your Rust program.

### **Step 1: Fetch**

&#x20;• CPU**fetches**the next instruction (from Text Segment in RAM).

### **Step 2: Decode**

&#x20;• CPU**decodes**the instruction (understands what to do).

### **Step 3: Execute**

&#x20;• CPU**executes**the instruction (e.g., addition, storing a value in memory).

### **Step 4: Store Result (if needed)**

&#x20;• If the instruction changes data, the CPU updates registers, stack, or heap.

### **Step 5: Repeat Until Completion**

&#x20;• CPU **keeps fetching, decoding, and executing** until the program exits.

```txt
+---------------------------+  <-- High Memory
| Command-Line Arguments    |
| Environment Variables     |
+---------------------------+
| Heap (Dynamic Memory)     |  <-- Used for Vec, String, etc.
+---------------------------+
| Unused Memory             |  <-- Space between Stack & Heap
+---------------------------+
| Stack (Function Calls)    |  <-- Stores local variables, function calls
+---------------------------+
| Data Segment              |  <-- Global/static variables
+---------------------------+
| Text Segment (Code)       |  <-- Program Instructions (Machine Code)
+---------------------------+  <-- Low Memory
```

```txt
1️⃣ You write Rust code → `rustc main.rs -o my_program`
2️⃣ Compiler converts code → Generates `./my_program` binary
3️⃣ OS loads `./my_program` into RAM → Allocates Stack, Heap, Text, Data Segments
4️⃣ CPU executes program → Fetch-Decode-Execute Cycle
5️⃣ Program runs until completion → OS cleans up memory
```

✅ **Compiler = Converts High-Level Language to Machine Code**

✅ **OS = Loads Program into RAM, Assigns PID, Manages Memory**

✅ **CPU = Runs the Program (Executes Instructions One by One)**
