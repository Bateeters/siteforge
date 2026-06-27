import type { JSX } from "react";
import type { Component } from "./types/component";
import TextEditor from "./components/editor/editors/TextEditor";
import HeaderEditor from "./components/editor/editors/HeaderEditor";

// The standard props shape every editor component receives.
// component  — the current component data (to read values from)
// updateProps — call this with whatever changed, e.g. { text: "Hello" }
export type EditorProps = {
    component: Component;
    updateProps: (newProps: Record<string, unknown>) => void;
};

type EditorRenderer = (props: EditorProps) => JSX.Element | null;

export const componentEditors: Record<string, EditorRenderer> = {
    "text": (props) => <TextEditor {...props} />,
    "header": (props) => <HeaderEditor {...props} />
};
