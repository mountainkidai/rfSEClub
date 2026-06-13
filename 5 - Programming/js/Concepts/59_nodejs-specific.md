# Node.js Topics

Node.js is a runtime environment for executing JavaScript outside the browser. It is particularly well-suited for building scalable network applications. In this section, we explore some of Node.js's core modules: `EventEmitter`, streams, and child processes.

---

## 1. EventEmitter

Node.js uses an event-driven architecture. The `EventEmitter` class allows objects to emit and listen for events.

### Basic Example

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register an event listener
emitter.on('greet', () => {
  console.log('Hello from event!');
});

// Emit the event
emitter.emit('greet');
```

### Explanation

* `emitter.on(event, listener)`: Registers a listener.
* `emitter.emit(event)`: Triggers the event.

This pattern is heavily used in Node.js for handling asynchronous operations.

---

## 2. Streams

Streams are objects that let you read data from a source or write data to a destination **piece by piece**, instead of all at once.

There are four types of streams:

* **Readable**: streams you can read from (e.g., `fs.createReadStream`)
* **Writable**: streams you can write to (e.g., `fs.createWriteStream`)
* **Duplex**: both readable and writable (e.g., sockets)
* **Transform**: duplex with modify capability (e.g., compression)

### Example (Read from file)

```js
const fs = require('fs');
const readStream = fs.createReadStream('example.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});
```

* `createReadStream`: opens the file as a stream.
* `.on('data')`: triggers when a chunk is read.

This is more memory-efficient than reading the entire file at once.

---

## 3. Child Processes

Node.js can spawn new processes using the `child_process` module. Useful for running external commands or parallel processing.

```js
const { exec } = require('child_process');

exec('ls', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
```

* `exec(command, callback)`: runs a shell command.
* The callback provides output or errors.

Other options include `spawn()` (for streaming data) and `fork()` (for Node child processes).

---

## Summary

| Feature         | Description                              |
| --------------- | ---------------------------------------- |
| EventEmitter    | Handles custom events asynchronously     |
| Streams         | Efficient I/O, read/write piece by piece |
| Child Processes | Run shell commands or other Node scripts |

These core features make Node.js highly suitable for building fast, scalable server-side applications.

## Problems
