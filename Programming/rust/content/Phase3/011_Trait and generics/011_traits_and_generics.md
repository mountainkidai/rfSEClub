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
