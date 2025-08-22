# Env Variables & Path explained

## What is echo \$PATH?

* **Simple Explanation**: echo \$PATH is a command you type in your terminal (likely zsh, macOS default) to show the list of folders where your shell looks for programs when you run commands like rustc, cargo, or node.
* **What it does**: It prints the PATH environment variable, which is a list of directories separated by colons (:).

```shellscript
echo $PATH
```

```txt
/Users/aariv/.nvm/versions/node/v20.17.0/bin:/opt/homebrew/opt/ruby/bin:/opt/homebrew/opt/ruby@3.0/bin:/opt/homebrew/opt/ruby/bin:/opt/homebrew/opt/ruby/bin:/Users/aariv/miniforge3/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Applications/VMware Fusion.app/Contents/Public:/Users/aariv/.cargo/bin:/Users/aariv/.rvm/bin
```

Your PATH includes folders for various tools:

* **Rust**: /Users/aariv/.cargo/bin (from source \$HOME/.cargo/env, added by rustup for rustc, cargo).
* **Node.js**: /Users/aariv/.nvm/versions/node/v20.17.0/bin (Node v20.17.0, likely for your Next.js setup on rfse.club).
* **Ruby**: /opt/homebrew/opt/ruby/bin, /opt/homebrew/opt/ruby@3.0/bin (multiple Ruby versions via Homebrew).
* **Conda**: /Users/aariv/miniforge3/bin (Miniforge, for Python environments).
* **Homebrew**: /opt/homebrew/bin, /opt/homebrew/sbin (macOS package manager).
* **macOS System**: /usr/bin, /bin, /usr/sbin, /sbin (core tools like ls, echo).
* **VMware**: /Applications/VMware Fusion.app/Contents/Public (virtualization tools).
* **RVM**: /Users/aariv/.rvm/bin (Ruby Version Manager).
* **Apple Internal**: /var/run/com.apple.security.cryptexd/... (macOS system paths).

**Note**: Some Ruby paths appear multiple times (e.g., /opt/homebrew/opt/ruby/bin).

### What is an Environment Variable?

* **Simple**: An environment variable is a setting your shell uses to store information, like a name and value. PATH is one example.
* **Examples:**
  * PATH: List of folders for programs (e.g., /Users/aariv/.cargo/bin:...).
  * HOME: Your home directory (e.g., /Users/aariv).
  * SHELL: Your shell (e.g., /bin/zsh for you).
* **How they work**: Programs and scripts read these variables to know where files are or how to behave.

```shellscript
echo $HOME
# Output: /Users/komalsambana
echo $SHELL
# Output: /bin/zsh
```
