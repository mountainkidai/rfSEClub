# Memory in Detail - Part 3- Pointers

## **🚀 Understanding Pointers in Rust (From First Principles)**

To fully understand **pointers**, let's explore:

1. **What is a pointer in simple terms?**
2. **How pointers work in Rust? (With Stack & Heap)**
3. **Types of pointers in Rust** (`&`, `Box<T>`, `Rc<T>`, `Arc<T>`)
4. **Comparison with JavaScript and C**

## **1️⃣ What is a Pointer?**

📌 **A pointer is a variable that stores the memory address of another variable.**
📌 Instead of storing an actual value, it stores the **location** where the value is kept in memory.

### **🔹 Example (Real-Life Analogy)**

- You live in a **house** (data in memory).
- Your house has an **address** (pointer).
- Instead of telling someone "I live inside this box," you give them the **address** so they can find it.

| **Type of Data** | **Stored in Stack?** | **Stored in Heap?** |
| ---------------- | -------------------- | ------------------- |

| **Fixed-size primitives (\*\***`i32`\***\*,&#x20;\*\***`bool`\***\*,&#x20;\*\***`char`\***\*,&#x20;\*\***`f64`\***\*)** | ✅ Yes | ❌ No |
| ----------------------------------------------------------------------------------------------------------------------- | ------ | ----- |

| **References (\*\***`&T`\***\*,&#x20;\*\***`&mut T`\***\*)** | ✅ Yes | ❌ No (But may point to heap data) |
| ------------------------------------------------------------ | ------ | ---------------------------------- |

| **Small structs (\*\***`struct Point { x: i32, y: i32 }`\***\*)** | ✅ Yes | ❌ No |
| ----------------------------------------------------------------- | ------ | ----- |

| **Large or growing data (\*\***`String`\***\*,&#x20;\*\***`Vec<T>`\***\*,&#x20;\*\***`HashMap<K, V>`\***\*)** | ❌ No | ✅ Yes |
| ------------------------------------------------------------------------------------------------------------- | ----- | ------ |

| **Heap allocations (\*\***`Box<T>`\***\*,&#x20;\*\***`Rc<T>`\***\*,&#x20;\*\***`Arc<T>`\***\*)** | ❌ No | ✅ Yes |
| ------------------------------------------------------------------------------------------------ | ----- | ------ |

## **1️⃣ What Happens When You Write let a = 2;?/**

```rust
fn main() {
    let a = 2;
}
```

## ✅ **Both a and 2 are stored in the stack.**

✅**Why?**&#x42;ecause2is a small**fixed-size integer (i32)**, and stack memory is optimized for fast access.

## **📌 Stack Memory Layout**

```txt
Stack Memory
-----------------
| a: 2         |
-----------------
a: 00000000 00000000 00000000 00000010 (32-bit `i32`)
```

## ✅ **Stack is used for fixed-size data types like i32, bool, char, f64.**

✅ **Memory is freed automatically when a goes out of scope.**

## **2️⃣ What Happens When You Write let b = Box::new(500);?**

```rust
fn main() {
    let b = Box::new(500);
}
```

📌 **Here, Rust does two things:**

&#x20;1\. **Allocates 500 in the heap**.

&#x20;2\. **Stores the address (pointer) to 500 in b (stack).**

## **📌 Memory Layout**

```txt

Stack Memory                     Heap Memory
----------------------        -------------------
| b: PTR --------------->  | [500] (Box::new) |
----------------------        -------------------
```

✅ **b is stored in the stack, but it holds the memory address pointing to heap.**

✅ **500 is stored in the heap, and Rust automatically deallocates it when b goes out of scope.**

**3️⃣ How Many Bits Does 500 Require?**

`500 = 111110100 (9 bits)`

📌 **But in Rust, Box\<T> stores values as i32 (default), which takes 32 bits (4 bytes).**

📌 **Even if 500 only needs 9 bits in theory, it will take 32 bits (4 bytes) in memory.**

---

| **Type**                     | **Size in Memory** |
| ---------------------------- | ------------------ |
| i8(8-bit integer)            | 1 byte (8 bits)    |
| i16(16-bit integer)          | 2 bytes (16 bits)  |
| i32(32-bit integer, default) | 4 bytes (32 bits)  |
| i64(64-bit integer)          | 8 bytes (64 bits)  |

✅ **Even though 500 fits in 9 bits, it uses 4 bytes (32 bits) if stored as i32.**

|                        | **Where is Value Stored?**  | **Where is Pointer Stored?**          |
| ---------------------- | --------------------------- | ------------------------------------- |
| let a = 2;             | ✅ Stack                    | ❌ No Pointer (Value stored directly) |
| let b = Box::new(500); | ✅ Heap (500stored in heap) | ✅ Stack (Pointer to heap location)   |

### ✅ **Use stack for small, fixed-size data (i32, bool, f64).**

### ✅ **Use heap when storing large or dynamic data (Box\<T>, String, Vec\<T>).**

## **2️⃣ Pointers in Rust (Stack vs Heap)**

📌 **Stack stores values directly** → `let x = 10;`
📌 **Heap stores values indirectly using pointers** → `let y = Box::new(10);`

### **🔹 Example: Stack vs Heap Pointers**

```rust
fn main() {
    let stack_value = 10; // ✅ Stored directly in stack
    let heap_value = Box::new(20); // ✅ Stored in heap, pointer on stack

    println!("Stack Value: {}", stack_value);
    println!("Heap Value: {}", heap_value);
}

```

✅ **`stack_value`\*\***&#x20;is stored directly in the stack.**
✅ **`heap_value`\***\*&#x20;variable value 20\*\***&#x20;is stored in the heap, but its pointer is in the stack.**
✅ **Rust automatically frees&#x20;\***\*`Box::new(20)`\*\***&#x20;when it goes out of scope.\*\*

```txt
Stack Memory                 Heap Memory
----------------------       ------------------
| stack_value: 10       |
| heap_value: PTR ----->| [20] (Box::new)  |
----------------------       ------------------

```

1. **`stack_value = 10`** → Stored **directly** in the **stack**.
2. **`heap_value = Box::new(20)`** →
   - The **pointer (\*\***`heap_value`\***\*) is stored in the stack**.
   - The **actual value (\*\***`20`\***\*) is stored in the heap**.
3. **Arrow (\*\***`PTR --->`\***\*)** represents that `heap_value` points to the heap where the actual data `20` is allocated.

✅ **Rust ensures safe memory management** → When `heap_value` goes out of scope, **Rust automatically frees the heap memory.**

## **3️⃣ Types of Pointers in Rust**

Rust **doesn't have raw pointers like C by default**, but provides safe alternatives:

### **📌 1. References (\*\***`&T`\***\*,&#x20;\*\***`&mut T`\***\*) → Borrowed Pointers**

References allow **borrowing data without taking ownership**.

#### **🔹 Example (Borrowing with&#x20;\*\***`&T`\***\*&#x20;and&#x20;\*\***`&mut T`\***\*)**

```rust
fn main() {
    let num = 100; // ✅ num stored in Stack
    let ref_num = &num; // ✅ Immutable reference (borrowed pointer)

    println!("Value via reference: {}", ref_num);
}

```

```txt
Stack Memory
---------------------
| num: 100         |  // ✅ num stored in stack
| ref_num: PTR --->|  // ✅ ref_num is a pointer in stack
---------------------
```

✅ **No ownership transfer.**
✅ **Multiple immutable references (\*\***`&T`\***\*) are allowed.**

✅ **Safe, no ownership transfer.**
❌ **Cannot modify through&#x20;\*\***`&T`\***\*&#x20;(Immutable Reference).**

#### **🔹 Mutable Reference (\*\***`&mut T`\***\*)**

```rust
fn main() {
    let mut num = 100;
    let ref_mut = &mut num; // ✅ Mutable reference (borrowed pointer)

    *ref_mut += 50; // ✅ Modify value through pointer
    println!("Updated Value: {}", num);
}

```

✅ **Allows modification.**
❌ **Only ONE mutable reference allowed at a time (to prevent data races).**

## **2️⃣ Smart Pointers – Heap-Allocated Pointers**

📌 **Smart pointers manage heap memory automatically and prevent memory leaks.**
📌 **Rust provides three common smart pointers:**

- **`Box<T>`** → Single ownership, stores data in heap.
- **`Rc<T>`** → Multiple ownership, **not thread-safe**.
- **`Arc<T>`** → Multiple ownership, **thread-safe**.

### **🔹&#x20;\*\***`Box<T>`\***\*&#x20;– Heap Allocation with Single Ownership**

✅ **Moves data to the heap while keeping ownership.**
✅ **Best for large data structures that should not be copied.**

When we use **Box\<T>**, Rust **automatically frees (deallocates) the memory** when the variable **goes out of scope**. This is handled by **Rust’s ownership system**, which ensures that **heap memory is cleaned up safely** without a garbage collector.

```rust
fn main() {
    let heap_value = Box::new(500); // ✅ Stored in Heap
    println!("Heap Value: {}", heap_value);
} // ✅ Freed automatically when `heap_value` goes out of scope

println!("Out of Scope!");

```

```txt
Stack Memory                     Heap Memory
----------------------        -------------------
| heap_value: PTR ------->  | [500] (Box::new) |
----------------------        -------------------
```

Inside Scope: 500

Out of Scope!**3️⃣ What Happens Without Box\<T>?**

✅ **The heap memory is freed immediately after the {} block ends.**

✅ **Rust ensures no memory leaks or dangling pointers.**

```rust
fn main() {
    let num = 500;  // ✅ Stored in Stack (not Heap)
    println!("Stack Value: {}", num);
} // ✅ Automatically removed from stack when function exits
```

✅ **Here, num is stored directly in the stack.**

✅ **It is removed immediately when the function exits (no need for manual deallocation).**

| **Step**       | **What Happens?**                          |
| -------------- | ------------------------------------------ |
| Box::new(500)  | **Allocates 500 in the heap**              |
| heap_value     | **Pointer to heap stored in the stack**    |
| Function exits | **Rust automatically calls drop()**        |
| Memory freed   | **Heap memory is deallocated (no leaks!)** |

✅ **Rust prevents memory leaks by automatically freeing heap memory when Box\<T> goes out of scope.**

✅ **No need for free() like in C.**

✅ **Safer and faster than garbage collection!**
