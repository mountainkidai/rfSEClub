/*
Static vs Dynamic Typing & Operators in JavaScript
static typing
static typing is when the type of a variable is known at compile time. 
This means that you as the programmer must specify what type each variable is. 
This is the case for languages like C, Java, and Swift.

dynamic typing
dynamic typing is when the type of a variable is interpreted at runtime.
 example of static typing
 int x = 5;
 String y = "hello";
float z = 5.5;

example of dynamic typing
var x = 5;
var y = "hello";
var z = 5.5;

Operators
Operators are used to perform operations on variables and values.
 JavaScript has the following types of operators:
 Arithmetic operators
 Assignment operators
 Comparison operators
 Logical operators
 Bitwise operators
 Conditional (ternary) operator
 Arithmetic Operators
 Arithmetic operators are used to perform arithmetic operations on numbers.
 Operator	Description
 +	Addition
 -	Subtraction
    *	Multiplication
    /	Division
    %	Modulus (Division Remainder)
    ++	Increment
    --	Decrement
Assignment Operators
Assignment operators are used to assign values to variables.
Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
Comparison Operators
Comparison operators are used to compare two values.
Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
Logical Operators
Logical operators are used to determine the logic between variables or values.
Operator	Description
&&	and
||	or
!	not
Bitwise Operators
Bitwise operators are used to perform bitwise operations on variables.
Operator	Name	Description
&	AND	Both bits are 1
|	OR	Either bit is 1
~	NOT	1 becomes 0 and 0 becomes 1
^	XOR	One bit is 0 and the other is 1
<<	Zero fill left shift	Shift left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shift right by pushing zeros in from the left, and let the rightmost bits fall off
Conditional (Ternary) Operator
The conditional operator assigns a value to a variable based on some condition.
Syntax
variable name = (condition) ? value1 : value2
Example
var voteable = (age < 18) ? "Too young":"Old enough";
*/
