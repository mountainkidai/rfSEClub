1. Matching literals and variables

```rs
match x {
    1 => println!("One"),
    2 => println!("Two"),
    _ => println!("Other"),
}
```

2. Matching with OR |

```rs
match x {
    1 | 2 | 3 => println!("One, two or three"),
    _ => println!("Other"),
}

```

2. Matching with ..=

```rs
match x {
    1..=5 => println!("Between one and five"),
    _ => println!("Other"),
}

```

4. Matching enums and destructuring

```rs
enum Color { Red, Green, Blue }
match color {
    Color::Red => println!("Red"),
    Color::Green => println!("Green"),
    _ => println!("Other color"),
}

```

Destructuring tuples and structs:

```rs
match some_tuple {
    (x, _) => println!("x is {}", x),
    _ => (),
}

```

Ignoring parts with \_ or ..:

```rs
match some_tuple {
    (x, _) => println!("x is {}", x),
    _ => (),
}
```

```rs
use std::collections::HashMap;

fn main(){
    let mut ages = HashMap::new();
    ages.insert("Steve",5);
    ages.insert("Amy",4);

    if let Some(age) = ages.get("leonard"){
        println!("steve age is {:?}",age);
    }
    else{
        println!("kid not found");
    }
}
```
