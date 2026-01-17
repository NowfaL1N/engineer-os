/**
 * Coding Practice - Topic Detail Page
 * 
 * Displays topic explanation, syntax examples, and practice questions.
 * Route: /coding/[language]/[topic]
 */

import { notFound } from "next/navigation"
import Link from "next/link"
import {
  getLanguageById,
  getTopic,
  isValidLanguageId,
  isValidTopicId,
  type LanguageId,
  type TopicId,
} from "@/services/coding.service"
import { ConceptExplanation } from "@/components/coding/concept-explanation"
import { SyntaxExample } from "@/components/coding/syntax-example"
import { PracticeQuestion } from "@/components/coding/practice-question"

interface TopicPageProps {
  params: {
    language: string
    topic: string
  }
}

export async function generateMetadata({ params }: TopicPageProps) {
  const languageId = params.language as LanguageId
  const topicId = params.topic as TopicId

  const language = getLanguageById(languageId)
  const topic = getTopic(languageId, topicId)

  if (!language || !topic) {
    return {
      title: "Topic Not Found",
    }
  }

  return {
    title: `${topic.title} - ${language.name} - Coding Practice`,
    description: topic.concept.explanation,
  }
}

export default function TopicDetailPage({ params }: TopicPageProps) {
  const languageId = params.language as LanguageId
  const topicId = params.topic as string // Allow string for C topics

  if (!isValidLanguageId(languageId)) {
    notFound()
  }

  // For C language, accept any topic ID. For others, validate against TopicId
  if (languageId !== "c" && !isValidTopicId(topicId, languageId)) {
    notFound()
  }

  const language = getLanguageById(languageId)
  const topic = getTopic(languageId, topicId)

  if (!language || !topic) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/coding" className="hover:text-foreground">
          Languages
        </Link>
        {" / "}
        <Link href={`/coding/${languageId}`} className="hover:text-foreground">
          {language.name}
        </Link>
        {" / "}
        <Link
          href={`/coding/${languageId}/fundamentals`}
          className="hover:text-foreground"
        >
          Fundamentals
        </Link>
        {" / "}
        <span className="text-foreground">{topic.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{topic.title}</h1>
        <p className="text-muted-foreground text-lg">{language.name}</p>
      </div>

      {/* Concept Explanation */}
      <ConceptExplanation concept={topic.concept} />

      {/* Syntax Examples */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Syntax Examples</h2>
        <div className="space-y-6">
          {topic.syntaxExamples.map((example, index) => (
            <SyntaxExample key={index} {...example} />
          ))}
        </div>
      </section>

      {/* Practice Questions */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Practice Questions</h2>
        <p className="text-muted-foreground mb-6">
          Complete the exercises below to practice {topic.title.toLowerCase()}.
        </p>
        <div className="space-y-8">
          {topic.practiceQuestions.map((question) => (
            <PracticeQuestion key={question.id} {...question} />
          ))}
        </div>
      </section>
    </div>
  )
}

