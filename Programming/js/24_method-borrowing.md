# JavaScript Method Borrowing (`call`, `bind`)

In JavaScript, objects can borrow methods from other objects. This is useful when two objects have similar properties, but only one has the required method.

To do this, JavaScript provides special methods like `call` and `bind`, which allow you to manually set the `this` value — meaning you decide which object the method should run on.

## Key Concepts and Syntax

### 1. Using `call()`

The `call()` method allows a function to be called with a specific object as its `this` value (this object is used as the context for the method).

```js
const person1 = {
  name: "Arjun",
  greet: function(city) {
    console.log("Hi, I am " + this.name + " from " + city);
  }
};

const person2 = {
  name: "Ritika"
};

person1.greet.call(person2, "Delhi");
// Output: Hi, I am Ritika from Delhi
```

Here, `person1` has the `greet` method, but we use it for `person2` using `call`.

### 2. Using `bind()`

The `bind()` method is similar to `call`, but instead of calling the function immediately, it returns a new function with the bound object (the object that will be treated as `this` when the new function runs).

```js
const person3 = {
  name: "Kabir"
};

const greetKabir = person1.greet.bind(person3, "Chennai");
greetKabir(); // Output: Hi, I am Kabir from Chennai
```
