# Engineering Student Guidance Platform

A production-ready Next.js application for an engineering student guidance platform.

## 🎯 Project Vision

This platform aims to provide comprehensive guidance and resources for engineering students. The application will help students navigate their academic journey, access relevant content, and receive personalized recommendations through AI-powered features.

### Core Goals

- **Content Aggregation**: Collect and organize engineering-related content from various sources
- **Personalized Guidance**: Provide AI-powered recommendations and guidance
- **Resource Discovery**: Help students discover relevant articles, tutorials, and resources
- **Scalable Architecture**: Built to scale with clean, maintainable code

## 🏗️ Architecture

This project follows a **domain-driven folder structure** with clear separation of concerns:

```
├── app/                    # Next.js App Router (pages, layouts, API routes)
│   ├── api/               # API route handlers
│   ├── coding/            # Coding practice pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
│
├── components/            # React components
│   ├── coding/            # Coding practice components
│   └── ui/                # ShadCN UI components (reusable)
│
├── data/                  # Static data files
│   └── coding/            # Language tutorial data (C, Python, CSS, etc.)
│
├── services/              # Business logic services
│   ├── auth/              # Authentication service (placeholder)
│   └── coding/            # Coding practice service & adapters
│
├── db/                    # Database utilities
│   ├── client.ts          # Prisma client singleton
│   └── index.ts           # Database exports
│
├── ai/                    # AI/LLM integration
│   ├── index.ts           # AI service exports
│   └── types.ts           # AI types & interfaces
│
├── rss/                   # RSS feed ingestion
│   ├── index.ts           # RSS service exports
│   └── types.ts           # RSS types & interfaces
│
├── docs/                  # Documentation
│   ├── architecture/      # Architecture decisions
│   └── guides/            # Development guides
│
├── lib/                   # Shared utilities
│   ├── prisma.ts          # Legacy Prisma export (deprecated)
│   └── utils.ts           # Common utilities
│
└── prisma/                # Prisma schema
    └── schema.prisma      # Database schema definition
```

### Architecture Principles

1. **Separation of Concerns**
   - Frontend: React components in `app/` and `components/`
   - Business Logic: Services in `services/`
   - Database: Utilities in `db/`
   - Domain Logic: AI and RSS in dedicated folders

2. **Domain-Driven Structure**
   - Each domain (AI, RSS, DB, Coding) has its own folder
   - Clear boundaries between domains
   - Easy to locate and maintain code

3. **Service Layer Pattern**
   - Business logic lives in `services/` directory
   - Services are framework-agnostic and testable
   - API routes act as thin controllers

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Database**: PostgreSQL with Prisma ORM
- **Code Quality**: ESLint + Prettier

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database (local or remote)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your PostgreSQL connection string:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/engineering_platform?schema=public"
   ```

3. **Set up the database:**
   ```bash
   # Generate Prisma Client
   npm run db:generate
   
   # Push schema to database (for development)
   npm run db:push
   
   # Or create a migration (for production)
   npm run db:migrate
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema changes to database (dev)
- `npm run db:migrate` - Create and apply migration
- `npm run db:studio` - Open Prisma Studio (database GUI)

## 🌿 Branch Strategy

We follow a **Git Flow**-inspired branching strategy:

### Main Branches

- **`main`** - Production-ready code. Always deployable.
- **`develop`** - Integration branch for features. Merged to `main` for releases.

### Supporting Branches

- **`feature/*`** - Feature development
  - Branch from: `develop`
  - Merge to: `develop`
  - Naming: `feature/user-authentication`, `feature/rss-ingestion`
  
- **`bugfix/*`** - Bug fixes
  - Branch from: `develop` (or `main` for hotfixes)
  - Merge to: `develop` (or `main` for hotfixes)
  - Naming: `bugfix/login-error`, `bugfix/rss-parsing-issue`
  
- **`hotfix/*`** - Critical production fixes
  - Branch from: `main`
  - Merge to: `main` and `develop`
  - Naming: `hotfix/security-patch`

### Branch Naming Convention

- Use kebab-case
- Prefix with branch type: `feature/`, `bugfix/`, `hotfix/`
- Be descriptive: `feature/ai-recommendations` not `feature/ai`

### Example Workflow

```bash
# Start a new feature
git checkout develop
git pull origin develop
git checkout -b feature/user-dashboard

# Work on feature, commit changes
git add .
git commit -m "feat: add user dashboard component"

# Push and create PR
git push origin feature/user-dashboard
# Create PR to merge into develop
```

## 🤝 Contribution Workflow

### 1. Before You Start

- Check existing issues and PRs
- Discuss major changes in an issue first
- Ensure you're on the latest `develop` branch

### 2. Development Process

1. **Create a branch:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make changes:**
   - Write clean, documented code
   - Follow TypeScript best practices
   - Add comments for complex logic
   - Keep commits atomic and meaningful

3. **Test your changes:**
   ```bash
   npm run lint
   npm run format:check
   npm run build  # Ensure build succeeds
   ```

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: add feature description"
   ```
   
   **Commit Message Convention:**
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting)
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

5. **Push and create PR:**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Create a Pull Request to `develop`
   - Fill out the PR template
   - Request review from team members

### 3. Code Review

- Address all review comments
- Keep PRs focused and small (< 500 lines if possible)
- Update documentation if needed
- Ensure all CI checks pass

### 4. After Approval

- Squash commits if requested
- Merge to `develop`
- Delete the feature branch

### Code Standards

- **TypeScript**: Strict mode enabled, avoid `any`
- **Components**: Functional components with TypeScript
- **Services**: Framework-agnostic, testable
- **Naming**: Descriptive, camelCase for variables, PascalCase for components
- **Comments**: Explain "why", not "what"
- **Formatting**: Use Prettier (runs on save)

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated (if needed)
- [ ] No console.logs or debug code
- [ ] All linting errors resolved
- [ ] Build succeeds locally
- [ ] Tests pass (when tests are added)

## 💻 Coding Practice Feature

The platform includes a comprehensive coding practice system that supports multiple programming languages with interactive tutorials, examples, and practice questions.

### Supported Languages

- **C** - System programming fundamentals
- **C++** - Object-oriented programming
- **Python** - High-level programming
- **Java** - Enterprise and Android development
- **JavaScript** - Web development
- **HTML** - Web page structure
- **CSS** - Web styling and design
- **SQL** - Database queries (coming soon)

### Structure

The coding practice system is organized as follows:

```
data/coding/              # Language data files
├── c.ts                 # C language topics
├── cpp.ts               # C++ language topics
├── python.ts            # Python language topics
├── java.ts              # Java language topics
├── javascript.ts        # JavaScript language topics
├── html.ts              # HTML language topics
├── css.ts               # CSS language topics (130 topics)
└── fundamentals.ts       # Common programming fundamentals

services/coding/          # Service layer
├── coding.service.ts    # Main service for accessing language data
├── types.ts             # TypeScript type definitions
├── c-data-adapter.ts     # C data adapter
├── python-data-adapter.ts # Python data adapter
├── css-data-adapter.ts  # CSS data adapter
└── [language]-data-adapter.ts # Other language adapters
```

### CSS Tutorial

The CSS tutorial is comprehensive with **130 topics** organized across 8 categories:

1. **CSS Basics** (47 topics) - Introduction, syntax, selectors, colors, layouts, etc.
2. **CSS Advanced** (29 topics) - Transforms, animations, gradients, shadows, etc.
3. **CSS Flexbox** (4 topics) - Flex container, items, responsive layouts
4. **CSS Grid** (5 topics) - Grid layouts, 12-column systems
5. **CSS Responsive** (8 topics) - Responsive design, media queries, viewport
6. **CSS Preprocessors** (1 topic) - SASS/SCSS
7. **CSS Examples & Practice** (12 topics) - Templates, exercises, quizzes
8. **CSS References** (16 topics) - Complete reference guides

Each topic includes:
- **Explanation** - What the concept is and why it's important
- **Syntax** - How to write the code
- **Examples** - Working code examples
- **Practice Questions** - Interactive exercises (fill-in-the-blank, predict output, etc.)

### Usage

Access coding practice topics via the service:

```typescript
import { getTopic, getTopicsForLanguage } from "@/services/coding.service"

// Get a specific topic
const topic = getTopic("css", "css-intro")

// Get all topics for a language
const cssTopics = getTopicsForLanguage("css")
```

### Data Adapters

Each language has a data adapter that converts the language-specific data structure to the standard `Topic` interface used by the UI. This ensures consistent presentation across all languages.

## 📚 Documentation

- **Architecture**: See `ARCHITECTURE.md` for detailed architecture decisions
- **Getting Started**: See `docs/guides/getting-started.md`
- **API Documentation**: Will be added in `docs/api/` as features are developed

## 🔐 Environment Variables

Required environment variables (see `.env.example`):

- `DATABASE_URL` - PostgreSQL connection string
- `NEXT_PUBLIC_APP_URL` - Application URL (optional)

Additional variables will be added as features are implemented.

## 🚀 Deployment

Deployment instructions will be added as the project progresses.

## 📄 License

[Add your license here]

## 🙏 Acknowledgments

Built with Next.js, TypeScript, and modern web technologies.

---

**Note**: This is a scaffold. Features are placeholders and need to be implemented as development progresses.
