/**
 * Code Example Component
 * 
 * Displays a complete code example with title and description.
 */

import { CodeBlock } from "./code-block"

interface CodeExampleProps {
  title: string
  description: string
  code: string
}

export function CodeExample({ title, description, code }: CodeExampleProps) {
  return (
    <div className="border rounded-lg p-6 bg-card">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <CodeBlock code={code} />
    </div>
  )
}

