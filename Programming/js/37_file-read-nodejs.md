# File Reading in Node.js Using Callbacks

In Node.js, reading files is done asynchronously using built-in functions from the `fs` (File System) module. One common method is to use **callbacks**, which handle the result when the file read finishes.

---

## What is a Callback?

A **callback** is a function passed into another function to run later, when a task is done.

In file reading, Node.js will read the file in the background. When it finishes, it will call the callback and pass either an error or the file data.

This allows the program to continue running while the file is being read.

---

## 1. Import the `fs` Module

```js
const fs = require("fs");
```

* This line loads the built-in `fs` module, which provides functions to read and write files.

---

## 2. Read a File with `fs.readFile`

```js
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
```

### Explanation

* `"example.txt"` is the file name we want to read.
* `"utf8"` is the encoding (so we get readable text instead of raw bytes).
* The third argument is a **callback function** with two parameters:

  * `err`: holds any error if one occurs
  * `data`: contains the file content if successful

### What Happens

* Node starts reading `example.txt`
* While reading, your program continues
* When finished:

  * If there's an error (e.g., file not found), `err` is filled
  * Otherwise, `data` contains the text and is printed

---

## 3. Example with a Non-Existent File

```js
fs.readFile("notfound.txt", "utf8", (err, data) => {
  if (err) {
    console.error("File not found or another error:", err.message);
    return;
  }
  console.log(data);
});
```

### Output (if file doesn't exist)

```txt
File not found or another error: ENOENT: no such file or directory, open 'notfound.txt'
```

* `ENOENT` means “Error NO ENTry” — file doesn’t exist
* You should always check for errors before using the data

---

## 4. Why Use Callbacks?

* Asynchronous (non-blocking) — program doesn't freeze
* Good for simple tasks
* Can become complex if you nest too many callbacks (callback hell)
