/**
 * C Language Data
 * 
 * Comprehensive C programming tutorial data.
 * Organized by categories with topics, explanations, and practice questions.
 */

export const cCoding = {
  language: "C",
  categories: [
    {
      id: "basics",
      title: "C Basics",
      topics: [
        {
          id: "c-intro",
          title: "C Introduction",
          explanation: "C is a powerful, general-purpose programming language developed in the 1970s. It's the foundation for many modern languages and operating systems. C gives you direct control over computer hardware and memory, making it perfect for system programming, embedded systems, and performance-critical applications.",
          syntax: "C programs are compiled into machine code. Every C program must have a main() function as the entry point.",
          examples: [
            {
              title: "Hello World Program",
              description: "Basic C program structure",
              code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the entry point function in every C program?",
              type: "fill",
              starterCode: `int ___() {
    printf("Hello");
    return 0;
}`,
              answer: "main",
            },
            {
              question: "Complete the include statement for standard input/output",
              type: "fill",
              starterCode: `#include <___>
int main() {
    return 0;
}`,
              answer: "stdio.h",
            },
            {
              question: "What does printf do in C?",
              type: "predict",
              starterCode: `printf("Hello World\\n");`,
              answer: "Prints Hello World to the console",
            },
          ],
        },
        {
          id: "c-get-started",
          title: "C Get Started",
          explanation: "To write C programs, you need a text editor and a C compiler. Popular compilers include GCC (GNU Compiler Collection). The typical workflow is: write code in a .c file, compile it to create an executable, then run the executable.",
          syntax: "Compile: gcc program.c -o program\nRun: ./program (Linux/Mac) or program.exe (Windows)",
          examples: [
            {
              title: "Compilation Process",
              description: "How to compile and run a C program",
              code: `// Save as hello.c
#include <stdio.h>

int main() {
    printf("Hello, C!\\n");
    return 0;
}

// Compile: gcc hello.c -o hello
// Run: ./hello`,
            },
          ],
          practiceQuestions: [
            {
              question: "What file extension do C source files use?",
              type: "fill",
              starterCode: `// File: program.___`,
              answer: "c",
            },
            {
              question: "What command compiles a C file named 'test.c'?",
              type: "complete",
              starterCode: `gcc test.c -o ___`,
              answer: "test",
            },
            {
              question: "What is the output of this program?",
              type: "predict",
              starterCode: `#include <stdio.h>
int main() {
    printf("C Programming\\n");
    return 0;
}`,
              answer: "C Programming",
            },
          ],
        },
        {
          id: "c-syntax",
          title: "C Syntax",
          explanation: "C syntax is case-sensitive and uses semicolons to end statements. Code is organized into functions. Curly braces {} define code blocks. C requires explicit type declarations for variables.",
          syntax: "Statements end with semicolons (;). Code blocks use curly braces {}. Variables must be declared with types before use.",
          examples: [
            {
              title: "Basic Syntax Rules",
              description: "C syntax fundamentals",
              code: `#include <stdio.h>

int main() {
    int number = 10;  // Statement ends with semicolon
    printf("%d\\n", number);
    return 0;  // Return statement
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What character ends every C statement?",
              type: "fill",
              starterCode: `int x = 5___`,
              answer: ";",
            },
            {
              question: "Complete the code block with curly braces",
              type: "complete",
              starterCode: `int main() ___
    printf("Hello");
___`,
              answer: "{ }",
            },
            {
              question: "Is C case-sensitive? (yes/no)",
              type: "fill",
              starterCode: `// C is case-___`,
              answer: "sensitive",
            },
          ],
        },
        {
          id: "c-output",
          title: "C Output",
          explanation: "The printf() function is used to display output in C. It's part of the stdio.h library. printf can print text, numbers, and formatted output using format specifiers like %d for integers, %f for floats, and %s for strings.",
          syntax: "printf(\"format string\", variables);\nFormat specifiers: %d (int), %f (float), %c (char), %s (string)",
          examples: [
            {
              title: "Printing Output",
              description: "Using printf to display text and variables",
              code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    int age = 25;
    printf("Age: %d\\n", age);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the printf statement to print Hello",
              type: "fill",
              starterCode: `___("Hello\\n");`,
              answer: "printf",
            },
            {
              question: "What format specifier is used for integers?",
              type: "fill",
              starterCode: `int x = 10;
printf("Number: %___\\n", x);`,
              answer: "d",
            },
            {
              question: "What does \\n do in printf?",
              type: "predict",
              starterCode: `printf("Line1\\nLine2");`,
              answer: "Creates a new line",
            },
          ],
        },
        {
          id: "c-comments",
          title: "C Comments",
          explanation: "Comments help document your code and make it easier to understand. C supports single-line comments (//) and multi-line comments (/* */). Comments are ignored by the compiler and don't affect program execution.",
          syntax: "// Single-line comment\n/* Multi-line\n   comment */",
          examples: [
            {
              title: "Comment Examples",
              description: "Different ways to add comments",
              code: `#include <stdio.h>

int main() {
    // This is a single-line comment
    printf("Hello\\n");
    
    /* This is a
       multi-line comment */
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add a single-line comment",
              type: "fill",
              starterCode: `___ This is a comment
printf("Hello");`,
              answer: "//",
            },
            {
              question: "Complete the multi-line comment",
              type: "complete",
              starterCode: `/* This is
   a comment ___`,
              answer: "*/",
            },
            {
              question: "What happens to comments during compilation?",
              type: "predict",
              starterCode: `// This comment is ignored
printf("Hello");`,
              answer: "Comments are ignored by compiler",
            },
          ],
        },
        {
          id: "c-variables",
          title: "C Variables",
          explanation: "Variables store data values in C. You must declare a variable's type before using it. Common types include int (integers), float (decimals), char (single characters), and double (large decimals). Variable names must start with a letter or underscore.",
          syntax: "type variableName = value;\nExample: int age = 25;",
          examples: [
            {
              title: "Variable Declarations",
              description: "Creating and using variables",
              code: `#include <stdio.h>

int main() {
    int age = 25;
    float price = 19.99;
    char grade = 'A';
    
    printf("Age: %d\\n", age);
    printf("Price: %.2f\\n", price);
    printf("Grade: %c\\n", grade);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Declare an integer variable named 'count' with value 10",
              type: "fill",
              starterCode: `___ count = 10;`,
              answer: "int",
            },
            {
              question: "Complete the variable declaration",
              type: "complete",
              starterCode: `float price = ___;`,
              answer: "19.99",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `int x = 5;
int y = 10;
printf("%d\\n", x + y);`,
              answer: "15",
            },
          ],
        },
        {
          id: "c-data-types",
          title: "C Data Types",
          explanation: "C has several built-in data types. int stores whole numbers, float stores decimal numbers, char stores single characters, double stores large decimal numbers, and void represents no type. Choosing the right type is important for memory efficiency and correctness.",
          syntax: "int, float, double, char, void",
          examples: [
            {
              title: "Data Type Examples",
              description: "Using different data types",
              code: `#include <stdio.h>

int main() {
    int number = 42;
    float decimal = 3.14;
    double precise = 3.14159;
    char letter = 'C';
    
    printf("Integer: %d\\n", number);
    printf("Float: %f\\n", decimal);
    printf("Double: %.5f\\n", precise);
    printf("Char: %c\\n", letter);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What data type stores whole numbers?",
              type: "fill",
              starterCode: `___ number = 10;`,
              answer: "int",
            },
            {
              question: "What data type stores decimal numbers?",
              type: "fill",
              starterCode: `___ price = 19.99;`,
              answer: "float",
            },
            {
              question: "What data type stores a single character?",
              type: "fill",
              starterCode: `___ letter = 'A';`,
              answer: "char",
            },
          ],
        },
        {
          id: "c-type-conversion",
          title: "C Type Conversion",
          explanation: "Type conversion (casting) allows you to convert one data type to another. Implicit conversion happens automatically (e.g., int to float). Explicit conversion uses the cast operator (type) to force conversion. This is useful when you need to ensure correct calculations.",
          syntax: "(type) variable\nExample: (float) intValue",
          examples: [
            {
              title: "Type Conversion Examples",
              description: "Implicit and explicit type conversion",
              code: `#include <stdio.h>

int main() {
    int a = 5;
    int b = 2;
    float result = (float)a / b;  // Explicit cast
    
    printf("Result: %.2f\\n", result);  // 2.50
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Convert integer to float using cast",
              type: "fill",
              starterCode: `int x = 5;
float y = (___) x;`,
              answer: "float",
            },
            {
              question: "What will be the result?",
              type: "predict",
              starterCode: `int a = 10;
int b = 3;
float result = (float)a / b;
printf("%.2f\\n", result);`,
              answer: "3.33",
            },
            {
              question: "Complete the type conversion",
              type: "complete",
              starterCode: `int num = 7;
double value = (___) num;`,
              answer: "double",
            },
          ],
        },
        {
          id: "c-constants",
          title: "C Constants",
          explanation: "Constants are values that cannot be changed after declaration. Use the const keyword or #define preprocessor directive. Constants make code more readable and prevent accidental modification of important values.",
          syntax: "const type NAME = value;\n#define NAME value",
          examples: [
            {
              title: "Constant Examples",
              description: "Defining constants in C",
              code: `#include <stdio.h>
#define PI 3.14159

int main() {
    const int MAX = 100;
    
    printf("PI: %.5f\\n", PI);
    printf("MAX: %d\\n", MAX);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Declare a constant integer named SPEED with value 60",
              type: "fill",
              starterCode: `const int ___ = 60;`,
              answer: "SPEED",
            },
            {
              question: "Define a constant using #define",
              type: "fill",
              starterCode: `#___ MAX 100`,
              answer: "define",
            },
            {
              question: "Can you change a const variable after declaration? (yes/no)",
              type: "predict",
              starterCode: `const int x = 5;
x = 10;  // Is this allowed?`,
              answer: "no",
            },
          ],
        },
        {
          id: "c-operators",
          title: "C Operators",
          explanation: "Operators perform operations on values. Arithmetic operators (+, -, *, /, %) perform math. Comparison operators (==, !=, <, >, <=, >=) compare values. Logical operators (&&, ||, !) combine conditions. Assignment operators (=, +=, -=) assign values.",
          syntax: "Arithmetic: +, -, *, /, %\nComparison: ==, !=, <, >, <=, >=\nLogical: &&, ||, !",
          examples: [
            {
              title: "Operator Examples",
              description: "Using different operators",
              code: `#include <stdio.h>

int main() {
    int a = 10, b = 3;
    
    printf("Sum: %d\\n", a + b);
    printf("Difference: %d\\n", a - b);
    printf("Product: %d\\n", a * b);
    printf("Quotient: %d\\n", a / b);
    printf("Remainder: %d\\n", a % b);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator is used for addition?",
              type: "fill",
              starterCode: `int result = 5 ___ 3;`,
              answer: "+",
            },
            {
              question: "What operator finds the remainder?",
              type: "fill",
              starterCode: `int remainder = 10 ___ 3;`,
              answer: "%",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `int x = 10;
int y = 3;
printf("%d\\n", x % y);`,
              answer: "1",
            },
          ],
        },
        {
          id: "c-booleans",
          title: "C Booleans",
          explanation: "C doesn't have a native boolean type. Instead, 0 represents false and any non-zero value represents true. The stdbool.h header provides bool, true, and false keywords for clearer boolean logic. Boolean expressions return 0 (false) or 1 (true).",
          syntax: "#include <stdbool.h>\nbool variable = true;",
          examples: [
            {
              title: "Boolean Examples",
              description: "Working with booleans in C",
              code: `#include <stdio.h>
#include <stdbool.h>

int main() {
    bool isActive = true;
    bool isComplete = false;
    
    printf("Active: %d\\n", isActive);  // 1
    printf("Complete: %d\\n", isComplete);  // 0
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Include the header for boolean support",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "stdbool.h",
            },
            {
              question: "Declare a boolean variable",
              type: "fill",
              starterCode: `bool flag = ___;`,
              answer: "true",
            },
            {
              question: "What value represents false in C?",
              type: "predict",
              starterCode: `bool x = false;
printf("%d\\n", x);`,
              answer: "0",
            },
          ],
        },
        {
          id: "c-if-else",
          title: "C If...Else",
          explanation: "If-else statements allow your program to make decisions. If a condition is true, one block of code executes; otherwise, another block executes. You can chain multiple conditions with else if. This is fundamental for creating interactive programs.",
          syntax: "if (condition) { code } else { code }",
          examples: [
            {
              title: "If-Else Example",
              description: "Conditional execution",
              code: `#include <stdio.h>

int main() {
    int age = 18;
    
    if (age >= 18) {
        printf("Adult\\n");
    } else {
        printf("Minor\\n");
    }
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the if statement",
              type: "fill",
              starterCode: `int x = 10;
___ (x > 5) {
    printf("Greater");
}`,
              answer: "if",
            },
            {
              question: "Add an else clause",
              type: "complete",
              starterCode: `if (age >= 18) {
    printf("Adult");
} ___ {
    printf("Minor");
}`,
              answer: "else",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `int x = 15;
if (x > 10) {
    printf("Large");
} else {
    printf("Small");
}`,
              answer: "Large",
            },
          ],
        },
        {
          id: "c-switch",
          title: "C Switch",
          explanation: "Switch statements provide a cleaner way to handle multiple conditions compared to many if-else statements. They compare a variable against multiple case values and execute the matching code block. Use break to exit the switch after a match.",
          syntax: "switch (variable) { case value: code; break; default: code; }",
          examples: [
            {
              title: "Switch Example",
              description: "Using switch for multiple choices",
              code: `#include <stdio.h>

int main() {
    int day = 3;
    
    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        default:
            printf("Other day\\n");
    }
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the switch statement",
              type: "fill",
              starterCode: `int x = 1;
___ (x) {
    case 1: printf("One"); break;
}`,
              answer: "switch",
            },
            {
              question: "Add break statement to exit switch",
              type: "fill",
              starterCode: `case 1:
    printf("One");
    ___;`,
              answer: "break",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `int day = 2;
switch (day) {
    case 1: printf("Mon"); break;
    case 2: printf("Tue"); break;
    default: printf("Other");
}`,
              answer: "Tue",
            },
          ],
        },
        {
          id: "c-while-loop",
          title: "C While Loop",
          explanation: "While loops repeat code as long as a condition is true. They're useful when you don't know how many times to repeat. The condition is checked before each iteration. Be careful to avoid infinite loops by ensuring the condition eventually becomes false.",
          syntax: "while (condition) { code }",
          examples: [
            {
              title: "While Loop Example",
              description: "Repeating code with while",
              code: `#include <stdio.h>

int main() {
    int count = 0;
    
    while (count < 5) {
        printf("%d\\n", count);
        count++;
    }
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the while loop",
              type: "fill",
              starterCode: `int i = 0;
___ (i < 5) {
    printf("%d\\n", i);
    i++;
}`,
              answer: "while",
            },
            {
              question: "Increment the counter to avoid infinite loop",
              type: "fill",
              starterCode: `int i = 0;
while (i < 5) {
    printf("%d\\n", i);
    i___;
}`,
              answer: "++",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `int i = 0;
while (i < 3) {
    printf("%d ", i);
    i++;
}`,
              answer: "0 1 2",
            },
          ],
        },
        {
          id: "c-for-loop",
          title: "C For Loop",
          explanation: "For loops are ideal when you know how many times to repeat. They combine initialization, condition, and increment in one line. The syntax is: for(init; condition; increment). For loops are more compact than while loops for counting iterations.",
          syntax: "for (init; condition; increment) { code }",
          examples: [
            {
              title: "For Loop Example",
              description: "Counting with for loop",
              code: `#include <stdio.h>

int main() {
    int i;
    for (i = 0; i < 5; i++) {
        printf("%d\\n", i);
    }
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the for loop",
              type: "fill",
              starterCode: `for (int i = 0; i ___ 5; i++) {
    printf("%d\\n", i);
}`,
              answer: "<",
            },
            {
              question: "Complete the increment",
              type: "fill",
              starterCode: `for (int i = 0; i < 5; i___) {
    printf("%d\\n", i);
}`,
              answer: "++",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `for (int i = 0; i < 3; i++) {
    printf("%d ", i);
}`,
              answer: "0 1 2",
            },
          ],
        },
        {
          id: "c-break-continue",
          title: "C Break / Continue",
          explanation: "Break exits a loop immediately, skipping remaining iterations. Continue skips the current iteration and moves to the next one. These statements give you more control over loop execution. Break is also used in switch statements to prevent fall-through.",
          syntax: "break; // Exit loop\ncontinue; // Skip to next iteration",
          examples: [
            {
              title: "Break and Continue Examples",
              description: "Controlling loop flow",
              code: `#include <stdio.h>

int main() {
    int i;
    for (i = 0; i < 10; i++) {
        if (i == 5) break;  // Exit at 5
        if (i % 2 == 0) continue;  // Skip even numbers
        printf("%d\\n", i);
    }
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Exit the loop immediately",
              type: "fill",
              starterCode: `if (x == 10) {
    ___;
}`,
              answer: "break",
            },
            {
              question: "Skip to next iteration",
              type: "fill",
              starterCode: `if (i % 2 == 0) {
    ___;
}`,
              answer: "continue",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `for (int i = 0; i < 5; i++) {
    if (i == 3) break;
    printf("%d ", i);
}`,
              answer: "0 1 2",
            },
          ],
        },
        {
          id: "c-arrays",
          title: "C Arrays",
          explanation: "Arrays store multiple values of the same type in a single variable. Arrays have a fixed size and are zero-indexed (first element is at index 0). You can access elements using square brackets []. Arrays are essential for working with collections of data.",
          syntax: "type arrayName[size];\nExample: int numbers[5];",
          examples: [
            {
              title: "Array Examples",
              description: "Creating and using arrays",
              code: `#include <stdio.h>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    
    printf("First element: %d\\n", numbers[0]);
    printf("Third element: %d\\n", numbers[2]);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Declare an array of 5 integers",
              type: "fill",
              starterCode: `int arr[___];`,
              answer: "5",
            },
            {
              question: "Access the first element (zero-indexed)",
              type: "fill",
              starterCode: `int arr[5] = {10, 20, 30};
printf("%d\\n", arr[___]);`,
              answer: "0",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `int arr[3] = {1, 2, 3};
printf("%d\\n", arr[1]);`,
              answer: "2",
            },
          ],
        },
        {
          id: "c-strings",
          title: "C Strings",
          explanation: "Strings in C are arrays of characters ending with a null terminator (\\0). You can use string literals in double quotes or character arrays. String functions like strlen(), strcpy(), and strcmp() are in string.h. Strings are fundamental for text processing.",
          syntax: "char str[] = \"Hello\";\n#include <string.h> for string functions",
          examples: [
            {
              title: "String Examples",
              description: "Working with strings",
              code: `#include <stdio.h>
#include <string.h>

int main() {
    char name[] = "C Programming";
    
    printf("String: %s\\n", name);
    printf("Length: %zu\\n", strlen(name));
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Declare a string variable",
              type: "fill",
              starterCode: `char name[] = ___;`,
              answer: "\"Hello\"",
            },
            {
              question: "Include header for string functions",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "string.h",
            },
            {
              question: "What format specifier is used for strings?",
              type: "fill",
              starterCode: `char str[] = "Hello";
printf("%___\\n", str);`,
              answer: "s",
            },
          ],
        },
        {
          id: "c-user-input",
          title: "C User Input",
          explanation: "The scanf() function reads input from the user. It uses format specifiers like %d for integers, %f for floats, and %s for strings. Always use the address-of operator (&) for variables in scanf, except for strings (arrays). Input validation is important for robust programs.",
          syntax: "scanf(\"format\", &variable);\nExample: scanf(\"%d\", &age);",
          examples: [
            {
              title: "Input Example",
              description: "Getting user input",
              code: `#include <stdio.h>

int main() {
    int age;
    
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("You are %d years old\\n", age);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Read an integer from user",
              type: "fill",
              starterCode: `int num;
___("%d", &num);`,
              answer: "scanf",
            },
            {
              question: "What operator is needed for scanf with variables?",
              type: "fill",
              starterCode: `int x;
scanf("%d", ___x);`,
              answer: "&",
            },
            {
              question: "What format specifier reads a float?",
              type: "fill",
              starterCode: `float price;
scanf("%___", &price);`,
              answer: "f",
            },
          ],
        },
        {
          id: "c-memory-address",
          title: "C Memory Address",
          explanation: "Every variable has a memory address where its value is stored. The address-of operator (&) gets the memory address of a variable. The %p format specifier prints addresses. Understanding memory addresses is crucial for working with pointers and understanding how C manages memory.",
          syntax: "&variable // Get address\nprintf(\"%p\", &variable); // Print address",
          examples: [
            {
              title: "Memory Address Example",
              description: "Getting and printing memory addresses",
              code: `#include <stdio.h>

int main() {
    int number = 42;
    
    printf("Value: %d\\n", number);
    printf("Address: %p\\n", &number);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Get the memory address of variable x",
              type: "fill",
              starterCode: `int x = 10;
int *ptr = ___x;`,
              answer: "&",
            },
            {
              question: "What format specifier prints memory addresses?",
              type: "fill",
              starterCode: `int x = 10;
printf("%___\\n", &x);`,
              answer: "p",
            },
            {
              question: "What does & operator return?",
              type: "predict",
              starterCode: `int x = 5;
printf("%p\\n", &x);`,
              answer: "Memory address of x",
            },
          ],
        },
        {
          id: "c-pointers",
          title: "C Pointers",
          explanation: "Pointers store memory addresses. They're declared with an asterisk (*). The * operator dereferences a pointer to access the value at that address. Pointers are powerful for dynamic memory, arrays, and function parameters. They're one of C's most important and challenging features.",
          syntax: "type *pointerName;\nExample: int *ptr = &variable;",
          examples: [
            {
              title: "Pointer Example",
              description: "Using pointers",
              code: `#include <stdio.h>

int main() {
    int number = 42;
    int *ptr = &number;
    
    printf("Value: %d\\n", number);
    printf("Address: %p\\n", ptr);
    printf("Value via pointer: %d\\n", *ptr);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Declare a pointer to an integer",
              type: "fill",
              starterCode: `int *___;`,
              answer: "ptr",
            },
            {
              question: "Dereference pointer to get value",
              type: "fill",
              starterCode: `int x = 10;
int *ptr = &x;
printf("%d\\n", *___);`,
              answer: "ptr",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `int x = 5;
int *ptr = &x;
printf("%d\\n", *ptr);`,
              answer: "5",
            },
          ],
        },
      ],
    },
    {
      id: "functions",
      title: "C Functions",
      topics: [
        {
          id: "c-functions",
          title: "C Functions",
          explanation: "Functions are reusable blocks of code that perform specific tasks. They help organize code, avoid repetition, and make programs modular. Every C program has at least one function: main(). Functions can take parameters, return values, or both. They're essential for writing clean, maintainable code.",
          syntax: "returnType functionName(parameters) { code return value; }",
          examples: [
            {
              title: "Function Example",
              description: "Defining and calling a function",
              code: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    printf("Sum: %d\\n", result);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the function definition",
              type: "fill",
              starterCode: `int multiply(int x, int y) {
    return x ___ y;
}`,
              answer: "*",
            },
            {
              question: "What keyword is used to return a value?",
              type: "fill",
              starterCode: `int getNumber() {
    ___ 42;
}`,
              answer: "return",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `int square(int n) {
    return n * n;
}
printf("%d\\n", square(5));`,
              answer: "25",
            },
          ],
        },
        {
          id: "c-function-parameters",
          title: "C Function Parameters",
          explanation: "Parameters allow functions to receive data. They're declared in the function definition. When calling a function, you pass arguments that match the parameter types. Parameters act as local variables within the function. You can pass multiple parameters separated by commas.",
          syntax: "functionName(type param1, type param2) { }",
          examples: [
            {
              title: "Function Parameters Example",
              description: "Functions with parameters",
              code: `#include <stdio.h>

void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}

int main() {
    greet("Alice");
    greet("Bob");
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add a parameter to the function",
              type: "fill",
              starterCode: `void printAge(int ___) {
    printf("Age: %d\\n", age);
}`,
              answer: "age",
            },
            {
              question: "Complete the function call with argument",
              type: "fill",
              starterCode: `void greet(char name[]);
greet(___);`,
              answer: "\"John\"",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `void printSum(int a, int b) {
    printf("%d\\n", a + b);
}
printSum(10, 20);`,
              answer: "30",
            },
          ],
        },
        {
          id: "c-scope",
          title: "C Scope",
          explanation: "Scope determines where variables are accessible. Local variables are declared inside functions and only accessible within that function. Global variables are declared outside functions and accessible everywhere. Understanding scope prevents naming conflicts and helps manage variable lifetime.",
          syntax: "Global: declared outside functions\nLocal: declared inside functions",
          examples: [
            {
              title: "Scope Example",
              description: "Local vs global variables",
              code: `#include <stdio.h>

int global = 100;  // Global variable

void function() {
    int local = 50;  // Local variable
    printf("Global: %d\\n", global);
    printf("Local: %d\\n", local);
}

int main() {
    function();
    printf("Global: %d\\n", global);
    // printf("%d\\n", local);  // Error: local not accessible
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Where are global variables declared?",
              type: "fill",
              starterCode: `int global = 10;  // Declared ___ functions`,
              answer: "outside",
            },
            {
              question: "What is the scope of a variable declared inside a function?",
              type: "fill",
              starterCode: `void func() {
    int x = 5;  // ___ variable
}`,
              answer: "local",
            },
            {
              question: "Can a local variable be accessed outside its function? (yes/no)",
              type: "predict",
              starterCode: `void func() {
    int x = 5;
}
// Can we use x here?`,
              answer: "no",
            },
          ],
        },
        {
          id: "c-function-declaration",
          title: "C Function Declaration",
          explanation: "Function declarations (prototypes) tell the compiler about a function before it's defined. They include the return type, function name, and parameter types. Declarations allow you to call functions before they're defined. They're typically placed at the top of files or in header files.",
          syntax: "returnType functionName(type1, type2);",
          examples: [
            {
              title: "Function Declaration Example",
              description: "Declaring functions before definition",
              code: `#include <stdio.h>

// Function declaration (prototype)
int add(int a, int b);

int main() {
    int result = add(5, 3);  // Can call before definition
    printf("%d\\n", result);
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the function declaration",
              type: "fill",
              starterCode: `int multiply(int x, int y)___;`,
              answer: ";",
            },
            {
              question: "What is a function declaration also called?",
              type: "fill",
              starterCode: `// Function ___ (prototype)`,
              answer: "declaration",
            },
            {
              question: "Why are function declarations useful?",
              type: "predict",
              starterCode: `int add(int, int);  // Declaration
// Allows calling add() before its definition`,
              answer: "Allows calling function before definition",
            },
          ],
        },
        {
          id: "c-math-functions",
          title: "C Math Functions",
          explanation: "The math.h library provides mathematical functions like sqrt(), pow(), sin(), cos(), abs(), and more. Include math.h and link with -lm flag when compiling. These functions are essential for scientific computing, graphics, and calculations requiring mathematical operations.",
          syntax: "#include <math.h>\nCompile: gcc program.c -lm",
          examples: [
            {
              title: "Math Functions Example",
              description: "Using math library functions",
              code: `#include <stdio.h>
#include <math.h>

int main() {
    double number = 16.0;
    
    printf("Square root: %.2f\\n", sqrt(number));
    printf("Power: %.2f\\n", pow(2, 3));
    printf("Absolute: %.2f\\n", fabs(-5.5));
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Include the math library header",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "math.h",
            },
            {
              question: "What function calculates square root?",
              type: "fill",
              starterCode: `double result = ___(16.0);`,
              answer: "sqrt",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `printf("%.0f\\n", pow(2, 3));`,
              answer: "8",
            },
          ],
        },
        {
          id: "c-inline-functions",
          title: "C Inline Functions",
          explanation: "Inline functions are a compiler optimization suggestion. The inline keyword suggests the compiler replace function calls with the function code directly. This can improve performance by eliminating function call overhead. However, the compiler may ignore the inline suggestion. Use inline for small, frequently called functions.",
          syntax: "inline returnType functionName(parameters) { }",
          examples: [
            {
              title: "Inline Function Example",
              description: "Defining inline functions",
              code: `#include <stdio.h>

inline int square(int x) {
    return x * x;
}

int main() {
    int result = square(5);
    printf("%d\\n", result);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Add inline keyword to function",
              type: "fill",
              starterCode: `___ int add(int a, int b) {
    return a + b;
}`,
              answer: "inline",
            },
            {
              question: "What does inline suggest to the compiler?",
              type: "fill",
              starterCode: `// Inline suggests compiler to ___ function code`,
              answer: "replace",
            },
            {
              question: "When is inline most beneficial?",
              type: "predict",
              starterCode: `inline int smallFunc() { return 1; }
// Best for small, frequently called functions`,
              answer: "Small frequently called functions",
            },
          ],
        },
        {
          id: "c-recursion",
          title: "C Recursion",
          explanation: "Recursion is when a function calls itself. It solves problems by breaking them into smaller, similar subproblems. Recursive functions need a base case (stopping condition) to prevent infinite recursion. Recursion is elegant for problems like factorial, Fibonacci, and tree traversal.",
          syntax: "function calls itself with modified parameters until base case",
          examples: [
            {
              title: "Recursive Factorial",
              description: "Calculating factorial using recursion",
              code: `#include <stdio.h>

int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;  // Base case
    }
    return n * factorial(n - 1);  // Recursive case
}

int main() {
    printf("Factorial of 5: %d\\n", factorial(5));
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the base case",
              type: "fill",
              starterCode: `int factorial(int n) {
    if (n == 0 || n == 1) {
        return ___;
    }
    return n * factorial(n - 1);
}`,
              answer: "1",
            },
            {
              question: "Complete the recursive call",
              type: "fill",
              starterCode: `int countdown(int n) {
    if (n <= 0) return;
    printf("%d\\n", n);
    countdown(___ - 1);
}`,
              answer: "n",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
printf("%d\\n", factorial(3));`,
              answer: "6",
            },
          ],
        },
        {
          id: "c-function-pointers",
          title: "C Function Pointers",
          explanation: "Function pointers store the address of functions. They allow you to pass functions as arguments, store functions in arrays, and call functions dynamically. Function pointers are powerful for callbacks, event handling, and creating flexible, extensible code. They're declared with the function signature.",
          syntax: "returnType (*pointerName)(parameters);",
          examples: [
            {
              title: "Function Pointer Example",
              description: "Using function pointers",
              code: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int (*ptr)(int, int) = add;  // Function pointer
    
    int result = ptr(5, 3);
    printf("Result: %d\\n", result);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Declare a function pointer",
              type: "fill",
              starterCode: `int (*___)(int, int);`,
              answer: "ptr",
            },
            {
              question: "Assign function to pointer",
              type: "fill",
              starterCode: `int add(int, int);
int (*ptr)(int, int) = ___;`,
              answer: "add",
            },
            {
              question: "Call function through pointer",
              type: "fill",
              starterCode: `int (*ptr)(int, int) = add;
int result = ___(5, 3);`,
              answer: "ptr",
            },
          ],
        },
      ],
    },
    {
      id: "files",
      title: "C Files",
      topics: [
        {
          id: "c-create-files",
          title: "C Create Files",
          explanation: "File handling in C allows you to work with files on disk. The fopen() function creates or opens files. It returns a FILE pointer. You must specify the mode: 'w' for write, 'r' for read, 'a' for append. Always close files with fclose() when done to free resources.",
          syntax: "FILE *file = fopen(\"filename.txt\", \"mode\");\nfclose(file);",
          examples: [
            {
              title: "Create File Example",
              description: "Creating a new file",
              code: `#include <stdio.h>

int main() {
    FILE *file = fopen("data.txt", "w");
    
    if (file != NULL) {
        printf("File created successfully\\n");
        fclose(file);
    } else {
        printf("Error creating file\\n");
    }
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Open a file for writing",
              type: "fill",
              starterCode: `FILE *file = ___("output.txt", "w");`,
              answer: "fopen",
            },
            {
              question: "What mode creates a new file for writing?",
              type: "fill",
              starterCode: `FILE *file = fopen("file.txt", "___");`,
              answer: "w",
            },
            {
              question: "What function closes a file?",
              type: "fill",
              starterCode: `FILE *file = fopen("test.txt", "w");
___(file);`,
              answer: "fclose",
            },
          ],
        },
        {
          id: "c-write-to-files",
          title: "C Write To Files",
          explanation: "Writing to files uses fprintf() or fputs(). fprintf() works like printf() but writes to a file. fputs() writes a string. Always check if the file was opened successfully before writing. Writing operations can fail, so error handling is important.",
          syntax: "fprintf(file, \"format\", variables);\nfputs(\"string\", file);",
          examples: [
            {
              title: "Write To File Example",
              description: "Writing data to a file",
              code: `#include <stdio.h>

int main() {
    FILE *file = fopen("output.txt", "w");
    
    if (file != NULL) {
        fprintf(file, "Hello, File!\\n");
        fprintf(file, "Number: %d\\n", 42);
        fclose(file);
        printf("Data written successfully\\n");
    }
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Write formatted text to file",
              type: "fill",
              starterCode: `FILE *file = fopen("test.txt", "w");
___(file, "Hello\\n");`,
              answer: "fprintf",
            },
            {
              question: "Write a string to file",
              type: "fill",
              starterCode: `FILE *file = fopen("test.txt", "w");
___("Hello", file);`,
              answer: "fputs",
            },
            {
              question: "What will be written to the file?",
              type: "predict",
              starterCode: `FILE *file = fopen("out.txt", "w");
fprintf(file, "Number: %d", 10);
fclose(file);`,
              answer: "Number: 10",
            },
          ],
        },
        {
          id: "c-read-files",
          title: "C Read Files",
          explanation: "Reading from files uses fscanf() or fgets(). fscanf() reads formatted data like scanf() but from a file. fgets() reads a line of text. Always check for end-of-file (EOF) when reading. Reading operations should handle errors and end-of-file conditions properly.",
          syntax: "fscanf(file, \"format\", &variable);\nfgets(buffer, size, file);",
          examples: [
            {
              title: "Read File Example",
              description: "Reading data from a file",
              code: `#include <stdio.h>

int main() {
    FILE *file = fopen("data.txt", "r");
    int number;
    char line[100];
    
    if (file != NULL) {
        fscanf(file, "%d", &number);
        printf("Number: %d\\n", number);
        
        fgets(line, 100, file);
        printf("Line: %s", line);
        
        fclose(file);
    }
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Read formatted data from file",
              type: "fill",
              starterCode: `FILE *file = fopen("input.txt", "r");
int num;
___(file, "%d", &num);`,
              answer: "fscanf",
            },
            {
              question: "Read a line from file",
              type: "fill",
              starterCode: `char buffer[100];
FILE *file = fopen("input.txt", "r");
___(buffer, 100, file);`,
              answer: "fgets",
            },
            {
              question: "What constant indicates end of file?",
              type: "fill",
              starterCode: `while (fscanf(file, "%d", &num) != ___) {
    printf("%d\\n", num);
}`,
              answer: "EOF",
            },
          ],
        },
      ],
    },
    {
      id: "structures",
      title: "C Structures",
      topics: [
        {
          id: "c-structures",
          title: "C Structures",
          explanation: "Structures (structs) group related data of different types into a single type. They're like custom data types. You define a structure with the struct keyword, then create variables of that type. Structures are essential for organizing complex data and creating user-defined types.",
          syntax: "struct StructName { type member1; type member2; };\nstruct StructName variable;",
          examples: [
            {
              title: "Structure Example",
              description: "Creating and using structures",
              code: `#include <stdio.h>

struct Person {
    char name[50];
    int age;
    float height;
};

int main() {
    struct Person p1;
    p1.age = 25;
    printf("Age: %d\\n", p1.age);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Define a structure",
              type: "fill",
              starterCode: `___ Student {
    int id;
    char name[50];
};`,
              answer: "struct",
            },
            {
              question: "Create a variable of structure type",
              type: "fill",
              starterCode: `struct Student {
    int id;
};
struct Student ___;`,
              answer: "s1",
            },
            {
              question: "Access structure member",
              type: "fill",
              starterCode: `struct Student s1;
s1.___ = 100;`,
              answer: "id",
            },
          ],
        },
        {
          id: "c-nested-structures",
          title: "C Nested Structures",
          explanation: "Nested structures contain other structures as members. This allows you to create complex data hierarchies. You can nest structures to represent relationships like a student having an address, or a car having an engine. Access nested members using the dot operator multiple times.",
          syntax: "struct Outer { struct Inner member; };\nvariable.outer.inner.member",
          examples: [
            {
              title: "Nested Structure Example",
              description: "Structure within a structure",
              code: `#include <stdio.h>

struct Address {
    char city[50];
    int zip;
};

struct Person {
    char name[50];
    struct Address addr;
};

int main() {
    struct Person p1;
    p1.addr.zip = 12345;
    printf("Zip: %d\\n", p1.addr.zip);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Access nested structure member",
              type: "fill",
              starterCode: `struct Person {
    struct Address addr;
};
struct Person p;
p.___.zip = 12345;`,
              answer: "addr",
            },
            {
              question: "Complete nested structure definition",
              type: "fill",
              starterCode: `struct Address {
    char city[50];
};
struct Person {
    struct ___ addr;
};`,
              answer: "Address",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `struct Inner { int x; };
struct Outer { struct Inner in; };
struct Outer o;
o.in.x = 10;
printf("%d\\n", o.in.x);`,
              answer: "10",
            },
          ],
        },
        {
          id: "c-structs-pointers",
          title: "C Structs & Pointers",
          explanation: "You can create pointers to structures. Use the arrow operator (->) to access members through a pointer, instead of the dot operator. Structure pointers are useful for passing large structures to functions efficiently and for dynamic memory allocation. They're more efficient than passing entire structures.",
          syntax: "struct StructName *ptr;\nptr->member = value;",
          examples: [
            {
              title: "Structure Pointer Example",
              description: "Using pointers with structures",
              code: `#include <stdio.h>

struct Student {
    int id;
    char name[50];
};

int main() {
    struct Student s1 = {1, "Alice"};
    struct Student *ptr = &s1;
    
    printf("ID: %d\\n", ptr->id);
    printf("Name: %s\\n", ptr->name);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Declare pointer to structure",
              type: "fill",
              starterCode: `struct Student {
    int id;
};
struct Student *___;`,
              answer: "ptr",
            },
            {
              question: "Access member through pointer",
              type: "fill",
              starterCode: `struct Student *ptr;
ptr->___ = 100;`,
              answer: "id",
            },
            {
              question: "What operator accesses members through pointer?",
              type: "fill",
              starterCode: `struct Student *ptr;
int x = ptr->___id;`,
              answer: ">",
            },
          ],
        },
        {
          id: "c-unions",
          title: "C Unions",
          explanation: "Unions are similar to structures but all members share the same memory space. Only one member can hold a value at a time. Unions save memory when you need to store different types but only use one at a time. They're useful for type conversion and memory-efficient data storage.",
          syntax: "union UnionName { type1 member1; type2 member2; };\nunion UnionName variable;",
          examples: [
            {
              title: "Union Example",
              description: "Using unions to share memory",
              code: `#include <stdio.h>

union Data {
    int i;
    float f;
    char c;
};

int main() {
    union Data data;
    data.i = 10;
    printf("Integer: %d\\n", data.i);
    
    data.f = 3.14;
    printf("Float: %.2f\\n", data.f);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Define a union",
              type: "fill",
              starterCode: `___ Data {
    int i;
    float f;
};`,
              answer: "union",
            },
            {
              question: "What do union members share?",
              type: "fill",
              starterCode: `// Union members share the same ___ space`,
              answer: "memory",
            },
            {
              question: "How many union members can hold values simultaneously?",
              type: "predict",
              starterCode: `union Data {
    int i;
    float f;
};
union Data d;
d.i = 10;
d.f = 3.14;  // What happens to d.i?`,
              answer: "1",
            },
          ],
        },
        {
          id: "c-typedef",
          title: "C typedef",
          explanation: "typedef creates type aliases, giving existing types new names. It makes code more readable and easier to maintain. You can use typedef with structures, unions, and basic types. typedef doesn't create new types, just new names for existing ones.",
          syntax: "typedef existingType newName;\ntypedef struct { } NewName;",
          examples: [
            {
              title: "typedef Example",
              description: "Creating type aliases",
              code: `#include <stdio.h>

typedef int Age;
typedef struct {
    char name[50];
    int id;
} Student;

int main() {
    Age myAge = 25;
    Student s1;
    s1.id = 100;
    
    printf("Age: %d\\n", myAge);
    printf("ID: %d\\n", s1.id);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Create type alias using typedef",
              type: "fill",
              starterCode: `___ int Integer;`,
              answer: "typedef",
            },
            {
              question: "Use typedef with structure",
              type: "fill",
              starterCode: `typedef struct {
    int id;
} ___;`,
              answer: "Student",
            },
            {
              question: "What does typedef do?",
              type: "predict",
              starterCode: `typedef int Number;
Number x = 10;  // x is still an int`,
              answer: "Creates type alias",
            },
          ],
        },
        {
          id: "c-struct-padding",
          title: "C Struct Padding",
          explanation: "Structure padding is memory alignment done by the compiler. Members are aligned to memory boundaries for efficiency. This can make structures larger than the sum of their members. Understanding padding helps optimize memory usage and is important for systems programming and embedded development.",
          syntax: "Compiler automatically adds padding for alignment",
          examples: [
            {
              title: "Structure Padding Example",
              description: "Understanding memory alignment",
              code: `#include <stdio.h>

struct Example1 {
    char a;    // 1 byte
    int b;     // 4 bytes (may have 3 bytes padding before it)
};

struct Example2 {
    int a;     // 4 bytes
    char b;    // 1 byte (may have 3 bytes padding after it)
};

int main() {
    printf("Size of Example1: %zu\\n", sizeof(struct Example1));
    printf("Size of Example2: %zu\\n", sizeof(struct Example2));
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function shows structure size?",
              type: "fill",
              starterCode: `struct Student s;
printf("%zu\\n", ___(struct Student));`,
              answer: "sizeof",
            },
            {
              question: "Why does compiler add padding?",
              type: "fill",
              starterCode: `// Padding is added for memory ___`,
              answer: "alignment",
            },
            {
              question: "Can structure size be larger than sum of members? (yes/no)",
              type: "predict",
              starterCode: `struct Test {
    char a;  // 1 byte
    int b;   // 4 bytes
    // Total might be 8 bytes due to padding`,
              answer: "yes",
            },
          ],
        },
      ],
    },
    {
      id: "enums",
      title: "C Enums",
      topics: [
        {
          id: "c-enums",
          title: "C Enums",
          explanation: "Enumerations (enums) create named integer constants. They make code more readable by using meaningful names instead of magic numbers. Enum values are automatically assigned starting from 0, but you can set custom values. Enums are useful for representing states, options, or categories.",
          syntax: "enum EnumName { VALUE1, VALUE2, VALUE3 };",
          examples: [
            {
              title: "Enum Example",
              description: "Creating and using enums",
              code: `#include <stdio.h>

enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY
};

int main() {
    enum Day today = WEDNESDAY;
    printf("Day: %d\\n", today);  // Prints 2
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Define an enumeration",
              type: "fill",
              starterCode: `___ Status {
    ACTIVE,
    INACTIVE
};`,
              answer: "enum",
            },
            {
              question: "What is the default value of first enum member?",
              type: "fill",
              starterCode: `enum Color { RED, GREEN, BLUE };
// RED has value ___`,
              answer: "0",
            },
            {
              question: "What will be printed?",
              type: "predict",
              starterCode: `enum Level { LOW, MEDIUM, HIGH };
enum Level l = MEDIUM;
printf("%d\\n", l);`,
              answer: "1",
            },
          ],
        },
      ],
    },
    {
      id: "memory",
      title: "C Memory",
      topics: [
        {
          id: "c-memory-management",
          title: "C Memory Management",
          explanation: "C provides manual memory management. malloc() allocates memory dynamically, calloc() allocates and initializes to zero, realloc() resizes memory, and free() releases memory. Proper memory management prevents memory leaks and is crucial for efficient programs. Always free memory you allocate.",
          syntax: "void *ptr = malloc(size);\nfree(ptr);",
          examples: [
            {
              title: "Memory Management Example",
              description: "Dynamic memory allocation",
              code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr = (int*)malloc(5 * sizeof(int));
    
    if (ptr != NULL) {
        for (int i = 0; i < 5; i++) {
            ptr[i] = i * 10;
        }
        
        for (int i = 0; i < 5; i++) {
            printf("%d ", ptr[i]);
        }
        
        free(ptr);  // Release memory
    }
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Allocate memory dynamically",
              type: "fill",
              starterCode: `int *ptr = (int*)___(10 * sizeof(int));`,
              answer: "malloc",
            },
            {
              question: "Release allocated memory",
              type: "fill",
              starterCode: `int *ptr = malloc(100);
___(ptr);`,
              answer: "free",
            },
            {
              question: "What header is needed for malloc?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "stdlib.h",
            },
          ],
        },
      ],
    },
    {
      id: "errors",
      title: "C Errors",
      topics: [
        {
          id: "c-errors",
          title: "C Errors",
          explanation: "Errors in C can be compile-time (syntax errors) or runtime (logic errors). Common errors include missing semicolons, undefined variables, type mismatches, and segmentation faults. Understanding error types helps debug programs. Always read error messages carefully as they point to the problem.",
          syntax: "Common errors: missing semicolons, undefined variables, type mismatches",
          examples: [
            {
              title: "Common Error Example",
              description: "Identifying and fixing errors",
              code: `#include <stdio.h>

int main() {
    int x = 10;
    // Missing semicolon error:
    // int y = 20  // ERROR: missing semicolon
    
    int y = 20;  // Fixed
    printf("%d\\n", x + y);
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What character ends every C statement?",
              type: "fill",
              starterCode: `int x = 10___  // Missing this causes error`,
              answer: ";",
            },
            {
              question: "What error occurs when using undefined variable?",
              type: "fill",
              starterCode: `// int x = 10;  // Commented out
printf("%d\\n", x);  // ___ error`,
              answer: "undefined",
            },
            {
              question: "What is a segmentation fault?",
              type: "predict",
              starterCode: `int *ptr = NULL;
*ptr = 10;  // Causes segfault`,
              answer: "Accessing invalid memory",
            },
          ],
        },
        {
          id: "c-debugging",
          title: "C Debugging",
          explanation: "Debugging is finding and fixing errors. Use printf() statements to trace program execution and check variable values. Debuggers like GDB allow step-by-step execution. Compile with -g flag for debugging symbols. Good debugging skills are essential for developing reliable programs.",
          syntax: "gcc -g program.c -o program\ngdb ./program",
          examples: [
            {
              title: "Debugging Example",
              description: "Using printf for debugging",
              code: `#include <stdio.h>

int main() {
    int x = 5;
    printf("DEBUG: x = %d\\n", x);  // Debug output
    
    x = x * 2;
    printf("DEBUG: x after multiply = %d\\n", x);
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Compile with debugging symbols",
              type: "fill",
              starterCode: `gcc -___ program.c -o program`,
              answer: "g",
            },
            {
              question: "What tool helps debug C programs?",
              type: "fill",
              starterCode: `// Use ___ for debugging`,
              answer: "gdb",
            },
            {
              question: "What is a common debugging technique?",
              type: "predict",
              starterCode: `printf("DEBUG: value = %d\\n", x);
// Adding ___ statements to trace execution`,
              answer: "printf",
            },
          ],
        },
        {
          id: "c-null",
          title: "C NULL",
          explanation: "NULL is a macro representing a null pointer (points to nothing). It's used to indicate that a pointer doesn't point to valid memory. Always check for NULL before dereferencing pointers to avoid segmentation faults. NULL is typically defined as 0 or (void*)0.",
          syntax: "pointer = NULL;\nif (pointer != NULL) { use pointer; }",
          examples: [
            {
              title: "NULL Example",
              description: "Using NULL with pointers",
              code: `#include <stdio.h>

int main() {
    int *ptr = NULL;
    
    if (ptr == NULL) {
        printf("Pointer is NULL\\n");
    }
    
    // Don't dereference NULL pointer:
    // *ptr = 10;  // ERROR: segmentation fault
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Initialize pointer to NULL",
              type: "fill",
              starterCode: `int *ptr = ___;`,
              answer: "NULL",
            },
            {
              question: "Check if pointer is NULL",
              type: "fill",
              starterCode: `if (ptr ___ NULL) {
    printf("Pointer is NULL");
}`,
              answer: "==",
            },
            {
              question: "What happens if you dereference NULL?",
              type: "predict",
              starterCode: `int *ptr = NULL;
*ptr = 10;  // What error occurs?`,
              answer: "Segmentation fault",
            },
          ],
        },
        {
          id: "c-error-handling",
          title: "C Error Handling",
          explanation: "Error handling prevents program crashes. Check return values from functions (like fopen returns NULL on failure). Use conditional statements to handle errors gracefully. Proper error handling makes programs robust and user-friendly. Always validate inputs and check function return values.",
          syntax: "if (function() == ERROR) { handle error; }",
          examples: [
            {
              title: "Error Handling Example",
              description: "Handling errors gracefully",
              code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *file = fopen("data.txt", "r");
    
    if (file == NULL) {
        printf("Error: Could not open file\\n");
        return 1;  // Exit with error code
    }
    
    // File operations here
    fclose(file);
    return 0;  // Success
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Check if file opening failed",
              type: "fill",
              starterCode: `FILE *file = fopen("test.txt", "r");
if (file ___ NULL) {
    printf("Error opening file");
}`,
              answer: "==",
            },
            {
              question: "What should you do when error occurs?",
              type: "fill",
              starterCode: `if (error) {
    // ___ the error gracefully`,
              answer: "handle",
            },
            {
              question: "What return value indicates error?",
              type: "predict",
              starterCode: `if (file == NULL) {
    return 1;  // Non-zero indicates ___`,
              answer: "error",
            },
          ],
        },
        {
          id: "c-input-validation",
          title: "C Input Validation",
          explanation: "Input validation checks if user input is correct before using it. Validate ranges, types, and formats. This prevents crashes and security issues. Always check scanf() return value to ensure input was read successfully. Validate that numbers are in expected ranges.",
          syntax: "Check scanf return value\nValidate ranges and formats",
          examples: [
            {
              title: "Input Validation Example",
              description: "Validating user input",
              code: `#include <stdio.h>

int main() {
    int age;
    
    printf("Enter age: ");
    if (scanf("%d", &age) == 1) {
        if (age >= 0 && age <= 120) {
            printf("Valid age: %d\\n", age);
        } else {
            printf("Invalid age range\\n");
        }
    } else {
        printf("Invalid input\\n");
    }
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Check if scanf read successfully",
              type: "fill",
              starterCode: `int num;
if (scanf("%d", &num) ___ 1) {
    printf("Valid input");
}`,
              answer: "==",
            },
            {
              question: "Validate age is in valid range",
              type: "fill",
              starterCode: `if (age >= 0 && age ___ 120) {
    printf("Valid age");
}`,
              answer: "<=",
            },
            {
              question: "What does scanf return on success?",
              type: "predict",
              starterCode: `int x;
int result = scanf("%d", &x);
// result equals number of items read successfully`,
              answer: "1",
            },
          ],
        },
      ],
    },
  ],
}
