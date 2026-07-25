# Event Reminder API

A simple NestJS backend for event reminders with Google OAuth, JWT, and scheduled notifications.

## Features
- Google OAuth login
- JWT authentication
- CRUD reminders (owned by user)
- Scheduled notifications (email/telegram)
- Swagger documentation

## Setup
1. Copy `.env.example` to `.env` and fill in your credentials.
2. Run `npm install`.
3. Run `docker-compose up -d` to start PostgreSQL.
4. Run `npm run start:dev`.
5. Access API at `http://localhost:3000/api/docs`.

## Postman Collection
Import `postman-collection.json` for testing.
