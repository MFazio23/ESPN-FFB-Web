export interface VariousFactCardEntry {
    number: number;
    title: string;
    subtitle?: string;
    isCurrent?: boolean;
}

export interface VariousFactCardData {
    title: string;
    subtitle?: string;
    entries: VariousFactCardEntry[];
}
