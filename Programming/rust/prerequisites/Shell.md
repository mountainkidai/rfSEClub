# Shell Explained

## What is a Shell?

A **shell** is a command-line interface that lets you interact with the operating system by running commands, scripts, and programs. It interprets user input (or scripts) and executes them, like running your command...

### Purpose of sh in Your Command

* The rustup script fetched by curl is a shell script (starts with #!/bin/sh).
* \#!/bin/sh - use bourne shell to execute the script
* sh is chosen for broad compatibility across Unix-like systems (e.g., macOS, Linux).

### **Types of Shells:**

Bourne Shell (sh):

* **Description**: The original Unix shell (1977), lightweight, POSIX-compliant, designed for scripting.
  * **Lightweight**: Minimalist design, low resource usage, built for efficiency on early Unix systems.
  * **POSIX-compliant**: Forms the core of the POSIX shell standard (IEEE 1003.1), ensuring portable scripting with consistent syntax (e.g., if, for, pipe) across Unix-like OSes.
  * **Designed for scripting**: Optimized for automation, with features like variables, control structures, and I/O redirection (>, |), ideal for system tasks.
* **Path**: /bin/sh (on macOS, often a symlink to /bin/bash).
* **Use**: Portable scripts, like rustup’s #!/bin/sh, for cross-system compatibility.

```shellscript
#!/bin/sh // hashbang - Guarantees the script uses a POSIX-compliant shell,
echo "Installing..."
```

Run: sh script.sh → Output: Installing...

Bash (Bourne Again Shell)

* **Description**: Extends sh with interactive features (history, tab completion) and scripting enhancements.
* **Path**: /bin/bash.
* **Use**: Default on many Linux systems, runs sh scripts

```shellscript
#!/bin/bash
for i in 1 2 3; do echo "Count: $i"; done
```

zsh Z Shell:

* **Description**: Extends bash with advanced interactivity (better completion, plugins like Oh My Zsh). Default on macOS since 2019, likely your shell.
* **Path**: /bin/zsh.
* **Use**: Ideal for coding sessions, runs sh scripts.

### Which is most used?

* **Globally**: Bash is the most used due to its default status on Linux (80%+ server market share) and legacy in scripting. Stack Overflow’s 2023 survey shows Bash as the top shell for developers (used by \~50% of respondents).
