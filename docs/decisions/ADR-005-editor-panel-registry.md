# ADR-005: Editor Panel Registry

## Status
Accepted

## Context

The editor panel initially had a single hardcoded block for editing any selected component:

```tsx
{selectedItem?.type === "component" && (
    <textarea onChange={updateTextComponent} />
)}
```

After adding `HeaderComponent`, this broke down in two ways:

1. **TypeScript error:** `updateTextComponent` spreads `comp.props` and returns the result. With `Component` now being a union type (`TextComponent | HeaderComponent`), TypeScript cannot verify the spread result still satisfies `Component` — a type assertion is required.

2. **Wrong UI per type:** A `TextComponent` needs a textarea. A `HeaderComponent` needs a textarea *and* a heading level dropdown. An `ImageComponent` (upcoming) needs a URL input and alt text — no textarea at all. A single hardcoded block cannot handle these differences cleanly.

## Decision

Apply the same registry pattern used for canvas rendering (ADR-004) to the editor panel.

A second registry maps component type strings to **editor panel components**:

```ts
export const componentEditors: Record<string, EditorRenderer> = {
    text:   (props) => <TextEditor   {...props} />,
    header: (props) => <HeaderEditor {...props} />,
};
```

Each editor receives a standard `EditorProps` shape:

```ts
export type EditorProps = {
    component: Component;
    updateProps: (newProps: Record<string, unknown>) => void;
};
```

`EditorPanel` replaces the hardcoded component section with a single registry lookup. A generic `updateComponent` function handles all prop updates regardless of component type, using a type assertion (`as Component`) to satisfy TypeScript's union type check.

## Consequences

**Positive:**
- Adding a new component type requires a new editor file and one registry entry — `EditorPanel` does not change.
- Each editor file is small, focused, and independently testable.
- The `updateProps` callback is a clean interface: the editor only needs to know *what* changed, not how the state tree is structured.

**Negative / Trade-offs:**
- `updateProps` accepts `Record<string, unknown>` — a loose type. This sacrifices some compile-time safety in exchange for a simple shared interface. Future work could tighten this with generics if needed.
- The `as Component` assertion in `updateComponent` is technically unsafe but acceptable here: editors only call `updateProps` with valid keys for their own type.

## File Structure

```
src/
├── editorRegistry.tsx                         ← maps type → editor component
└── components/
    └── editor/
        ├── EditorPanel.tsx                    ← uses registry, no longer type-specific
        └── editors/
            ├── TextEditor.tsx                 ← textarea for text prop
            └── HeaderEditor.tsx              ← textarea + level dropdown
```
