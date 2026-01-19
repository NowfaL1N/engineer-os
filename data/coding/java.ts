/**
 * Java Language Data
 * 
 * Comprehensive Java programming tutorial data.
 * Organized by categories with topics, explanations, and practice questions.
 */

export const javaCoding = {
  language: "Java",
  categories: [
    {
      id: "basics",
      title: "Java Basics",
      topics: [
        {
          id: "java-intro",
          title: "Java Intro",
          explanation: "Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle) in 1995. Java is platform-independent, meaning code written once can run on any device with a Java Virtual Machine (JVM). Java is widely used for building enterprise applications, Android apps, web applications, and large-scale systems. Its 'write once, run anywhere' philosophy makes it one of the most popular programming languages.",
          syntax: "Java programs are compiled to bytecode, which runs on the JVM. Every Java application must have at least one class with a main method as the entry point.",
          examples: [
            {
              title: "Hello World Program",
              description: "Basic Java program structure",
              code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What is the entry point method in Java?",
              type: "fill",
              starterCode: `public class MyClass {
    public static void main(___[] args) {
        System.out.println("Hello");
    }
}`,
              answer: "String"
            },
            {
              question: "Complete the class declaration",
              type: "fill",
              starterCode: `public ___ Hello {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}`,
              answer: "class"
            },
            {
              question: "What keyword makes the main method accessible?",
              type: "fill",
              starterCode: `public class Test {
    public ___ static void main(String[] args) {
        System.out.println("Test");
    }
}`,
              answer: "static"
            }
          ]
        },
        {
          id: "java-get-started",
          title: "Java Get Started",
          explanation: "To start programming in Java, you need to install the Java Development Kit (JDK) which includes the Java compiler (javac) and runtime (java). You can write Java code in any text editor and save it with a .java extension. The file name must match the class name. To compile, use 'javac filename.java', and to run, use 'java classname'. Modern development often uses IDEs like IntelliJ IDEA, Eclipse, or VS Code for easier coding.",
          syntax: "Install JDK → Write .java file → Compile with javac → Run with java command",
          examples: [
            {
              title: "Compilation and Execution",
              description: "Steps to compile and run Java program",
              code: `// Save as Hello.java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello Java!");
    }
}

// Compile: javac Hello.java
// Run: java Hello`
            }
          ],
          practiceQuestions: [
            {
              question: "What command compiles a Java file?",
              type: "fill",
              starterCode: `// To compile Hello.java, use:
___ Hello.java`,
              answer: "javac"
            },
            {
              question: "What command runs a compiled Java program?",
              type: "fill",
              starterCode: `// To run Hello class, use:
___ Hello`,
              answer: "java"
            },
            {
              question: "What extension do Java source files use?",
              type: "fill",
              starterCode: `// Java files are saved with .___ extension`,
              answer: "java"
            }
          ]
        },
        {
          id: "java-syntax",
          title: "Java Syntax",
          explanation: "Java syntax follows strict rules. Code is organized into classes and methods. Statements end with semicolons. Code blocks use curly braces {}. Java is case-sensitive - 'Hello' and 'hello' are different. Variables must be declared before use. Java uses camelCase for naming variables and methods, and PascalCase for class names. Proper indentation improves readability.",
          syntax: "Class declaration → Method declaration → Statements end with semicolons → Code blocks use braces",
          examples: [
            {
              title: "Basic Syntax Rules",
              description: "Java syntax fundamentals",
              code: `public class SyntaxExample {
    public static void main(String[] args) {
        int number = 10;  // Statement ends with semicolon
        String name = "Java";  // Case-sensitive
        
        if (number > 5) {  // Code block uses braces
            System.out.println(name);
        }
    }
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What character ends a Java statement?",
              type: "fill",
              starterCode: `int x = 5___`,
              answer: ";"
            },
            {
              question: "What characters define a code block?",
              type: "fill",
              starterCode: `if (x > 0) {
    System.out.println("Positive");
___`,
              answer: "}"
            },
            {
              question: "Is Java case-sensitive? Answer yes or no.",
              type: "fill",
              starterCode: `// Java is case-___`,
              answer: "sensitive"
            }
          ]
        },
        {
          id: "java-output",
          title: "Java Output",
          explanation: "Java uses System.out for output. System.out.println() prints a line and moves to the next line. System.out.print() prints without a newline. System.out.printf() allows formatted output like C. You can print text, numbers, variables, and expressions. Output is essential for displaying results and debugging programs.",
          syntax: "System.out.println(\"text\"); - prints with newline\nSystem.out.print(\"text\"); - prints without newline\nSystem.out.printf(\"format\", values); - formatted output",
          examples: [
            {
              title: "Output Methods",
              description: "Different ways to display output",
              code: `System.out.println("Hello");  // Prints with newline
System.out.print("World");  // Prints without newline
System.out.println("!");  // Next line

int num = 42;
System.out.println("Number: " + num);  // Concatenation
System.out.printf("Number: %d", num);  // Formatted output`
            }
          ],
          practiceQuestions: [
            {
              question: "Complete the print statement",
              type: "fill",
              starterCode: `System.out.___("Hello World");`,
              answer: "println"
            },
            {
              question: "What method prints without a newline?",
              type: "fill",
              starterCode: `System.out.___("Hello");`,
              answer: "print"
            },
            {
              question: "Complete the formatted output",
              type: "fill",
              starterCode: `int age = 25;
System.out.___("Age: %d", age);`,
              answer: "printf"
            }
          ]
        },
        {
          id: "java-comments",
          title: "Java Comments",
          explanation: "Comments explain code and are ignored by the compiler. Single-line comments start with // and continue to the end of the line. Multi-line comments use /* */ and can span multiple lines. Documentation comments /** */ are used for JavaDoc to generate documentation. Comments help make code readable and maintainable. Use comments to explain why, not what.",
          syntax: "// Single-line comment\n/* Multi-line comment */\n/** Documentation comment */",
          examples: [
            {
              title: "Comment Types",
              description: "Different comment styles in Java",
              code: `// This is a single-line comment

/* This is a
   multi-line comment */

/**
 * This is a documentation comment
 * Used for JavaDoc
 */
public class Example {
    public static void main(String[] args) {
        // Print hello
        System.out.println("Hello");
    }
}`
            }
          ],
          practiceQuestions: [
            {
              question: "Complete the single-line comment",
              type: "fill",
              starterCode: `___ This is a comment`,
              answer: "//"
            },
            {
              question: "Complete the multi-line comment start",
              type: "fill",
              starterCode: `___ This is a
   multi-line comment */`,
              answer: "/*"
            },
            {
              question: "What starts a documentation comment?",
              type: "fill",
              starterCode: `___*
 * Documentation comment
 */`,
              answer: "/**"
            }
          ]
        },
        {
          id: "java-variables",
          title: "Java Variables",
          explanation: "Variables store data values. In Java, variables must be declared with a type before use. Java is statically typed - the type cannot change. Variable names must start with a letter, underscore, or dollar sign, and can contain letters, digits, and underscores. Use meaningful names following camelCase convention. Variables can be initialized when declared or assigned later.",
          syntax: "type variableName = value;\nint age = 25;\nString name = \"Java\";\nboolean isActive = true;",
          examples: [
            {
              title: "Variable Declarations",
              description: "Creating and using variables",
              code: `int age = 25;  // Integer variable
String name = "Java";  // String variable
double price = 19.99;  // Double variable
boolean isActive = true;  // Boolean variable

// Declare then assign
int count;
count = 10;

System.out.println(age);
System.out.println(name);`
            }
          ],
          practiceQuestions: [
            {
              question: "Declare an integer variable named 'count' with value 10",
              type: "fill",
              starterCode: `___ count = 10;`,
              answer: "int"
            },
            {
              question: "Declare a String variable named 'message'",
              type: "fill",
              starterCode: `___ message = "Hello";`,
              answer: "String"
            },
            {
              question: "Declare a boolean variable named 'isReady'",
              type: "fill",
              starterCode: `___ isReady = true;`,
              answer: "boolean"
            }
          ]
        },
        {
          id: "java-data-types",
          title: "Java Data Types",
          explanation: "Java has two categories of data types: primitive types and reference types. Primitive types include byte, short, int, long (integers), float, double (decimals), char (single character), and boolean (true/false). Reference types include String, arrays, and objects. Primitive types store values directly, while reference types store references to objects. Choose the right type based on the data you need to store.",
          syntax: "Primitive: byte, short, int, long, float, double, char, boolean\nReference: String, arrays, objects",
          examples: [
            {
              title: "Data Type Examples",
              description: "Using different data types",
              code: `// Primitive types
byte smallNum = 100;
short mediumNum = 1000;
int number = 100000;
long bigNumber = 1000000L;
float decimal = 3.14f;
double precise = 3.14159;
char letter = 'A';
boolean flag = true;

// Reference type
String text = "Hello Java";
int[] numbers = {1, 2, 3};`
            }
          ],
          practiceQuestions: [
            {
              question: "What data type stores whole numbers?",
              type: "fill",
              starterCode: `___ number = 42;`,
              answer: "int"
            },
            {
              question: "What data type stores decimal numbers?",
              type: "fill",
              starterCode: `___ price = 19.99;`,
              answer: "double"
            },
            {
              question: "What data type stores true/false values?",
              type: "fill",
              starterCode: `___ isActive = true;`,
              answer: "boolean"
            }
          ]
        },
        {
          id: "java-type-casting",
          title: "Java Type Casting",
          explanation: "Type casting converts a value from one data type to another. Widening casting (automatic) happens when converting smaller types to larger types (int to double). Narrowing casting (manual) requires explicit conversion using parentheses when converting larger types to smaller types (double to int). Casting is useful when you need to work with different numeric types or convert between compatible types.",
          syntax: "Widening: int x = 10; double y = x; (automatic)\nNarrowing: double x = 9.78; int y = (int) x; (manual)",
          examples: [
            {
              title: "Type Casting Examples",
              description: "Widening and narrowing casting",
              code: `// Widening casting (automatic)
int myInt = 9;
double myDouble = myInt;  // Automatic conversion

// Narrowing casting (manual)
double myDouble2 = 9.78;
int myInt2 = (int) myDouble2;  // Manual conversion, result: 9

// String to number
String str = "123";
int num = Integer.parseInt(str);`
            }
          ],
          practiceQuestions: [
            {
              question: "Complete the narrowing cast from double to int",
              type: "fill",
              starterCode: `double price = 19.99;
int rounded = (___) price;`,
              answer: "int"
            },
            {
              question: "What method converts String to int?",
              type: "fill",
              starterCode: `String numStr = "42";
int num = Integer.___("42");`,
              answer: "parseInt"
            },
            {
              question: "Complete the widening cast (automatic)",
              type: "fill",
              starterCode: `int x = 10;
double y = ___;`,
              answer: "x"
            }
          ]
        },
        {
          id: "java-operators",
          title: "Java Operators",
          explanation: "Operators perform operations on variables and values. Java has arithmetic operators (+, -, *, /, %), assignment operators (=, +=, -=), comparison operators (==, !=, <, >, <=, >=), logical operators (&&, ||, !), and increment/decrement (++, --). Operators follow precedence rules - multiplication before addition. Use parentheses to control order of operations.",
          syntax: "Arithmetic: +, -, *, /, %\nComparison: ==, !=, <, >, <=, >=\nLogical: &&, ||, !\nAssignment: =, +=, -=, *=, /=",
          examples: [
            {
              title: "Operator Examples",
              description: "Using different operators",
              code: `int a = 10;
int b = 3;

// Arithmetic
System.out.println(a + b);  // 13
System.out.println(a - b);  // 7
System.out.println(a * b);  // 30
System.out.println(a / b);  // 3
System.out.println(a % b);  // 1

// Comparison
System.out.println(a == b);  // false
System.out.println(a > b);   // true

// Logical
boolean x = true;
boolean y = false;
System.out.println(x && y);  // false
System.out.println(x || y);  // true`
            }
          ],
          practiceQuestions: [
            {
              question: "What operator performs addition?",
              type: "fill",
              starterCode: `int result = 5 ___ 3;`,
              answer: "+"
            },
            {
              question: "What operator checks equality?",
              type: "fill",
              starterCode: `if (a ___ b) {
    System.out.println("Equal");
}`,
              answer: "=="
            },
            {
              question: "What operator performs logical AND?",
              type: "fill",
              starterCode: `if (x > 0 ___ y > 0) {
    System.out.println("Both positive");
}`,
              answer: "&&"
            }
          ]
        },
        {
          id: "java-strings",
          title: "Java Strings",
          explanation: "Strings are sequences of characters. In Java, String is a reference type (object), not a primitive. Strings are immutable - once created, they cannot be changed. String concatenation uses the + operator. The String class provides many useful methods like length(), substring(), toUpperCase(), toLowerCase(), equals(), and contains(). Strings are created using double quotes.",
          syntax: "String name = \"text\";\nString methods: length(), substring(), toUpperCase(), equals(), charAt()",
          examples: [
            {
              title: "String Operations",
              description: "Creating and manipulating strings",
              code: `String firstName = "John";
String lastName = "Doe";

// Concatenation
String fullName = firstName + " " + lastName;
System.out.println(fullName);  // John Doe

// String methods
System.out.println(fullName.length());  // 8
System.out.println(fullName.toUpperCase());  // JOHN DOE
System.out.println(fullName.substring(0, 4));  // John
System.out.println(firstName.equals("John"));  // true`
            }
          ],
          practiceQuestions: [
            {
              question: "What method gets the length of a string?",
              type: "fill",
              starterCode: `String text = "Hello";
int len = text.___();`,
              answer: "length"
            },
            {
              question: "What method converts string to uppercase?",
              type: "fill",
              starterCode: `String text = "hello";
String upper = text.___();`,
              answer: "toUpperCase"
            },
            {
              question: "What method compares two strings?",
              type: "fill",
              starterCode: `String a = "Hello";
String b = "Hello";
boolean same = a.___(b);`,
              answer: "equals"
            }
          ]
        },
        {
          id: "java-math",
          title: "Java Math",
          explanation: "The Math class provides mathematical operations and constants. Math methods are static, so you call them using Math.methodName(). Common methods include Math.max(), Math.min(), Math.abs(), Math.sqrt(), Math.pow(), Math.round(), Math.random(), and constants like Math.PI and Math.E. Math operations are essential for calculations, scientific computing, and algorithms.",
          syntax: "Math.max(a, b), Math.min(a, b), Math.abs(x), Math.sqrt(x), Math.pow(x, y), Math.round(x), Math.random()",
          examples: [
            {
              title: "Math Class Examples",
              description: "Using Math class methods",
              code: `// Find maximum and minimum
int max = Math.max(5, 10);  // 10
int min = Math.min(5, 10);  // 5

// Absolute value
int abs = Math.abs(-5);  // 5

// Square root and power
double sqrt = Math.sqrt(16);  // 4.0
double power = Math.pow(2, 3);  // 8.0

// Rounding
long rounded = Math.round(4.6);  // 5

// Random number (0.0 to 1.0)
double random = Math.random();

// Constants
double pi = Math.PI;  // 3.14159...`
            }
          ],
          practiceQuestions: [
            {
              question: "What method finds the maximum of two numbers?",
              type: "fill",
              starterCode: `int max = Math.___(5, 10);`,
              answer: "max"
            },
            {
              question: "What method calculates square root?",
              type: "fill",
              starterCode: `double sqrt = Math.___(16);`,
              answer: "sqrt"
            },
            {
              question: "What method calculates power?",
              type: "fill",
              starterCode: `double result = Math.___(2, 3);`,
              answer: "pow"
            }
          ]
        },
        {
          id: "java-booleans",
          title: "Java Booleans",
          explanation: "Boolean is a data type that can only have two values: true or false. Booleans are used in conditional statements and loops to control program flow. Boolean expressions use comparison and logical operators. Boolean values are returned by comparison operations (==, !=, <, >) and logical operations (&&, ||, !). Booleans are essential for decision-making in programs.",
          syntax: "boolean variableName = true/false;\nboolean result = (condition);\nboolean flag = x > 5;",
          examples: [
            {
              title: "Boolean Examples",
              description: "Using boolean values and expressions",
              code: `// Boolean variables
boolean isJavaFun = true;
boolean isFishTasty = false;

// Boolean expressions
int age = 20;
boolean isAdult = age >= 18;  // true

// Logical operations
boolean x = true;
boolean y = false;
System.out.println(x && y);  // false
System.out.println(x || y);  // true
System.out.println(!x);      // false

// Using in conditions
if (isAdult) {
    System.out.println("You are an adult");
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What are the only two boolean values?",
              type: "fill",
              starterCode: `boolean flag = ___;`,
              answer: "true"
            },
            {
              question: "Complete the boolean expression",
              type: "fill",
              starterCode: `int age = 20;
boolean isAdult = age ___ 18;`,
              answer: ">="
            },
            {
              question: "What operator negates a boolean?",
              type: "fill",
              starterCode: `boolean x = true;
boolean notX = ___ x;`,
              answer: "!"
            }
          ]
        },
        {
          id: "java-if-else",
          title: "Java If...Else",
          explanation: "If-else statements control program flow based on conditions. The if statement executes code when a condition is true. The else statement executes code when the condition is false. You can chain multiple conditions using else if. Conditions are boolean expressions. If-else statements are fundamental for decision-making in programs.",
          syntax: "if (condition) { code }\nelse if (condition) { code }\nelse { code }",
          examples: [
            {
              title: "If-Else Examples",
              description: "Using conditional statements",
              code: `int age = 20;

// Simple if
if (age >= 18) {
    System.out.println("Adult");
}

// If-else
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

// If-else if-else
int score = 85;
if (score >= 90) {
    System.out.println("Grade A");
} else if (score >= 80) {
    System.out.println("Grade B");
} else {
    System.out.println("Grade C");
}`
            }
          ],
          practiceQuestions: [
            {
              question: "Complete the if statement",
              type: "fill",
              starterCode: `int x = 10;
___ (x > 5) {
    System.out.println("Greater");
}`,
              answer: "if"
            },
            {
              question: "Complete the else clause",
              type: "fill",
              starterCode: `int age = 15;
if (age >= 18) {
    System.out.println("Adult");
} ___ {
    System.out.println("Minor");
}`,
              answer: "else"
            },
            {
              question: "Complete the else if clause",
              type: "fill",
              starterCode: `int score = 85;
if (score >= 90) {
    System.out.println("A");
} ___ ___ (score >= 80) {
    System.out.println("B");
}`,
              answer: "else if"
            }
          ]
        },
        {
          id: "java-switch",
          title: "Java Switch",
          explanation: "Switch statements provide an alternative to multiple if-else statements when checking a single variable against multiple values. The switch expression is evaluated once and compared with each case value. When a match is found, code executes until a break statement. The default case handles unmatched values. Switch is cleaner than multiple if-else for value-based decisions.",
          syntax: "switch (variable) {\n  case value1: code; break;\n  case value2: code; break;\n  default: code;\n}",
          examples: [
            {
              title: "Switch Statement Example",
              description: "Using switch for multiple conditions",
              code: `int day = 3;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Other day");
}

// Output: Wednesday`
            }
          ],
          practiceQuestions: [
            {
              question: "Complete the switch statement",
              type: "fill",
              starterCode: `int x = 1;
___ (x) {
    case 1:
        System.out.println("One");
        break;
}`,
              answer: "switch"
            },
            {
              question: "Complete the case label",
              type: "fill",
              starterCode: `int day = 2;
switch (day) {
    ___ 1:
        System.out.println("Monday");
        break;
}`,
              answer: "case"
            },
            {
              question: "What keyword prevents fall-through?",
              type: "fill",
              starterCode: `switch (x) {
    case 1:
        System.out.println("One");
        ___;
}`,
              answer: "break"
            }
          ]
        },
        {
          id: "java-while-loop",
          title: "Java While Loop",
          explanation: "While loops repeat code as long as a condition is true. The condition is checked before each iteration. If the condition is false initially, the loop never executes. While loops are useful when you don't know how many iterations are needed. Always ensure the condition eventually becomes false to avoid infinite loops. Use a counter or update variable inside the loop.",
          syntax: "while (condition) { code }\n\nint i = 0;\nwhile (i < 5) {\n  code\n  i++;\n}",
          examples: [
            {
              title: "While Loop Examples",
              description: "Using while loops for repetition",
              code: `// Count from 0 to 4
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

// Output: 0, 1, 2, 3, 4

// Countdown
int count = 5;
while (count > 0) {
    System.out.println(count);
    count--;
}
System.out.println("Blastoff!");`
            }
          ],
          practiceQuestions: [
            {
              question: "Complete the while loop condition",
              type: "fill",
              starterCode: `int i = 0;
while (i ___ 5) {
    System.out.println(i);
    i++;
}`,
              answer: "<"
            },
            {
              question: "What keyword starts a while loop?",
              type: "fill",
              starterCode: `int count = 0;
___ (count < 10) {
    System.out.println(count);
    count++;
}`,
              answer: "while"
            },
            {
              question: "Complete the increment to avoid infinite loop",
              type: "fill",
              starterCode: `int i = 0;
while (i < 5) {
    System.out.println(i);
    i___;
}`,
              answer: "++"
            }
          ]
        },
        {
          id: "java-for-loop",
          title: "Java For Loop",
          explanation: "For loops repeat code a specific number of times. The for loop has three parts: initialization, condition, and increment/decrement, all in one line. For loops are ideal when you know how many iterations are needed. The enhanced for loop (for-each) iterates through arrays and collections. For loops are more compact than while loops for counting iterations.",
          syntax: "for (initialization; condition; increment) { code }\nfor (int i = 0; i < 5; i++) { code }\nfor (type item : array) { code }",
          examples: [
            {
              title: "For Loop Examples",
              description: "Using for loops for iteration",
              code: `// Standard for loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
// Output: 0, 1, 2, 3, 4

// Enhanced for loop (for-each)
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}
// Output: 1, 2, 3, 4, 5

// Countdown
for (int i = 5; i > 0; i--) {
    System.out.println(i);
}`
            }
          ],
          practiceQuestions: [
            {
              question: "Complete the for loop initialization",
              type: "fill",
              starterCode: `for (int i = ___; i < 5; i++) {
    System.out.println(i);
}`,
              answer: "0"
            },
            {
              question: "Complete the for loop condition",
              type: "fill",
              starterCode: `for (int i = 0; i ___ 5; i++) {
    System.out.println(i);
}`,
              answer: "<"
            },
            {
              question: "Complete the for loop increment",
              type: "fill",
              starterCode: `for (int i = 0; i < 5; i___) {
    System.out.println(i);
}`,
              answer: "++"
            }
          ]
        },
        {
          id: "java-break-continue",
          title: "Java Break / Continue",
          explanation: "Break and continue control loop execution. Break exits the loop immediately, skipping remaining iterations. Continue skips the current iteration and continues with the next iteration. Break is useful for stopping a loop when a condition is met. Continue is useful for skipping certain values in a loop. Both statements only affect the innermost loop.",
          syntax: "break; - exits loop\ncontinue; - skips to next iteration",
          examples: [
            {
              title: "Break and Continue Examples",
              description: "Using break and continue in loops",
              code: `// Break example - exit when found
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;  // Exit loop
    }
    System.out.println(i);
}
// Output: 0, 1, 2, 3, 4

// Continue example - skip even numbers
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;  // Skip to next iteration
    }
    System.out.println(i);
}
// Output: 1, 3, 5, 7, 9`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword exits a loop immediately?",
              type: "fill",
              starterCode: `for (int i = 0; i < 10; i++) {
    if (i == 5) {
        ___;
    }
}`,
              answer: "break"
            },
            {
              question: "What keyword skips to the next iteration?",
              type: "fill",
              starterCode: `for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        ___;
    }
}`,
              answer: "continue"
            },
            {
              question: "Complete the break statement",
              type: "fill",
              starterCode: `while (true) {
    if (found) {
        ___;
    }
}`,
              answer: "break"
            }
          ]
        },
        {
          id: "java-arrays",
          title: "Java Arrays",
          explanation: "Arrays store multiple values of the same type in a fixed-size collection. Arrays are zero-indexed - the first element is at index 0. Arrays have a fixed length that cannot be changed after creation. Access elements using square brackets [index]. Arrays can be initialized with values or created with a specific size. Use the length property to get array size.",
          syntax: "type[] arrayName = {value1, value2, ...};\nint[] numbers = {1, 2, 3};\nint[] arr = new int[5];\narrayName[index] - access element",
          examples: [
            {
              title: "Array Examples",
              description: "Creating and using arrays",
              code: `// Declare and initialize
int[] numbers = {1, 2, 3, 4, 5};

// Access elements
System.out.println(numbers[0]);  // 1
System.out.println(numbers[2]);  // 3

// Get length
System.out.println(numbers.length);  // 5

// Create array with size
int[] arr = new int[5];
arr[0] = 10;
arr[1] = 20;

// Loop through array
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What index is the first element in an array?",
              type: "fill",
              starterCode: `int[] arr = {10, 20, 30};
System.out.println(arr[___]);`,
              answer: "0"
            },
            {
              question: "What property gets array length?",
              type: "fill",
              starterCode: `int[] numbers = {1, 2, 3};
int len = numbers.___;`,
              answer: "length"
            },
            {
              question: "Complete the array declaration",
              type: "fill",
              starterCode: `int[] numbers = {1, 2, 3};
System.out.println(numbers[___]);`,
              answer: "0"
            }
          ]
        }
      ]
    },
    {
      id: "methods",
      title: "Java Methods",
      topics: [
        {
          id: "java-methods",
          title: "Java Methods",
          explanation: "Methods are blocks of code that perform specific tasks. They allow code reuse and organization. Methods are declared inside classes. A method has a return type (void if it doesn't return anything), a name, and optionally parameters. Methods are called using the method name followed by parentheses. Static methods belong to the class and can be called without creating an object.",
          syntax: "public static returnType methodName() { code }\npublic static void greet() { code }\npublic static int add() { return value; }",
          examples: [
            {
              title: "Method Examples",
              description: "Creating and calling methods",
              code: `// Method that doesn't return anything
public static void greet() {
    System.out.println("Hello!");
}

// Method that returns a value
public static int add(int a, int b) {
    return a + b;
}

// Calling methods
public static void main(String[] args) {
    greet();  // Call greet method
    int result = add(5, 3);  // Call add method
    System.out.println(result);  // 8
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword indicates a method returns nothing?",
              type: "fill",
              starterCode: `public static ___ sayHello() {
    System.out.println("Hello");
}`,
              answer: "void"
            },
            {
              question: "What keyword returns a value from a method?",
              type: "fill",
              starterCode: `public static int multiply(int a, int b) {
    ___ a * b;
}`,
              answer: "return"
            },
            {
              question: "Complete the method call",
              type: "fill",
              starterCode: `public static void greet() {
    System.out.println("Hello");
}

public static void main(String[] args) {
    ___();
}`,
              answer: "greet"
            }
          ]
        },
        {
          id: "java-method-parameters",
          title: "Java Method Parameters",
          explanation: "Parameters allow methods to receive input values. Parameters are declared in the method signature with their type and name. When calling a method, you pass arguments (actual values) that match the parameter types. Methods can have multiple parameters separated by commas. Parameters act as local variables inside the method. Arguments are passed by value for primitives.",
          syntax: "public static void methodName(type param1, type param2) { code }\npublic static int add(int a, int b) { return a + b; }",
          examples: [
            {
              title: "Method Parameters Examples",
              description: "Using parameters in methods",
              code: `// Method with one parameter
public static void greet(String name) {
    System.out.println("Hello, " + name + "!");
}

// Method with multiple parameters
public static int add(int a, int b) {
    return a + b;
}

// Calling methods with arguments
public static void main(String[] args) {
    greet("Alice");  // Pass "Alice" as argument
    int sum = add(10, 20);  // Pass 10 and 20 as arguments
    System.out.println(sum);  // 30
}`
            }
          ],
          practiceQuestions: [
            {
              question: "Complete the method parameter",
              type: "fill",
              starterCode: `public static void printName(___ name) {
    System.out.println(name);
}`,
              answer: "String"
            },
            {
              question: "Complete the method call with argument",
              type: "fill",
              starterCode: `public static void greet(String name) {
    System.out.println("Hello " + name);
}

greet(___);`,
              answer: "\"Java\""
            },
            {
              question: "What separates multiple parameters?",
              type: "fill",
              starterCode: `public static int add(int a ___ int b) {
    return a + b;
}`,
              answer: ","
            }
          ]
        },
        {
          id: "java-method-overloading",
          title: "Java Method Overloading",
          explanation: "Method overloading allows multiple methods with the same name but different parameters. Overloaded methods must have different parameter types, different number of parameters, or different parameter order. The compiler determines which method to call based on the arguments provided. Method overloading provides flexibility and makes code more readable. Return type alone cannot differentiate overloaded methods.",
          syntax: "Same method name, different parameters\nint add(int a, int b)\nint add(int a, int b, int c)\ndouble add(double a, double b)",
          examples: [
            {
              title: "Method Overloading Examples",
              description: "Creating overloaded methods",
              code: `// Overloaded methods with different number of parameters
public static int add(int a, int b) {
    return a + b;
}

public static int add(int a, int b, int c) {
    return a + b + c;
}

// Overloaded method with different parameter types
public static double add(double a, double b) {
    return a + b;
}

// Calling overloaded methods
public static void main(String[] args) {
    System.out.println(add(5, 3));      // Calls int add(int, int)
    System.out.println(add(5, 3, 2));  // Calls int add(int, int, int)
    System.out.println(add(5.5, 3.2)); // Calls double add(double, double)
}`
            }
          ],
          practiceQuestions: [
            {
              question: "Can methods have the same name with different parameters? Answer yes or no.",
              type: "fill",
              starterCode: `// Method overloading allows same name with different parameters
// Answer: ___`,
              answer: "yes"
            },
            {
              question: "What must be different for method overloading?",
              type: "fill",
              starterCode: `// Overloaded methods must have different ___
public static int add(int a, int b) { }
public static int add(int a, int b, int c) { }`,
              answer: "parameters"
            },
            {
              question: "Complete the overloaded method",
              type: "fill",
              starterCode: `public static int multiply(int a, int b) {
    return a * b;
}

public static double multiply(___ a, double b) {
    return a * b;
}`,
              answer: "double"
            }
          ]
        },
        {
          id: "java-scope",
          title: "Java Scope",
          explanation: "Scope determines where variables can be accessed. Variables declared inside a method are local to that method. Variables declared in a class are instance variables accessible throughout the class. Block scope means variables exist only within the code block (curly braces) where they're declared. Variables cannot be accessed outside their scope. Understanding scope prevents errors and helps organize code.",
          syntax: "Local scope: inside method\nClass scope: throughout class\nBlock scope: inside { }",
          examples: [
            {
              title: "Scope Examples",
              description: "Understanding variable scope",
              code: `public class ScopeExample {
    int classVariable = 10;  // Class scope
    
    public static void main(String[] args) {
        int localVar = 5;  // Local to main method
        
        if (true) {
            int blockVar = 3;  // Block scope
            System.out.println(blockVar);  // OK
        }
        
        // System.out.println(blockVar);  // Error - out of scope
        System.out.println(localVar);  // OK
    }
    
    public void anotherMethod() {
        // System.out.println(localVar);  // Error - different scope
        System.out.println(classVariable);  // OK - class scope
    }
}`
            }
          ],
          practiceQuestions: [
            {
              question: "Where can a local variable be accessed?",
              type: "fill",
              starterCode: `public static void method() {
    int x = 5;
    // x can be accessed within this ___
}`,
              answer: "method"
            },
            {
              question: "What scope do variables in curly braces have?",
              type: "fill",
              starterCode: `if (true) {
    int x = 5;  // This has ___ scope
}`,
              answer: "block"
            },
            {
              question: "Can a variable be accessed outside its scope? Answer yes or no.",
              type: "fill",
              starterCode: `// Variables cannot be accessed outside their scope
// Answer: ___`,
              answer: "no"
            }
          ]
        },
        {
          id: "java-recursion",
          title: "Java Recursion",
          explanation: "Recursion is when a method calls itself. Recursive methods solve problems by breaking them into smaller, similar subproblems. Every recursive method needs a base case (stopping condition) to prevent infinite recursion. Without a base case, recursion causes StackOverflowError. Recursion is elegant for problems like factorial, Fibonacci, and tree traversal. However, recursion can be less efficient than iteration for simple problems.",
          syntax: "public static returnType method() {\n  if (baseCase) return value;\n  return method(); // Recursive call\n}",
          examples: [
            {
              title: "Recursion Examples",
              description: "Using recursion to solve problems",
              code: `// Factorial using recursion
public static int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;  // Base case
    }
    return n * factorial(n - 1);  // Recursive call
}

// Countdown using recursion
public static void countdown(int n) {
    if (n <= 0) {
        System.out.println("Done!");
        return;  // Base case
    }
    System.out.println(n);
    countdown(n - 1);  // Recursive call
}

// Calling recursive methods
public static void main(String[] args) {
    System.out.println(factorial(5));  // 120
    countdown(5);  // 5, 4, 3, 2, 1, Done!
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What is needed to prevent infinite recursion?",
              type: "fill",
              starterCode: `public static int factorial(int n) {
    if (n == 0) {
        return 1;  // This is the ___ case
    }
    return n * factorial(n - 1);
}`,
              answer: "base"
            },
            {
              question: "Complete the recursive call",
              type: "fill",
              starterCode: `public static void countdown(int n) {
    if (n <= 0) return;
    System.out.println(n);
    countdown(___ - 1);
}`,
              answer: "n"
            },
            {
              question: "What happens without a base case in recursion?",
              type: "fill",
              starterCode: `// Without base case, recursion causes ___
// Answer: StackOverflowError`,
              answer: "StackOverflowError"
            }
          ]
        }
      ]
    },
    {
      id: "classes-oop",
      title: "Java Classes & OOP",
      topics: [
        {
          id: "java-oop",
          title: "Java OOP",
          explanation: "Object-Oriented Programming (OOP) is a programming paradigm based on objects. Java is an OOP language. OOP principles include encapsulation (bundling data and methods), inheritance (reusing code), polymorphism (same interface, different behavior), and abstraction (hiding complexity). OOP makes code more organized, reusable, and maintainable. Classes are blueprints for objects.",
          syntax: "OOP concepts: Classes, Objects, Encapsulation, Inheritance, Polymorphism, Abstraction",
          examples: [
            {
              title: "OOP Concept Example",
              description: "Basic OOP structure",
              code: `// Class definition
public class Car {
    private String brand;  // Encapsulation
    private int speed;
    
    public Car(String brand) {  // Constructor
        this.brand = brand;
    }
    
    public void accelerate() {  // Method
        speed += 10;
    }
    
    public String getBrand() {  // Getter
        return brand;
    }
}

// Creating object
Car myCar = new Car("Toyota");
myCar.accelerate();`
            }
          ],
          practiceQuestions: [
            {
              question: "What does OOP stand for?",
              type: "fill",
              starterCode: `// OOP = Object-___ Programming`,
              answer: "Oriented"
            },
            {
              question: "What is a blueprint for objects?",
              type: "fill",
              starterCode: `// A ___ is a blueprint for objects`,
              answer: "class"
            },
            {
              question: "What OOP principle bundles data and methods together?",
              type: "fill",
              starterCode: `// ___ bundles data and methods`,
              answer: "Encapsulation"
            }
          ]
        },
        {
          id: "java-classes-objects",
          title: "Java Classes / Objects",
          explanation: "A class is a template or blueprint for creating objects. An object is an instance of a class. Classes define attributes (variables) and methods (functions). Objects are created using the 'new' keyword. Each object has its own copy of instance variables. Classes encapsulate data and behavior. Objects interact with each other through methods.",
          syntax: "class ClassName { attributes, methods }\nClassName objectName = new ClassName();",
          examples: [
            {
              title: "Class and Object Example",
              description: "Creating a class and objects",
              code: `// Define class
public class Dog {
    String name;
    int age;
    
    public void bark() {
        System.out.println("Woof!");
    }
}

// Create objects
Dog dog1 = new Dog();
dog1.name = "Buddy";
dog1.age = 3;

Dog dog2 = new Dog();
dog2.name = "Max";
dog2.age = 5;

dog1.bark();  // Woof!`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword creates a new object?",
              type: "fill",
              starterCode: `Dog myDog = ___ Dog();`,
              answer: "new"
            },
            {
              question: "What is an instance of a class?",
              type: "fill",
              starterCode: `// An ___ is an instance of a class`,
              answer: "object"
            },
            {
              question: "Complete the class declaration",
              type: "fill",
              starterCode: `public ___ Car {
    String brand;
}`,
              answer: "class"
            }
          ]
        },
        {
          id: "java-class-attributes",
          title: "Java Class Attributes",
          explanation: "Class attributes (also called fields or instance variables) are variables declared inside a class. Each object has its own copy of these attributes. Attributes define the state of an object. They can be accessed using dot notation (object.attribute). Attributes can be public, private, or protected. Private attributes are accessed through getter and setter methods.",
          syntax: "public/private type attributeName;\npublic String name;\nprivate int age;",
          examples: [
            {
              title: "Class Attributes Example",
              description: "Defining and using class attributes",
              code: `public class Person {
    public String name;      // Public attribute
    private int age;          // Private attribute
    
    public void setAge(int age) {
        this.age = age;
    }
    
    public int getAge() {
        return age;
    }
}

Person person = new Person();
person.name = "John";  // Direct access (public)
person.setAge(25);    // Indirect access (private)`
            }
          ],
          practiceQuestions: [
            {
              question: "What are variables declared inside a class called?",
              type: "fill",
              starterCode: `// Class ___ are variables in a class`,
              answer: "attributes"
            },
            {
              question: "How do you access an object's attribute?",
              type: "fill",
              starterCode: `Person p = new Person();
p.name = "John";  // Use ___ notation`,
              answer: "dot"
            },
            {
              question: "What access modifier hides attributes from outside?",
              type: "fill",
              starterCode: `___ int age;  // Hidden attribute`,
              answer: "private"
            }
          ]
        },
        {
          id: "java-class-methods",
          title: "Java Class Methods",
          explanation: "Class methods define the behavior of objects. Methods are functions that belong to a class. Instance methods operate on object data. Static methods belong to the class and don't need an object. Methods can take parameters and return values. Methods encapsulate functionality and make code reusable. Call methods using object.methodName().",
          syntax: "public returnType methodName() { code }\npublic void display() { code }\npublic int calculate() { return value; }",
          examples: [
            {
              title: "Class Methods Example",
              description: "Defining and calling class methods",
              code: `public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public void displayResult(int result) {
        System.out.println("Result: " + result);
    }
    
    public static void printInfo() {
        System.out.println("Calculator class");
    }
}

Calculator calc = new Calculator();
int sum = calc.add(5, 3);
calc.displayResult(sum);
Calculator.printInfo();  // Static method`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword indicates a method returns nothing?",
              type: "fill",
              starterCode: `public ___ void display() {
    System.out.println("Hello");
}`,
              answer: "void"
            },
            {
              question: "How do you call a method on an object?",
              type: "fill",
              starterCode: `Calculator calc = new Calculator();
calc.add(5, 3);  // Use ___ notation`,
              answer: "dot"
            },
            {
              question: "What keyword returns a value from a method?",
              type: "fill",
              starterCode: `public int multiply(int a, int b) {
    ___ a * b;
}`,
              answer: "return"
            }
          ]
        },
        {
          id: "java-constructors",
          title: "Java Constructors",
          explanation: "Constructors are special methods that initialize objects when they are created. A constructor has the same name as the class and no return type. If you don't define a constructor, Java provides a default constructor. Constructors can take parameters to initialize object attributes. Constructor overloading allows multiple constructors with different parameters. Constructors are called automatically when creating objects.",
          syntax: "public ClassName() { } - default\npublic ClassName(type param) { this.attr = param; } - parameterized",
          examples: [
            {
              title: "Constructor Examples",
              description: "Using constructors to initialize objects",
              code: `public class Student {
    String name;
    int age;
    
    // Default constructor
    public Student() {
        name = "Unknown";
        age = 0;
    }
    
    // Parameterized constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

// Using constructors
Student s1 = new Student();  // Default constructor
Student s2 = new Student("Alice", 20);  // Parameterized constructor`
            }
          ],
          practiceQuestions: [
            {
              question: "What is the name of a constructor?",
              type: "fill",
              starterCode: `public class Car {
    public ___() {  // Constructor name
    }
}`,
              answer: "Car"
            },
            {
              question: "What keyword refers to the current object in a constructor?",
              type: "fill",
              starterCode: `public Student(String name) {
    ___.name = name;
}`,
              answer: "this"
            },
            {
              question: "When is a constructor called?",
              type: "fill",
              starterCode: `// Constructor is called when creating a ___ object`,
              answer: "new"
            }
          ]
        },
        {
          id: "java-this-keyword",
          title: "this Keyword",
          explanation: "The 'this' keyword refers to the current object. It's used to distinguish between instance variables and parameters with the same name. 'this' can access instance variables, call instance methods, and call other constructors. Using 'this' makes code clearer and avoids naming conflicts. 'this' is particularly useful in constructors and setters.",
          syntax: "this.variableName - access instance variable\nthis.methodName() - call instance method\nthis() - call constructor",
          examples: [
            {
              title: "this Keyword Examples",
              description: "Using this to refer to current object",
              code: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;  // this.name refers to instance variable
        this.age = age;    // name refers to parameter
    }
    
    public void setName(String name) {
        this.name = name;  // Distinguish instance variable from parameter
    }
    
    public void display() {
        System.out.println(this.name + " is " + this.age);
    }
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword refers to the current object?",
              type: "fill",
              starterCode: `public void setName(String name) {
    ___.name = name;
}`,
              answer: "this"
            },
            {
              question: "Complete the this reference",
              type: "fill",
              starterCode: `public Person(String name) {
    ___.name = name;
}`,
              answer: "this"
            },
            {
              question: "Why is 'this' useful in constructors?",
              type: "fill",
              starterCode: `// 'this' distinguishes instance variables from ___
// Answer: parameters`,
              answer: "parameters"
            }
          ]
        },
        {
          id: "java-modifiers",
          title: "Java Modifiers",
          explanation: "Modifiers control access and behavior. Access modifiers: public (accessible everywhere), private (only within class), protected (package and subclasses), default (package only). Non-access modifiers: static (belongs to class), final (cannot be changed), abstract (must be overridden). Modifiers provide encapsulation and control how classes, methods, and variables are accessed.",
          syntax: "public/private/protected - access modifiers\nstatic/final/abstract - non-access modifiers",
          examples: [
            {
              title: "Modifiers Examples",
              description: "Using different modifiers",
              code: `public class Example {
    public String publicVar;      // Accessible everywhere
    private int privateVar;       // Only in this class
    protected double protectedVar; // Package and subclasses
    static int staticVar;         // Belongs to class
    
    public void publicMethod() { }
    private void privateMethod() { }
    static void staticMethod() { }
}

// Access
Example.staticVar = 10;  // Static access
Example.staticMethod();   // Static method`
            }
          ],
          practiceQuestions: [
            {
              question: "What modifier makes something accessible everywhere?",
              type: "fill",
              starterCode: `___ String name;  // Accessible everywhere`,
              answer: "public"
            },
            {
              question: "What modifier restricts access to the class only?",
              type: "fill",
              starterCode: `___ int age;  // Only in this class`,
              answer: "private"
            },
            {
              question: "What modifier makes something belong to the class?",
              type: "fill",
              starterCode: `___ int count;  // Belongs to class`,
              answer: "static"
            }
          ]
        },
        {
          id: "java-encapsulation",
          title: "Java Encapsulation",
          explanation: "Encapsulation bundles data and methods together and restricts direct access to data. Private attributes are hidden and accessed through public getter and setter methods. Encapsulation provides data security and control. It allows validation before setting values. Encapsulation is one of the four OOP principles. It makes code more maintainable and prevents unauthorized access.",
          syntax: "private attribute;\npublic getter() { return attribute; }\npublic setter(type value) { this.attribute = value; }",
          examples: [
            {
              title: "Encapsulation Example",
              description: "Implementing encapsulation with getters and setters",
              code: `public class BankAccount {
    private double balance;  // Private attribute
    
    // Getter method
    public double getBalance() {
        return balance;
    }
    
    // Setter method with validation
    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        } else {
            System.out.println("Invalid balance");
        }
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
}

BankAccount account = new BankAccount();
account.setBalance(1000);  // Use setter
System.out.println(account.getBalance());  // Use getter`
            }
          ],
          practiceQuestions: [
            {
              question: "What access modifier hides data in encapsulation?",
              type: "fill",
              starterCode: `___ double balance;  // Hidden data`,
              answer: "private"
            },
            {
              question: "What method retrieves private data?",
              type: "fill",
              starterCode: `public double ___() {
    return balance;
}`,
              answer: "getBalance"
            },
            {
              question: "What method sets private data?",
              type: "fill",
              starterCode: `public void ___(double balance) {
    this.balance = balance;
}`,
              answer: "setBalance"
            }
          ]
        },
        {
          id: "java-packages-api",
          title: "Java Packages / API",
          explanation: "Packages organize related classes into namespaces. Packages prevent naming conflicts. The Java API (Application Programming Interface) provides pre-built classes organized in packages like java.util, java.io, java.lang. Import statements bring classes into your code. Common packages include java.util.Scanner, java.util.ArrayList, java.lang.String. Packages make code modular and reusable.",
          syntax: "package packageName;\nimport packageName.ClassName;\nimport java.util.Scanner;",
          examples: [
            {
              title: "Packages and Imports Example",
              description: "Using packages and importing classes",
              code: `// Import Scanner from java.util package
import java.util.Scanner;
import java.util.ArrayList;

public class Example {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> list = new ArrayList<>();
        
        // Use imported classes
        String input = scanner.nextLine();
        list.add(input);
    }
}

// Common imports:
// import java.util.*;  // Import all from java.util
// import java.io.File;  // Import File class`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword imports a class?",
              type: "fill",
              starterCode: `___ java.util.Scanner;`,
              answer: "import"
            },
            {
              question: "What package contains Scanner?",
              type: "fill",
              starterCode: `import java.___.Scanner;`,
              answer: "util"
            },
            {
              question: "What does API stand for?",
              type: "fill",
              starterCode: `// API = Application Programming ___
// Answer: Interface`,
              answer: "Interface"
            }
          ]
        },
        {
          id: "java-inheritance",
          title: "Java Inheritance",
          explanation: "Inheritance allows a class to inherit attributes and methods from another class. The child class (subclass) extends the parent class (superclass). Inheritance promotes code reuse. Use 'extends' keyword to create inheritance. Child classes can override parent methods. Inheritance represents 'is-a' relationship. Java supports single inheritance (one parent class).",
          syntax: "class ChildClass extends ParentClass { }\nclass Dog extends Animal { }",
          examples: [
            {
              title: "Inheritance Example",
              description: "Creating inheritance relationship",
              code: `// Parent class
public class Animal {
    protected String name;
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Child class inherits from Animal
public class Dog extends Animal {
    public void bark() {
        System.out.println(name + " is barking");
    }
}

// Using inheritance
Dog dog = new Dog();
dog.name = "Buddy";  // Inherited attribute
dog.eat();           // Inherited method
dog.bark();          // Own method`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword creates inheritance?",
              type: "fill",
              starterCode: `public class Dog ___ Animal {
}`,
              answer: "extends"
            },
            {
              question: "What is the parent class called?",
              type: "fill",
              starterCode: `// The parent class is called ___
// Answer: superclass`,
              answer: "superclass"
            },
            {
              question: "What is the child class called?",
              type: "fill",
              starterCode: `// The child class is called ___
// Answer: subclass`,
              answer: "subclass"
            }
          ]
        },
        {
          id: "java-polymorphism",
          title: "Java Polymorphism",
          explanation: "Polymorphism means 'many forms'. It allows objects of different classes to be treated as objects of a common parent class. Method overriding enables polymorphism - child classes can provide different implementations of parent methods. Polymorphism enables flexibility and code reuse. Runtime polymorphism is achieved through method overriding. Polymorphism is one of the four OOP principles.",
          syntax: "ParentClass obj = new ChildClass();\nobj.method(); // Calls overridden method",
          examples: [
            {
              title: "Polymorphism Example",
              description: "Using polymorphism with method overriding",
              code: `// Parent class
public class Animal {
    public void makeSound() {
        System.out.println("Animal makes sound");
    }
}

// Child classes
public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

// Polymorphism in action
Animal animal1 = new Dog();
Animal animal2 = new Cat();

animal1.makeSound();  // Woof!
animal2.makeSound();  // Meow!`
            }
          ],
          practiceQuestions: [
            {
              question: "What does polymorphism mean?",
              type: "fill",
              starterCode: `// Polymorphism means many ___
// Answer: forms`,
              answer: "forms"
            },
            {
              question: "What enables polymorphism in Java?",
              type: "fill",
              starterCode: `// ___ overriding enables polymorphism
// Answer: Method`,
              answer: "Method"
            },
            {
              question: "What annotation indicates method overriding?",
              type: "fill",
              starterCode: `@___
public void makeSound() {
}`,
              answer: "Override"
            }
          ]
        },
        {
          id: "java-super-keyword",
          title: "super Keyword",
          explanation: "The 'super' keyword refers to the parent class. It's used to access parent class attributes and methods. 'super' calls parent class constructors. 'super.methodName()' calls parent class methods. 'super' is useful when overriding methods but still needing parent functionality. 'super' must be the first statement in a constructor if used.",
          syntax: "super.attribute - access parent attribute\nsuper.method() - call parent method\nsuper() - call parent constructor",
          examples: [
            {
              title: "super Keyword Examples",
              description: "Using super to access parent class",
              code: `// Parent class
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Child class
public class Dog extends Animal {
    public Dog(String name) {
        super(name);  // Call parent constructor
    }
    
    @Override
    public void eat() {
        super.eat();  // Call parent method
        System.out.println(name + " is eating dog food");
    }
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword refers to the parent class?",
              type: "fill",
              starterCode: `public Dog(String name) {
    ___(name);  // Call parent constructor
}`,
              answer: "super"
            },
            {
              question: "How do you call a parent method?",
              type: "fill",
              starterCode: `public void eat() {
    ___.eat();  // Call parent method
}`,
              answer: "super"
            },
            {
              question: "Complete the super call",
              type: "fill",
              starterCode: `public Cat(String name) {
    ___(name);
}`,
              answer: "super"
            }
          ]
        },
        {
          id: "java-inner-classes",
          title: "Java Inner Classes",
          explanation: "Inner classes are classes defined inside another class. Inner classes can access outer class members. There are four types: non-static inner class, static nested class, local inner class, and anonymous inner class. Inner classes help organize code and can access private members of the outer class. Inner classes are useful for event handling and callbacks.",
          syntax: "class OuterClass {\n  class InnerClass { }\n}",
          examples: [
            {
              title: "Inner Class Example",
              description: "Creating and using inner classes",
              code: `// Outer class
public class Outer {
    private int outerVar = 10;
    
    // Inner class
    class Inner {
        public void display() {
            System.out.println("Outer variable: " + outerVar);
        }
    }
    
    public void createInner() {
        Inner inner = new Inner();
        inner.display();
    }
}

// Using inner class
Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
inner.display();`
            }
          ],
          practiceQuestions: [
            {
              question: "What is a class inside another class called?",
              type: "fill",
              starterCode: `// A class inside another class is an ___ class
// Answer: inner`,
              answer: "inner"
            },
            {
              question: "Can inner classes access outer class members? Answer yes or no.",
              type: "fill",
              starterCode: `// Inner classes can access outer class members
// Answer: ___`,
              answer: "yes"
            },
            {
              question: "Complete the inner class declaration",
              type: "fill",
              starterCode: `public class Outer {
    ___ Inner {
        // Inner class code
    }
}`,
              answer: "class"
            }
          ]
        },
        {
          id: "java-abstraction",
          title: "Java Abstraction",
          explanation: "Abstraction hides implementation details and shows only essential features. Abstract classes cannot be instantiated directly. Abstract methods have no body and must be implemented by subclasses. Use 'abstract' keyword for abstract classes and methods. Abstraction is achieved through abstract classes and interfaces. Abstraction simplifies complex systems and focuses on what objects do rather than how.",
          syntax: "abstract class ClassName { abstract method(); }\nabstract returnType methodName();",
          examples: [
            {
              title: "Abstraction Example",
              description: "Using abstract classes and methods",
              code: `// Abstract class
public abstract class Animal {
    protected String name;
    
    // Abstract method (no body)
    public abstract void makeSound();
    
    // Concrete method
    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Concrete class implements abstract method
public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

Animal dog = new Dog();
dog.makeSound();`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword makes a class abstract?",
              type: "fill",
              starterCode: `___ abstract class Animal {
}`,
              answer: "abstract"
            },
            {
              question: "Can abstract classes be instantiated? Answer yes or no.",
              type: "fill",
              starterCode: `// Abstract classes cannot be instantiated
// Answer: ___`,
              answer: "no"
            },
            {
              question: "What must subclasses do with abstract methods?",
              type: "fill",
              starterCode: `// Subclasses must ___ abstract methods
// Answer: implement`,
              answer: "implement"
            }
          ]
        },
        {
          id: "java-interface",
          title: "Java Interface",
          explanation: "Interfaces define contracts that classes must implement. Interfaces contain only abstract methods (implicitly public and abstract). A class implements an interface using 'implements' keyword. Classes can implement multiple interfaces. Interfaces provide abstraction and polymorphism. Interfaces are useful for defining common behavior. Java 8+ allows default and static methods in interfaces.",
          syntax: "interface InterfaceName { void method(); }\nclass ClassName implements InterfaceName { }",
          examples: [
            {
              title: "Interface Example",
              description: "Creating and implementing interfaces",
              code: `// Define interface
public interface Drawable {
    void draw();  // Abstract method (implicitly public)
}

// Implement interface
public class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }
}

public class Rectangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing rectangle");
    }
}

// Using interface
Drawable shape1 = new Circle();
Drawable shape2 = new Rectangle();
shape1.draw();
shape2.draw();`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword implements an interface?",
              type: "fill",
              starterCode: `public class Circle ___ Drawable {
}`,
              answer: "implements"
            },
            {
              question: "What keyword defines an interface?",
              type: "fill",
              starterCode: `___ Drawable {
    void draw();
}`,
              answer: "interface"
            },
            {
              question: "Can a class implement multiple interfaces? Answer yes or no.",
              type: "fill",
              starterCode: `// Classes can implement multiple interfaces
// Answer: ___`,
              answer: "yes"
            }
          ]
        },
        {
          id: "java-anonymous-classes",
          title: "Java Anonymous Classes",
          explanation: "Anonymous classes are classes without a name, defined and instantiated at the same time. They're useful for one-time use implementations. Anonymous classes can extend a class or implement an interface. They're commonly used for event listeners and callbacks. Anonymous classes are defined inline where they're used. They can access final variables from the enclosing scope.",
          syntax: "InterfaceName obj = new InterfaceName() { implementation };\nnew ClassName() { implementation };",
          examples: [
            {
              title: "Anonymous Class Example",
              description: "Creating anonymous classes",
              code: `// Interface
public interface Greeting {
    void greet();
}

// Using anonymous class
Greeting greeting = new Greeting() {
    @Override
    public void greet() {
        System.out.println("Hello from anonymous class!");
    }
};

greeting.greet();

// Anonymous class extending a class
Thread thread = new Thread() {
    @Override
    public void run() {
        System.out.println("Running in anonymous thread");
    }
};
thread.start();`
            }
          ],
          practiceQuestions: [
            {
              question: "What are classes without a name called?",
              type: "fill",
              starterCode: `// Classes without names are ___ classes
// Answer: anonymous`,
              answer: "anonymous"
            },
            {
              question: "Are anonymous classes defined inline? Answer yes or no.",
              type: "fill",
              starterCode: `// Anonymous classes are defined inline
// Answer: ___`,
              answer: "yes"
            },
            {
              question: "Complete the anonymous class",
              type: "fill",
              starterCode: `Runnable r = new Runnable() {
    public void run() {
        System.out.println("Hello");
    }
___;`,
              answer: "}"
            }
          ]
        },
        {
          id: "java-enum",
          title: "Java Enum",
          explanation: "Enum (enumeration) is a special class that represents a group of constants. Enum constants are public, static, and final. Enums are type-safe and prevent invalid values. Enums can have constructors, methods, and fields. Enums are useful for representing fixed sets of values like days of week, colors, or status codes. Use enum instead of constants for better type safety.",
          syntax: "enum EnumName { VALUE1, VALUE2, VALUE3 }\nenum Day { MONDAY, TUESDAY, WEDNESDAY }",
          examples: [
            {
              title: "Enum Example",
              description: "Creating and using enums",
              code: `// Define enum
public enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

// Enum with methods
public enum Status {
    ACTIVE,
    INACTIVE,
    PENDING;
    
    public boolean isActive() {
        return this == ACTIVE;
    }
}

// Using enum
Day today = Day.MONDAY;
Status status = Status.ACTIVE;

if (status.isActive()) {
    System.out.println("Status is active");
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword defines an enum?",
              type: "fill",
              starterCode: `___ Day {
    MONDAY, TUESDAY
}`,
              answer: "enum"
            },
            {
              question: "What are enum values?",
              type: "fill",
              starterCode: `// Enum values are ___
// Answer: constants`,
              answer: "constants"
            },
            {
              question: "Complete the enum usage",
              type: "fill",
              starterCode: `Day today = ___.MONDAY;`,
              answer: "Day"
            }
          ]
        },
        {
          id: "java-user-input",
          title: "Java User Input",
          explanation: "User input allows programs to receive data from users. Java uses Scanner class from java.util package to get input. Scanner can read different types: nextInt(), nextDouble(), nextLine(), etc. Always import java.util.Scanner. Create Scanner with System.in. Close scanner when done to free resources. User input makes programs interactive.",
          syntax: "import java.util.Scanner;\nScanner scanner = new Scanner(System.in);\nint num = scanner.nextInt();\nString text = scanner.nextLine();",
          examples: [
            {
              title: "User Input Example",
              description: "Getting input from user",
              code: `import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.println("Hello, " + name + "! You are " + age + " years old.");
        
        scanner.close();
    }
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What class is used for user input?",
              type: "fill",
              starterCode: `___ scanner = new Scanner(System.in);`,
              answer: "Scanner"
            },
            {
              question: "What method reads an integer?",
              type: "fill",
              starterCode: `Scanner sc = new Scanner(System.in);
int num = sc.___();`,
              answer: "nextInt"
            },
            {
              question: "What method reads a line of text?",
              type: "fill",
              starterCode: `Scanner sc = new Scanner(System.in);
String text = sc.___();`,
              answer: "nextLine"
            }
          ]
        },
        {
          id: "java-date",
          title: "Java Date",
          explanation: "Java provides classes for working with dates and times. The Date class represents a specific point in time. Calendar class provides methods for date manipulation. LocalDate, LocalTime, and LocalDateTime (Java 8+) are modern alternatives. SimpleDateFormat formats dates. Date handling is important for timestamps, scheduling, and data processing.",
          syntax: "Date date = new Date();\nLocalDate today = LocalDate.now();\nSimpleDateFormat sdf = new SimpleDateFormat(\"yyyy-MM-dd\");",
          examples: [
            {
              title: "Date Examples",
              description: "Working with dates",
              code: `import java.util.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

// Using Date class
Date date = new Date();
System.out.println(date);

// Using LocalDate (Java 8+)
LocalDate today = LocalDate.now();
System.out.println("Today: " + today);

// Formatting dates
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
String formatted = today.format(formatter);
System.out.println("Formatted: " + formatted);

// Creating specific date
LocalDate specificDate = LocalDate.of(2024, 1, 15);
System.out.println("Specific date: " + specificDate);`
            }
          ],
          practiceQuestions: [
            {
              question: "What class represents a date?",
              type: "fill",
              starterCode: `___ date = new Date();`,
              answer: "Date"
            },
            {
              question: "What method gets the current date?",
              type: "fill",
              starterCode: `LocalDate today = LocalDate.___();`,
              answer: "now"
            },
            {
              question: "What package contains Date class?",
              type: "fill",
              starterCode: `import java.___.Date;`,
              answer: "util"
            }
          ]
        }
      ]
    },
    {
      id: "errors-exceptions",
      title: "Java Errors & Exceptions",
      topics: [
        {
          id: "java-errors",
          title: "Java Errors",
          explanation: "Errors are serious problems that typically cannot be recovered from. Errors are usually caused by the environment (like OutOfMemoryError, StackOverflowError). Errors are unchecked exceptions - you don't need to handle them. Common errors include syntax errors, runtime errors, and logical errors. Understanding errors helps debug programs effectively.",
          syntax: "Errors: OutOfMemoryError, StackOverflowError, NoClassDefFoundError\nErrors are unchecked exceptions",
          examples: [
            {
              title: "Error Examples",
              description: "Common types of errors",
              code: `// Syntax Error - missing semicolon
int x = 5  // Error: missing semicolon

// Runtime Error - division by zero
int a = 10;
int b = 0;
int result = a / b;  // ArithmeticException

// StackOverflowError - infinite recursion
public static void infinite() {
    infinite();  // Causes StackOverflowError
}

// OutOfMemoryError - too much memory used
// Usually happens with large arrays or infinite loops creating objects`
            }
          ],
          practiceQuestions: [
            {
              question: "What type of error occurs with infinite recursion?",
              type: "fill",
              starterCode: `// Infinite recursion causes ___
// Answer: StackOverflowError`,
              answer: "StackOverflowError"
            },
            {
              question: "Are errors checked or unchecked exceptions?",
              type: "fill",
              starterCode: `// Errors are ___ exceptions
// Answer: unchecked`,
              answer: "unchecked"
            },
            {
              question: "What error occurs when dividing by zero?",
              type: "fill",
              starterCode: `int x = 10 / 0;  // Causes ___
// Answer: ArithmeticException`,
              answer: "ArithmeticException"
            }
          ]
        },
        {
          id: "java-debugging",
          title: "Java Debugging",
          explanation: "Debugging is finding and fixing errors in code. Use print statements (System.out.println) to trace program execution. IDEs provide debuggers with breakpoints to pause execution. Step through code line by line to inspect variables. Use try-catch blocks to catch exceptions. Read error messages carefully - they show where problems occur. Debugging is an essential programming skill.",
          syntax: "System.out.println(\"Debug: \" + variable);\n// Use debugger breakpoints\n// Read error stack traces",
          examples: [
            {
              title: "Debugging Techniques",
              description: "Methods for debugging code",
              code: `// Method 1: Print statements
int x = 5;
System.out.println("Debug: x = " + x);  // See variable value

// Method 2: Try-catch for exceptions
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
    e.printStackTrace();  // Print stack trace
}

// Method 3: Check conditions
if (x > 0) {
    System.out.println("x is positive");
} else {
    System.out.println("Debug: x is not positive, value is " + x);
}

// Method 4: Use IDE debugger
// Set breakpoints and step through code`
            }
          ],
          practiceQuestions: [
            {
              question: "What method prints a stack trace?",
              type: "fill",
              starterCode: `catch (Exception e) {
    e.___();
}`,
              answer: "printStackTrace"
            },
            {
              question: "What are points where execution pauses called?",
              type: "fill",
              starterCode: `// ___ pause execution in debugger
// Answer: breakpoints`,
              answer: "breakpoints"
            },
            {
              question: "Complete the debug print statement",
              type: "fill",
              starterCode: `int x = 10;
System.out.___("Debug: x = " + x);`,
              answer: "println"
            }
          ]
        },
        {
          id: "java-exceptions",
          title: "Java Exceptions",
          explanation: "Exceptions are events that disrupt normal program flow. Exceptions can be caught and handled. Checked exceptions must be handled (like IOException). Unchecked exceptions don't need handling (like NullPointerException). Use try-catch blocks to handle exceptions. Exception handling prevents program crashes. Common exceptions include NullPointerException, ArrayIndexOutOfBoundsException, and IOException.",
          syntax: "try { code } catch (ExceptionType e) { handle }\nthrow new ExceptionType(\"message\");",
          examples: [
            {
              title: "Exception Handling Example",
              description: "Catching and handling exceptions",
              code: `// Try-catch block
try {
    int[] numbers = {1, 2, 3};
    System.out.println(numbers[5]);  // ArrayIndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array index out of bounds!");
}

// Multiple catch blocks
try {
    String str = null;
    System.out.println(str.length());  // NullPointerException
} catch (NullPointerException e) {
    System.out.println("String is null");
} catch (Exception e) {
    System.out.println("Other error: " + e.getMessage());
}

// Finally block always executes
try {
    // code
} catch (Exception e) {
    // handle
} finally {
    System.out.println("This always runs");
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword starts exception handling?",
              type: "fill",
              starterCode: `___ {
    int x = 10 / 0;
} catch (Exception e) {
}`,
              answer: "try"
            },
            {
              question: "What keyword catches exceptions?",
              type: "fill",
              starterCode: `try {
} ___ (Exception e) {
    System.out.println("Error");
}`,
              answer: "catch"
            },
            {
              question: "What block always executes?",
              type: "fill",
              starterCode: `try {
} catch (Exception e) {
} ___ {
    // Always runs
}`,
              answer: "finally"
            }
          ]
        },
        {
          id: "java-multiple-exceptions",
          title: "Java Multiple Exceptions",
          explanation: "You can catch multiple exceptions in one catch block or use multiple catch blocks. Multiple catch blocks handle different exception types. Order matters - catch more specific exceptions before general ones. Java 7+ allows catching multiple exceptions in one catch block using pipe (|). Multiple exception handling provides better error messages and recovery strategies.",
          syntax: "catch (Exception1 | Exception2 e) { }\ncatch (Exception1 e) { } catch (Exception2 e) { }",
          examples: [
            {
              title: "Multiple Exceptions Example",
              description: "Handling multiple exception types",
              code: `// Multiple catch blocks
try {
    int[] arr = {1, 2, 3};
    String str = null;
    int num = Integer.parseInt("abc");
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array index error");
} catch (NullPointerException e) {
    System.out.println("Null pointer error");
} catch (NumberFormatException e) {
    System.out.println("Number format error");
}

// Catching multiple exceptions in one block (Java 7+)
try {
    // code that might throw multiple exceptions
} catch (NullPointerException | ArrayIndexOutOfBoundsException e) {
    System.out.println("Caught: " + e.getClass().getSimpleName());
}

// General exception catch (should be last)
try {
    // code
} catch (SpecificException e) {
    // handle specific
} catch (Exception e) {
    // handle all others
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What symbol separates multiple exceptions in one catch?",
              type: "fill",
              starterCode: `catch (Exception1 ___ Exception2 e) {
}`,
              answer: "|"
            },
            {
              question: "Should specific exceptions come before general ones? Answer yes or no.",
              type: "fill",
              starterCode: `// Specific exceptions should come first
// Answer: ___`,
              answer: "yes"
            },
            {
              question: "Complete multiple catch blocks",
              type: "fill",
              starterCode: `try {
} catch (Exception1 e) {
} ___ (Exception2 e) {
}`,
              answer: "catch"
            }
          ]
        },
        {
          id: "java-try-with-resources",
          title: "try-with-resources",
          explanation: "Try-with-resources automatically closes resources like files, streams, and connections. Resources are declared in parentheses after try. Resources must implement AutoCloseable interface. Try-with-resources eliminates need for finally blocks to close resources. It prevents resource leaks. Try-with-resources was introduced in Java 7. It's cleaner than manual resource management.",
          syntax: "try (ResourceType resource = new Resource()) { code }\n// Resource automatically closed",
          examples: [
            {
              title: "try-with-resources Example",
              description: "Using try-with-resources for automatic resource management",
              code: `import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

// Try-with-resources automatically closes FileWriter
try (FileWriter writer = new FileWriter("file.txt")) {
    writer.write("Hello World");
    // FileWriter automatically closed here
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}

// Multiple resources
try (FileWriter writer = new FileWriter("file.txt");
     Scanner scanner = new Scanner(System.in)) {
    writer.write("Data");
    String input = scanner.nextLine();
    // Both resources automatically closed
} catch (IOException e) {
    e.printStackTrace();
}

// Before Java 7 (manual closing)
FileWriter writer = null;
try {
    writer = new FileWriter("file.txt");
    writer.write("Hello");
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (writer != null) {
        try {
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What interface must resources implement for try-with-resources?",
              type: "fill",
              starterCode: `// Resources must implement ___
// Answer: AutoCloseable`,
              answer: "AutoCloseable"
            },
            {
              question: "Complete the try-with-resources syntax",
              type: "fill",
              starterCode: `try (FileWriter writer = new FileWriter("file.txt")) {
    writer.write("Hello");
}  // Resource automatically ___`,
              answer: "closed"
            },
            {
              question: "What Java version introduced try-with-resources?",
              type: "fill",
              starterCode: `// Try-with-resources introduced in Java ___
// Answer: 7`,
              answer: "7"
            }
          ]
        }
      ]
    },
    {
      id: "file-handling",
      title: "Java File Handling",
      topics: [
        {
          id: "java-files",
          title: "Java Files",
          explanation: "File handling allows programs to read from and write to files. Java provides classes like File, FileReader, FileWriter, Scanner, and BufferedReader for file operations. Files are essential for data persistence. File operations can throw IOException, so exception handling is required. Understanding file paths (absolute and relative) is important for file operations.",
          syntax: "File file = new File(\"path\");\nFileReader reader = new FileReader(file);\nFileWriter writer = new FileWriter(file);",
          examples: [
            {
              title: "File Operations Example",
              description: "Working with files",
              code: `import java.io.File;
import java.io.IOException;

// Create File object
File file = new File("data.txt");

// Check if file exists
if (file.exists()) {
    System.out.println("File exists");
    System.out.println("File size: " + file.length() + " bytes");
} else {
    System.out.println("File does not exist");
}

// Get file information
System.out.println("File name: " + file.getName());
System.out.println("Absolute path: " + file.getAbsolutePath());
System.out.println("Can read: " + file.canRead());
System.out.println("Can write: " + file.canWrite());`
            }
          ],
          practiceQuestions: [
            {
              question: "What class represents a file?",
              type: "fill",
              starterCode: `___ file = new File("data.txt");`,
              answer: "File"
            },
            {
              question: "What method checks if file exists?",
              type: "fill",
              starterCode: `File f = new File("data.txt");
if (f.___()) {
    System.out.println("Exists");
}`,
              answer: "exists"
            },
            {
              question: "What exception do file operations throw?",
              type: "fill",
              starterCode: `// File operations throw ___
// Answer: IOException`,
              answer: "IOException"
            }
          ]
        },
        {
          id: "java-create-files",
          title: "Create Files",
          explanation: "Creating files in Java can be done using File class with createNewFile() method or FileWriter/FileOutputStream. createNewFile() returns true if file was created, false if it already exists. FileWriter automatically creates file if it doesn't exist when writing. Always handle IOException when creating files. Check if file exists before creating to avoid overwriting.",
          syntax: "File file = new File(\"filename.txt\");\nfile.createNewFile();\n// or\nFileWriter writer = new FileWriter(\"filename.txt\");",
          examples: [
            {
              title: "Creating Files Example",
              description: "Different ways to create files",
              code: `import java.io.File;
import java.io.IOException;
import java.io.FileWriter;

// Method 1: Using createNewFile()
try {
    File file = new File("newfile.txt");
    if (file.createNewFile()) {
        System.out.println("File created: " + file.getName());
    } else {
        System.out.println("File already exists");
    }
} catch (IOException e) {
    System.out.println("Error creating file: " + e.getMessage());
}

// Method 2: Using FileWriter (creates file automatically)
try {
    FileWriter writer = new FileWriter("data.txt");
    writer.write("Hello World");
    writer.close();
    System.out.println("File created and written");
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}

// Method 3: Create file in specific directory
File dir = new File("mydir");
dir.mkdirs();  // Create directory if doesn't exist
File file = new File(dir, "file.txt");
file.createNewFile();`
            }
          ],
          practiceQuestions: [
            {
              question: "What method creates a new file?",
              type: "fill",
              starterCode: `File file = new File("data.txt");
file.___();`,
              answer: "createNewFile"
            },
            {
              question: "Does FileWriter create file automatically? Answer yes or no.",
              type: "fill",
              starterCode: `// FileWriter creates file automatically
// Answer: ___`,
              answer: "yes"
            },
            {
              question: "What does createNewFile() return if file already exists?",
              type: "fill",
              starterCode: `// createNewFile() returns ___ if file exists
// Answer: false`,
              answer: "false"
            }
          ]
        },
        {
          id: "java-write-files",
          title: "Write Files",
          explanation: "Writing to files stores data persistently. FileWriter and BufferedWriter are common classes for writing. FileWriter writes character data. BufferedWriter provides buffering for better performance. Always close writers to flush data and free resources. Use try-with-resources for automatic closing. Writing can append to existing files or overwrite them.",
          syntax: "FileWriter writer = new FileWriter(\"file.txt\");\nwriter.write(\"text\");\nwriter.close();",
          examples: [
            {
              title: "Writing to Files Example",
              description: "Writing data to files",
              code: `import java.io.FileWriter;
import java.io.BufferedWriter;
import java.io.IOException;

// Method 1: Using FileWriter
try (FileWriter writer = new FileWriter("output.txt")) {
    writer.write("Hello World\\n");
    writer.write("This is line 2");
    // Automatically closed
} catch (IOException e) {
    System.out.println("Error writing file: " + e.getMessage());
}

// Method 2: Using BufferedWriter (better performance)
try (BufferedWriter writer = new BufferedWriter(
        new FileWriter("data.txt"))) {
    writer.write("Line 1");
    writer.newLine();  // Platform-independent newline
    writer.write("Line 2");
} catch (IOException e) {
    e.printStackTrace();
}

// Append to existing file
try (FileWriter writer = new FileWriter("log.txt", true)) {
    writer.write("New log entry\\n");
} catch (IOException e) {
    e.printStackTrace();
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What class writes character data to files?",
              type: "fill",
              starterCode: `___ writer = new FileWriter("file.txt");`,
              answer: "FileWriter"
            },
            {
              question: "What method writes text to file?",
              type: "fill",
              starterCode: `FileWriter writer = new FileWriter("file.txt");
writer.___("Hello");`,
              answer: "write"
            },
            {
              question: "What parameter makes FileWriter append instead of overwrite?",
              type: "fill",
              starterCode: `FileWriter writer = new FileWriter("file.txt", ___);`,
              answer: "true"
            }
          ]
        },
        {
          id: "java-read-files",
          title: "Read Files",
          explanation: "Reading files retrieves data from files. FileReader and BufferedReader are common classes for reading. Scanner can also read files. BufferedReader provides buffering for better performance. Read line by line or character by character. Always close readers to free resources. Use try-with-resources for automatic closing. Handle IOException when reading files.",
          syntax: "FileReader reader = new FileReader(\"file.txt\");\nBufferedReader br = new BufferedReader(reader);\nString line = br.readLine();",
          examples: [
            {
              title: "Reading Files Example",
              description: "Reading data from files",
              code: `import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.Scanner;

// Method 1: Using BufferedReader
try (BufferedReader reader = new BufferedReader(
        new FileReader("data.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    System.out.println("Error reading file: " + e.getMessage());
}

// Method 2: Using Scanner
try (Scanner scanner = new Scanner(new File("data.txt"))) {
    while (scanner.hasNextLine()) {
        String line = scanner.nextLine();
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}

// Read entire file as string
try (BufferedReader reader = new BufferedReader(
        new FileReader("file.txt"))) {
    StringBuilder content = new StringBuilder();
    String line;
    while ((line = reader.readLine()) != null) {
        content.append(line).append("\\n");
    }
    System.out.println(content.toString());
} catch (IOException e) {
    e.printStackTrace();
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What class reads character data from files?",
              type: "fill",
              starterCode: `FileReader reader = new FileReader("file.txt");
BufferedReader br = new BufferedReader(___);`,
              answer: "reader"
            },
            {
              question: "What method reads a line from file?",
              type: "fill",
              starterCode: `BufferedReader br = new BufferedReader(reader);
String line = br.___();`,
              answer: "readLine"
            },
            {
              question: "What does readLine() return when end of file is reached?",
              type: "fill",
              starterCode: `// readLine() returns ___ at end of file
// Answer: null`,
              answer: "null"
            }
          ]
        },
        {
          id: "java-delete-files",
          title: "Delete Files",
          explanation: "Deleting files removes them from the file system. Use delete() method on File object. delete() returns true if file was deleted, false if deletion failed. Check if file exists before deleting. Deleting directories requires them to be empty first. Always handle potential IOException. File deletion is permanent - deleted files cannot be recovered easily.",
          syntax: "File file = new File(\"file.txt\");\nfile.delete();\n// or\nfile.deleteOnExit();",
          examples: [
            {
              title: "Deleting Files Example",
              description: "Deleting files and directories",
              code: `import java.io.File;

// Delete a file
File file = new File("temp.txt");
if (file.exists()) {
    if (file.delete()) {
        System.out.println("File deleted: " + file.getName());
    } else {
        System.out.println("Failed to delete file");
    }
} else {
    System.out.println("File does not exist");
}

// Delete on program exit
File tempFile = new File("temp.txt");
tempFile.deleteOnExit();  // Deletes when JVM exits

// Delete directory (must be empty)
File dir = new File("mydir");
if (dir.exists() && dir.isDirectory()) {
    if (dir.delete()) {
        System.out.println("Directory deleted");
    } else {
        System.out.println("Directory not empty or cannot delete");
    }
}

// Recursive directory deletion (Java 7+)
import java.nio.file.Files;
import java.nio.file.Path;
try {
    Path path = Paths.get("mydir");
    Files.deleteIfExists(path);  // Deletes file or empty directory
    Files.delete(path);  // Throws exception if doesn't exist
} catch (IOException e) {
    e.printStackTrace();
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What method deletes a file?",
              type: "fill",
              starterCode: `File file = new File("temp.txt");
file.___();`,
              answer: "delete"
            },
            {
              question: "What does delete() return if successful?",
              type: "fill",
              starterCode: `// delete() returns ___ if successful
// Answer: true`,
              answer: "true"
            },
            {
              question: "What method deletes file when program exits?",
              type: "fill",
              starterCode: `File file = new File("temp.txt");
file.___();`,
              answer: "deleteOnExit"
            }
          ]
        }
      ]
    },
    {
      id: "io-streams",
      title: "Java I/O Streams",
      topics: [
        {
          id: "java-fileinputstream",
          title: "FileInputStream",
          explanation: "FileInputStream reads raw bytes from files. It's used for reading binary data like images, audio, or any file as bytes. FileInputStream extends InputStream. Read bytes one at a time or into a byte array. Always close the stream to free resources. Use try-with-resources for automatic closing. FileInputStream throws FileNotFoundException if file doesn't exist.",
          syntax: "FileInputStream fis = new FileInputStream(\"file.txt\");\nint byte = fis.read();\nbyte[] buffer = new byte[1024];\nint bytesRead = fis.read(buffer);",
          examples: [
            {
              title: "FileInputStream Example",
              description: "Reading bytes from a file",
              code: `import java.io.FileInputStream;
import java.io.IOException;

// Read file as bytes
try (FileInputStream fis = new FileInputStream("data.txt")) {
    int byteData;
    while ((byteData = fis.read()) != -1) {
        System.out.print((char) byteData);  // Convert byte to char
    }
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}

// Read into byte array (more efficient)
try (FileInputStream fis = new FileInputStream("file.txt")) {
    byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = fis.read(buffer)) != -1) {
                // Process buffer
                for (int i = 0; i < bytesRead; i++) {
                    System.out.print((char) buffer[i]);
                }
            }
} catch (IOException e) {
    e.printStackTrace();
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What class reads bytes from files?",
              type: "fill",
              starterCode: `___ fis = new FileInputStream("file.txt");`,
              answer: "FileInputStream"
            },
            {
              question: "What does read() return at end of file?",
              type: "fill",
              starterCode: `// read() returns ___ at end of file
// Answer: -1`,
              answer: "-1"
            },
            {
              question: "Complete the FileInputStream read",
              type: "fill",
              starterCode: `FileInputStream fis = new FileInputStream("file.txt");
int byte = fis.___();`,
              answer: "read"
            }
          ]
        },
        {
          id: "java-fileoutputstream",
          title: "FileOutputStream",
          explanation: "FileOutputStream writes raw bytes to files. It's used for writing binary data. FileOutputStream extends OutputStream. Write bytes one at a time or from a byte array. Always close the stream to flush data and free resources. Use try-with-resources for automatic closing. FileOutputStream can append to existing files or overwrite them.",
          syntax: "FileOutputStream fos = new FileOutputStream(\"file.txt\");\nfos.write(byte);\nfos.write(byteArray);",
          examples: [
            {
              title: "FileOutputStream Example",
              description: "Writing bytes to a file",
              code: `import java.io.FileOutputStream;
import java.io.IOException;

// Write bytes to file
try (FileOutputStream fos = new FileOutputStream("output.txt")) {
    String text = "Hello World";
    byte[] bytes = text.getBytes();
    fos.write(bytes);
    System.out.println("Data written");
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}

// Write single bytes
try (FileOutputStream fos = new FileOutputStream("data.bin")) {
    fos.write(65);  // Write byte value
    fos.write(66);
    fos.write(67);
} catch (IOException e) {
    e.printStackTrace();
}

// Append to existing file
try (FileOutputStream fos = new FileOutputStream("log.txt", true)) {
    String newData = "New entry\\n";
    fos.write(newData.getBytes());
} catch (IOException e) {
    e.printStackTrace();
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What class writes bytes to files?",
              type: "fill",
              starterCode: `___ fos = new FileOutputStream("file.txt");`,
              answer: "FileOutputStream"
            },
            {
              question: "What method writes bytes to file?",
              type: "fill",
              starterCode: `FileOutputStream fos = new FileOutputStream("file.txt");
fos.___(data.getBytes());`,
              answer: "write"
            },
            {
              question: "What parameter makes FileOutputStream append?",
              type: "fill",
              starterCode: `FileOutputStream fos = new FileOutputStream("file.txt", ___);`,
              answer: "true"
            }
          ]
        },
        {
          id: "java-bufferedreader",
          title: "BufferedReader",
          explanation: "BufferedReader reads text from character input streams efficiently. It buffers characters for better performance. BufferedReader wraps other readers like FileReader. Use readLine() to read entire lines. BufferedReader reduces I/O operations by reading larger chunks. Always close BufferedReader to free resources. Use try-with-resources for automatic closing.",
          syntax: "BufferedReader br = new BufferedReader(new FileReader(\"file.txt\"));\nString line = br.readLine();",
          examples: [
            {
              title: "BufferedReader Example",
              description: "Reading text efficiently with buffering",
              code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

// Read file line by line
try (BufferedReader br = new BufferedReader(
        new FileReader("data.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}

// Read all lines into a list
import java.util.ArrayList;
import java.util.List;

List<String> lines = new ArrayList<>();
try (BufferedReader br = new BufferedReader(
        new FileReader("file.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        lines.add(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}

// Read from standard input
BufferedReader reader = new BufferedReader(
    new InputStreamReader(System.in));
String input = reader.readLine();`
            }
          ],
          practiceQuestions: [
            {
              question: "What class provides buffered reading?",
              type: "fill",
              starterCode: `___ br = new BufferedReader(new FileReader("file.txt"));`,
              answer: "BufferedReader"
            },
            {
              question: "What method reads a line?",
              type: "fill",
              starterCode: `BufferedReader br = new BufferedReader(reader);
String line = br.___();`,
              answer: "readLine"
            },
            {
              question: "What does BufferedReader wrap?",
              type: "fill",
              starterCode: `// BufferedReader wraps other ___
// Answer: readers`,
              answer: "readers"
            }
          ]
        },
        {
          id: "java-bufferedwriter",
          title: "BufferedWriter",
          explanation: "BufferedWriter writes text to character output streams efficiently. It buffers characters for better performance. BufferedWriter wraps other writers like FileWriter. Use write() to write text and newLine() for platform-independent line breaks. BufferedWriter reduces I/O operations by writing larger chunks. Always close BufferedWriter to flush buffer and free resources.",
          syntax: "BufferedWriter bw = new BufferedWriter(new FileWriter(\"file.txt\"));\nbw.write(\"text\");\nbw.newLine();",
          examples: [
            {
              title: "BufferedWriter Example",
              description: "Writing text efficiently with buffering",
              code: `import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

// Write to file with buffering
try (BufferedWriter bw = new BufferedWriter(
        new FileWriter("output.txt"))) {
    bw.write("Line 1");
    bw.newLine();  // Platform-independent newline
    bw.write("Line 2");
    bw.newLine();
    bw.write("Line 3");
    // Buffer automatically flushed and closed
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}

// Append mode
try (BufferedWriter bw = new BufferedWriter(
        new FileWriter("log.txt", true))) {
    bw.write("New entry");
    bw.newLine();
} catch (IOException e) {
    e.printStackTrace();
}

// Write multiple lines
String[] lines = {"Line 1", "Line 2", "Line 3"};
try (BufferedWriter bw = new BufferedWriter(
        new FileWriter("data.txt"))) {
    for (String line : lines) {
        bw.write(line);
        bw.newLine();
    }
} catch (IOException e) {
    e.printStackTrace();
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What class provides buffered writing?",
              type: "fill",
              starterCode: `___ bw = new BufferedWriter(new FileWriter("file.txt"));`,
              answer: "BufferedWriter"
            },
            {
              question: "What method writes platform-independent newline?",
              type: "fill",
              starterCode: `BufferedWriter bw = new BufferedWriter(writer);
bw.___();`,
              answer: "newLine"
            },
            {
              question: "What does BufferedWriter wrap?",
              type: "fill",
              starterCode: `// BufferedWriter wraps other ___
// Answer: writers`,
              answer: "writers"
            }
          ]
        }
      ]
    },
    {
      id: "data-structures",
      title: "Java Data Structures",
      topics: [
        {
          id: "java-collections",
          title: "Java Collections",
          explanation: "Collections framework provides data structures for storing and manipulating groups of objects. Collections are more flexible than arrays. Main interfaces: Collection, List, Set, Map, Queue. Collections are part of java.util package. Collections provide methods for adding, removing, searching, and iterating. Collections are generic and type-safe. Common implementations include ArrayList, HashSet, HashMap.",
          syntax: "Collection<E>, List<E>, Set<E>, Map<K,V>\nimport java.util.*;",
          examples: [
            {
              title: "Collections Framework Example",
              description: "Overview of collections",
              code: `import java.util.*;

// List - ordered, allows duplicates
List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");

// Set - no duplicates
Set<String> set = new HashSet<>();
set.add("Apple");
set.add("Apple");  // Ignored

// Map - key-value pairs
Map<String, Integer> map = new HashMap<>();
map.put("Apple", 5);
map.put("Banana", 3);

// Queue - FIFO
Queue<String> queue = new LinkedList<>();
queue.offer("First");
queue.offer("Second");

System.out.println("List: " + list);
System.out.println("Set: " + set);
System.out.println("Map: " + map);
System.out.println("Queue: " + queue);`
            }
          ],
          practiceQuestions: [
            {
              question: "What package contains collections?",
              type: "fill",
              starterCode: `import java.___.*;  // Collections package`,
              answer: "util"
            },
            {
              question: "What interface represents ordered collections?",
              type: "fill",
              starterCode: `___<String> list = new ArrayList<>();`,
              answer: "List"
            },
            {
              question: "What interface represents key-value pairs?",
              type: "fill",
              starterCode: `___<String, Integer> map = new HashMap<>();`,
              answer: "Map"
            }
          ]
        },
        {
          id: "java-list",
          title: "List",
          explanation: "List is an ordered collection that allows duplicates. Elements are accessed by index. List maintains insertion order. Common implementations: ArrayList (dynamic array), LinkedList (doubly-linked list). List provides methods: add(), get(), remove(), size(), contains(). Lists are zero-indexed. Lists are part of Collections framework.",
          syntax: "List<Type> list = new ArrayList<>();\nlist.add(element);\nlist.get(index);\nlist.remove(index);",
          examples: [
            {
              title: "List Example",
              description: "Using List interface",
              code: `import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

// Create list
List<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Access elements
System.out.println(fruits.get(0));  // Apple
System.out.println(fruits.size());  // 3

// Check if contains
if (fruits.contains("Apple")) {
    System.out.println("Found Apple");
}

// Remove element
fruits.remove(1);  // Removes Banana
System.out.println(fruits);  // [Apple, Orange]

// Iterate
for (String fruit : fruits) {
    System.out.println(fruit);
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What method adds element to list?",
              type: "fill",
              starterCode: `List<String> list = new ArrayList<>();
list.___("Apple");`,
              answer: "add"
            },
            {
              question: "What method gets element by index?",
              type: "fill",
              starterCode: `List<String> list = new ArrayList<>();
String item = list.___(0);`,
              answer: "get"
            },
            {
              question: "Does List allow duplicates? Answer yes or no.",
              type: "fill",
              starterCode: `// List allows duplicates
// Answer: ___`,
              answer: "yes"
            }
          ]
        },
        {
          id: "java-arraylist",
          title: "ArrayList",
          explanation: "ArrayList is a resizable array implementation of List. ArrayList grows dynamically as elements are added. ArrayList provides fast random access by index. ArrayList is not synchronized (not thread-safe). Use ArrayList when you need frequent access by index. ArrayList is backed by an array internally. Adding/removing from end is fast, but from middle is slower.",
          syntax: "ArrayList<Type> list = new ArrayList<>();\nlist.add(element);\nlist.get(index);\nlist.size();",
          examples: [
            {
              title: "ArrayList Example",
              description: "Using ArrayList for dynamic arrays",
              code: `import java.util.ArrayList;

// Create ArrayList
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

// Access elements
System.out.println(names.get(0));  // Alice
System.out.println(names.size());  // 3

// Modify
names.set(1, "Bobby");  // Replace Bob with Bobby
names.remove(2);  // Remove Charlie

// Check if empty
if (!names.isEmpty()) {
    System.out.println("List has " + names.size() + " elements");
}

// Clear all
names.clear();
System.out.println(names.size());  // 0

// Initialize with values
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(10);
numbers.add(20);
numbers.add(30);`
            }
          ],
          practiceQuestions: [
            {
              question: "What is ArrayList?",
              type: "fill",
              starterCode: `// ArrayList is a resizable ___
// Answer: array`,
              answer: "array"
            },
            {
              question: "What method replaces element at index?",
              type: "fill",
              starterCode: `ArrayList<String> list = new ArrayList<>();
list.___(0, "New");`,
              answer: "set"
            },
            {
              question: "What method removes all elements?",
              type: "fill",
              starterCode: `ArrayList<String> list = new ArrayList<>();
list.___();`,
              answer: "clear"
            }
          ]
        },
        {
          id: "java-linkedlist",
          title: "LinkedList",
          explanation: "LinkedList is a doubly-linked list implementation of List and Queue. LinkedList stores elements in nodes with references to next and previous nodes. LinkedList provides fast insertion/deletion at any position. LinkedList is slower for random access by index. Use LinkedList when you need frequent insertions/deletions. LinkedList implements both List and Deque interfaces.",
          syntax: "LinkedList<Type> list = new LinkedList<>();\nlist.add(element);\nlist.addFirst(element);\nlist.addLast(element);",
          examples: [
            {
              title: "LinkedList Example",
              description: "Using LinkedList for efficient insertions",
              code: `import java.util.LinkedList;

// Create LinkedList
LinkedList<String> list = new LinkedList<>();
list.add("First");
list.add("Second");
list.add("Third");

// Add at beginning
list.addFirst("Zero");
System.out.println(list);  // [Zero, First, Second, Third]

// Add at end
list.addLast("Fourth");
System.out.println(list);  // [Zero, First, Second, Third, Fourth]

// Remove from beginning
String first = list.removeFirst();
System.out.println("Removed: " + first);

// Remove from end
String last = list.removeLast();
System.out.println("Removed: " + last);

// Access first and last
System.out.println("First: " + list.getFirst());
System.out.println("Last: " + list.getLast());`
            }
          ],
          practiceQuestions: [
            {
              question: "What method adds element at beginning?",
              type: "fill",
              starterCode: `LinkedList<String> list = new LinkedList<>();
list.___("First");`,
              answer: "addFirst"
            },
            {
              question: "What method removes first element?",
              type: "fill",
              starterCode: `LinkedList<String> list = new LinkedList<>();
String first = list.___();`,
              answer: "removeFirst"
            },
            {
              question: "Is LinkedList faster for random access? Answer yes or no.",
              type: "fill",
              starterCode: `// LinkedList is slower for random access
// Answer: ___`,
              answer: "no"
            }
          ]
        },
        {
          id: "java-set",
          title: "Set",
          explanation: "Set is a collection that does not allow duplicate elements. Set has no specific order (unless using LinkedHashSet or TreeSet). Common implementations: HashSet (hash table), TreeSet (sorted), LinkedHashSet (insertion order). Set provides methods: add(), remove(), contains(), size(). Set is useful when you need unique elements. Set doesn't have get() method - use iteration.",
          syntax: "Set<Type> set = new HashSet<>();\nset.add(element);\nset.contains(element);\nset.remove(element);",
          examples: [
            {
              title: "Set Example",
              description: "Using Set for unique elements",
              code: `import java.util.HashSet;
import java.util.Set;

// Create Set
Set<String> uniqueNames = new HashSet<>();
uniqueNames.add("Alice");
uniqueNames.add("Bob");
uniqueNames.add("Alice");  // Duplicate, ignored

System.out.println(uniqueNames.size());  // 2

// Check if contains
if (uniqueNames.contains("Alice")) {
    System.out.println("Alice is in set");
}

// Remove element
uniqueNames.remove("Bob");

// Iterate (no specific order)
for (String name : uniqueNames) {
    System.out.println(name);
}

// Check if empty
if (uniqueNames.isEmpty()) {
    System.out.println("Set is empty");
}`
            }
          ],
          practiceQuestions: [
            {
              question: "Does Set allow duplicates? Answer yes or no.",
              type: "fill",
              starterCode: `// Set does not allow duplicates
// Answer: ___`,
              answer: "no"
            },
            {
              question: "What method checks if element exists?",
              type: "fill",
              starterCode: `Set<String> set = new HashSet<>();
if (set.___("Alice")) {
}`,
              answer: "contains"
            },
            {
              question: "What is common Set implementation?",
              type: "fill",
              starterCode: `Set<String> set = new ___<>();`,
              answer: "HashSet"
            }
          ]
        },
        {
          id: "java-hashset",
          title: "HashSet",
          explanation: "HashSet is a hash table implementation of Set. HashSet provides constant-time performance for add, remove, and contains operations. HashSet doesn't maintain any order. HashSet allows one null element. HashSet uses hashCode() and equals() methods. HashSet is not synchronized. Use HashSet when you need fast lookups and don't care about order.",
          syntax: "HashSet<Type> set = new HashSet<>();\nset.add(element);\nset.contains(element);",
          examples: [
            {
              title: "HashSet Example",
              description: "Using HashSet for fast lookups",
              code: `import java.util.HashSet;

// Create HashSet
HashSet<String> set = new HashSet<>();
set.add("Apple");
set.add("Banana");
set.add("Orange");
set.add("Apple");  // Duplicate ignored

System.out.println(set.size());  // 3

// Fast lookup
if (set.contains("Apple")) {
    System.out.println("Found Apple");
}

// Remove
set.remove("Banana");

// Iterate (no guaranteed order)
for (String fruit : set) {
    System.out.println(fruit);
}

// Clear
set.clear();
System.out.println(set.isEmpty());  // true`
            }
          ],
          practiceQuestions: [
            {
              question: "What does HashSet use for fast lookups?",
              type: "fill",
              starterCode: `// HashSet uses hash ___
// Answer: table`,
              answer: "table"
            },
            {
              question: "Does HashSet maintain order? Answer yes or no.",
              type: "fill",
              starterCode: `// HashSet does not maintain order
// Answer: ___`,
              answer: "no"
            },
            {
              question: "What methods does HashSet use internally?",
              type: "fill",
              starterCode: `// HashSet uses hashCode() and ___
// Answer: equals()`,
              answer: "equals()"
            }
          ]
        },
        {
          id: "java-treeset",
          title: "TreeSet",
          explanation: "TreeSet is a sorted Set implementation using a Red-Black tree. TreeSet maintains elements in sorted order (ascending by default). TreeSet requires elements to be Comparable or provide a Comparator. TreeSet provides guaranteed O(log n) time for operations. TreeSet doesn't allow null elements. Use TreeSet when you need sorted unique elements.",
          syntax: "TreeSet<Type> set = new TreeSet<>();\nset.add(element);\nset.first();\nset.last();",
          examples: [
            {
              title: "TreeSet Example",
              description: "Using TreeSet for sorted unique elements",
              code: `import java.util.TreeSet;

// Create TreeSet (automatically sorted)
TreeSet<Integer> numbers = new TreeSet<>();
numbers.add(5);
numbers.add(2);
numbers.add(8);
numbers.add(1);

// Elements are sorted
System.out.println(numbers);  // [1, 2, 5, 8]

// Get first and last
System.out.println("First: " + numbers.first());  // 1
System.out.println("Last: " + numbers.last());   // 8

// Get elements less than or equal to
System.out.println(numbers.headSet(5));  // [1, 2]

// Get elements greater than or equal to
System.out.println(numbers.tailSet(5));   // [5, 8]

// Remove
numbers.remove(2);
System.out.println(numbers);  // [1, 5, 8]`
            }
          ],
          practiceQuestions: [
            {
              question: "What does TreeSet maintain?",
              type: "fill",
              starterCode: `// TreeSet maintains ___ order
// Answer: sorted`,
              answer: "sorted"
            },
            {
              question: "What method gets first element?",
              type: "fill",
              starterCode: `TreeSet<Integer> set = new TreeSet<>();
int first = set.___();`,
              answer: "first"
            },
            {
              question: "Does TreeSet allow null? Answer yes or no.",
              type: "fill",
              starterCode: `// TreeSet does not allow null
// Answer: ___`,
              answer: "no"
            }
          ]
        },
        {
          id: "java-map",
          title: "Map",
          explanation: "Map stores key-value pairs. Each key maps to exactly one value. Keys must be unique. Map provides fast lookup by key. Common implementations: HashMap (hash table), TreeMap (sorted), LinkedHashMap (insertion order). Map methods: put(key, value), get(key), remove(key), containsKey(key), size(). Map is not a Collection but part of Collections framework.",
          syntax: "Map<KeyType, ValueType> map = new HashMap<>();\nmap.put(key, value);\nmap.get(key);\nmap.containsKey(key);",
          examples: [
            {
              title: "Map Example",
              description: "Using Map for key-value storage",
              code: `import java.util.HashMap;
import java.util.Map;

// Create Map
Map<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);
ages.put("Charlie", 28);

// Get value by key
int aliceAge = ages.get("Alice");
System.out.println("Alice is " + aliceAge + " years old");

// Check if key exists
if (ages.containsKey("Bob")) {
    System.out.println("Bob's age: " + ages.get("Bob"));
}

// Remove
ages.remove("Charlie");

// Get all keys
for (String name : ages.keySet()) {
    System.out.println(name + ": " + ages.get(name));
}

// Get all values
for (Integer age : ages.values()) {
    System.out.println("Age: " + age);
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What does Map store?",
              type: "fill",
              starterCode: `// Map stores key-___ pairs
// Answer: value`,
              answer: "value"
            },
            {
              question: "What method adds key-value pair?",
              type: "fill",
              starterCode: `Map<String, Integer> map = new HashMap<>();
map.___("Alice", 25);`,
              answer: "put"
            },
            {
              question: "What method gets value by key?",
              type: "fill",
              starterCode: `Map<String, Integer> map = new HashMap<>();
int value = map.___("Alice");`,
              answer: "get"
            }
          ]
        },
        {
          id: "java-hashmap",
          title: "HashMap",
          explanation: "HashMap is a hash table implementation of Map. HashMap provides constant-time performance for get and put operations. HashMap doesn't maintain any order. HashMap allows one null key and multiple null values. HashMap uses hashCode() and equals() for keys. HashMap is not synchronized. Use HashMap for fast key-value lookups when order doesn't matter.",
          syntax: "HashMap<KeyType, ValueType> map = new HashMap<>();\nmap.put(key, value);\nmap.get(key);",
          examples: [
            {
              title: "HashMap Example",
              description: "Using HashMap for fast key-value lookups",
              code: `import java.util.HashMap;

// Create HashMap
HashMap<String, String> capitals = new HashMap<>();
capitals.put("USA", "Washington");
capitals.put("France", "Paris");
capitals.put("Japan", "Tokyo");

// Fast lookup
String capital = capitals.get("France");
System.out.println("Capital of France: " + capital);

// Check if key exists
if (capitals.containsKey("Japan")) {
    System.out.println("Found Japan");
}

// Update value
capitals.put("USA", "Washington D.C.");

// Remove
capitals.remove("Japan");

// Iterate
for (String country : capitals.keySet()) {
    System.out.println(country + ": " + capitals.get(country));
}

// Get size
System.out.println("Number of entries: " + capitals.size());`
            }
          ],
          practiceQuestions: [
            {
              question: "What provides constant-time performance for HashMap?",
              type: "fill",
              starterCode: `// HashMap uses hash ___
// Answer: table`,
              answer: "table"
            },
            {
              question: "Does HashMap maintain order? Answer yes or no.",
              type: "fill",
              starterCode: `// HashMap does not maintain order
// Answer: ___`,
              answer: "no"
            },
            {
              question: "How many null keys does HashMap allow?",
              type: "fill",
              starterCode: `// HashMap allows ___ null key
// Answer: one`,
              answer: "one"
            }
          ]
        },
        {
          id: "java-treemap",
          title: "TreeMap",
          explanation: "TreeMap is a sorted Map implementation using a Red-Black tree. TreeMap maintains keys in sorted order (ascending by default). TreeMap requires keys to be Comparable or provide a Comparator. TreeMap provides guaranteed O(log n) time for operations. TreeMap doesn't allow null keys. Use TreeMap when you need sorted key-value pairs.",
          syntax: "TreeMap<KeyType, ValueType> map = new TreeMap<>();\nmap.put(key, value);\nmap.firstKey();\nmap.lastKey();",
          examples: [
            {
              title: "TreeMap Example",
              description: "Using TreeMap for sorted key-value pairs",
              code: `import java.util.TreeMap;

// Create TreeMap (keys automatically sorted)
TreeMap<Integer, String> scores = new TreeMap<>();
scores.put(85, "Alice");
scores.put(92, "Bob");
scores.put(78, "Charlie");

// Keys are sorted
System.out.println(scores);  // {78=Charlie, 85=Alice, 92=Bob}

// Get first and last key
System.out.println("Lowest score: " + scores.firstKey());
System.out.println("Highest score: " + scores.lastKey());

// Get entry with lowest key
System.out.println("First entry: " + scores.firstEntry());

// Get entries less than key
System.out.println(scores.headMap(90));  // {78=Charlie, 85=Alice}

// Get entries greater than or equal to key
System.out.println(scores.tailMap(85));  // {85=Alice, 92=Bob}`
            }
          ],
          practiceQuestions: [
            {
              question: "What does TreeMap maintain?",
              type: "fill",
              starterCode: `// TreeMap maintains ___ keys
// Answer: sorted`,
              answer: "sorted"
            },
            {
              question: "What method gets first key?",
              type: "fill",
              starterCode: `TreeMap<Integer, String> map = new TreeMap<>();
int first = map.___();`,
              answer: "firstKey"
            },
            {
              question: "Does TreeMap allow null keys? Answer yes or no.",
              type: "fill",
              starterCode: `// TreeMap does not allow null keys
// Answer: ___`,
              answer: "no"
            }
          ]
        },
        {
          id: "java-iterator",
          title: "Iterator",
          explanation: "Iterator provides a way to traverse collections safely. Iterator allows removing elements during iteration. Use iterator() method to get Iterator. Iterator methods: hasNext(), next(), remove(). Iterator is fail-fast - throws ConcurrentModificationException if collection is modified during iteration. Enhanced for-loop uses Iterator internally. Iterator is useful for safe iteration.",
          syntax: "Iterator<Type> it = collection.iterator();\nwhile (it.hasNext()) { Type element = it.next(); }",
          examples: [
            {
              title: "Iterator Example",
              description: "Using Iterator to traverse collections",
              code: `import java.util.ArrayList;
import java.util.Iterator;

ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Get Iterator
Iterator<String> it = fruits.iterator();

// Iterate
while (it.hasNext()) {
    String fruit = it.next();
    System.out.println(fruit);
}

// Remove during iteration
Iterator<String> it2 = fruits.iterator();
while (it2.hasNext()) {
    String fruit = it2.next();
    if (fruit.equals("Banana")) {
        it2.remove();  // Safe removal
    }
}

System.out.println(fruits);  // [Apple, Orange]

// Enhanced for-loop (uses Iterator internally)
for (String fruit : fruits) {
    System.out.println(fruit);
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What method checks if more elements exist?",
              type: "fill",
              starterCode: `Iterator<String> it = list.iterator();
while (it.___()) {
    String item = it.next();
}`,
              answer: "hasNext"
            },
            {
              question: "What method gets next element?",
              type: "fill",
              starterCode: `Iterator<String> it = list.iterator();
String item = it.___();`,
              answer: "next"
            },
            {
              question: "What method safely removes during iteration?",
              type: "fill",
              starterCode: `Iterator<String> it = list.iterator();
it.next();
it.___();  // Remove current element`,
              answer: "remove"
            }
          ]
        },
        {
          id: "java-algorithms",
          title: "Algorithms",
          explanation: "Collections framework provides utility algorithms in Collections class. Common algorithms: sort(), reverse(), shuffle(), binarySearch(), max(), min(), frequency(). Algorithms work with Collections. Some algorithms modify collections, others return results. Algorithms make common operations easy. Use Collections.sort() to sort lists.",
          syntax: "Collections.sort(list);\nCollections.reverse(list);\nCollections.max(collection);\nCollections.binarySearch(list, key);",
          examples: [
            {
              title: "Collections Algorithms Example",
              description: "Using utility algorithms",
              code: `import java.util.ArrayList;
import java.util.Collections;

ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(5);
numbers.add(2);
numbers.add(8);
numbers.add(1);

// Sort
Collections.sort(numbers);
System.out.println("Sorted: " + numbers);  // [1, 2, 5, 8]

// Reverse
Collections.reverse(numbers);
System.out.println("Reversed: " + numbers);  // [8, 5, 2, 1]

// Shuffle
Collections.shuffle(numbers);
System.out.println("Shuffled: " + numbers);

// Find max and min
int max = Collections.max(numbers);
int min = Collections.min(numbers);
System.out.println("Max: " + max + ", Min: " + min);

// Binary search (list must be sorted)
Collections.sort(numbers);
int index = Collections.binarySearch(numbers, 5);
System.out.println("Index of 5: " + index);

// Frequency
numbers.add(5);
int freq = Collections.frequency(numbers, 5);
System.out.println("Frequency of 5: " + freq);  // 2`
            }
          ],
          practiceQuestions: [
            {
              question: "What class provides collection algorithms?",
              type: "fill",
              starterCode: `___ Collections;
Collections.sort(list);`,
              answer: "Collections"
            },
            {
              question: "What method sorts a list?",
              type: "fill",
              starterCode: `Collections.___(list);`,
              answer: "sort"
            },
            {
              question: "What method finds maximum element?",
              type: "fill",
              starterCode: `int max = Collections.___(numbers);`,
              answer: "max"
            }
          ]
        }
      ]
    },
    {
      id: "advanced",
      title: "Java Advanced",
      topics: [
        {
          id: "java-wrapper-classes",
          title: "Wrapper Classes",
          explanation: "Wrapper classes wrap primitive types in objects. Each primitive type has a corresponding wrapper class: Integer (int), Double (double), Boolean (boolean), Character (char), etc. Wrapper classes are used when objects are required (like in Collections). Autoboxing automatically converts primitives to wrappers. Unboxing converts wrappers back to primitives. Wrapper classes provide utility methods.",
          syntax: "Integer, Double, Boolean, Character, Byte, Short, Long, Float\nInteger num = 10; // Autoboxing\nint value = num; // Unboxing",
          examples: [
            {
              title: "Wrapper Classes Example",
              description: "Using wrapper classes and autoboxing",
              code: `// Wrapper classes
Integer intObj = Integer.valueOf(10);  // Explicit
Integer num = 10;  // Autoboxing (automatic)

Double doubleObj = 5.5;  // Autoboxing
Boolean boolObj = true;  // Autoboxing
Character charObj = 'A';  // Autoboxing

// Unboxing
int primitiveInt = intObj;  // Automatic unboxing
double primitiveDouble = doubleObj;

// Using in Collections (requires objects)
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(10);  // Autoboxing
numbers.add(20);

// Utility methods
String str = Integer.toString(42);
int parsed = Integer.parseInt("123");
int max = Integer.MAX_VALUE;
int min = Integer.MIN_VALUE;

// Compare
int result = Integer.compare(5, 10);  // -1 (5 < 10)`
            }
          ],
          practiceQuestions: [
            {
              question: "What wrapper class wraps int?",
              type: "fill",
              starterCode: `___ num = 10;`,
              answer: "Integer"
            },
            {
              question: "What is automatic conversion from primitive to wrapper called?",
              type: "fill",
              starterCode: `// Automatic conversion is called ___
// Answer: autoboxing`,
              answer: "autoboxing"
            },
            {
              question: "What method converts String to int?",
              type: "fill",
              starterCode: `int num = Integer.___("123");`,
              answer: "parseInt"
            }
          ]
        },
        {
          id: "java-generics",
          title: "Generics",
          explanation: "Generics provide type safety and eliminate need for casting. Generics allow classes, interfaces, and methods to operate on types as parameters. Use angle brackets <Type> to specify type. Generics prevent ClassCastException at runtime. Common generic types: List<String>, Map<String, Integer>. Generics enable code reuse with type safety. Wildcards (? extends, ? super) provide flexibility.",
          syntax: "class ClassName<T> { }\nList<String> list;\nMap<String, Integer> map;\n? extends Type, ? super Type",
          examples: [
            {
              title: "Generics Example",
              description: "Using generics for type safety",
              code: `// Generic class
public class Box<T> {
    private T item;
    
    public void setItem(T item) {
        this.item = item;
    }
    
    public T getItem() {
        return item;
    }
}

// Using generic class
Box<String> stringBox = new Box<>();
stringBox.setItem("Hello");
String value = stringBox.getItem();  // No casting needed

Box<Integer> intBox = new Box<>();
intBox.setItem(42);
Integer num = intBox.getItem();

// Generic methods
public static <T> void printArray(T[] array) {
    for (T element : array) {
        System.out.println(element);
    }
}

String[] strings = {"A", "B", "C"};
Integer[] numbers = {1, 2, 3};
printArray(strings);
printArray(numbers);

// Generic collections
List<String> names = new ArrayList<>();
names.add("Alice");
String name = names.get(0);  // Type-safe`
            }
          ],
          practiceQuestions: [
            {
              question: "What characters specify generic type?",
              type: "fill",
              starterCode: `List___<String> list;`,
              answer: "<>"
            },
            {
              question: "What do generics provide?",
              type: "fill",
              starterCode: `// Generics provide type ___
// Answer: safety`,
              answer: "safety"
            },
            {
              question: "Complete the generic list declaration",
              type: "fill",
              starterCode: `List<String> list = new ArrayList___();`,
              answer: "<>"
            }
          ]
        },
        {
          id: "java-annotations",
          title: "Annotations",
          explanation: "Annotations provide metadata about code. Annotations don't change program semantics but provide information to compiler, tools, or runtime. Common annotations: @Override, @Deprecated, @SuppressWarnings, @FunctionalInterface. Annotations start with @ symbol. Custom annotations can be created. Annotations are used by frameworks like Spring, Hibernate. Annotations help with documentation and tooling.",
          syntax: "@AnnotationName\n@Override\n@Deprecated\n@SuppressWarnings(\"unchecked\")",
          examples: [
            {
              title: "Annotations Example",
              description: "Using built-in annotations",
              code: `// @Override - indicates method overrides parent
public class Animal {
    public void makeSound() {
        System.out.println("Animal sound");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

// @Deprecated - marks as outdated
@Deprecated
public class OldClass {
    public void oldMethod() {
        System.out.println("Old method");
    }
}

// @SuppressWarnings - suppresses compiler warnings
@SuppressWarnings("unchecked")
public void method() {
    List list = new ArrayList();  // Warning suppressed
}

// @FunctionalInterface - for lambda expressions
@FunctionalInterface
public interface Calculator {
    int calculate(int a, int b);
}

// Using deprecated method (shows warning)
OldClass obj = new OldClass();
obj.oldMethod();  // Deprecated warning`
            }
          ],
          practiceQuestions: [
            {
              question: "What symbol starts annotations?",
              type: "fill",
              starterCode: `___ Override
public void method() { }`,
              answer: "@"
            },
            {
              question: "What annotation indicates method overriding?",
              type: "fill",
              starterCode: `___ Override
public void makeSound() { }`,
              answer: "@"
            },
            {
              question: "What annotation marks code as outdated?",
              type: "fill",
              starterCode: `___ Deprecated
public class OldClass { }`,
              answer: "@"
            }
          ]
        },
        {
          id: "java-regex",
          title: "RegEx",
          explanation: "Regular expressions (RegEx) are patterns for matching strings. Java provides Pattern and Matcher classes in java.util.regex package. RegEx uses special characters: . (any char), * (zero or more), + (one or more), ? (zero or one), [] (character class), ^ (start), $ (end). RegEx is useful for validation, searching, and text processing. Use Pattern.compile() to create pattern.",
          syntax: "Pattern pattern = Pattern.compile(\"regex\");\nMatcher matcher = pattern.matcher(\"text\");\nboolean matches = matcher.matches();",
          examples: [
            {
              title: "RegEx Example",
              description: "Using regular expressions for pattern matching",
              code: `import java.util.regex.Pattern;
import java.util.regex.Matcher;

// Simple pattern matching
Pattern pattern = Pattern.compile("hello");
Matcher matcher = pattern.matcher("hello world");
boolean found = matcher.find();  // true

// Character classes
Pattern digitPattern = Pattern.compile("[0-9]");
Matcher digitMatcher = digitPattern.matcher("abc123");
boolean hasDigit = digitMatcher.find();  // true

// Quantifiers
Pattern emailPattern = Pattern.compile("[a-z]+@[a-z]+\\.[a-z]+");
Matcher emailMatcher = emailPattern.matcher("user@example.com");
boolean isEmail = emailMatcher.matches();  // true

// Common patterns
Pattern phonePattern = Pattern.compile("\\d{3}-\\d{3}-\\d{4}");
Pattern zipPattern = Pattern.compile("\\d{5}");

// Using String methods with regex
String text = "Hello123World";
boolean hasDigits = text.matches(".*\\d+.*");  // true
String[] parts = text.split("\\d+");  // ["Hello", "World"]`
            }
          ],
          practiceQuestions: [
            {
              question: "What package contains RegEx classes?",
              type: "fill",
              starterCode: `import java.util.___.Pattern;`,
              answer: "regex"
            },
            {
              question: "What class compiles RegEx pattern?",
              type: "fill",
              starterCode: `Pattern pattern = Pattern.___("hello");`,
              answer: "compile"
            },
            {
              question: "What RegEx matches any digit?",
              type: "fill",
              starterCode: `Pattern pattern = Pattern.compile("___");  // Matches digit`,
              answer: "\\d"
            }
          ]
        },
        {
          id: "java-threads",
          title: "Threads",
          explanation: "Threads allow programs to execute multiple tasks concurrently. Threads enable multitasking and improve performance. Create threads by extending Thread class or implementing Runnable interface. Use start() to begin thread execution. Threads share memory space. Synchronization prevents race conditions. Use synchronized keyword or locks. Threads are useful for I/O operations and parallel processing.",
          syntax: "class MyThread extends Thread { public void run() { } }\nclass MyRunnable implements Runnable { public void run() { } }\nThread thread = new Thread(runnable);\nthread.start();",
          examples: [
            {
              title: "Threads Example",
              description: "Creating and running threads",
              code: `// Method 1: Extend Thread
class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("Thread: " + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

// Method 2: Implement Runnable
class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("Runnable: " + i);
        }
    }
}

// Using threads
MyThread thread1 = new MyThread();
thread1.start();

Runnable runnable = new MyRunnable();
Thread thread2 = new Thread(runnable);
thread2.start();

// Lambda expression (Java 8+)
Thread thread3 = new Thread(() -> {
    System.out.println("Lambda thread");
});
thread3.start();`
            }
          ],
          practiceQuestions: [
            {
              question: "What method starts thread execution?",
              type: "fill",
              starterCode: `Thread thread = new Thread(runnable);
thread.___();`,
              answer: "start"
            },
            {
              question: "What interface must be implemented for Runnable?",
              type: "fill",
              starterCode: `class MyRunnable implements ___ {
    public void run() { }
}`,
              answer: "Runnable"
            },
            {
              question: "What method contains thread code?",
              type: "fill",
              starterCode: `public void ___() {
    // Thread code
}`,
              answer: "run"
            }
          ]
        },
        {
          id: "java-lambda-expressions",
          title: "Lambda Expressions",
          explanation: "Lambda expressions provide concise way to implement functional interfaces. Lambda syntax: (parameters) -> expression. Lambdas enable functional programming in Java. Lambdas are used with Streams API and functional interfaces. Lambda expressions were introduced in Java 8. Lambdas can replace anonymous inner classes. Use lambdas for cleaner, more readable code.",
          syntax: "(parameter) -> expression\n(parameter) -> { statements }\n() -> expression",
          examples: [
            {
              title: "Lambda Expressions Example",
              description: "Using lambda expressions for concise code",
              code: `import java.util.ArrayList;
import java.util.List;

// Traditional way (anonymous inner class)
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

names.forEach(new Consumer<String>() {
    @Override
    public void accept(String name) {
        System.out.println(name);
    }
});

// Lambda way (much cleaner)
names.forEach(name -> System.out.println(name));

// Lambda with multiple statements
names.forEach(name -> {
    String upper = name.toUpperCase();
    System.out.println(upper);
});

// Lambda with Runnable
Runnable r = () -> System.out.println("Hello");
new Thread(r).start();

// Lambda with Comparator
List<Integer> numbers = new ArrayList<>();
numbers.add(5);
numbers.add(2);
numbers.add(8);
numbers.sort((a, b) -> a - b);  // Sort ascending

// Lambda with Predicate
numbers.removeIf(n -> n > 5);  // Remove numbers > 5`
            }
          ],
          practiceQuestions: [
            {
              question: "What symbol separates parameters from body in lambda?",
              type: "fill",
              starterCode: `(x, y) ___ x + y`,
              answer: "->"
            },
            {
              question: "What Java version introduced lambdas?",
              type: "fill",
              starterCode: `// Lambdas introduced in Java ___
// Answer: 8`,
              answer: "8"
            },
            {
              question: "Complete the lambda expression",
              type: "fill",
              starterCode: `list.forEach(name ___ System.out.println(name));`,
              answer: "->"
            }
          ]
        },
        {
          id: "java-advanced-sorting",
          title: "Advanced Sorting",
          explanation: "Advanced sorting uses Comparator interface for custom sorting logic. Comparator allows sorting by multiple criteria. Use Collections.sort() with Comparator or List.sort() method. Lambda expressions make Comparator concise. Comparator provides comparing(), thenComparing() for chaining. Custom sorting enables sorting objects by any field. Sorting is essential for data organization.",
          syntax: "Collections.sort(list, comparator);\nlist.sort(comparator);\nComparator.comparing(Class::method);",
          examples: [
            {
              title: "Advanced Sorting Example",
              description: "Using Comparator for custom sorting",
              code: `import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

class Person {
    String name;
    int age;
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

ArrayList<Person> people = new ArrayList<>();
people.add(new Person("Alice", 25));
people.add(new Person("Bob", 30));
people.add(new Person("Charlie", 20));

// Sort by age using Comparator
Collections.sort(people, new Comparator<Person>() {
    @Override
    public int compare(Person p1, Person p2) {
        return p1.age - p2.age;  // Ascending
    }
});

// Sort by name using lambda
people.sort((p1, p2) -> p1.name.compareTo(p2.name));

// Sort using Comparator.comparing (Java 8+)
people.sort(Comparator.comparing(p -> p.age));
people.sort(Comparator.comparing(p -> p.name));

// Reverse order
people.sort(Comparator.comparing(p -> p.age).reversed());

// Multiple criteria
people.sort(Comparator.comparing((Person p) -> p.age)
    .thenComparing(p -> p.name));`
            }
          ],
          practiceQuestions: [
            {
              question: "What interface provides custom sorting?",
              type: "fill",
              starterCode: `Collections.sort(list, new ___<String>() {
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
});`,
              answer: "Comparator"
            },
            {
              question: "What method chains multiple comparators?",
              type: "fill",
              starterCode: `list.sort(Comparator.comparing(p -> p.age)
    .___(p -> p.name));`,
              answer: "thenComparing"
            },
            {
              question: "What method reverses sort order?",
              type: "fill",
              starterCode: `list.sort(Comparator.comparing(p -> p.age).___());`,
              answer: "reversed"
            }
          ]
        }
      ]
    },
    {
      id: "projects",
      title: "Java Projects",
      topics: [
        {
          id: "java-beginner-projects",
          title: "Beginner Projects",
          explanation: "Beginner projects help practice fundamental Java concepts. Start with simple console applications. Good beginner projects: Calculator, Number Guessing Game, To-Do List, Simple Banking System, Temperature Converter. Focus on variables, conditionals, loops, methods, and basic I/O. Build projects incrementally. Practice makes perfect.",
          syntax: "Start with simple console apps\nUse Scanner for input\nUse System.out for output\nFocus on core concepts",
          examples: [
            {
              title: "Beginner Project Ideas",
              description: "Example beginner project structure",
              code: `// Example: Simple Calculator
import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        
        System.out.print("Enter operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0);
        
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        
        double result = 0;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        
        System.out.println("Result: " + result);
        scanner.close();
    }
}

// Other beginner projects:
// - Number Guessing Game
// - To-Do List Manager
// - Simple Banking System
// - Temperature Converter
// - Student Grade Calculator`
            }
          ],
          practiceQuestions: [
            {
              question: "What type of applications are good for beginners?",
              type: "fill",
              starterCode: `// ___ applications are good for beginners
// Answer: Console`,
              answer: "Console"
            },
            {
              question: "What class is used for user input in beginner projects?",
              type: "fill",
              starterCode: `___ scanner = new Scanner(System.in);`,
              answer: "Scanner"
            },
            {
              question: "What should beginners focus on?",
              type: "fill",
              starterCode: `// Focus on core ___
// Answer: concepts`,
              answer: "concepts"
            }
          ]
        },
        {
          id: "java-intermediate-projects",
          title: "Intermediate Projects",
          explanation: "Intermediate projects involve multiple classes, file handling, and object-oriented concepts. Good intermediate projects: Library Management System, Student Information System, File Manager, Quiz Application, Inventory Management. Use classes, inheritance, polymorphism, file I/O, and collections. Build more complex applications. Practice OOP principles.",
          syntax: "Multiple classes\nFile I/O\nCollections\nOOP principles\nException handling",
          examples: [
            {
              title: "Intermediate Project Ideas",
              description: "Example intermediate project structure",
              code: `// Example: Library Management System
import java.util.ArrayList;
import java.io.*;

class Book {
    String title;
    String author;
    boolean isAvailable;
    
    Book(String title, String author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
}

class Library {
    private ArrayList<Book> books;
    
    Library() {
        books = new ArrayList<>();
    }
    
    void addBook(Book book) {
        books.add(book);
    }
    
    void borrowBook(String title) {
        for (Book book : books) {
            if (book.title.equals(title) && book.isAvailable) {
                book.isAvailable = false;
                System.out.println("Book borrowed: " + title);
                return;
            }
        }
        System.out.println("Book not available");
    }
    
    void saveToFile(String filename) throws IOException {
        FileWriter writer = new FileWriter(filename);
        for (Book book : books) {
            writer.write(book.title + "," + book.author + "\\n");
        }
        writer.close();
    }
}

// Other intermediate projects:
// - Student Information System
// - File Manager
// - Quiz Application
// - Inventory Management
// - Contact Management System`
            }
          ],
          practiceQuestions: [
            {
              question: "What should intermediate projects use?",
              type: "fill",
              starterCode: `// Intermediate projects use multiple ___
// Answer: classes`,
              answer: "classes"
            },
            {
              question: "What concept involves file operations?",
              type: "fill",
              starterCode: `// File ___ is important for intermediate projects
// Answer: I/O`,
              answer: "I/O"
            },
            {
              question: "What framework provides data structures?",
              type: "fill",
              starterCode: `// Use Collections ___ for data structures
// Answer: framework`,
              answer: "framework"
            }
          ]
        },
        {
          id: "java-advanced-projects",
          title: "Advanced Projects",
          explanation: "Advanced projects involve complex architectures, databases, networking, and frameworks. Good advanced projects: E-commerce Platform, Social Media Application, Multi-threaded Server, REST API, Desktop Application with GUI. Use databases (JDBC), networking (Sockets), GUI (Swing/JavaFX), web frameworks (Spring), and design patterns. Build production-ready applications.",
          syntax: "Databases (JDBC)\nNetworking (Sockets)\nGUI (Swing/JavaFX)\nFrameworks (Spring)\nDesign Patterns",
          examples: [
            {
              title: "Advanced Project Ideas",
              description: "Example advanced project concepts",
              code: `// Example: Multi-threaded Server
import java.net.*;
import java.io.*;

public class Server {
    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(8080);
            System.out.println("Server started on port 8080");
            
            while (true) {
                Socket clientSocket = serverSocket.accept();
                
                // Handle each client in separate thread
                new Thread(() -> {
                    try {
                        BufferedReader in = new BufferedReader(
                            new InputStreamReader(clientSocket.getInputStream()));
                        PrintWriter out = new PrintWriter(
                            clientSocket.getOutputStream(), true);
                        
                        String input = in.readLine();
                        out.println("Echo: " + input);
                        
                        clientSocket.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }).start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// Other advanced projects:
// - E-commerce Platform
// - Social Media Application
// - REST API with Spring Boot
// - Desktop Application with JavaFX
// - Database Management System
// - Real-time Chat Application
// - Game Development`

            }
          ],
          practiceQuestions: [
            {
              question: "What is used for database connectivity?",
              type: "fill",
              starterCode: `// Use ___ for database connectivity
// Answer: JDBC`,
              answer: "JDBC"
            },
            {
              question: "What framework is popular for web applications?",
              type: "fill",
              starterCode: `// ___ framework is popular for web apps
// Answer: Spring`,
              answer: "Spring"
            },
            {
              question: "What is used for GUI applications?",
              type: "fill",
              starterCode: `// Use Swing or ___ for GUI
// Answer: JavaFX`,
              answer: "JavaFX"
            }
          ]
        }
      ]
    },
    {
      id: "how-to",
      title: "Java How To",
      topics: [
        {
          id: "java-common-how-tos",
          title: "Common Java How Tos",
          explanation: "Common Java 'How To' guides provide solutions to frequent programming tasks. These guides cover practical problems like converting types, working with strings, handling collections, file operations, and more. How To guides are practical references for everyday programming tasks. They provide quick solutions to common problems.",
          syntax: "Various solutions for common tasks\nType conversions, string operations, collections, file handling",
          examples: [
            {
              title: "Common How To Examples",
              description: "Solutions to common Java tasks",
              code: `// How to convert String to int
String str = "123";
int num = Integer.parseInt(str);

// How to convert int to String
int number = 42;
String text = String.valueOf(number);
// or
String text2 = Integer.toString(number);

// How to reverse a String
String original = "Hello";
String reversed = new StringBuilder(original).reverse().toString();

// How to check if String is empty
String str2 = "";
if (str2.isEmpty() || str2.length() == 0) {
    System.out.println("String is empty");
}

// How to remove duplicates from List
List<String> list = new ArrayList<>();
list.add("A");
list.add("B");
list.add("A");
Set<String> unique = new HashSet<>(list);
List<String> noDuplicates = new ArrayList<>(unique);

// How to sort a List
Collections.sort(list);

// How to read file line by line
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}

// How to get current date
LocalDate today = LocalDate.now();
System.out.println("Today: " + today);`
            }
          ],
          practiceQuestions: [
            {
              question: "What method converts String to int?",
              type: "fill",
              starterCode: `String str = "123";
int num = Integer.___("123");`,
              answer: "parseInt"
            },
            {
              question: "What class reverses a String?",
              type: "fill",
              starterCode: `String reversed = new ___(original).reverse().toString();`,
              answer: "StringBuilder"
            },
            {
              question: "What method checks if String is empty?",
              type: "fill",
              starterCode: `if (str.___()) {
    System.out.println("Empty");
}`,
              answer: "isEmpty"
            }
          ]
        }
      ]
    },
    {
      id: "reference",
      title: "Java Reference",
      topics: [
        {
          id: "java-keywords",
          title: "Java Keywords",
          explanation: "Java keywords are reserved words with special meaning. Keywords cannot be used as identifiers (variable names, class names, etc.). Common keywords: public, private, protected, class, interface, extends, implements, static, final, abstract, if, else, for, while, return, void, int, String, new, this, super. Understanding keywords is essential for writing correct Java code.",
          syntax: "Keywords: public, private, class, static, final, if, for, while, return, void, new, this, super",
          examples: [
            {
              title: "Java Keywords Examples",
              description: "Common Java keywords and their usage",
              code: `// Access modifiers
public class MyClass {
    private int x;
    protected String name;
    
    // Control flow
    if (x > 0) {
        return true;
    } else {
        return false;
    }
    
    // Loops
    for (int i = 0; i < 10; i++) {
        // code
    }
    
    while (x < 10) {
        x++;
    }
    
    // Class definition
    public class Animal {
        // class body
    }
    
    // Inheritance
    class Dog extends Animal {
        // extends keyword
    }
    
    // Interface
    interface Drawable {
        // interface keyword
    }
    
    // Modifiers
    static int count;
    final double PI = 3.14;
    abstract void method();
    
    // Object creation
    MyClass obj = new MyClass();
    
    // References
    this.name = name;
    super.method();`
            }
          ],
          practiceQuestions: [
            {
              question: "What keyword defines a class?",
              type: "fill",
              starterCode: `___ class MyClass {
}`,
              answer: "class"
            },
            {
              question: "What keyword creates a new object?",
              type: "fill",
              starterCode: `MyClass obj = ___ MyClass();`,
              answer: "new"
            },
            {
              question: "What keyword refers to current object?",
              type: "fill",
              starterCode: `___.name = name;`,
              answer: "this"
            }
          ]
        },
        {
          id: "java-string-methods",
          title: "String Methods",
          explanation: "String class provides many useful methods for string manipulation. Common methods: length() - get length, charAt(index) - get character, substring(start, end) - get substring, toUpperCase()/toLowerCase() - change case, equals() - compare strings, contains() - check substring, indexOf() - find position, replace() - replace text, trim() - remove whitespace, split() - split into array.",
          syntax: "str.length(), str.charAt(i), str.substring(start, end), str.toUpperCase(), str.equals(other), str.contains(sub), str.indexOf(char), str.replace(old, new), str.trim(), str.split(regex)",
          examples: [
            {
              title: "String Methods Examples",
              description: "Common String class methods",
              code: `String text = "Hello World";

// Length
int len = text.length();  // 11

// Character access
char first = text.charAt(0);  // 'H'

// Substring
String sub = text.substring(0, 5);  // "Hello"
String rest = text.substring(6);  // "World"

// Case conversion
String upper = text.toUpperCase();  // "HELLO WORLD"
String lower = text.toLowerCase();  // "hello world"

// Comparison
boolean equal = text.equals("Hello World");  // true
boolean ignoreCase = text.equalsIgnoreCase("HELLO WORLD");  // true

// Searching
boolean contains = text.contains("World");  // true
int index = text.indexOf("World");  // 6
int lastIndex = text.lastIndexOf("l");  // 9

// Replacement
String replaced = text.replace("World", "Java");  // "Hello Java"

// Trimming
String spaced = "  Hello  ";
String trimmed = spaced.trim();  // "Hello"

// Splitting
String[] parts = text.split(" ");  // ["Hello", "World"]

// Concatenation
String combined = text.concat("!");  // "Hello World!"
String combined2 = text + "!";  // Same result`
            }
          ],
          practiceQuestions: [
            {
              question: "What method gets string length?",
              type: "fill",
              starterCode: `int len = text.___();`,
              answer: "length"
            },
            {
              question: "What method gets substring?",
              type: "fill",
              starterCode: `String sub = text.___(0, 5);`,
              answer: "substring"
            },
            {
              question: "What method compares strings?",
              type: "fill",
              starterCode: `boolean same = text.___("Hello");`,
              answer: "equals"
            }
          ]
        },
        {
          id: "java-math-methods",
          title: "Math Methods",
          explanation: "Math class provides mathematical operations and constants. Common methods: max(a, b) - maximum, min(a, b) - minimum, abs(x) - absolute value, sqrt(x) - square root, pow(x, y) - power, round(x) - round, ceil(x) - round up, floor(x) - round down, random() - random number. Constants: Math.PI, Math.E. All Math methods are static.",
          syntax: "Math.max(a, b), Math.min(a, b), Math.abs(x), Math.sqrt(x), Math.pow(x, y), Math.round(x), Math.ceil(x), Math.floor(x), Math.random()",
          examples: [
            {
              title: "Math Methods Examples",
              description: "Common Math class methods",
              code: `// Maximum and minimum
int max = Math.max(5, 10);  // 10
int min = Math.min(5, 10);  // 5

// Absolute value
int abs = Math.abs(-5);  // 5
double abs2 = Math.abs(-3.14);  // 3.14

// Square root
double sqrt = Math.sqrt(16);  // 4.0

// Power
double power = Math.pow(2, 3);  // 8.0

// Rounding
long rounded = Math.round(4.6);  // 5
double ceil = Math.ceil(4.2);  // 5.0
double floor = Math.floor(4.8);  // 4.0

// Random number (0.0 to 1.0)
double random = Math.random();
int randomInt = (int)(Math.random() * 10);  // 0 to 9

// Constants
double pi = Math.PI;  // 3.14159...
double e = Math.E;  // 2.71828...

// Trigonometric functions
double sin = Math.sin(Math.PI / 2);  // 1.0
double cos = Math.cos(0);  // 1.0
double tan = Math.tan(Math.PI / 4);  // ~1.0

// Logarithm
double log = Math.log(10);  // Natural logarithm
double log10 = Math.log10(100);  // 2.0`
            }
          ],
          practiceQuestions: [
            {
              question: "What method finds maximum?",
              type: "fill",
              starterCode: `int max = Math.___(5, 10);`,
              answer: "max"
            },
            {
              question: "What method calculates square root?",
              type: "fill",
              starterCode: `double sqrt = Math.___(16);`,
              answer: "sqrt"
            },
            {
              question: "What method generates random number?",
              type: "fill",
              starterCode: `double random = Math.___();`,
              answer: "random"
            }
          ]
        },
        {
          id: "java-output-methods",
          title: "Output Methods",
          explanation: "System.out provides methods for displaying output. Common methods: print() - prints without newline, println() - prints with newline, printf() - formatted output. System.err provides error output. Output methods are essential for displaying program results and debugging.",
          syntax: "System.out.print(text), System.out.println(text), System.out.printf(format, args), System.err.println(text)",
          examples: [
            {
              title: "Output Methods Examples",
              description: "Using System.out for output",
              code: `// Print without newline
System.out.print("Hello");
System.out.print(" World");
// Output: Hello World

// Print with newline
System.out.println("Hello");
System.out.println("World");
// Output:
// Hello
// World

// Formatted output
int age = 25;
String name = "Alice";
System.out.printf("Name: %s, Age: %d%n", name, age);
// Output: Name: Alice, Age: 25

// Format specifiers
double price = 19.99;
System.out.printf("Price: $%.2f%n", price);
// Output: Price: $19.99

// Multiple values
System.out.printf("%d + %d = %d%n", 5, 3, 8);
// Output: 5 + 3 = 8

// Error output
System.err.println("Error occurred!");

// Print variables
int x = 10;
System.out.println("Value: " + x);  // Value: 10`
            }
          ],
          practiceQuestions: [
            {
              question: "What method prints with newline?",
              type: "fill",
              starterCode: `System.out.___("Hello");`,
              answer: "println"
            },
            {
              question: "What method prints formatted output?",
              type: "fill",
              starterCode: `System.out.___("Name: %s", name);`,
              answer: "printf"
            },
            {
              question: "What method prints without newline?",
              type: "fill",
              starterCode: `System.out.___("Hello");`,
              answer: "print"
            }
          ]
        },
        {
          id: "java-arrays-methods",
          title: "Arrays Methods",
          explanation: "Arrays class provides utility methods for array operations. Common methods: sort() - sort array, binarySearch() - search sorted array, fill() - fill with value, copyOf() - copy array, equals() - compare arrays, toString() - convert to string. Arrays class is in java.util package. Arrays methods are static.",
          syntax: "Arrays.sort(array), Arrays.binarySearch(array, key), Arrays.fill(array, value), Arrays.copyOf(array, length), Arrays.equals(array1, array2), Arrays.toString(array)",
          examples: [
            {
              title: "Arrays Methods Examples",
              description: "Using Arrays utility class",
              code: `import java.util.Arrays;

int[] numbers = {5, 2, 8, 1, 9};

// Sort array
Arrays.sort(numbers);
System.out.println(Arrays.toString(numbers));  // [1, 2, 5, 8, 9]

// Binary search (array must be sorted)
int index = Arrays.binarySearch(numbers, 5);  // 2

// Fill array with value
int[] filled = new int[5];
Arrays.fill(filled, 10);
System.out.println(Arrays.toString(filled));  // [10, 10, 10, 10, 10]

// Copy array
int[] original = {1, 2, 3};
int[] copy = Arrays.copyOf(original, original.length);
int[] larger = Arrays.copyOf(original, 5);  // [1, 2, 3, 0, 0]

// Compare arrays
int[] arr1 = {1, 2, 3};
int[] arr2 = {1, 2, 3};
boolean equal = Arrays.equals(arr1, arr2);  // true

// Convert to string
String str = Arrays.toString(numbers);  // "[1, 2, 5, 8, 9]"

// Sort part of array
int[] partial = {5, 2, 8, 1, 9};
Arrays.sort(partial, 0, 3);  // Sort indices 0 to 2`
            }
          ],
          practiceQuestions: [
            {
              question: "What method sorts an array?",
              type: "fill",
              starterCode: `Arrays.___(numbers);`,
              answer: "sort"
            },
            {
              question: "What method searches sorted array?",
              type: "fill",
              starterCode: `int index = Arrays.___(numbers, 5);`,
              answer: "binarySearch"
            },
            {
              question: "What method converts array to string?",
              type: "fill",
              starterCode: `String str = Arrays.___(numbers);`,
              answer: "toString"
            }
          ]
        },
        {
          id: "java-arraylist-methods",
          title: "ArrayList Methods",
          explanation: "ArrayList provides methods for dynamic array operations. Common methods: add() - add element, get(index) - get element, set(index, element) - set element, remove(index) - remove element, size() - get size, clear() - clear all, contains(element) - check existence, indexOf(element) - find index, isEmpty() - check empty, toArray() - convert to array.",
          syntax: "list.add(element), list.get(index), list.set(index, element), list.remove(index), list.size(), list.clear(), list.contains(element), list.indexOf(element), list.isEmpty(), list.toArray()",
          examples: [
            {
              title: "ArrayList Methods Examples",
              description: "Common ArrayList methods",
              code: `import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();

// Add elements
list.add("Apple");
list.add("Banana");
list.add("Orange");

// Get element
String first = list.get(0);  // "Apple"

// Set element
list.set(1, "Grape");  // Replace Banana with Grape

// Remove element
list.remove(0);  // Remove Apple

// Size
int size = list.size();  // 2

// Check if contains
boolean hasOrange = list.contains("Orange");  // true

// Find index
int index = list.indexOf("Orange");  // 1

// Check if empty
boolean empty = list.isEmpty();  // false

// Clear all
list.clear();
System.out.println(list.isEmpty());  // true

// Convert to array
String[] array = list.toArray(new String[0]);

// Add at index
list.add(0, "First");  // Insert at beginning`
            }
          ],
          practiceQuestions: [
            {
              question: "What method adds element to ArrayList?",
              type: "fill",
              starterCode: `list.___("Apple");`,
              answer: "add"
            },
            {
              question: "What method gets element by index?",
              type: "fill",
              starterCode: `String item = list.___(0);`,
              answer: "get"
            },
            {
              question: "What method gets ArrayList size?",
              type: "fill",
              starterCode: `int size = list.___();`,
              answer: "size"
            }
          ]
        },
        {
          id: "java-linkedlist-methods",
          title: "LinkedList Methods",
          explanation: "LinkedList provides methods for doubly-linked list operations. Common methods: add() - add element, addFirst() - add at beginning, addLast() - add at end, getFirst() - get first, getLast() - get last, removeFirst() - remove first, removeLast() - remove last, size() - get size, contains() - check existence. LinkedList is efficient for insertions/deletions.",
          syntax: "list.add(element), list.addFirst(element), list.addLast(element), list.getFirst(), list.getLast(), list.removeFirst(), list.removeLast(), list.size(), list.contains(element)",
          examples: [
            {
              title: "LinkedList Methods Examples",
              description: "Common LinkedList methods",
              code: `import java.util.LinkedList;

LinkedList<String> list = new LinkedList<>();

// Add elements
list.add("Middle");
list.addFirst("First");  // Add at beginning
list.addLast("Last");    // Add at end

// Get elements
String first = list.getFirst();  // "First"
String last = list.getLast();    // "Last"

// Remove elements
String removedFirst = list.removeFirst();  // Remove and return "First"
String removedLast = list.removeLast();    // Remove and return "Last"

// Size
int size = list.size();

// Check if contains
boolean hasMiddle = list.contains("Middle");

// Peek (get without removing)
String peek = list.peek();  // Get first without removing
String peekFirst = list.peekFirst();
String peekLast = list.peekLast();

// Poll (get and remove)
String poll = list.poll();  // Get and remove first
String pollFirst = list.pollFirst();
String pollLast = list.pollLast();`
            }
          ],
          practiceQuestions: [
            {
              question: "What method adds element at beginning?",
              type: "fill",
              starterCode: `list.___("First");`,
              answer: "addFirst"
            },
            {
              question: "What method gets first element?",
              type: "fill",
              starterCode: `String first = list.___();`,
              answer: "getFirst"
            },
            {
              question: "What method removes last element?",
              type: "fill",
              starterCode: `String last = list.___();`,
              answer: "removeLast"
            }
          ]
        },
        {
          id: "java-hashmap-methods",
          title: "HashMap Methods",
          explanation: "HashMap provides methods for key-value operations. Common methods: put(key, value) - add/update, get(key) - get value, remove(key) - remove entry, containsKey(key) - check key exists, containsValue(value) - check value exists, size() - get size, clear() - clear all, keySet() - get all keys, values() - get all values, entrySet() - get all entries.",
          syntax: "map.put(key, value), map.get(key), map.remove(key), map.containsKey(key), map.containsValue(value), map.size(), map.clear(), map.keySet(), map.values(), map.entrySet()",
          examples: [
            {
              title: "HashMap Methods Examples",
              description: "Common HashMap methods",
              code: `import java.util.HashMap;

HashMap<String, Integer> map = new HashMap<>();

// Put (add or update)
map.put("Apple", 5);
map.put("Banana", 3);
map.put("Orange", 8);

// Get value
int apples = map.get("Apple");  // 5

// Remove
map.remove("Banana");

// Check if key exists
boolean hasApple = map.containsKey("Apple");  // true

// Check if value exists
boolean hasValue = map.containsValue(5);  // true

// Size
int size = map.size();  // 2

// Get all keys
for (String key : map.keySet()) {
    System.out.println(key);
}

// Get all values
for (Integer value : map.values()) {
    System.out.println(value);
}

// Get all entries
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Clear
map.clear();
System.out.println(map.isEmpty());  // true`
            }
          ],
          practiceQuestions: [
            {
              question: "What method adds key-value pair?",
              type: "fill",
              starterCode: `map.___("Apple", 5);`,
              answer: "put"
            },
            {
              question: "What method gets value by key?",
              type: "fill",
              starterCode: `int value = map.___("Apple");`,
              answer: "get"
            },
            {
              question: "What method checks if key exists?",
              type: "fill",
              starterCode: `boolean exists = map.___("Apple");`,
              answer: "containsKey"
            }
          ]
        },
        {
          id: "java-scanner-methods",
          title: "Scanner Methods",
          explanation: "Scanner provides methods for reading different types of input. Common methods: nextInt() - read int, nextDouble() - read double, nextLine() - read line, next() - read word, nextBoolean() - read boolean, hasNext() - check more input, hasNextInt() - check next is int, close() - close scanner. Scanner is in java.util package.",
          syntax: "scanner.nextInt(), scanner.nextDouble(), scanner.nextLine(), scanner.next(), scanner.nextBoolean(), scanner.hasNext(), scanner.hasNextInt(), scanner.close()",
          examples: [
            {
              title: "Scanner Methods Examples",
              description: "Common Scanner methods for input",
              code: `import java.util.Scanner;

Scanner scanner = new Scanner(System.in);

// Read integer
System.out.print("Enter age: ");
int age = scanner.nextInt();

// Read double
System.out.print("Enter price: ");
double price = scanner.nextDouble();

// Read line (consumes newline)
scanner.nextLine();  // Consume leftover newline
System.out.print("Enter name: ");
String name = scanner.nextLine();

// Read word
System.out.print("Enter word: ");
String word = scanner.next();

// Read boolean
System.out.print("Enter true/false: ");
boolean flag = scanner.nextBoolean();

// Check if more input
while (scanner.hasNext()) {
    String input = scanner.next();
    System.out.println("Read: " + input);
}

// Check if next is int
if (scanner.hasNextInt()) {
    int num = scanner.nextInt();
}

// Close scanner
scanner.close();`
            }
          ],
          practiceQuestions: [
            {
              question: "What method reads an integer?",
              type: "fill",
              starterCode: `int num = scanner.___();`,
              answer: "nextInt"
            },
            {
              question: "What method reads a line?",
              type: "fill",
              starterCode: `String line = scanner.___();`,
              answer: "nextLine"
            },
            {
              question: "What method checks if more input exists?",
              type: "fill",
              starterCode: `while (scanner.___()) {
    String input = scanner.next();
}`,
              answer: "hasNext"
            }
          ]
        },
        {
          id: "java-file-methods",
          title: "File Methods",
          explanation: "File class provides methods for file and directory operations. Common methods: exists() - check exists, isFile() - check is file, isDirectory() - check is directory, getName() - get name, getAbsolutePath() - get full path, length() - get size, delete() - delete file, createNewFile() - create file, mkdir() - create directory, listFiles() - list files.",
          syntax: "file.exists(), file.isFile(), file.isDirectory(), file.getName(), file.getAbsolutePath(), file.length(), file.delete(), file.createNewFile(), file.mkdir(), file.listFiles()",
          examples: [
            {
              title: "File Methods Examples",
              description: "Common File class methods",
              code: `import java.io.File;

File file = new File("data.txt");

// Check if exists
if (file.exists()) {
    System.out.println("File exists");
}

// Check type
boolean isFile = file.isFile();
boolean isDir = file.isDirectory();

// Get information
String name = file.getName();  // "data.txt"
String path = file.getAbsolutePath();  // Full path
long size = file.length();  // Size in bytes

// Create file
if (!file.exists()) {
    file.createNewFile();
}

// Delete file
if (file.exists()) {
    file.delete();
}

// Directory operations
File dir = new File("mydir");
if (!dir.exists()) {
    dir.mkdir();  // Create directory
}

// List files in directory
File[] files = dir.listFiles();
if (files != null) {
    for (File f : files) {
        System.out.println(f.getName());
    }
}

// Check permissions
boolean canRead = file.canRead();
boolean canWrite = file.canWrite();`
            }
          ],
          practiceQuestions: [
            {
              question: "What method checks if file exists?",
              type: "fill",
              starterCode: `if (file.___()) {
    System.out.println("Exists");
}`,
              answer: "exists"
            },
            {
              question: "What method gets file name?",
              type: "fill",
              starterCode: `String name = file.___();`,
              answer: "getName"
            },
            {
              question: "What method deletes a file?",
              type: "fill",
              starterCode: `file.___();`,
              answer: "delete"
            }
          ]
        },
        {
          id: "java-system-methods",
          title: "System Methods",
          explanation: "System class provides system-related methods and properties. Common methods: exit(status) - exit program, currentTimeMillis() - current time, nanoTime() - high-resolution time, gc() - suggest garbage collection, getProperty(key) - get system property, setProperty(key, value) - set property. System.out and System.err are output streams.",
          syntax: "System.exit(status), System.currentTimeMillis(), System.nanoTime(), System.gc(), System.getProperty(key), System.setProperty(key, value), System.out.println(), System.err.println()",
          examples: [
            {
              title: "System Methods Examples",
              description: "Common System class methods",
              code: `// Exit program
System.exit(0);  // Normal exit
System.exit(1);  // Error exit

// Time methods
long currentTime = System.currentTimeMillis();  // Milliseconds since epoch
long nanoTime = System.nanoTime();  // High-resolution time

// Measure execution time
long start = System.nanoTime();
// ... code to measure ...
long end = System.nanoTime();
long duration = end - start;
System.out.println("Time: " + duration + " nanoseconds");

// Garbage collection
System.gc();  // Suggest garbage collection

// System properties
String os = System.getProperty("os.name");
String javaVersion = System.getProperty("java.version");
String userDir = System.getProperty("user.dir");
String userHome = System.getProperty("user.home");

System.out.println("OS: " + os);
System.out.println("Java Version: " + javaVersion);
System.out.println("Current Directory: " + userDir);

// Set property
System.setProperty("my.property", "my.value");
String value = System.getProperty("my.property");

// Output streams
System.out.println("Standard output");
System.err.println("Error output");`
            }
          ],
          practiceQuestions: [
            {
              question: "What method exits the program?",
              type: "fill",
              starterCode: `System.___(0);`,
              answer: "exit"
            },
            {
              question: "What method gets current time in milliseconds?",
              type: "fill",
              starterCode: `long time = System.___();`,
              answer: "currentTimeMillis"
            },
            {
              question: "What method gets system property?",
              type: "fill",
              starterCode: `String os = System.___("os.name");`,
              answer: "getProperty"
            }
          ]
        },
        {
          id: "java-errors-exceptions-reference",
          title: "Errors & Exceptions Reference",
          explanation: "Java has many built-in exceptions and errors. Common exceptions: NullPointerException - null reference, ArrayIndexOutOfBoundsException - invalid array index, IllegalArgumentException - invalid argument, IOException - I/O error, FileNotFoundException - file not found, NumberFormatException - invalid number format, ClassCastException - invalid cast, ArithmeticException - arithmetic error. Errors: OutOfMemoryError, StackOverflowError.",
          syntax: "try { } catch (ExceptionType e) { }\nthrow new ExceptionType(\"message\");",
          examples: [
            {
              title: "Errors & Exceptions Reference",
              description: "Common exceptions and how to handle them",
              code: `// NullPointerException
String str = null;
try {
    int len = str.length();  // Throws NullPointerException
} catch (NullPointerException e) {
    System.out.println("String is null");
}

// ArrayIndexOutOfBoundsException
int[] arr = {1, 2, 3};
try {
    int value = arr[10];  // Throws ArrayIndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Invalid index");
}

// NumberFormatException
try {
    int num = Integer.parseInt("abc");  // Throws NumberFormatException
} catch (NumberFormatException e) {
    System.out.println("Invalid number format");
}

// IOException
try {
    FileReader reader = new FileReader("nonexistent.txt");
} catch (FileNotFoundException e) {
    System.out.println("File not found");
} catch (IOException e) {
    System.out.println("I/O error");
}

// IllegalArgumentException
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative");
    }
    this.age = age;
}

// ArithmeticException
try {
    int result = 10 / 0;  // Throws ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Division by zero");
}

// ClassCastException
Object obj = "Hello";
try {
    Integer num = (Integer) obj;  // Throws ClassCastException
} catch (ClassCastException e) {
    System.out.println("Invalid cast");
}`
            }
          ],
          practiceQuestions: [
            {
              question: "What exception occurs with null reference?",
              type: "fill",
              starterCode: `// ___ occurs with null reference
// Answer: NullPointerException`,
              answer: "NullPointerException"
            },
            {
              question: "What exception occurs with invalid array index?",
              type: "fill",
              starterCode: `// ___ occurs with invalid index
// Answer: ArrayIndexOutOfBoundsException`,
              answer: "ArrayIndexOutOfBoundsException"
            },
            {
              question: "What exception occurs with division by zero?",
              type: "fill",
              starterCode: `// ___ occurs with division by zero
// Answer: ArithmeticException`,
              answer: "ArithmeticException"
            }
          ]
        }
      ]
    }
  ]
}
