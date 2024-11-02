export interface VariousFactCardEntry {
    number: number;
    title: string;
    subtitle?: string;
}

export interface VariousFactCardData {
    title: string;
    subtitle?: string;
    entries: VariousFactCardEntry[];
}
