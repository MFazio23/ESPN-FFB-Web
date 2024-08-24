import * as React from "react";
import {useState} from "react";
import {Box, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import SortableTableHead from "./SortableTableHead";
import {useNavigate} from "react-router-dom";

interface SortableTableProps {
    tableData: any;
    headers: any;
    topTitle: string;
    cardHeader: string;
    cardSubheader: string;
}

const SortableTable = ({tableData, headers, topTitle, cardHeader, cardSubheader}: SortableTableProps) => {
    const [order, setOrder] = useState<'asc' | 'desc'>('desc');
    const [orderBy, setOrderBy] = useState('wins');

    const navigate = useNavigate();

    const handleRequestSort = (_, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property)
    }

    const descendingComparator = (a, b, orderBy) => {
        return (b.find(i => i.id === orderBy)?.value || 0) - (a.find(i => i.id === orderBy)?.value || 0);
    }

    const getComparator = (order, orderBy) => order === 'desc'
        ? (a, b) => descendingComparator(a.tableItems, b.tableItems, orderBy)
        : (a, b) => -descendingComparator(a.tableItems, b.tableItems, orderBy)

    if (!tableData) return <Box/>

    const cellDisplay = (cell) => {
        if (cell.renderFunction) {
            return cell.renderFunction(cell)
        }
        return cell.value === 0 || Number(cell.value) ?
            (cell.value).toFixed(cell.digits || 0) :
            cell.value
    }

    return (
        <Card sx={{mx: 3, mb: 8, pb: 3}}>
            {topTitle && <Typography variant="h2" component="h2" align="center">{topTitle}</Typography>}
            {cardHeader && <CardHeader title={cardHeader} subheader={cardSubheader}/>}
            <TableContainer>
                <Table sx={{maxWidth: 1200, margin: '0 auto'}}>
                    <SortableTableHead headers={headers} sortOrder={order} orderBy={orderBy}
                                       onRequestSort={handleRequestSort}/>
                    <TableBody>
                        {tableData.slice().sort(getComparator(order, orderBy)).map(row => (

                            <TableRow key={row.itemId} onClick={() => navigate(row.itemLink)}
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
