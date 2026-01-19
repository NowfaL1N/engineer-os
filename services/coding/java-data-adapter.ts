/**
 * Java Data Adapter
 * 
 * Converts Java coding data structure to match the Topic interface
 * used by the coding practice service.
 */

import { javaCoding } from "@/data/coding/java"
import type { Topic, PracticeQuestion, SyntaxExample, ConceptExplanation } from "./types"

/**
 * Convert Java topic format to standard Topic format
 */
function convertJavaTopicToTopic(javaTopic: any): Topic {
  // Convert explanation to concept format
  const concept: ConceptExplanation = {
    what: javaTopic.explanation.split(".")[0] + ".",
    why: javaTopic.explanation.includes("important") 
      ? javaTopic.explanation 
      : "This concept is fundamental to Java programming.",
    explanation: javaTopic.explanation,
  }

  // Convert syntax string to syntaxExamples array
  const syntaxExamples: SyntaxExample[] = [
    {
      title: "Syntax",
      description: "Java syntax for this concept",
      code: javaTopic.syntax || "// Syntax example",
    },
    ...(javaTopic.examples || []).map((ex: any) => ({
      title: ex.title || "Example",
      description: ex.description || "",
      code: ex.code || "",
    })),
  ]

  // Convert practice questions format
  const practiceQuestions: PracticeQuestion[] = (javaTopic.practiceQuestions || []).map((q: any, index: number) => {
    // Map question types
    let type: "fill-blank" | "predict-output" | "fix-error" | "complete-function" = "fill-blank"
    if (q.type === "fill") type = "fill-blank"
    else if (q.type === "complete") type = "complete-function"
    else if (q.type === "predict") type = "predict-output"
    else if (q.type === "fix") type = "fix-error"

    return {
      id: `${javaTopic.id}-q${index + 1}`,
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
    id: javaTopic.id as any, // Java topics use string IDs
    title: javaTopic.title,
    concept,
    syntaxExamples,
    practiceQuestions,
  }
}

/**
 * Get all Java topics as a flat record
 */
export function getJavaTopics(): Record<string, Topic> {
  const topics: Record<string, Topic> = {}

  javaCoding.categories.forEach((category) => {
    category.topics.forEach((javaTopic: any) => {
      topics[javaTopic.id] = convertJavaTopicToTopic(javaTopic)
    })
  })

  return topics
}

/**
 * Get Java topics by category
 */
export function getJavaTopicsByCategory() {
  return javaCoding.categories.map((category) => ({
    id: category.id,
    title: category.title,
    topics: category.topics.map((javaTopic: any) => convertJavaTopicToTopic(javaTopic)),
  }))
}

