console.log("starting program");
const waitFor20seconds = function () {
  console.log("printing after 20 seconds");
};
setTimeout(waitFor20seconds, 2000);
let count = 0;
for (let i = 0; i < 2000; i++) {
  count++;
}
console.log("ending for loop", count);
