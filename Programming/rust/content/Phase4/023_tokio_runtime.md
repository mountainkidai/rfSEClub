Kernel & OS:
The kernel manages hardware resources (CPU cores, memory). The OS provides abstractions like processes and threads to run programs safely and efficiently.

Process:
When you run an Axum server, the OS creates a process that loads your Rust binary into memory. This process has its own memory space and resources.

Memory:
The process's memory contains your code, data, and runtime state (like stack, heap, task queues).

Threads:
Within this process, Axum uses Tokio runtime which asks the OS to create multiple worker threads (usually one per CPU core). These threads share the process memory and run concurrently.

CPU Cores:
Each thread is scheduled by the OS to run on a separate CPU core (if available), enabling true parallelism.

Tasks:
Inside Tokio, asynchronous tasks represent units of work like handling a user's HTTP request. These tasks are lightweight compared to threads and are scheduled cooperatively across worker threads by Tokio's scheduler.

Flow:

Incoming HTTP requests hit the OS's network stack.

The OS delivers them to the Axum process.

Worker threads pick up tasks to process requests asynchronously using Tokio’s scheduler.

Tasks run on available threads/cores without blocking others, improving responsiveness and throughput.

Axum uses Hyper to parse and prepare HTTP requests/responses efficiently.

Middleware and routing logic handle requests modularly (inspired by Tower).

In summary, the OS creates a process for Axum, multiple threads run on CPU cores, and Tokio schedules many async tasks on those threads, allowing Axum to efficiently handle many concurrent connections in parallel within one application. This blend of system-level resource management and high-level async programming enables Axum’s performance and scalability.
Who handles execution and scheduling?
The Tokio runtime scheduler manages the execution of async tasks.

Even though tasks run concurrently on multiple threads, Tokio schedules small parts of each task one at a time, rapidly switching between them to give a seamless, sequential feeling without blocking.

It is a cooperative multitasking model where tasks yield control when waiting (e.g., for I/O), allowing other tasks to progress.
About Network Layers:
Networks have a layered architecture where each layer has specific roles:

Application Layer: Your web frameworks (Axum), web protocols (HTTP), etc.

Transport Layer: Protocols like TCP that ensure reliable data transport.

Network Layer: Routes the data packets across networks (IP).

Lower layers (Data Link, Physical) deal with hardware transmission.

## Problems

1. Create a Tokio async main function that prints "Hello from Tokio" and runs it
2. Create an async function that sleeps for 1 second using `tokio::time::sleep`, call it from async main, and verify it works
3. Spawn two async tasks using `tokio::spawn`, each printing a different message, and wait for both to complete
4. Create an async function that simulates work by sleeping, spawn it multiple times concurrently, and await all tasks
5. Create an async function that returns a value, spawn it as a task, await the result, and print it.
