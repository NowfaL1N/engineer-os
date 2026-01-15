/**
 * RSS ingestion service types and interfaces
 * Placeholder for future RSS feed integration
 */

export interface RSSFeed {
  id: string
  url: string
  title: string
  description?: string
}

export interface RSSItem {
  id: string
  feedId: string
  title: string
  link: string
  description?: string
  publishedAt: Date
  content?: string
}

