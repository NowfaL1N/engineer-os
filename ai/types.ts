/**
 * AI service types and interfaces
 * Placeholder for future AI integration
 */

export interface AIRequest {
  prompt: string
  context?: Record<string, unknown>
}

export interface AIResponse {
  content: string
  metadata?: Record<string, unknown>
}

export type AIModel = "gpt-4" | "gpt-3.5-turbo" | "claude" | "custom"

