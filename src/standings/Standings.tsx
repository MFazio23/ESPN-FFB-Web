import * as React from 'react';

import dataHandler from '../data/data-handler';
import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Typography
} from "@mui/material";

const standings = dataHandler.standingsList;

const standingsTableItems: Array<StandingsTableItem> = standings.map(standingsItem => ({
    playerName: standingsItem.member.fullName,
    seasons: standingsItem.seasons.standardScoring,
    wins: standingsItem.wins.standardScoring,
    losses: standingsItem.losses.standardScoring,
    pointsScored: standingsItem.pointsScored.standardScoring,
    pointsAgainst: standingsItem.pointsAgainst.standardScoring,
    championships: standingsItem.championships.standardScoring,
}));

interface StandingsTableItem {
    playerName: string,
    seasons: number,
    wins: number,
    losses: number,
    pointsScored: number,
    pointsAgainst: number,
    championships: number,
}

interface SortableTableHeaderCell {
    id: keyof StandingsTableItem;
    label: string,
    numeric: boolean;
}

const headers: readonly SortableTableHeaderCell[] = [
    {
        id: 'playerName',
        label: "Player",
        numeric: false,
    },
    {
        id: 'seasons',
        label: "#",
        numeric: true,
    },
    {
        id: 'wins',
        label: "W",
        numeric: true,
    },
    {
        id: 'losses',
        label: "L",
        numeric: true,
    },
    {
        id: 'pointsScored',
        label: "PF",
        numeric: true,
    },
    {
        id: 'pointsAgainst',
        label: "PA",
        numeric: true,
    },
    {
        id: 'championships',
        label: "🏆",
        numeric: true,
    },
]

const SortableTableHead = () => (
    <TableHead>
        <TableRow>
            {headers.map((headerCell) => (
                <TableCell
                    key={headerCell.id}
                    align={headerCell.numeric ? 'right' : 'left'}>
                    <TableSortLabel>
                        {headerCell.label}
                    </TableSortLabel>
                </TableCell>
            ))}
        </TableRow>
    </TableHead>
);

const defaultSort = (itemA: StandingsTableItem, itemB: StandingsTableItem) => itemB.wins - itemA.wins

const SortableTable = () => (
    <Card>
        <Typography variant="h2" component="h2" align="center">
            All-Time Standings
        </Typography>
        <TableContainer>
            <Table sx={{maxWidth: 900, margin: '0 auto'}}>
                <SortableTableHead/>
                <TableBody>
                    {standingsTableItems.sort(defaultSort).slice().map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {Object.values(row).map((value, index) => (
                                <TableCell key={index}
                                           align={headers[index]?.numeric ? 'right' : 'left'}>{headers[index]?.numeric ? value.toFixed(0) : value}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Card>
)

export default function Standings() {
    return <div>
        <SortableTable/>
    </div>;
}