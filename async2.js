const fs = require("fs");
const showFileContent = (err, data) => {
  // err and data are the arguments passed to the callback function by the readFile method
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
};
fs.readFile("data.txt", "utf-8", showFileContent);

console.log("First Time Notice");

let count = 0;
for (let i = 1; i <= 10000000000; i++) {
  count += i;
}
console.log("count is", count);

console.log("SECOND TIME NOTICE:");

// because the thread is blocked by the for loop, the file content will be printed after the for loop is done
// this is an example of asynchronous programming
