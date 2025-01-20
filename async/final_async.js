/*
callback
callback hell
promises
async await
previous assignment questions on async await
*/

//callback - function sending another function as an argument

/* function showData(err, data) {
  if (err) {
    console.log("File not found");
  } else {
    console.log("data in the file is", data);
  }
}

const fs = require("fs");
fs.readFile("data.txt", "utf-8", showData);
 */

// replace seperate callback function with anonymous callback function

/* const fs = require("fs");
fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("File not found");
  } else {
    console.log("data in the file is", data);
  }
});
 */

// callback hell
/* const fs = require("fs");
fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("File not found");
  } else {
    console.log("data in the file is", data);
    fs.writeFile("newFile.txt", "Hey Evening", (err) => {
      if (err) {
        console.log("File not found");
      } else {
        console.log("file written to newFile.txt");
        fs.readFile("newFildfsdfe.txt", "utf-8", (err, data) => {
          if (err) {
            console.log("File not found");
          } else {
            console.log("data in the file is", data);
          }
        });
      }
    });
  }
}); */

// promise to read one single file
/* const fs = require("fs");
function showDataPromise(resolve, reject) {
  fs.readFile("data1.txt", "utf-8", (err, data) => {
    if (err) {
      reject("PROMISE REJECTED  : File not found");
    } else {
      resolve("PROMISE RESOLVED" + data);
    }
  });
}

function showDataPromise2(resolve, reject) {
  fs.readFile("friends.txt", "utf-8", (err, data) => {
    if (err) {
      reject("PROMISE REJECTED  : File not found");
    } else {
      resolve("PROMISE RESOLVED" + data);
    }
  });
}
const myFilePromise = new Promise(showDataPromise2);
myFilePromise
  .then((promiseResponse) => {
    console.log(promiseResponse);
  })
  .catch((err) => {
    console.log(err);
  });

const myFile2Promise = new Promise(showDataPromise);
myFile2Promise
  .then((promiseResponse) => {
    console.log(promiseResponse);
  })
  .catch((err) => {
    console.log(err);
  });
 */

// promise to read multiple files
/* const fs = require("fs");
const readFileData = (filePath) => {
  return new Promise((resolve, reject) =>
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject("PROMISE REJECTED  : File not found");
      } else {
        resolve("PROMISE RESOLVED " + data);
      }
    })
  );
};

const writeFileData = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, "Hey this is monday", (err) => {
      if (err) {
        reject("File not found");
      } else {
        resolve("file written to newFile.txt");
      }
    });
  });
};

readFileData("data.txt")
  .then((data) => {
    console.log("data in the file is", data);
    return writeFileData("monday.txt");
  })
  .then((writeResponse) => {
    console.log("STATUS OF WRITING NEW FILE", writeResponse);
    return readFileData("monday.txt");
  })
  .then((data) => {
    console.log("data from monday file is", data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

// async await - easy way to write promises

const fs = require("fs");
const readFileData = (filePath) => {
  return new Promise((resolve, reject) =>
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject("PROMISE REJECTED  : File not found");
      } else {
        resolve("PROMISE RESOLVED " + data);
      }
    })
  );
};

const writeFileData = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, "Hey this is monday", (err) => {
      if (err) {
        reject("File not found");
      } else {
        resolve("file written to newFile.txt");
      }
    });
  });
};

//awaiting = waiting for
// I am waiting for bus
// I am awaiting bus

async function handleData() {
  const data = await readFileData("data.txt");
  console.log("data in the file data.txt is", data);
  const writeResponse = await writeFileData("monday.txt");
  console.log("file written response is", writeResponse);
  const mondayFileData = await readFileData("monday.txt");
  console.log("data in the file monday.txt is", mondayFileData);
}
handleData();
console.log("END OF THE PROGRAM");
