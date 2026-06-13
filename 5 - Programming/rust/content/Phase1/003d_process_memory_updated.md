```text
+---------------------------+  <-- High Memory (top of address space)
| Command-line Arguments    |  // e.g. args passed to program
| Environment Variables     |  // OS environment vars accessible at runtime
+---------------------------+
| Memory Mapped Regions     |  // Shared libraries (.dylib/.so), device memory
|                           |  // (Handled by OS, not explicitly in Rust code)
+---------------------------+
| Heap (Dynamic Memory)     |  // Vec, String, Box allocations live here
|                           |  let heap_vec = vec![1, 2, 3];
|                           |  let boxed_value = Box::new(100);
+---------------------------+
| Unused / Reserved Space   |  // OS reserved memory or fragmentation gaps
+---------------------------+
| Stack (Function Calls)    |  // Local variables, function call frames
|                           |  fn main() {
|                           |    let local_var = 42;
|                           |  }
+---------------------------+
| Thread Local Storage (TLS)|  // Per-thread static data, OS-managed
|                           |  thread_local! {
|                           |    static TLS_COUNTER: std::cell::RefCell<u32> = std::cell::RefCell::new(0);
|                           |  }
+---------------------------+
| Data Segment              |  // Initialized static/global variables
|                           |  static GREETING: &str = "Hello, world!";
|   +-------------------+   |
|   | BSS Segment       |   |  // Uninitialized static globals (zeroed)
|   | static mut UNINIT: i32; |
|   +-------------------+   |
+---------------------------+
| Text Segment (Code)       |  // Program instructions compiled to machine code
|                           |  fn main() { println!("Hello"); }
+---------------------------+  <-- Low Memory (bottom of address space)


```
