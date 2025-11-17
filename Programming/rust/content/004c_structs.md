## Structs

lets understand struct

- A struct is a custom data type that groups related values together under a single name.
- It lets you organize complex data by bundling into one type.

## Example

```rust
struct Person {
    name: String,
    age: u32,
}

//Person has two fields: name (a string) and age (an unsigned 32-bit integer).

```

## Creating and Using Instances

```rust
fn main() {
    let person = Person {
        name: String::from("Alice"),
        age: 30,
    };
    println!("{} is {} years old.", person.name, person.age);
}

```

## Final code:

```rust
struct Person {
    name: String,
    age: u32,
}

fn main() {
    let person = Person {
        name: String::from("Sony"),
        age: 30,
    };
}

```

## How does it store in the memory?

```rust
int a = 10;

// a is stored on the stack.
// The address of a points to a memory location holding the value 10.
// The value is stored directly at that address.

```

```text
a is like a label to Address (e.g., 0x7ffe_fffc20): holds value 10


Stack Memory

a (int) - > 0x7ffe_fffc20:
+--------------+
| 10           |
+--------------+

```

When you write in Rust:

```rust
let name = String::from("Koel");

```

- String is a struct with three components:

  - A pointer (ptr) to the heap where actual string bytes live.

  - A length (len) describing how many bytes of string are currently used.

  - A capacity (capacity) describing how much space is allocated on the heap for the string.

- These three fields together determine the size of the String struct on the stack.

- Typically, on a 64-bit system, each pointer or integer is 8 bytes, so:

  - Pointer: 8 bytes
  - Length: 8 bytes (usize)
  - Capacity: 8 bytes (usize)
  - Total size on stack: about 8 + 8 + 8 = 24 bytes

- This is independent of string length; the heap holds the actual characters, but String struct size on the stack stays fixed.

```text
Stack Memory                        Heap Memory
┌────────────────────────┐       ┌─────────────────────────┐
│ 0x7ffe_abc130: name    │       │ 0x6000_4000: 'K' 0x4B  │
│ ┌────────────────────┐ │       │ 0x6000_4001: 'o' 0x6F  │
│ │ ptr: 0x60004000    │ ├──────▶│ 0x6000_4002: 'e' 0x65  │
│ │ len: 4             │ │       │ 0x6000_4003: 'l' 0x6C  │
│ │ capacity: 8        │ │       │ (no null terminator)    │
│ └────────────────────┘ │       └─────────────────────────┘
└────────────────────────┘

```

```text
Stack Memory (24 bytes total)                   Heap Memory (4 bytes for "Koel")
┌────────────────────────────┐                 ┌────────────────────────────┐
│ 0x7ffe_abc130: name String  │                 │ 0x6000_4000: 'K' (0x4B)     │
│ ┌────────┬────────┬───────┐│                 │ 0x6000_4001: 'o' (0x6F)     │
│ │ ptr    │ len    │ cap   ││                 │ 0x6000_4002: 'e' (0x65)     │
│ │ (8 B)  │ (8 B)  │ (8 B) ││                 │ 0x6000_4003: 'l' (0x6C)     │
│ └────────┴────────┴───────┘│                 │ (no null terminator)         │
│ 0x7ffe_abc130             0x7ffe_abc137      └────────────────────────────┘
└────────────────────────────┘

```

- On the heap, the characters "Koel" occupy 4 bytes.

```rust
struct Person {
    name: String,
    age: u32,
}

```

- name occupies 24 bytes on stack.
- age is 4 bytes.
- To align the whole struct to an 8-byte boundary (max of fields), Rust inserts 4 bytes padding after age.
  Why Is Padding Needed?
  CPUs like aligned memory because:

  - Misaligned accesses require multiple reads/writes.
  - Aligned data accesses are faster and safer.
    What is a Trait?

```text
Memory Layout (Stack)

+----------------------------+  0x7ffe_abc130
| name: String (24 bytes)    |
|   - ptr (8 B)              |
|   - len (8 B)              |
|   - capacity (8 B)         |
+----------------------------+
| age: u32 (4 bytes)         |  0x7ffe_abc148
+----------------------------+
| padding (4 bytes)          |  0x7ffe_abc14c
+----------------------------+
Total size: 32 bytes

```

```rust
struct Person {
    name: String,
    age: u32,
}

fn main() {
    let person = Person {
        name: String::from("Sony"),
        age: 30,
    };
}


```

```text
Stack Memory (Person struct)               Heap Memory (String data "Sony")
┌───────────────────────────────┐         ┌─────────────────────────┐
│ 0x7ffe_abc200: person (32 B)  │         │ 0x6000_5000: 'S' (0x53) │
│ ┌─────────────────────────┐   │         │ 0x6000_5001: 'o' (0x6F) │
│ │ 0x7ffe_abc200: name     │   │────────▶│ 0x6000_5002: 'n' (0x6E) │
│ │ ┌──────┬──────┬────────┐│   │         │ 0x6000_5003: 'y' (0x79) │
│ │ │ ptr  │ len  │capacity││   │         │ (no null terminator)    │
│ │ │(8 B) │(8 B) │ (8 B)  ││   │         └─────────────────────────┘
│ │ │0x6000_5000           ││   │
│ │ └──────┴──────┴────────┘│   │
│ ├─────────────────────────┤   │
│ │ 0x7ffe_abc218: age (4 B)│   │
│ ├─────────────────────────┤   │
│ │ 0x7ffe_abc21c: padding  │   │
│ │ (4 B)                   │   │
│ └─────────────────────────┘   │
└───────────────────────────────┘



```

- person starts at 0x7ffe_abc200 on stack, size 32 bytes total.
- name occupies bytes 0x7ffe_abc200 to 0x7ffe_abc217 (24 bytes for the String struct).
- Inside name, ptr holds address 0x6000_5000 pointing to heap.
- age stored at 0x7ffe_abc218 (4 bytes).
- Padding (4 bytes) follows at 0x7ffe_abc21c to keep alignment.
- The next free stack address after person is 0x7ffe_abc220 (32 bytes after start).

## Methods on Structs

What is a Method?

- A method is a function associated with a struct (or enum).
- Defines behavior or operations specific to that type.
- Methods have an implicit self parameter representing the instance.

```rust
struct Person {
    name: String,
    age: u32,
}

impl Person {
    // Associated function (like a constructor)
    fn new(name: String, age: u32) -> Person {
        Person { name, age }
    }

    // A method that borrows self immutably
    fn greet(&self) {
        println!("Hello, my name is {} and I am {} years old.", self.name, self.age);
    }

    // A method that borrows self mutably to update state
    fn have_birthday(&mut self) {
        self.age += 1;
        println!("Happy birthday! Now I am {} years old.", self.age);
    }
}

fn main() {
    let mut p = Person::new(String::from("Koel"), 29);
    p.greet();
    p.have_birthday();
    p.greet();
}

```

```text
impl Person { ... } defines method implementations for Person.
new is an associated function (no self), used like a constructor.
Methods have &self or &mut self as first parameter (reference to instance).
Can mutate fields with &mut self, read-only with &self.
```

## Memory Layout

```rust
struct Person {
    name: String,  // 24 bytes (on stack)
    age: u32,     // 4 bytes (on stack)
    // padding:    // 4 bytes (for alignment)
}

```

```text
A Person struct will require 32 bytes on the stack:

name: String is 24 bytes (pointer, length, capacity).

age: u32 is 4 bytes.

4 bytes of padding for alignment.
```

## 2. Implementation Block (impl Person { ... })

This does not allocate memory itself—a method is just code logic stored in the binary.

```text
             Methods for Person
┌────────────────────────────────────────┐
│ Person::new(name, age)     // code only│
│ Person::greet(&self)       // code only│
│ Person::have_birthday(&mut self)// code│
└────────────────────────────────────────┘

```

## The methods exist as compiled code

- When called, they create their own tiny stack frames for arguments.
- They operate on a Person instance in memory (see below).

## Memory layout for new Function Call Frame with Return Space and Heap String

```rust
  fn new(name: String, age: u32) -> Person {
        Person { name, age }
    }
   // when you call let mut p = Person::new(String::from("Koel"), 29);

```

```text
Stack Memory (new() call frame)                              Heap Memory (String data "Koel")
┌─────────────────────────────┐                            ┌─────────────────────────┐
│ 0x7ffe_abd000: new() frame  │                            │ 0x6000_5300: 'K' (0x4B) │
│ ┌─────────────────────────┐ │                            │ 0x6000_5301: 'o' (0x6F) │
│ │ 0x7ffe_abd000 + 0 B: name │───────────────────────────▶│ 0x6000_5302: 'e' (0x65) │
│ │ ┌──────┬──────┬────────┐│ │                            │ 0x6000_5303: 'l' (0x6C) │
│ │ │ ptr  │ len  │capacity││ │                            │ (no null terminator)    │
│ │ │(8 B) │(8 B) │ (8 B)  ││ │
│ │ │0x6000_5300           ││ │
│ │ └──────┴──────┴────────┘│ │
│ ├─────────────────────────┤ │
│ │ 0x7ffe_abd000 + 24 B: age (4bytes) │
│ ├─────────────────────────┤ │
│ │ 0x7ffe_abd028 +4B:padding (4bytes) │
│ ├─────────────────────────┤ │
│ │ 0x7ffe_abd032 +32 B:return│
│ │  (space for Person struct)│
│ └─────────────────────────┘ │
└─────────────────────────────┘



```

```rust
fn main() {
    let mut p = Person::new(String::from("Koel"), 29);
    p.greet();
    p.have_birthday();
    p.greet();
}
```

## After creating p object

```text
Stack Memory (Person variable "p")                  Heap Memory (String data "Koel")
┌─────────────────────────────┐                    ┌─────────────────────────┐
│ 0x7ffe_abc300: p (32 B)     │                    │ 0x6000_5300: 'K' (0x4B) │
│ ┌─────────────────────────┐ │                    │ 0x6000_5301: 'o' (0x6F) │
│ │ 0x7ffe_abc300 + 0 B: name │───────────────────▶│ 0x6000_5302: 'e' (0x65) │
│ │ ┌──────┬──────┬────────┐│ │                    │ 0x6000_5303: 'l' (0x6C) │
│ │ │ ptr  │ len  │capacity││ │                    │ (no null terminator)    │
│ │ │(8 B) │(8 B) │ (8 B)  ││ │
│ │ │0x6000_5300           ││ │
│ │ └──────┴──────┴────────┘│ │
│ ├─────────────────────────┤ │
│ │ 0x7ffe_abc300 + 24B:age (4bytes) │ │
│ ├─────────────────────────┤ │
│ │ 0x7ffe_abc328 +4B:padding (4bytes) │
│ ├─────────────────────────┤ │
│ └─────────────────────────┘ │
└─────────────────────────────┘


```

## During p.greet() call

```rust
   // A method that borrows self immutably
    fn greet(&self) {
        println!("Hello, my name is {} and I am {} years old.", self.name, self.age);
    }
```

```text
Stack Memory (greet() call frame)                   Heap Memory (String data "Koel")
┌───────────────────────────────┐                   ┌─────────────────────────┐
│ 0x7ffe_abd100: greet frame    │                   │ 0x6000_5300: 'K' (0x4B) │
│ ┌─────────────────────────┐   │                   │ 0x6000_5301: 'o' (0x6F) │
│ │ 0x7ffe_abd100 + 0 B: self   │──────────────────▶│ 0x6000_5302: 'e' (0x65) │
│ │ &Person (8 bytes)           │                   │ 0x6000_5303: 'l' (0x6C) │
│ │ points to 0x7ffe_abc300     │                   │ (no null terminator)    │
│ └─────────────────────────┘   │
└───────────────────────────────┘

(And the `p` struct on stack, as before.)

```

## NOTE:

- The variable p is the full Person struct occupying 32 bytes on the stack.
- The method greet takes &self, a reference to Person.
- This reference is a pointer (address) to the stack location of p.
- Hence, self in the method stack frame is 8 bytes (size of a pointer), not the entire 32 bytes.
- So, when you see in the method call stack frame:

  ```text
  0x7ffe_abd100 + 0 B: self &Person (8 bytes)
  ```

## During p.have_birthday() Call

```text
Stack Memory (have_birthday() call frame)           Heap Memory (String data "Koel")
┌───────────────────────────────┐                  ┌─────────────────────────┐
│ 0x7ffe_abd120: have_birthday  │                  │ 0x6000_5300: 'K' (0x4B) │
│ ┌─────────────────────────┐   │                  │ 0x6000_5301: 'o' (0x6F) │
│ │ 0x7ffe_abd120 + 0 B: self  │──────────────────▶│ 0x6000_5302: 'e' (0x65) │
│ │ &mut Person (8 bytes)        │                  │ 0x6000_5303: 'l' (0x6C) │
│ │ points to 0x7ffe_abc300     │                  │ (no null terminator)    │
│ └─────────────────────────┘   │
└───────────────────────────────┘

Stack Memory (`p`) before and after age increment:

Before:
┌───────────────────────────────┐
│ 0x7ffe_abc300 + 24 B: age (4 bytes)      29 (0x0000001D) │
└───────────────────────────────┘

After:
┌───────────────────────────────┐
│ 0x7ffe_abc300 + 24 B: age (4 bytes)      30 (0x0000001E) │
└───────────────────────────────┘

```

```rust
#[derive(Debug)]
// properties
struct InstaUser{
    username : String,
    age: i32,
    minor:bool,
}

// bahavior
impl InstaUser {
    fn new_with_age_check(name:String,a:i32)-> InstaUser{
    let mut minor = false;
    if a < 18 {
        minor = true;
    }
        InstaUser{
            username: name,
            age:a,
            minor:minor,
        }
    }
}

fn main() {
    // let user1 = InstaUser {
    //     username:String::from("Nanda"),
    //     age:18,

    // };
    let user2 = InstaUser::new_with_age_check(String::from("Lavesh"),12);
    println!("user1 is {:?}",user2);

}
```

```rust
struct Person {
    name: String,
    age: u32,
}


impl Person {
    // Associated function (like a constructor)
    fn new(name: String, age: u32) -> Person {
        Person { name, age }
    }


    // A method that borrows self immutably
    fn greet(mut self) {
        self.name = "Alice".to_string();
        println!("Hello, my name is {} and I am {} years old.", self.name, self.age);
    }




}


fn main() {
    let mut p = Person::new(String::from("Koel"), 29);
    p.greet();
    // println!("Person's name is: {}", p.name);
}

main stack                      greet stack
┌───────────────┐               ┌───────────────┐
│ p: Person     │   --move-->   │ self: Person  │
│ (owns data)   │               │ (now owns)    │
└───────────────┘               └───────────────┘
                                    ↑
                                    │
                                dropped after
                                greet returns

```
