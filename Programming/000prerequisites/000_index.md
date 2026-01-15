# How Computers Work: A Complete First Principles Learning Series

## Overview

This learning series teaches you **how computers actually work** from the ground up—from the moment you turn on your machine to how complex systems handle millions of concurrent users. Each article is intentionally small and focused, making it easy to understand one concept before moving to the next.

The series is divided into **three major phases**:

- **Phase 1: How Computers Work** (Hardware + OS + Software Fundamentals)
- **Phase 2: How Apps Run** (Execution Model + Concurrency + Async)
- **Phase 3: Backend Systems at Scale** (Databases + Servers + Rust + Scaling)

---

## PHASE 1: How Computers Work (Hardware, OS, Software)

### Foundation Concepts

1. **What Actually Happens When You Turn On Your Computer**

   - Power flows through the CPU
   - BIOS/UEFI runs initialization
   - Bootloader launches the kernel
   - OS takes control

2. **What is an Operating System (OS)?**

   - Definition: Software that manages hardware and software
   - Key components: Kernel, File System, Shell, Device Drivers, Libraries
   - Examples: Windows, macOS, Linux, iOS, Android

3. **The Kernel: The Core of Everything**

   - What the kernel does
   - Kernel space vs User space
   - Why this separation matters
   - Privilege levels and why they exist

4. **CPUs and CPU Cores: The Brain of the Computer**

   - What is a CPU?
   - What are cores?
   - Single-core vs Multi-core processors
   - How cores execute instructions

5. **Instruction Set Architecture (ISA)**

   - What is an ISA?
   - x86-64 (Intel/AMD) - CISC
   - ARM (Apple M-series, Mobile) - RISC
   - RISC-V (Open-source) - RISC
   - Why it matters

6. **The Fetch-Execute Cycle**
   - How your CPU actually executes code
   - Program counter, registers, memory
   - Step-by-step execution of a simple program

### Memory Fundamentals

7. **How Computer Memory Works (The Big Picture)**

   - RAM vs Storage
   - Memory hierarchy (CPU cache → RAM → Disk)
   - Why memory layout matters for speed
   - Memory addressing

8. **The Stack: Fast, Simple Memory**

   - What lives on the stack
   - LIFO (Last-In-First-Out) order
   - Fixed-size data
   - Automatic cleanup
   - Stack frame and function calls

9. **The Heap: Flexible, Dynamic Memory**

   - What lives on the heap
   - Why heap memory exists
   - Pointers: the bridge between stack and heap
   - Heap fragmentation
   - Manual vs Automatic memory management

10. **Pointers: Addresses and Indirection**
    - What is a pointer?
    - Memory addresses and how they work
    - Why pointers exist
    - Pointer arithmetic
    - Dereferencing

### File Systems and Storage

11. **File Systems Explained**

    - What is a file system?
    - How files are organized on disk
    - File system hierarchies
    - Common file systems (APFS, NTFS, ext4, FAT32)

12. **File System Directories on Unix/Linux/macOS**

    - The root directory (/)
    - Home directory (~)
    - System directories (/bin, /usr, /etc, /var)
    - How paths work
    - Absolute vs Relative paths

13. **How Your Computer Reads and Writes Files**
    - From your program's perspective
    - System calls and the kernel
    - Disk IO operations
    - File descriptors
    - Buffering

### Processes, Tasks, and Threads

14. **What is a Process?**

    - Definition: An isolated instance of a running program
    - Process memory space
    - Process ID (PID)
    - Process lifecycle
    - Why processes are isolated

15. **What is a Task?**

    - Definition: A unit of work to be done
    - Tasks within processes
    - How tasks relate to threads
    - Task scheduling

16. **What is a Thread?**

    - Definition: A unit of execution within a process
    - Threads share process memory
    - Each thread has its own stack and registers
    - Program counter (PC) and instruction pointer
    - OS threads (kernel threads)

17. **How the OS Schedules Threads**
    - The OS scheduler
    - Thread states (New, Runnable, Running, Blocked, Terminated)
    - Context switching
    - Time slicing on single-core CPUs
    - True parallelism on multi-core CPUs

### Practical Example: Opening an Application

18. **Case Study: Opening Chrome Browser**
    - Kernel creates a process for Chrome
    - Memory allocated for the app
    - Multiple threads created (UI thread, network thread, rendering thread)
    - How threads map to CPU cores
    - How different tabs might use different threads

---

## PHASE 2: How Apps Run (Execution Model, Concurrency, Async)

### Concurrency Basics

19. **Concurrency vs Parallelism**

    - Concurrency: Many tasks progress by switching between them
    - Parallelism: Multiple tasks run literally at the same time
    - Why the distinction matters
    - Real-world examples

20. **Shared Data and Race Conditions**

    - Why shared data is dangerous
    - Data races: what happens when threads collide
    - Example: Two threads modifying the same counter
    - Why this breaks programs

21. **Protecting Shared Data: Locks and Mutexes**

    - Mutex: Mutual Exclusion Lock
    - How a mutex works
    - Locked vs Unlocked states
    - Critical sections
    - Deadlock: When mutexes go wrong

22. **Other Synchronization Tools**
    - Semaphores
    - Condition variables
    - Read-write locks
    - Atomic operations
    - Lock-free data structures

### Threading Models

23. **Creating and Managing Threads**

    - OS-level thread creation
    - Thread libraries (pthreads on Unix/Linux/macOS)
    - Creating a thread with code examples
    - Joining threads
    - Thread cleanup

24. **Thread Pools**

    - What is a thread pool?
    - Why thread pools exist (avoiding thread creation overhead)
    - How a thread pool works
    - Producer-consumer pattern
    - Work queues

25. **The Cost of Threads**
    - Memory overhead per thread (stack size)
    - Context switching overhead
    - Cache misses from switching
    - Creating too many threads
    - Why you can't have millions of threads

### Async Programming Fundamentals

26. **The Problem: I/O Blocking**

    - What is blocking I/O?
    - Reading from a file (slow!)
    - Waiting for network data (very slow!)
    - Database queries (very very slow!)
    - Why threads block

27. **Introduction to Async Programming**

    - What is async programming?
    - Cooperative multitasking vs preemptive
    - Why async saves resources
    - Async doesn't mean concurrent by default
    - Single-threaded event loop model

28. **Futures and Promises**

    - What is a future?
    - States of a future (Pending, Ready, Consumed)
    - How futures compose
    - Promise pattern
    - How to await a future

29. **Event Loops**

    - What is an event loop?
    - How an event loop works
    - Non-blocking operations
    - Task readiness and scheduling
    - Example: JavaScript event loop

30. **Async Runtimes**
    - What is a runtime?
    - Async runtime components (event loop, thread pool, scheduler)
    - How runtimes manage many tasks on few threads
    - Examples: Tokio (Rust), Node.js (JavaScript), Asyncio (Python)

### Language-Specific Implementations

31. **Concurrency in C (pthreads)**

    - Creating threads with pthread_create
    - Passing data to threads
    - Mutexes with pthread_mutex
    - Joining threads
    - Complete threaded counter example

32. **Concurrency in Rust (Safe Threads)**

    - Rust's ownership system applied to threads
    - Arc for sharing across threads
    - Mutex in Rust
    - Safe by design
    - Complete example: thread-safe counter

33. **Async/Await in Rust**

    - Rust's async/await syntax
    - Futures in Rust
    - Tokio runtime
    - Running async code
    - Combining async with threads

34. **JavaScript: Single-Threaded Event Loop**

    - JavaScript execution model
    - Call stack, callback queue, event loop
    - Callbacks and promises
    - Async/await in JavaScript
    - Web Workers for real threading

35. **Python: Threading and Asyncio**

    - The Global Interpreter Lock (GIL)
    - Threading limitations in Python
    - Asyncio for single-threaded concurrency
    - Multiprocessing for true parallelism
    - When to use what

36. **Go: Goroutines and Channels**
    - What are goroutines?
    - Lightweight user-space threads
    - M:N scheduling (many goroutines on few OS threads)
    - Channels for safe communication
    - Why Go excels at concurrency

### Combining Async and Parallelism

37. **Using Async With Multiple Cores**

    - Running async tasks on a thread pool
    - Each thread runs an event loop
    - Work stealing and load balancing
    - Tokio's multi-threaded runtime
    - Go scheduler across cores

38. **Choosing Your Concurrency Model**
    - OS threads: When to use them
    - Async: When to use it
    - User-space threads (goroutines): Rust + async runtime
    - Hybrid approaches
    - Decision matrix

---

## PHASE 3: Backend Systems at Scale (Databases, Servers, Rust + Axum, Scaling)

### Network and Server Basics

39. **Networks and the Internet (Simplified)**

    - Packets and packet routing
    - TCP/IP basics
    - Client-server model
    - Request-response cycle
    - Network latency

40. **What is a Web Server?**

    - Definition: Software that listens on a port and serves requests
    - Sockets: How programs receive network data
    - Port numbers
    - Listen, Accept, Read, Write, Close
    - Single-threaded vs multi-threaded servers

41. **Building a Basic HTTP Server**
    - HTTP protocol basics
    - Request structure
    - Response structure
    - Simple echo server
    - Handling multiple clients (naive approach)

### Axum Framework (Rust Web Framework)

42. **Introduction to Axum**

    - What is Axum?
    - Why Axum (speed, safety, async-first)
    - Setting up your first Axum project
    - Hello World: Creating a simple endpoint
    - Routing requests to handlers

43. **Axum: Handling Requests**

    - Request extractors
    - Path parameters
    - Query strings
    - JSON bodies
    - Headers and cookies

44. **Axum: Returning Responses**

    - Response types
    - JSON serialization
    - Status codes
    - Custom response types
    - Error handling

45. **Axum: Middleware and State**

    - What is middleware?
    - Common middleware patterns (logging, authentication)
    - Application state
    - Sharing data across requests
    - Thread-safe state with Arc

46. **Axum: Advanced Routing**
    - Nested routers
    - Fallback handlers
    - Dynamic routes
    - Method-based routing
    - Route parameters and validation

### Databases and Data Persistence

47. **What is a Database?**

    - Definition: Persistent, organized data storage
    - Why databases exist (vs files)
    - Relational vs Non-relational
    - ACID properties
    - Transactions

48. **Relational Databases (SQL)**

    - Tables, rows, columns
    - Primary keys and foreign keys
    - SQL queries (SELECT, INSERT, UPDATE, DELETE)
    - Joins
    - Indexes for speed

49. **How Databases Store Data on Disk**

    - B-trees and indexing structures
    - Page-based storage
    - Write-ahead logging (WAL)
    - Durability and recovery
    - Optimization

50. **Querying a Database from Your App**

    - Database connections
    - Connection pools
    - Query execution
    - Result sets
    - Error handling

51. **Using Databases with Rust (sqlx, ORM basics)**

    - Connecting to PostgreSQL
    - Running SQL queries
    - Type-safe queries
    - ORM vs Raw SQL
    - Handling database errors

52. **N+1 Query Problem**

    - What is the N+1 problem?
    - Why it's slow
    - How to detect it
    - Solutions: JOINs, eager loading, batching
    - Real example with code

53. **Caching: Reducing Database Load**
    - Why caching matters
    - In-memory caches (Redis)
    - Cache invalidation
    - TTL (Time to Live)
    - Cache-aside pattern

### Scaling Your Backend

54. **Understanding Load**

    - Requests per second (RPS)
    - Latency vs Throughput
    - Response time percentiles (p50, p95, p99)
    - Bottlenecks: CPU, Memory, Network, Disk I/O
    - Profiling and monitoring

55. **Vertical Scaling (Making One Machine Faster)**

    - More CPU cores
    - More RAM
    - Faster storage (SSD)
    - Limitations
    - When vertical scaling works

56. **Horizontal Scaling (More Machines)**

    - Running multiple instances
    - Load balancers
    - Distributing traffic
    - Stateless vs Stateful applications
    - Sticky sessions

57. **Load Balancing**

    - What is a load balancer?
    - Round-robin distribution
    - Health checks
    - Session persistence
    - Load balancer algorithms

58. **Database Scaling**

    - Read replicas
    - Master-slave replication
    - Sharding: Splitting data across machines
    - Consistency and eventual consistency
    - When to shard

59. **Caching at Scale**

    - Redis and Memcached
    - Cache layers in architecture
    - Distributed caching
    - Cache coherency
    - When caching helps most

60. **Async + Concurrency for Backend Scalability**
    - Why async matters at scale
    - Handling thousands of concurrent connections
    - Async database drivers
    - Non-blocking I/O throughout the stack
    - Resource efficiency at scale

### Real-World Backend Architecture

61. **Putting It Together: A Scalable Web App Architecture**

    - Load balancer
    - Multiple app servers (Axum instances)
    - Database with replicas
    - Cache layer
    - How requests flow
    - Single point of failures and redundancy

62. **Monitoring and Observability**

    - Logging (structured logging)
    - Metrics (request count, latency, error rate)
    - Tracing requests across services
    - Dashboards
    - Alerting

63. **Common Patterns in Scalable Systems**

    - Circuit breakers for resilience
    - Retry logic and backoff
    - Rate limiting and throttling
    - Bulkheads (isolation)
    - Graceful degradation

64. **Deploying and Running at Scale**
    - Containerization (Docker)
    - Orchestration (Kubernetes basics)
    - Rolling updates
    - Auto-scaling
    - Configuration management

---
