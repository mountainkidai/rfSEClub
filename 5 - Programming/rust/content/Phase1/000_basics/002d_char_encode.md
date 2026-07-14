- ASCII — Simple Character Encoding
  ASCII encodes 128 characters (letters, digits, symbols) using 7 bits.
- Each character mapped to one byte (8 bits, with most significant bit unused).

Example: Letter 'A' is represented as 65 in decimal or 01000001 in binary.

```text
Char  |  Decimal  |  Binary
------+-----------+----------
A     |  65       |  01000001
B     |  66       |  01000010
```

Limit: ASCII cannot represent symbols or letters beyond English.

2.UTF-8 — Modern Universal Encoding
   UTF-8 encodes all Unicode characters (think: every language and symbol).

Uses 1 to 4 bytes per character:

ASCII characters use 1 byte (compatible with ASCII).

More complex characters use multiple bytes.

```text
Example:
'A' = 1 byte: same as ASCII

'€' (Euro sign) = 3 bytes: 11100010 10000010 10101100
```

## Problems

1. Create a variable `letter` of type `char` with value 'A' and print it
2. Create a variable `unicode_char` with a Unicode character like 'Ω' or '🚀' and print it
3. Print the ASCII decimal value of the character 'B' (hint: use `as u8`)
4. Create three char variables 'R', 'u', 's', 't' and print them together
5. Create a char variable with a non-ASCII character and print both the character and its byte representation
