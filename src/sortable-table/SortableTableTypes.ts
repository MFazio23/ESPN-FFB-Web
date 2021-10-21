import * as React from "react";

interface SortableTableHeaderCell {
    id: string;
    label: string,
    numeric: boolean;
}

interface SortableTableDataCell {
    id: string
    value: string | number | boolean
    numeric: boolean
    digits?: number
}

interface SortableTableProps {
    topTitle: string,
    headers: readonly SortableTableHeaderCell[],
    tableItems: readonly SortableTableDataCell[][]
}

interface SortableTableHeaderProps {
    headers: readonly SortableTableHeaderCell[],
    sortOrder: SortOrder,
    orderBy: string,
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void
}

type SortOrder = 'asc' | 'desc';

function descendingComparator(a: SortableTableDataCell[], b: SortableTableDataCell[], orderBy: string) {
    return (b.find(i => i.id === orderBy)?.value as number || 0) - (a.find(i => i.id === orderBy)?.value as number || 0);
}

function getComparator(
    order: SortOrder,
    orderBy: string,
): (
    a: SortableTableDataCell[],
    b: SortableTableDataCell[],
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export type {
    SortableTableHeaderCell,
    SortableTableDataCell,
    SortableTableProps,
    SortableTableHeaderProps,
    SortOrder
}

export {
    getComparator
}