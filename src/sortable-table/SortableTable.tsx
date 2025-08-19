import * as React from "react";
import {useState} from "react";
import {Box, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import SortableTableHead from "./SortableTableHead";
import {useNavigate} from "react-router-dom";
import type {SortableTableHeader, SortableTableItem, SortableTableRow, SortDirection} from './sortable-table-types';

interface SortableTableProps {
    tableData: SortableTableRow[];
    headers: SortableTableHeader[];
    topTitle?: string;
    cardHeader?: string;
    cardSubheader?: string;
    cardAction?: React.ReactNode;
}

const SortableTable = ({tableData, headers, topTitle, cardHeader, cardSubheader, cardAction}: SortableTableProps) => {
    const [order, setOrder] = useState<SortDirection>('desc');
    const [orderBy, setOrderBy] = useState<string>('wins');

    const navigate = useNavigate();

    const handleRequestSort = (_, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property)
    }

    const descendingComparator = (a, b, orderBy) => {
        return (b.find(i => i.id === orderBy)?.value || 0) - (a.find(i => i.id === orderBy)?.value || 0);
    }

    const getComparator = (order: SortDirection, orderBy: string) => order === 'desc'
        ? (a, b) => descendingComparator(a.tableItems, b.tableItems, orderBy)
        : (a, b) => -descendingComparator(a.tableItems, b.tableItems, orderBy)

    if (!tableData) return <Box/>

    const cellDisplay = (cell: SortableTableItem) => {
        if (cell.renderFunction) {
            return cell.renderFunction(cell)
        }
        return Number(cell.value) ?
            (cell.value as Number).toFixed(cell.digits || 0) :
            cell.value
    }

    return (
        <Card sx={{mb: 8, pb: 3}}>
            {topTitle && <Typography variant="h2" component="h2" align="center">{topTitle}</Typography>}
            {cardHeader ? <CardHeader title={cardHeader} subheader={cardSubheader} action={cardAction}/> : null}
            <TableContainer sx={{paddingTop: 3}}>
                <Table sx={{position: 'relative', maxWidth: 1200, margin: '0 auto'}}>
                    <SortableTableHead headers={headers} sortOrder={order} orderBy={orderBy}
                                       onRequestSort={handleRequestSort}/>
                    <TableBody>
                        <Box position="absolute" sx={{top: -24, right: 0}}>
                            {cardAction}
                        </Box>
                        {tableData.slice().sort(getComparator(order, orderBy)).map(row => (

                            <TableRow key={row.itemId} onClick={() => row.itemLink ? navigate(row.itemLink) : undefined}
                                      className={row.itemLink ? 'clickable-row' : ''}>
                                {row.tableItems.map((cell, index) => (
                                    <TableCell key={index}
                                               align={headers[index]?.numeric ? 'right' : 'left'}>
                                        {cellDisplay(cell)}
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
