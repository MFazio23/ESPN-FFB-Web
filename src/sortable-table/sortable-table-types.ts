interface SortableTableItem {
    id: string;
    value: string | number;
    renderFunction?: (cell: SortableTableItem) => string;
    numeric?: boolean;
}

interface SortableTableHeader {
    id: string;
    label: string;
    numeric?: boolean;
}
