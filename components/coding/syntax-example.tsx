/**
 * Syntax Example Component
 * 
 * Displays a syntax example with title, description, and code.
 */

import { CodeBlock } from "./code-block"

interface SyntaxExampleProps {
  title: string
  description: string
  code: string
}

export function SyntaxExample({ title, description, code }: SyntaxExampleProps) {
  return (
    <div className="border rounded-lg p-6 bg-card">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <CodeBlock code={code} />
    </div>
  )
}

