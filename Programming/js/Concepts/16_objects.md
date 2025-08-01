# JavaScript Objects

Objects in JavaScript are containers for named values called properties. You can think of them like labeled boxes used to store and access information efficiently.

Imagine an object as an Aadhaar card. It holds information like `name`, `aadhaarNumber`, and `address`. Each piece of info is a *property* with a *value*.

An object is made of **key-value pairs**, where:

* **Key** is the name of the property (like a label or tag)
* **Value** is the actual data or content

## What kind of values can be stored?

A value can be of any data type, such as:

* A string (text inside double or single quotes): "Delhi"
* A number (whole or decimal): 24, 3.14
* A boolean (true or false): true
* Another object
* An array (list of values)
* A function (used as a method)

### Aadhaar Object Example

Here's how an Aadhaar-like data structure can be represented as a JavaScript object:

```js
const aadhaarCard = {
  name: "Sita Kumari",
  aadhaarNumber: "1234-5678-9012",
  age: 32,
  address: {
    street: "MG Road",
    city: "Patna",
    pinCode: 800001
  },
  phoneNumbers: ["9876543210", "9123456780"],
  isVerified: true,
  showDetails() {
    return `${this.name} - ${this.aadhaarNumber}`;
  }
};

console.log(aadhaarCard.showDetails());
```

## Key Concepts and Syntax

### 1. Object Literals

An object literal is the simplest way to create an object.

```js
const person = {
  name: "Rahul",           // string value
  age: 25,                 // number value
  isStudent: true,         // boolean value
  address: {
    city: "Mumbai",
    pinCode: 400001        // object inside another object
  },
  hobbies: ["reading", "cricket"],  // array value
  greet: function() {
    return "Hi, I am Rahul"; // function as a method
  }
};
```

### 2. Property Access

You can access object properties using dot or bracket notation:

```js
console.log(person.name);       // Rahul
console.log(person["age"]);     // 25
console.log(person.address.city);  // Mumbai
console.log(person.hobbies[0]);    // reading
```

Use bracket notation when:

* The key has spaces or special characters
* You want to use a variable as the key

### 3. Initializing Empty Objects

You can start with an empty object and add properties later:

```js
const book = {};
book.title = "JavaScript 101";  // adds 'title' property
book["author"] = "Anjali Mehta"; // adds 'author' property
```

### 4. Methods (Functions inside Objects)

Objects can also hold functions, which are called **methods** when they are part of an object. Methods are actions the object can perform.

```js
const calculator = {
  add: function(a, b) {
    return a + b;               // returns the sum of two numbers
  }
};

console.log(calculator.add(2, 3)); // 5
```

You can also use a shorter way to define methods:

```js
const calculator = {
  add(a, b) {
    return a + b;
  }
};
```

### 5. The `this` Keyword

The `this` keyword in JavaScript refers to the object that is currently executing the function.

In methods (functions inside objects), `this` usually refers to the object the method is written inside.

```js
const user = {
  name: "Aman",
  greet() {
    return "Hello, " + this.name; // 'this' refers to the user object
  }
};

console.log(user.greet()); // Output: Hello, Aman
```

If you try to use a property without `this`, JavaScript might not find it:

```js
const user = {
  name: "Aman",
  greet() {
    return "Hello, " + name; // Error: name is not defined in this scope
  }
};
```

Always use `this.propertyName` when referring to another property inside the same object.

### 6. Deleting Properties

You can remove a property from an object using the `delete` keyword:

```js
const student = {
  name: "Karan",
  age: 21
};

delete student.age;
console.log(student); // { name: "Karan" }
```

### 7. Checking if a Property Exists

Use the `in` keyword or `hasOwnProperty` method:

```js
console.log("name" in student);             // true
console.log(student.hasOwnProperty("age")); // false (after deletion)
```

### 8. Looping Through an Object

To go through each property in an object, use `for...in`:

```js
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

### 9. Dynamic Property Names

You can use variables to define property names:

```js
const key = "city";
const location = {
  [key]: "Delhi"
};

console.log(location.city); // Delhi
```

## Problems

1. Create an object representing a person with name, age, and city properties
2. Create an object representing a book with title, author, and year properties
3. Create an object representing a car with brand, model, and year properties
4. Access and print specific properties of an object
5. Add a new property to an existing object
6. Create an object with a method that returns a formatted string
7. Create nested objects (object within object)
8. Create an object with an array property
9. Write a function that takes an object and returns all its keys
10. Write a function that takes an object and returns all its values
