# Async/Await in JavaScript

Async/await is a modern way to write asynchronous code that is easier to read and understand. It is built on top of Promises and allows you to write async code that looks like regular synchronous code — this means you write it step-by-step in order, just like normal code, but it still runs non-blocking (it doesn’t freeze the page).

* `async` is a keyword placed **before a function** to turn it into an asynchronous function. This means the function will always return a **Promise**, even if the return value is just a string or number.
* `await` is used **inside** an `async` function to tell JavaScript to **wait for a Promise to finish** before moving to the next line.

In simple words: `await` pauses the function at that line until the result is ready.

Imagine you go to a shop and ask the worker to make you a chai (tea). You say:

1. “I’ll wait here until the chai is ready” – that’s like using `await`.
2. Once the chai is done, you continue to the next step – drink or leave.

This waiting happens only **inside the async function** — the rest of your code outside can still run.

---

## 1. Basic Syntax

```js
async function getData() {
  const result = await fetch("https://api.example.com/data"); // wait for fetch
  const data = await result.json(); // wait for JSON conversion
  console.log(data); // print the final data
}

getData();
```

* `fetch()` is a built-in function that gets data from a URL. It returns a Promise.
* `await fetch(...)` tells JavaScript: "wait here until we get the result"
* `result.json()` also returns a Promise, so we `await` that too.
* Finally, we log the parsed data.

This is much easier than writing:

```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

---

## 2. async Functions Always Return a Promise

```js
async function greet() {
  return "Hello!"; // This gets wrapped inside a Promise
}

greet().then((msg) => console.log(msg));
```

### Output

```txt
Hello!
```

Even though the `greet` function only returns a string, because it’s marked `async`, it **automatically** returns a Promise that resolves with "Hello!".

---

## 3. Error Handling with try...catch

```js
async function getUserData() {
  try {
    const res = await fetch("https://api.example.com/user");
    const data = await res.json();
    console.log("User:", data);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

getUserData();
```

* If the network request fails or the response is invalid, `fetch()` or `res.json()` may throw an error.
* We use `try...catch` to catch those errors — just like we would for normal code.
* This is **cleaner** and **more readable** than using `.catch()`.

---

## 4. Sequential vs. Parallel Async Code

### Sequential (wait one-by-one)

```js
async function loadData() {
  const users = await fetch("/api/users"); // wait for users
  const posts = await fetch("/api/posts"); // wait after users finish

  const userData = await users.json();
  const postData = await posts.json();

  console.log(userData, postData);
}
```

* This approach waits for the first fetch (users), then starts the second one (posts).
* This can be slower if both requests are independent.

### Parallel (run together)

```js
async function loadInParallel() {
  const [usersRes, postsRes] = await Promise.all([
    fetch("/api/users"),
    fetch("/api/posts")
  ]);

  const users = await usersRes.json();
  const posts = await postsRes.json();

  console.log(users, posts);
}
```

* `Promise.all([...])` starts both requests at the same time.
* `await` pauses until **both** are complete.
* Much **faster** when tasks don’t depend on each other.

## Problems
