/**
 * Coding Practice - Fundamentals List Page
 * 
 * Displays all fundamentals/topics for a specific language.
 * Route: /coding/[language]/fundamentals
 */

import { notFound } from "next/navigation"
import Link from "next/link"
import {
  getLanguageById,
  isValidLanguageId,
  getAllFundamentals,
  type LanguageId,
} from "@/services/coding.service"
import { Button } from "@/components/ui/button"

interface FundamentalsPageProps {
  params: {
    language: string
  }
}

export async function generateMetadata({ params }: FundamentalsPageProps) {
  const languageId = params.language as LanguageId
  const language = getLanguageById(languageId)

  if (!language) {
    return {
      title: "Language Not Found",
    }
  }

  return {
    title: `${language.name} Fundamentals - Coding Practice`,
    description: `Learn ${language.name} programming fundamentals`,
  }
}

export default function FundamentalsPage({ params }: FundamentalsPageProps) {
  const languageId = params.language as LanguageId

  if (!isValidLanguageId(languageId)) {
    notFound()
  }

  const language = getLanguageById(languageId)
  const fundamentals = getAllFundamentals()

  if (!language) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <Link href={`/coding/${languageId}`} className="text-muted-foreground hover:text-foreground mb-4 inline-block">
          ← Back to {language.name} Overview
        </Link>
        <h1 className="text-4xl font-bold mb-2">{language.name} Fundamentals</h1>
        <p className="text-muted-foreground text-lg">
          Master the core concepts of {language.name} programming
        </p>
      </div>

      {/* Fundamentals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fundamentals.map((fundamental) => (
          <Link
            key={fundamental.id}
            href={`/coding/${languageId}/${fundamental.id}`}
            className="group"
          >
            <div className="border rounded-lg p-6 h-full hover:border-primary hover:shadow-md transition-all cursor-pointer">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary">
                {fundamental.title}
              </h2>
              <p className="text-muted-foreground text-sm">
                {fundamental.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

