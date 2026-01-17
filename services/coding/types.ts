/**
 * Coding Practice Types
 * 
 * Core type definitions for the coding practice module.
 * Supports fundamentals, topics, and practice questions.
 */

export type LanguageId =
  | "c"
  | "cpp"
  | "python"
  | "java"
  | "javascript"
  | "html"
  | "css"
  | "sql"

export type TopicId =
  | "variables"
  | "operators"
  | "conditionals"
  | "loops"
  | "functions"
  | "arrays"
  | "strings"
  | "recursion"
  | "problem-solving"
  | "input-output"

export interface Language {
  id: LanguageId
  name: string
  description: string
  introduction: string
  useCases: string[]
  fundamentals: Fundamental[]
}

export interface Fundamental {
  id: TopicId
  title: string
  description: string
  icon?: string
}

export interface Topic {
  id: TopicId
  title: string
  concept: ConceptExplanation
  syntaxExamples: SyntaxExample[]
  practiceQuestions: PracticeQuestion[]
}

export interface ConceptExplanation {
  what: string
  why: string
  explanation: string
  languageSpecificNotes?: string
}

export interface SyntaxExample {
  title: string
  description: string
  code: string
}

export type QuestionType =
  | "fill-blank"
  | "predict-output"
  | "fix-error"
  | "complete-function"

export interface PracticeQuestion {
  id: string
  type: QuestionType
  title: string
  description: string
  incompleteCode: string
  placeholder?: string
  expectedAnswer: string
  solution: string
  explanation?: string
}

