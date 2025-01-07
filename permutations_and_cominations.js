// I have a and b and want to create  a password of 2 characters. How many possible passwords can I create?
// aa, ab, ba, bb
// 4
// I have a and b and want to create  a password of 3 characters. How many possible passwords can I create?
// aaa, aab, aba, abb, baa, bab, bba, bbb
// 8
// I have a and b and want to create  a password of 4 characters. How many possible passwords can I create?
// 16
// I have a and b and want to create  a password of 5 characters. How many possible passwords can I create?
// 32

//so the formula is 2^n because we have 2 characters and n is the number of characters in the password and
// repitition is allowed

// if i have a , b and want to create a password of 2 characters withou repitition
// ab, ba
// 2
// if i have a , b,c and want to create a password of 3 characters withou repitition
//abc, acb, bac, bca, cab, cba
// 6
// if i have a , b, c,d and want to create a password of 4 characters withou repitition
// 24
// abcd, abdc, acbd, acdb, adbc, adcb, bacd, badc, bcad, bcda, bdac,
// bdca, cabd, cadb, cbad, cbda, cdab, cdba, dabc, dacb, dbac, dbca, dcab, dcba
// if i have a , b, c,d,e and want to create a password of 5 characters withou repitition
// 120
// 5!

// so the formula is n!/(n-r)! where n is the number of characters and
// r is the number of characters in the password

// if i have a, b, c and want to create a password of 2 character with repitition
// aa, ab, ac, ba, bb, bc, ca, cb, cc
// 9
// if i have a, b, c and want to create a password of 3 character with repitition
// aaa, aab, aac, aba, abb, abc, aca, acb, acc, baa, bab, bac, bba, bbb, bbc, bca, bcb, bcc, caa, cab, cac, cba, cbb, cbc, cca, ccb, ccc
// 27
// if i have a, b, c and want to create a password of 4 character with repitition
// 81
// so the formula is n^r where n is the number of characters and
// r is the number of characters in the password

// if I have n character and want to create a password of 1 character
// n
// if I have n character and want to create a password of 2 character with repitition
// n^2
// if I have n character and want to create a password of 3 character with repitition
// n^3

// if I have n characters and want to create a password of r characters without repitition and position matters
// n!/(n-r)!
// if i have a, b, c and want to create a password of 2 characters without repitition and position matters
// ab, ac, ba, bc, ca, cb
// if I have n characters and want to create a password of r characters without repitition and position does not matter
// n!/(n-r)!r!
// if i have a, b, c and want to create a password of 2 characters without repitition and position does not matter
// ab, ac, bc
// if I have n characters and want to create a password of r characters with repitition and position matters
// n^r
// if i have a, b, c and want to create a password of 2 characters with repitition and position matters
// aa, ab, ac, ba, bb, bc, ca, cb, cc
// if I have n characters and want to create a password of r characters with repitition and position does not matter
// (n+r-1)!/(r!(n-1)!)
// if i have a, b, c and want to create a password of 2 characters with repitition and position does not matter
