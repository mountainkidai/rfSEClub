## Demonstrate variable hoisting with var

```js
console.log(a)
var a = 5;
console.log(a);
```

## Demonstrate that let and const are hoisted but not accessible before declaration

```js
console.log(x);
let x = 10;
console.log(y);
const y = 10;
```

## Demonstrate function declaration hoisting

```js
greet();
function greet(){
    console.log("hello world");
}
```

## Demonstrate that function expressions are not hoisted the same way

```js
sayHello();
let sayHello = function(){
    console.log("hi")
}
```

## Create a variable with var and try to access it before declaration

```js
var a ;
console.log(a);
a = 10;
```

## Create a variable with let and try to access it before declaration

```js
let a ;
console.log(a);
a = 10;
```

## Create a function declaration and call it before its definition

```js
grret();
function grret(){
    console.log("hello")
}
```

## Create a function expression and try to call it before assignment

```js
sayHi();
let sayHi = function(){
    console.log("hello world");
}
```

## Demonstrate the difference between var and let hoisting

```js
console.log(a);
let a = 10;
console.log(b);
var b = 10;
```

## Create nested functions and demonstrate hoisting behavior

```js
function outer(){
    inner();
    function inner(){
        console.log("execute inner function");
    }
    console.log("complete outer function");
}
outer();
```
