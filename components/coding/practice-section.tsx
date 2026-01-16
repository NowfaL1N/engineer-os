/**
 * Practice Section Component
 * 
 * Interactive practice exercise with incomplete code.
 * Users can fill in the missing parts and check their answer.
 * 
 * Note: This is MVP - uses simple string matching for validation.
 */

"use client"

import { useState } from "react"
import { CodeBlock } from "./code-block"
import { Button } from "@/components/ui/button"

interface PracticeSectionProps {
  id: string
  title: string
  description: string
  incompleteCode: string
  placeholder: string
  expectedOutput: string
  solution: string
}

export function PracticeSection({
  title,
  description,
  incompleteCode,
  placeholder,
  expectedOutput,
  solution,
}: PracticeSectionProps) {
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

    // Normalize input: remove extra whitespace and compare
    const normalizedInput = userInput.trim().toLowerCase()
    const normalizedSolution = solution.trim().toLowerCase()
    const normalizedPlaceholder = placeholder.trim().toLowerCase()

    // Check if user input matches solution or placeholder pattern
    if (
      normalizedInput === normalizedSolution ||
      normalizedInput === normalizedPlaceholder
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
  const displayCode = incompleteCode.replace(/___|TODO/g, userInput || placeholder)

  return (
    <div className="border rounded-lg p-6 bg-card">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>

      {/* Incomplete Code Display */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Complete the code:</p>
        <CodeBlock
          code={displayCode}
          className={result === "correct" ? "border-2 border-green-500" : ""}
        />
      </div>

      {/* User Input Area */}
      <div className="mb-4">
        <label
          htmlFor={`input-${title}`}
          className="block text-sm font-medium mb-2"
        >
          Your answer:
        </label>
        <input
          id={`input-${title}`}
          type="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value)
            setResult(null)
          }}
          placeholder={placeholder}
          className="w-full px-4 py-2 border rounded-md bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          disabled={result === "correct"}
        />
        <p className="text-xs text-muted-foreground mt-1">
          Replace the placeholder (___) with your answer
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mb-4">
        <Button onClick={handleCheck} disabled={!userInput.trim() || result === "correct"}>
          Check Answer
        </Button>
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
        <Button
          variant="ghost"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? "Hide" : "Show"} Solution
        </Button>
      </div>

      {/* Result Feedback */}
      {result === "correct" && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
          <p className="text-green-800 dark:text-green-200 font-medium">
            ✓ Correct! Well done!
          </p>
          <p className="text-sm text-green-700 dark:text-green-300 mt-1">
            Expected output: {expectedOutput}
          </p>
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
        </div>
      )}
    </div>
  )
}

