/**
 * Coding Languages List Page
 * 
 * Displays all supported programming languages in a grid layout.
 * Each language card links to its detail page.
 */

import type { Metadata } from "next"
import Link from "next/link"
import { getAllLanguages } from "@/services/coding.service"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Coding Practice | Engineering Student Guidance Platform",
  description: "Learn programming languages with interactive exercises. Practice C, C++, Python, Java, JavaScript, HTML, CSS, and SQL.",
}

export default function CodingLanguagesPage() {
  const languages = getAllLanguages()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Coding Practice</h1>
        <p className="text-lg text-muted-foreground">
          Learn programming languages with interactive exercises. Choose a language to get
          started!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {languages.map((language) => (
          <Link key={language.id} href={`/coding/${language.id}`}>
            <div className="border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all cursor-pointer h-full flex flex-col">
              <h2 className="text-2xl font-semibold mb-2">{language.name}</h2>
              <p className="text-muted-foreground text-sm flex-grow">
                {language.description}
              </p>
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  Learn {language.name}
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

