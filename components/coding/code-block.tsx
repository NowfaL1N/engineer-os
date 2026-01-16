/**
 * Code Block Component
 * 
 * Displays code with syntax highlighting styling.
 * Uses monospaced font and proper formatting for readability.
 */

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  return (
    <div className={`rounded-lg bg-muted p-4 overflow-x-auto ${className || ""}`}>
      <pre className="font-mono text-sm">
        <code>{code}</code>
      </pre>
    </div>
  )
}

