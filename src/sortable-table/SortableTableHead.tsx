import {SortableTableHeaderProps} from "./SortableTableTypes";
import * as React from "react";
import {TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";

const SortableTableHead = (props: SortableTableHeaderProps) => {

    const {headers, orderBy, sortOrder, onRequestSort} = props;

    const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    }

    return (<TableHead>
        <TableRow>
            {headers.map((headerCell) => (
                <TableCell
                    key={headerCell.id}
                    align={headerCell.numeric ? 'right' : 'left'}
                    sortDirection={orderBy === headerCell.id ? sortOrder : false}>
                    <TableSortLabel
                        active={orderBy === headerCell.id}
                        direction={orderBy === headerCell.id ? sortOrder : 'asc'}
                        onClick={createSortHandler(headerCell.id)}>
                        {headerCell.label}
                    </TableSortLabel>
                </TableCell>
            ))}
        </TableRow>
    </TableHead>)
}

export default SortableTableHead;