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
