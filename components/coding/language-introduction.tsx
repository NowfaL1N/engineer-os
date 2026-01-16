/**
 * Language Introduction Component
 * 
 * Displays language introduction and use cases.
 */

interface LanguageIntroductionProps {
  introduction: string
  useCases: string[]
}

export function LanguageIntroduction({
  introduction,
  useCases,
}: LanguageIntroductionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {introduction}
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-3">Common Use Cases:</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          {useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

