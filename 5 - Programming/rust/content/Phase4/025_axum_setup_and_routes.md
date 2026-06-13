## Network Protocols

### TCP (Transmission Control Protocol)

When: Early 1970s

What: A protocol ensuring reliable, ordered, and error-checked delivery of data between devices over a network.

Simple: Like a phone call where both ends confirm messages so nothing is lost or out of order.

Use: Forms the base for most internet communications (HTTP, SMTP, FTP).

### UDP (User Datagram Protocol)

When: Early 1980s

What: A lightweight, connectionless protocol for sending packets without guarantees.

Simple: Like sending letters in the mail without expecting confirmation of receipt.

Use: Useful when speed matters more than reliability, e.g., live video, gaming.

### TLS (Transport Layer Security)

When: Late 1990s (originally SSL in mid-1990s)

What: Security protocol that encrypts TCP communication to ensure privacy and authenticity.

Simple: Like locking phone conversations so only the receiver can understand.

Use: Secure web browsing (HTTPS), secure APIs.

### HTTP (Hypertext Transfer Protocol)

When: Early 1990s

What: The protocol for transmitting web content, built on top of TCP.

Simple: A set of rules for web browsers and servers to exchange webpages.

Use: Basis of the web, REST APIs.

### WebSocket

When: 2011

What: A protocol that upgrades HTTP connections to a persistent, bidirectional communication channel.

Simple: Like a direct phone line that stays open for both sides to talk any time.

Use: Real-time apps like chat, live data feeds.

### Summary Chronology

TCP: Reliable network communication foundation.

UDP: Lightweight network communication for speed.

TLS: Secured communication via encryption.

HTTP: Structured communication for the web.

WebSocket: Real-time, low-latency two-way communication.

```rust
mod db;
use axum::{routing::get};
use axum::Router;

#[tokio::main]
async fn main() {
let app = Router::new()
.route("/", get(|| async {"Hello Koel"}))
.route("/health",get(|| async {"PERFECT"}))
;
    let listener = tokio::net::TcpListener::bind("0.0.0.0:4000").await.unwrap();
axum::serve(listener,app).await.unwrap();

}


## Problems

1. Create an Axum router with a single route "/" that returns "Hello, World!" and run the server
2. Create an Axum router with two routes: "/" returning "Home" and "/about" returning "About page"
3. Create an async handler function that returns a string, add it as a route handler, and test it
4. Create an Axum server that listens on port 3000 with a route "/health" that returns "OK"
5. Create an Axum router with a route "/greet/:name" that takes a path parameter and returns a personalized greeting


