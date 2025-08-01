# JavaScript API Overview

JavaScript APIs (Application Programming Interfaces) are ready-made sets of code provided by the browser or Node.js that let your code do powerful things — like fetch data from the internet, store user preferences, or read files.

A set of functions that allow one program to interact with another. In JavaScript, these are built-in tools you can use to do complex tasks with simple commands.

## Key APIs by Environment

### 1. **Native JavaScript APIs** (Always available)

These come built-in with JavaScript and are always ready to use. You don’t need to import or install anything.

#### a. `JSON.parse()` – Converts a JSON string into a JS object

* **JSON (JavaScript Object Notation)** – A text format for representing objects and data, commonly used for exchanging information.
* Often used when receiving data from an API, which is usually in text format (JSON).
* This function reads that text and creates a real JavaScript object you can work with.

#### b. `JSON.stringify()` – Converts a JS object into a JSON string

* This is the opposite of `JSON.parse()`.
* Use it when you want to send data to a server or store it in `localStorage`, where only text is allowed.

```js
const jsonStr = '{"name": "Asha", "age": 25}';

const user = JSON.parse(jsonStr); // Convert JSON text into an object
console.log(user.name); // Output: Asha

const backToText = JSON.stringify(user); // Convert object back into JSON string
console.log(backToText); // Output: {"name":"Asha","age":25}
```

* `JSON.parse()` is like turning a written recipe into a dish.
* `JSON.stringify()` is like writing down your own recipe so someone else can use it.
* You can access object values using dot notation like `user.name`.

### 2. **Web Browser APIs**

These only work in browsers and allow JavaScript to interact with the page, storage, or internet.

#### a. **DOM API (Document Object Model)** – Interact with web page elements

A representation of the HTML structure of a webpage, where every element becomes an object JavaScript can interact with.

* The browser turns your HTML page into a tree-like structure called the DOM.
* JavaScript can use this structure to select, modify, or create elements.

```html
<!-- HTML -->
<h1 id="heading"></h1>
```

```js
// JavaScript
const heading = document.getElementById("heading"); // Get the element by its ID
heading.textContent = "Welcome!"; // Set the text inside the element
```

* `document.getElementById()` finds an HTML element by its `id` attribute.
* `.textContent` is used to change the text that is shown on the web page.

#### b. **Fetch API** – Make HTTP requests

* **HTTP (Hypertext Transfer Protocol)** – A system that allows communication between your browser and a server.
* Use `fetch()` to get data from a web server (e.g., news, weather, or user info).
* It works **asynchronously** — this means it continues running other code while waiting for a response.

```js
fetch("https://api.example.com/data") // Make a network request
  .then(response => response.json()) // Convert the response into a JS object
  .then(data => console.log(data))   // Log the result if successful
  .catch(error => console.error("Error:", error)); // Log error if something goes wrong
```

* `then()` handles the result when the fetch succeeds. It waits for the result and then executes the next function.
* `catch()` handles any problems, like if the network is offline.
* `response.json()` also returns a promise, which is why we use another `then()`.

#### c. **localStorage** – Store data in browser

* **localStorage** – A small space in the browser where you can save simple data as key-value pairs.
* `localStorage` lets you save data even after the user closes or refreshes the page.
* You can only store strings, so use `JSON.stringify()` if you want to save an object.

```js
localStorage.setItem("token", "abc123"); // Save a value with the key "token"
const token = localStorage.getItem("token"); // Retrieve the value
console.log(token); // Output: abc123

// Storing and retrieving an object
const user = { name: "Neha", city: "Delhi" };
localStorage.setItem("userInfo", JSON.stringify(user)); // Convert object to string before saving
const savedUser = JSON.parse(localStorage.getItem("userInfo")); // Convert back to object when retrieving
console.log(savedUser.name); // Output: Neha
```

* `setItem(key, value)` saves data.
* `getItem(key)` retrieves the saved data.
* `removeItem(key)` deletes the stored item.
* `clear()` deletes everything in localStorage.

## Problems
