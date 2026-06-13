1. **Statics Have Fixed Addresses**: Unlike regular variables, statics have one permanent home in memory for the entire program.

2. **Immutable Statics Are Safe**: Use immutable statics freely for global configuration and constants that live forever.

3. **Mutable Statics Are Dangerous**: They require `unsafe` and can cause data races. Avoid unless absolutely necessary.

4. **Static vs. Const**: Use `const` for compile-time replacements. Use `static` when you need a real variable with a fixed memory address.

5. **Understand 'static Lifetime**: This means "lives for the entire program". String literals are automatically `'static`.

6. **Avoid Global Mutable State**: Mutable statics are a code smell. In modern Rust, use patterns like `Arc<Mutex<T>>` for shared mutable state.

7. **Use Immutable Statics for Configuration**: This is the primary use case. Store your app's settings once and access them globally.
