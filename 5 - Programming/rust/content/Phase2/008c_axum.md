```rust
use axum::{
    routing::get,
    Router,
};

#[tokio::main]
async fn main() {
    // build our application with routes
    let app = Router::new()
        .route("/", get(|| async { "Hello, Koel!" }))
        .route("/healthz", get(|| async { r#"{"ok":true}"# }));

    // run our app with hyper, listening globally on port 3000
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

```

```text
calculator/
📁 src/                    # Main toolbox
├── 📁 ops/                      # Operations subfolder
│   ├── add.rs                   # add function
│   └── multiply.rs              # multiply function
├── ResultPrinter.rs                   # ROOT file (ResultPrinter)
└── lib.rs                       # Exports everything
```

### calculator/src/lib.rs (main export):

```rust
pub mod ops
pub mod ResultPrinter
```

### calculator/src/ops/add.rs:

```rust
pub fn add(a: i32, b: i32) -> i32 { a + b }
```

### calculator/src/ops/multiply.rs:

```rust
pub fn multiply(a: i32, b: i32) -> i32 { a * b }
```

### calculator/src/ResultPrinter.rs (root level file):

```rust
pub struct ResultPrinter;

impl ResultPrinter {
pub fn print(n: i32) { println!("Result: {}", n); }
}
```

### Usage in main.rs (same :: paths):

```rust
use calculator::{
    ops::add,        // 📁calculator/src/ops/add.rs  ← SUBFOLDER path
    ResultPrinter,   // 📁calculator/src/ResultPrinter.rs ← ROOT file
};

fn main() {
    let sum = add(2, 3);           // Uses ops::add
    ResultPrinter::print(sum);     // Uses root ResultPrinter
}
use axum::{
    routing::get,     // 📁axum/src/routing/get.rs  ← SUBFOLDER
    Router,           // 📁axum/src/router.rs       ← ROOT file
};


```

```text
use axum::{
    routing::get,     // 📁axum/src/routing/get.rs  ← SUBFOLDER
    Router,           // 📁axum/src/router.rs       ← ROOT file
};

```
