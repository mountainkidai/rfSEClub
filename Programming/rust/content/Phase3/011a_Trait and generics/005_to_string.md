# whats to_string?

**`to_string()`** = Converts `&str` literal → owned `String` (heap allocated)

## Simple Terms

```rust
"Fluffy".to_string()  // &str "Fluffy" → String owning "Fluffy"
```

## Why Needed

```rs
Cat { name: String }  // Field needs OWNED String (24 bytes on heap)
"Fluffy"             // Just &str (pointer to static data, 0 bytes owned)

"Fluffy".to_string() // Copies "Fluffy" to heap → owned String ✓
```

## Your Code

```rust
Cat { name: "Fluffy".to_string() }  // ✅ Works! Creates owned String
// vs
Cat { name: "Fluffy" }             // ❌ ERROR! &str ≠ String
```

## Alternatives (All Same Result)

```rust
"Fluffy".to_string()    // Most explicit
String::from("Fluffy")  // Most common
"Fluffy".into()         // Shortest (needs type context)
```

**One-liner**: `"hello".to_string()` = takes string **literal** → gives **owned** `String` you can move around. 🚀
