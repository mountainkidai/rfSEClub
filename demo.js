console.log("Hello World");
console.log("print pair of elements in an array");

let a = [1, 2, 3];

for (let i = 0; i < a.length; i++) {
  console.log("i is ", a[i]);
  for (let j = 0; j < a.length; j++) {
    console.log(`pair for row ${i} is [${a[i]}, ${a[j]}]`);
  }
}
