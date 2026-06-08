# SiteForge

SiteForge is a beginner-friendly website builder that allows users to create and manage websites through a visual editor without writing code.

The goal of SiteForge is to provide a streamlined editing experience focused on simplicity, responsiveness, and ease of use. Users can create websites, manage pages, customize content, and publish professional-looking websites through an intuitive visual interface.

## Current Status

SiteForge is currently in active development.

Implemented features include:

* React + TypeScript frontend
* ASP.NET Core Web API backend
* React Router navigation
* Login page
* Registration page
* Dashboard page
* Initial editor shell

Planned features include:

* User authentication
* Website management
* Visual page editor
* Component-based content system
* Responsive layouts
* Save and publish workflows

## Technology Stack

### Frontend

* React
* TypeScript
* Vite
* React Router

### Backend

* ASP.NET Core Web API
* Swagger / OpenAPI

### Source Control

* Git
* GitHub

## Project Structure

```text
siteforge/
├─ backend/
├─ frontend/
├─ docs/
└─ .github/
```

## Running the Project

### Backend

```bash
cd backend/SiteForge.Api
dotnet run
```

Swagger will be available at:

```text
https://localhost:xxxx/swagger
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend development server will be available at:

```text
http://localhost:5173
```

## Vision

SiteForge aims to provide a modern visual website builder that prioritizes simplicity, clean architecture, and maintainable code while remaining approachable for users with little or no web development experience.
