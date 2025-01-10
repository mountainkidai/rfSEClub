console.log("starting program");

function calculateSub() {
  let count = 0;
  for (let i = 1; i <= 10; i++) {
    count = count - i;
  }

  console.log("sub result -for loop", count);
}

function calculateSum() {
  calculateSub();
  let count = 0;
  for (let i = 1; i <= 10; i++) {
    count = count + i;
  }

  console.log("sum result -for loop", count);
}
calculateSum();

// http://latentflip.com/loupe/
