# WebAssembly (WASM) Integration with JavaScript

WebAssembly (WASM) is a low-level binary instruction format that allows code written in languages like C, C++, or Rust to run in the browser with near-native performance. It enables high-performance applications (e.g., games, video editing, image processing) to run in the browser or other JS environments.

---

## 1. What is WebAssembly (WASM)?

* A **binary format** for a stack-based virtual machine.
* Runs in modern browsers and is supported by all major platforms.
* Designed to complement JavaScript, not replace it.
* Can be loaded and used alongside JavaScript.

### Why use WASM?

* Near-native performance
* Portability: Works on all platforms
* Language interoperability: Rust, C/C++, etc.
* Memory-safe and sandboxed

---

## 2. Basic WASM Usage in JS

### Step 1: Compile C or Rust to `.wasm`

Example in Rust:

```rs
// lib.rs
#[no_mangle]
pub extern fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

Compile to `.wasm`:

```bash
wasm-pack build --target web
```

---

### Step 2: Load WASM in JavaScript

```js
// JavaScript: load-wasm.js
async function loadWasm() {
  const response = await fetch("./my_module.wasm");
  const bytes = await response.arrayBuffer();
  const { instance } = await WebAssembly.instantiate(bytes);

  console.log("5 + 6 =", instance.exports.add(5, 6));
}

loadWasm();
```

### Explanation

* `fetch`: Loads the `.wasm` file from the server
* `WebAssembly.instantiate`: Compiles and instantiates the module
* `instance.exports.add`: Calls the exported WASM function

---

## 3. Use Case: Integrating Rust with JavaScript

Rust has first-class support for WebAssembly using `wasm-pack` and `wasm-bindgen`.

### Example Rust Code

```rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn square(x: i32) -> i32 {
    x * x
}
```

Compile using:

```bash
wasm-pack build --target web
```

Include in JS:

```js
import init, { square } from "./pkg/my_lib.js";

async function run() {
  await init();
  console.log(square(7));
}

run();
```

### Notes

* `init()` loads the WASM and binds functions
* Rust `wasm-pack` creates `.wasm` + JS glue code

---

## 4. WASM Module Structure

* **Memory**: Linear memory that can be accessed like an array
* **Exports**: Functions/data shared with JS
* **Imports**: Functions/data provided by JS (e.g., console.log)

### Example

```js
const importObj = {
  env: {
    log: (x) => console.log("WASM says:", x),
  },
};

const { instance } = await WebAssembly.instantiate(bytes, importObj);
```

---

## 5. When Should You Use WASM?

✅ Heavy computations (e.g., physics engine, image processing)
✅ Porting existing C++/Rust code
✅ Performance bottlenecks in JS

❌ Not ideal for DOM manipulation or logic-heavy UI apps

---

## Summary

* WebAssembly is a binary format for high-performance browser code.
* It works alongside JavaScript.
* You can load `.wasm` modules using `WebAssembly.instantiate()` or tools like `wasm-pack`.
* Rust is a popular language to compile to WASM due to its tooling.
* WASM is great for CPU-intensive tasks, not UI-heavy work.
