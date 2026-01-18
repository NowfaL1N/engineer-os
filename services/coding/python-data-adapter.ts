/**
 * Python Data Adapter
 * 
 * Converts Python coding data structure to match the Topic interface
 * used by the coding practice service.
 */

import { pythonCoding } from "@/data/coding/python"
import type { Topic, PracticeQuestion, SyntaxExample, ConceptExplanation } from "./types"

/**
 * Convert Python topic format to standard Topic format
 */
function convertPythonTopicToTopic(pythonTopic: any): Topic {
  // Convert explanation to concept format
  const concept: ConceptExplanation = {
    what: pythonTopic.explanation.split(".")[0] + ".",
    why: pythonTopic.explanation.includes("important") 
      ? pythonTopic.explanation 
      : "This concept is fundamental to Python programming.",
    explanation: pythonTopic.explanation,
  }

  // Convert syntax string to syntaxExamples array
  const syntaxExamples: SyntaxExample[] = [
    {
      title: "Syntax",
      description: "Python syntax for this concept",
      code: pythonTopic.syntax || "# Syntax example",
    },
    ...(pythonTopic.examples || []).map((ex: any) => ({
      title: ex.title || "Example",
      description: ex.description || "",
      code: ex.code || "",
    })),
  ]

  // Convert practice questions format
  const practiceQuestions: PracticeQuestion[] = (pythonTopic.practiceQuestions || []).map((q: any, index: number) => {
    // Map question types
    let type: "fill-blank" | "predict-output" | "fix-error" | "complete-function" = "fill-blank"
    if (q.type === "fill") type = "fill-blank"
    else if (q.type === "complete") type = "complete-function"
    else if (q.type === "predict") type = "predict-output"
    else if (q.type === "fix") type = "fix-error"

    return {
      id: `${pythonTopic.id}-q${index + 1}`,
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
    id: pythonTopic.id as any, // Python topics use string IDs
    title: pythonTopic.title,
    concept,
    syntaxExamples,
    practiceQuestions,
  }
}

/**
 * Get all Python topics as a flat record
 */
export function getPythonTopics(): Record<string, Topic> {
  const topics: Record<string, Topic> = {}

  pythonCoding.categories.forEach((category) => {
    category.topics.forEach((pythonTopic) => {
      topics[pythonTopic.id] = convertPythonTopicToTopic(pythonTopic)
    })
  })

  return topics
}

/**
 * Get Python topics by category
 */
export function getPythonTopicsByCategory() {
  return pythonCoding.categories.map((category) => ({
    id: category.id,
    title: category.title,
    topics: category.topics.map((pythonTopic) => convertPythonTopicToTopic(pythonTopic)),
  }))
}

