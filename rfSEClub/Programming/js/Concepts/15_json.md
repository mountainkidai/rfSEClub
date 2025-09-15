# JavaScript JSON (JavaScript Object Notation)

JSON (JavaScript Object Notation) is a lightweight, text-based format used to represent structured data. It's easy for humans to read and write, and easy for programs to parse and generate. JSON is commonly used to send and receive data from web servers and APIs.

---

## 1. JSON Basics

JSON data looks similar to JavaScript object literals but has stricter formatting:

* Keys must be in double quotes
* Only valid JSON data types allowed: string, number, object, array, boolean, and null

Example of a JSON string:

```json
{
  "name": "Alice",
  "age": 25,
  "isStudent": true
}
```

---

## 2. `JSON.parse()` – Convert JSON string to JavaScript object

(parse means to read and interpret a string and turn it into a usable object)

Use this method to turn a JSON-formatted string into a JavaScript object.

```js
let jsonString = '{"name":"Alice","age":25}';
let user = JSON.parse(jsonString);
console.log(user.name); // Alice
```

Note: The string must use double quotes and valid JSON syntax, or it will throw an error.

---

## 3. `JSON.stringify()` – Convert JavaScript object to JSON string

(stringify means to take an object and convert it into a string format that can be saved or sent)

Use this to turn a JavaScript object into a JSON-formatted string (e.g., to send it to a server).

```js
let user = { name: "Bob", age: 30 };
let json = JSON.stringify(user);
console.log(json); // '{"name":"Bob","age":30}'
```

---

## 4. Error Handling with JSON.parse

(handling errors means writing code to catch and respond to problems if something goes wrong)

Parsing an invalid JSON string will throw an error. Always wrap it in try-catch:

```js
let badJson = "{name: 'Tom'}"; // Invalid: keys not in double quotes
try {
  let data = JSON.parse(badJson);
} catch (error) {
  console.error("Invalid JSON:", error);
}
```

---

## 5. Using JSON with APIs

(API stands for Application Programming Interface – it's a way for different programs to communicate and share data)

An API lets your code interact with external services or other parts of an application. For example, a weather API allows your JavaScript program to get real-time weather data from a remote server. Most APIs send and receive data in JSON format because it's easy to use and understand.

Most modern web APIs send and receive data in JSON format. Here's an example using fetch:

```js
// Send a GET request to the given API URL
fetch('https://api.example.com/user')
  // Convert the response body to a JavaScript object
  .then(response => response.json())
  // Once parsed, log the data to the console
  .then(data => console.log(data))
  // If an error occurs (e.g. network issue or invalid JSON), log it
  .catch(error => console.error('API error:', error));
```

## Problems

1. Convert a JavaScript object to JSON string
2. Parse a JSON string back to a JavaScript object
3. Create a JSON object with nested properties
4. Access specific properties from a parsed JSON object
5. Convert an array of objects to JSON string
6. Parse JSON data from an API response
7. Create a JSON object with different data types
8. Validate if a string is valid JSON
9. Convert JSON data to a formatted string
10. Extract specific values from a complex JSON structure
11. Create a JSON object with arrays and objects
12. Convert JSON data to a table format
13. Filter JSON data based on specific criteria
14. Sort JSON data by a specific property
15. Create a JSON object with boolean and null values
