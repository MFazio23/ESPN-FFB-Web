import {useState} from "react";
import {getComparator, SortableTableProps, SortOrder} from "./SortableTableTypes";
import * as React from "react";
import {Card, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import SortableTableHead from "./SortableTableHead";

const SortableTable = (props: SortableTableProps) => {

    const {tableItems, headers, topTitle} = props;

    const [order, setOrder] = useState<SortOrder>('desc');
    const [orderBy, setOrderBy] = useState<string>('wins');

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property)
    }

    return (
        <Card>
            <Typography variant="h2" component="h2" align="center">{topTitle}</Typography>
            <TableContainer>
                <Table sx={{maxWidth: 900, margin: '0 auto'}}>
                    <SortableTableHead headers={headers} sortOrder={order} orderBy={orderBy}
                                       onRequestSort={handleRequestSort}/>
                    <TableBody>
                        {tableItems.slice().sort(getComparator(order, orderBy)).map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {Object.values(row).map((cell, index) => (
                                    <TableCell key={index}
                                               align={headers[index]?.numeric ? 'right' : 'left'}>{Number(cell.value) ? (cell.value as number).toFixed(0) : cell.value}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default SortableTable