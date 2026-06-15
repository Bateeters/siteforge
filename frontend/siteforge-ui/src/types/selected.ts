export type SelectedItem =
    | null
    | {
        type: "page";
    }
    | {
        type: "row";
        rowId: number;
    }
    | {
        type: "column";
        rowId: number;
        columnId: number;
    }
    |{
        type: "component";
        rowId: number;
        columnId: number;
        componentId: number;
    };