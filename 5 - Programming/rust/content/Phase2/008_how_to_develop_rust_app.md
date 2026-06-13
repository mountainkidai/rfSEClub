## 📚 Binary vs Library: When to Use Each

Rust projects can produce two types of outputs:

| Type        | Input         | Output                        | Use Case                             |
| ----------- | ------------- | ----------------------------- | ------------------------------------ |
| **Binary**  | `src/main.rs` | Executable (`.exe`, `./app`)  | CLI tools, web servers, apps         |
| **Library** | `src/lib.rs`  | Compiled lib (`.rlib`, `.so`) | Reusable code, packages on crates.io |

### Creating a Binary Project

```sh
cargo new my_app # Creates src/main.rs
cargo build # Outputs: target/debug/my_app (executable)
./target/debug/my_app # Run it
```

### Creating a Library Project

```sh
cargo new --lib my_lib # Creates src/lib.rs
cargo build # Outputs: target/debug/libmy_lib.rlib (not executable)
cargo test # Test the library
```

### Real-World Pattern: Binary + Library

Most projects structure code like this:

```text
my_project/
├── Cargo.toml
├── src/
│ ├── lib.rs # Core logic (reusable)
│ ├── main.rs # CLI entry point (uses lib.rs)
│ └── bin/
│ └── other_tool.rs # Additional tool
└── tests/
└── integration_test.rs
```

## src/bin/ Explained with Calorie Calculator Example

## Real-World Scenario: Building a Fitness Toolkit

Imagine you're creating **"fit_tools"** - a collection of fitness command-line tools that share the same calculation logic:

```text
fit_tools/ # One Cargo project
├── Cargo.toml
└── src/
    ├── lib.rs # Shared math (calorie formulas, BMI calc)
    ├── main.rs # Main app: calorie calculator
    └── bin/
        ├── bmi.rs # BMI calculator tool
        └── diet.rs # Daily calorie needs tool
```

**All 3 tools** use the same math formulas from `lib.rs` - no code duplication!

## Complete Working Example

### 1. `Cargo.toml`

```toml
[package]
name = "fit_tools"
version = "0.1.0"
edition = "2021"

[lib]
name = "fit_tools"
path = "src/lib.rs"

[[bin]]
name = "fit_tools" # Main app: cargo run
path = "src/main.rs"

[[bin]]
name = "bmi" # Tool 1: cargo run --bin bmi
path = "src/bin/bmi.rs"

[[bin]]
name = "diet" # Tool 2: cargo run --bin diet
path = "src/bin/diet.rs"
```

### 2. `src/lib.rs` (Shared Formulas)

```rust
// Shared calorie & fitness calculations
pub fn calculate_bmr(weight_kg: f64, height_cm: f64, age: u32, gender: char) -> f64 {
// Harris-Benedict formula for Basal Metabolic Rate
    if gender == 'M' || gender == 'm' {
        88.362 + (13.397 * weight_kg) + (4.799 * height_cm) - (5.677 * age as f64)
    } else {
        447.593 + (9.247 * weight_kg) + (3.098 * height_cm) - (4.330 * age as f64)
    }
}

pub fn daily_calories(bmr: f64, activity_level: &str) -> f64 {
    match activity_level {
    "sedentary" => bmr * 1.2,
    "light" => bmr * 1.375,
    "moderate" => bmr * 1.55,
    "active" => bmr * 1.725,
    "very_active" => bmr * 1.9,
    _ => bmr * 1.2,
    }
}

pub fn calculate_bmi(weight_kg: f64, height_m: f64) -> f64 {
    weight_kg / (height_m * height_m)
}
```

### 3. `src/main.rs` (Main Calorie Calculator)

```rs
use fit_tools::{calculate_bmr, daily_calories};

fn main() {
println!("🍎 Fit Tools - Calorie Calculator");
println!("==================================");

text
// Example: 75kg male, 175cm, 30 years old, moderate activity
let bmr = calculate_bmr(75.0, 175.0, 30, 'M');
let daily = daily_calories(bmr, "moderate");

println!("Your BMR: {:.0} calories", bmr);
println!("Daily needs (moderate activity): {:.0} calories", daily);
println!("==================================");
}
```

### 4. `src/bin/bmi.rs` (BMI Calculator Tool)

```rs
use fit_tools::calculate_bmi;

fn main() {
println!("📏 BMI Calculator");
println!("=================");

text
// Example: 75kg, 1.75m tall
let bmi = calculate_bmi(75.0, 1.75);

println!("Weight: 75kg, Height: 1.75m");
println!("Your BMI: {:.1}", bmi);

if bmi < 18.5 {
    println!("👶 Underweight");
} else if bmi < 25.0 {
    println!("✅ Normal weight");
} else if bmi < 30.0 {
    println!("⚠️ Overweight");
} else {
    println!("🚨 Obese");
}
}


```

### 5. `src/bin/diet.rs` (Diet Planning Tool)

```rs
use fit_tools::{calculate_bmr, daily_calories};

fn main() {
println!("🥗 Diet Planner");
println!("==============");

text
// Weight loss scenario: 20% calorie deficit
let bmr = calculate_bmr(75.0, 175.0, 30, 'M');
let maintenance = daily_calories(bmr, "light");
let deficit = maintenance * 0.8;

println!("Maintenance calories: {:.0}", maintenance);
println!("Weight loss (20% deficit): {:.0}", deficit);
println!("==============");
}


```

## How to Run (Step by Step)

```text
1. Create project

cargo new fit_tools
cd fit_tools

2. Replace files with code above
3. Run main calorie calculator

cargo run

Output:
🍎 Fit Tools - Calorie Calculator
Your BMR: 1674 calories
Daily needs (moderate activity): 2595 calories

4. Run BMI tool
cargo run --bin bmi

Output:
📏 BMI Calculator
Weight: 75kg, Height: 1.75m
Your BMI: 24.5
✅ Normal weight
5. Run diet tool
cargo run --bin diet

Output:
🥗 Diet Planner
Maintenance calories: 2304
Weight loss (20% deficit): 1843

```

## Build All Tools at Once

```sh
cargo build # Builds lib + ALL 3 binaries
ls target/debug/ # fit_tools bmi diet libfit_tools.rlib

```

### Release versions (faster)

```sh
cargo build --release
ls target/release/ # fit_tools bmi diet
```

### How user uses?

### 1. **User Clones Your Code**

```sh
git clone https://github.com/you/fit_tools.git
cd fit_tools # Now INSIDE your project folder
```

### 2. **`--path .` Means "Current Folder"**

```sh
cargo install --path .
```

- `--path .` = "install from this folder I'm in"
- `.` = current directory (where Cargo.toml is)

### 3. **What Happens?**

```sh
cargo install copies your code to:
~/.cargo/bin/ ← Global tools folder

Files copied:
~/.cargo/bin/fit_tools ← from src/main.rs
~/.cargo/bin/bmi ← from src/bin/bmi.rs
~/.cargo/bin/diet ← from src/bin/diet.rs
```

### 5. **Users Can Now Type Anywhere!**

```sh
Open NEW terminal, ANY folder
cd /home/downloads
bmi # Works! (75kg, 1.75m → BMI 24.5)
diet # Works!
fit_tools # Works!
```

```text
Your laptop:
fit_tools/ ← 1. Your code
└── Cargo.toml

After cargo install --path .:

Global tools (~/.cargo/bin/):
├── bmi ← 2. Executable 1
├── diet ← 3. Executable 2
└── fit_tools ← 4. Main app

User's PATH:
~/.cargo/bin/bmi ← 5. Type "bmi" anywhere!


```

### Note

1. Make sure ~/.cargo/bin is in PATH
   echo $PATH | grep cargo

2. After install, test:
   which bmi # /home/you/.cargo/bin/bmi
   bmi # Runs your BMI tool!

```text
❌ NO src/bin/ folder → Users get 1 command: "fit-tools bmi"
✅ WITH src/bin/ folder → Users get 3 commands: "bmi", "diet", "fit-tools"


The Magic is src/bin/
text
Your code:
src/
├── main.rs     → "fit-tools" command
└── bin/
    ├── bmi.rs  → "bmi" command  ← MAGIC!
    └── diet.rs → "diet" command ← MAGIC!
```
