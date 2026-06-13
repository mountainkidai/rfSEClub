## Create a function and assign it to a variable

```js
function assign(){
    return "Helo World"
}
let fun = assign();
console.log(fun);
```

## Pass a function as an argument to another function

```js
function greet(name){
    return `Helo`+ name;
}
function process(func,name){
    message = func(name);
    return message;
}
console.log(process(assign,John))
```

## Return a function from another function

```js
function fun_1(){
    function fun_2(){
        return "function 2 output";
    }
    return fun_2();
}
console.log(fun_1())
```

## Create a function that takes a function as a parameter

```js
function callAsParameter(){
    return "This function return as a parameter";
}
function para(call){
    return call();
}
console.log(para(callAsParameter))
```

## Create a function that returns different functions based on input

```js
function greetings(name){
    return "Helo" + name + "Welcome";
}
function call_greet(fun,name){
    return fun(name);
}
console.log(call_greet(greetings,"john Doe"))
```

## Store multiple functions in an array

```js
function fun1(){
    console.log("function 1")
}
function fun2(){
    console.log("function 2")
}
function fun3(){
    console.log("function 3")
}
let arry = [fun1(),fun2(),fun3()];
console.log(arry)
```

## Create a function that accepts a callback function

```js
function greetUser(name,callback){
    console.log(`hello ${name}`);
    callback();
}
function goodbye(){
    console.log("good bye");
}
greetUser("john",goodbye)
```

## Create a function that returns a function with specific behavior

```js
function createAcess(){
   return function (action){
    if(role == 'admin'){
           return `Access granted to ${action}`;
    } else {
      return `Access denied to ${action}`;
    }
    }
   }
const adminAccess = createAcess("admin");
const userAccess = createAcess("user");
console.log(adminAccess('delete'))
console.log(userAccess('delete'))
```

## Pass a function as a property of an object

```js
const user = {
    name : "John Doe",
    greet : function(){
        console.log(`Hello, my name is ${this.name}`)
    }
}
user.greet();
```

## Create a function that can be called immediately after definition

```js
(function() {
  console.log("IIFE executed!");
})();
```
