/**
 * Concept Explanation Component
 * 
 * Displays the concept explanation section with what, why, and explanation.
 */

interface ConceptExplanationProps {
  concept: {
    what: string
    why: string
    explanation: string
    languageSpecificNotes?: string
  }
}

export function ConceptExplanation({ concept }: ConceptExplanationProps) {
  return (
    <section className="mb-8 border rounded-lg p-6 bg-card">
      <h2 className="text-3xl font-semibold mb-6">Concept</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">What is it?</h3>
          <p className="text-muted-foreground leading-relaxed">{concept.what}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Why is it important?</h3>
          <p className="text-muted-foreground leading-relaxed">{concept.why}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Explanation</h3>
          <p className="text-muted-foreground leading-relaxed">{concept.explanation}</p>
        </div>

        {concept.languageSpecificNotes && (
          <div className="mt-4 p-4 bg-muted rounded-md">
            <h4 className="font-semibold mb-2">Language-Specific Notes</h4>
            <p className="text-sm text-muted-foreground">
              {concept.languageSpecificNotes}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

