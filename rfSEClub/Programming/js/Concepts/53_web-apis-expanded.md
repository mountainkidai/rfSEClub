# Web APIs in JavaScript

JavaScript in the browser has access to a powerful set of built-in **Web APIs** provided by the browser environment. These APIs allow JavaScript to interact with browser features like storage, multimedia, hardware, and system capabilities.

---

## 1. `sessionStorage`

* Stores data for a **single session**.
* Data is cleared when the page/tab is closed.

```js
sessionStorage.setItem("name", "Ravi");
console.log(sessionStorage.getItem("name")); // Ravi
sessionStorage.removeItem("name");
```

* Stores small string values (key-value pairs)
* Good for temporary data like form inputs

---

## 2. `IndexedDB`

* A **low-level API** for storing large amounts of structured data (objects, files, blobs)
* Works asynchronously, supports transactions

```js
let request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = function(event) {
  let db = event.target.result;
  db.createObjectStore("users", { keyPath: "id" });
};

request.onsuccess = function(event) {
  let db = event.target.result;
  let tx = db.transaction("users", "readwrite");
  let store = tx.objectStore("users");
  store.add({ id: 1, name: "Anjali" });
};
```

* Use for large offline data
* Replaces localStorage when you need indexing, search, or object storage

---

## 3. Geolocation API

* Allows browser to access **device location** (GPS, WiFi, etc)

```js
navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude, position.coords.longitude);
});
```

* Asks for user permission
* Useful for maps, local content, and nearby services

---

## 4. Canvas API

* Used for **drawing graphics** (shapes, images, games) in HTML5

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(10, 10, 150, 75);
</script>
```

* Provides 2D and WebGL (3D) drawing context
* Used in games, visualizations, and editing tools

---

## 5. Web Workers

* Lets you run JavaScript in a **background thread**
* Helps avoid freezing the UI on heavy tasks

### **main.js**

```js
const worker = new Worker("worker.js");
worker.postMessage("Start");
worker.onmessage = (e) => {
  console.log("From Worker:", e.data);
};
```

### **worker.js**

```js
onmessage = function(e) {
  let result = 0;
  for (let i = 0; i < 1e8; i++) result += i;
  postMessage(result);
};
```

* Useful for calculations, file handling, large loops

---

## 6. Intersection Observer

* Detects when an element enters or exits the **viewport**
* Used in lazy loading, animations, infinite scroll

```js
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Visible:", entry.target);
    }
  });
});

observer.observe(document.querySelector(".box"));
```

---

## 7. Clipboard API

* Interact with system clipboard (copy, paste)

```js
navigator.clipboard.writeText("Copied to clipboard!").then(() => {
  console.log("Copied!");
});
```

* Requires HTTPS and user interaction (e.g., button click)
* Great for copy buttons, clipboard utilities

---

## Summary Table

| API                    | Purpose                        | Common Use Case                 |
| ---------------------- | ------------------------------ | ------------------------------- |
| `sessionStorage`       | Temp storage during session    | Forms, auth tokens              |
| `IndexedDB`            | Persistent, structured storage | Offline apps, large data        |
| `Geolocation`          | Access device location         | Maps, location-based services   |
| `Canvas`               | 2D/3D Graphics                 | Games, charts, drawings         |
| `Web Workers`          | Background thread              | Heavy computation               |
| `IntersectionObserver` | Detect visibility              | Lazy loading, effects on scroll |
| `Clipboard API`        | Copy/paste via clipboard       | Copy buttons, paste utilities   |

## Problems
