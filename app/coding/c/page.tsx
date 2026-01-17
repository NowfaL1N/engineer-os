/**
 * C Language Overview Page
 * 
 * Displays all C topics organized by categories.
 * Route: /coding/c
 */

import Link from "next/link"
import { getLanguageById } from "@/services/coding.service"
import { getCTopicsByCategory } from "@/services/coding/c-data-adapter"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "C Programming - Coding Practice",
  description: "Learn C programming with comprehensive tutorials and practice exercises",
}

export default function CLanguagePage() {
  const language = getLanguageById("c")
  const categories = getCTopicsByCategory()

  if (!language) {
    return <div>Language not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <Link href="/coding" className="text-muted-foreground hover:text-foreground mb-4 inline-block">
          ← Back to Languages
        </Link>
        <h1 className="text-4xl font-bold mb-2">{language.name} Programming</h1>
        <p className="text-muted-foreground text-lg">{language.description}</p>
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {categories.map((category) => (
          <section key={category.id} className="border rounded-lg p-6 bg-card">
            <h2 className="text-3xl font-semibold mb-6">{category.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.topics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/coding/c/${topic.id}`}
                  className="group"
                >
                  <div className="border rounded-lg p-4 h-full hover:border-primary hover:shadow-md transition-all cursor-pointer">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {topic.practiceQuestions.length} practice questions
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

