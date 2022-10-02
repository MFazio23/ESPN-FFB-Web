import {useState} from "react";
import * as React from "react";
import {Card, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import SortableTableHead from "./SortableTableHead";

const SortableTable = (props) => {

    const {tableItems, headers, topTitle} = props;

    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('wins');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property)
    }

    const descendingComparator = (a, b, orderBy) => {
        return (b.find(i => i.id === orderBy)?.value || 0) - (a.find(i => i.id === orderBy)?.value || 0);
    }

    const getComparator = (order, orderBy) => order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)

    return (
        <Card>
            <Typography variant="h2" component="h2" align="center">{topTitle}</Typography>
            <TableContainer>
                <Table sx={{maxWidth: 1200, margin: '0 auto'}}>
                    <SortableTableHead headers={headers} sortOrder={order} orderBy={orderBy}
                                       onRequestSort={handleRequestSort}/>
                    <TableBody>
                        {tableItems.slice().sort(getComparator(order, orderBy)).map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {Object.values(row).map((cell, index) => (
                                    <TableCell key={index}
                                               align={headers[index]?.numeric ? 'right' : 'left'}>
                                        {Number(cell.value) ? (cell.value).toFixed(cell.digits || 0) : cell.value}
                                    </TableCell>
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