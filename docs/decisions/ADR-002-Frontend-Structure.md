# ADR-002: Frontend Structure

## Status

Accepted

## Date

2026-06-08

## Context

SiteForge requires a frontend architecture that is easy to understand, scalable as new features are added, and maintainable for long-term development.

The project will initially be developed by a single developer, but the structure should remain suitable for future growth.

Several decisions were needed regarding routing, page organization, component organization, and communication with the backend API.

## Decision

The frontend will use the following structure and architectural principles:

### Technology

* React
* TypeScript
* Vite
* React Router

### Routing

* Routing will be managed through React Router.
* `main.tsx` is responsible for bootstrapping React and providing `BrowserRouter`.
* `App.tsx` acts as the application composition root.
* `AppRouter.tsx` owns route definitions and navigation behavior.

### Pages

Pages represent complete screens within the application.

Examples include:

* LoginPage
* RegisterPage
* DashboardPage
* EditorPage

Pages are stored in the `/pages` directory.

### Components

Reusable UI elements are stored in the `/components` directory.

Examples may include:

* Button
* TextInput
* Modal
* WebsiteCard

Components should be extracted only when reuse or complexity justifies abstraction.

### State Management

Initial development will use React's built-in state management through:

* useState
* props

Additional state management solutions will be evaluated only if application complexity requires them.

### API Communication

Frontend API calls will be isolated within a dedicated services layer.

Pages and components should not directly contain HTTP request logic when avoidable.

Examples:

* authService
* websiteService

### URL Structure

Protected application routes use identifiers rather than names.

Examples:

* `/editor/:websiteId`

Website names may change over time, while identifiers remain stable.

## Consequences

### Positive

* Clear separation of concerns.
* Easy navigation structure.
* Scalable project organization.
* Easier testing and maintenance.
* Consistent API communication patterns.

### Negative

* Additional files and folders compared to a minimal React application.
* Slightly more upfront structure for a small project.

## Alternatives Considered

### All routes defined directly in App.tsx

Rejected because routing responsibilities would grow as the application expands.

### Feature folders only

Rejected for initial development because a pages/components separation provides a simpler mental model while the project remains small.

### Using website names in routes

Rejected because website names can change and are not guaranteed to remain stable identifiers.
