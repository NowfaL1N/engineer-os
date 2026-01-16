/**
 * Not Found Page for Invalid Language
 * 
 * Displayed when a user tries to access a language that doesn't exist.
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LanguageNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Language Not Found</h1>
      <p className="text-muted-foreground mb-8">
        The programming language you're looking for doesn't exist or isn't supported yet.
      </p>
      <Link href="/coding">
        <Button>Browse All Languages</Button>
      </Link>
    </div>
  )
}

