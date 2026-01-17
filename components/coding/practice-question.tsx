/**
 * Practice Question Component
 * 
 * Interactive practice question with incomplete code.
 * Supports multiple question types: fill-blank, predict-output, fix-error, complete-function.
 */

"use client"

import { useState } from "react"
import { CodeBlock } from "./code-block"
import { Button } from "@/components/ui/button"
import type { PracticeQuestion as PracticeQuestionType, QuestionType } from "@/services/coding/types"

interface PracticeQuestionProps extends PracticeQuestionType {}

export function PracticeQuestion({
  id,
  type,
  title,
  description,
  incompleteCode,
  placeholder,
  expectedAnswer,
  solution,
  explanation,
}: PracticeQuestionProps) {
  const [userInput, setUserInput] = useState("")
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null)
  const [showSolution, setShowSolution] = useState(false)

  /**
   * Simple validation using string matching
   * This is a placeholder - can be enhanced later with proper parsing
   */
  const handleCheck = () => {
    if (!userInput.trim()) {
      return
    }

    /**
     * Normalize string by:
     * 1. Trimming whitespace
     * 2. Removing surrounding quotes (single or double) if present
     * 3. Converting to lowercase for comparison
     */
    const normalizeString = (str: string): string => {
      let normalized = str.trim()
      // Remove surrounding quotes (handles both "..." and '...')
      if (
        (normalized.startsWith('"') && normalized.endsWith('"')) ||
        (normalized.startsWith("'") && normalized.endsWith("'"))
      ) {
        normalized = normalized.slice(1, -1)
      }
      return normalized.toLowerCase()
    }

    const normalizedInput = normalizeString(userInput)
    const normalizedExpected = normalizeString(expectedAnswer)
    const normalizedPlaceholder = placeholder ? normalizeString(placeholder) : ""

    // Check if user input matches expected answer or placeholder pattern
    if (
      normalizedInput === normalizedExpected ||
      (normalizedPlaceholder && normalizedInput === normalizedPlaceholder)
    ) {
      setResult("correct")
    } else {
      setResult("incorrect")
    }
  }

  const handleReset = () => {
    setUserInput("")
    setResult(null)
    setShowSolution(false)
  }

  // Replace placeholder in incomplete code with user input for display
  const displayCode = incompleteCode.replace(/___|TODO/g, userInput || placeholder || "___")

  const getQuestionTypeLabel = (type: QuestionType): string => {
    switch (type) {
      case "fill-blank":
        return "Fill in the Blank"
      case "predict-output":
        return "Predict Output"
      case "fix-error":
        return "Fix the Error"
      case "complete-function":
        return "Complete the Function"
      default:
        return "Practice Question"
    }
  }

  return (
    <div className="border rounded-lg p-6 bg-card">
      {/* Question Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-muted rounded">
            {getQuestionTypeLabel(type)}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Incomplete Code Display */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Code:</p>
        <CodeBlock
          code={displayCode}
          className={result === "correct" ? "border-2 border-green-500" : ""}
        />
      </div>

      {/* User Input Area (not for predict-output type) */}
      {type !== "predict-output" && (
        <div className="mb-4">
          <label htmlFor={`input-${id}`} className="block text-sm font-medium mb-2">
            Your answer:
          </label>
          <input
            id={`input-${id}`}
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value)
              setResult(null)
            }}
            placeholder={placeholder || "Enter your answer"}
            className="w-full px-4 py-2 border rounded-md bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            disabled={result === "correct"}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Replace the placeholder (___) with your answer
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {type !== "predict-output" && (
          <Button onClick={handleCheck} disabled={!userInput.trim() || result === "correct"}>
            Check Answer
          </Button>
        )}
        {type === "predict-output" && (
          <Button onClick={() => setShowSolution(!showSolution)}>
            {showSolution ? "Hide" : "Show"} Answer
          </Button>
        )}
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="ghost" onClick={() => setShowSolution(!showSolution)}>
          {showSolution ? "Hide" : "Show"} Solution
        </Button>
      </div>

      {/* Result Feedback */}
      {result === "correct" && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
          <p className="text-green-800 dark:text-green-200 font-medium">
            ✓ Correct! Well done!
          </p>
          {explanation && (
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">{explanation}</p>
          )}
        </div>
      )}

      {result === "incorrect" && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-red-800 dark:text-red-200 font-medium">
            ✗ Try again! Check your answer carefully.
          </p>
        </div>
      )}

      {/* Solution Display */}
      {showSolution && (
        <div className="mt-4 p-4 bg-muted rounded-md">
          <p className="text-sm font-medium mb-2">Solution:</p>
          <CodeBlock code={solution} />
          {type === "predict-output" && (
            <p className="text-sm text-muted-foreground mt-2">
              Expected output: {expectedAnswer}
            </p>
          )}
          {explanation && (
            <p className="text-sm text-muted-foreground mt-2">{explanation}</p>
          )}
        </div>
      )}
    </div>
  )
}

