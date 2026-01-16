/**
 * Coding Practice - Language Detail Page
 * 
 * Displays language introduction, syntax, examples, and practice exercises.
 * Dynamic route: /coding/[language]
 */

import { notFound } from "next/navigation"
import {
  getLanguageById,
  isValidLanguageId,
  type LanguageId,
} from "@/services/coding.service"
import { LanguageIntroduction } from "@/components/coding/language-introduction"
import { SyntaxSection } from "@/components/coding/syntax-section"
import { CodeExample } from "@/components/coding/code-example"
import { PracticeSection } from "@/components/coding/practice-section"

interface LanguagePageProps {
  params: {
    language: string
  }
}

export async function generateMetadata({ params }: LanguagePageProps) {
  const languageId = params.language as LanguageId
  const language = getLanguageById(languageId)

  if (!language) {
    return {
      title: "Language Not Found",
    }
  }

  return {
    title: `${language.name} - Coding Practice`,
    description: language.description,
  }
}

export default function LanguageDetailPage({ params }: LanguagePageProps) {
  const languageId = params.language as LanguageId

  if (!isValidLanguageId(languageId)) {
    notFound()
  }

  const language = getLanguageById(languageId)

  if (!language) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{language.name}</h1>
        <p className="text-muted-foreground text-lg">{language.description}</p>
      </div>

      {/* Introduction Section */}
      <LanguageIntroduction
        introduction={language.introduction}
        useCases={language.useCases}
      />

      {/* Syntax Basics Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Basic Syntax</h2>
        <div className="space-y-8">
          {language.syntax.map((syntax, index) => (
            <SyntaxSection key={index} {...syntax} />
          ))}
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Code Examples</h2>
        <div className="space-y-8">
          {language.examples.map((example, index) => (
            <CodeExample key={index} {...example} />
          ))}
        </div>
      </section>

      {/* Practice Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Practice Exercises</h2>
        <div className="space-y-8">
          {language.practices.map((practice) => (
            <PracticeSection key={practice.id} {...practice} />
          ))}
        </div>
      </section>
    </div>
  )
}

