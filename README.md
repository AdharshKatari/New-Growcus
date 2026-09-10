# Growcus

Hybrid B2C school-discovery marketplace + B2B school ERP + AI teacher co-pilot.

## Stack
- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** + **Shadcn UI**
- **Prisma v6** + **Supabase** (PostgreSQL)
- **Auth.js v5** (WhatsApp OTP passwordless)

## Getting Started

### 1. Environment Variables
Copy `.env.example` to `.env.local` and fill in:
```bash
cp .env.example .env.local
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Database Setup
```bash
npm run db:generate   # Generate Prisma client
npm run db:push       # Push schema to Supabase (dev)
npm run db:seed       # Seed with mock data
```

### 4. Run Dev Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Portal Routes
| Portal | Route prefix | Roles |
|---|---|---|
| Marketplace | `/` | Public |
| Auth | `/login`, `/verify`, `/register`, `/recover` | Public |
| Admin | `/dashboard` → `/analytics` | ADMIN |
| Teacher | `/teacher/*` | TEACHER |
| Student | `/student/*` | STUDENT |
| Parent | `/parent/*` | PARENT |

## Dev Login (bypass WhatsApp OTP)
Set `DEV_MODE_OTP=true` in `.env.local`. Use OTP code `1234` on the verify page.
