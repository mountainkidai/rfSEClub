# Web Storage in HTML

Web Storage allows web applications to store data locally within the user's browser. It provides a simple key-value store and is widely used for saving user preferences, form inputs, login sessions, and more.

There are two types of Web Storage:

* **localStorage**: Stores data with no expiration date. Data persists even after the browser is closed and reopened.
* **sessionStorage**: Stores data for one session only. Data is cleared when the browser/tab is closed.

---

## Why Use Web Storage?

* Fast data access (no server request)
* Persistent across sessions (in the case of `localStorage`)
* Great for lightweight user preferences, themes, or session tracking

---

## Visual Overview

```txt
+---------------------+           +---------------------+
|    localStorage     |           |   sessionStorage    |
+---------------------+           +---------------------+
| key: "theme"        |           | key: "currentTab"   |
| value: "dark"       |           | value: "dashboard"  |
| Lifetime: Forever   |           | Lifetime: Session   |
+---------------------+           +---------------------+
```

---

## Basic Code Example

### HTML

```html
<button onclick="saveData()">Save</button>
<button onclick="loadData()">Load</button>
<div id="output"></div>
```

### JavaScript

```javascript
function saveData() {
  localStorage.setItem("username", "Alice");
  sessionStorage.setItem("token", "abc123");
}

function loadData() {
  const name = localStorage.getItem("username");
  const token = sessionStorage.getItem("token");
  document.getElementById("output").textContent =
    `Name: ${name}, Token: ${token}`;
}
```

### Explanation

* `localStorage.setItem(key, value)`: Saves a key-value pair in browser permanently.
* `sessionStorage.setItem(key, value)`: Saves a key-value pair for that session only.
* `getItem(key)`: Reads the stored value.
* `removeItem(key)`: Deletes a key.
* `clear()`: Clears all keys from that storage.

---

## Comparison Table

| Feature           | localStorage      | sessionStorage          |
| ----------------- | ----------------- | ----------------------- |
| Persistence       | Permanent         | Until browser/tab close |
| Accessible From   | Same origin only  | Same tab only           |
| Capacity (Approx) | \~5MB             | \~5MB                   |
| API               | Same API for both | Same API for both       |

---

## Use Cases

* Save user preferences like themes, font sizes (`localStorage`)
* Store temporary authentication tokens (`sessionStorage`)
* Keep tab-specific data during form filling or editing (`sessionStorage`)
* Avoid server calls for repeating small settings
