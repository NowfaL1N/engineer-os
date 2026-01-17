/**
 * Java Language Data
 * 
 * Comprehensive fundamentals data for Java programming language.
 */

import type { Topic } from "@/services/coding/types"

// Java topics - comprehensive fundamentals
export const javaTopics: Record<string, Topic> = {
  variables: {
    id: "variables",
    title: "Variables & Data Types",
    concept: {
      what: "Variables store data. Java is statically typed - you must declare variable types. Java has primitive types and object types.",
      why: "Variables are fundamental for storing and managing data. Java's type system helps catch errors early.",
      explanation:
        "Java has primitive types (int, double, char, boolean) and reference types (String, arrays, objects). Variables must be declared with a type before use.",
    },
    syntaxExamples: [
      {
        title: "Variable Declarations",
        description: "Declaring variables with types",
        code: `int age = 25;
double price = 19.99;
String name = "Java";
boolean isActive = true;
char grade = 'A';`,
      },
      {
        title: "Multiple Variables",
        description: "Declaring multiple variables",
        code: `int x = 10, y = 20, z = 30;
String firstName = "John", lastName = "Doe";`,
      },
    ],
    practiceQuestions: [
      {
        id: "java-var-1",
        type: "fill-blank",
        title: "Declare Integer",
        description: "Declare an int variable 'count' with value 10",
        incompleteCode: `___ count = 10;
System.out.println(count);`,
        placeholder: "int",
        expectedAnswer: "int",
        solution: `int count = 10;`,
      },
      {
        id: "java-var-2",
        type: "fill-blank",
        title: "String Variable",
        description: "Declare a String variable",
        incompleteCode: `___ message = "Hello";
System.out.println(message);`,
        placeholder: "String",
        expectedAnswer: "String",
        solution: `String message = "Hello";`,
      },
      {
        id: "java-var-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `int x = 5;
int y = 10;
System.out.println(x + y);`,
        expectedAnswer: "15",
        solution: `x + y = 5 + 10 = 15`,
      },
      {
        id: "java-var-4",
        type: "complete-function",
        title: "Boolean Variable",
        description: "Declare boolean variable",
        incompleteCode: `___ isReady = true;
System.out.println(isReady);`,
        placeholder: "boolean",
        expectedAnswer: "boolean",
        solution: `boolean isReady = true;`,
      },
      {
        id: "java-var-5",
        type: "fill-blank",
        title: "Double Variable",
        description: "Declare double variable",
        incompleteCode: `___ price = 19.99;
System.out.println(price);`,
        placeholder: "double",
        expectedAnswer: "double",
        solution: `double price = 19.99;`,
      },
    ],
  },
  operators: {
    id: "operators",
    title: "Operators",
    concept: {
      what: "Operators perform operations. Java has arithmetic, comparison, logical, and assignment operators.",
      why: "Operators are essential for calculations, comparisons, and logical operations.",
      explanation:
        "Arithmetic: +, -, *, /, %. Comparison: ==, !=, <, >, <=, >=. Logical: &&, ||, !. Use == for primitives, equals() for objects.",
    },
    syntaxExamples: [
      {
        title: "Arithmetic Operators",
        description: "Basic math operations",
        code: `int a = 10;
int b = 3;

System.out.println(a + b);  // 13
System.out.println(a - b);  // 7
System.out.println(a * b);  // 30
System.out.println(a / b);  // 3
System.out.println(a % b);  // 1`,
      },
      {
        title: "Comparison Operators",
        description: "Comparing values",
        code: `int x = 5;
int y = 10;

System.out.println(x == y);  // false
System.out.println(x != y);  // true
System.out.println(x < y);   // true
System.out.println(x > y);    // false`,
      },
    ],
    practiceQuestions: [
      {
        id: "java-op-1",
        type: "fill-blank",
        title: "Addition",
        description: "Add two numbers",
        incompleteCode: `int result = 5 ___ 3;
System.out.println(result);`,
        placeholder: "+",
        expectedAnswer: "+",
        solution: `int result = 5 + 3;`,
      },
      {
        id: "java-op-2",
        type: "fill-blank",
        title: "Equality Check",
        description: "Check if two numbers are equal",
        incompleteCode: `int a = 5;
int b = 5;
System.out.println(a ___ b);`,
        placeholder: "==",
        expectedAnswer: "==",
        solution: `System.out.println(a == b);`,
      },
      {
        id: "java-op-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `System.out.println(10 % 3);`,
        expectedAnswer: "1",
        solution: `10 % 3 = 1 (remainder)`,
      },
      {
        id: "java-op-4",
        type: "fill-blank",
        title: "Logical AND",
        description: "Use logical AND",
        incompleteCode: `int age = 20;
boolean hasLicense = true;
System.out.println(age >= 18 ___ hasLicense);`,
        placeholder: "&&",
        expectedAnswer: "&&",
        solution: `System.out.println(age >= 18 && hasLicense);`,
      },
      {
        id: "java-op-5",
        type: "complete-function",
        title: "Modulus",
        description: "Calculate remainder",
        incompleteCode: `int result = 15 ___ 4;
System.out.println(result);`,
        placeholder: "%",
        expectedAnswer: "%",
        solution: `int result = 15 % 4;`,
      },
    ],
  },
  conditionals: {
    id: "conditionals",
    title: "Conditional Statements",
    concept: {
      what: "Conditionals execute code based on conditions. Java uses if, else if, else, and switch statements.",
      why: "Conditionals make programs responsive by executing different code based on different situations.",
      explanation:
        "Use if for single conditions, else if for multiple conditions, else for default. Switch is useful for multiple value comparisons.",
    },
    syntaxExamples: [
      {
        title: "If-Else",
        description: "Basic conditional",
        code: `int age = 18;

if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}`,
      },
      {
        title: "If-Else If-Else",
        description: "Multiple conditions",
        code: `int score = 85;

if (score >= 90) {
    System.out.println("Grade A");
} else if (score >= 80) {
    System.out.println("Grade B");
} else {
    System.out.println("Grade C");
}`,
      },
    ],
    practiceQuestions: [
      {
        id: "java-cond-1",
        type: "fill-blank",
        title: "If Statement",
        description: "Complete if condition",
        incompleteCode: `int age = 20;
___ (age >= 18) {
    System.out.println("Adult");
}`,
        placeholder: "if",
        expectedAnswer: "if",
        solution: `if (age >= 18) {`,
      },
      {
        id: "java-cond-2",
        type: "fill-blank",
        title: "Else Clause",
        description: "Add else clause",
        incompleteCode: `int temp = 25;
if (temp > 30) {
    System.out.println("Hot");
} ___ {
    System.out.println("Cool");
}`,
        placeholder: "else",
        expectedAnswer: "else",
        solution: `} else {`,
      },
      {
        id: "java-cond-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `int x = 10;
if (x > 5) {
    System.out.println("Greater");
} else {
    System.out.println("Smaller");
}`,
        expectedAnswer: "Greater",
        solution: `x = 10 > 5, so "Greater" is printed`,
      },
      {
        id: "java-cond-4",
        type: "complete-function",
        title: "Complete Conditional",
        description: "Check if positive",
        incompleteCode: `int num = 5;
___ (num > 0) {
    System.out.println("Positive");
}`,
        placeholder: "if",
        expectedAnswer: "if",
        solution: `if (num > 0) {`,
      },
      {
        id: "java-cond-5",
        type: "fix-error",
        title: "Fix Syntax",
        description: "Fix missing closing brace",
        incompleteCode: `int x = 5;
if (x > 0) {
    System.out.println("Positive");
`,
        expectedAnswer: "}",
        solution: `Add closing brace: }`,
      },
    ],
  },
  loops: {
    id: "loops",
    title: "Loops",
    concept: {
      what: "Loops repeat code. Java has for loops, while loops, do-while loops, and enhanced for loops (for-each).",
      why: "Loops eliminate repetitive code and make it easy to process arrays and collections.",
      explanation:
        "For loops are great when you know iterations. While loops continue while condition is true. Do-while executes at least once. Use break to exit, continue to skip.",
    },
    syntaxExamples: [
      {
        title: "For Loop",
        description: "Iterating with for loop",
        code: `// Count from 0 to 4
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Output: 0, 1, 2, 3, 4`,
      },
      {
        title: "While Loop",
        description: "Repeating with while",
        code: `int count = 0;
while (count < 5) {
    System.out.println(count);
    count++;
}

// Output: 0, 1, 2, 3, 4`,
      },
    ],
    practiceQuestions: [
      {
        id: "java-loop-1",
        type: "fill-blank",
        title: "For Loop",
        description: "Complete for loop",
        incompleteCode: `for (int i = 0; i ___ 5; i++) {
    System.out.println(i);
}`,
        placeholder: "<",
        expectedAnswer: "<",
        solution: `for (int i = 0; i < 5; i++) {`,
      },
      {
        id: "java-loop-2",
        type: "fill-blank",
        title: "Increment",
        description: "Complete increment",
        incompleteCode: `int i = 0;
while (i < 5) {
    System.out.println(i);
    i___;
}`,
        placeholder: "++",
        expectedAnswer: "++",
        solution: `i++;`,
      },
      {
        id: "java-loop-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `for (int i = 0; i < 3; i++) {
    System.out.println(i * 2);
}`,
        expectedAnswer: "0\n2\n4",
        solution: `i = 0, 1, 2 → outputs 0, 2, 4`,
      },
      {
        id: "java-loop-4",
        type: "complete-function",
        title: "Enhanced For Loop",
        description: "Loop through array",
        incompleteCode: `int[] numbers = {1, 2, 3};
for (int num ___ numbers) {
    System.out.println(num);
}`,
        placeholder: ":",
        expectedAnswer: ":",
        solution: `for (int num : numbers) {`,
      },
      {
        id: "java-loop-5",
        type: "fill-blank",
        title: "While Condition",
        description: "Complete while",
        incompleteCode: `int count = 0;
___ (count < 10) {
    System.out.println(count);
    count++;
}`,
        placeholder: "while",
        expectedAnswer: "while",
        solution: `while (count < 10) {`,
      },
    ],
  },
  functions: {
    id: "functions",
    title: "Methods",
    concept: {
      what: "Methods (functions) are reusable code blocks. In Java, methods belong to classes. They can take parameters and return values.",
      why: "Methods organize code, eliminate repetition, and make programs modular and maintainable.",
      explanation:
        "Methods have access modifiers (public, private), return types (void if no return), and parameters. Static methods belong to the class, not instances.",
    },
    syntaxExamples: [
      {
        title: "Method Declaration",
        description: "Defining and calling methods",
        code: `public static void greet(String name) {
    System.out.println("Hello, " + name + "!");
}

public static void main(String[] args) {
    greet("Java");
}`,
      },
      {
        title: "Method with Return",
        description: "Method that returns a value",
        code: `public static int add(int a, int b) {
    return a + b;
}

public static void main(String[] args) {
    int result = add(5, 3);
    System.out.println(result);  // 8
}`,
      },
    ],
    practiceQuestions: [
      {
        id: "java-func-1",
        type: "fill-blank",
        title: "Method Declaration",
        description: "Complete method definition",
        incompleteCode: `public static void sayHello() {
    System.out.println("Hello!");
}

sayHello();`,
        placeholder: "void",
        expectedAnswer: "void",
        solution: `public static void sayHello() {`,
      },
      {
        id: "java-func-2",
        type: "fill-blank",
        title: "Return Statement",
        description: "Complete return",
        incompleteCode: `public static int multiply(int x, int y) {
    ___ x * y;
}`,
        placeholder: "return",
        expectedAnswer: "return",
        solution: `return x * y;`,
      },
      {
        id: "java-func-3",
        type: "complete-function",
        title: "Complete Method",
        description: "Complete square method",
        incompleteCode: `public static int square(int n) {
    return n ___;
}`,
        placeholder: "* n",
        expectedAnswer: "* n",
        solution: `return n * n;`,
      },
      {
        id: "java-func-4",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `public static String greet(String name) {
    return "Hi, " + name;
}

System.out.println(greet("Alice"));`,
        expectedAnswer: "Hi, Alice",
        solution: `greet("Alice") returns "Hi, Alice"`,
      },
      {
        id: "java-func-5",
        type: "fill-blank",
        title: "Method Parameter",
        description: "Add parameter",
        incompleteCode: `public static void greet(___ name) {
    System.out.println("Hello, " + name);
}`,
        placeholder: "String",
        expectedAnswer: "String",
        solution: `public static void greet(String name) {`,
      },
    ],
  },
  arrays: {
    id: "arrays",
    title: "Arrays",
    concept: {
      what: "Arrays store multiple values of the same type. Java arrays are fixed-size and zero-indexed.",
      why: "Arrays are essential for storing collections of data. They're the foundation for more complex data structures.",
      explanation:
        "Arrays are declared with type[]. Use length property for size. Arrays can be initialized with values or created with new keyword.",
    },
    syntaxExamples: [
      {
        title: "Array Basics",
        description: "Creating and accessing arrays",
        code: `// Declare and initialize
int[] numbers = {1, 2, 3, 4, 5};

// Access elements
System.out.println(numbers[0]);  // 1
System.out.println(numbers.length);  // 5

// Create array with size
int[] arr = new int[5];`,
      },
      {
        title: "Loop Through Array",
        description: "Iterating arrays",
        code: `int[] numbers = {1, 2, 3};

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}`,
      },
    ],
    practiceQuestions: [
      {
        id: "java-arr-1",
        type: "fill-blank",
        title: "Access Element",
        description: "Access first element",
        incompleteCode: `int[] numbers = {10, 20, 30};
System.out.println(numbers[___]);`,
        placeholder: "0",
        expectedAnswer: "0",
        solution: `System.out.println(numbers[0]);`,
      },
      {
        id: "java-arr-2",
        type: "fill-blank",
        title: "Array Length",
        description: "Get array length",
        incompleteCode: `int[] arr = {1, 2, 3};
System.out.println(arr.___);`,
        placeholder: "length",
        expectedAnswer: "length",
        solution: `System.out.println(arr.length);`,
      },
      {
        id: "java-arr-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `int[] numbers = {1, 2, 3};
System.out.println(numbers.length);`,
        expectedAnswer: "3",
        solution: `numbers.length returns 3`,
      },
      {
        id: "java-arr-4",
        type: "complete-function",
        title: "Create Array",
        description: "Create array with 1, 2, 3",
        incompleteCode: `int[] numbers = {___, ___, ___};
System.out.println(numbers[0]);`,
        placeholder: "1, 2, 3",
        expectedAnswer: "1, 2, 3",
        solution: `int[] numbers = {1, 2, 3};`,
      },
      {
        id: "java-arr-5",
        type: "fill-blank",
        title: "Loop Array",
        description: "Complete loop",
        incompleteCode: `int[] numbers = {1, 2, 3};
for (int i = 0; i < numbers.___; i++) {
    System.out.println(numbers[i]);
}`,
        placeholder: "length",
        expectedAnswer: "length",
        solution: `for (int i = 0; i < numbers.length; i++) {`,
      },
    ],
  },
  strings: {
    id: "strings",
    title: "Strings",
    concept: {
      what: "Strings are sequences of characters. In Java, String is an object (not primitive). Strings are immutable.",
      why: "Strings are used everywhere - user input, messages, data processing. Essential for any application.",
      explanation:
        "Strings are created with double quotes. Use + for concatenation. String class has many methods: length(), substring(), toUpperCase(), equals(), etc.",
    },
    syntaxExamples: [
      {
        title: "String Basics",
        description: "Creating and using strings",
        code: `String name = "Java";
String greeting = "Hello";

String message = greeting + " " + name;
System.out.println(message);  // Hello Java

System.out.println(name.length());  // 4`,
      },
      {
        title: "String Methods",
        description: "Common string operations",
        code: `String text = "Hello World";

System.out.println(text.toUpperCase());  // HELLO WORLD
System.out.println(text.substring(0, 5));  // Hello
System.out.println(text.equals("Hello"));  // false`,
      },
    ],
    practiceQuestions: [
      {
        id: "java-str-1",
        type: "fill-blank",
        title: "String Concatenation",
        description: "Concatenate strings",
        incompleteCode: `String first = "Hello";
String second = "World";
String result = first ___ " " ___ second;
System.out.println(result);`,
        placeholder: "+",
        expectedAnswer: "+",
        solution: `String result = first + " " + second;`,
      },
      {
        id: "java-str-2",
        type: "fill-blank",
        title: "String Method",
        description: "Get string length",
        incompleteCode: `String text = "Hello";
System.out.println(text.___());`,
        placeholder: "length",
        expectedAnswer: "length",
        solution: `System.out.println(text.length());`,
      },
      {
        id: "java-str-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `String name = "Java";
System.out.println(name.length());`,
        expectedAnswer: "4",
        solution: `name.length() returns 4`,
      },
      {
        id: "java-str-4",
        type: "complete-function",
        title: "Substring",
        description: "Get substring",
        incompleteCode: `String text = "Hello";
System.out.println(text.___(0, 3));`,
        placeholder: "substring",
        expectedAnswer: "substring",
        solution: `System.out.println(text.substring(0, 3));`,
      },
      {
        id: "java-str-5",
        type: "fill-blank",
        title: "String Comparison",
        description: "Compare strings",
        incompleteCode: `String a = "Hello";
String b = "Hello";
System.out.println(a.___(b));`,
        placeholder: "equals",
        expectedAnswer: "equals",
        solution: `System.out.println(a.equals(b));`,
      },
    ],
  },
  recursion: {
    id: "recursion",
    title: "Recursion",
    concept: {
      what: "Recursion is when a method calls itself. It solves problems by breaking them into smaller, similar subproblems.",
      why: "Recursion provides elegant solutions for tree structures, mathematical sequences, and divide-and-conquer problems.",
      explanation:
        "Recursive methods need a base case (stopping condition) and recursive case (calls itself). Without base case, infinite recursion occurs (StackOverflowError).",
    },
    syntaxExamples: [
      {
        title: "Factorial",
        description: "Calculate factorial recursively",
        code: `public static int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;  // Base case
    }
    return n * factorial(n - 1);  // Recursive case
}

System.out.println(factorial(5));  // 120`,
      },
      {
        title: "Countdown",
        description: "Recursive countdown",
        code: `public static void countdown(int n) {
    if (n <= 0) {
        System.out.println("Done!");
        return;  // Base case
    }
    System.out.println(n);
    countdown(n - 1);  // Recursive case
}

countdown(5);`,
      },
    ],
    practiceQuestions: [
      {
        id: "java-rec-1",
        type: "fill-blank",
        title: "Base Case",
        description: "Complete base case",
        incompleteCode: `public static int factorial(int n) {
    if (n == 0 || n == 1) {
        return ___;
    }
    return n * factorial(n - 1);
}`,
        placeholder: "1",
        expectedAnswer: "1",
        solution: `return 1;  // Base case`,
      },
      {
        id: "java-rec-2",
        type: "fill-blank",
        title: "Recursive Call",
        description: "Complete recursive call",
        incompleteCode: `public static void countdown(int n) {
    if (n <= 0) return;
    System.out.println(n);
    countdown(___ - 1);
}`,
        placeholder: "n",
        expectedAnswer: "n",
        solution: `countdown(n - 1);`,
      },
      {
        id: "java-rec-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `public static void printNumbers(int n) {
    if (n > 0) {
        System.out.println(n);
        printNumbers(n - 1);
    }
}

printNumbers(3);`,
        expectedAnswer: "3\n2\n1",
        solution: `Prints 3, 2, 1 in order`,
      },
      {
        id: "java-rec-4",
        type: "complete-function",
        title: "Complete Recursion",
        description: "Complete sum function",
        incompleteCode: `public static int sumToN(int n) {
    if (n == 0) return 0;
    return n + sumToN(___ - 1);
}`,
        placeholder: "n",
        expectedAnswer: "n",
        solution: `return n + sumToN(n - 1);`,
      },
      {
        id: "java-rec-5",
        type: "fix-error",
        title: "Fix Base Case",
        description: "Add base case",
        incompleteCode: `public static int power(int base, int exp) {
    if (exp == 0) {
        return ___;
    }
    return base * power(base, exp - 1);
}`,
        placeholder: "1",
        expectedAnswer: "1",
        solution: `return 1;  // Any number to power 0 is 1`,
      },
    ],
  },
  "problem-solving": {
    id: "problem-solving",
    title: "Basic Problem Solving",
    concept: {
      what: "Problem solving combines programming concepts to solve real problems. Break problems into steps and apply your knowledge.",
      why: "Real programming is about solving problems. Learning to combine concepts is essential for building applications.",
      explanation:
        "Combine variables, loops, conditionals, and methods. Understand the problem, plan your approach, then implement step by step.",
    },
    syntaxExamples: [
      {
        title: "Find Maximum",
        description: "Find largest number in array",
        code: `public static int findMax(int[] numbers) {
    int max = numbers[0];
    for (int num : numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

int[] arr = {3, 7, 2, 9, 1};
System.out.println(findMax(arr));  // 9`,
      },
      {
        title: "Count Evens",
        description: "Count even numbers",
        code: `public static int countEvens(int[] numbers) {
    int count = 0;
    for (int num : numbers) {
        if (num % 2 == 0) {
            count++;
        }
    }
    return count;
}

int[] arr = {1, 2, 3, 4, 5, 6};
System.out.println(countEvens(arr));  // 3`,
      },
    ],
    practiceQuestions: [
      {
        id: "java-prob-1",
        type: "complete-function",
        title: "Sum Array",
        description: "Complete sum function",
        incompleteCode: `public static int sumArray(int[] numbers) {
    int total = 0;
    for (int num : numbers) {
        total += ___;
    }
    return total;
}`,
        placeholder: "num",
        expectedAnswer: "num",
        solution: `total += num;`,
      },
      {
        id: "java-prob-2",
        type: "fill-blank",
        title: "Check Even",
        description: "Check if number is even",
        incompleteCode: `int num = 8;
if (num ___ 2 == 0) {
    System.out.println("Even");
}`,
        placeholder: "%",
        expectedAnswer: "%",
        solution: `if (num % 2 == 0) {`,
      },
      {
        id: "java-prob-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `public static int multiplyArray(int[] numbers) {
    int result = 1;
    for (int num : numbers) {
        result *= num;
    }
    return result;
}

int[] arr = {2, 3, 4};
System.out.println(multiplyArray(arr));`,
        expectedAnswer: "24",
        solution: `2 * 3 * 4 = 24`,
      },
      {
        id: "java-prob-4",
        type: "complete-function",
        title: "Find Minimum",
        description: "Complete min function",
        incompleteCode: `public static int findMin(int[] numbers) {
    int min = numbers[0];
    for (int num : numbers) {
        if (num ___ min) {
            min = num;
        }
    }
    return min;
}`,
        placeholder: "<",
        expectedAnswer: "<",
        solution: `if (num < min) {`,
      },
      {
        id: "java-prob-5",
        type: "fill-blank",
        title: "Count Positives",
        description: "Count positive numbers",
        incompleteCode: `int[] numbers = {-1, 2, -3, 4, 5};
int count = 0;
for (int num : numbers) {
    if (num ___ 0) {
        count++;
    }
}
System.out.println(count);`,
        placeholder: ">",
        expectedAnswer: ">",
        solution: `if (num > 0) {`,
      },
    ],
  },
  "input-output": {
    id: "input-output",
    title: "Input & Output",
    concept: {
      what: "I/O allows programs to interact with users. Java uses Scanner for input and System.out for output.",
      why: "I/O makes programs interactive. Most applications need to receive input and display output.",
      explanation:
        "Import java.util.Scanner. Use Scanner for input (nextInt(), nextLine(), etc.). Use System.out.println() for output. Always close Scanner when done.",
    },
    syntaxExamples: [
      {
        title: "Basic I/O",
        description: "Getting and displaying input",
        code: `import java.util.Scanner;

Scanner scanner = new Scanner(System.in);

System.out.print("Enter your name: ");
String name = scanner.nextLine();
System.out.println("Hello, " + name + "!");

scanner.close();`,
      },
      {
        title: "Number Input",
        description: "Getting numeric input",
        code: `import java.util.Scanner;

Scanner scanner = new Scanner(System.in);

System.out.print("Enter your age: ");
int age = scanner.nextInt();
System.out.println("You are " + age + " years old");

scanner.close();`,
      },
    ],
    practiceQuestions: [
      {
        id: "java-io-1",
        type: "fill-blank",
        title: "Import Scanner",
        description: "Import Scanner class",
        incompleteCode: `___ java.util.Scanner;

Scanner scanner = new Scanner(System.in);`,
        placeholder: "import",
        expectedAnswer: "import",
        solution: `import java.util.Scanner;`,
      },
      {
        id: "java-io-2",
        type: "fill-blank",
        title: "Get Input",
        description: "Get string input",
        incompleteCode: `Scanner scanner = new Scanner(System.in);
String name = scanner.___();
System.out.println(name);`,
        placeholder: "nextLine",
        expectedAnswer: "nextLine",
        solution: `String name = scanner.nextLine();`,
      },
      {
        id: "java-io-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `System.out.print("Hello");
System.out.println(" World");`,
        expectedAnswer: "Hello World",
        solution: `print() doesn't add newline, println() does`,
      },
      {
        id: "java-io-4",
        type: "complete-function",
        title: "Get Number",
        description: "Get integer input",
        incompleteCode: `Scanner scanner = new Scanner(System.in);
int num = scanner.___();
System.out.println(num);`,
        placeholder: "nextInt",
        expectedAnswer: "nextInt",
        solution: `int num = scanner.nextInt();`,
      },
      {
        id: "java-io-5",
        type: "fill-blank",
        title: "Output",
        description: "Print message",
        incompleteCode: `System.out.___("Hello World");`,
        placeholder: "println",
        expectedAnswer: "println",
        solution: `System.out.println("Hello World");`,
      },
    ],
  },
}

