## Create a function that takes a callback and calls it with a number

```js
function processNumber(callback){
    let number = 42;
    callback(number);
}
function print(num){
    console.log(`recived number ${num}`)

}
processNumber(print);
```

## Create a function that takes a callback and calls it with a string

```js
function processStr(callback){
    let str = "john doe";
    callback(str);
}
function print(name){
    console.log(`recived name ${name}`)

}
processStr(print);
```

## Create a function that takes a callback and calls it with an array

```js
function processArry(callback){
    let arr = [1,2,3,4];
    callback(arr);
}
function print(arr){
    console.log(`recived array ${rr}`)

}
processArry(print);
```

## Create a function that takes a callback and calls it with an object

```js
function processObj(callback){
    let obj = {name:"John Doe", age:25};
    callback(obj);
}
function print(obj){
    console.log(`recived object ${obj}`)

}
processObj(print);
```

## Use setTimeout with a callback function

```js
function callBack(){
    console.log("Hello after 2 seconds");
}
setTimeout(callBack,2000)
```

## Use setInterval with a callback function

```js
function callBack(){
    console.log("Hello after every 2 seconds");
}
setInterval(callBack,2000)
```

## Create a function that takes a callback and calls it after a delay

```js
function callAfter(callback,delay){
    setTimeout(callback,delay)
}
callAfter(()=>{
    console.log("this message rint after 2 second")
},2000)
```

## Use forEach with a callback function

```js
let numbers = [1,2,3,4,5,6];
numbers.forEach(function(num){
    console.log('Number :',num)
})
```

## Use map with a callback function

```js
let number = [1,2,3,4,5,6];
let double = numbers.map(function(num){
    return(num * 2);
})
console.log(double)
```

## Use filter with a callback function

```js
let num = [1,2,3,4,5,6];
let even = numbers.filter(function(num){
    return num % 2 ==0;
})
console.log(even)
```

## Create a function that takes a callback and calls it conditionally

```js
function conditionCaller(condition,callback){
    if(condition){
        callback();
    }
    else{
        console.log("Does not call the condition is false")
    }
}
function sayHello(){
    console.log("Hello the condition was true")
}
conditionCaller(true,sayHello)
```

## Create a function that takes multiple callbacks

```js
function multipleCallback(successCall,failureCall){
    let isSuccessful = Math.random()>0.5;
    if(isSuccessful){
        successCall("action success");
    }
    else{
        failureCall("action failed");
    }
}
function success(message){
   return "success",message
}
function failed(message){
   return "failed",message
}
console.log(multipleCallback(success,failed))
```

## Create a function that returns a callback {function}

```js
function createCallback(name){
    return function (){
       console.log(`hello ${name}`);
    }

}
const callingfunction = createCallback('John doe')
callingfunction();
```

## Create a function that takes a callback and calls it with different data types

```js
function callWithDifferentTypes(callback) {
  callback("Hello, I am a string");
  callback(42);                  
  callback(true);                 
  callback([1, 2, 3]);           
  callback({ name: "John Doe" }); 
  callback(null);                 
}
callWithDifferentTypes((data) => {
  console.log("Received:", data, "| Type:", typeof data);
});
```
