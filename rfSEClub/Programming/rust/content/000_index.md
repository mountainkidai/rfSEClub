# Rust Curriculum: Building Low-Latency, High-Throughput Systems with Axum

[Resource - Aariv GoodNotes](https://share.goodnotes.com/s/vOs2Bu7N8UUY93eAfF4miX)

**Subtopics (One per Day)**:

1. **Introduction to Rust**: Install Rust, Cargo; write Hello World. Exercise: Compile and run a basic program. Mini-Project: Print personalized greeting.
2. **Variables and Mutability**: Declare variables, mut keyword, constants. Exercise: Swap two variables. Mini-Project: Calculate simple interest with user inputs.
3. **Data Types - Scalars**: Integers, floats, booleans, characters. Exercise: Convert temperature F to C. Mini-Project: Basic calculator for addition/subtraction.
4. **Data Types - Compounds**: Tuples, arrays. Exercise: Access tuple elements. Mini-Project: Store and print student scores array.
5. **Functions**: Define functions, parameters, returns. Exercise: Write max function. Mini-Project: Factorial calculator.
6. **Control Flow - If/Else**: Conditional statements. Exercise: Check even/odd. Mini-Project: Grade classifier.
7. **Control Flow - Loops**: Loop, while, for. Exercise: Sum 1 to n. Mini-Project: Print multiplication table.
8. **Ownership and Borrowing**: Ownership rules, borrowing, references. Exercise: Function to modify string via borrow. Mini-Project: Inventory manager with ownership transfers.
9. **Lifetimes**: Lifetime annotations for references. Exercise: Function returning longer string slice. Mini-Project: Text analyzer with lifetime params.
10. **Structs**: Define structs, methods. Exercise: Rectangle area. Mini-Project: Point distance calculator.
11. **Enums and Pattern Matching**: Enums, match. Exercise: Handle optional values. Mini-Project: Simple state machine.
12. **Traits and Generics**: Traits, generic types/functions. Exercise: Generic stack. Mini-Project: Polymorphic shape area.
13. **Error Handling**: Result, Option, panic. Exercise: Safe division. Mini-Project: File reader with errors.
14. **Cargo Basics**: Projects, dependencies, testing. Exercise: Add crate like rand. Mini-Project: Random number guessing game.
15. **Modules and Visibility**: Mod, pub, use. Exercise: Modular math utils. Mini-Project: Multi-module calculator app.
16. **Workspaces**: Multi-crate setups. Exercise: Workspace with lib and bin. Mini-Project: Shared utils across crates.
17. **Collections**: Vec, HashMap, iterators. Exercise: Vec sort. Mini-Project: Word frequency counter.
18. **Closures**: Closure syntax, captures. Exercise: Filter list with closure. Mini-Project: Custom sorter.
19. **Threads and Channels**: Spawn threads, mpsc. Exercise: Parallel computation. Mini-Project: Multi-threaded prime finder.
20. **Mutexes and Arc**: Shared mutable state. Exercise: Thread-safe counter. Mini-Project: Concurrent bank simulator.
21. **Fearless Concurrency**: Sync/Send traits. Exercise: Parallel ray tracer basics. Mini-Project: Thread pool executor.
22. **Futures and Async/Await**: Async basics. Exercise: Async sleep. Mini-Project: Timed task scheduler.
23. **Tokio Runtime**: Tokio setup, tasks. Exercise: Spawn async tasks. Mini-Project: Async downloader.
24. **Async I/O**: Files, networks async. Exercise: Async file copy. Mini-Project: Simple async logger.
25. **Axum Setup and Routes**: Axum app, routes. Exercise: Hello world server. Mini-Project: Basic API with routes.
26. **Handlers and Middleware**: Custom handlers, middleware. Exercise: Auth middleware. Mini-Project: Logged API.
27. **JSON with Serde**: Serialize/deserialize. Exercise: JSON echo. Mini-Project: User data API.
28. **State in Axum**: App state sharing. Exercise: Shared DB mock. Mini-Project: Counter service.
29. **Extractors**: Path, query, body. Exercise: Dynamic routes. Mini-Project: Search API.
30. **Benchmarking**: Criterion usage. Exercise: Bench sort. Mini-Project: Optimized search.
31. **Profiling**: Flamegraph, perf. Exercise: Profile loop. Mini-Project: Bottleneck fixer.
32. **Zero-Cost Abstractions**: Inline, abstractions. Exercise: Iterator vs loop. Mini-Project: Efficient parser.
33. **Lock-Free Structures**: Atomic ops. Exercise: Lock-free counter. Mini-Project: Concurrent queue.
34. **Async Low-Latency Patterns**: Non-blocking. Exercise: Stream processing. Mini-Project: Real-time updater.
35. **Pinning and Polling**: Pin futures. Exercise: Custom future. Mini-Project: Polled sensor.
36. **Connection Pooling**: Pools for DB. Exercise: Sqlx pool. Mini-Project: Pooled queries.
37. **Load Balancing**: Distribute loads. Exercise: Round-robin. Mini-Project: Balanced workers.
38. **Rate Limiting**: Limit requests. Exercise: Token bucket. Mini-Project: API limiter.
39. **Caching**: Redis integration. Exercise: Cache get/set. Mini-Project: Cached endpoints.
40. **Actors**: Actix or Tokio actors. Exercise: Message passing. Mini-Project: Actor-based chat.
41. **JWT and OAuth**: Auth tokens. Exercise: JWT sign/verify. Mini-Project: Secure login.
42. **Secure Hashing**: Argon2 passwords. Exercise: Hash user pass. Mini-Project: Registration system.
43. **TLS**: Secure servers. Exercise: HTTPS setup. Mini-Project: Encrypted API.
44. **Input Validation**: Validate data. Exercise: Schema checks. Mini-Project: Form validator.
45. **ML Crates**: Ndarray, tch basics. Exercise: Vector ops. Mini-Project: Simple linear model.
46. **Embedding Models**: Load AI models. Exercise: Inference call. Mini-Project: Text classifier.
47. **Async Inference**: Pipelines for AI. Exercise: Async predict. Mini-Project: AI query handler.
48. **Unit/Integration Tests**: Testing crates. Exercise: Test functions. Mini-Project: Tested API.
49. **Mocks**: Mock dependencies. Exercise: Mock DB. Mini-Project: Isolated tests.
50. **Docker and CI/CD**: Containerize, GitHub Actions. Exercise: Docker build. Mini-Project: CI pipeline.
51. **Monitoring**: Prometheus, tracing. Exercise: Metrics export. Mini-Project: Monitored service.
52. **Macros**: Procedural macros. Exercise: Simple derive. Mini-Project: Custom logger macro.
53. **Unsafe Rust**: When to use unsafe. Exercise: Raw pointers. Mini-Project: Performance hack.
54. **FFI**: Bind external libs. Exercise: C call. Mini-Project: Integrated C lib.
55. **Capstone Refactoring**: Optimize full system. Mini-Project: Low-latency auth + AI service.

**Resources**:

- [Rust Book](https://doc.rust-lang.org/book/)
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/)
- [Axum Docs](https://docs.rs/axum/)
- [Tokio Docs](https://tokio.rs/)
- Exercises: LeetCode Rust, custom repos.
