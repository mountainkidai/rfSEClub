### Application Launch (Chrome/Rust Backend)

- Running Chrome or a Rust backend creates one OS process with virtual memory allocation from RAM.
- Modern apps then spawn multiple threads within that single process for tasks like UI rendering, networking, or DB queries.
- The OS scheduler allocates these threads across CPU cores dynamically based on priority and load.
- User requests trigger thread creation/pooling (e.g., thread pools in Axum/Rust for 500K req/sec), while threads share process memory for low-latency context switching (~1μs vs 10-100μs).
