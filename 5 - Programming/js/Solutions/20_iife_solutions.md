## Create an IIFE that prints "Hello World"

```js
( function(){
console.log("Hello World")
})();
```

## Create an IIFE that takes a parameter and prints it

```js
( function(message){
console.log(message)
})("Hello World");
```

## Create an IIFE that returns a value

```js
const value = (function(){
    return 42;
})();
console.log(value);
```

## Create an IIFE that creates a private variable

```js
const counter = (function(){
    let count = 0;
    return {
        increment(){
            count++;
            console.log("count"+count);
        },
        getCount(){
            return count;
        }
    }
})
counter.increment(); 
counter.increment(); 
console.log(counter.getCount());
```

## Create an IIFE that returns a function

```js
const greeter = (function(){
    const greeting = "Hello"
    return function(name){
       console.log(`${greeting}, ${name}`)
    }
})();
greeter("John Doe")
```

## Create an IIFE with arrow function syntax

```js
(()=>{
    console.log("hello world")
})();
```

## Create an IIFE that takes multiple parameters

```js
const sum = ((a,b)=>{
   return a+b;
})(2,3)
console.log("sum is "+ sum)
```

## Create an IIFE that performs a calculation

```js
const summ = ((a,b,c)=>{
    return `${a}${c}${b}`
})(2,3,"-")
console.log( summ)
```

## Create an IIFE that creates an object

```js
const user = (function () {
  const name = "John Doe";
  const role = "Developer";

  return {
    getName() {
      return name;
    },
    getRole() {
      return role;
    },
    greet() {
      console.log(`Hello, I'm ${name}, and I'm a ${role}.`);
    }
  };
})();
```

## Usage

```js
user.greet();                
console.log(user.getName()); 
console.log(user.getRole());
```

## Create an IIFE that creates an array

```js
const evenNumbers = (function () {
  const arr = [];
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) arr.push(i);
  }
  return arr;
})();

console.log(evenNumbers);
```
