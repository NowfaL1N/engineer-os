/**
 * Landing page - minimal implementation
 * This is a placeholder page. Features will be added incrementally.
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Engineering Student Guidance Platform
        </h1>
        <p className="text-muted-foreground mb-8">
          Production-ready Next.js application scaffold
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/coding">
            <Button>Start Coding Practice</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

