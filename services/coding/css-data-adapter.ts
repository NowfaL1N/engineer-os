/**
 * CSS Data Adapter
 * 
 * Converts CSS coding data structure to match the Topic interface
 * used by the coding practice service.
 */

import { cssCoding } from "@/data/coding/css"
import type { Topic, PracticeQuestion, SyntaxExample, ConceptExplanation } from "./types"

/**
 * Convert CSS topic format to standard Topic format
 */
function convertCSSTopicToTopic(cssTopic: any): Topic {
  // Convert explanation to concept format
  const concept: ConceptExplanation = {
    what: cssTopic.explanation.split(".")[0] + ".",
    why: cssTopic.explanation.includes("important") 
      ? cssTopic.explanation 
      : "This concept is fundamental to CSS styling.",
    explanation: cssTopic.explanation,
  }

  // Convert syntax string to syntaxExamples array
  const syntaxExamples: SyntaxExample[] = [
    {
      title: "Syntax",
      description: "CSS syntax for this concept",
      code: cssTopic.syntax || "/* Syntax example */",
    },
    ...(cssTopic.examples || []).map((ex: any) => ({
      title: ex.title || "Example",
      description: ex.description || "",
      code: ex.code || "",
    })),
  ]

  // Convert practice questions format
  const practiceQuestions: PracticeQuestion[] = (cssTopic.practiceQuestions || []).map((q: any, index: number) => {
    // Map question types
    let type: "fill-blank" | "predict-output" | "fix-error" | "complete-function" = "fill-blank"
    if (q.type === "fill") type = "fill-blank"
    else if (q.type === "complete") type = "complete-function"
    else if (q.type === "predict") type = "predict-output"
    else if (q.type === "fix") type = "fix-error"

    return {
      id: `${cssTopic.id}-q${index + 1}`,
      type,
      title: q.question || `Question ${index + 1}`,
      description: q.question || "",
      incompleteCode: q.starterCode || "",
      placeholder: q.answer || "",
      expectedAnswer: q.answer || "",
      solution: q.answer || "",
      explanation: `The answer is: ${q.answer}`,
    }
  })

  return {
    id: cssTopic.id as any, // CSS topics use string IDs
    title: cssTopic.title,
    concept,
    syntaxExamples,
    practiceQuestions,
  }
}

/**
 * Get all CSS topics as a flat record
 */
export function getCSSTopics(): Record<string, Topic> {
  const topics: Record<string, Topic> = {}

  cssCoding.categories.forEach((category) => {
    category.topics.forEach((cssTopic) => {
      topics[cssTopic.id] = convertCSSTopicToTopic(cssTopic)
    })
  })

  return topics
}

/**
 * Get CSS topics by category
 */
export function getCSSTopicsByCategory() {
  return cssCoding.categories.map((category) => ({
    id: category.id,
    title: category.title,
    topics: category.topics.map((cssTopic) => convertCSSTopicToTopic(cssTopic)),
  }))
}

