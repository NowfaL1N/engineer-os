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
import Link from "next/link"
import { Button } from "@/components/ui/button"

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


      {/* Fundamentals Link */}
      <section className="mt-12">
        <div className="border rounded-lg p-8 bg-card text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Learn?</h2>
          <p className="text-muted-foreground mb-6">
            Explore comprehensive fundamentals with interactive practice questions
          </p>
          <Link href={`/coding/${languageId}/fundamentals`}>
            <Button size="lg">View All Fundamentals</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

