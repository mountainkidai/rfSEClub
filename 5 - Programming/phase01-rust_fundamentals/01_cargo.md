Think of Cargo.toml and Cargo.lock as two different things:

File Purpose
Cargo.toml What versions are allowed
Cargo.lock The exact versions Cargo actually chose

⸻

Example

Suppose you add this to Cargo.toml:

[dependencies]
rand = "0.8.5"

The "0.8.5" does not mean exactly 0.8.5.

It means:

> = 0.8.5 and < 0.9.0

So Cargo is allowed to use:

0.8.5
0.8.6
0.8.7
...
0.8.999

but not:

0.9.0

⸻

First cargo build

When you run:

cargo build

Cargo:

Step 1

Reads:

rand = "0.8.5"

Step 2

Looks at crates.io and finds the newest compatible version.

Suppose it finds:

rand 0.8.5

Step 3

It also finds rand’s dependencies:

rand
├── rand_core
├── libc
└── getrandom

Step 4

Writes everything into Cargo.lock.

Example:

[[package]]
name = "rand"
version = "0.8.5"
[[package]]
name = "rand_core"
version = "0.6.4"
[[package]]
name = "getrandom"
version = "0.2.15"

⸻

Next build

Next week:

rand 0.8.6 released

You run:

cargo build

Cargo sees:

Cargo.lock exists

and says:

Use exactly what is in Cargo.lock.

So it still builds:

rand 0.8.5
rand_core 0.6.4
getrandom 0.2.15

even though newer versions exist.

This guarantees that:

- Your laptop
- Your server
- GitHub Actions
- Another developer

all build the exact same dependency tree.

⸻

When does Cargo.lock change?

Case 1: Add a new dependency

You change:

[dependencies]
rand = "0.8.5"
serde = "1.0"

Then run:

cargo build

Cargo updates Cargo.lock:

[[package]]
name = "serde"
version = "1.0.228"

and adds all serde’s dependencies too.

⸻

Case 2: Upgrade dependencies

Run:

cargo update

Now Cargo re-resolves versions.

Example:

Before:

rand 0.8.5

After:

rand 0.8.6

Cargo rewrites Cargo.lock.

⸻

Case 3: Remove a dependency

Delete:

rand = "0.8.5"

and run:

cargo build

Cargo removes unused packages from Cargo.lock.

⸻

Simple mental model

Imagine:

Cargo.toml

is a shopping list:

Milk
Bread
Eggs

and

Cargo.lock

is the actual receipt:

Amul Milk 500ml
Britannia Bread
12 Eggs

The shopping list says what you want.

The receipt records exactly what was purchased.

When another developer comes later, Cargo uses the receipt (Cargo.lock) instead of going shopping again, ensuring everyone gets the same items.

⸻

Typical workflow

1. Edit Cargo.toml

serde = "1.0"

2. Run

cargo build

3. Cargo automatically updates

Cargo.lock

4. Commit both files:

git add Cargo.toml Cargo.lock
git commit -m "Add serde"

That’s why you’ll often see Rust PRs containing changes to both Cargo.toml and Cargo.lock.
