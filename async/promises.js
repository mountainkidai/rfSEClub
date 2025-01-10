//explaining callback, callback hell, promises, async await
// callback - function passed as an argument to another function
// callback hell - multiple nested callbacks
// promises - object representing the eventual completion or failure of an async operation
// async await - syntactic sugar for promises
// example of callback

/* const fs = require("fs");
console.log("whatsapp group created,and adding friends");
fs.readFile("friends.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("File not found boy", err);
  } else {
    console.log(data);
    fs.writeFile("addedFriends.txt", data, (err) => {
      if (err) {
        console.log("there is no data to feed", err);
      } else {
        console.log("friends added");
        fs.readFile("addedFriends.txt", "utf-8", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
}); */

//example of promises
// tamanna asks for a cookie to bhanot
// bhanot promises to give a cookie to tamanna
// possibilities -
// 1. bhanot gives a cookie to tamanna - FULFILLED
// 2. bhanot doesn't have a cookie to give tamanna - REJECTED
//3. bhanot is still finding a cookie for tamanna - PENDING

// three states of promises
// 1. pending
// 2. fulfilled
// 3. rejected

// we use resolve and reject to handle the promises in the form of callbacks
//pending - initial state
// resolve -> pending -> fulfilled -> then
// reject - > pending -> rejected -> catch

//example of promise
/* const findCookie = (resolve, reject) => {
  let cookie = false;
  if (cookie) {
    resolve("cookie given to tamanna");
  } else {
    reject("cookie not found");
  }
};
const giveCookie = new Promise(findCookie);

giveCookie
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

// example of promises for file system
/* const fs = require("fs");
console.log("whatsapp group created,and adding friends");
fs.promises
  .readFile("friends.txt", "utf-8")
  .then((data) => {
    console.log(data);
    return fs.promises.writeFile("addedFriends.txt", data);
  })
  .then(() => {
    console.log("friends added");
    return fs.promises.readFile("adderiends.txt", "utf-8");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

// explaining promise states with web api - setTimeout

/* const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2 seconds are over");
  }, 2000);
});

myPromise
  .then((data) => {
    console.log(
      "[ PENDING ] → [resolve] → [ FULFILLED ] → .then() is executed",
      data
    );
  })
  .catch((err) => {
    console.log(
      "[ PENDING ] → [reject] → [ REJECTED ] → .catch() is executed",
      err
    );
  }); */

/* const filePromise = new Promise((resolve, reject) => {
  fs.readFile("frieszdfnds.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

filePromise
  .then((data) => {
    console.log("frieds recieved from friends.txt", data);
    return fs.promises.writeFile("addedFriends.txt", data);
  })
  .then(() => {
    console.log("friends added");
    return fs.promises.readFile("addedFriends.txt", "utf-8");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }); */

const fs = require("fs");
fs.promises
  .readFile("friends.txt", "utf-8")
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => {
    console.log("friends added", data);
  })
  .catch((err) => {
    console.log(err);
  });
