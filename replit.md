# EduFlex - School Management System

## Overview

EduFlex is a modern school management system designed for school administrators to manage students, fees, attendance, events, staff, and transport operations. The application features a clean, professional SaaS-style interface inspired by Framer's design language, with comprehensive dark mode support and responsive layouts.

The system provides a complete administrative dashboard with real-time data visualization, student record management, fee tracking, attendance monitoring, event coordination, staff management, and transport route organization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server with HMR support
- Wouter for lightweight client-side routing
- Single Page Application (SPA) architecture with route-based code organization

**UI Component System**
- Shadcn/UI component library with "new-york" style variant
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theme management (light/dark mode)
- Design system follows spacing primitives (2, 4, 6, 8, 12, 16, 20, 24) for consistent rhythm

**State Management**
- TanStack Query (React Query) for server state management
- React Context API for theme management (ThemeProvider)
- Local component state with React hooks (useState, useEffect)
- Session/cookie-based authentication state

**Design System**
- Color palette with light/dark mode support using HSL color space
- Custom border radius values (9px, 6px, 3px)
- Typography hierarchy with Inter font family
- Hover and active states using CSS custom properties (--elevate-1, --elevate-2)
- Comprehensive component theming via CSS variables in index.css

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- ESM module system (type: "module" in package.json)
- Separate development and production build processes
- Custom logging middleware for API request tracking

**Data Layer**
- Drizzle ORM for type-safe database operations
- PostgreSQL database via Neon serverless driver (@neondatabase/serverless)
- Schema-first approach with schema.ts in shared directory
- Drizzle-Zod for runtime validation of database schemas

**Application Structure**
- `/server` - Express server setup and middleware
- `/shared` - Shared types and schemas between frontend/backend
- `/client` - React frontend application
- `/api` - Serverless function entry point for Vercel deployment
- Monorepo-style structure with path aliases (@/, @shared/, @assets/)

**Storage Interface**
- Abstract IStorage interface for CRUD operations
- In-memory storage implementation (MemStorage) for development
- User management with username/password authentication pattern
- Designed for easy swap to database-backed implementation

### External Dependencies

**Database & ORM**
- PostgreSQL database (configured for Neon serverless)
- Drizzle ORM (v0.39.1) for database queries and migrations
- Drizzle Kit for schema management and migrations
- Connect-pg-simple for PostgreSQL session store

**UI & Styling**
- Tailwind CSS with PostCSS for processing
- Comprehensive Radix UI component primitives
- Lucide React for icon system
- Recharts for data visualization
- Embla Carousel for carousel components
- React Day Picker for calendar functionality

**Development & Build**
- TypeScript for static type checking
- Vite plugins for Replit integration (cartographer, dev banner, runtime error overlay)
- ESBuild for server bundling in production
- TSX for TypeScript execution in development

**Deployment Configuration**
- Vercel deployment with custom routes for SPA fallback
- API serverless functions runtime (Node.js 20.x)
- Environment-based configuration (DATABASE_URL from env)
- Build output: `/dist/public` for client, `/dist` for server

**Third-Party Integrations**
- Session management via express-session (implied by connect-pg-simple)
- Form validation with React Hook Form (@hookform/resolvers, Zod schemas)
- Date manipulation with date-fns library