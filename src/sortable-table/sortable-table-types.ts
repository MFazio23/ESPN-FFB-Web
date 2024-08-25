export interface SortableTableRow {
    itemId: string;
    itemLink?: string;
    tableItems: SortableTableItem[];
}

export interface SortableTableItem {
    id: string;
    value: string | number;
    renderFunction?: (cell: SortableTableItem) => string;
    numeric?: boolean;
}

export interface SortableTableHeader {
    id: string;
    label: string;
    numeric?: boolean;
    hintText?: string;
}

export type SortDirection = 'asc' | 'desc';
