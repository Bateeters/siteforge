export type Component = TextComponent;

export type TextComponent = {
    id: number;
    type: "text",
    props: {
        text: string;
    };
};