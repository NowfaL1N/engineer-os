/**
 * Language Detail Page
 * 
 * Displays comprehensive information about a programming language:
 * - Introduction
 * - Syntax Basics
 * - Code Examples
 * - Practice Exercises
 */

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getLanguageContent, type LanguageId } from "@/services/coding.service"
import { CodeBlock } from "@/components/coding/code-block"
import { PracticeExerciseComponent } from "@/components/coding/practice-exercise"
import { Button } from "@/components/ui/button"

interface LanguagePageProps {
  params: {
    language: string
  }
}

/**
 * Generate metadata for language detail pages
 */
export async function generateMetadata({
  params,
}: LanguagePageProps): Promise<Metadata> {
  const languageId = params.language as LanguageId
  const content = getLanguageContent(languageId)

  if (!content) {
    return {
      title: "Language Not Found",
    }
  }

  return {
    title: `${content.language.name} Practice | Coding Practice`,
    description: `Learn ${content.language.name} programming with syntax basics, examples, and interactive practice exercises.`,
  }
}

export default function LanguageDetailPage({ params }: LanguagePageProps) {
  const languageId = params.language as LanguageId
  const content = getLanguageContent(languageId)

  if (!content) {
    notFound()
  }

  const { language, syntaxBasics, codeExamples, practiceExercises } = content

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <Link href="/coding">
          <Button variant="ghost" className="mb-4">
            ← Back to Languages
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-4">{language.name}</h1>
      </div>

      {/* Introduction Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg mb-4">{language.introduction}</p>
          <div>
            <h3 className="text-xl font-semibold mb-2">Common Use Cases:</h3>
            <ul className="list-disc list-inside space-y-1">
              {language.useCases.map((useCase, index) => (
                <li key={index}>{useCase}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Syntax Basics Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Syntax</h2>
        <div className="space-y-6">
          {syntaxBasics.map((syntax, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium mb-2">{syntax.title}</h3>
              <p className="text-muted-foreground mb-3">{syntax.description}</p>
              <CodeBlock code={syntax.code} />
            </div>
          ))}
        </div>
      </section>

      {/* Code Examples Section */}
      {codeExamples.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Code Examples</h2>
          <div className="space-y-6">
            {codeExamples.map((example, index) => (
              <div key={index}>
                <h3 className="text-xl font-medium mb-2">{example.title}</h3>
                <p className="text-muted-foreground mb-3">{example.description}</p>
                <CodeBlock code={example.code} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Practice Exercises</h2>
        <p className="text-muted-foreground mb-6">
          Complete the incomplete code by filling in the blanks. Click "Check Answer" to
          validate your solution.
        </p>
        <div className="space-y-8">
          {practiceExercises.map((exercise) => (
            <PracticeExerciseComponent key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </section>
    </div>
  )
}

