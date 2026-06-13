## APIs and Client-Server Basics – What APIs are and why client-server separation matters.

APIs enable software applications to communicate, acting as intermediaries between a client (like a web browser or mobile app) and a server (holding data or logic).

Client-server independence boosts scalability because servers remain stateless—meaning they don't store any memory of previous interactions with a specific client between requests. This allows a single server (or cluster of servers) to handle incoming requests from any client type interchangeably, whether it's a web browser, mobile app, desktop program, or even IoT device, without needing to track or differentiate based on "who" sent the prior request.

### Why No Session State Enables Scalability

Every request is self-contained. Include all context upfront (e.g., JWT token in header proving "I'm logged in as User A, viewing page 2"). Server processes, responds, forgets.

### Scaling example: Netflix has 200M+ users. Stateless servers mean:

Request 1 from your phone → Server A authenticates via token, streams movie.

Request 2 from your TV app → Server Z (never saw you before) authenticates same token, continues seamlessly.

Add Server Q for traffic spike → No session migration needed; it handles new requests identically.

### Parallel Development in Practice

Team separation:

Frontend team builds React/Next.js app using fake JSON mocks: {"user": {"name": "Bob"}}. No live server required.

Backend team builds database + API endpoints, tests with Postman/curl sending same JSON structure.
