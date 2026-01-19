/**
 * C++ Data Adapter
 * 
 * Converts C++ coding data structure to match the Topic interface
 * used by the coding practice service.
 */

import { cppCoding } from "@/data/coding/cpp"
import type { Topic, PracticeQuestion, SyntaxExample, ConceptExplanation } from "./types"

/**
 * Convert C++ topic format to standard Topic format
 */
function convertCppTopicToTopic(cppTopic: any): Topic {
  // Convert explanation to concept format
  const concept: ConceptExplanation = {
    what: cppTopic.explanation.split(".")[0] + ".",
    why: cppTopic.explanation.includes("important") 
      ? cppTopic.explanation 
      : "This concept is fundamental to C++ programming.",
    explanation: cppTopic.explanation,
  }

  // Convert syntax string to syntaxExamples array
  const syntaxExamples: SyntaxExample[] = [
    {
      title: "Syntax",
      description: "C++ syntax for this concept",
      code: cppTopic.syntax || "// Syntax example",
    },
    ...(cppTopic.examples || []).map((ex: any) => ({
      title: ex.title || "Example",
      description: ex.description || "",
      code: ex.code || "",
    })),
  ]

  // Convert practice questions format
  const practiceQuestions: PracticeQuestion[] = (cppTopic.practiceQuestions || []).map((q: any, index: number) => {
    // Map question types
    let type: "fill-blank" | "predict-output" | "fix-error" | "complete-function" = "fill-blank"
    if (q.type === "fill") type = "fill-blank"
    else if (q.type === "complete") type = "complete-function"
    else if (q.type === "predict") type = "predict-output"
    else if (q.type === "fix") type = "fix-error"

    return {
      id: `${cppTopic.id}-q${index + 1}`,
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
    id: cppTopic.id as any, // C++ topics use string IDs
    title: cppTopic.title,
    concept,
    syntaxExamples,
    practiceQuestions,
  }
}

/**
 * Get all C++ topics as a flat record
 */
export function getCppTopics(): Record<string, Topic> {
  const topics: Record<string, Topic> = {}

  cppCoding.categories.forEach((category) => {
    category.topics.forEach((cppTopic: any) => {
      topics[cppTopic.id] = convertCppTopicToTopic(cppTopic)
    })
  })

  return topics
}

/**
 * Get C++ topics by category
 */
export function getCppTopicsByCategory() {
  return cppCoding.categories.map((category) => ({
    id: category.id,
    title: category.title,
    topics: category.topics.map((cppTopic: any) => convertCppTopicToTopic(cppTopic)),
  }))
}

