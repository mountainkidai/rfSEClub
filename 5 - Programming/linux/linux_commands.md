# 🚀 Linux Bash Commands Explained

## Important

Here's a **detailed but simple** breakdown of common **Bash (Linux Shell) commands** along with examples.

---

## **1️⃣ What is `bash`?**

* `bash` (**Bourne Again SHell**) is a command-line **shell** and scripting language for Linux.
* It lets you interact with the operating system via commands.

👉 **To open Bash**, use:

```bash
bash
```

or open **Terminal (Mac/Linux)**.

---

## **2️⃣ `pwd` (Print Working Directory)**

🔹 **Displays the current directory you are in.**

```bash
pwd
```

📌 **Example Output**:

```txt
/home/user/documents
```

---

## **3️⃣ `ls` (List Files)**

🔹 **Lists all files and directories in the current directory.**

```bash
ls
```

📌 **Useful Options**:

```bash
ls -l   # Long format (with details)
ls -a   # Show hidden files (starting with ".")
ls -lh  # Human-readable sizes
```

---

## **4️⃣ `cat` (Concatenate and Display Files)**

🔹 **Displays the contents of a file.**

```bash
cat filename.txt
```

📌 **Other Uses**:

```bash
cat file1.txt file2.txt > merged.txt  # Merge two files into one
cat > newfile.txt                     # Create a new file (Ctrl + D to save)
```

---

## **5️⃣ `mkdir` (Make Directory)**

🔹 **Creates a new directory (folder).**

```bash
mkdir new_folder
```

📌 **Useful Options**:

```bash
mkdir -p parent/child  # Create parent and child directories together
```

---

## **6️⃣ `cp` (Copy Files and Directories)**

🔹 **Copies files or directories.**

```bash
cp file1.txt file2.txt
```

📌 **Useful Options**:

```bash
cp -r folder1 folder2    # Copy directories recursively
cp -i file.txt /backup   # Ask before overwriting
```

---

## **7️⃣ `rm` (Remove Files and Directories)**

🔹 **Deletes files or directories.**

```bash
rm file.txt
```

📌 **Useful Options**:

```bash
rm -r folder/      # Delete a directory and its contents
rm -i file.txt     # Confirm before deleting
rm -rf /folder     # Force delete (USE WITH CAUTION)
```

---

## **8️⃣ `mv` (Move or Rename)**

🔹 **Moves or renames a file or directory.**

```bash
mv file.txt new_location/
```

📌 **Rename a file**:

```bash
mv oldname.txt newname.txt
```

---

## **9️⃣ `chmod` (Change File Permissions)**

🔹 **Changes permissions (read, write, execute).**

```bash
chmod 777 file.sh   # Full permissions (dangerous)
chmod +x script.sh  # Make a script executable
```

📌 **Permission Breakdown**:

* `r` (Read) = 4
* `w` (Write) = 2
* `x` (Execute) = 1

Example:

```bash
chmod 755 script.sh  # Owner (rwx), Group (r-x), Others (r-x)
```

---

## **🔟 `echo` (Print Output to Terminal)**

🔹 **Displays text or writes to a file.**

```bash
echo "Hello World"
```

📌 **Save to a file**:

```bash
echo "New Line" >> file.txt
```

---

## **1️⃣1️⃣ `head` & `tail` (View First/Last Lines of a File)**

🔹 **`head` - Shows the first 10 lines of a file.**

```bash
head file.txt
```

🔹 **`tail` - Shows the last 10 lines of a file.**

```bash
tail file.txt
```

📌 **Useful Options**:

```bash
head -5 file.txt      # Show first 5 lines
tail -n 20 file.txt   # Show last 20 lines
tail -f log.txt       # Show new log lines in real-time
```

---

## **1️⃣2️⃣ `|` (Pipe)**

🔹 **Passes output from one command to another.**

```bash
ls -l | grep ".txt"
```

📌 **Example Usage**:

```bash
cat file.txt | wc -l    # Count lines in file
ps aux | grep chrome    # Find Chrome process
```

---

## **1️⃣3️⃣ `wc` (Word Count)**

🔹 **Counts lines, words, and characters.**

```bash
wc file.txt
```

📌 **Example Output**:

```txt
 10  50  200 file.txt
```

(10 lines, 50 words, 200 characters)

📌 **Useful Options**:

```bash
wc -l file.txt  # Count lines only
wc -w file.txt  # Count words only
wc -c file.txt  # Count characters only
```

---

## **1️⃣4️⃣ `grep` (Search in Files)**

🔹 **Searches for text patterns in a file.**

```bash
grep "error" log.txt
```

📌 **Useful Options**:

```bash
grep -i "hello" file.txt          # Case insensitive search
grep -r "TODO" ./project          # Search inside all files in a directory
grep -n "word" file.txt           # Show line numbers
```

---

## **1️⃣5️⃣ Writing a Bash Script**

🔹 **A Bash script is a file that contains multiple commands.**

```bash
#!/bin/bash
echo "Hello, Bash!"
pwd
ls -l
```

📌 **How to Run a Script**:

**Make the file executable**:

```bash
      chmod +x script.sh
```

**Run it**:

```bash
   ./script.sh
```

---

## **1️⃣6️⃣ `sed` (Stream Editor)**

🔹 **Modifies text in a file or stream.**

```bash
sed 's/old/new/g' file.txt  # Replace "old" with "new" in file.txt
```

📌 **Example**:

```bash
echo "Hello World" | sed 's/World/Bash/'  # Output: Hello Bash
```

---

## **1️⃣7️⃣ `awk` (Pattern Scanning & Processing)**

🔹 **Processes text, especially useful for columns in structured data.**

```bash
awk '{print $1}' file.txt  # Print first column of each line
```

📌 **Example - Print Names from a CSV File**:

```bash
awk -F "," '{print $2}' data.csv  # Print the second column (assuming CSV format)
```

---

### **🚀 Summary of Commands**

| Command | Description |
|---------|-------------|
| `bash` | Starts a Bash shell |
| `pwd` | Prints current directory |
| `ls` | Lists files & directories |
| `cat` | Displays file contents |
| `mkdir` | Creates a directory |
| `cp` | Copies files |
| `rm` | Removes files |
| `mv` | Moves or renames files |
| `chmod` | Changes file permissions |
| `echo` | Prints output to terminal |
| `head` | Shows first 10 lines of a file |
| `tail` | Shows last 10 lines of a file |
| `\|` (Pipe) | Passes output between commands |
| `wc` | Counts words, lines, or characters |
| `grep` | Searches text in files |
| `sed` | Edits text in streams |
| `awk` | Processes structured text |
| **Bash Script** | Automates tasks with multiple commands |

---
