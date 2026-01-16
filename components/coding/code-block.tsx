/**
 * Code Block Component
 * 
 * Reusable component for displaying code with proper formatting.
 * Uses monospaced font and preserves whitespace.
 */

interface CodeBlockProps {
  code: string
  className?: string
}

export function CodeBlock({ code, className = "" }: CodeBlockProps) {
  return (
    <pre className={`bg-muted p-4 rounded-md overflow-x-auto ${className}`}>
      <code className="text-sm font-mono whitespace-pre">{code}</code>
    </pre>
  )
}

