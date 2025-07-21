# Progressive Web Apps (PWA)

Progressive Web Apps (PWAs) are web applications that behave like native mobile apps. They are built using web technologies like HTML, CSS, and JavaScript — but they feel like real apps on your phone or computer.

Imagine saving a website to your home screen and using it offline — that’s the power of PWAs.

---

## What Makes a Web App "Progressive"?

A PWA uses modern web APIs to:

* Work offline
* Be installed like an app
* Load fast and reliably
* Send push notifications (optional)

All of this is possible with two main ingredients:

1. **Web App Manifest**
2. **Service Worker**

---

## 1. Web App Manifest

This is a simple JSON file that tells the browser about your app — how it should appear when installed.

### Sample manifest file (`manifest.json`)

```json
{
  "name": "My Cool App",
  "short_name": "CoolApp",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3367D6",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Add to your HTML

```html
<link rel="manifest" href="manifest.json">
```

### Explanation

* `name` and `short_name`: How your app shows up on the home screen.
* `start_url`: Which page to open when app launches.
* `display`: Makes it feel like a native app (`standalone` = no browser UI).
* `icons`: App icons for different screen sizes.

---

## 2. Service Worker

A **Service Worker** is a JavaScript file that runs in the background.
It lets your app work **offline**, cache files, and show custom error pages.

### Registering a service worker (in your main JS file)

```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('ServiceWorker registration failed:', error);
      });
  });
}
```

### Basic `service-worker.js` example

```javascript
self.addEventListener('install', event => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => new Response('Offline fallback message'))
  );
});
```

### What this does

* Registers a service worker that intercepts network requests.
* If you're offline, it shows a fallback message.

---

## Summary

| Feature                 | Purpose                          |
| ----------------------- | -------------------------------- |
| Manifest File           | Tells browser how to install app |
| `<link rel="manifest">` | Links manifest to HTML           |
| Service Worker          | Powers offline + background work |
| `register()`            | Connects service worker to app   |

PWAs are a powerful way to make your website feel like a real app — fast, installable, and offline-capable 🚀
