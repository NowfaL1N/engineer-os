# Getting Started Guide

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database (local or remote)
- Git

## Initial Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your PostgreSQL connection string.

3. **Set up the database:**
   ```bash
   # Generate Prisma Client
   npm run db:generate
   
   # Push schema to database (for development)
   npm run db:push
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Next Steps

- Read the main [README.md](../README.md) for project overview
- Check [ARCHITECTURE.md](../ARCHITECTURE.md) for architecture details
- Review contribution guidelines in README

