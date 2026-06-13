**Progression: Traits & Generics → Smart Pointers → Synchronization → Threading → Async → Advanced Patterns**

---

# Part 1: Traits & Generics

## 1. Mental Model of Traits

### 1.1 What Is a Trait, Really?

- Traits as contracts: "what a type can do" vs "how it does it"
- Comparison to interfaces, typeclasses, protocols
- Traits as a way to define shared behavior

### 1.2 Traits vs Structs vs Enums

- Data vs behavior; composition of "data + traits"
- Concrete type + set of implemented traits = full capabilities

### 1.3 Object Model Intuition

- Each type has concrete identity
- Each type implements zero or more traits
- Functions using trait bounds work with ANY type meeting requirements

---

## 2. Implementing Traits

### 2.1 Defining Traits

- Method signatures in traits
- `self`, `&self`, `&mut self`, static methods

### 2.2 `impl Trait for Type`

- Implementing traits for structs, enums, primitives
- Multiple implementations for different types

### 2.3 Trait Methods and Ownership

- When to take `self` by value vs reference
- Trade-offs in API design

---

## 3. Generics Fundamentals

### 3.1 Generic Functions

- Type parameters `<T>`
- Monomorphization (compile-time code generation)

### 3.2 Generic Structs and Enums

- `struct Wrapper<T>`, `Result<T, E>`, `Option<T>`
- Generic data structures

### 3.3 Why Use Generics

- Zero-cost abstraction
- Code reuse
- Type safety

---

## 4. Trait Bounds (Static Dispatch)

### 4.1 Trait Bounds on Functions

- `fn f<T: Trait>(x: T)` syntax
- Constraining generic parameters

### 4.2 Multiple Bounds and `where` Clauses

- `T: Trait1 + Trait2` syntax
- When to use `where` clauses for clarity

### 4.3 Trait Bounds on Structs and Enums

- Constraining type parameters of data structures
- Implementation with bounds

### 4.4 `impl Trait` in Arguments

- `fn f(x: impl Trait)` vs `fn f<T: Trait>(x: T)`
- When to prefer each approach

---

## 5. Default Implementations

### 5.1 Providing Defaults

- Methods with bodies inside traits
- Reducing boilerplate

### 5.2 Overriding Defaults

- Specializing behavior for specific types

### 5.3 Designing Good Defaults

- DRY principle
- Extensibility
- Avoiding surprising behavior

---

## 6. Supertraits (Trait Inheritance)

### 6.1 Supertrait Syntax

- `trait B: A { ... }` meaning and implications
- Requirements chaining

### 6.2 Using Supertraits in APIs

- Building capability layers
- `Display + Debug` style combinations

### 6.3 Supertraits + Blanket Impl Patterns

- Composing widely-applicable behavior via supertraits

---

## 7. Generic Traits

### 7.1 Traits with Type Parameters

- `trait Converter<T> { fn convert(&self, t: T); }`
- Traits parameterized by generic types

### 7.2 Implementing Generic Traits for Many Types

- Same trait, multiple `T` values
- Multiple implementations per type

### 7.3 Choosing: Generic Parameter vs Associated Type

- Caller-chooses vs implementor-chooses type
- Trade-offs between approaches

---

## 8. Associated Types

### 8.1 Associated Types vs Generic Parameters

- `trait Iterator { type Item; }` vs `trait Iter<T>`
- When each is appropriate

### 8.2 Expressing Complex Relationships

- Using associated types to tie families of types
- Type relationships and constraints

### 8.3 Associated Types + Bounds

- `T: Trait<Item = U>` syntax
- Constraints on associated types

---

## 9. Advanced Trait Patterns

### 9.1 Blanket Implementations

- `impl<T: Display> ToString for T` patterns
- Power and coherence rules

### 9.2 Marker Traits and Auto Traits

- `Send`, `Sync`, `Unpin`
- Custom marker traits

### 9.3 Higher-Ranked Trait Bounds (HRTB)

- `for<'a> Fn(&'a T)` patterns
- When they appear in practice

### 9.4 Traits + Lifetimes + Generics

- Designing APIs with lifetime-parameterized traits
- Complex API patterns

---

## 10. Trait Objects (`dyn Trait`)

### 10.1 Static vs Dynamic Dispatch

- Monomorphization vs vtables
- When each is appropriate

### 10.2 Trait Objects Basics

- `&dyn Trait`, `Box<dyn Trait>` syntax
- Fat pointers (data + vtable)

### 10.3 When and Why to Use Trait Objects

- Heterogeneous collections
- Plugins and runtime polymorphism
- When NOT to use trait objects

### 10.4 Object Safety

- The object safety rules
- Methods that break object safety
- `where Self: Sized` workaround

### 10.5 `impl Trait` in Return vs `dyn Trait`

- Opaque return types vs true dynamic polymorphism

---

# Part 2: Smart Pointers

## 11. Smart Pointer Fundamentals

### 11.1 Raw Pointers vs Smart Pointers

- Why Rust favors `Box`, `Rc`, `Arc`
- Safety guarantees

### 11.2 `Deref` and `Drop`

- How smart pointers integrate with ownership
- Automatic cleanup behavior

### 11.3 When to Move Data to Heap

- Recursive types
- Large data structures
- Trait objects

---

## 12. `Box<T>` – Single Owner on the Heap

### 12.1 Basic Usage

- Creating, dereferencing, moving `Box<T>`
- Ownership semantics

### 12.2 Recursive Types with `Box`

- Linked lists, trees
- Unsized types

### 12.3 `Box<dyn Trait>`

- Owning trait objects
- Returning polymorphic values

---

## 13. `Rc<T>` and `Weak<T>` – Shared Ownership (Single-Threaded)

### 13.1 Reference Counting Model

- Strong vs weak counts
- `Rc::clone` semantics (cheap operation)

### 13.2 Shared Immutable Data

- Where `Rc<T>` is ideal
- UI trees, graphs, configuration

### 13.3 Avoiding Leaks with `Weak<T>`

- Circular reference detection
- `Rc<RefCell<T>>` patterns
- Graph structures

---

## 14. Interior Mutability: `Cell<T>` and `RefCell<T>`

### 14.1 Why Interior Mutability Exists

- When compiler's static rules are too strict
- Parsers, caches, state management

### 14.2 `Cell<T>`

- Copy types only
- Simple set/get semantics

### 14.3 `RefCell<T>`

- Runtime borrow checking
- `borrow()` and `borrow_mut()`
- Panic on borrow violations

### 14.4 Patterns: `Rc<RefCell<T>>`

- Shared ownership + mutation in single-threaded code

---

## 15. `Arc<T>` – Shared Ownership Across Threads

### 15.1 `Arc` vs `Rc`

- Atomic reference counting
- `Send` and `Sync` implications

### 15.2 Sharing Read-Only Data Across Threads

- Configuration sharing
- Lookup tables
- Caches

### 15.3 `Arc` and Trait Objects

- `Arc<dyn Trait + Send + Sync>`
- Shared polymorphic services

---

# Part 3: Synchronization

## 16. Concurrency Safety and Global State

### 16.1 Why Local Variables Are Safe

- Stack allocation
- Lexical scope
- Ownership guarantees

### 16.2 Why `static mut` Is Dangerous

- Fixed memory location
- Unsynchronized access
- Undefined behavior risk

### 16.3 Data Races and Mutable Aliasing

- What can go wrong with `&mut T`
- Raw pointer pitfalls
- Unsafe Rust dangers

---

## 17. Core Synchronization Primitives

### 17.1 `Mutex<T>`

- Critical sections
- Lock guards
- Poisoning semantics

### 17.2 `RwLock<T>`

- Many-readers/single-writer patterns
- When it beats `Mutex<T>`

### 17.3 Atomics

- `AtomicUsize`, `AtomicBool`, `AtomicPtr`
- Lock-free counters and flags
- When to use instead of locks

---

## 18. Shared Mutable State Patterns

### 18.1 `Arc<Mutex<T>>`

- Canonical thread-safe shared mutable data pattern
- How it works together

### 18.2 `Arc<RwLock<T>>`

- Read-heavy shared state
- Choosing between Mutex and RwLock

### 18.3 Global Initialization

- `lazy_static!` macro
- `once_cell` crate
- `std::sync::OnceLock`

---

## 19. `Send` and `Sync` (Thread-Safety Traits)

### 19.1 Mental Model

- `Send`: safe to send to another thread
- `Sync`: safe to share `&T` across threads

### 19.2 How Auto Traits Work

- Why `Rc<T>` is not `Send`/`Sync`
- Why `Arc<T>` is `Send + Sync`

### 19.3 Designing Thread-Safe APIs

- Adding `Send + Sync` bounds
- Safe type design

---

# Part 4: Threading

## 20. Rust Thread Model

### 20.1 What Determines Number of Threads

- Single-threaded vs multi-threaded design
- CPU-bound vs I/O-bound choices

### 20.2 `std::thread::spawn`

- Ownership moves into threads
- Join handles
- Error handling

### 20.3 Thread Pools

- Principle of pooling vs spawning per task
- Work distribution

---

## 21. OS-Level Concepts

### 21.1 OS Scheduler

- Time slicing
- Priorities
- CPU core allocation

### 21.2 Context Switching

- Cost model
- Why many threads hurt performance

### 21.3 Kernel vs User Threads

- 1:1 threading model (Rust)
- M:N model (async/await)

---

# Part 5: Async and Runtimes

## 22. Async Model in Rust

### 22.1 Futures and `async fn`

- Cooperative multitasking
- No OS thread per task

### 22.2 `await` Mechanics

- State machines
- How compiler lowers async code

### 22.3 Future Trait

- `poll()` method
- Waker pattern

---

## 23. Runtimes and Thread Pools

### 23.1 Tokio and Others

- Role of runtimes
- Task schedulers
- I/O reactors

### 23.2 Task Scheduling

- Work-stealing queues
- Thread pool management
- Fairness

### 23.3 Mixing Sync Threads and Async Tasks

- Channels between sync and async
- Blocking operations in async

---

# Part 6: Advanced Patterns

## 24. Advanced Trait & Generic Patterns

### 24.1 Complex Trait Bounds

- Deep nested bounds
- Ergonomics vs expressiveness

### 24.2 Alternative Blanket Implementations

- Marker types + associated types
- Working around coherence rules

### 24.3 Trait Evolution and Supertraits

- Evolving APIs without breaking users

---

## 25. Concurrency Patterns

### 25.1 Message Passing vs Shared State

- Channels vs `Arc<Mutex<T>>`
- When each approach wins

### 25.2 Combining Smart Pointers and Sync Primitives

- `Arc<Mutex<RefCell<T>>>` patterns
- When complex nesting is justified

### 25.3 Building Thread Pools and Executors

- Essential design ideas
- Work stealing algorithms

---

## 26. Putting It All Together

### 26.1 Trait-Driven Architecture

- Building systems around trait hierarchies
- Service-oriented design

### 26.2 High-Level Case Studies

- Social media platform
- Plugin systems
- Actor model systems

### 26.3 Performance and Debugging

- Finding abstraction costs
- Profiling and optimization
- Lock contention analysis

---
