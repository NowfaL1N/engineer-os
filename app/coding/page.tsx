/**
 * Coding Practice - Language List Page
 * 
 * Displays all available programming languages in a grid layout.
 * Each language card links to its detail page.
 */

import Link from "next/link"
import { getAllLanguages } from "@/services/coding.service"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Coding Practice | Languages",
  description: "Learn programming languages with interactive practice exercises",
}

export default function CodingLanguagesPage() {
  const languages = getAllLanguages()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Coding Practice</h1>
        <p className="text-muted-foreground text-lg">
          Learn programming languages with interactive exercises. Choose a
          language to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {languages.map((language) => (
          <Link
            key={language.id}
            href={`/coding/${language.id}`}
            className="group"
          >
            <div className="border rounded-lg p-6 h-full hover:border-primary hover:shadow-md transition-all cursor-pointer">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary">
                {language.name}
              </h2>
              <p className="text-muted-foreground text-sm">
                {language.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

