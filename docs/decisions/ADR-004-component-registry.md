# ADR-004: Component Registry Pattern

## Status
Accepted

## Context

The initial editor rendered component types using a chain of `if` statements inside `RowView.tsx`:

```tsx
if (component.type === "text") {
    return <div>...</div>;
}
return null;
```

This works for one component type but does not scale. Every new type (image, button, header) would require opening `RowView.tsx` and adding another branch. Over time this creates a growing maintenance burden and violates the **Open/Closed Principle** — the idea that code should be open to *extension* but closed to *modification*. Ideally, adding a new component type should not require changing existing rendering logic at all.

## Decision

Replace type-based conditional rendering with a **component registry**: a plain object that maps a component type string to a render function.

```ts
const componentRenderers: Record<string, ComponentRenderer> = {
    text: (component) => <TextComponentView component={component as TextComponent} />,
};
```

Rendering a component then becomes a single registry lookup:

```ts
const render = componentRenderers[component.type];
return render ? render(component) : null;
```

Each component type gets its own dedicated view file (e.g., `TextComponentView.tsx`) located in `src/components/editor/components/`. The registry file (`componentRegistry.tsx`) is the only file that needs to be updated when a new component type is added — `RowView.tsx` does not change.

## Consequences

**Positive:**
- Adding a new component type requires: (1) a new view file, (2) one new line in the registry. Nothing else changes.
- Unknown component types are handled gracefully — the lookup returns `undefined`, which renders `null`.
- Each component view file is independently testable and easy to reason about in isolation.
- `RowView.tsx` becomes stable — it renders without knowing anything about specific component types.

**Negative / Trade-offs:**
- TypeScript type casts (`as TextComponent`) are necessary inside the registry because the registry accepts the `Component` union type, not a specific subtype. This is a known and acceptable trade-off — the cast is safe because each renderer is only invoked for its matching type.
- The indirection (looking up a function rather than calling it directly) is a minor conceptual overhead for new developers reading the code.

## File Structure

```
src/
├── componentRegistry.tsx          ← registry: maps type → render function
└── components/
    └── editor/
        ├── RowView.tsx            ← uses registry, no longer knows about types
        └── components/
            └── TextComponentView.tsx   ← renders a TextComponent
```
