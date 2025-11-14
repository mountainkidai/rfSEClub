## Structs

- when you need multiple related fields — struct lets you model this cleanly.

```rust
struct Candle {
    timestamp: u64,
    open: f64,
    high: f64,
    low: f64,
    close: f64,
    volume: f64,
}

```

```rust
struct Alert {
    symbol: String,   // heap-allocated string
    target_price: f64,
    active: bool,
}

```

```text
Stack Memory
-------------------------------------------------
| Address        | Value                          |
-------------------------------------------------
| 0x7ffeeff320  | ptr ──► 0x1000 (heap data)      |
| 0x7ffeeff328  | length = 8                      |
| 0x7ffeeff330  | capacity = 16                   |
| 0x7ffeeff338  | target_price = 3450.75          |
| 0x7ffeeff340  | active = true                  |
-------------------------------------------------

Heap Memory
-------------------------------------------------
| Address        | Value                          |
-------------------------------------------------
| 0x1000         | "RELIANCE" (UTF-8 bytes)      |
-------------------------------------------------

Stack Memory                      Heap Memory
┌─────────────────────┐          ┌─────────────────────┐
│ 0x7ffeeff320: ptr   │──ptr──► │ 0x1000: 'R' (byte)   │
│ length = 8          │          │ 0x1001: 'E'          │
│ capacity = 16       │          │ ...                  │
│ target_price        │          │ 0x1007: 'E'          │
│ active              │          │                     │
└─────────────────────┘          └─────────────────────┘


```

## 2. Using &str (String Slice)

```rust
struct Alert {
    symbol: &str,      // string slice
    target_price: f64,
    active: bool,
}

```

```text
Stack Memory
-------------------------------------------------
| Address        | Value                          |
-------------------------------------------------
| 0x7ffeeff320  | ptr ──► 0x400000 (static text)  |
| 0x7ffeeff328  | length = 8                      |
| 0x7ffeeff330  | target_price = 3450.75          |
| 0x7ffeeff338  | active = true                  |
-------------------------------------------------

Heap Memory
No heap allocation for symbol string here; string literal stored in read-only program memory / Data Segment.

0x400000: "RELIANCE"

Diagram
Stack Memory                      Read-Only Data
┌─────────────────────┐          ┌─────────────────────┐
│ 0x7ffeeff320: ptr   │──ptr──► │ 0x400000: 'R'        │
│ length = 8          │          │ 0x400001: 'E'        │
│ target_price        │          │ ...                   │
│ active              │          │ 0x400007: 'E'        │
└─────────────────────┘          └─────────────────────┘


```

## 3. Using Box<str> (Heap Allocated Immutable String)

```rust
struct Alert {
    symbol: Box<str>, // heap allocated string slice
    target_price: f64,
    active: bool,
}

```

```text
Stack Memory

-------------------------------------------------
| Address        | Value                          |
-------------------------------------------------
| 0x7ffeeff320  | ptr ──► 0x2000 (heap data)      |
| 0x7ffeeff328  | length = 8                      |
| 0x7ffeeff330  | target_price = 3450.75          |
| 0x7ffeeff338  | active = true                  |
-------------------------------------------------

Heap memory:
-------------------------------------------------
| Address        | Value                          |
-------------------------------------------------
| 0x2000         | "RELIANCE" (UTF-8 bytes)      |
-------------------------------------------------

Diagram:

Stack Memory                      Heap Memory
┌─────────────────────┐          ┌─────────────────────┐
│ 0x7ffeeff320: ptr   │──ptr──► │ 0x2000: 'R' (byte)   │
│ length = 8          │          │ ...                  │
│ target_price        │          │ 0x2007: 'E'          │
│ active              │          │                     │
└─────────────────────┘          └─────────────────────┘

Approach  |  Data Location           |  Notes
----------+--------------------------+---------------------------------------------------------
String    |  Stack + Heap            |  Owned, mutable string data on heap
&str      |  Stack + Program Memory  |  Borrowed string slice pointing to static/read-only data
Box<str>  |  Stack + Heap            |  Owned, immutable string slice on heap
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
