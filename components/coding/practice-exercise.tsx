"use client"

/**
 * Practice Exercise Component
 * 
 * Displays incomplete code with a textarea for user input.
 * Validates user input against expected answer (simple string matching).
 * 
 * Architecture: Frontend-only validation, no backend calls
 */

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { PracticeExercise } from "@/services/coding.service"

interface PracticeExerciseProps {
  exercise: PracticeExercise
}

export function PracticeExerciseComponent({ exercise }: PracticeExerciseProps) {
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)

  /**
   * Validate user answer against expected answer
   * Simple string matching (case-insensitive, trimmed)
   */
  const validateAnswer = () => {
    const normalizedUser = userAnswer.trim().toLowerCase()
    const normalizedExpected = exercise.expectedAnswer.trim().toLowerCase()

    const correct = normalizedUser === normalizedExpected
    setIsCorrect(correct)
  }

  /**
   * Reset the exercise
   */
  const resetExercise = () => {
    setUserAnswer("")
    setIsCorrect(null)
    setShowHint(false)
  }

  /**
   * Replace placeholder in incomplete code with user input
   */
  const displayCode = () => {
    return exercise.incompleteCode.replace("___", userAnswer || exercise.placeholder)
  }

  return (
    <div className="space-y-4 border rounded-lg p-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">{exercise.title}</h3>
        <p className="text-muted-foreground mb-4">{exercise.description}</p>
      </div>

      {/* Incomplete Code Display */}
      <div>
        <label className="text-sm font-medium mb-2 block">Incomplete Code:</label>
        <div className="rounded-lg bg-muted p-4 overflow-x-auto">
          <pre className="font-mono text-sm whitespace-pre-wrap">
            <code>{displayCode()}</code>
          </pre>
        </div>
      </div>

      {/* User Input Area */}
      <div>
        <label className="text-sm font-medium mb-2 block">
          Complete the code (fill in the blank):
        </label>
        <textarea
          value={userAnswer}
          onChange={(e) => {
            setUserAnswer(e.target.value)
            setIsCorrect(null) // Reset validation on input change
          }}
          placeholder={exercise.placeholder}
          className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 font-mono text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      {/* Hint Section */}
      {exercise.hint && (
        <div>
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-sm text-muted-foreground hover:text-foreground underline"
          >
            {showHint ? "Hide Hint" : "Show Hint"}
          </button>
          {showHint && (
            <div className="mt-2 p-3 bg-muted rounded-md text-sm">
              💡 <strong>Hint:</strong> {exercise.hint}
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button onClick={validateAnswer} disabled={!userAnswer.trim()}>
          Check Answer
        </Button>
        <Button variant="outline" onClick={resetExercise}>
          Reset
        </Button>
      </div>

      {/* Validation Result */}
      {isCorrect !== null && (
        <div
          className={`p-4 rounded-md ${
            isCorrect
              ? "bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800"
              : "bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800"
          }`}
        >
          {isCorrect ? (
            <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <span className="text-lg">✓</span>
              <span className="font-medium">Correct! Well done!</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-red-700 dark:text-red-300">
              <span className="text-lg">✗</span>
              <span className="font-medium">Try again. Check your answer carefully.</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

