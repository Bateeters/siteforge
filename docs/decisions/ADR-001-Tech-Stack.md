# ADR-001: Technology Stack

## Status

Accepted

## Date

2026-06-08

## Context

SiteForge requires a modern web technology stack that supports:

* Rapid development
* Strong typing
* Long-term maintainability
* Scalability
* Familiar industry-standard tooling
* Clear separation between frontend and backend responsibilities

The project is being developed as a portfolio-quality application and should reflect professional software development practices.

## Decision

SiteForge will use the following technology stack.

### Frontend

* React
* TypeScript
* Vite

### Backend

* ASP.NET Core Web API
* C#

### API Documentation

* Swagger / OpenAPI

### Source Control

* Git
* GitHub

### Database

* SQLite (initial database solution)

## Reasoning

### React

React provides a mature ecosystem, strong community support, and a component-based architecture well suited for a visual website builder.

### TypeScript

TypeScript adds static typing, improves maintainability, catches errors earlier during development, and better supports large applications than plain JavaScript.

### Vite

Vite provides a fast development experience with minimal configuration and strong TypeScript support.

### ASP.NET Core

ASP.NET Core provides excellent performance, modern API development features, dependency injection, and strong tooling support.

### C#

C# offers strong typing, modern language features, excellent IDE support, and is widely used in professional software development.

### SQLite

SQLite provides a lightweight database solution that is simple to configure and deploy during initial development.

### Swagger

Swagger provides automatic API documentation and testing capabilities during development.

## Consequences

### Positive

* Strongly typed frontend and backend.
* Modern development workflow.
* Professional-grade architecture.
* Excellent tooling support.
* Clear frontend/backend separation.
* Easy local development setup.

### Negative

* Increased complexity compared to a pure frontend application.
* Additional learning requirements for full-stack development.
* More project setup compared to lower-structure alternatives.

## Alternatives Considered

### React + JavaScript

Rejected because TypeScript provides better maintainability and compile-time error detection.

### Angular

Rejected because React offers a simpler learning curve and greater flexibility for this project.

### Vue

Rejected because React has broader industry adoption and aligns better with the project's learning goals.

### Node.js Backend

Rejected because ASP.NET Core provides stronger familiarity with enterprise development patterns and aligns with the project's backend learning objectives.