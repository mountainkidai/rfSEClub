 #include <stdio.h>
#define PI 3.14159
#define E 2.71828

int main() {
float radius = 5.0;
printf("Area of circle with radius%6.2f: %.2f\n", radius, PI * radius * radius);
printf("Value of e: %.5f\n", E);
return 0;
}


/*
 #include <stdio.h>
#include <limits.h>

 int main() {
printf("Signed int min: %d\n", INT_MIN);
printf("size of integer in byyes: %zu\n bytes", sizeof(int));
printf("Signed int max: %d\n", INT_MAX);
printf("Unsigned int max: %u\n", UINT_MAX);

unsigned int u = UINT_MAX;
printf("Unsigned int before overflow: %u\n", u);
u += 1; // Overflow
printf("Unsigned int after overflow: %u\n", u);

return 0;
} */
