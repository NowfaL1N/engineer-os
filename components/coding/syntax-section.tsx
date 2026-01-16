/**
 * Syntax Section Component
 * 
 * Displays a syntax explanation with code example.
 */

import { CodeBlock } from "./code-block"

interface SyntaxSectionProps {
  title: string
  description: string
  code: string
}

export function SyntaxSection({ title, description, code }: SyntaxSectionProps) {
  return (
    <div className="border rounded-lg p-6 bg-card">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <CodeBlock code={code} />
    </div>
  )
}

