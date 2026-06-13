# Geolocation API in HTML and JavaScript

The Geolocation API allows web applications to access the geographical location (latitude and longitude) of the user. It works using GPS, Wi-Fi, or IP-based location detection.

---

## Accessing User Location

There is no `<input type="geolocation">` in HTML. Instead, the **Geolocation API is accessed through JavaScript** using `navigator.geolocation`.

### Basic JavaScript Example

```html
<button onclick="getLocation()">Get My Location</button>
<p id="output"></p>

<script>
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.getElementById("output").innerText = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("output").innerText = `Latitude: ${lat}, Longitude: ${lon}`;
  }

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
</script>
```

---

## Explanation of Code

* **`navigator.geolocation.getCurrentPosition()`**: Initiates the request to get the current location.
* **`showPosition()`**: This callback function receives the `position` object which contains `coords.latitude` and `coords.longitude`.
* **`showError()`**: Handles possible errors such as user denial, unavailability, timeout, or unknown issues.
* **`output`**: Displays the result inside a paragraph element.

---

## Security Considerations

* Geolocation access **requires HTTPS** on most browsers.
* The user is always **prompted for permission**.

---

## Real-World Use Cases

* Maps and navigation (Google Maps integration)
* Finding nearby services (restaurants, stores)
* Weather apps showing location-based forecast
* Check-ins and geotagging for social apps

---

## Summary Table

| Feature/Method                       | Description                                 |
| ------------------------------------ | ------------------------------------------- |
| `navigator.geolocation`              | Main object to access geolocation functions |
| `getCurrentPosition(success, error)` | Retrieves user's current position           |
| `position.coords.latitude`           | Latitude value from user location           |
| `position.coords.longitude`          | Longitude value from user location          |
| `PERMISSION_DENIED`                  | User blocked the location access            |
| `POSITION_UNAVAILABLE`               | Device can't determine location             |
| `TIMEOUT`                            | Took too long to get position               |
