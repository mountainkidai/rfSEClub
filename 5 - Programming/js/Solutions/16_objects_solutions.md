
## Create an object representing a person with name, age, and city properties

```js
let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};
console.log(person);
```

## Create an object representing a book with title, author, and year properties

```js
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

console.log(book);
```

## Create an object representing a car with brand, model, and year properties

```js
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(car);
```

## Access and print specific properties of an object

```js
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
console.log("Car brand:", car.brand);
```

## Add a new property to an existing object

```js
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
car.color = "Blue";
console.log("Updated car object:", car);
```

## Create an object with a method that returns a formatted string

```js
let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(person.greet());
```

## Create nested objects (object within object)

```js
let student = {
    name: "Bob",
    age: 20,
    address: {
        street: "123 Main St",
        city: "Springfield",
        country: "USA"
    }
};
console.log("Student address:", student.address);
```

## Create an object with an array property

```js
let library = {
    name: "City Library",
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ]
};
console.log("Library books:", library.books);
```

## Write a function that takes an object and returns all its keys

```js
function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(getObjectKeys({ name: "Alice", age: 25, city: "Wonderland" }));
```

## Write a function that takes an object and returns all its values

```js
function getObjectValues(obj) {
    return Object.values(obj);
}
console.log(getObjectValues({ name: "Alice", age: 25, city: "Wonderland" }));
```
