A slice is a dynamically-sized view into a contiguous sequence of elements. Slices provide a way to reference a portion of an array or vector without owning the data.

- They are references to contiguous memory
- Contain a pointer to the data and a length field
- They are dynamically-sized types (DST)
- They borrow from the underlying data, following Rust's borrowing rules
- Cannot be modified if the original data is also being modified

```rust
// Array slice
let arr = [1, 2, 3, 4, 5];
let slice = &arr[1..3];  // References elements at indices 1 and 2
println!("{:?}", slice);  // prints [2, 3]

// Vector slice
let v = vec![1, 2, 3, 4, 5];
let v_slice = &v[2..4];
println!("{:?}", v_slice);  // prints [3, 4]

// String slice
let s = "hello";
let part = &s[0..3];  // "hel"

```
