/**
 * Not Found Page for Invalid Language Routes
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LanguageNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Language Not Found</h1>
      <p className="text-muted-foreground mb-8">
        The programming language you're looking for doesn't exist or isn't
        available yet.
      </p>
      <Link href="/coding">
        <Button>Browse Available Languages</Button>
      </Link>
    </div>
  )
}

