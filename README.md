# Creator Hiring Platform

A **two-sided creator hiring platform** where brands can discover, evaluate, and hire creators through a structured, state-driven workflow.

This project is built as a **portfolio system** to demonstrate backend architecture, marketplace design, and real-world engineering discipline.

---

## Overview

The platform models a real hiring flow instead of ad-hoc messaging:

- **Creators** create structured profiles and apply to campaigns with a pitch and expected pricing  
- **Brands** post campaigns, review applicants in defined stages, and hire creators  
- **Admins** monitor activity and moderate users to maintain platform trust  

The focus is on **system behavior, data integrity, and role-based workflows**, not UI polish alone.

---

## Core MVP Features

- Google OAuth–based authentication  
- Role-based access: Creator, Brand, Admin  
- Creator profiles with skills, niches, platforms, and work samples  
- Campaign creation and discovery  
- Application lifecycle with enforced state transitions:  
  `APPLIED → SHORTLISTED → HIRED → COMPLETED / REJECTED`  
- Creator search and brand-initiated invites  
- Campaign completion with basic ratings and feedback  
- Lightweight admin moderation tools  

The scope is intentionally constrained to remain **complete, demo-ready, and explainable**.

---

## Technology Stack

### Frontend
- React
- TypeScript

### Backend
- Node.js
- Express
- TypeScript
- MongoDB
- Google OAuth 2.0
- JWT (authorization)
- Zod (request validation)

---

## Architectural Approach

- Feature-based, domain-driven structure  
- Clear separation of HTTP handling, business logic, and persistence  
- Explicit state management for hiring workflows  
- Role and ownership enforcement at the service layer  
- Centralized validation and error handling  

Detailed architectural decisions are documented in **ARCHITECTURE.md**.

---

## Project Status

🚧 **In active development**

The project is being built incrementally with clean commits and deliberate design decisions.
