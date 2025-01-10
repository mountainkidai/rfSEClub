console.log("starting program");

function calculateSub() {
  let count = 0;
  for (let i = 1; i <= 10; i++) {
    count += i;
  }

  console.log("printing sub result -for loop");
  console.log("sub ending function", count);
}

function calculateSum() {
  calculateSub();

  let count = 0;
  for (let i = 1; i <= 10; i++) {
    count += i;
  }

  console.log("printing result -for loop");
  console.log("ending program", count);
}
calculateSum();

//http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coInN0YXJ0aW5nIHByb2dyYW0iKTsKCmZ1bmN0aW9uIGNhbGN1bGF0ZVN1YigpIHsKICBsZXQgY291bnQgPSAwOwogIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHsKICAgIGNvdW50ICs9IGk7CiAgfQoKICBjb25zb2xlLmxvZygicHJpbnRpbmcgc3ViIHJlc3VsdCAtZm9yIGxvb3AiKTsKICBjb25zb2xlLmxvZygic3ViIGVuZGluZyBmdW5jdGlvbiIsIGNvdW50KTsKfQoKZnVuY3Rpb24gY2FsY3VsYXRlU3VtKCkgewogIGNhbGN1bGF0ZVN1YigpOwoKICBsZXQgY291bnQgPSAwOwogIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHsKICAgIGNvdW50ICs9IGk7CiAgfQoKICBjb25zb2xlLmxvZygicHJpbnRpbmcgcmVzdWx0IC1mb3IgbG9vcCIpOwogIGNvbnNvbGUubG9nKCJlbmRpbmcgcHJvZ3JhbSIsIGNvdW50KTsKfQpjYWxjdWxhdGVTdW0oKTsK!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
