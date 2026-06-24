export type Column = {
    id: number;

    // this changes Column to a container that can hold a component and all its properties
    component: null | {
        id: number;
        type: string;
        props?: Record<string, unknown>;
    };
};