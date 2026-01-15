/**
 * Authentication types and interfaces
 * Placeholder for future auth implementation
 */

export interface User {
  id: string
  email: string
  name?: string
}

export interface AuthSession {
  user: User
  expires: string
}

// Placeholder types - implement when adding auth
export type AuthProvider = "credentials" | "oauth"

