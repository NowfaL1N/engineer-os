# Architecture Overview

## Directory Structure

```
engineering-platform/
│
├── app/                          # Next.js App Router
│   ├── api/                      # API route handlers
│   │   └── health/               # Health check endpoint
│   ├── globals.css               # Global styles with Tailwind
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page (minimal)
│
├── components/                   # React components
│   └── ui/                       # ShadCN UI components
│       └── button.tsx            # Button component (example)
│
├── services/                     # Business logic layer
│   └── auth/                     # Authentication service
│       ├── index.ts              # Auth service exports
│       └── types.ts              # Auth types & interfaces
│
├── db/                           # Database utilities
│   ├── client.ts                 # Prisma client singleton
│   └── index.ts                  # Database exports
│
├── ai/                           # AI/LLM integration
│   ├── index.ts                  # AI service exports
│   └── types.ts                  # AI types & interfaces
│
├── rss/                          # RSS feed ingestion
│   ├── index.ts                  # RSS service exports
│   └── types.ts                  # RSS types & interfaces
│
├── docs/                         # Documentation
│   ├── architecture/             # Architecture decisions
│   │   └── decisions.md          # ADRs
│   ├── guides/                   # Development guides
│   │   └── getting-started.md    # Getting started guide
│   └── README.md                 # Docs index
│
├── lib/                          # Shared utilities
│   ├── prisma.ts                 # Legacy Prisma export (deprecated)
│   └── utils.ts                  # Common utilities (cn, etc.)
│
├── prisma/                       # Database schema
│   └── schema.prisma             # Prisma schema definition
│
├── .env.example                  # Environment variables template
├── .eslintrc.json                # ESLint configuration
├── .eslintignore                 # ESLint ignore patterns
├── .gitignore                    # Git ignore patterns
├── .prettierrc                   # Prettier configuration
├── .prettierignore               # Prettier ignore patterns
├── components.json               # ShadCN UI configuration
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies & scripts
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── README.md                     # Project documentation
└── ARCHITECTURE.md               # This file
```

## Design Decisions

### 1. Domain-Driven Folder Structure
- **Why**: Clear separation of concerns, scales well for large teams
- **How**: Root-level folders for each domain (db, ai, rss, docs)
- **Benefit**: Easy to locate code, clear ownership, independent evolution

### 2. Service Layer Pattern
- **Why**: Separates business logic from framework code
- **How**: Services in `services/` directory, framework-agnostic
- **Benefit**: Testable, reusable, framework-independent

### 3. App Router Structure
- **Why**: Next.js 14 App Router is the modern standard
- **How**: Routes in `app/` directory, API routes in `app/api/`
- **Benefit**: Server components, streaming, better performance

### 4. TypeScript Strict Mode
- **Why**: Catch errors at compile time
- **How**: `strict: true` in tsconfig.json
- **Benefit**: Type safety, better IDE support, fewer runtime errors

### 5. Prisma Singleton Pattern
- **Why**: Prevent multiple Prisma instances in development
- **How**: Global singleton in `db/client.ts`
- **Benefit**: Avoids connection pool exhaustion

### 6. ShadCN UI Components
- **Why**: Accessible, customizable, copy-paste components
- **How**: Components in `components/ui/`
- **Benefit**: Fast development, consistent design system

### 7. Tailwind CSS with CSS Variables
- **Why**: Utility-first CSS, theme support
- **How**: CSS variables in `globals.css`, config in `tailwind.config.ts`
- **Benefit**: Rapid styling, dark mode ready, maintainable

## Data Flow

```
User Request
    ↓
Next.js Route Handler (app/api/* or app/*)
    ↓
Service Layer (services/*)
    ↓
Domain Layer (db/, ai/, rss/)
    ↓
Database (Prisma → PostgreSQL)
    ↓
Response
```

## Domain Responsibilities

### Database (`db/`)
- Prisma client management
- Database connection handling
- Query utilities (to be added)
- **Status**: Basic setup complete

### AI Service (`ai/`)
- LLM API integration
- Content generation
- Content analysis
- **Status**: Placeholder (not implemented)

### RSS Service (`rss/`)
- Feed parsing
- Content ingestion
- Scheduled updates
- **Status**: Placeholder (not implemented)

### Auth Service (`services/auth/`)
- User authentication
- Session management
- Authorization checks
- **Status**: Placeholder (not implemented)

## Extension Points

### Adding a New Feature

1. **Create service** in `services/feature-name/` (if business logic)
2. **Add domain folder** in root (if domain-specific, like `ai/`, `rss/`)
3. **Add API routes** in `app/api/feature-name/`
4. **Create components** in `components/features/feature-name/` (if needed)
5. **Add routes** in `app/(feature-name)/` (if needed)
6. **Update schema** in `prisma/schema.prisma` (if needed)

### Adding a New UI Component

1. Use ShadCN CLI: `npx shadcn-ui@latest add [component]`
2. Or manually add to `components/ui/`
3. Follow ShadCN patterns and accessibility guidelines

### Adding Database Models

1. Update `prisma/schema.prisma`
2. Run `npm run db:migrate` (creates migration)
3. Or `npm run db:push` (for development, no migration)

## Best Practices

1. **Keep services framework-agnostic** - No Next.js imports in services
2. **Thin API routes** - Delegate to services, handle HTTP concerns only
3. **Type everything** - Use TypeScript types, avoid `any`
4. **Component composition** - Build complex UIs from simple components
5. **Error handling** - Handle errors at service and API layers
6. **Validation** - Validate inputs (consider Zod schemas)
7. **Testing** - Services are testable (add tests as features are built)
8. **Documentation** - Document architecture decisions in `docs/architecture/`

## Migration Notes

- `lib/prisma.ts` is deprecated - use `db/client.ts` instead
- Old `services/ai/` and `services/rss/` have been moved to root-level `ai/` and `rss/`
- Import from new locations: `@/db`, `@/ai`, `@/rss`
