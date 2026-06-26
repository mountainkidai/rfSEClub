# HTTP Requests & Responses Explained Like You're Building a Real Product

> **Goal:** Understand HTTP from first principles instead of memorizing headers.

Most tutorials teach HTTP by listing dozens of headers.

That's the wrong approach.

HTTP is simply **two computers talking to each other.**

Imagine you're building **Wangdu**.

A browser wants to download your logo.

Everything that happens is just a conversation between the browser and your server.

---

# Every HTTP Message Has Three Parts

```
START LINE
HEADERS
BODY
```

Example request:

```http
GET /logo.png HTTP/1.1
Host: wangdu.org
Accept: image/png
```

Example response:

```http
HTTP/1.1 200 OK
Content-Type: image/png

(binary image)
```

---

# Request

A request is simply:

> "I want something."

```
GET /logo.png HTTP/1.1
```

Break it down:

```
GET
```

The action.

Examples:

- GET → Fetch data
- POST → Create something
- PUT → Replace something
- PATCH → Update part of something
- DELETE → Remove something

---

```
/logo.png
```

The resource.

---

```
HTTP/1.1
```

The protocol version.

---

# Response

The server replies:

```http
HTTP/1.1 200 OK
```

Break it down:

```
HTTP Version
Status Code
Status Message
```

Examples:

```
200 OK
```

Everything worked.

```
404 Not Found
```

Resource doesn't exist.

```
401 Unauthorized
```

Please login.

```
500 Internal Server Error
```

Something broke on the server.

---

# Headers

Headers are simply metadata.

Think of them as little notes attached to the request.

```
Key: Value
```

Example:

```http
Host: wangdu.org
Accept: image/png
User-Agent: Chrome
```

Nothing magical.

Just information.

---

# Important Request Headers

## Host

```
Host: wangdu.org
```

Meaning

> Which website are you asking for?

One server can host many websites.

The Host header tells the server which one you want.

---

## Accept

```
Accept: application/json
```

Meaning

> I understand JSON.

Examples:

```
Accept: text/html
Accept: image/png
Accept: */*
```

---

## Accept-Encoding

```
Accept-Encoding: gzip, br
```

Meaning

> I know how to decompress gzip and Brotli.

The browser is asking the server to compress the response before sending it.

---

## Authorization

```
Authorization: Bearer <token>
```

Meaning

> Here is my identity.

The server verifies the token.

---

## Cookie

```
Cookie: session=abc123
```

Meaning

> Here's the session you gave me earlier.

---

# Important Response Headers

## Content-Type

```
Content-Type: image/png
```

Meaning

> The body contains a PNG image.

Examples:

```
application/json
text/html
text/plain
image/png
application/pdf
```

---

## Content-Length

```
Content-Length: 4821
```

Meaning

> The body is exactly 4821 bytes.

---

# Content-Encoding

This is often confused with Transfer-Encoding.

They are completely different.

Content-Encoding answers:

> Can I make this file smaller?

Suppose your HTML page is

```
100 KB
```

Instead of sending

```
100 KB
```

the server compresses it into

```
24 KB
```

Then sends

```http
Content-Encoding: gzip
```

The browser automatically decompresses it.

Think of it like sending a ZIP file over the internet.

Compression reduces bandwidth.

---

# Transfer-Encoding

Transfer-Encoding answers a different question.

> Do I know the total size before sending?

Imagine ChatGPT generating an answer.

It doesn't know whether the answer will be

```
500 words
```

or

```
5000 words.
```

So it cannot send

```http
Content-Length: ?
```

Instead it sends

```http
Transfer-Encoding: chunked
```

Meaning

> I'll send the response piece by piece.

Example:

```
Chunk 1

Hello

Chunk 2

 there,

Chunk 3

 welcome!
```

The browser shows the text immediately.

Streaming APIs work this way.

---

# Caching

Imagine Wangdu has a logo.

```
logo.png
```

Every visitor downloads it.

Millions of downloads.

Huge bandwidth.

Can we avoid downloading it every time?

Yes.

That's what caching is for.

---

# Cache-Control

Suppose your logo rarely changes.

The server sends

```http
Cache-Control: max-age=3600
```

Meaning

> Keep this file for one hour.

The browser stores it locally.

For the next hour, it won't ask the server again.

This makes websites much faster.

---

# ETag

An ETag is simply a fingerprint.

Imagine your logo today.

```
logo.png
```

The server generates

```
abc123
```

It sends

```http
ETag: "abc123"
```

The browser stores:

- the image
- the fingerprint

---

# What Happens Later?

One hour later the browser needs the logo again.

Instead of downloading it immediately, it asks:

```http
GET /logo.png

If-None-Match: "abc123"
```

This header name confuses almost everyone.

Don't read it literally.

Instead translate it into English.

The browser is saying:

> I already have version **abc123**.

> Is it still the latest version?

That's all.

---

# How Does The Server Know?

The server reads

```
logo.png
```

Then generates a new fingerprint.

If the file hasn't changed

```
Browser

abc123

Server

abc123
```

The server replies

```http
304 Not Modified
```

No image is sent.

The browser already has it.

---

Now suppose you upload a new logo.

The server generates

```
xyz789
```

Now

```
Browser

abc123

Server

xyz789
```

Different.

The server replies

```http
HTTP/1.1 200 OK

ETag: "xyz789"

(new image)
```

The browser replaces the old image.

---

# Where Does The ETag Come From?

The browser never generates it.

The server does.

Usually in one of three ways.

## Option 1

Hash the file.

```
logo.png

↓

SHA-256

↓

abc123
```

Different file

↓

Different hash.

---

## Option 2

Use

- file size
- last modified timestamp

Many web servers do this because it's much faster than hashing large files.

---

## Option 3

Generate version numbers manually.

```
v1

v2

v3
```

---

# Why Is The Name "If-None-Match" So Confusing?

The header was designed to support multiple ETags.

Example:

```http
If-None-Match: "abc123", "xyz789", "v17"
```

Meaning

> If none of these versions match the current resource,
> send me the latest one.

For everyday development we usually send only one ETag.

That's why the name feels confusing.

A much better mental model is:

```
If-None-Match

↓

I already have version abc123.
```

Forget the actual words.

Remember the intention.

---

# Connection

Opening a TCP connection is expensive.

Suppose a webpage loads

- HTML
- CSS
- JavaScript
- 20 images

Without keep-alive

```
Open TCP

↓

Download HTML

↓

Close

↓

Open TCP

↓

Download CSS

↓

Close

↓

Repeat...
```

Very slow.

With

```http
Connection: keep-alive
```

```
Open TCP once

↓

Download everything

↓

Close
```

Much faster.

---

# Range

Suppose someone downloads a

```
2 GB
```

video.

Internet disconnects halfway.

Without Range

The browser downloads the entire 2 GB again.

With

```http
Range: bytes=1000000000-
```

The browser says

> Start sending from byte 1,000,000,000.

Only the remaining part is downloaded.

This is also how YouTube lets you jump to the middle of a video instantly.

---

# Complete Flow

First request

```
Browser

↓

GET /logo.png

↓

Server

↓

200 OK
ETag: abc123

↓

Browser stores

Image

+

ETag abc123
```

Later

```
Browser

↓

GET /logo.png

If-None-Match: abc123

↓

Server

↓

Current version?

↓

abc123

↓

304 Not Modified
```

No image is transferred.

If the logo changes

```
Browser

↓

If-None-Match: abc123

↓

Server

↓

Current version

↓

xyz789

↓

200 OK

(new image)

↓

Browser replaces old version.
```

---

# Mental Models

Instead of memorizing headers, remember the questions they answer.

| Header            | Question                                     |
| ----------------- | -------------------------------------------- |
| Host              | Which website?                               |
| Accept            | What formats can I understand?               |
| Accept-Encoding   | Can you compress it first?                   |
| Authorization     | Who am I?                                    |
| Cookie            | Here's my previous session.                  |
| Content-Type      | What kind of data is this?                   |
| Content-Length    | How large is the body?                       |
| Content-Encoding  | Can the body be compressed?                  |
| Transfer-Encoding | Should the body be streamed in chunks?       |
| Cache-Control     | How long may I reuse this?                   |
| ETag              | What's the fingerprint of this version?      |
| If-None-Match     | I already have this version. Has it changed? |
| Connection        | Should we reuse this TCP connection?         |
| Range             | Send only this part of the file.             |

---

# Final Thought

Elite engineers don't memorize HTTP headers.

They understand the problems each header solves.

Every HTTP header exists because someone, somewhere, had a performance problem, a security problem, or a scalability problem.

When you understand **the problem first**, the header becomes obvious.
