/**
 * JavaScript Data Adapter
 * 
 * Converts JavaScript coding data structure to match the Topic interface
 * used by the coding practice service.
 */

import { javascriptCoding } from "@/data/coding/javascript"
import type { Topic, PracticeQuestion, SyntaxExample, ConceptExplanation } from "./types"

/**
 * Convert JavaScript topic format to standard Topic format
 */
function convertJavaScriptTopicToTopic(javascriptTopic: any): Topic {
  // Convert explanation to concept format
  const concept: ConceptExplanation = {
    what: javascriptTopic.explanation.split(".")[0] + ".",
    why: javascriptTopic.explanation.includes("important") 
      ? javascriptTopic.explanation 
      : "This concept is fundamental to JavaScript programming.",
    explanation: javascriptTopic.explanation,
  }

  // Convert syntax string to syntaxExamples array
  const syntaxExamples: SyntaxExample[] = [
    {
      title: "Syntax",
      description: "JavaScript syntax for this concept",
      code: javascriptTopic.syntax || "// Syntax example",
    },
    ...(javascriptTopic.examples || []).map((ex: any) => ({
      title: ex.title || "Example",
      description: ex.description || "",
      code: ex.code || "",
    })),
  ]

  // Convert practice questions format
  const practiceQuestions: PracticeQuestion[] = (javascriptTopic.practiceQuestions || []).map((q: any, index: number) => {
    // Map question types
    let type: "fill-blank" | "predict-output" | "fix-error" | "complete-function" = "fill-blank"
    if (q.type === "fill") type = "fill-blank"
    else if (q.type === "complete") type = "complete-function"
    else if (q.type === "predict") type = "predict-output"
    else if (q.type === "fix") type = "fix-error"

    return {
      id: `${javascriptTopic.id}-q${index + 1}`,
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
    id: javascriptTopic.id as any, // JavaScript topics use string IDs
    title: javascriptTopic.title,
    concept,
    syntaxExamples,
    practiceQuestions,
  }
}

/**
 * Get all JavaScript topics as a flat record
 */
export function getJavaScriptTopics(): Record<string, Topic> {
  const topics: Record<string, Topic> = {}

  javascriptCoding.categories.forEach((category) => {
    category.topics.forEach((javascriptTopic: any) => {
      topics[javascriptTopic.id] = convertJavaScriptTopicToTopic(javascriptTopic)
    })
  })

  return topics
}

/**
 * Get JavaScript topics by category
 */
export function getJavaScriptTopicsByCategory() {
  return javascriptCoding.categories.map((category) => ({
    id: category.id,
    title: category.title,
    topics: category.topics.map((javascriptTopic: any) => convertJavaScriptTopicToTopic(javascriptTopic)),
  }))
}

