# Service Workers in JavaScript

## 1. What is a Service Worker?

A **Service Worker** is a script that runs in the background, separate from your web page. It doesn't have access to the DOM but can intercept and handle network requests, cache assets, and enable offline experiences.

---

## 2. Lifecycle of a Service Worker

The lifecycle includes these three phases:

### 1. `install`

* Triggered when the service worker is first registered.
* Used to cache static assets.

```js
self.addEventListener("install", event => {
  console.log("Service Worker: Installed");
  event.waitUntil(
    caches.open("v1").then(cache => {
      return cache.addAll(["/", "/index.html", "/styles.css"]);
    })
  );
});
```

### 2. `activate`

* Runs after the installation.
* Used to clean up old caches.

```js
self.addEventListener("activate", event => {
  console.log("Service Worker: Activated");
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== "v1") {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
```

### 3. `fetch`

* Intercepts every network request.
* Can return cached response or fetch from network.

```js
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```

---

## 3. Registering a Service Worker

In your main JavaScript file (e.g., `app.js`):

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(reg => console.log("Service Worker Registered", reg))
    .catch(err => console.log("Service Worker Registration Failed", err));
}
```

---

## 4. Push Notifications

Service Workers can listen for `push` events to show notifications:

```js
self.addEventListener("push", event => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "/icon.png"
  });
});
```

---

## Summary

* **Service Worker**: Background script acting as a proxy
* **Lifecycle Events**: `install`, `activate`, `fetch`
* **Main Uses**: Offline caching, background sync, push notifications
* **Code Concepts**:

  * `caches`: Web API for storing resources
  * `event.waitUntil()`: Extends lifecycle event until async operations finish
  * `event.respondWith()`: Provides a custom response to network requests
