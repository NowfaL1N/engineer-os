# Architecture Decision Records (ADRs)

This document tracks important architectural decisions made in this project.

## ADR-001: Folder Structure

**Status**: Accepted  
**Date**: 2024

### Context
We need a scalable folder structure that separates concerns and supports large-scale feature development.

### Decision
Use a domain-driven folder structure with separate root-level folders:
- `app/` - Next.js App Router (pages, layouts, API routes)
- `components/` - React components
- `services/` - Business logic services
- `db/` - Database utilities and Prisma client
- `ai/` - AI/LLM integration
- `rss/` - RSS feed ingestion
- `docs/` - Documentation

### Consequences
- Clear separation of concerns
- Easy to locate code by domain
- Scalable for team development
- Each folder can have its own structure and conventions

