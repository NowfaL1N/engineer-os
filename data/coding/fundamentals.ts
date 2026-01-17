/**
 * Fundamentals Definitions
 * 
 * Common fundamentals structure for all programming languages.
 * Each language will implement these topics with language-specific content.
 */

import type { Fundamental, TopicId } from "@/services/coding/types"

export const fundamentalsList: Fundamental[] = [
  {
    id: "variables",
    title: "Variables & Data Types",
    description: "Learn how to store and manipulate data",
  },
  {
    id: "operators",
    title: "Operators",
    description: "Mathematical and logical operations",
  },
  {
    id: "conditionals",
    title: "Conditional Statements",
    description: "Make decisions with if/else and switch",
  },
  {
    id: "loops",
    title: "Loops",
    description: "Repeat code with for, while, and do-while loops",
  },
  {
    id: "functions",
    title: "Functions / Methods",
    description: "Organize code into reusable blocks",
  },
  {
    id: "arrays",
    title: "Arrays / Lists",
    description: "Store multiple values in collections",
  },
  {
    id: "strings",
    title: "Strings",
    description: "Work with text data",
  },
  {
    id: "recursion",
    title: "Recursion",
    description: "Functions that call themselves",
  },
  {
    id: "problem-solving",
    title: "Basic Problem Solving",
    description: "Apply concepts to solve problems",
  },
  {
    id: "input-output",
    title: "Input & Output",
    description: "Read input and display output",
  },
]

export function getFundamentalById(id: TopicId): Fundamental | undefined {
  return fundamentalsList.find((f) => f.id === id)
}

