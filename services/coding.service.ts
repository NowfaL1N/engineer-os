/**
 * Coding Practice Service
 * 
 * Main service for accessing language data and fundamentals.
 * Imports data from structured data files.
 */

import type { Language, LanguageId, Topic, TopicId } from "./coding/types"
import { fundamentalsList } from "@/data/coding/fundamentals"
import { pythonTopics } from "@/data/coding/python"
import { javascriptTopics } from "@/data/coding/javascript"
import { javaTopics } from "@/data/coding/java"

// Language metadata (basic info)
const languagesMetadata: Record<LanguageId, Omit<Language, "fundamentals">> = {
  python: {
    id: "python",
    name: "Python",
    description: "High-level, interpreted language known for simplicity and readability",
    introduction:
      "Python is a beginner-friendly language with clean, readable syntax. It's widely used in web development, data science, artificial intelligence, and automation.",
    useCases: ["Web development", "Data science", "Machine learning", "Automation"],
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    description: "The language of the web, used for interactive web pages",
    introduction:
      "JavaScript is the programming language of the web. It runs in browsers and enables interactive websites. With Node.js, JavaScript can also run on servers.",
    useCases: ["Web development", "Frontend frameworks", "Backend (Node.js)", "Mobile apps"],
  },
  java: {
    id: "java",
    name: "Java",
    description: "Object-oriented language, platform-independent and widely used in enterprise",
    introduction:
      "Java is a popular object-oriented language known for 'write once, run anywhere'. It's used in enterprise applications, Android development, and large-scale systems.",
    useCases: ["Enterprise applications", "Android development", "Web applications", "Big data"],
  },
  c: {
    id: "c",
    name: "C",
    description: "A general-purpose programming language, foundational for system programming",
    introduction:
      "C is a powerful, low-level programming language developed in the 1970s. It's widely used for system programming, embedded systems, and building operating systems.",
    useCases: ["System programming", "Embedded systems", "Operating systems", "Game development"],
  },
  cpp: {
    id: "cpp",
    name: "C++",
    description: "Object-oriented extension of C, used for high-performance applications",
    introduction:
      "C++ is an extension of C with object-oriented features. It's used for game engines, desktop applications, and performance-critical systems.",
    useCases: ["Game development", "Desktop applications", "High-performance computing", "System software"],
  },
  html: {
    id: "html",
    name: "HTML",
    description: "Markup language for creating web page structure",
    introduction:
      "HTML (HyperText Markup Language) is the foundation of web pages. It defines the structure and content of websites.",
    useCases: ["Web page structure", "Content organization", "Form creation", "Semantic markup"],
  },
  css: {
    id: "css",
    name: "CSS",
    description: "Stylesheet language for designing and styling web pages",
    introduction:
      "CSS (Cascading Style Sheets) controls how HTML elements look. It's used to add colors, fonts, layouts, and animations to web pages.",
    useCases: ["Web page styling", "Responsive design", "Animations", "Layout control"],
  },
  sql: {
    id: "sql",
    name: "SQL",
    description: "Structured Query Language for managing and querying databases",
    introduction:
      "SQL (Structured Query Language) is used to communicate with databases. It's essential for storing, retrieving, and manipulating data.",
    useCases: ["Database queries", "Data analysis", "Backend development", "Business intelligence"],
  },
}

// Topic data mapping
const topicsData: Record<LanguageId, Record<string, Topic> | null> = {
  python: pythonTopics,
  javascript: javascriptTopics,
  java: javaTopics,
  c: null, // TODO: Add C topics
  cpp: null, // TODO: Add C++ topics
  html: null,
  css: null,
  sql: null,
}

/**
 * Get all available languages
 */
export function getAllLanguages(): Language[] {
  return Object.values(languagesMetadata).map((meta) => ({
    ...meta,
    fundamentals: fundamentalsList,
  }))
}

/**
 * Get language by ID
 */
export function getLanguageById(id: LanguageId): Language | undefined {
  const meta = languagesMetadata[id]
  if (!meta) return undefined

  return {
    ...meta,
    fundamentals: fundamentalsList,
  }
}

/**
 * Check if language ID is valid
 */
export function isValidLanguageId(id: string): id is LanguageId {
  return id in languagesMetadata
}

/**
 * Get topic for a language
 */
export function getTopic(languageId: LanguageId, topicId: TopicId): Topic | undefined {
  const topics = topicsData[languageId]
  if (!topics) return undefined

  return topics[topicId]
}

/**
 * Get all topics for a language
 */
export function getTopicsForLanguage(languageId: LanguageId): Topic[] {
  const topics = topicsData[languageId]
  if (!topics) return []

  return Object.values(topics)
}

/**
 * Check if topic ID is valid
 * 
 * For C language, accepts any topic ID since C has many specific topics
 * not in the standard fundamentals list.
 * For other languages, checks against fundamentals list.
 */
export function isValidTopicId(id: string, languageId?: LanguageId): boolean {
  // C language has many specific topics not in fundamentals list
  if (languageId === "c") {
    return true // Accept any topic ID for C
  }
  // For other languages, check against fundamentals list
  return fundamentalsList.some((f) => f.id === id)
}

/**
 * Get all fundamentals
 */
export function getAllFundamentals() {
  return fundamentalsList
}

// Re-export types
export type {
  Language,
  LanguageId,
  Topic,
  TopicId,
  PracticeQuestion,
  QuestionType,
  ConceptExplanation,
  SyntaxExample,
} from "./coding/types"
