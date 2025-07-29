# Number Systems and Place Value

A comprehensive understanding of number systems and place value is foundational for advanced studies in mathematics, computer science, and engineering. This section explores the formal structure of positional number systems, their interconversion, and their practical relevance, particularly in digital computation.

---

## 1. Overview of Number Systems

### Decimal System (Base-10)

The decimal system is the most widely used numeral system and serves as the basis for arithmetic in daily life. It operates on powers of 10.

**Examples:**

* $25 = 2 \times 10^1 + 5 \times 10^0$
* $384 = 3 \times 10^2 + 8 \times 10^1 + 4 \times 10^0$

### Binary System (Base-2)

Binary uses two symbols, 0 and 1, and is the foundational number system in digital electronics and computing.

**Examples:**

* Binary $1011 = 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 = 11$
* Decimal 13 = Binary 1101

### Octal (Base-8) and Hexadecimal (Base-16)

These systems are used primarily in computing to represent large binary values in a more human-readable format.

**Examples:**

* Octal 17 = Decimal 15
* Hexadecimal A = Decimal 10

---

## 2. The Positional Place Value System

In positional notation, the value of a digit depends both on the digit itself and its position (or place) within the number.

### In Base-10

Each digit is multiplied by a power of 10, increasing from right to left for integers and decreasing for decimal fractions.

**Examples:**

* 879: $8 \times 10^2 + 7 \times 10^1 + 9 \times 10^0$
* 3.75: $3 \times 10^0 + 7 \times 10^{-1} + 5 \times 10^{-2}$

**Significance:**
Understanding place value enables efficient representation, manipulation, and interpretation of numerical quantities in both theoretical and applied contexts.

---

## 3. Base Conversions

### Binary to Decimal

Apply the formula: multiply each binary digit by $2^n$, where $n$ is its position index from right to left.

**Example:**

* $1101_2 = 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 13$

### Decimal to Binary

Use repeated division by 2, collecting remainders.

**Example:**

* 13 → Binary: 1101 (via reverse of remainders: 1, 1, 0, 1)

These methods can be extended for conversions between any positional numeral systems, especially in computer architecture and digital electronics.

---

## 4. Bits, Bytes, and Storage Units

### Bits and Bytes

* **Bit**: A single binary digit (0 or 1)
* **Byte**: A collection of 8 bits, commonly used as the smallest addressable memory unit

**Information Representation:**

* 16 bits = $2^{16} = 65,536$ possible values

### Hierarchical Memory Units

* 1 KB (Kilobyte) = 1024 Bytes
* 1 MB (Megabyte) = 1024 KB
* 1 GB (Gigabyte) = 1024 MB

**Examples:**

* 512 KB = $512 \times 1024 = 524,288$ Bytes
* 4 MB = $4 \times 1024^2 = 4,194,304$ Bytes
* 2.5 GB = $2.5 \times 1024^3 = 2,684,354,560$ Bytes
