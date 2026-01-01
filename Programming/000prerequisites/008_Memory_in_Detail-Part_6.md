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
