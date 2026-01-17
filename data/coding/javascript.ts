/**
 * JavaScript Language Data
 * 
 * Comprehensive fundamentals data for JavaScript programming language.
 */

import type { Topic } from "@/services/coding/types"

export const javascriptTopics: Record<string, Topic> = {
  variables: {
    id: "variables",
    title: "Variables & Data Types",
    concept: {
      what: "Variables store data values. JavaScript uses let, const, and var for variable declarations. JavaScript is dynamically typed.",
      why: "Variables are fundamental - they store and manage data throughout your program's execution.",
      explanation:
        "Use 'let' for variables that change, 'const' for constants, and avoid 'var'. JavaScript types include number, string, boolean, object, and undefined.",
    },
    syntaxExamples: [
      {
        title: "Variable Declarations",
        description: "Different ways to declare variables",
        code: `let age = 25;
const name = "JavaScript";
var price = 19.99;  // Avoid var in modern JS

console.log(age, name, price);`,
      },
      {
        title: "Data Types",
        description: "JavaScript primitive types",
        code: `let num = 42;           // Number
let text = "Hello";      // String
let isActive = true;     // Boolean
let data = null;         // Null
let value;               // Undefined

console.log(typeof num, typeof text);`,
      },
    ],
    practiceQuestions: [
      {
        id: "js-var-1",
        type: "fill-blank",
        title: "Declare Variable",
        description: "Declare a variable 'message' with value 'Hello'",
        incompleteCode: `___ message = "Hello";
console.log(message);`,
        placeholder: "let",
        expectedAnswer: "let",
        solution: `let message = "Hello";`,
      },
      {
        id: "js-var-2",
        type: "fill-blank",
        title: "Const Declaration",
        description: "Create a constant 'PI' with value 3.14",
        incompleteCode: `___ PI = 3.14;
console.log(PI);`,
        placeholder: "const",
        expectedAnswer: "const",
        solution: `const PI = 3.14;`,
      },
      {
        id: "js-var-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `let x = 5;
let y = 10;
console.log(x + y);`,
        expectedAnswer: "15",
        solution: `let x = 5;
let y = 10;
console.log(x + y);  // Output: 15`,
      },
      {
        id: "js-var-4",
        type: "complete-function",
        title: "Complete Variable",
        description: "Create variable 'count' with value 0",
        incompleteCode: `let count = ___;
console.log(count);`,
        placeholder: "0",
        expectedAnswer: "0",
        solution: `let count = 0;`,
      },
      {
        id: "js-var-5",
        type: "fill-blank",
        title: "Boolean Variable",
        description: "Create boolean variable 'isReady'",
        incompleteCode: `let isReady = ___;
console.log(isReady);`,
        placeholder: "true",
        expectedAnswer: "true",
        solution: `let isReady = true;`,
      },
    ],
  },
  operators: {
    id: "operators",
    title: "Operators",
    concept: {
      what: "Operators perform operations on values. JavaScript has arithmetic, comparison, logical, and assignment operators.",
      why: "Operators are essential for calculations, comparisons, and logical operations in any program.",
      explanation:
        "Arithmetic: +, -, *, /, %. Comparison: ==, ===, !=, !==, <, >. Logical: &&, ||, !. Use === for strict equality.",
    },
    syntaxExamples: [
      {
        title: "Arithmetic Operators",
        description: "Basic math operations",
        code: `let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1`,
      },
      {
        title: "Comparison Operators",
        description: "Comparing values",
        code: `let x = 5;
let y = "5";

console.log(x == y);   // true (loose equality)
console.log(x === y);  // false (strict equality)
console.log(x != y);   // false
console.log(x !== y);  // true`,
      },
    ],
    practiceQuestions: [
      {
        id: "js-op-1",
        type: "fill-blank",
        title: "Addition",
        description: "Add 5 and 3",
        incompleteCode: `let result = 5 ___ 3;
console.log(result);`,
        placeholder: "+",
        expectedAnswer: "+",
        solution: `let result = 5 + 3;`,
      },
      {
        id: "js-op-2",
        type: "fill-blank",
        title: "Strict Equality",
        description: "Check strict equality",
        incompleteCode: `let a = 5;
let b = 5;
console.log(a ___ b);`,
        placeholder: "===",
        expectedAnswer: "===",
        solution: `console.log(a === b);`,
      },
      {
        id: "js-op-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `console.log(10 % 3);`,
        expectedAnswer: "1",
        solution: `console.log(10 % 3);  // Output: 1 (remainder)`,
      },
      {
        id: "js-op-4",
        type: "fill-blank",
        title: "Logical AND",
        description: "Use logical AND operator",
        incompleteCode: `let age = 20;
let hasLicense = true;
console.log(age >= 18 ___ hasLicense);`,
        placeholder: "&&",
        expectedAnswer: "&&",
        solution: `console.log(age >= 18 && hasLicense);`,
      },
      {
        id: "js-op-5",
        type: "complete-function",
        title: "Exponentiation",
        description: "Calculate 2 to the power of 3",
        incompleteCode: `let result = 2 ___ 3;
console.log(result);`,
        placeholder: "**",
        expectedAnswer: "**",
        solution: `let result = 2 ** 3;`,
      },
    ],
  },
  conditionals: {
    id: "conditionals",
    title: "Conditional Statements",
    concept: {
      what: "Conditionals execute code based on conditions. JavaScript uses if, else if, else, and switch statements.",
      why: "Conditionals make programs responsive and intelligent by executing different code based on different situations.",
      explanation:
        "Use if for single conditions, else if for multiple conditions, and else for default cases. Switch is useful for multiple value comparisons.",
    },
    syntaxExamples: [
      {
        title: "If-Else",
        description: "Basic conditional",
        code: `let age = 18;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}`,
      },
      {
        title: "If-Else If-Else",
        description: "Multiple conditions",
        code: `let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}`,
      },
    ],
    practiceQuestions: [
      {
        id: "js-cond-1",
        type: "fill-blank",
        title: "If Statement",
        description: "Complete the if condition",
        incompleteCode: `let age = 20;
___ (age >= 18) {
    console.log("Adult");
}`,
        placeholder: "if",
        expectedAnswer: "if",
        solution: `if (age >= 18) {`,
      },
      {
        id: "js-cond-2",
        type: "fill-blank",
        title: "Else Clause",
        description: "Add else clause",
        incompleteCode: `let temp = 25;
if (temp > 30) {
    console.log("Hot");
} ___ {
    console.log("Cool");
}`,
        placeholder: "else",
        expectedAnswer: "else",
        solution: `} else {`,
      },
      {
        id: "js-cond-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `let x = 10;
if (x > 5) {
    console.log("Greater");
} else {
    console.log("Smaller");
}`,
        expectedAnswer: "Greater",
        solution: `x = 10, which is > 5, so "Greater" is printed`,
      },
      {
        id: "js-cond-4",
        type: "complete-function",
        title: "Complete Conditional",
        description: "Check if number is positive",
        incompleteCode: `let num = 5;
___ (num > 0) {
    console.log("Positive");
}`,
        placeholder: "if",
        expectedAnswer: "if",
        solution: `if (num > 0) {`,
      },
      {
        id: "js-cond-5",
        type: "fix-error",
        title: "Fix Syntax",
        description: "Fix missing closing brace",
        incompleteCode: `let x = 5;
if (x > 0) {
    console.log("Positive");
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
      what: "Loops repeat code. JavaScript has for loops, while loops, and do-while loops. Also for...in and for...of for iterating.",
      why: "Loops eliminate repetitive code and make it easy to process arrays and perform repeated operations.",
      explanation:
        "For loops are great when you know iterations. While loops continue while condition is true. Use break to exit, continue to skip iteration.",
    },
    syntaxExamples: [
      {
        title: "For Loop",
        description: "Iterating with for loop",
        code: `// Count from 0 to 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Output: 0, 1, 2, 3, 4`,
      },
      {
        title: "While Loop",
        description: "Repeating with while",
        code: `let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Output: 0, 1, 2, 3, 4`,
      },
    ],
    practiceQuestions: [
      {
        id: "js-loop-1",
        type: "fill-blank",
        title: "For Loop",
        description: "Complete the for loop",
        incompleteCode: `for (let i = 0; i ___ 5; i++) {
    console.log(i);
}`,
        placeholder: "<",
        expectedAnswer: "<",
        solution: `for (let i = 0; i < 5; i++) {`,
      },
      {
        id: "js-loop-2",
        type: "fill-blank",
        title: "Increment",
        description: "Complete the increment",
        incompleteCode: `let i = 0;
while (i < 5) {
    console.log(i);
    i___;
}`,
        placeholder: "++",
        expectedAnswer: "++",
        solution: `i++;`,
      },
      {
        id: "js-loop-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `for (let i = 0; i < 3; i++) {
    console.log(i * 2);
}`,
        expectedAnswer: "0\n2\n4",
        solution: `i = 0, 1, 2 → outputs 0, 2, 4`,
      },
      {
        id: "js-loop-4",
        type: "complete-function",
        title: "For...of Loop",
        description: "Loop through array",
        incompleteCode: `let fruits = ["apple", "banana"];
for (let fruit ___ fruits) {
    console.log(fruit);
}`,
        placeholder: "of",
        expectedAnswer: "of",
        solution: `for (let fruit of fruits) {`,
      },
      {
        id: "js-loop-5",
        type: "fill-blank",
        title: "While Condition",
        description: "Complete while condition",
        incompleteCode: `let count = 0;
___ (count < 10) {
    console.log(count);
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
    title: "Functions",
    concept: {
      what: "Functions are reusable code blocks. JavaScript functions can be declared with function keyword, arrow functions, or as expressions.",
      why: "Functions organize code, eliminate repetition, and make programs modular and maintainable.",
      explanation:
        "Functions can take parameters and return values. Arrow functions provide concise syntax. Functions are first-class citizens in JavaScript.",
    },
    syntaxExamples: [
      {
        title: "Function Declaration",
        description: "Defining and calling functions",
        code: `function greet(name) {
    return "Hello, " + name + "!";
}

let message = greet("JavaScript");
console.log(message);  // Hello, JavaScript!`,
      },
      {
        title: "Arrow Function",
        description: "Modern arrow function syntax",
        code: `const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3));  // 8`,
      },
    ],
    practiceQuestions: [
      {
        id: "js-func-1",
        type: "fill-blank",
        title: "Function Declaration",
        description: "Complete function definition",
        incompleteCode: `___ sayHello() {
    console.log("Hello!");
}

sayHello();`,
        placeholder: "function",
        expectedAnswer: "function",
        solution: `function sayHello() {`,
      },
      {
        id: "js-func-2",
        type: "fill-blank",
        title: "Return Statement",
        description: "Complete return",
        incompleteCode: `function multiply(x, y) {
    ___ x * y;
}

console.log(multiply(3, 4));`,
        placeholder: "return",
        expectedAnswer: "return",
        solution: `return x * y;`,
      },
      {
        id: "js-func-3",
        type: "complete-function",
        title: "Arrow Function",
        description: "Complete arrow function",
        incompleteCode: `const square = (n) => n ___;
console.log(square(5));`,
        placeholder: "** 2",
        expectedAnswer: "** 2",
        solution: `const square = (n) => n ** 2;`,
      },
      {
        id: "js-func-4",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `function greet(name) {
    return "Hi, " + name;
}

console.log(greet("Alice"));`,
        expectedAnswer: "Hi, Alice",
        solution: `greet("Alice") returns "Hi, Alice"`,
      },
      {
        id: "js-func-5",
        type: "fill-blank",
        title: "Function Parameters",
        description: "Add parameter to function",
        incompleteCode: `function greet(___) {
    return "Hello, " + name;
}

console.log(greet("World"));`,
        placeholder: "name",
        expectedAnswer: "name",
        solution: `function greet(name) {`,
      },
    ],
  },
  arrays: {
    id: "arrays",
    title: "Arrays",
    concept: {
      what: "Arrays store multiple values. JavaScript arrays are dynamic, can hold mixed types, and have many built-in methods.",
      why: "Arrays are essential for storing collections of data and are used in almost every JavaScript program.",
      explanation:
        "Arrays are zero-indexed. Use push() to add, pop() to remove from end. length property gives array size. Arrays have methods like map(), filter(), forEach().",
    },
    syntaxExamples: [
      {
        title: "Array Basics",
        description: "Creating and accessing arrays",
        code: `let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);  // apple
console.log(fruits.length);  // 3

fruits.push("grape");
console.log(fruits);`,
      },
      {
        title: "Array Methods",
        description: "Common array operations",
        code: `let numbers = [1, 2, 3, 4, 5];

console.log(numbers.length);  // 5

numbers.forEach(num => {
    console.log(num);
});`,
      },
    ],
    practiceQuestions: [
      {
        id: "js-arr-1",
        type: "fill-blank",
        title: "Access Element",
        description: "Access first element",
        incompleteCode: `let fruits = ["apple", "banana"];
console.log(fruits[___]);`,
        placeholder: "0",
        expectedAnswer: "0",
        solution: `console.log(fruits[0]);`,
      },
      {
        id: "js-arr-2",
        type: "fill-blank",
        title: "Add to Array",
        description: "Add element to array",
        incompleteCode: `let arr = [1, 2];
arr.___(3);
console.log(arr);`,
        placeholder: "push",
        expectedAnswer: "push",
        solution: `arr.push(3);`,
      },
      {
        id: "js-arr-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `let numbers = [1, 2, 3];
console.log(numbers.length);`,
        expectedAnswer: "3",
        solution: `numbers.length returns 3`,
      },
      {
        id: "js-arr-4",
        type: "complete-function",
        title: "Create Array",
        description: "Create array with 1, 2, 3",
        incompleteCode: `let numbers = [___, ___, ___];
console.log(numbers);`,
        placeholder: "1, 2, 3",
        expectedAnswer: "1, 2, 3",
        solution: `let numbers = [1, 2, 3];`,
      },
      {
        id: "js-arr-5",
        type: "fill-blank",
        title: "Loop Array",
        description: "Loop through array",
        incompleteCode: `let items = ["a", "b"];
for (let item ___ items) {
    console.log(item);
}`,
        placeholder: "of",
        expectedAnswer: "of",
        solution: `for (let item of items) {`,
      },
    ],
  },
  strings: {
    id: "strings",
    title: "Strings",
    concept: {
      what: "Strings are sequences of characters. JavaScript strings are immutable but have many methods for manipulation.",
      why: "Strings are used everywhere - user input, messages, data processing. Essential for any application.",
      explanation:
        "Strings can use single or double quotes. Template literals (backticks) allow interpolation. Methods include length, toUpperCase(), substring(), etc.",
    },
    syntaxExamples: [
      {
        title: "String Basics",
        description: "Creating and using strings",
        code: `let name = "JavaScript";
let greeting = 'Hello';

let message = greeting + " " + name;
console.log(message);  // Hello JavaScript

console.log(name.length);  // 10`,
      },
      {
        title: "Template Literals",
        description: "String interpolation",
        code: `let name = "Alice";
let age = 25;

let message = \`My name is \${name} and I'm \${age} years old\`;
console.log(message);`,
      },
    ],
    practiceQuestions: [
      {
        id: "js-str-1",
        type: "fill-blank",
        title: "String Concatenation",
        description: "Concatenate strings",
        incompleteCode: `let first = "Hello";
let second = "World";
let result = first ___ " " ___ second;
console.log(result);`,
        placeholder: "+",
        expectedAnswer: "+",
        solution: `let result = first + " " + second;`,
      },
      {
        id: "js-str-2",
        type: "fill-blank",
        title: "String Method",
        description: "Convert to uppercase",
        incompleteCode: `let text = "hello";
console.log(text.___());`,
        placeholder: "toUpperCase",
        expectedAnswer: "toUpperCase",
        solution: `console.log(text.toUpperCase());`,
      },
      {
        id: "js-str-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `let name = "JavaScript";
console.log(name.length);`,
        expectedAnswer: "10",
        solution: `name.length returns 10 (number of characters)`,
      },
      {
        id: "js-str-4",
        type: "complete-function",
        title: "Template Literal",
        description: "Complete template literal",
        incompleteCode: `let age = 20;
let message = \`I am \${___} years old\`;
console.log(message);`,
        placeholder: "age",
        expectedAnswer: "age",
        solution: `let message = \`I am \${age} years old\`;`,
      },
      {
        id: "js-str-5",
        type: "fill-blank",
        title: "Substring",
        description: "Get substring",
        incompleteCode: `let text = "JavaScript";
console.log(text.___(0, 4));`,
        placeholder: "substring",
        expectedAnswer: "substring",
        solution: `console.log(text.substring(0, 4));`,
      },
    ],
  },
  recursion: {
    id: "recursion",
    title: "Recursion",
    concept: {
      what: "Recursion is when a function calls itself. It solves problems by breaking them into smaller, similar subproblems.",
      why: "Recursion provides elegant solutions for tree structures, mathematical sequences, and divide-and-conquer problems.",
      explanation:
        "Recursive functions need a base case (stopping condition) and recursive case (calls itself). Without base case, infinite recursion occurs.",
    },
    syntaxExamples: [
      {
        title: "Factorial",
        description: "Calculate factorial recursively",
        code: `function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  // Base case
    }
    return n * factorial(n - 1);  // Recursive case
}

console.log(factorial(5));  // 120`,
      },
      {
        title: "Countdown",
        description: "Recursive countdown",
        code: `function countdown(n) {
    if (n <= 0) {
        console.log("Done!");
        return;  // Base case
    }
    console.log(n);
    countdown(n - 1);  // Recursive case
}

countdown(5);`,
      },
    ],
    practiceQuestions: [
      {
        id: "js-rec-1",
        type: "fill-blank",
        title: "Base Case",
        description: "Complete base case",
        incompleteCode: `function factorial(n) {
    if (n === 0 || n === 1) {
        return ___;
    }
    return n * factorial(n - 1);
}`,
        placeholder: "1",
        expectedAnswer: "1",
        solution: `return 1;  // Base case`,
      },
      {
        id: "js-rec-2",
        type: "fill-blank",
        title: "Recursive Call",
        description: "Complete recursive call",
        incompleteCode: `function countdown(n) {
    if (n <= 0) return;
    console.log(n);
    countdown(___ - 1);
}`,
        placeholder: "n",
        expectedAnswer: "n",
        solution: `countdown(n - 1);`,
      },
      {
        id: "js-rec-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `function printNumbers(n) {
    if (n > 0) {
        console.log(n);
        printNumbers(n - 1);
    }
}

printNumbers(3);`,
        expectedAnswer: "3\n2\n1",
        solution: `Prints 3, 2, 1 in order`,
      },
      {
        id: "js-rec-4",
        type: "complete-function",
        title: "Complete Recursion",
        description: "Complete sum function",
        incompleteCode: `function sumToN(n) {
    if (n === 0) return 0;
    return n + sumToN(___ - 1);
}`,
        placeholder: "n",
        expectedAnswer: "n",
        solution: `return n + sumToN(n - 1);`,
      },
      {
        id: "js-rec-5",
        type: "fix-error",
        title: "Fix Base Case",
        description: "Add base case",
        incompleteCode: `function power(base, exp) {
    if (exp === 0) {
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
        "Combine variables, loops, conditionals, and functions. Understand the problem, plan your approach, then implement step by step.",
    },
    syntaxExamples: [
      {
        title: "Find Maximum",
        description: "Find largest number in array",
        code: `function findMax(numbers) {
    let max = numbers[0];
    for (let num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

console.log(findMax([3, 7, 2, 9, 1]));  // 9`,
      },
      {
        title: "Count Evens",
        description: "Count even numbers",
        code: `function countEvens(numbers) {
    let count = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countEvens([1, 2, 3, 4, 5, 6]));  // 3`,
      },
    ],
    practiceQuestions: [
      {
        id: "js-prob-1",
        type: "complete-function",
        title: "Sum Array",
        description: "Complete sum function",
        incompleteCode: `function sumArray(numbers) {
    let total = 0;
    for (let num of numbers) {
        total += ___;
    }
    return total;
}`,
        placeholder: "num",
        expectedAnswer: "num",
        solution: `total += num;`,
      },
      {
        id: "js-prob-2",
        type: "fill-blank",
        title: "Check Even",
        description: "Check if number is even",
        incompleteCode: `let num = 8;
if (num ___ 2 === 0) {
    console.log("Even");
}`,
        placeholder: "%",
        expectedAnswer: "%",
        solution: `if (num % 2 === 0) {`,
      },
      {
        id: "js-prob-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `function multiplyArray(numbers) {
    let result = 1;
    for (let num of numbers) {
        result *= num;
    }
    return result;
}

console.log(multiplyArray([2, 3, 4]));`,
        expectedAnswer: "24",
        solution: `2 * 3 * 4 = 24`,
      },
      {
        id: "js-prob-4",
        type: "complete-function",
        title: "Find Minimum",
        description: "Complete min function",
        incompleteCode: `function findMin(numbers) {
    let min = numbers[0];
    for (let num of numbers) {
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
        id: "js-prob-5",
        type: "fill-blank",
        title: "Count Positives",
        description: "Count positive numbers",
        incompleteCode: `let numbers = [-1, 2, -3, 4, 5];
let count = 0;
for (let num of numbers) {
    if (num ___ 0) {
        count++;
    }
}
console.log(count);`,
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
      what: "I/O allows programs to interact with users. In browser JavaScript, use prompt() and alert(). In Node.js, use readline or process.stdin.",
      why: "I/O makes programs interactive. Most applications need to receive input and display output.",
      explanation:
        "Browser: prompt() for input, alert()/console.log() for output. Node.js: readline interface or process.stdin. Always handle input as strings initially.",
    },
    syntaxExamples: [
      {
        title: "Browser I/O",
        description: "Using prompt and alert",
        code: `// Get input
let name = prompt("Enter your name: ");

// Display output
alert("Hello, " + name + "!");
console.log("Hello, " + name + "!");`,
      },
      {
        title: "Console Output",
        description: "Different output methods",
        code: `let age = 25;

console.log("Age:", age);
console.log(\`You are \${age} years old\`);`,
      },
    ],
    practiceQuestions: [
      {
        id: "js-io-1",
        type: "fill-blank",
        title: "Get Input",
        description: "Get user input",
        incompleteCode: `let name = ___("Enter name: ");
console.log(name);`,
        placeholder: "prompt",
        expectedAnswer: "prompt",
        solution: `let name = prompt("Enter name: ");`,
      },
      {
        id: "js-io-2",
        type: "fill-blank",
        title: "Display Output",
        description: "Display message",
        incompleteCode: `let message = "Hello";
___(message);`,
        placeholder: "console.log",
        expectedAnswer: "console.log",
        solution: `console.log(message);`,
      },
      {
        id: "js-io-3",
        type: "predict-output",
        title: "Predict Output",
        description: "What will be printed?",
        incompleteCode: `let num = "5";
console.log(num + num);`,
        expectedAnswer: "55",
        solution: `String concatenation: "5" + "5" = "55"`,
      },
      {
        id: "js-io-4",
        type: "complete-function",
        title: "Template Literal Output",
        description: "Complete output",
        incompleteCode: `let name = "Alice";
let age = 25;
console.log(\`\${name} is \${___} years old\`);`,
        placeholder: "age",
        expectedAnswer: "age",
        solution: `console.log(\`\${name} is \${age} years old\`);`,
      },
      {
        id: "js-io-5",
        type: "fill-blank",
        title: "Parse Input",
        description: "Convert string to number",
        incompleteCode: `let input = "10";
let num = ___(input);
console.log(num + 5);`,
        placeholder: "parseInt",
        expectedAnswer: "parseInt",
        solution: `let num = parseInt(input);`,
      },
    ],
  },
}

