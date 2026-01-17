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


      {/* Navigation Links */}
      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {languageId === "c" ? (
            <Link href="/coding/c">
              <div className="border rounded-lg p-6 bg-card text-center hover:border-primary hover:shadow-md transition-all cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">C Tutorial</h3>
                <p className="text-muted-foreground text-sm">
                  Complete C programming tutorial with all topics
                </p>
              </div>
            </Link>
          ) : (
            <Link href={`/coding/${languageId}/fundamentals`}>
              <div className="border rounded-lg p-6 bg-card text-center hover:border-primary hover:shadow-md transition-all cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">Fundamentals</h3>
                <p className="text-muted-foreground text-sm">
                  Explore comprehensive fundamentals with interactive practice questions
                </p>
              </div>
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}

