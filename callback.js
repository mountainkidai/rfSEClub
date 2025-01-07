// function passing variables to a function
const add = function (a, b) {
  return a + b;
};

let result = add(2, 3); // Output: 5
console.log(result);

// function passing array

const pushElement = function (recieved_array, element) {
  recieved_array.push(element);
  console.log("After:", recieved_array);
};
const arr = [1, 2, 3, 4, 5];
console.log("Before:", arr);
pushElement(arr, 6);

// function passing object
const updatePassword = function (user, newpassword) {
  user.password = newpassword;
};
const bhanot_insta_details = {
  name: "John",
  age: 25,
  password: "ilovejs",
  followers_count: 200,
  followers: ["ram", "shyam", "mohan"],
  following_count: 300,
  following: ["ram", "shyam"],
};
console.log("Before chaning the password:", bhanot_insta_details);
updatePassword(bhanot_insta_details, "dharamshala");
console.log("After chaning the password:", bhanot_insta_details);
