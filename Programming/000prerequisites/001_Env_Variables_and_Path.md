# Env Variables & Path explained

🧩 What is PATH?

Think of your Mac as a kitchen.

PATH = a place/cupboard where the cook (your shell) looks for tools.

When you say cargo or node, the cook runs around opening each drawer in order until it finds the right tool.

## What is echo \$PATH?

- **Simple Explanation**: echo \$PATH is a command you type in your terminal (likely zsh, macOS default) to show the list of folders where your shell looks for programs when you run commands like rustc, cargo, or node.
- **What it does**: It prints the PATH environment variable, which is a list of directories separated by colons (:).

```shellscript
echo $PATH
```

```sh
/Users/aariv/.nvm/versions/node/v20.17.0/bin
:/opt/homebrew/opt/ruby/bin
:/opt/homebrew/opt/ruby@3.0/bin
:/opt/homebrew/opt/ruby/bin
:/opt/homebrew/opt/ruby/bin
:/Users/aariv/miniforge3/bin
:/opt/homebrew/bin
:/opt/homebrew/sbin
:/usr/local/bin
:/System/Cryptexes/App/usr/bin
:/usr/bin:/bin:/usr/sbin
:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin
:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin
:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin
:/Library/Apple/usr/bin:/Applications/VMware Fusion.app/Contents/Public
:/Users/aariv/.cargo/bin:/Users/aariv/.rvm/bin
```

Your PATH includes folders for various tools:

```sh
/Users/aariv/.nvm/versions/node/v20.17.0/bin → Node.js (v20.17.0, managed by NVM).
/opt/homebrew/opt/ruby/bin → Ruby (via Homebrew).
/opt/homebrew/opt/ruby@3.0/bin → Another Ruby version.
/Users/aariv/miniforge3/bin → Miniforge (Python/Conda environment).
/opt/homebrew/bin + /opt/homebrew/sbin → Homebrew-installed software.
/usr/local/bin → User-installed programs.
/System/Cryptexes/App/usr/bin → Apple’s secure container for system tools.
/usr/bin and /bin → Core macOS commands (ls, cp, echo).
/usr/sbin and /sbin → Admin-level system commands.
/var/run/com.apple.security.cryptexd/... → Extra Apple-internal/system tools.
/Library/Apple/usr/bin → More Apple-supplied tools.
/Applications/VMware Fusion.app/Contents/Public → VMware’s CLI tools.
/Users/aariv/.cargo/bin → Rust tools (cargo, rustc).
/Users/aariv/.rvm/bin → Ruby Version Manager tools.
```

When you type cargo:

Shell checks /Users/aariv/.nvm/... → no cargo there.

Checks /opt/homebrew/opt/ruby/... → still no.

Keeps going… until it hits /Users/aariv/.cargo/bin → finds cargo, runs it. ✅

```sh
/Users/aariv/.cargo/bin/cargo build
So PATH = search roadmap.
Your PATH just says:

“First look in Node’s bin, then Ruby, then Python, then Homebrew, … eventually Rust.”
```

### What is an Environment Variable?

- **Simple**: An environment variable is a setting your shell uses to store information, like a name and value. PATH is one example.
- **Examples:**
  - PATH: List of folders for programs (e.g., /Users/aariv/.cargo/bin:...).
  - HOME: Your home directory (e.g., /Users/aariv).
  - SHELL: Your shell (e.g., /bin/zsh for you).
- **How they work**: Programs and scripts read these variables to know where files are or how to behave.

```shellscript
echo $HOME
# Output: /Users/aariv
echo $SHELL
# Output: /bin/zsh
```
