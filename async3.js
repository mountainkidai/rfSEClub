// explaining callstack,webapi,callback queue,event loop
// callstack - data structure that records the function calls - the line of code that is running at the moment
// webapi - browser api that handles the async operations
// callback queue - data structure that records the callback functions
// event loop - checks the callstack and callback queue

console.log("starting program");
// using setTimeout to simulate async operation
// setTimeout is a webapi function
// syntax: setTimeout(callback_function, time_in_milliseconds)

const waitfor5seconds = () => {
  console.log("5 seconds have passed");
};

setTimeout(waitfor5seconds, 5000);
let count = 0;
for (let i = 1; i <= 1000000000; i++) {
  count += i;
}
console.log("printing result -for loop");
console.log("ending program", count);
