//types of APIs in javascript
// 1. Native APIs
// 2. Web APIs
//3. Nodejs APIs

//1. Native APIs
// These are built into the JavaScript language and are available in the browser.
// Examples include methods like .map(), .filter(), .reduce(), and .includes().
// These APIs are available in the global scope and can be used directly.
// list of Native APIs:
// Array - Methods for manipulating arrays, such as map(), filter(), reduce(), and includes().
// String - Methods for manipulating strings, such as toUpperCase(), toLowerCase(), and trim().
// Number - Methods for manipulating numbers, such as toFixed(), parseInt(), and isFinite().
// Object - Methods for manipulating objects, such as keys(), values(), and entries().
// Math - Methods for mathematical operations, such as round(), floor(), and random().
// Date - Methods for working with dates and times, such as getDate(), getMonth(), and getTime().
// JSON - Methods for working with JSON data, such as parse() and stringify().
// RegExp - Methods for working with regular expressions, such as test(), exec(), and match().

// Example:
let arr = [1, 2, 3, 4, 5];
let result = arr.map((x) => x * 2);
console.log(result);
// Output: [2, 4, 6, 8, 10]

//2. Web APIs
// These are APIs provided by the browser, such as the DOM API, Fetch API, and Web Storage API.
// They are not built into the JavaScript language, but are available in the browser environment.
// list of Web APIs:
// DOM API - DOM is a programming interface for web documents. It represents the structure of the document as a tree of objects.
// Fetch API - The Fetch API provides an interface for fetching resources (including across the network).
// Web Storage API - The Web Storage API provides mechanisms by which browsers can store key/value pairs.
// Web Workers API - Web Workers provide a way to run JavaScript code in background threads.
// Canvas API - The Canvas API provides a way to draw graphics on a web page using JavaScript.
// Audio/Video API - The Audio/Video API provides a way to play audio and video on a web page.
// Geolocation API - The Geolocation API provides a way to get the user's geographical location.
// WebSockets API - WebSockets provide a way to establish a two-way communication channel between a client and a server.
// WebRTC API - WebRTC provides a way to enable real-time communication between browsers.
// Service Workers API - Service Workers provide a way to run JavaScript code in the background, even when the web page is closed.

// Example:
// DOM API
document.getElementById("myElement").innerHTML = "Hello, World!";
// Fetch API
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
// Web Storage API
localStorage.setItem("key", "value");
let value = localStorage.getItem("key");
console.log(value);
// Output: value

//3 Node.js APIs
// These are APIs provided by Node.js, such as the File System API, HTTP API, and Crypto API.
// They are not built into the JavaScript language, but are available in the Node.js environment.
// Example:
// File System API
const fs = require("fs");
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// HTTP API
const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  })
  .listen(3000);
// Crypto API
const crypto = require("crypto");
const hash = crypto.createHash("sha256");
hash.update("Hello, World!");
console.log(hash.digest("hex"));
// Output: 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824

// In summary, there are three types of APIs in JavaScript: Native APIs, Web APIs, and Node.js APIs.
// Native APIs are built into the JavaScript language and are available in the browser.
// Web APIs are provided by the browser environment, such as the DOM API, Fetch API, and Web Storage API.
// Node.js APIs are provided by the Node.js environment, such as the File System API, HTTP API, and Crypto API.
// Each type of API serves a different purpose and can be used to interact with different parts of the environment in which JavaScript is running.
