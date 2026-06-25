# ADR-003: Column + Component Structured Editor Model

## Status

Accepted

## Context

The editor previously used flat UI-driven selection model (string-based SelectedItem) and columns without internal structure. This limited scalability for building a Webflow-style editor.

## Decision

We will restructure the editor data model so that:

- Rows contain Columns
- Columns are structured objects with IDs
- Columns will suppoert future embedded Components
- Selection will be structured (rowId, columnId, componentId)

## New Data Model

Row:
- id: number
- name: string
- columns: Column[]

Column:
- id: number
- component: Component[]

Component:
- id: number
- type: string
- props: Record<string, unknown>

## Consequences

- Enables scalable editor architecture
- Allows per-column selection and editing
- Supports future drag-and-drop and component system
- Requires refactor of Row creation and Row rendering logic