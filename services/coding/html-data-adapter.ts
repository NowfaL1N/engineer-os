/**
 * HTML Data Adapter
 * 
 * Converts HTML coding data structure to match the Topic interface
 * used by the coding practice service.
 */

import { htmlCoding } from "@/data/coding/html"
import type { Topic, PracticeQuestion, SyntaxExample, ConceptExplanation } from "./types"

/**
 * Convert HTML topic format to standard Topic format
 */
function convertHtmlTopicToTopic(htmlTopic: any): Topic {
  // Convert explanation to concept format
  const concept: ConceptExplanation = {
    what: htmlTopic.explanation.split(".")[0] + ".",
    why: htmlTopic.explanation.includes("important") 
      ? htmlTopic.explanation 
      : "This concept is fundamental to HTML development.",
    explanation: htmlTopic.explanation,
  }

  // Convert syntax string to syntaxExamples array
  const syntaxExamples: SyntaxExample[] = [
    {
      title: "Syntax",
      description: "HTML syntax for this concept",
      code: htmlTopic.syntax || "<!-- Syntax example -->",
    },
    ...(htmlTopic.examples || []).map((ex: any) => ({
      title: ex.title || "Example",
      description: ex.description || "",
      code: ex.code || "",
    })),
  ]

  // Convert practice questions format
  const practiceQuestions: PracticeQuestion[] = (htmlTopic.practiceQuestions || []).map((q: any, index: number) => {
    // Map question types
    let type: "fill-blank" | "predict-output" | "fix-error" | "complete-function" = "fill-blank"
    if (q.type === "fill") type = "fill-blank"
    else if (q.type === "complete") type = "complete-function"
    else if (q.type === "predict") type = "predict-output"
    else if (q.type === "fix") type = "fix-error"

    return {
      id: `${htmlTopic.id}-q${index + 1}`,
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
    id: htmlTopic.id as any, // HTML topics use string IDs
    title: htmlTopic.title,
    concept,
    syntaxExamples,
    practiceQuestions,
  }
}

/**
 * Get all HTML topics as a flat record
 */
export function getHtmlTopics(): Record<string, Topic> {
  const topics: Record<string, Topic> = {}

  htmlCoding.categories.forEach((category) => {
    category.topics.forEach((htmlTopic: any) => {
      topics[htmlTopic.id] = convertHtmlTopicToTopic(htmlTopic)
    })
  })

  return topics
}

/**
 * Get HTML topics by category
 */
export function getHtmlTopicsByCategory() {
  return htmlCoding.categories.map((category) => ({
    id: category.id,
    title: category.title,
    topics: category.topics.map((htmlTopic: any) => convertHtmlTopicToTopic(htmlTopic)),
  }))
}

