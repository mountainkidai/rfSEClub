## All Ways to Create Rust Objects (Structs)

### 1. **Struct Literal** (Most Common)

```rust
struct Cat { name: String }

let cat = Cat {
    name: "Fluffy".to_string()
};
```

### 2. **Field Init Shorthand** (Variables → Fields)

```rust
let name = "Fluffy".to_string();
let cat = Cat { name };  // name: name
```

### 3. **Struct Update Syntax** (Copy + Change)

```rust
let cat1 = Cat { name: "Fluffy".to_string() };
let cat2 = Cat {
    name: "Snowball".to_string(),
    ..cat1  // Copy all other fields from cat1
};
```

### 4. **Constructor Function**

```rust
impl Cat {
    fn new(name: String) -> Self {
        Cat { name }
    }
}

let cat = Cat::new("Fluffy".to_string());
```

### 5. **Function Returning Object**

```rust
fn make_cat() -> Cat {
    Cat { name: "Fluffy".to_string() }
}

let cat = make_cat();
```

### 6. **impl Trait Return** (Hidden Type - Your Case!)

```rust
trait Pet
{
    fn speak(&self);
}

impl Pet for Cat
{
    fn speak(&self)
        {
            println!("Meow");
        }
}

fn get_pet() -> impl Pet {  // Secretly returns Cat!
    Cat { name: "Fluffy".to_string() }
}
```

### 7. **Tuple Struct**

```rust
struct Point(i32, i32);
let p = Point(10, 20);
```

### 8. **Unit Struct** (Zero Size)

```rust
struct Empty;
let e = Empty;
```

**Your `get_cat()` = \#6** - creates Cat object, returns as hidden `impl Pet`! 🐱
