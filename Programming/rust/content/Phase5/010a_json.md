#### first lets understand JSON

# Simple JSON Data Flow

**1. Client Creates Data**
Your Phunsuk app makes a JavaScript object:

```javascript
const booking = { hotel: "Shimla Grand", guests: 2 };
```

**2. Client Converts → Sends**

```javascript
JSON.stringify(booking); // → '{"hotel":"Shimla Grand","guests":2}'
```

String travels over network to server.

**3. Server Receives → Converts**
Server gets string, parses it:

```javascript
JSON.parse(string); // → { hotel: "Shimla Grand", guests: 2 }
```

Server processes (saves to database, etc.).

**4. Server Responds → Converts**
Server creates response object, converts:

```javascript
JSON.stringify(response); // → '{"bookingId": "BK123"}'
```

**5. Client Receives → Uses**
Client gets string, parses it:

```javascript
JSON.parse(string); // → { bookingId: "BK123" }
```

Now usable in your UI: `data.bookingId`.

```
JS Object → stringify() → JSON String → Network → JSON String → parse() → JS Object
```

```js
{ "name": "John", "age": 30, "city": "Shimla" }
This syntax is human-readable and language-agnostic (works in JS, Rust, Python).
```

#### JSON String (Serialized)

A JSON string is that same data converted to a text string for network transmission:

```javascript
const jsonString = '{"name":"John","age":30,"city":"Shimla"}';
Notice the single quotes
```

| Aspect  | JSON                    | JSON String                   |
| ------- | ----------------------- | ----------------------------- |
| Type    | Data format/syntax      | Text string data type         |
| Usage   | Writing APIs, configs   | Network transmission, storage |
| Example | {name: "John"}          | '{"name":"John"}'             |
| Access  | obj.name (object)       | Needs JSON.parse() first      |
| Network | ❌ Cannot send directly | ✅ Only format that travels   |

#### Note

- No, JavaScript objects and JSON format are not exactly the same, though they look very similar and JSON was designed based on JavaScript object syntax.

#### JS Object

```js
const user = {
  name: "John", // No quotes needed on keys
  age: 30,
  greet() {
    // Can have FUNCTIONS
    return "Hello!";
  },
};
console.log(user.name); // Direct access
user.age = 31; // Can modify
```

#### JSON Format

A text-based blueprint for data exchange—strict rules, no functions:

```json
{
  "name": "John", // Keys MUST be quoted
  "age": 30
}
```

| Feature   | JavaScript Object              | JSON Format         |
| --------- | ------------------------------ | ------------------- |
| Keys      | name: "John" OR "name": "John" | "name": "John" only |
| Functions | ✅ greet() { ... }             | ❌ No functions     |
| Comments  | ✅ // comments ok              | ❌ No comments      |
| Usage     | App logic: user.greet()        | API transmission    |

## JSON Client-Server Flow

## 1. Client → Server (Request)

**Client starts with JavaScript object:**

```javascript
const bookingData = {
  userId: 123,
  hotelId: "shimla-grand",
  checkIn: "2026-02-10",
  guests: 2,
};
```

**Client converts to JSON string:**

```javascript
const jsonString = JSON.stringify(bookingData);
// '{"userId":123,"hotelId":"shimla-grand","checkIn":"2026-02-10","guests":2}'
```

**Sends via HTTP (fetch/axios):**

```javascript
fetch("/api/bookings", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: jsonString, // Only strings travel over network
});
```

## 2. Server Processing

**Server receives JSON string → parses to object:**

```javascript
// Rust/Axum or Node.js - server gets raw string
const rawBody = '{"userId":123,"hotelId":"shimla-grand",...}';
const bookingObj = JSON.parse(rawBody); // Back to object
// Now server can access: bookingObj.userId, bookingObj.hotelId
```

## 3. Server → Client (Response)

**Server creates response object → stringifies:**

```javascript
const responseData = {
  success: true,
  bookingId: "BK789",
  total: 4500,
};
const responseJson = JSON.stringify(responseData); // String again
// Sends back as HTTP response body
```

## 4. Client Receives

**Client gets JSON string → parses:**

```javascript
fetch("/api/bookings")
  .then((res) => res.json()) // Automatically does JSON.parse()
  .then((data) => {
    console.log(data.bookingId); // "BK789" - usable object again
  });
```

## Why JSON Strings Only?

```
Network (HTTP)     → Only bytes/text travel
↓
JavaScript Object  → JSON.stringify() → JSON String → Network → JSON String → JSON.parse() → JavaScript Object
{Phunsuk booking}    '{"userId":123}'                    '{"bookingId":"BK789"}'           {success: true}
```

**Key Point**: HTTP/HTTPS transmits **text only**. JSON is the universal text format all servers (Rust, Node, Python) and clients (browsers, React/Next.js) understand. Objects never cross the wire directly.
