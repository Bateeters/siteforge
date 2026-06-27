import type { Component, TextComponent } from "./types/component";
import type { JSX } from "react/jsx-runtime";
import TextComponentView from "./components/editor/components/TextComponentView";

// A ComponentRenderer is a function that takes any Component and returns JSX (or null).
// We use `JSX.Element | null` because some types might not have a renderer yet.
type ComponentRenderer = (component: Component) => JSX.Element | null;

export const componentRenderers: Record<string, ComponentRenderer> = {
    "text": (component) => <TextComponentView component={component as TextComponent}/>
};
