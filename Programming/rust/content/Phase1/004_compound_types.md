## 2. Compound Types: Grouping Data

Compound types in Rust group multiple values into a single type, allowing you to organize related data efficiently. Understanding these types is crucial for writing well-structured, maintainable Rust code and becoming proficient in the language.

### Types

Compound Types

1. Primitive Compound Types (Built-in):​

   1. [Tuples](https://www.rfse.club/#opensource/Programming/rust/content/004a_tuples.md)
   2. [Arrays](https://www.rfse.club/#opensource/Programming/rust/content/004b_arrays.md)

2. User-Defined Compound Types:​

   1. [Structs](https://www.rfse.club/#opensource/Programming/rust/content/004c_structs.md)
   2. [Enums](https://www.rfse.club/#opensource/Programming/rust/content/004d_enums.md)

3. Standard Library Compound Types:​

   1. [Vectors](https://www.rfse.club/#opensource/Programming/rust/content/004e_vectors.md)
   2. [Slices &[T]](https://www.rfse.club/#opensource/Programming/rust/content/004f_slices.md)
   3. [Strings (String, &str)](https://www.rfse.club/#opensource/Programming/rust/content/004g_strings.md)

4. C-Compatible Union Type:​

   1. [Unions (union)](https://www.rfse.club/#opensource/Programming/rust/content/004h_unions.md)

## Union

- Structs are like a container with multiple named fields, all existing together at the same time. Example: a Person struct contains name, age, and height fields.

- Enums represent a type that can be exactly one of several variants at a time. Each variant can have data, but only one variant is active at once. Rust stores a hidden tag internally to track which variant is active, making enums safe to use.

- Unions are similar to enums in that they store one of several variants at a time, but unions do not store a tag tracking the active variant. All variants share the same memory space, so you can only safely read the variant you last wrote to.

```rust
// Struct: holds all fields simultaneously
struct MyStruct {
    i: i32,
    f: f32,
}

let s = MyStruct { i: 10, f: 3.14 };
println!("Struct: i = {}, f = {}", s.i, s.f);  // Both values available safely


// Enum: holds exactly one variant at a time, with internal tag to track active variant
enum MyEnum {
    Int(i32),
    Float(f32),
}

let e1 = MyEnum::Int(10);
let e2 = MyEnum::Float(3.14);

match e1 {
    MyEnum::Int(i) => println!("Enum holds integer: {}", i),
    MyEnum::Float(f) => println!("Enum holds float: {}", f),
} // Safe — Rust knows which variant is active


// Union: holds all variants in the same memory location, no tag stored
union MyUnion {
    i: i32,
    f: f32,
}

let mut u = MyUnion { i: 10 };

unsafe {
    println!("Union as integer: {}", u.i);  // Correct reading of `i`
    u.f = 3.14;
    println!("Union as float: {}", u.f);    // Correct reading of `f`
    // println!("{}", u.i); // Would be unsafe here — we wrote `f`, not `i`
}
// n a union, Rust does not remember the field name or which variant is currently stored. Instead, it treats the entire union as a single memory location.
// When you write to one field (say, i), it updates the bits in that shared memory.
// Later, if you read from a different field (say, f), Rust reads the same bits but interprets them as a different type.
// The union itself just stores a shared chunk of memory, not metadata about which field is active.
```

### Pointer & Reference Types

#### References (&T and &mut T)

- References are borrowed pointers. They let you refer to some data without owning it.
- You can have immutable references (&T) or mutable references (&mut T).
- They live on the stack and don't directly own data.
- Rust ensures references are always safe with rules enforced by the borrow checker.

Example:

```rust
rust
let x = 5;
let y = &x; // Immutable reference to x
println!("y: {}", y);

let mut a = 10;
let b = &mut a; // Mutable reference to a
\*b += 5;
println!("a after mutation: {}", a);
```

## Problems

1. Create a tuple containing a name (string), age (number), and active status (boolean), then print all three values
2. Create an array of 5 integers, access the first and last elements, and print them
3. Create a struct with at least two fields, instantiate it, and print the field values
4. Create an enum with at least three variants, create an instance of one variant, and use match to handle it
5. Create a vector, add three elements to it, and print all elements using a loop.
