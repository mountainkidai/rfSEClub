# Phase 0.2 — Binary Numbers

## Introduction

In the previous chapter, we learned that computers store information using bits.

A bit can only have two values:

text 0 1

This raises an important question:

> If computers only understand 0 and 1, how can they represent numbers like 5, 42, 1000, or 1,000,000?

The answer is binary numbers.

Binary is the language of numbers that computers use internally.

Understanding binary is one of the most important foundational concepts in computer science because everything—from memory addresses to images, videos, networking packets, and CPU instructions—is ultimately represented using binary.

---

# What Is A Number System?

Humans use the decimal number system.

For example:

text 0 1 2 3 4 5 6 7 8 9 10 11 12 ...

This system uses ten symbols:

text 0 1 2 3 4 5 6 7 8 9

Because it uses ten symbols, it is called:

> Base 10

or

> Decimal

Computers use a different number system.

Instead of ten symbols, computers use only two:

text 0 1

This system is called:

> Base 2

or

> Binary

---

# Why Humans Use Base 10

Humans likely developed decimal because we have ten fingers.

You can count:

text 1 finger 2 fingers 3 fingers ... 10 fingers

Decimal is convenient for humans.

There is nothing special about it mathematically.

It is simply a counting system.

---

# Why Computers Use Base 2

Computers are electronic machines.

Electronic circuits naturally produce two reliable states:

text Low Voltage High Voltage

or

text Off On

Represented as:

text 0 1

Because hardware naturally operates using two states, binary becomes the most reliable number system.

---

# Understanding Place Values

To understand binary, we must first understand how decimal works.

Consider:

text 572

Most people know this means:

text 5 hundreds 7 tens 2 ones

Expanded:

text (5 × 100) + (7 × 10) + (2 × 1)

Which equals:

text 500 + 70 + 2 = 572

The place values in decimal are powers of ten:

| Position | Value      |
| -------- | ---------- |
| 1st      | 10⁰ = 1    |
| 2nd      | 10¹ = 10   |
| 3rd      | 10² = 100  |
| 4th      | 10³ = 1000 |

---

# Binary Uses Powers Of Two

Binary works exactly the same way.

The only difference is that place values are powers of two.

| Position | Value    |
| -------- | -------- |
| 1st      | 2⁰ = 1   |
| 2nd      | 2¹ = 2   |
| 3rd      | 2² = 4   |
| 4th      | 2³ = 8   |
| 5th      | 2⁴ = 16  |
| 6th      | 2⁵ = 32  |
| 7th      | 2⁶ = 64  |
| 8th      | 2⁷ = 128 |

Notice:

text 1 2 4 8 16 32 64 128

Every position doubles.

---

# Reading A Binary Number

Consider:

text 1011

Using place values:

| Bit | Value |
| --- | ----- |
| 1   | 8     |
| 0   | 4     |
| 1   | 2     |
| 1   | 1     |

Multiply and add:

text (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1)

Equals:

text 8 + 0 + 2 + 1 = 11

Therefore:

text 1011₂ = 11₁₀

(Binary 1011 equals Decimal 11)

---

# Example: Binary To Decimal

Convert:

text 1101

Place values:

| Bit | Value |
| --- | ----- |
| 1   | 8     |
| 1   | 4     |
| 0   | 2     |
| 1   | 1     |

Calculation:

text 8 + 4 + 0 + 1 = 13

Result:

text 1101₂ = 13₁₀

---

# Example: Decimal To Binary

Convert:

text 13

Find the largest power of two less than or equal to 13.

text 8

Subtract:

text 13 - 8 = 5

Next power:

text 4

Subtract:

text 5 - 4 = 1

Next power:

text 2

Cannot use it.

So place:

text 0

Next power:

text 1

Subtract:

text 1 - 1 = 0

Result:

text 1101

Therefore:

text 13₁₀ = 1101₂

---

# Counting In Binary

Decimal counting:

text 0 1 2 3 4 5 6 7 8 9 10

Binary counting:

text 0 1 10 11 100 101 110 111 1000 1001 1010

Notice:

After:

text 1

there is no digit:

text 2

because binary only has:

text 0 and 1

---

# What Is A Byte?

A single bit is useful but very limited.

Computers group bits together.

The most common grouping is:

text 8 bits

called:

> One Byte

Example:

text 10101100

This is one byte.

---

# How Many Values Can A Byte Store?

Each bit has two possibilities:

text 0 1

Eight bits:

text 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2

Which equals:

text 2⁸ = 256

A byte can store:

text 0 → 255

which is:

text 256 unique values

---

# Why Bytes Matter

Almost everything in computing is measured in bytes.

Examples:

| Unit   | Size       |
| ------ | ---------- |
| 1 Byte | 8 bits     |
| 1 KB   | 1024 bytes |
| 1 MB   | 1024 KB    |
| 1 GB   | 1024 MB    |
| 1 TB   | 1024 GB    |

When someone says:

text 16 GB RAM

they mean:

text 16 billion+ bytes of storage

---

# Representing Text With Binary

Computers store letters as numbers.

Example:

text A

ASCII assigns:

text 65

Decimal 65 becomes binary:

text 01000001

Therefore:

text A = 65 = 01000001

The computer never stores "A".

It stores bits.

---

# Representing Images With Binary

Suppose a pixel is:

text Red = 255 Green = 0 Blue = 0

Pure red.

Internally:

text 255 = 11111111

text 0 = 00000000

Stored as:

text 11111111 00000000 00000000

Even images eventually become binary numbers.

---

# Representing Instructions With Binary

CPU instructions are also numbers.

Example:

text ADD MOV JUMP LOAD STORE

Each instruction is encoded as binary.

The CPU reads binary patterns and interprets them as actions.

Programs themselves are just binary numbers.

---

# Binary And Physical Hardware

At the hardware level:

text 1

might mean:

text 5 volts

and:

text 0

might mean:

text 0 volts

The CPU continuously reads billions of these states every second.

Everything eventually reduces to electrical signals.

---

# First Principles Summary

Binary is not a computer invention.

Binary is simply a number system based on powers of two.

Humans use:

text Base 10

Computers use:

text Base 2

because electronic hardware naturally operates with two stable states.

Every piece of information inside a computer eventually becomes binary.

---

# Key Takeaways

- Binary uses only two digits:
  - 0
  - 1
- Binary is a Base 2 number system.
- Each position represents a power of two.
- Computers use binary because hardware naturally supports two states.
- A bit is one binary digit.
- Eight bits make one byte.
- A byte can represent 256 unique values.
- Text, images, videos, memory addresses, and programs all become binary.
- Binary is the foundation of modern computing.

---

# Mental Model

Whenever you see:

`Text` `Image` `Video` `Database` `Program`

Mentally translate it into:

`Numbers`

Then translate those numbers into:

`Binary`

Then translate binary into:

`Physical electrical states`

## That is how a computer sees the world.

# Check Your Understanding

1. Why do computers use binary instead of decimal?
2. What does Base 2 mean?
3. Convert binary 1010 to decimal.
4. Convert decimal 13 to binary.
5. How many values can one byte store?
6. How does a computer store the letter A?
7. Are programs fundamentally different from numbers?

If you understand this chapter, you now understand the language every computer speaks.

---

# ASCII Character Chart

| Dec | Hex | Name                 | Char | Ctrl-Char |
| --- | --- | -------------------- | ---- | --------- |
| 0   | 00  | Null                 | NUL  | CTRL-@    |
| 1   | 01  | Start of heading     | SOH  | CTRL-A    |
| 2   | 02  | Start of text        | STX  | CTRL-B    |
| 3   | 03  | End of text          | ETX  | CTRL-C    |
| 4   | 04  | End of transmission  | EOT  | CTRL-D    |
| 5   | 05  | Enquiry              | ENQ  | CTRL-E    |
| 6   | 06  | Acknowledge          | ACK  | CTRL-F    |
| 7   | 07  | Bell                 | BEL  | CTRL-G    |
| 8   | 08  | Backspace            | BS   | CTRL-H    |
| 9   | 09  | Horizontal tab       | HT   | CTRL-I    |
| 10  | 0A  | Line feed            | LF   | CTRL-J    |
| 11  | 0B  | Vertical tab         | VT   | CTRL-K    |
| 12  | 0C  | Form feed            | FF   | CTRL-L    |
| 13  | 0D  | Carriage return      | CR   | CTRL-M    |
| 14  | 0E  | Shift out            | SO   | CTRL-N    |
| 15  | 0F  | Shift in             | SI   | CTRL-O    |
| 16  | 10  | Data link escape     | DLE  | CTRL-P    |
| 17  | 11  | Device control 1     | DC1  | CTRL-Q    |
| 18  | 12  | Device control 2     | DC2  | CTRL-R    |
| 19  | 13  | Device control 3     | DC3  | CTRL-S    |
| 20  | 14  | Device control 4     | DC4  | CTRL-T    |
| 21  | 15  | Negative acknowledge | NAK  | CTRL-U    |
| 22  | 16  | Synchronous idle     | SYN  | CTRL-V    |
| 23  | 17  | End of trans. block  | ETB  | CTRL-W    |
| 24  | 18  | Cancel               | CAN  | CTRL-X    |
| 25  | 19  | End of medium        | EM   | CTRL-Y    |
| 26  | 1A  | Substitute           | SUB  | CTRL-Z    |
| 27  | 1B  | Escape               | ESC  | CTRL-[    |
| 28  | 1C  | File separator       | FS   | CTRL-\\   |
| 29  | 1D  | Group separator      | GS   | CTRL-]    |
| 30  | 1E  | Record separator     | RS   | CTRL-^    |
| 31  | 1F  | Unit separator       | US   | CTRL-\_   |
| 32  | 20  | Space                |      |           |
| 33  | 21  | Exclamation mark     | !    |           |
| 34  | 22  | Quotation mark       | "    |           |
| 35  | 23  | Number sign          | #    |           |
| 36  | 24  | Dollar sign          | $    |           |
| 37  | 25  | Percent sign         | %    |           |
| 38  | 26  | Ampersand            | &    |           |
| 39  | 27  | Apostrophe           | '    |           |
| 40  | 28  | Left parenthesis     | (    |           |
| 41  | 29  | Right parenthesis    | )    |           |
| 42  | 2A  | Asterisk             | \*   |           |
| 43  | 2B  | Plus sign            | +    |           |
| 44  | 2C  | Comma                | ,    |           |
| 45  | 2D  | Hyphen-minus         | -    |           |
| 46  | 2E  | Period               | .    |           |
| 47  | 2F  | Slash                | /    |           |
| 48  | 30  | Digit zero           | 0    |           |
| 49  | 31  | Digit one            | 1    |           |
| 50  | 32  | Digit two            | 2    |           |
| 51  | 33  | Digit three          | 3    |           |
| 52  | 34  | Digit four           | 4    |           |
| 53  | 35  | Digit five           | 5    |           |
| 54  | 36  | Digit six            | 6    |           |
| 55  | 37  | Digit seven          | 7    |           |
| 56  | 38  | Digit eight          | 8    |           |
| 57  | 39  | Digit nine           | 9    |           |
| 58  | 3A  | Colon                | :    |           |
| 59  | 3B  | Semicolon            | ;    |           |
| 60  | 3C  | Less-than sign       | <    |           |
| 61  | 3D  | Equals sign          | =    |           |
| 62  | 3E  | Greater-than sign    | >    |           |
| 63  | 3F  | Question mark        | ?    |           |
| 64  | 40  | At sign              | @    |           |
| 65  | 41  | Uppercase A          | A    |           |
| 66  | 42  | Uppercase B          | B    |           |
| 67  | 43  | Uppercase C          | C    |           |
| 68  | 44  | Uppercase D          | D    |           |
| 69  | 45  | Uppercase E          | E    |           |
| 70  | 46  | Uppercase F          | F    |           |
| 71  | 47  | Uppercase G          | G    |           |
| 72  | 48  | Uppercase H          | H    |           |
| 73  | 49  | Uppercase I          | I    |           |
| 74  | 4A  | Uppercase J          | J    |           |
| 75  | 4B  | Uppercase K          | K    |           |
| 76  | 4C  | Uppercase L          | L    |           |
| 77  | 4D  | Uppercase M          | M    |           |
| 78  | 4E  | Uppercase N          | N    |           |
| 79  | 4F  | Uppercase O          | O    |           |
| 80  | 50  | Uppercase P          | P    |           |
| 81  | 51  | Uppercase Q          | Q    |           |
| 82  | 52  | Uppercase R          | R    |           |
| 83  | 53  | Uppercase S          | S    |           |
| 84  | 54  | Uppercase T          | T    |           |
| 85  | 55  | Uppercase U          | U    |           |
| 86  | 56  | Uppercase V          | V    |           |
| 87  | 57  | Uppercase W          | W    |           |
| 88  | 58  | Uppercase X          | X    |           |
| 89  | 59  | Uppercase Y          | Y    |           |
| 90  | 5A  | Uppercase Z          | Z    |           |
| 91  | 5B  | Left square bracket  | [    |           |
| 92  | 5C  | Backslash            | \\   |           |
| 93  | 5D  | Right square bracket | ]    |           |
| 94  | 5E  | Caret                | ^    |           |
| 95  | 5F  | Underscore           | \_   |           |
| 96  | 60  | Grave accent         | `    |           |
| 97  | 61  | Lowercase a          | a    |           |
| 98  | 62  | Lowercase b          | b    |           |
| 99  | 63  | Lowercase c          | c    |           |
| 100 | 64  | Lowercase d          | d    |           |
| 101 | 65  | Lowercase e          | e    |           |
| 102 | 66  | Lowercase f          | f    |           |
| 103 | 67  | Lowercase g          | g    |           |
| 104 | 68  | Lowercase h          | h    |           |
| 105 | 69  | Lowercase i          | i    |           |
| 106 | 6A  | Lowercase j          | j    |           |
| 107 | 6B  | Lowercase k          | k    |           |
| 108 | 6C  | Lowercase l          | l    |           |
| 109 | 6D  | Lowercase m          | m    |           |
| 110 | 6E  | Lowercase n          | n    |           |
| 111 | 6F  | Lowercase o          | o    |           |
| 112 | 70  | Lowercase p          | p    |           |
| 113 | 71  | Lowercase q          | q    |           |
| 114 | 72  | Lowercase r          | r    |           |
| 115 | 73  | Lowercase s          | s    |           |
| 116 | 74  | Lowercase t          | t    |           |
| 117 | 75  | Lowercase u          | u    |           |
| 118 | 76  | Lowercase v          | v    |           |
| 119 | 77  | Lowercase w          | w    |           |
| 120 | 78  | Lowercase x          | x    |           |
| 121 | 79  | Lowercase y          | y    |           |
| 122 | 7A  | Lowercase z          | z    |           |
| 123 | 7B  | Left curly brace     | {    |           |
| 124 | 7C  | Vertical bar         | \|   |           |
| 125 | 7D  | Right curly brace    | }    |           |
| 126 | 7E  | Tilde                | ~    |           |
| 127 | 7F  | Delete               | DEL  |           |

# Next Topic

Phase 0.3 — Hexadecimal: The Human-Friendly Representation of Binary

You'll learn why programmers rarely write long binary numbers and why memory addresses, machine code, and debuggers use hexadecimal instead.
