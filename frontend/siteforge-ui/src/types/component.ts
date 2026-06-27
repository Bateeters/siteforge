export type Component = 
    TextComponent | 
    HeaderComponent;

export type TextComponent = {
    id: number;
    type: "text",
    props: {
        text: string;
    };
};

export type HeaderComponent = {
    id: number;
    type: "header",
    props: {
        text: string;
        level: number;
    }
}