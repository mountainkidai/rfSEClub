# **MODULE SYSTEM (HOW RUST KEEPS LARGE CODEBASES SANE)**

no project is hard because of logic.

It's hard because of **structure**.

Rust's module system exists to **force clarity**.

---

## **FIRST PRINCIPLE (THE ROOT TRUTH)**

> **Code should only see what it is allowed to see.**

Bad systems:

- everything public

- everything imports everything

- impossible to reason about

Rust:

- hides everything by default

- forces you to open doors explicitly

---

## **THE TWO MEANINGS OF "MODULE"**

1.  **Logical namespace** (privacy boundary)

2.  **File / folder mapping**

Rust unifies both.

---

## **STEP 1 --- THE SMALLEST MODULE**

```
mod auth {
    fn helper() {
        println!("secret");
    }
}
```

Outside auth, helper is **invisible**.

Default rule:

> **Everything is private unless marked pub.**

---

## **STEP 2 --- MAKING THINGS PUBLIC (EXPLICITLY)**

```
mod auth {
    pub fn login() {
        println!("login");
    }
}
```

Now:

```
auth::login(); // ✅
```

---

## **STEP 3 --- FILE = MODULE (THE BIG RULE)**

```
src/
 ├─ main.rs
 └─ auth.rs
```

auth.rs automatically becomes:

```
mod auth;
```

You do **not** need to write mod auth inside auth.rs.

---

## **STEP 4 --- FOLDERS = NESTED MODULES**

```
src/
 ├─ main.rs
 └─ auth/
     ├─ mod.rs
     ├─ login.rs
     └─ errors.rs
```

Maps to:

```
auth
├─ login
└─ errors
```

Usage:

```
auth::login::handle();
auth::errors::AuthError;
```

---

## **STEP 5 --- MODERN STYLE (NO mod.rs)**

Rust now supports:

```rs
src/
 └─ auth/
     ├─ login.rs
     └─ errors.rs
```

And in auth.rs:

```
pub mod login;
pub mod errors;
```

This is the **preferred style**.

---

```rs
// FILE: src/main.rs
mod auth;  // Load src/auth.rs

use crate::auth::login::handle_login;  // Shortcut!

fn main() {
    handle_login();  // Short! No long path needed
}

// FILE: src/auth.rs
pub mod login;   // Load src/auth/login.rs
pub mod errors;  // Load src/auth/errors.rs

// FILE: src/auth/login.rs
pub fn handle_login() {
    println!("🔐 Logging in...");
}

// FILE: src/auth/errors.rs
pub enum AuthError {
    WrongPassword,
}
```

```text
src/
 ├─ main.rs
 └─ auth/
     ├─ auth.rs      ← "connects" login + errors
     ├─ login.rs     ← login code
     └─ errors.rs    ← error types
```

### without use

```text
// main.rs
crate::auth::login::handle_login();  // Long path every time 😩
```

### with use

```text
// main.rs
use crate::auth::login::handle_login;
handle_login();  // Short & sweet! 😎

```

## **STEP 6 --- use (BRING INTO SCOPE)**

```rs
use crate::auth::login::handle;
```

Now you can call:

```rs
handle();
```

use does NOT import code.

It just creates a **shortcut**.

---

## **STEP 7 --- crate IS THE ROOT**

```rs
crate::auth::login::handle
```

Means:

```text
Start from project root
```

Never use relative chaos like super::super in apps.

Rule:

> **Use absolute paths (crate::...) in application code.**

---

## **STEP 8 --- RE-EXPORTING (PUBLIC API SHAPING)**

```
// auth.rs
pub use login::handle;
```

Now users can write:

```
auth::handle();
```

This hides internal structure.

This is how you design **clean APIs**.

---

## **STEP 9 --- VISIBILITY LEVELS (IMPORTANT)**

```rs
pub           // visible everywhere
pub(crate)   // visible inside crate
pub(super)   // visible to parent module
```

Auth rule:

> **Internal logic = pub(crate)**

> **External API = pub**

---

## **STEP 10 --- AUTH MODULE STRUCTURE (RECOMMENDED)**

```rs
src/
 ├─ main.rs
 ├─ auth/
 │   ├─ mod.rs
 │   ├─ service.rs      // AuthService
 │   ├─ repo.rs         // UserRepo trait
 │   ├─ hasher.rs       // PasswordHasher trait
 │   ├─ errors.rs       // AuthError
 │   └─ routes.rs       // Axum handlers
```

This prevents:

- circular dependencies

- leaking internals

- god files

---

## **STEP 11 --- PRIVATE BY DEFAULT = SAFETY**

Example:

```rs
mod auth {
    fn hash() {}
    pub fn login() {}
}
```

login can call hash.

Outside cannot.

This creates **enforced layering**.

---

## **STEP 12 --- WHY THIS MATTERS FOR KOEL AUTH**

Without modules:

- traits leak everywhere

- errors duplicated

- refactors break everything

With modules:

- auth is a clean black box

- easy to test

- easy to replace

---

## **🔒 DESIGN INVARIANTS**

1. Everything private by default
2. Public API is small and intentional
3. Absolute paths only (crate::)
4. Re-export for clean interfaces
5. Folder = domain boundary

---

## **CHECKPOINT (ANSWERED)**

1. Why does Rust hide things by default?

   → Forces intentional design.

2. What is crate?

   → Root of the project.

3. Why re-export?

   → Control your public surface.

---
