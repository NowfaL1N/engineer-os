/**
 * C++ Language Data
 * 
 * Comprehensive C++ programming tutorial data.
 * Organized by categories with topics, explanations, and practice questions.
 */

export const cppCoding = {
  language: "C++",
  categories: [
    {
      id: "basics",
      title: "C++ Basics",
      topics: [
        {
          id: "cpp-intro",
          title: "C++ Intro",
          explanation: "C++ is a powerful, general-purpose programming language developed as an extension of C. It supports both procedural and object-oriented programming paradigms. C++ is widely used for system software, game development, high-performance applications, and embedded systems. It provides low-level memory manipulation capabilities while also offering high-level abstractions.",
          syntax: "C++ programs are compiled into machine code. Every C++ program must have a main() function as the entry point. C++ uses the iostream library for input/output operations.",
          examples: [
            {
              title: "Hello World Program",
              description: "Basic C++ program structure",
              code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the entry point function in every C++ program?",
              type: "fill",
              starterCode: `int ___() {
    cout << "Hello";
    return 0;
}`,
              answer: "main",
            },
            {
              question: "Complete the include statement for input/output operations",
              type: "fill",
              starterCode: `#include <___>
using namespace std;`,
              answer: "iostream",
            },
            {
              question: "What does cout do in C++?",
              type: "predict",
              starterCode: `cout << "Hello World" << endl;`,
              answer: "Prints Hello World to the console",
            },
          ],
        },
        {
          id: "cpp-get-started",
          title: "C++ Get Started",
          explanation: "To write C++ programs, you need a text editor and a C++ compiler. Popular compilers include GCC (GNU Compiler Collection), Clang, and Microsoft Visual C++. The typical workflow is: write code in a .cpp file, compile it to create an executable, then run the executable. Modern IDEs like Code::Blocks, Visual Studio, or Code::Blocks can simplify this process.",
          syntax: "Compile: g++ program.cpp -o program\nRun: ./program (Linux/Mac) or program.exe (Windows)",
          examples: [
            {
              title: "Compilation Process",
              description: "How to compile and run a C++ program",
              code: `// Save as hello.cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}

// Compile: g++ hello.cpp -o hello
// Run: ./hello`,
            },
          ],
          practiceQuestions: [
            {
              question: "What file extension do C++ source files use?",
              type: "fill",
              starterCode: `// File: program.___`,
              answer: "cpp",
            },
            {
              question: "What command compiles a C++ file named 'test.cpp'?",
              type: "complete",
              starterCode: `g++ test.cpp -o ___`,
              answer: "test",
            },
            {
              question: "What is the output of this program?",
              type: "predict",
              starterCode: `#include <iostream>
using namespace std;
int main() {
    cout << "C++ Programming" << endl;
    return 0;
}`,
              answer: "C++ Programming",
            },
          ],
        },
        {
          id: "cpp-syntax",
          title: "C++ Syntax",
          explanation: "C++ syntax is case-sensitive and uses semicolons to end statements. Code is organized into functions and classes. Curly braces {} define code blocks. C++ requires explicit type declarations for variables, though C++11 introduced auto keyword for type inference. The using namespace std directive allows you to use standard library names without the std:: prefix.",
          syntax: "Statements end with semicolons (;). Code blocks use curly braces {}. Variables must be declared with types before use. Use << for output and >> for input with cout and cin.",
          examples: [
            {
              title: "Basic Syntax Rules",
              description: "C++ syntax fundamentals",
              code: `#include <iostream>
using namespace std;

int main() {
    int number = 10;  // Statement ends with semicolon
    cout << number << endl;
    return 0;  // Return statement
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What character ends every C++ statement?",
              type: "fill",
              starterCode: `int x = 5___`,
              answer: ";",
            },
            {
              question: "Complete the code block with curly braces",
              type: "complete",
              starterCode: `int main() ___
    cout << "Hello";
___`,
              answer: "{ }",
            },
            {
              question: "Is C++ case-sensitive? (yes/no)",
              type: "fill",
              starterCode: `// C++ is case-___`,
              answer: "sensitive",
            },
          ],
        },
        {
          id: "cpp-output",
          title: "C++ Output",
          explanation: "The cout object (character output) is used to display output in C++. It's part of the iostream library. cout uses the insertion operator << to send data to the standard output stream. You can chain multiple outputs using multiple << operators. The endl manipulator inserts a newline and flushes the output buffer.",
          syntax: "cout << value << endl;\nYou can output text, numbers, and variables. Use << to chain multiple outputs.",
          examples: [
            {
              title: "Printing Output",
              description: "Using cout to display text and variables",
              code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    int age = 25;
    cout << "Age: " << age << endl;
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the cout statement to print Hello",
              type: "fill",
              starterCode: `___ << "Hello" << endl;`,
              answer: "cout",
            },
            {
              question: "What operator is used with cout to output data?",
              type: "fill",
              starterCode: `cout ___ "Hello" ___ endl;`,
              answer: "<<",
            },
            {
              question: "What does endl do in C++?",
              type: "predict",
              starterCode: `cout << "Line1" << endl << "Line2";`,
              answer: "Creates a new line and flushes the buffer",
            },
          ],
        },
        {
          id: "cpp-comments",
          title: "C++ Comments",
          explanation: "Comments help document your code and make it easier to understand. C++ supports single-line comments (//) and multi-line comments (/* */). Comments are ignored by the compiler and don't affect program execution. Good commenting practices improve code readability and maintainability.",
          syntax: "// Single-line comment\n/* Multi-line\n   comment */",
          examples: [
            {
              title: "Comment Examples",
              description: "Different ways to add comments",
              code: `#include <iostream>
using namespace std;

int main() {
    // This is a single-line comment
    cout << "Hello" << endl;
    
    /* This is a
       multi-line comment */
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the single-line comment",
              type: "fill",
              starterCode: `___ This is a comment`,
              answer: "//",
            },
            {
              question: "Complete the multi-line comment",
              type: "complete",
              starterCode: `___ This is a
   multi-line comment ___`,
              answer: "/* */",
            },
            {
              question: "Are comments executed by the compiler? (yes/no)",
              type: "fill",
              starterCode: `// Comments are ___ by the compiler`,
              answer: "ignored",
            },
          ],
        },
        {
          id: "cpp-variables",
          title: "C++ Variables",
          explanation: "Variables are containers for storing data values. In C++, variables must be declared with a specific data type before use. Variable names are case-sensitive and can contain letters, digits, and underscores, but cannot start with a digit. Variables can be initialized at declaration. C++ supports various data types like int, float, double, char, bool, and string.",
          syntax: "type variableName = value;\nExample: int age = 25;\nVariables must be declared before use.",
          examples: [
            {
              title: "Variable Declaration",
              description: "Creating and using variables",
              code: `#include <iostream>
using namespace std;

int main() {
    int age = 25;
    string name = "John";
    double price = 19.99;
    
    cout << name << " is " << age << " years old" << endl;
    cout << "Price: $" << price << endl;
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the variable declaration",
              type: "fill",
              starterCode: `___ age = 25;`,
              answer: "int",
            },
            {
              question: "What is the correct way to declare a variable?",
              type: "complete",
              starterCode: `___ name = "Alice";`,
              answer: "string",
            },
            {
              question: "Can variable names start with a digit? (yes/no)",
              type: "fill",
              starterCode: `// Variable names ___ start with a digit`,
              answer: "cannot",
            },
          ],
        },
        {
          id: "cpp-user-input",
          title: "C++ User Input",
          explanation: "The cin object (character input) is used to read input from the user. It's part of the iostream library. cin uses the extraction operator >> to read data from the standard input stream. You can read different data types like integers, floats, characters, and strings. cin automatically handles type conversion based on the variable type.",
          syntax: "cin >> variable;\nExample: cin >> age;\nYou can read multiple values: cin >> x >> y;",
          examples: [
            {
              title: "Reading User Input",
              description: "Using cin to get input from user",
              code: `#include <iostream>
using namespace std;

int main() {
    int age;
    string name;
    
    cout << "Enter your name: ";
    cin >> name;
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Hello, " << name << "! You are " << age << " years old." << endl;
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the cin statement to read input",
              type: "fill",
              starterCode: `int age;
___ >> age;`,
              answer: "cin",
            },
            {
              question: "What operator is used with cin to read data?",
              type: "fill",
              starterCode: `cin ___ age;`,
              answer: ">>",
            },
            {
              question: "What happens when you use cin >> name where name is a string?",
              type: "predict",
              starterCode: `string name;
cin >> name;  // User enters "John Doe"`,
              answer: "Only 'John' is stored (stops at first space)",
            },
          ],
        },
        {
          id: "cpp-data-types",
          title: "C++ Data Types",
          explanation: "C++ has several built-in data types to represent different kinds of data. Common types include: int (integers), float and double (floating-point numbers), char (single characters), bool (boolean true/false), string (text sequences), and void (no type). Each type has a specific size and range of values it can hold. Choosing the right data type is important for memory efficiency and correctness.",
          syntax: "int - integers (4 bytes)\nfloat - single precision (4 bytes)\ndouble - double precision (8 bytes)\nchar - single character (1 byte)\nbool - true/false (1 byte)\nstring - text sequences",
          examples: [
            {
              title: "Data Type Examples",
              description: "Using different data types",
              code: `#include <iostream>
using namespace std;

int main() {
    int age = 25;
    float height = 5.9;
    double price = 19.99;
    char grade = 'A';
    bool isStudent = true;
    string name = "John";
    
    cout << "Age: " << age << endl;
    cout << "Height: " << height << endl;
    cout << "Price: " << price << endl;
    cout << "Grade: " << grade << endl;
    cout << "Is Student: " << isStudent << endl;
    cout << "Name: " << name << endl;
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What data type is used for whole numbers?",
              type: "fill",
              starterCode: `___ number = 42;`,
              answer: "int",
            },
            {
              question: "What data type is used for decimal numbers with more precision?",
              type: "fill",
              starterCode: `___ price = 19.99;`,
              answer: "double",
            },
            {
              question: "What is the size of a char data type?",
              type: "fill",
              starterCode: `// char is ___ byte(s)`,
              answer: "1",
            },
          ],
        },
        {
          id: "cpp-operators",
          title: "C++ Operators",
          explanation: "Operators are symbols that perform operations on variables and values. C++ has arithmetic operators (+, -, *, /, %), assignment operators (=, +=, -=, *=, /=), comparison operators (==, !=, <, >, <=, >=), logical operators (&&, ||, !), and increment/decrement operators (++, --). Understanding operators is essential for performing calculations and making decisions in your programs.",
          syntax: "Arithmetic: +, -, *, /, %\nAssignment: =, +=, -=, *=, /=\nComparison: ==, !=, <, >, <=, >=\nLogical: && (AND), || (OR), ! (NOT)\nIncrement/Decrement: ++, --",
          examples: [
            {
              title: "Operator Examples",
              description: "Using different types of operators",
              code: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    
    cout << "Addition: " << a + b << endl;
    cout << "Subtraction: " << a - b << endl;
    cout << "Multiplication: " << a * b << endl;
    cout << "Division: " << a / b << endl;
    cout << "Modulus: " << a % b << endl;
    cout << "Equal? " << (a == b) << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator is used for addition?",
              type: "fill",
              starterCode: `int sum = 5 ___ 3;`,
              answer: "+",
            },
            {
              question: "What operator checks if two values are equal?",
              type: "fill",
              starterCode: `if (a ___ b) { }`,
              answer: "==",
            },
            {
              question: "What is the result of 10 % 3?",
              type: "predict",
              starterCode: `int result = 10 % 3;`,
              answer: "1",
            },
          ],
        },
        {
          id: "cpp-strings",
          title: "C++ Strings",
          explanation: "Strings in C++ are sequences of characters used to store text. C++ provides the string class from the <string> header, which is more convenient than C-style character arrays. Strings can be concatenated using the + operator, compared, and manipulated with various member functions like length(), substr(), find(), and replace(). Strings are mutable and can be modified after creation.",
          syntax: "#include <string>\nstring variableName = \"text\";\nConcatenation: str1 + str2\nLength: str.length()\nSubstring: str.substr(start, length)",
          examples: [
            {
              title: "String Operations",
              description: "Working with strings in C++",
              code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName = "John";
    string lastName = "Doe";
    string fullName = firstName + " " + lastName;
    
    cout << "Full Name: " << fullName << endl;
    cout << "Length: " << fullName.length() << endl;
    cout << "Substring: " << fullName.substr(0, 4) << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the string declaration",
              type: "fill",
              starterCode: `#include <string>
___ name = "Alice";`,
              answer: "string",
            },
            {
              question: "What operator is used to concatenate strings?",
              type: "fill",
              starterCode: `string result = str1 ___ str2;`,
              answer: "+",
            },
            {
              question: "What method returns the length of a string?",
              type: "fill",
              starterCode: `int len = str.___();`,
              answer: "length",
            },
          ],
        },
        {
          id: "cpp-math",
          title: "C++ Math",
          explanation: "C++ provides mathematical operations through operators and the <cmath> library. Basic arithmetic can be done with +, -, *, /, and % operators. For advanced mathematical functions like square root, power, trigonometric functions, and logarithms, you need to include the <cmath> header. Common functions include sqrt(), pow(), abs(), ceil(), floor(), sin(), cos(), and log().",
          syntax: "#include <cmath>\nsqrt(x) - square root\npow(x, y) - x raised to power y\nabs(x) - absolute value\nceil(x) - round up\nfloor(x) - round down",
          examples: [
            {
              title: "Math Functions",
              description: "Using mathematical functions",
              code: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double num = 16.0;
    
    cout << "Square root: " << sqrt(num) << endl;
    cout << "Power: " << pow(2, 3) << endl;
    cout << "Absolute value: " << abs(-5) << endl;
    cout << "Ceiling: " << ceil(4.3) << endl;
    cout << "Floor: " << floor(4.7) << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for math functions?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "cmath",
            },
            {
              question: "What function calculates square root?",
              type: "fill",
              starterCode: `double result = ___(16.0);`,
              answer: "sqrt",
            },
            {
              question: "What is the result of pow(2, 3)?",
              type: "predict",
              starterCode: `double result = pow(2, 3);`,
              answer: "8",
            },
          ],
        },
        {
          id: "cpp-booleans",
          title: "C++ Booleans",
          explanation: "Boolean data type in C++ represents true or false values. The bool type can only hold two values: true (1) or false (0). Booleans are essential for conditional statements and logical operations. When printed, true displays as 1 and false displays as 0, but you can use boolalpha to display them as 'true' and 'false'. Boolean values are commonly used with comparison and logical operators.",
          syntax: "bool variableName = true/false;\nbool result = (condition);\nUse with logical operators: &&, ||, !",
          examples: [
            {
              title: "Boolean Examples",
              description: "Working with boolean values",
              code: `#include <iostream>
using namespace std;

int main() {
    bool isStudent = true;
    bool isWorking = false;
    bool result = (5 > 3);
    
    cout << "Is Student: " << isStudent << endl;
    cout << "Is Working: " << isWorking << endl;
    cout << "5 > 3: " << result << endl;
    cout << boolalpha << "Is Student: " << isStudent << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What data type stores true or false values?",
              type: "fill",
              starterCode: `___ isActive = true;`,
              answer: "bool",
            },
            {
              question: "What are the two possible values for a bool?",
              type: "fill",
              starterCode: `bool value = ___;  // or false`,
              answer: "true",
            },
            {
              question: "What is the result of (5 > 3)?",
              type: "predict",
              starterCode: `bool result = (5 > 3);`,
              answer: "true",
            },
          ],
        },
        {
          id: "cpp-if-else",
          title: "C++ If...Else",
          explanation: "Conditional statements allow your program to make decisions based on conditions. The if statement executes code when a condition is true. The else statement provides an alternative when the condition is false. You can chain multiple conditions using else if. Conditions are evaluated as boolean expressions. Proper use of if-else statements is fundamental to creating interactive and decision-making programs.",
          syntax: "if (condition) { code }\nelse { code }\nelse if (condition) { code }",
          examples: [
            {
              title: "If-Else Examples",
              description: "Using conditional statements",
              code: `#include <iostream>
using namespace std;

int main() {
    int age = 20;
    
    if (age >= 18) {
        cout << "You are an adult" << endl;
    } else {
        cout << "You are a minor" << endl;
    }
    
    int score = 85;
    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else {
        cout << "Grade: C or below" << endl;
    }
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the if statement",
              type: "fill",
              starterCode: `___ (x > 0) {
    cout << "Positive";
}`,
              answer: "if",
            },
            {
              question: "What keyword provides an alternative when if condition is false?",
              type: "fill",
              starterCode: `if (x > 0) { }
___ { cout << "Negative"; }`,
              answer: "else",
            },
            {
              question: "What will be printed if age is 15?",
              type: "predict",
              starterCode: `int age = 15;
if (age >= 18) {
    cout << "Adult";
} else {
    cout << "Minor";
}`,
              answer: "Minor",
            },
          ],
        },
        {
          id: "cpp-switch",
          title: "C++ Switch",
          explanation: "The switch statement provides an efficient way to handle multiple conditions based on a single variable's value. It's often cleaner than multiple if-else statements when comparing one variable against multiple constant values. Each case represents a possible value, and the break statement prevents fall-through to the next case. The default case handles values that don't match any case. Switch works with integers, characters, and enums.",
          syntax: "switch (variable) {\n  case value1: code; break;\n  case value2: code; break;\n  default: code;\n}",
          examples: [
            {
              title: "Switch Statement Example",
              description: "Using switch for multiple conditions",
              code: `#include <iostream>
using namespace std;

int main() {
    int day = 3;
    
    switch (day) {
        case 1:
            cout << "Monday" << endl;
            break;
        case 2:
            cout << "Tuesday" << endl;
            break;
        case 3:
            cout << "Wednesday" << endl;
            break;
        default:
            cout << "Other day" << endl;
    }
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the switch statement",
              type: "fill",
              starterCode: `___ (choice) {
    case 1: break;
}`,
              answer: "switch",
            },
            {
              question: "What keyword prevents fall-through to the next case?",
              type: "fill",
              starterCode: `case 1:
    cout << "One";
    ___;`,
              answer: "break",
            },
            {
              question: "What will be printed if day is 2?",
              type: "predict",
              starterCode: `int day = 2;
switch (day) {
    case 1: cout << "Mon"; break;
    case 2: cout << "Tue"; break;
    default: cout << "Other";
}`,
              answer: "Tue",
            },
          ],
        },
        {
          id: "cpp-while-loop",
          title: "C++ While Loop",
          explanation: "The while loop repeatedly executes a block of code as long as a condition is true. It's useful when you don't know in advance how many times the loop should run. The condition is checked before each iteration. If the condition is false initially, the loop body never executes. Be careful to ensure the condition eventually becomes false to avoid infinite loops.",
          syntax: "while (condition) {\n  // code to execute\n}\nThe loop continues while the condition is true.",
          examples: [
            {
              title: "While Loop Example",
              description: "Using while loop to repeat code",
              code: `#include <iostream>
using namespace std;

int main() {
    int i = 1;
    
    while (i <= 5) {
        cout << i << " ";
        i++;
    }
    cout << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the while loop",
              type: "fill",
              starterCode: `___ (i < 10) {
    cout << i;
    i++;
}`,
              answer: "while",
            },
            {
              question: "What happens if the while condition is false initially?",
              type: "predict",
              starterCode: `int i = 10;
while (i < 5) {
    cout << i;
}`,
              answer: "The loop body never executes",
            },
            {
              question: "What is the output of this loop?",
              type: "predict",
              starterCode: `int i = 1;
while (i <= 3) {
    cout << i << " ";
    i++;
}`,
              answer: "1 2 3",
            },
          ],
        },
        {
          id: "cpp-for-loop",
          title: "C++ For Loop",
          explanation: "The for loop is ideal when you know how many times you want to repeat a block of code. It combines initialization, condition checking, and increment/decrement in one line. The for loop has three parts: initialization (executed once), condition (checked before each iteration), and increment/decrement (executed after each iteration). This makes it more compact and readable than while loops for counting iterations.",
          syntax: "for (initialization; condition; increment) {\n  // code to execute\n}\nExample: for (int i = 0; i < 10; i++)",
          examples: [
            {
              title: "For Loop Example",
              description: "Using for loop for iteration",
              code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // Sum of numbers 1 to 10
    int sum = 0;
    for (int j = 1; j <= 10; j++) {
        sum += j;
    }
    cout << "Sum: " << sum << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the for loop to iterate 5 times",
              type: "fill",
              starterCode: `___ (int i = 0; i < 5; i++) {
    cout << i;
}`,
              answer: "for",
            },
            {
              question: "What are the three parts of a for loop?",
              type: "fill",
              starterCode: `for (___; condition; increment) { }`,
              answer: "initialization",
            },
            {
              question: "What is the output of this for loop?",
              type: "predict",
              starterCode: `for (int i = 0; i < 3; i++) {
    cout << i << " ";
}`,
              answer: "0 1 2",
            },
          ],
        },
        {
          id: "cpp-break-continue",
          title: "C++ Break / Continue",
          explanation: "The break statement immediately exits a loop or switch statement, transferring control to the statement following the loop. The continue statement skips the rest of the current iteration and moves to the next iteration of the loop. Break is useful for exiting early when a condition is met, while continue is useful for skipping certain iterations. Both statements only affect the innermost loop they're in.",
          syntax: "break; - exits the loop immediately\ncontinue; - skips to next iteration\nBoth can be used in for, while, and do-while loops.",
          examples: [
            {
              title: "Break and Continue Examples",
              description: "Using break and continue in loops",
              code: `#include <iostream>
using namespace std;

int main() {
    // Using break
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            break;  // Exit loop when i is 5
        }
        cout << i << " ";
    }
    cout << endl;
    
    // Using continue
    for (int j = 1; j <= 5; j++) {
        if (j == 3) {
            continue;  // Skip iteration when j is 3
        }
        cout << j << " ";
    }
    cout << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What statement exits a loop immediately?",
              type: "fill",
              starterCode: `if (x == 5) {
    ___;
}`,
              answer: "break",
            },
            {
              question: "What statement skips to the next iteration?",
              type: "fill",
              starterCode: `if (x % 2 == 0) {
    ___;
}`,
              answer: "continue",
            },
            {
              question: "What is the output of this code?",
              type: "predict",
              starterCode: `for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    cout << i << " ";
}`,
              answer: "1 2 4 5",
            },
          ],
        },
        {
          id: "cpp-arrays",
          title: "C++ Arrays",
          explanation: "Arrays are collections of elements of the same data type stored in contiguous memory locations. Arrays have a fixed size that must be specified at declaration. Elements are accessed using an index starting from 0. Arrays are useful for storing multiple values of the same type. C++ also provides array-like containers like vectors from the STL that are more flexible. Arrays can be initialized at declaration or filled later.",
          syntax: "type arrayName[size];\nExample: int numbers[5];\nAccess: arrayName[index]\nInitialize: int arr[3] = {1, 2, 3};",
          examples: [
            {
              title: "Array Examples",
              description: "Working with arrays",
              code: `#include <iostream>
using namespace std;

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    
    // Access and print elements
    cout << "First element: " << numbers[0] << endl;
    cout << "Third element: " << numbers[2] << endl;
    
    // Modify element
    numbers[1] = 25;
    
    // Print all elements
    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the array declaration",
              type: "fill",
              starterCode: `int ___[5];`,
              answer: "numbers",
            },
            {
              question: "What is the index of the first element in an array?",
              type: "fill",
              starterCode: `int arr[5];
int first = arr[___];`,
              answer: "0",
            },
            {
              question: "What is the value of arr[2]?",
              type: "predict",
              starterCode: `int arr[5] = {10, 20, 30, 40, 50};
cout << arr[2];`,
              answer: "30",
            },
          ],
        },
        {
          id: "cpp-structures",
          title: "C++ Structures",
          explanation: "Structures (struct) allow you to group related data of different types under a single name. A structure is a user-defined data type that can contain multiple members (variables) of different types. Structures are useful for representing real-world entities like a person (name, age, address) or a point (x, y coordinates). Members are accessed using the dot operator (.). Structures are similar to classes but with public access by default.",
          syntax: "struct StructName {\n  type1 member1;\n  type2 member2;\n};\nCreate: StructName variable;\nAccess: variable.member",
          examples: [
            {
              title: "Structure Example",
              description: "Creating and using structures",
              code: `#include <iostream>
#include <string>
using namespace std;

struct Person {
    string name;
    int age;
    double height;
};

int main() {
    Person p1;
    p1.name = "John";
    p1.age = 25;
    p1.height = 5.9;
    
    cout << "Name: " << p1.name << endl;
    cout << "Age: " << p1.age << endl;
    cout << "Height: " << p1.height << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the structure definition",
              type: "fill",
              starterCode: `___ Point {
    int x;
    int y;
};`,
              answer: "struct",
            },
            {
              question: "What operator is used to access structure members?",
              type: "fill",
              starterCode: `Person p;
p.___name = "Alice";`,
              answer: ".",
            },
            {
              question: "How do you access the age member of a Person structure?",
              type: "complete",
              starterCode: `Person p;
int age = p.___;`,
              answer: "age",
            },
          ],
        },
        {
          id: "cpp-enums",
          title: "C++ Enums",
          explanation: "Enumerations (enum) are user-defined types that consist of named integer constants. They make code more readable by using meaningful names instead of magic numbers. Enums are useful for representing a fixed set of related values like days of the week, colors, or states. By default, enum values start at 0 and increment by 1, but you can assign custom values. Enums improve code maintainability and reduce errors from using incorrect numeric values.",
          syntax: "enum EnumName { value1, value2, value3 };\nCreate: EnumName variable = value1;\nValues are integers starting from 0",
          examples: [
            {
              title: "Enum Example",
              description: "Using enumerations",
              code: `#include <iostream>
using namespace std;

enum Day {
    Monday,    // 0
    Tuesday,   // 1
    Wednesday, // 2
    Thursday,  // 3
    Friday     // 4
};

int main() {
    Day today = Wednesday;
    
    cout << "Today is day number: " << today << endl;
    
    if (today == Wednesday) {
        cout << "It's Wednesday!" << endl;
    }
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the enum definition",
              type: "fill",
              starterCode: `___ Color {
    Red, Green, Blue
};`,
              answer: "enum",
            },
            {
              question: "What is the default value of the first enum element?",
              type: "fill",
              starterCode: `enum Status { Active, Inactive };
// Active has value ___`,
              answer: "0",
            },
            {
              question: "What is the value of Tuesday?",
              type: "predict",
              starterCode: `enum Day { Monday, Tuesday, Wednesday };
cout << Tuesday;`,
              answer: "1",
            },
          ],
        },
        {
          id: "cpp-references",
          title: "C++ References",
          explanation: "A reference is an alias for an existing variable. Once a reference is initialized to a variable, it cannot be changed to refer to another variable. References must be initialized when declared. They provide an alternative way to access variables and are often used in function parameters to avoid copying large objects. References are safer than pointers because they cannot be null and cannot be reassigned.",
          syntax: "type& refName = variableName;\nExample: int& ref = x;\nReferences must be initialized at declaration and cannot be reassigned.",
          examples: [
            {
              title: "Reference Example",
              description: "Using references as aliases",
              code: `#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int& ref = x;  // ref is a reference to x
    
    cout << "x = " << x << endl;
    cout << "ref = " << ref << endl;
    
    ref = 20;  // Modifying ref also modifies x
    cout << "After ref = 20:" << endl;
    cout << "x = " << x << endl;
    cout << "ref = " << ref << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the reference declaration",
              type: "fill",
              starterCode: `int x = 5;
int___ ref = x;`,
              answer: "&",
            },
            {
              question: "Can a reference be reassigned to another variable? (yes/no)",
              type: "fill",
              starterCode: `// References ___ be reassigned`,
              answer: "cannot",
            },
            {
              question: "What happens when you modify a reference?",
              type: "predict",
              starterCode: `int x = 10;
int& ref = x;
ref = 20;
cout << x;`,
              answer: "20",
            },
          ],
        },
        {
          id: "cpp-pointers",
          title: "C++ Pointers",
          explanation: "Pointers are variables that store memory addresses of other variables. They allow direct manipulation of memory and are powerful but require careful use. Pointers are declared with the * operator and can be dereferenced with * to access the value at the address. Pointers can be reassigned to point to different variables and can be null. They are essential for dynamic memory allocation, passing by reference, and working with arrays efficiently.",
          syntax: "type* ptrName = &variableName;\nDeclare: int* ptr;\nGet address: &variable\nDereference: *ptr\nNull pointer: nullptr",
          examples: [
            {
              title: "Pointer Example",
              description: "Working with pointers",
              code: `#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int* ptr = &x;  // ptr stores the address of x
    
    cout << "Value of x: " << x << endl;
    cout << "Address of x: " << &x << endl;
    cout << "Value of ptr: " << ptr << endl;
    cout << "Value at ptr: " << *ptr << endl;
    
    *ptr = 20;  // Modify x through pointer
    cout << "After *ptr = 20, x = " << x << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the pointer declaration",
              type: "fill",
              starterCode: `int x = 5;
int___ ptr = &x;`,
              answer: "*",
            },
            {
              question: "What operator gets the address of a variable?",
              type: "fill",
              starterCode: `int x = 10;
int* ptr = ___x;`,
              answer: "&",
            },
            {
              question: "What is the value of x after this code?",
              type: "predict",
              starterCode: `int x = 10;
int* ptr = &x;
*ptr = 30;
cout << x;`,
              answer: "30",
            },
          ],
        },
        {
          id: "cpp-memory-management",
          title: "C++ Memory Management",
          explanation: "C++ provides manual memory management through new and delete operators. new allocates memory dynamically on the heap and returns a pointer. delete deallocates memory allocated with new. It's crucial to match every new with a delete to prevent memory leaks. Modern C++ also provides smart pointers (unique_ptr, shared_ptr) that automatically manage memory. Proper memory management prevents memory leaks and ensures efficient resource usage.",
          syntax: "Allocate: type* ptr = new type;\nDeallocate: delete ptr;\nArray: type* arr = new type[size];\nDelete array: delete[] arr;\nAlways match new with delete.",
          examples: [
            {
              title: "Memory Management Example",
              description: "Dynamic memory allocation",
              code: `#include <iostream>
using namespace std;

int main() {
    // Allocate single integer
    int* ptr = new int;
    *ptr = 42;
    cout << "Value: " << *ptr << endl;
    delete ptr;  // Free memory
    
    // Allocate array
    int* arr = new int[5];
    for (int i = 0; i < 5; i++) {
        arr[i] = i * 10;
    }
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    delete[] arr;  // Free array memory
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator allocates memory dynamically?",
              type: "fill",
              starterCode: `int* ptr = ___ int;`,
              answer: "new",
            },
            {
              question: "What operator deallocates memory?",
              type: "fill",
              starterCode: `int* ptr = new int;
___ ptr;`,
              answer: "delete",
            },
            {
              question: "What operator deallocates an array?",
              type: "fill",
              starterCode: `int* arr = new int[10];
___[] arr;`,
              answer: "delete",
            },
          ],
        },
      ],
    },
    {
      id: "functions",
      title: "C++ Functions",
      topics: [
        {
          id: "cpp-functions",
          title: "C++ Functions",
          explanation: "Functions are reusable blocks of code that perform specific tasks. They help organize code, avoid repetition, and make programs easier to understand and maintain. A function has a name, return type, parameters (optional), and a body. Functions can return a value or be void (return nothing). Functions must be declared before use, either by defining them before main() or by providing a function prototype. Functions are fundamental to structured programming.",
          syntax: "returnType functionName(parameters) {\n  // code\n  return value;\n}\nCall: functionName(arguments);",
          examples: [
            {
              title: "Function Example",
              description: "Creating and calling functions",
              code: `#include <iostream>
using namespace std;

// Function definition
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    cout << "Sum: " << result << endl;
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the function definition",
              type: "fill",
              starterCode: `int ___ (int x) {
    return x * 2;
}`,
              answer: "multiply",
            },
            {
              question: "What keyword is used to return a value from a function?",
              type: "fill",
              starterCode: `int getValue() {
    ___ 42;
}`,
              answer: "return",
            },
            {
              question: "What is the output of this code?",
              type: "predict",
              starterCode: `int add(int a, int b) {
    return a + b;
}
cout << add(10, 20);`,
              answer: "30",
            },
          ],
        },
        {
          id: "cpp-function-parameters",
          title: "Function Parameters",
          explanation: "Function parameters allow you to pass data into functions. Parameters are variables declared in the function signature. When calling a function, you pass arguments (actual values) that match the parameter types. C++ supports pass-by-value (copies the value), pass-by-reference (uses reference), and pass-by-pointer (uses pointer). Pass-by-reference is efficient for large objects and allows modifying the original variable.",
          syntax: "Pass by value: func(int x)\nPass by reference: func(int& x)\nPass by pointer: func(int* x)\nDefault parameters: func(int x = 10)",
          examples: [
            {
              title: "Function Parameters Example",
              description: "Different parameter passing methods",
              code: `#include <iostream>
using namespace std;

// Pass by value
void incrementByValue(int x) {
    x++;
}

// Pass by reference
void incrementByRef(int& x) {
    x++;
}

int main() {
    int num = 5;
    
    incrementByValue(num);
    cout << "After pass by value: " << num << endl;
    
    incrementByRef(num);
    cout << "After pass by reference: " << num << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the function with a reference parameter",
              type: "fill",
              starterCode: `void modify(int___ x) {
    x = 10;
}`,
              answer: "&",
            },
            {
              question: "What happens to the original variable when passed by value?",
              type: "fill",
              starterCode: `// The original variable is ___`,
              answer: "unchanged",
            },
            {
              question: "What is the value of x after this function call?",
              type: "predict",
              starterCode: `void change(int& x) { x = 100; }
int x = 5;
change(x);
cout << x;`,
              answer: "100",
            },
          ],
        },
        {
          id: "cpp-function-overloading",
          title: "Function Overloading",
          explanation: "Function overloading allows multiple functions to have the same name but different parameters (different number or types). The compiler determines which function to call based on the arguments provided. Overloading provides flexibility and allows functions to work with different data types. Functions can be overloaded by number of parameters, types of parameters, or both. Return type alone cannot be used for overloading.",
          syntax: "Same function name, different parameters:\nint add(int a, int b)\nint add(int a, int b, int c)\ndouble add(double a, double b)",
          examples: [
            {
              title: "Function Overloading Example",
              description: "Multiple functions with the same name",
              code: `#include <iostream>
using namespace std;

// Overloaded functions
int add(int a, int b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

double add(double a, double b) {
    return a + b;
}

int main() {
    cout << "add(5, 3) = " << add(5, 3) << endl;
    cout << "add(1, 2, 3) = " << add(1, 2, 3) << endl;
    cout << "add(2.5, 3.7) = " << add(2.5, 3.7) << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What feature allows functions with the same name but different parameters?",
              type: "fill",
              starterCode: `// Function ___`,
              answer: "overloading",
            },
            {
              question: "Can functions be overloaded based on return type alone? (yes/no)",
              type: "fill",
              starterCode: `// Functions ___ be overloaded by return type alone`,
              answer: "cannot",
            },
            {
              question: "Which function is called: add(5, 3)?",
              type: "predict",
              starterCode: `int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }
cout << add(5, 3);`,
              answer: "The int version (returns 8)",
            },
          ],
        },
        {
          id: "cpp-scope",
          title: "Scope",
          explanation: "Scope determines where variables and functions are accessible in your program. Local scope variables are declared inside a function or block and are only accessible within that block. Global scope variables are declared outside all functions and are accessible throughout the program. Variables in inner scopes can shadow (hide) variables in outer scopes with the same name. Understanding scope is crucial for avoiding naming conflicts and managing variable lifetime.",
          syntax: "Local scope: variable declared inside function\nGlobal scope: variable declared outside functions\nBlock scope: variable declared inside { }",
          examples: [
            {
              title: "Scope Example",
              description: "Understanding variable scope",
              code: `#include <iostream>
using namespace std;

int globalVar = 10;  // Global scope

int main() {
    int localVar = 20;  // Local scope
    
    cout << "Global: " << globalVar << endl;
    cout << "Local: " << localVar << endl;
    
    {
        int blockVar = 30;  // Block scope
        cout << "Block: " << blockVar << endl;
    }
    
    // blockVar is not accessible here
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Where is a variable declared inside a function accessible?",
              type: "fill",
              starterCode: `// It has ___ scope`,
              answer: "local",
            },
            {
              question: "What scope does a variable declared outside all functions have?",
              type: "fill",
              starterCode: `int x = 5;  // ___ scope`,
              answer: "global",
            },
            {
              question: "What is the output?",
              type: "predict",
              starterCode: `int x = 10;
{
    int x = 20;
    cout << x;
}
cout << x;`,
              answer: "2010",
            },
          ],
        },
        {
          id: "cpp-recursion",
          title: "Recursion",
          explanation: "Recursion is a technique where a function calls itself to solve a problem. A recursive function must have a base case (stopping condition) to prevent infinite recursion. Recursion is useful for problems that can be broken down into smaller, similar subproblems, such as calculating factorials, Fibonacci numbers, or traversing tree structures. While elegant, recursion can be less efficient than iteration for some problems due to function call overhead.",
          syntax: "returnType function() {\n  if (baseCase) return value;\n  return function();  // Recursive call\n}",
          examples: [
            {
              title: "Recursion Example",
              description: "Calculating factorial using recursion",
              code: `#include <iostream>
using namespace std;

int factorial(int n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    cout << "Factorial of " << num << " = " << factorial(num) << endl;
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is a function calling itself called?",
              type: "fill",
              starterCode: `// This is called ___`,
              answer: "recursion",
            },
            {
              question: "What must a recursive function have to stop?",
              type: "fill",
              starterCode: `// A ___ case`,
              answer: "base",
            },
            {
              question: "What is the result of factorial(4)?",
              type: "predict",
              starterCode: `int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
cout << factorial(4);`,
              answer: "24",
            },
          ],
        },
        {
          id: "cpp-lambda-functions",
          title: "Lambda Functions",
          explanation: "Lambda functions (also called lambda expressions) are anonymous functions that can be defined inline. They were introduced in C++11 and are useful for short, one-time-use functions, especially with algorithms like for_each, sort, and find_if. Lambdas can capture variables from their surrounding scope by value or by reference. They provide a concise way to define function objects without creating separate named functions.",
          syntax: "[capture](parameters) -> returnType { body }\nCapture: [=] by value, [&] by reference, [x, &y] specific\nExample: [](int x) { return x * 2; }",
          examples: [
            {
              title: "Lambda Function Example",
              description: "Using lambda expressions",
              code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> numbers = {1, 2, 3, 4, 5};
    
    // Lambda to double each number
    for_each(numbers.begin(), numbers.end(), 
             [](int& n) { n *= 2; });
    
    // Lambda to print
    for_each(numbers.begin(), numbers.end(),
             [](int n) { cout << n << " "; });
    cout << endl;
    
    // Lambda with capture
    int multiplier = 3;
    for_each(numbers.begin(), numbers.end(),
             [multiplier](int& n) { n *= multiplier; });
    
    for_each(numbers.begin(), numbers.end(),
             [](int n) { cout << n << " "; });
    cout << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What are anonymous inline functions called?",
              type: "fill",
              starterCode: `// ___ functions`,
              answer: "lambda",
            },
            {
              question: "Complete the lambda to capture by value",
              type: "fill",
              starterCode: `int x = 5;
[___](int n) { return n + x; }`,
              answer: "=",
            },
            {
              question: "What does this lambda do?",
              type: "predict",
              starterCode: `[](int x) { return x * 2; }(5)`,
              answer: "Returns 10 (doubles the input)",
            },
          ],
        },
      ],
    },
    {
      id: "oop",
      title: "C++ OOP",
      topics: [
        {
          id: "cpp-classes-objects",
          title: "C++ Classes / Objects",
          explanation: "Classes are user-defined data types that encapsulate data (member variables) and functions (member functions/methods) together. An object is an instance of a class. Classes are the foundation of object-oriented programming in C++. They allow you to model real-world entities and organize code logically. Classes provide data abstraction, encapsulation, and can be used to create multiple objects with the same structure but different data.",
          syntax: "class ClassName {\n  accessSpecifier:\n    memberVariables;\n    memberFunctions();\n};\nCreate object: ClassName objectName;",
          examples: [
            {
              title: "Class and Object Example",
              description: "Creating a class and using objects",
              code: `#include <iostream>
#include <string>
using namespace std;

class Car {
public:
    string brand;
    string model;
    int year;
    
    void displayInfo() {
        cout << brand << " " << model << " (" << year << ")" << endl;
    }
};

int main() {
    Car car1;
    car1.brand = "Toyota";
    car1.model = "Camry";
    car1.year = 2020;
    
    car1.displayInfo();
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Complete the class definition",
              type: "fill",
              starterCode: `___ MyClass {
public:
    int value;
};`,
              answer: "class",
            },
            {
              question: "What is an instance of a class called?",
              type: "fill",
              starterCode: `Car myCar;  // myCar is an ___`,
              answer: "object",
            },
            {
              question: "How do you access a member variable of an object?",
              type: "complete",
              starterCode: `Car car;
car.___brand = "Toyota";`,
              answer: ".",
            },
          ],
        },
        {
          id: "cpp-constructors",
          title: "Constructors",
          explanation: "Constructors are special member functions that are automatically called when an object is created. They have the same name as the class and no return type. Constructors initialize object data members and can take parameters. Default constructors take no parameters, while parameterized constructors accept arguments. Copy constructors create objects by copying another object. Constructors ensure objects are properly initialized before use.",
          syntax: "ClassName() { }  // Default constructor\nClassName(parameters) { }  // Parameterized constructor\nClassName(const ClassName& obj) { }  // Copy constructor",
          examples: [
            {
              title: "Constructor Example",
              description: "Using constructors to initialize objects",
              code: `#include <iostream>
#include <string>
using namespace std;

class Person {
private:
    string name;
    int age;
    
public:
    // Default constructor
    Person() {
        name = "Unknown";
        age = 0;
    }
    
    // Parameterized constructor
    Person(string n, int a) {
        name = n;
        age = a;
    }
    
    void display() {
        cout << name << " is " << age << " years old" << endl;
    }
};

int main() {
    Person p1;  // Default constructor
    Person p2("John", 25);  // Parameterized constructor
    
    p1.display();
    p2.display();
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What special function is called when an object is created?",
              type: "fill",
              starterCode: `// ___`,
              answer: "constructor",
            },
            {
              question: "What is the name of a constructor?",
              type: "fill",
              starterCode: `// Same as the ___ name`,
              answer: "class",
            },
            {
              question: "How many parameters does a default constructor take?",
              type: "fill",
              starterCode: `// Default constructor takes ___ parameters`,
              answer: "zero",
            },
          ],
        },
        {
          id: "cpp-class-methods",
          title: "Class Methods",
          explanation: "Class methods (also called member functions) are functions defined inside a class. They can access all members (variables and functions) of the class. Methods can be defined inside the class (inline) or outside using the scope resolution operator (::). Methods can be public (accessible from outside), private (only accessible within the class), or protected. Methods allow objects to perform actions and manipulate their data.",
          syntax: "Inside class: void method() { }\nOutside class: void ClassName::method() { }\nCall: object.method();",
          examples: [
            {
              title: "Class Methods Example",
              description: "Defining and using class methods",
              code: `#include <iostream>
using namespace std;

class Calculator {
private:
    double result;
    
public:
    Calculator() {
        result = 0;
    }
    
    void add(double x) {
        result += x;
    }
    
    void subtract(double x) {
        result -= x;
    }
    
    double getResult() {
        return result;
    }
    
    void display() {
        cout << "Result: " << result << endl;
    }
};

int main() {
    Calculator calc;
    calc.add(10);
    calc.add(5);
    calc.subtract(3);
    calc.display();
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What are functions inside a class called?",
              type: "fill",
              starterCode: `// Class ___`,
              answer: "methods",
            },
            {
              question: "What operator is used to define methods outside the class?",
              type: "fill",
              starterCode: `void MyClass::___method() { }`,
              answer: "::",
            },
            {
              question: "How do you call a method on an object?",
              type: "complete",
              starterCode: `Car car;
car.___start();`,
              answer: ".",
            },
          ],
        },
        {
          id: "cpp-access-specifiers",
          title: "Access Specifiers",
          explanation: "Access specifiers control the visibility and accessibility of class members. public members are accessible from anywhere in the program. private members are only accessible within the class itself. protected members are accessible within the class and its derived classes. By default, class members are private. Access specifiers enable encapsulation by hiding implementation details and exposing only necessary interfaces.",
          syntax: "class ClassName {\npublic:\n  // Accessible everywhere\nprivate:\n  // Accessible only in class\nprotected:\n  // Accessible in class and derived classes\n};",
          examples: [
            {
              title: "Access Specifiers Example",
              description: "Using different access levels",
              code: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    double balance;  // Private - only accessible in class
    
public:
    string accountHolder;  // Public - accessible everywhere
    
    BankAccount(string name, double initialBalance) {
        accountHolder = name;
        balance = initialBalance;
    }
    
    void deposit(double amount) {
        balance += amount;
    }
    
    double getBalance() {
        return balance;  // Can access private member
    }
};

int main() {
    BankAccount account("John", 1000);
    account.accountHolder = "Jane";  // OK - public
    account.deposit(500);  // OK - public method
    // account.balance = 2000;  // ERROR - private member
    
    cout << account.accountHolder << ": $" << account.getBalance() << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What access specifier makes members accessible everywhere?",
              type: "fill",
              starterCode: `___:
    int value;`,
              answer: "public",
            },
            {
              question: "What access specifier makes members only accessible in the class?",
              type: "fill",
              starterCode: `___:
    int secret;`,
              answer: "private",
            },
            {
              question: "Can you access a private member from outside the class? (yes/no)",
              type: "fill",
              starterCode: `// Private members ___ be accessed from outside`,
              answer: "cannot",
            },
          ],
        },
        {
          id: "cpp-encapsulation",
          title: "Encapsulation",
          explanation: "Encapsulation is the bundling of data and methods that operate on that data within a single unit (class). It hides internal implementation details and exposes only what's necessary through a public interface. Encapsulation is achieved by making data members private and providing public methods (getters and setters) to access and modify them. This protects data from unauthorized access and modification, making code more secure and maintainable.",
          syntax: "Private data + Public methods = Encapsulation\nGetter: type getMember() { return member; }\nSetter: void setMember(type value) { member = value; }",
          examples: [
            {
              title: "Encapsulation Example",
              description: "Protecting data with encapsulation",
              code: `#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int age;
    double gpa;
    
public:
    // Getter methods
    string getName() {
        return name;
    }
    
    int getAge() {
        return age;
    }
    
    double getGPA() {
        return gpa;
    }
    
    // Setter methods with validation
    void setName(string n) {
        name = n;
    }
    
    void setAge(int a) {
        if (a > 0 && a < 150) {
            age = a;
        }
    }
    
    void setGPA(double g) {
        if (g >= 0.0 && g <= 4.0) {
            gpa = g;
        }
    }
    
    void display() {
        cout << name << ", Age: " << age << ", GPA: " << gpa << endl;
    }
};

int main() {
    Student s;
    s.setName("Alice");
    s.setAge(20);
    s.setGPA(3.8);
    s.display();
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What principle bundles data and methods together?",
              type: "fill",
              starterCode: `// ___`,
              answer: "encapsulation",
            },
            {
              question: "What methods are used to access private data?",
              type: "fill",
              starterCode: `// ___ and setters`,
              answer: "getters",
            },
            {
              question: "Why is encapsulation important?",
              type: "fill",
              starterCode: `// It protects data from ___ access`,
              answer: "unauthorized",
            },
          ],
        },
        {
          id: "cpp-friend-functions",
          title: "Friend Functions",
          explanation: "Friend functions are functions that are not members of a class but have access to its private and protected members. A function is declared as a friend inside the class using the friend keyword. Friend functions can be useful when you need external functions to access private data, but they break encapsulation and should be used sparingly. Friend classes can also be declared, giving all methods of that class access.",
          syntax: "friend returnType functionName(parameters);\nDeclared inside class, defined outside\nCan access private/protected members",
          examples: [
            {
              title: "Friend Function Example",
              description: "Using friend functions to access private members",
              code: `#include <iostream>
using namespace std;

class Rectangle {
private:
    int width;
    int height;
    
public:
    Rectangle(int w, int h) {
        width = w;
        height = h;
    }
    
    // Friend function declaration
    friend void displayArea(Rectangle r);
    friend int calculatePerimeter(Rectangle r);
};

// Friend function definition
void displayArea(Rectangle r) {
    // Can access private members
    int area = r.width * r.height;
    cout << "Area: " << area << endl;
}

int calculatePerimeter(Rectangle r) {
    // Can access private members
    return 2 * (r.width + r.height);
}

int main() {
    Rectangle rect(5, 3);
    displayArea(rect);
    cout << "Perimeter: " << calculatePerimeter(rect) << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What keyword makes a function a friend of a class?",
              type: "fill",
              starterCode: `___ void helper(MyClass obj);`,
              answer: "friend",
            },
            {
              question: "Can friend functions access private members? (yes/no)",
              type: "fill",
              starterCode: `// Friend functions ___ access private members`,
              answer: "can",
            },
            {
              question: "Are friend functions members of the class? (yes/no)",
              type: "fill",
              starterCode: `// Friend functions ___ members of the class`,
              answer: "are not",
            },
          ],
        },
        {
          id: "cpp-inheritance",
          title: "Inheritance",
          explanation: "Inheritance allows a class (derived/child class) to inherit properties and methods from another class (base/parent class). This promotes code reuse and establishes an 'is-a' relationship. The derived class can add new members or override inherited methods. Inheritance is declared using a colon (:) followed by the access specifier and base class name. C++ supports single, multiple, multilevel, and hierarchical inheritance.",
          syntax: "class DerivedClass : accessSpecifier BaseClass {\n  // new members\n};\nAccess: public, protected, private inheritance",
          examples: [
            {
              title: "Inheritance Example",
              description: "Creating derived classes",
              code: `#include <iostream>
#include <string>
using namespace std;

// Base class
class Animal {
public:
    string name;
    
    void eat() {
        cout << name << " is eating" << endl;
    }
    
    void sleep() {
        cout << name << " is sleeping" << endl;
    }
};

// Derived class
class Dog : public Animal {
public:
    void bark() {
        cout << name << " is barking" << endl;
    }
};

// Another derived class
class Cat : public Animal {
public:
    void meow() {
        cout << name << " is meowing" << endl;
    }
};

int main() {
    Dog dog;
    dog.name = "Buddy";
    dog.eat();
    dog.sleep();
    dog.bark();
    
    Cat cat;
    cat.name = "Whiskers";
    cat.eat();
    cat.meow();
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What allows a class to inherit from another class?",
              type: "fill",
              starterCode: `// ___`,
              answer: "inheritance",
            },
            {
              question: "Complete the inheritance syntax",
              type: "fill",
              starterCode: `class Child ___ public Parent { };`,
              answer: ":",
            },
            {
              question: "What relationship does inheritance establish?",
              type: "fill",
              starterCode: `// An "___" relationship`,
              answer: "is-a",
            },
          ],
        },
        {
          id: "cpp-polymorphism",
          title: "Polymorphism",
          explanation: "Polymorphism means 'many forms' and allows objects of different classes to be treated through the same interface. In C++, polymorphism is achieved through virtual functions and function overriding. When a base class function is declared virtual, derived classes can override it. Polymorphism enables runtime binding (late binding) where the correct function is called based on the actual object type, not the pointer/reference type. This is essential for creating flexible, extensible code.",
          syntax: "virtual returnType function() { }  // Base class\nreturnType function() override { }  // Derived class\nUse base class pointer/reference to call",
          examples: [
            {
              title: "Polymorphism Example",
              description: "Using virtual functions for polymorphism",
              code: `#include <iostream>
using namespace std;

// Base class
class Shape {
public:
    virtual void draw() {
        cout << "Drawing a shape" << endl;
    }
    
    virtual double area() {
        return 0;
    }
};

// Derived class
class Circle : public Shape {
private:
    double radius;
    
public:
    Circle(double r) : radius(r) {}
    
    void draw() override {
        cout << "Drawing a circle" << endl;
    }
    
    double area() override {
        return 3.14159 * radius * radius;
    }
};

// Another derived class
class Rectangle : public Shape {
private:
    double width, height;
    
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    
    void draw() override {
        cout << "Drawing a rectangle" << endl;
    }
    
    double area() override {
        return width * height;
    }
};

int main() {
    Circle circle(5);
    Rectangle rect(4, 6);
    
    Shape* shape1 = &circle;
    Shape* shape2 = &rect;
    
    shape1->draw();
    cout << "Area: " << shape1->area() << endl;
    
    shape2->draw();
    cout << "Area: " << shape2->area() << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What keyword makes a function polymorphic?",
              type: "fill",
              starterCode: `___ void draw() { }`,
              answer: "virtual",
            },
            {
              question: "What keyword indicates a function is overriding a base class function?",
              type: "fill",
              starterCode: `void draw() ___ { }`,
              answer: "override",
            },
            {
              question: "What does polymorphism allow?",
              type: "fill",
              starterCode: `// Objects of different types to be treated through the same ___`,
              answer: "interface",
            },
          ],
        },
        {
          id: "cpp-templates",
          title: "Templates",
          explanation: "Templates allow you to write generic code that works with different data types. They enable code reuse without sacrificing type safety. Function templates create functions that can work with any type, while class templates create classes that can work with any type. Templates are resolved at compile-time through template instantiation. They are powerful for creating generic algorithms and data structures like those in the STL.",
          syntax: "template <typename T>\nreturnType function(T parameter) { }\n\ntemplate <class T>\nclass ClassName { };",
          examples: [
            {
              title: "Template Example",
              description: "Using function and class templates",
              code: `#include <iostream>
using namespace std;

// Function template
template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

// Class template
template <class T>
class Stack {
private:
    T arr[100];
    int top;
    
public:
    Stack() : top(-1) {}
    
    void push(T value) {
        arr[++top] = value;
    }
    
    T pop() {
        return arr[top--];
    }
    
    bool isEmpty() {
        return top == -1;
    }
};

int main() {
    // Using function template
    cout << "Max of 5 and 3: " << maximum(5, 3) << endl;
    cout << "Max of 2.5 and 3.7: " << maximum(2.5, 3.7) << endl;
    
    // Using class template
    Stack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    cout << "Popped: " << intStack.pop() << endl;
    
    Stack<string> stringStack;
    stringStack.push("Hello");
    stringStack.push("World");
    cout << "Popped: " << stringStack.pop() << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What feature allows code to work with different data types?",
              type: "fill",
              starterCode: `// ___`,
              answer: "templates",
            },
            {
              question: "Complete the template declaration",
              type: "fill",
              starterCode: `template <___ T>
T add(T a, T b) { }`,
              answer: "typename",
            },
            {
              question: "When are templates resolved?",
              type: "fill",
              starterCode: `// At ___ time`,
              answer: "compile",
            },
          ],
        },
      ],
    },
    {
      id: "files-date",
      title: "C++ Files & Date",
      topics: [
        {
          id: "cpp-files",
          title: "C++ Files",
          explanation: "File handling in C++ allows you to read from and write to files on disk. The <fstream> library provides classes for file operations: ifstream for reading, ofstream for writing, and fstream for both. Files must be opened before use and closed when done. File operations include reading/writing text and binary data. Proper file handling is essential for data persistence and working with external data sources.",
          syntax: "#include <fstream>\nifstream file(\"filename.txt\");  // Read\nofstream file(\"filename.txt\");  // Write\nfile.close();  // Close file",
          examples: [
            {
              title: "File Operations Example",
              description: "Reading from and writing to files",
              code: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // Writing to a file
    ofstream outFile("data.txt");
    if (outFile.is_open()) {
        outFile << "Hello, World!" << endl;
        outFile << "This is a test file." << endl;
        outFile.close();
        cout << "File written successfully" << endl;
    }
    
    // Reading from a file
    ifstream inFile("data.txt");
    string line;
    if (inFile.is_open()) {
        while (getline(inFile, line)) {
            cout << line << endl;
        }
        inFile.close();
    }
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for file operations?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "fstream",
            },
            {
              question: "What class is used for reading files?",
              type: "fill",
              starterCode: `___ file("data.txt");`,
              answer: "ifstream",
            },
            {
              question: "What method checks if a file is open?",
              type: "fill",
              starterCode: `if (file.___()) { }`,
              answer: "is_open",
            },
          ],
        },
        {
          id: "cpp-date",
          title: "C++ Date",
          explanation: "C++ provides date and time functionality through the <ctime> header (C-style) and <chrono> header (C++11 and later). The <ctime> library provides functions like time(), localtime(), and strftime() for working with dates and times. The <chrono> library offers a more modern, type-safe approach with classes like system_clock, time_point, and duration. Date/time operations are useful for logging, scheduling, and time-based calculations.",
          syntax: "#include <ctime>\ntime_t now = time(0);\nstruct tm* timeinfo = localtime(&now);\nchar buffer[80];\nstrftime(buffer, 80, \"%Y-%m-%d %H:%M:%S\", timeinfo);",
          examples: [
            {
              title: "Date and Time Example",
              description: "Working with dates and times",
              code: `#include <iostream>
#include <ctime>
#include <iomanip>
using namespace std;

int main() {
    // Get current time
    time_t now = time(0);
    
    // Convert to local time
    struct tm* timeinfo = localtime(&now);
    
    // Format and display
    char buffer[80];
    strftime(buffer, 80, "%Y-%m-%d %H:%M:%S", timeinfo);
    cout << "Current date and time: " << buffer << endl;
    
    // Display individual components
    cout << "Year: " << (1900 + timeinfo->tm_year) << endl;
    cout << "Month: " << (1 + timeinfo->tm_mon) << endl;
    cout << "Day: " << timeinfo->tm_mday << endl;
    cout << "Hour: " << timeinfo->tm_hour << endl;
    cout << "Minute: " << timeinfo->tm_min << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for date/time operations?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "ctime",
            },
            {
              question: "What function gets the current time?",
              type: "fill",
              starterCode: `time_t now = ___(0);`,
              answer: "time",
            },
            {
              question: "What function converts time to local time?",
              type: "fill",
              starterCode: `struct tm* info = ___(&now);`,
              answer: "localtime",
            },
          ],
        },
      ],
    },
    {
      id: "errors-exceptions",
      title: "C++ Errors & Exceptions",
      topics: [
        {
          id: "cpp-errors",
          title: "C++ Errors",
          explanation: "Errors in C++ can be categorized into syntax errors (compile-time), runtime errors, and logical errors. Syntax errors prevent compilation and are caught by the compiler. Runtime errors occur during program execution, such as division by zero or accessing invalid memory. Logical errors produce incorrect results but don't crash the program. Understanding different error types helps in debugging and writing robust code. Error handling techniques include return codes, error flags, and exception handling.",
          syntax: "Common errors:\nDivision by zero: x / 0\nNull pointer: *ptr when ptr is null\nArray out of bounds: arr[invalid_index]\nUninitialized variables",
          examples: [
            {
              title: "Error Types Example",
              description: "Understanding different error types",
              code: `#include <iostream>
using namespace std;

int main() {
    // Runtime error example - division by zero
    int a = 10, b = 0;
    // int result = a / b;  // This would cause a runtime error
    
    // Safe division with error checking
    if (b != 0) {
        int result = a / b;
        cout << "Result: " << result << endl;
    } else {
        cout << "Error: Division by zero!" << endl;
    }
    
    // Array bounds checking
    int arr[5] = {1, 2, 3, 4, 5};
    int index = 10;
    if (index >= 0 && index < 5) {
        cout << "Value: " << arr[index] << endl;
    } else {
        cout << "Error: Array index out of bounds!" << endl;
    }
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What type of error prevents compilation?",
              type: "fill",
              starterCode: `// ___ error`,
              answer: "syntax",
            },
            {
              question: "What happens when you divide by zero?",
              type: "fill",
              starterCode: `// ___ error`,
              answer: "runtime",
            },
            {
              question: "What should you check before dividing?",
              type: "fill",
              starterCode: `if (b ___ 0) { }`,
              answer: "!=",
            },
          ],
        },
        {
          id: "cpp-debugging",
          title: "Debugging",
          explanation: "Debugging is the process of finding and fixing errors in code. Common debugging techniques include using print statements (cout) to trace execution, using a debugger to step through code, checking variable values, and understanding error messages. Modern IDEs provide integrated debuggers with features like breakpoints, step-over, step-into, and watch variables. Effective debugging requires systematic thinking, understanding the code flow, and testing with different inputs.",
          syntax: "Debugging techniques:\nPrint statements: cout << \"Debug: \" << variable << endl;\nBreakpoints: Set in IDE debugger\nStep through: Use debugger controls\nCheck values: Inspect variables",
          examples: [
            {
              title: "Debugging Example",
              description: "Using debugging techniques",
              code: `#include <iostream>
using namespace std;

int factorial(int n) {
    // Debug: Print input
    cout << "DEBUG: Calculating factorial of " << n << endl;
    
    if (n <= 1) {
        cout << "DEBUG: Base case reached" << endl;
        return 1;
    }
    
    int result = n * factorial(n - 1);
    // Debug: Print result
    cout << "DEBUG: factorial(" << n << ") = " << result << endl;
    
    return result;
}

int main() {
    int num = 5;
    cout << "Calculating factorial of " << num << endl;
    int result = factorial(num);
    cout << "Result: " << result << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is the process of finding and fixing errors called?",
              type: "fill",
              starterCode: `// ___`,
              answer: "debugging",
            },
            {
              question: "What can you use to trace code execution?",
              type: "fill",
              starterCode: `cout << "___: " << variable;`,
              answer: "DEBUG",
            },
            {
              question: "What feature allows you to pause execution at a specific line?",
              type: "fill",
              starterCode: `// Set a ___`,
              answer: "breakpoint",
            },
          ],
        },
        {
          id: "cpp-exceptions",
          title: "Exceptions",
          explanation: "Exception handling allows programs to respond to exceptional circumstances (errors) gracefully. C++ provides try-catch blocks for exception handling. Code that might throw an exception is placed in a try block. If an exception occurs, it's caught by a catch block. You can throw custom exceptions using the throw keyword. Exception handling prevents program crashes and allows for error recovery. Standard exceptions include runtime_error, logic_error, and their derived classes.",
          syntax: "try {\n  // code that might throw\n  throw exception;\n} catch (exceptionType e) {\n  // handle exception\n}\nthrow runtime_error(\"Error message\");",
          examples: [
            {
              title: "Exception Handling Example",
              description: "Using try-catch for error handling",
              code: `#include <iostream>
#include <stdexcept>
using namespace std;

double divide(double a, double b) {
    if (b == 0) {
        throw runtime_error("Division by zero!");
    }
    return a / b;
}

int main() {
    try {
        double result1 = divide(10, 2);
        cout << "Result: " << result1 << endl;
        
        double result2 = divide(10, 0);  // This will throw
        cout << "Result: " << result2 << endl;
    }
    catch (runtime_error& e) {
        cout << "Error caught: " << e.what() << endl;
    }
    catch (...) {
        cout << "Unknown error occurred" << endl;
    }
    
    cout << "Program continues..." << endl;
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What keyword is used to handle exceptions?",
              type: "fill",
              starterCode: `___ { } catch { }`,
              answer: "try",
            },
            {
              question: "What keyword throws an exception?",
              type: "fill",
              starterCode: `___ runtime_error("Error");`,
              answer: "throw",
            },
            {
              question: "What block catches exceptions?",
              type: "fill",
              starterCode: `try { } ___ (exception& e) { }`,
              answer: "catch",
            },
          ],
        },
        {
          id: "cpp-input-validation",
          title: "Input Validation",
          explanation: "Input validation ensures that user input meets expected criteria before processing. This prevents errors, security vulnerabilities, and unexpected behavior. Validation checks include verifying data types, ranges, formats, and required fields. Common validation techniques include checking for empty input, numeric ranges, string length, and format patterns. Proper input validation is crucial for robust, secure applications.",
          syntax: "Check if input is valid:\nif (cin.fail()) { /* handle error */ }\nCheck range: if (value >= min && value <= max)\nCheck format: Use string methods or regex",
          examples: [
            {
              title: "Input Validation Example",
              description: "Validating user input",
              code: `#include <iostream>
#include <limits>
using namespace std;

int getValidAge() {
    int age;
    
    while (true) {
        cout << "Enter your age (0-120): ";
        cin >> age;
        
        if (cin.fail()) {
            cout << "Invalid input! Please enter a number." << endl;
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\\n');
            continue;
        }
        
        if (age < 0 || age > 120) {
            cout << "Age must be between 0 and 120!" << endl;
            continue;
        }
        
        return age;
    }
}

int main() {
    int age = getValidAge();
    cout << "Valid age entered: " << age << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What is checking user input for correctness called?",
              type: "fill",
              starterCode: `// Input ___`,
              answer: "validation",
            },
            {
              question: "What method checks if input failed?",
              type: "fill",
              starterCode: `if (cin.___()) { }`,
              answer: "fail",
            },
            {
              question: "Why is input validation important?",
              type: "fill",
              starterCode: `// Prevents errors and ___ vulnerabilities`,
              answer: "security",
            },
          ],
        },
      ],
    },
    {
      id: "data-structures-stl",
      title: "C++ Data Structures & STL",
      topics: [
        {
          id: "cpp-data-structures-stl",
          title: "Data Structures & STL",
          explanation: "The Standard Template Library (STL) is a powerful collection of C++ template classes that provide common data structures and algorithms. STL includes containers (vectors, lists, maps, sets), iterators for traversing containers, and algorithms for operations like sorting and searching. STL components are generic, efficient, and well-tested. Using STL saves development time and ensures reliable, optimized code. STL is part of the C++ standard library.",
          syntax: "#include <vector>\n#include <algorithm>\n#include <iostream>\nSTL containers: vector, list, map, set, stack, queue\nSTL algorithms: sort, find, count, transform",
          examples: [
            {
              title: "STL Overview Example",
              description: "Introduction to STL containers and algorithms",
              code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // STL vector container
    vector<int> numbers = {5, 2, 8, 1, 9};
    
    // STL algorithm - sort
    sort(numbers.begin(), numbers.end());
    
    // Display sorted numbers
    cout << "Sorted numbers: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // STL algorithm - find
    auto it = find(numbers.begin(), numbers.end(), 5);
    if (it != numbers.end()) {
        cout << "Found 5 in the vector" << endl;
    }
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What does STL stand for?",
              type: "fill",
              starterCode: `// Standard Template ___`,
              answer: "Library",
            },
            {
              question: "What are the three main components of STL?",
              type: "fill",
              starterCode: `// Containers, ___, and Algorithms`,
              answer: "Iterators",
            },
            {
              question: "What header is needed for STL algorithms?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "algorithm",
            },
          ],
        },
        {
          id: "cpp-vectors",
          title: "Vectors",
          explanation: "Vectors are dynamic arrays that can grow and shrink in size automatically. They provide random access to elements and efficient insertion/deletion at the end. Vectors are one of the most commonly used STL containers. They store elements contiguously in memory, making them cache-friendly. Vectors support operations like push_back(), pop_back(), size(), and access via [] or at(). They automatically manage memory allocation.",
          syntax: "#include <vector>\nvector<type> name;\nvector<type> name(size);\nOperations: push_back(), pop_back(), size(), [], at(), clear()",
          examples: [
            {
              title: "Vector Example",
              description: "Working with vectors",
              code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers;
    
    // Add elements
    numbers.push_back(10);
    numbers.push_back(20);
    numbers.push_back(30);
    
    // Access elements
    cout << "First element: " << numbers[0] << endl;
    cout << "Size: " << numbers.size() << endl;
    
    // Iterate through vector
    cout << "All elements: ";
    for (int i = 0; i < numbers.size(); i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    // Remove last element
    numbers.pop_back();
    cout << "After pop_back, size: " << numbers.size() << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for vectors?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "vector",
            },
            {
              question: "What method adds an element to the end of a vector?",
              type: "fill",
              starterCode: `vec.___(5);`,
              answer: "push_back",
            },
            {
              question: "What method returns the number of elements in a vector?",
              type: "fill",
              starterCode: `int count = vec.___();`,
              answer: "size",
            },
          ],
        },
        {
          id: "cpp-list",
          title: "List",
          explanation: "Lists are doubly-linked lists that allow efficient insertion and deletion at any position. Unlike vectors, lists don't support random access but excel at insertions and deletions in the middle. Lists are implemented as doubly-linked lists, where each element points to both the next and previous elements. Lists support operations like push_front(), push_back(), pop_front(), pop_back(), insert(), and remove(). Use lists when you need frequent insertions/deletions in the middle.",
          syntax: "#include <list>\nlist<type> name;\nOperations: push_front(), push_back(), pop_front(), pop_back(), insert(), remove(), size()",
          examples: [
            {
              title: "List Example",
              description: "Working with lists",
              code: `#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> numbers;
    
    // Add elements at both ends
    numbers.push_back(10);
    numbers.push_back(20);
    numbers.push_front(5);
    
    cout << "Elements: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Insert in the middle
    auto it = numbers.begin();
    advance(it, 2);
    numbers.insert(it, 15);
    
    cout << "After insert: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Remove element
    numbers.remove(10);
    cout << "After remove(10): ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for lists?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "list",
            },
            {
              question: "What method adds an element to the front of a list?",
              type: "fill",
              starterCode: `myList.___(5);`,
              answer: "push_front",
            },
            {
              question: "Do lists support random access like vectors? (yes/no)",
              type: "fill",
              starterCode: `// Lists ___ support random access`,
              answer: "do not",
            },
          ],
        },
        {
          id: "cpp-stack",
          title: "Stack",
          explanation: "A stack is a Last-In-First-Out (LIFO) data structure. Elements are added and removed from the top only. Stacks are useful for problems involving reversal, parsing, expression evaluation, and backtracking. The STL stack container adapter provides operations like push() to add elements, pop() to remove elements, top() to access the top element, and empty() to check if the stack is empty. Stacks are typically implemented using vectors or deques.",
          syntax: "#include <stack>\nstack<type> name;\nOperations: push(), pop(), top(), empty(), size()",
          examples: [
            {
              title: "Stack Example",
              description: "Using stack for LIFO operations",
              code: `#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> st;
    
    // Push elements
    st.push(10);
    st.push(20);
    st.push(30);
    
    cout << "Stack size: " << st.size() << endl;
    cout << "Top element: " << st.top() << endl;
    
    // Pop elements
    cout << "Popping elements: ";
    while (!st.empty()) {
        cout << st.top() << " ";
        st.pop();
    }
    cout << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for stacks?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "stack",
            },
            {
              question: "What is the order of a stack? (LIFO/FIFO)",
              type: "fill",
              starterCode: `// Stack is ___`,
              answer: "LIFO",
            },
            {
              question: "What method returns the top element without removing it?",
              type: "fill",
              starterCode: `int top = st.___();`,
              answer: "top",
            },
          ],
        },
        {
          id: "cpp-queue",
          title: "Queue",
          explanation: "A queue is a First-In-First-Out (FIFO) data structure. Elements are added at the back and removed from the front. Queues are useful for scheduling, buffering, and breadth-first search algorithms. The STL queue container adapter provides operations like push() to add elements at the back, pop() to remove from the front, front() to access the front element, back() to access the back element, and empty() to check if the queue is empty. Queues are typically implemented using deques.",
          syntax: "#include <queue>\nqueue<type> name;\nOperations: push(), pop(), front(), back(), empty(), size()",
          examples: [
            {
              title: "Queue Example",
              description: "Using queue for FIFO operations",
              code: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;
    
    // Enqueue elements
    q.push(10);
    q.push(20);
    q.push(30);
    
    cout << "Queue size: " << q.size() << endl;
    cout << "Front element: " << q.front() << endl;
    cout << "Back element: " << q.back() << endl;
    
    // Dequeue elements
    cout << "Dequeuing elements: ";
    while (!q.empty()) {
        cout << q.front() << " ";
        q.pop();
    }
    cout << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for queues?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "queue",
            },
            {
              question: "What is the order of a queue? (LIFO/FIFO)",
              type: "fill",
              starterCode: `// Queue is ___`,
              answer: "FIFO",
            },
            {
              question: "What method returns the front element?",
              type: "fill",
              starterCode: `int front = q.___();`,
              answer: "front",
            },
          ],
        },
        {
          id: "cpp-deque",
          title: "Deque",
          explanation: "A deque (double-ended queue) allows insertion and deletion at both ends efficiently. It combines the benefits of vectors and lists - it supports random access like vectors and efficient insertion/deletion at both ends. Deques are implemented as collections of fixed-size arrays, making them more complex than vectors but more flexible. Deques support operations like push_front(), push_back(), pop_front(), pop_back(), and random access via []. Use deques when you need efficient operations at both ends.",
          syntax: "#include <deque>\ndeque<type> name;\nOperations: push_front(), push_back(), pop_front(), pop_back(), [], at(), size()",
          examples: [
            {
              title: "Deque Example",
              description: "Working with deques",
              code: `#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> dq;
    
    // Add elements at both ends
    dq.push_back(20);
    dq.push_back(30);
    dq.push_front(10);
    dq.push_front(5);
    
    cout << "Deque elements: ";
    for (int num : dq) {
        cout << num << " ";
    }
    cout << endl;
    
    // Random access
    cout << "Element at index 1: " << dq[1] << endl;
    cout << "Size: " << dq.size() << endl;
    
    // Remove from front
    dq.pop_front();
    cout << "After pop_front: ";
    for (int num : dq) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for deques?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "deque",
            },
            {
              question: "What does deque stand for?",
              type: "fill",
              starterCode: `// Double-___ queue`,
              answer: "ended",
            },
            {
              question: "Can you access deque elements randomly like arrays? (yes/no)",
              type: "fill",
              starterCode: `// Deques ___ support random access`,
              answer: "do",
            },
          ],
        },
        {
          id: "cpp-set",
          title: "Set",
          explanation: "A set is a container that stores unique elements in sorted order. Sets automatically maintain sorted order and don't allow duplicate values. Sets are implemented as binary search trees, providing O(log n) insertion, deletion, and search operations. Sets are useful when you need to maintain a sorted collection of unique elements. Operations include insert(), erase(), find(), count(), and size(). The elements are automatically sorted in ascending order.",
          syntax: "#include <set>\nset<type> name;\nOperations: insert(), erase(), find(), count(), size(), begin(), end()",
          examples: [
            {
              title: "Set Example",
              description: "Working with sets",
              code: `#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> numbers;
    
    // Insert elements (duplicates are ignored)
    numbers.insert(30);
    numbers.insert(10);
    numbers.insert(20);
    numbers.insert(10);  // Duplicate, will be ignored
    
    cout << "Set elements (sorted): ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Check if element exists
    if (numbers.find(20) != numbers.end()) {
        cout << "20 is in the set" << endl;
    }
    
    // Count occurrences (0 or 1 for sets)
    cout << "Count of 10: " << numbers.count(10) << endl;
    cout << "Count of 50: " << numbers.count(50) << endl;
    
    // Size
    cout << "Set size: " << numbers.size() << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for sets?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "set",
            },
            {
              question: "Do sets allow duplicate values? (yes/no)",
              type: "fill",
              starterCode: `// Sets ___ allow duplicates`,
              answer: "do not",
            },
            {
              question: "Are set elements automatically sorted? (yes/no)",
              type: "fill",
              starterCode: `// Sets are automatically ___`,
              answer: "sorted",
            },
          ],
        },
        {
          id: "cpp-map",
          title: "Map",
          explanation: "A map is an associative container that stores key-value pairs. Each key is unique and maps to a value. Maps are implemented as binary search trees, providing O(log n) insertion, deletion, and search operations. Maps automatically maintain sorted order by key. Maps are useful for dictionaries, lookup tables, and counting. Operations include insert(), erase(), find(), [], at(), and size(). The [] operator can be used to access or insert elements.",
          syntax: "#include <map>\nmap<keyType, valueType> name;\nOperations: insert(), erase(), find(), [], at(), size()\nAccess: map[key] or map.at(key)",
          examples: [
            {
              title: "Map Example",
              description: "Working with maps",
              code: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    map<string, int> ages;
    
    // Insert key-value pairs
    ages["Alice"] = 25;
    ages["Bob"] = 30;
    ages["Charlie"] = 28;
    
    // Access values
    cout << "Alice's age: " << ages["Alice"] << endl;
    cout << "Bob's age: " << ages["Bob"] << endl;
    
    // Check if key exists
    if (ages.find("David") != ages.end()) {
        cout << "David's age: " << ages["David"] << endl;
    } else {
        cout << "David not found" << endl;
    }
    
    // Iterate through map
    cout << "All ages: " << endl;
    for (auto& pair : ages) {
        cout << pair.first << ": " << pair.second << endl;
    }
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for maps?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "map",
            },
            {
              question: "What does a map store?",
              type: "fill",
              starterCode: `// Key-___ pairs`,
              answer: "value",
            },
            {
              question: "What operator can be used to access map elements?",
              type: "fill",
              starterCode: `int value = myMap[___];`,
              answer: "key",
            },
          ],
        },
        {
          id: "cpp-iterators",
          title: "Iterators",
          explanation: "Iterators are objects that provide a way to access elements in containers sequentially. They act like pointers and allow you to traverse containers without knowing their internal structure. STL provides different types of iterators: input, output, forward, bidirectional, and random access. Common iterator operations include * (dereference), ++ (increment), -- (decrement), and == (comparison). Iterators are used with STL algorithms and for traversing containers. begin() returns an iterator to the first element, end() returns an iterator past the last element.",
          syntax: "container<type>::iterator it;\nit = container.begin();\nit = container.end();\n*it (dereference)\nit++ (increment)\nit-- (decrement)",
          examples: [
            {
              title: "Iterator Example",
              description: "Using iterators to traverse containers",
              code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers = {10, 20, 30, 40, 50};
    
    // Using iterator
    vector<int>::iterator it;
    
    cout << "Elements using iterator: ";
    for (it = numbers.begin(); it != numbers.end(); it++) {
        cout << *it << " ";
    }
    cout << endl;
    
    // Using auto keyword (C++11)
    cout << "Elements using auto: ";
    for (auto it = numbers.begin(); it != numbers.end(); it++) {
        cout << *it << " ";
    }
    cout << endl;
    
    // Range-based for loop (C++11)
    cout << "Elements using range-based for: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What are objects that traverse containers called?",
              type: "fill",
              starterCode: `// ___`,
              answer: "iterators",
            },
            {
              question: "What method returns an iterator to the first element?",
              type: "fill",
              starterCode: `auto it = vec.___();`,
              answer: "begin",
            },
            {
              question: "What operator dereferences an iterator?",
              type: "fill",
              starterCode: `int value = ___it;`,
              answer: "*",
            },
          ],
        },
        {
          id: "cpp-algorithms",
          title: "Algorithms",
          explanation: "STL algorithms are a collection of functions that operate on ranges of elements. They work with iterators and provide common operations like sorting, searching, counting, transforming, and manipulating sequences. Algorithms are generic and work with any container that provides appropriate iterators. Common algorithms include sort(), find(), count(), transform(), reverse(), max_element(), min_element(), and accumulate(). Using STL algorithms makes code more readable, efficient, and less error-prone.",
          syntax: "#include <algorithm>\n#include <numeric>\nAlgorithms: sort(), find(), count(), transform(), reverse(), max_element(), min_element(), accumulate()\nUsage: algorithm(begin, end, ...)",
          examples: [
            {
              title: "STL Algorithms Example",
              description: "Using various STL algorithms",
              code: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> numbers = {5, 2, 8, 1, 9, 3};
    
    // Sort
    sort(numbers.begin(), numbers.end());
    cout << "Sorted: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Find
    auto it = find(numbers.begin(), numbers.end(), 5);
    if (it != numbers.end()) {
        cout << "Found 5 at position: " << (it - numbers.begin()) << endl;
    }
    
    // Count
    int count = count(numbers.begin(), numbers.end(), 3);
    cout << "Count of 3: " << count << endl;
    
    // Max and Min
    auto maxIt = max_element(numbers.begin(), numbers.end());
    auto minIt = min_element(numbers.begin(), numbers.end());
    cout << "Max: " << *maxIt << ", Min: " << *minIt << endl;
    
    // Sum
    int sum = accumulate(numbers.begin(), numbers.end(), 0);
    cout << "Sum: " << sum << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for STL algorithms?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "algorithm",
            },
            {
              question: "What algorithm sorts elements?",
              type: "fill",
              starterCode: `___(vec.begin(), vec.end());`,
              answer: "sort",
            },
            {
              question: "What algorithm finds an element in a range?",
              type: "fill",
              starterCode: `auto it = ___(vec.begin(), vec.end(), value);`,
              answer: "find",
            },
          ],
        },
      ],
    },
    {
      id: "namespaces",
      title: "C++ Namespaces",
      topics: [
        {
          id: "cpp-namespaces",
          title: "Namespaces",
          explanation: "Namespaces are used to organize code and prevent naming conflicts. They group related code together and allow you to have multiple functions, classes, or variables with the same name in different namespaces. The std namespace contains all standard library components. You can use 'using namespace std;' to avoid typing std:: before standard library names, or use the scope resolution operator (::) to access namespace members. Creating your own namespaces helps organize large projects.",
          syntax: "namespace NamespaceName {\n  // code\n}\nAccess: NamespaceName::member\nUsing: using namespace NamespaceName;\nUsing directive: using std::cout;",
          examples: [
            {
              title: "Namespace Example",
              description: "Creating and using namespaces",
              code: `#include <iostream>
using namespace std;

// Custom namespace
namespace Math {
    const double PI = 3.14159;
    
    double add(double a, double b) {
        return a + b;
    }
    
    double multiply(double a, double b) {
        return a * b;
    }
}

// Another namespace
namespace Utils {
    void printMessage(string msg) {
        cout << "Message: " << msg << endl;
    }
}

int main() {
    // Access namespace members using ::
    cout << "PI = " << Math::PI << endl;
    cout << "Sum: " << Math::add(5, 3) << endl;
    cout << "Product: " << Math::multiply(4, 7) << endl;
    
    Utils::printMessage("Hello from Utils namespace");
    
    // Using namespace directive
    using namespace Math;
    cout << "Using PI directly: " << PI << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What keyword is used to create a namespace?",
              type: "fill",
              starterCode: `___ MyNamespace { }`,
              answer: "namespace",
            },
            {
              question: "What operator is used to access namespace members?",
              type: "fill",
              starterCode: `Math::___add(5, 3);`,
              answer: "::",
            },
            {
              question: "What namespace contains the standard library?",
              type: "fill",
              starterCode: `using namespace ___;`,
              answer: "std",
            },
          ],
        },
      ],
    },
    {
      id: "projects",
      title: "C++ Projects",
      topics: [
        {
          id: "cpp-beginner-projects",
          title: "Beginner Projects",
          explanation: "Beginner C++ projects help you practice fundamental concepts like variables, loops, conditionals, and functions. Good starter projects include: Calculator (basic arithmetic operations), Number Guessing Game (random numbers, loops, conditionals), To-Do List (arrays/vectors, file I/O), Temperature Converter (functions, calculations), and Simple Quiz Game (arrays, loops, conditionals). These projects reinforce core concepts and build confidence in programming.",
          syntax: "Beginner projects typically use:\n- Basic I/O (cin, cout)\n- Variables and data types\n- Control structures (if, loops)\n- Functions\n- Arrays or vectors\n- Simple file operations",
          examples: [
            {
              title: "Beginner Project Ideas",
              description: "Example beginner project structure",
              code: `#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

// Number Guessing Game - Beginner Project
int main() {
    srand(time(0));
    int secretNumber = rand() % 100 + 1;
    int guess;
    int attempts = 0;
    
    cout << "Welcome to the Number Guessing Game!" << endl;
    cout << "I'm thinking of a number between 1 and 100." << endl;
    
    do {
        cout << "Enter your guess: ";
        cin >> guess;
        attempts++;
        
        if (guess < secretNumber) {
            cout << "Too low! Try again." << endl;
        } else if (guess > secretNumber) {
            cout << "Too high! Try again." << endl;
        } else {
            cout << "Congratulations! You guessed it in " 
                 << attempts << " attempts!" << endl;
        }
    } while (guess != secretNumber);
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What type of projects are good for beginners?",
              type: "fill",
              starterCode: `// ___ projects`,
              answer: "Beginner",
            },
            {
              question: "What concepts do beginner projects typically use?",
              type: "fill",
              starterCode: `// Variables, loops, ___, and functions`,
              answer: "conditionals",
            },
            {
              question: "What is a good first project?",
              type: "fill",
              starterCode: `// A simple ___`,
              answer: "calculator",
            },
          ],
        },
        {
          id: "cpp-intermediate-projects",
          title: "Intermediate Projects",
          explanation: "Intermediate C++ projects involve more complex concepts like object-oriented programming, data structures, file handling, and algorithms. Good intermediate projects include: Library Management System (classes, file I/O), Bank Account System (OOP, encapsulation), Student Grade Management (classes, vectors, file operations), Text Editor (file handling, string manipulation), and Inventory Management System (classes, STL containers). These projects help you apply OOP principles and work with real-world scenarios.",
          syntax: "Intermediate projects typically use:\n- Classes and objects\n- Inheritance and polymorphism\n- STL containers (vector, map, set)\n- File I/O operations\n- Exception handling\n- Templates (optional)",
          examples: [
            {
              title: "Intermediate Project Ideas",
              description: "Example intermediate project structure",
              code: `#include <iostream>
#include <vector>
#include <string>
#include <fstream>
using namespace std;

// Library Management System - Intermediate Project
class Book {
private:
    string title;
    string author;
    int isbn;
    bool available;
    
public:
    Book(string t, string a, int i) : title(t), author(a), isbn(i), available(true) {}
    
    void display() {
        cout << "Title: " << title << ", Author: " << author 
             << ", ISBN: " << isbn << ", Available: " 
             << (available ? "Yes" : "No") << endl;
    }
    
    bool isAvailable() { return available; }
    void setAvailable(bool status) { available = status; }
    string getTitle() { return title; }
};

class Library {
private:
    vector<Book> books;
    
public:
    void addBook(Book book) {
        books.push_back(book);
    }
    
    void displayAllBooks() {
        for (Book& book : books) {
            book.display();
        }
    }
    
    void borrowBook(string title) {
        for (Book& book : books) {
            if (book.getTitle() == title && book.isAvailable()) {
                book.setAvailable(false);
                cout << "Book borrowed successfully!" << endl;
                return;
            }
        }
        cout << "Book not available!" << endl;
    }
};

int main() {
    Library library;
    library.addBook(Book("C++ Primer", "Stanley Lippman", 12345));
    library.addBook(Book("Effective C++", "Scott Meyers", 12346));
    
    library.displayAllBooks();
    library.borrowBook("C++ Primer");
    library.displayAllBooks();
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What programming paradigm do intermediate projects often use?",
              type: "fill",
              starterCode: `// Object-___ programming`,
              answer: "oriented",
            },
            {
              question: "What STL container is commonly used in intermediate projects?",
              type: "fill",
              starterCode: `// ___`,
              answer: "vector",
            },
            {
              question: "What type of system is a good intermediate project?",
              type: "fill",
              starterCode: `// Management ___`,
              answer: "system",
            },
          ],
        },
        {
          id: "cpp-advanced-projects",
          title: "Advanced Projects",
          explanation: "Advanced C++ projects involve complex concepts like multithreading, networking, graphics, game development, system programming, and performance optimization. Good advanced projects include: Multi-threaded Server (threading, networking, synchronization), Game Engine (graphics, physics, resource management), Database System (data structures, file systems, query optimization), Operating System Components (system calls, memory management), and Compiler/Interpreter (parsing, code generation). These projects demonstrate mastery of C++ and computer science concepts.",
          syntax: "Advanced projects typically use:\n- Multithreading (<thread>, <mutex>)\n- Networking (<socket>)\n- Graphics libraries (OpenGL, SDL)\n- Advanced STL algorithms\n- Smart pointers\n- Move semantics\n- Lambda expressions\n- Templates and metaprogramming",
          examples: [
            {
              title: "Advanced Project Ideas",
              description: "Example advanced project concepts",
              code: `#include <iostream>
#include <thread>
#include <mutex>
#include <vector>
#include <chrono>
using namespace std;

// Multi-threaded Counter - Advanced Project Concept
mutex mtx;
int counter = 0;

void incrementCounter(int id, int iterations) {
    for (int i = 0; i < iterations; i++) {
        // Lock mutex before accessing shared resource
        lock_guard<mutex> lock(mtx);
        counter++;
        cout << "Thread " << id << " incremented counter to " << counter << endl;
        this_thread::sleep_for(chrono::milliseconds(10));
    }
}

int main() {
    vector<thread> threads;
    int numThreads = 3;
    int iterationsPerThread = 5;
    
    // Create multiple threads
    for (int i = 0; i < numThreads; i++) {
        threads.push_back(thread(incrementCounter, i + 1, iterationsPerThread));
    }
    
    // Wait for all threads to complete
    for (thread& t : threads) {
        t.join();
    }
    
    cout << "Final counter value: " << counter << endl;
    cout << "Expected: " << numThreads * iterationsPerThread << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What feature do advanced projects often use for concurrent execution?",
              type: "fill",
              starterCode: `// ___`,
              answer: "multithreading",
            },
            {
              question: "What is used to synchronize access to shared resources?",
              type: "fill",
              starterCode: `// ___`,
              answer: "mutex",
            },
            {
              question: "What type of project demonstrates advanced C++ mastery?",
              type: "fill",
              starterCode: `// Game ___ or Compiler`,
              answer: "engine",
            },
          ],
        },
      ],
    },
    {
      id: "how-to",
      title: "C++ How To",
      topics: [
        {
          id: "cpp-add-two-numbers",
          title: "Add Two Numbers",
          explanation: "Adding two numbers is one of the most basic operations in programming. In C++, you can add numbers using the + operator. This works with integers, floating-point numbers, and other numeric types. You can add two variables, a variable and a constant, or two constants. The result can be stored in a variable or used directly in expressions. Understanding basic arithmetic operations is fundamental to programming.",
          syntax: "int sum = a + b;\nOr: cout << (a + b);\nWorks with: int, float, double, and other numeric types",
          examples: [
            {
              title: "Add Two Numbers Example",
              description: "Different ways to add numbers",
              code: `#include <iostream>
using namespace std;

int main() {
    // Method 1: Add two variables
    int a = 10;
    int b = 20;
    int sum = a + b;
    cout << "Sum: " << sum << endl;
    
    // Method 2: Add directly in output
    cout << "10 + 30 = " << (10 + 30) << endl;
    
    // Method 3: Add floating-point numbers
    double x = 5.5;
    double y = 3.2;
    double result = x + y;
    cout << "5.5 + 3.2 = " << result << endl;
    
    // Method 4: Get input from user
    int num1, num2;
    cout << "Enter first number: ";
    cin >> num1;
    cout << "Enter second number: ";
    cin >> num2;
    cout << "Sum: " << (num1 + num2) << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What operator is used to add two numbers?",
              type: "fill",
              starterCode: `int sum = a ___ b;`,
              answer: "+",
            },
            {
              question: "Complete the code to add two numbers",
              type: "fill",
              starterCode: `int a = 5, b = 3;
int ___ = a + b;`,
              answer: "sum",
            },
            {
              question: "What is the result of 15 + 25?",
              type: "predict",
              starterCode: `int result = 15 + 25;`,
              answer: "40",
            },
          ],
        },
        {
          id: "cpp-random-numbers",
          title: "Random Numbers",
          explanation: "Generating random numbers is useful for games, simulations, testing, and security applications. In C++, random numbers can be generated using the <cstdlib> header with rand() and srand(), or the modern <random> header (C++11). The rand() function returns a pseudo-random integer. srand() seeds the random number generator - use time(0) to get different sequences each run. For better randomness, use the <random> library with distributions.",
          syntax: "#include <cstdlib>\n#include <ctime>\nsrand(time(0));\nint random = rand();\nRange: rand() % (max - min + 1) + min",
          examples: [
            {
              title: "Random Numbers Example",
              description: "Generating random numbers",
              code: `#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    // Seed the random number generator
    srand(time(0));
    
    // Generate random number between 0 and RAND_MAX
    int random1 = rand();
    cout << "Random number: " << random1 << endl;
    
    // Generate random number between 1 and 100
    int random2 = rand() % 100 + 1;
    cout << "Random between 1-100: " << random2 << endl;
    
    // Generate random number between 10 and 50
    int min = 10, max = 50;
    int random3 = rand() % (max - min + 1) + min;
    cout << "Random between 10-50: " << random3 << endl;
    
    // Generate multiple random numbers
    cout << "Five random numbers (1-10): ";
    for (int i = 0; i < 5; i++) {
        cout << (rand() % 10 + 1) << " ";
    }
    cout << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What function generates a random number?",
              type: "fill",
              starterCode: `int num = ___();`,
              answer: "rand",
            },
            {
              question: "What function seeds the random number generator?",
              type: "fill",
              starterCode: `___(time(0));`,
              answer: "srand",
            },
            {
              question: "How do you generate a random number between 1 and 10?",
              type: "complete",
              starterCode: `int num = rand() % ___ + 1;`,
              answer: "10",
            },
          ],
        },
      ],
    },
    {
      id: "reference",
      title: "C++ Reference",
      topics: [
        {
          id: "cpp-keywords",
          title: "C++ Keywords",
          explanation: "Keywords are reserved words in C++ that have special meaning and cannot be used as variable names, function names, or identifiers. Common C++ keywords include: int, char, float, double, bool, void, if, else, for, while, do, switch, case, break, continue, return, class, struct, public, private, protected, virtual, static, const, new, delete, and many more. Understanding keywords is essential for writing valid C++ code and avoiding naming conflicts.",
          syntax: "Keywords cannot be used as identifiers:\nData types: int, char, float, double, bool\nControl: if, else, for, while, switch, case\nOOP: class, struct, public, private, virtual\nMemory: new, delete, malloc, free",
          examples: [
            {
              title: "C++ Keywords Example",
              description: "Common C++ keywords",
              code: `#include <iostream>
using namespace std;

int main() {
    // Data type keywords
    int number = 10;
    char letter = 'A';
    float decimal = 3.14f;
    double precise = 3.14159;
    bool flag = true;
    
    // Control flow keywords
    if (number > 5) {
        cout << "Number is greater than 5" << endl;
    } else {
        cout << "Number is 5 or less" << endl;
    }
    
    // Loop keywords
    for (int i = 0; i < 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    while (number > 0) {
        cout << number << " ";
        number--;
    }
    cout << endl;
    
    // Return keyword
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "Can keywords be used as variable names? (yes/no)",
              type: "fill",
              starterCode: `// Keywords ___ be used as variable names`,
              answer: "cannot",
            },
            {
              question: "What keyword is used for integer data type?",
              type: "fill",
              starterCode: `___ number = 5;`,
              answer: "int",
            },
            {
              question: "What keyword is used to exit a function?",
              type: "fill",
              starterCode: `___ 0;`,
              answer: "return",
            },
          ],
        },
        {
          id: "cpp-iostream",
          title: "<iostream>",
          explanation: "The <iostream> header provides input and output stream functionality. It includes objects like cout (character output) for displaying data, cin (character input) for reading data, cerr for error output, and clog for logging. The iostream library is fundamental to C++ programming as it enables interaction with the user through the console. It's one of the most commonly used headers in C++ programs.",
          syntax: "#include <iostream>\nusing namespace std;\nOutput: cout << data << endl;\nInput: cin >> variable;\nError: cerr << error << endl;",
          examples: [
            {
              title: "<iostream> Example",
              description: "Using iostream for input/output",
              code: `#include <iostream>
using namespace std;

int main() {
    // Output using cout
    cout << "Hello, World!" << endl;
    cout << "Number: " << 42 << endl;
    
    // Input using cin
    int age;
    string name;
    
    cout << "Enter your name: ";
    cin >> name;
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Hello, " << name << "! You are " << age << " years old." << endl;
    
    // Error output using cerr
    if (age < 0) {
        cerr << "Error: Invalid age!" << endl;
    }
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for input/output?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "iostream",
            },
            {
              question: "What object is used for output?",
              type: "fill",
              starterCode: `___ << "Hello";`,
              answer: "cout",
            },
            {
              question: "What object is used for input?",
              type: "fill",
              starterCode: `___ >> variable;`,
              answer: "cin",
            },
          ],
        },
        {
          id: "cpp-fstream",
          title: "<fstream>",
          explanation: "The <fstream> header provides file input and output operations. It includes classes like ifstream (input file stream) for reading from files, ofstream (output file stream) for writing to files, and fstream (file stream) for both reading and writing. File operations include opening files, reading/writing data, checking file status, and closing files. File handling is essential for data persistence and working with external data sources.",
          syntax: "#include <fstream>\nifstream file(\"filename.txt\");  // Read\nofstream file(\"filename.txt\");  // Write\nfile.is_open()  // Check if open\nfile.close()  // Close file",
          examples: [
            {
              title: "<fstream> Example",
              description: "Reading from and writing to files",
              code: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // Writing to a file
    ofstream outFile("example.txt");
    if (outFile.is_open()) {
        outFile << "Line 1" << endl;
        outFile << "Line 2" << endl;
        outFile << "Line 3" << endl;
        outFile.close();
        cout << "File written successfully" << endl;
    }
    
    // Reading from a file
    ifstream inFile("example.txt");
    string line;
    if (inFile.is_open()) {
        cout << "File contents:" << endl;
        while (getline(inFile, line)) {
            cout << line << endl;
        }
        inFile.close();
    } else {
        cout << "Unable to open file" << endl;
    }
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for file operations?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "fstream",
            },
            {
              question: "What class is used for reading files?",
              type: "fill",
              starterCode: `___ file("data.txt");`,
              answer: "ifstream",
            },
            {
              question: "What class is used for writing files?",
              type: "fill",
              starterCode: `___ file("output.txt");`,
              answer: "ofstream",
            },
          ],
        },
        {
          id: "cpp-cmath",
          title: "<cmath>",
          explanation: "The <cmath> header provides mathematical functions and operations. It includes functions for trigonometry (sin, cos, tan), logarithms (log, log10), exponentials (exp, pow), square roots (sqrt), rounding (ceil, floor, round), absolute values (abs, fabs), and more. These functions work with floating-point numbers and provide precise mathematical calculations. The cmath library is essential for scientific computing, graphics, and mathematical applications.",
          syntax: "#include <cmath>\nsqrt(x) - square root\npow(x, y) - x to power y\nsin(x), cos(x), tan(x) - trigonometry\nlog(x) - natural logarithm\nexp(x) - e to power x\nceil(x), floor(x) - rounding",
          examples: [
            {
              title: "<cmath> Example",
              description: "Using mathematical functions",
              code: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double num = 16.0;
    double angle = 45.0;
    
    // Square root
    cout << "Square root of 16: " << sqrt(num) << endl;
    
    // Power
    cout << "2 to the power of 8: " << pow(2, 8) << endl;
    
    // Absolute value
    cout << "Absolute value of -5: " << abs(-5) << endl;
    
    // Rounding
    cout << "Ceiling of 4.3: " << ceil(4.3) << endl;
    cout << "Floor of 4.7: " << floor(4.7) << endl;
    cout << "Round of 4.5: " << round(4.5) << endl;
    
    // Trigonometry (angle in radians)
    double radians = angle * M_PI / 180.0;
    cout << "Sin(45°): " << sin(radians) << endl;
    cout << "Cos(45°): " << cos(radians) << endl;
    
    // Logarithms
    cout << "Natural log of 10: " << log(10) << endl;
    cout << "Log base 10 of 100: " << log10(100) << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for math functions?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "cmath",
            },
            {
              question: "What function calculates square root?",
              type: "fill",
              starterCode: `double result = ___(16.0);`,
              answer: "sqrt",
            },
            {
              question: "What function calculates x to the power of y?",
              type: "fill",
              starterCode: `double result = ___(2, 3);`,
              answer: "pow",
            },
          ],
        },
        {
          id: "cpp-string",
          title: "<string>",
          explanation: "The <string> header provides the string class for working with text sequences. The string class is more convenient than C-style character arrays. It provides methods for string manipulation like concatenation (+ operator), finding substrings (find(), substr()), getting length (length(), size()), comparing strings (==, compare()), and modifying strings (replace(), insert(), erase()). Strings automatically manage memory and can grow or shrink as needed.",
          syntax: "#include <string>\nstring str = \"text\";\nConcatenation: str1 + str2\nLength: str.length()\nSubstring: str.substr(start, length)\nFind: str.find(\"substring\")",
          examples: [
            {
              title: "<string> Example",
              description: "Working with strings",
              code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str1 = "Hello";
    string str2 = "World";
    
    // Concatenation
    string result = str1 + " " + str2;
    cout << result << endl;
    
    // Length
    cout << "Length: " << result.length() << endl;
    
    // Substring
    string sub = result.substr(0, 5);
    cout << "Substring: " << sub << endl;
    
    // Find
    size_t pos = result.find("World");
    if (pos != string::npos) {
        cout << "Found 'World' at position: " << pos << endl;
    }
    
    // Compare
    if (str1 == "Hello") {
        cout << "Strings are equal" << endl;
    }
    
    // Modify
    result.replace(6, 5, "C++");
    cout << "After replace: " << result << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for the string class?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "string",
            },
            {
              question: "What operator concatenates strings?",
              type: "fill",
              starterCode: `string result = str1 ___ str2;`,
              answer: "+",
            },
            {
              question: "What method returns the length of a string?",
              type: "fill",
              starterCode: `int len = str.___();`,
              answer: "length",
            },
          ],
        },
        {
          id: "cpp-cstring",
          title: "<cstring>",
          explanation: "The <cstring> header provides C-style string manipulation functions. These functions work with null-terminated character arrays (char*). Common functions include strlen() for length, strcpy() for copying, strcat() for concatenation, strcmp() for comparison, strstr() for finding substrings, and memset() for setting memory. While the <string> class is preferred in modern C++, <cstring> is still useful for C compatibility and low-level operations.",
          syntax: "#include <cstring>\nstrlen(str) - length\nstrcpy(dest, src) - copy\nstrcat(dest, src) - concatenate\nstrcmp(str1, str2) - compare\nstrstr(str, substr) - find substring",
          examples: [
            {
              title: "<cstring> Example",
              description: "Using C-style string functions",
              code: `#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char str1[50] = "Hello";
    char str2[50] = "World";
    
    // Length
    cout << "Length of str1: " << strlen(str1) << endl;
    
    // Copy
    char str3[50];
    strcpy(str3, str1);
    cout << "Copied string: " << str3 << endl;
    
    // Concatenate
    strcat(str1, " ");
    strcat(str1, str2);
    cout << "Concatenated: " << str1 << endl;
    
    // Compare
    if (strcmp(str1, "Hello World") == 0) {
        cout << "Strings are equal" << endl;
    }
    
    // Find substring
    char* found = strstr(str1, "World");
    if (found != nullptr) {
        cout << "Found 'World' in string" << endl;
    }
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for C-style string functions?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "cstring",
            },
            {
              question: "What function returns the length of a C-string?",
              type: "fill",
              starterCode: `int len = ___(str);`,
              answer: "strlen",
            },
            {
              question: "What function copies one string to another?",
              type: "fill",
              starterCode: `___(dest, src);`,
              answer: "strcpy",
            },
          ],
        },
        {
          id: "cpp-ctime",
          title: "<ctime>",
          explanation: "The <ctime> header provides functions for working with dates and times. It includes time() to get current time, localtime() to convert to local time, strftime() to format time strings, and clock() to measure execution time. The time is represented as time_t (seconds since epoch) and can be converted to a tm structure for accessing individual components (year, month, day, hour, minute, second). Time functions are useful for logging, scheduling, and performance measurement.",
          syntax: "#include <ctime>\ntime_t now = time(0);\nstruct tm* timeinfo = localtime(&now);\nchar buffer[80];\nstrftime(buffer, 80, \"%Y-%m-%d %H:%M:%S\", timeinfo);",
          examples: [
            {
              title: "<ctime> Example",
              description: "Working with dates and times",
              code: `#include <iostream>
#include <ctime>
#include <iomanip>
using namespace std;

int main() {
    // Get current time
    time_t now = time(0);
    cout << "Seconds since epoch: " << now << endl;
    
    // Convert to local time
    struct tm* timeinfo = localtime(&now);
    
    // Format and display
    char buffer[80];
    strftime(buffer, 80, "%Y-%m-%d %H:%M:%S", timeinfo);
    cout << "Formatted time: " << buffer << endl;
    
    // Display individual components
    cout << "Year: " << (1900 + timeinfo->tm_year) << endl;
    cout << "Month: " << (1 + timeinfo->tm_mon) << endl;
    cout << "Day: " << timeinfo->tm_mday << endl;
    cout << "Hour: " << timeinfo->tm_hour << endl;
    cout << "Minute: " << timeinfo->tm_min << endl;
    cout << "Second: " << timeinfo->tm_sec << endl;
    
    // Measure execution time
    clock_t start = clock();
    // Some operation here
    clock_t end = clock();
    double elapsed = double(end - start) / CLOCKS_PER_SEC;
    cout << "Elapsed time: " << elapsed << " seconds" << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for date/time functions?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "ctime",
            },
            {
              question: "What function gets the current time?",
              type: "fill",
              starterCode: `time_t now = ___(0);`,
              answer: "time",
            },
            {
              question: "What function converts time to local time?",
              type: "fill",
              starterCode: `struct tm* info = ___(&now);`,
              answer: "localtime",
            },
          ],
        },
        {
          id: "cpp-vector",
          title: "<vector>",
          explanation: "The <vector> header provides the vector container class, which is a dynamic array that can grow and shrink automatically. Vectors store elements contiguously in memory, providing efficient random access. Vectors support operations like push_back() to add elements, pop_back() to remove elements, size() to get the number of elements, [] or at() to access elements, and clear() to remove all elements. Vectors are one of the most commonly used STL containers.",
          syntax: "#include <vector>\nvector<type> name;\nOperations: push_back(), pop_back(), size(), [], at(), clear(), begin(), end()",
          examples: [
            {
              title: "<vector> Example",
              description: "Working with vectors",
              code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Create vector
    vector<int> numbers;
    
    // Add elements
    numbers.push_back(10);
    numbers.push_back(20);
    numbers.push_back(30);
    numbers.push_back(40);
    
    // Access elements
    cout << "First element: " << numbers[0] << endl;
    cout << "Second element: " << numbers.at(1) << endl;
    cout << "Size: " << numbers.size() << endl;
    
    // Iterate through vector
    cout << "All elements: ";
    for (int i = 0; i < numbers.size(); i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    // Range-based for loop
    cout << "Using range-based for: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Remove last element
    numbers.pop_back();
    cout << "After pop_back, size: " << numbers.size() << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for vectors?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "vector",
            },
            {
              question: "What method adds an element to the end of a vector?",
              type: "fill",
              starterCode: `vec.___(5);`,
              answer: "push_back",
            },
            {
              question: "What method returns the number of elements?",
              type: "fill",
              starterCode: `int count = vec.___();`,
              answer: "size",
            },
          ],
        },
        {
          id: "cpp-algorithm",
          title: "<algorithm>",
          explanation: "The <algorithm> header provides a collection of generic algorithms that operate on ranges of elements. These algorithms work with iterators and can be used with any container. Common algorithms include sort() for sorting, find() for searching, count() for counting, transform() for applying functions, reverse() for reversing sequences, max_element() and min_element() for finding extremes, and accumulate() for summing. Using STL algorithms makes code more readable, efficient, and less error-prone than writing custom loops.",
          syntax: "#include <algorithm>\n#include <numeric>\nAlgorithms: sort(), find(), count(), transform(), reverse(), max_element(), min_element(), accumulate()\nUsage: algorithm(begin, end, ...)",
          examples: [
            {
              title: "<algorithm> Example",
              description: "Using STL algorithms",
              code: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> numbers = {5, 2, 8, 1, 9, 3, 7, 4, 6};
    
    // Sort
    sort(numbers.begin(), numbers.end());
    cout << "Sorted: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Find
    auto it = find(numbers.begin(), numbers.end(), 5);
    if (it != numbers.end()) {
        cout << "Found 5 at position: " << (it - numbers.begin()) << endl;
    }
    
    // Count
    int count = count(numbers.begin(), numbers.end(), 3);
    cout << "Count of 3: " << count << endl;
    
    // Reverse
    reverse(numbers.begin(), numbers.end());
    cout << "Reversed: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Max and Min
    auto maxIt = max_element(numbers.begin(), numbers.end());
    auto minIt = min_element(numbers.begin(), numbers.end());
    cout << "Max: " << *maxIt << ", Min: " << *minIt << endl;
    
    // Sum
    int sum = accumulate(numbers.begin(), numbers.end(), 0);
    cout << "Sum: " << sum << endl;
    
    return 0;
}`,
            },
          ],
          practiceQuestions: [
            {
              question: "What header is needed for STL algorithms?",
              type: "fill",
              starterCode: `#include <___>`,
              answer: "algorithm",
            },
            {
              question: "What algorithm sorts elements in a range?",
              type: "fill",
              starterCode: `___(vec.begin(), vec.end());`,
              answer: "sort",
            },
            {
              question: "What algorithm finds an element in a range?",
              type: "fill",
              starterCode: `auto it = ___(vec.begin(), vec.end(), value);`,
              answer: "find",
            },
          ],
        },
      ],
    },
  ],
}

