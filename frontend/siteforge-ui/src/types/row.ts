import type { Column } from "./column";

export type Row =
{
    id: number;
    name: string;
    columns: Column[];
}