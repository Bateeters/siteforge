export type Column = {
    id: number;

    // this changes Column to a container that can hold a component and all its properties
    component: null | {
        id: number;
        type: string;
        props?: Record<string, unknown>;
        // ? -> optional
        // Record<string, unknown> -> an object with keys that are strings, and values that can be anything
            // we use "unknown" because we don't know yet what the values are going to be so we create a "flexible container"
            // we do NOT use "any" because it basically turns TypeScript off (everything works and TS doesn't help you... That's bad!)
        // in the future, "props" will hold the component object.
    };
};