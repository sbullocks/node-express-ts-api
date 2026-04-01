# node-express-ts-api

A RESTful Task Manager API built with Node.js, Express, and TypeScript. This project is a hands-on backend learning exercise covering server setup, routing, controllers, middleware, database integration, authentication, and deployment.

## Tech Stack

- **Runtime** — Node.js
- **Framework** — Express
- **Language** — TypeScript
- **Database** — Supabase (PostgreSQL)
- **Auth** — JWT
- **Validation** — Zod

## Project Structure

```
src/
├── index.ts                  # App entry point, middleware setup
├── routes/
│   └── tasks.ts              # Route definitions for /tasks
├── controllers/
│   └── tasksController.ts    # Handler functions for each route
└── middleware/
    ├── logger.ts             # Request logging
    └── notFound.ts           # 404 catch-all handler
```

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
git clone https://github.com/your-username/node-express-ts-api.git
cd node-express-ts-api
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
```

Additional variables will be added as the project progresses (database, JWT secret, etc.).

### Running Locally

```bash
npm run dev
```

Server starts at `http://localhost:3000`

## API Endpoints

| Method | URL | Description | Status |
|--------|-----|-------------|--------|
| `GET` | `/tasks` | List all tasks | `200` |
| `GET` | `/tasks/:id` | Get a single task | `200` |
| `POST` | `/tasks` | Create a new task | `201` |
| `PATCH` | `/tasks/:id` | Update a task (partial) | `200` |
| `DELETE` | `/tasks/:id` | Delete a task | `204` |

## Modules

This project is built incrementally across 8 modules:

- [x] **Module 1** — How the backend works (HTTP, request/response, status codes)
- [x] **Module 2** — Express server setup (Node + Express + TypeScript + dotenv)
- [x] **Module 3** — Routing & controllers (separation of concerns)
- [ ] **Module 4** — Middleware (logger, CORS, 404 handler)
- [ ] **Module 5** — Database integration (Supabase)
- [ ] **Module 6** — Authentication (JWT, protected routes)
- [ ] **Module 7** — Error handling & validation (Zod)
- [ ] **Module 8** — Deployment (Railway/Render)
