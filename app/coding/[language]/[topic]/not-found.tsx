/**
 * Not Found Page for Invalid Topic Routes
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TopicNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Topic Not Found</h1>
      <p className="text-muted-foreground mb-8">
        The topic you're looking for doesn't exist or isn't available yet.
      </p>
      <Link href="/coding">
        <Button>Browse Languages</Button>
      </Link>
    </div>
  )
}

