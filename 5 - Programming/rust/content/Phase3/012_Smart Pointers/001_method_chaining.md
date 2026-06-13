```rs
#[derive(Debug)]
struct Car {
    color: String,
    position: i32,
}

impl Car {
    // 1. :: = Factory (no car exists yet)
    fn new(color: &str) -> Car {
        println!("🏭 Factory makes {} car", color);
        Car {
            color: color.to_string(),
            position: 0,
        }
    }

    // 2. . = Methods (CHANGE existing car, return self)
    fn drive(&mut self) -> &mut Self {
        self.position += 10;
        println!("🚗 {} car drove to position {}", self.color, self.position);
        self  // Return self for chaining!
    }

    fn honk(&mut self) -> &mut Self {
        println!("📢 {} car HONK at {}", self.color, self.position);
        self
    }

    fn park(&mut self) -> &mut Self {
        println!("🅿️ {} car parked at {}", self.color, self.position);
        self
    }
}

fn main() {
    // COMPLETE EXAMPLE
    let mut my_car = Car::new("red");           // ::new() creates

    // CHAINING with .
    my_car
        .drive()                                // position=10
        .honk()                                 // HONK at 10
        .drive()                                // position=20
        .park();                                // PARK at 20

    println!("{:?}", my_car);  // Final car state
}

```
