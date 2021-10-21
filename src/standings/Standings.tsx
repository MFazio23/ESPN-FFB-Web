import * as React from 'react';

import dataHandler from '../data/data-handler';

import {
    SortableTableDataCell,
    SortableTableHeaderCell,
} from "../sortable-table/SortableTableTypes";
import SortableTable from "../sortable-table/SortableTable";

const standings = dataHandler.standingsList;

const standingsTableItems: Array<SortableTableDataCell[]> = standings.map(standingsItem => [
    {
        id: 'playerName',
        value: standingsItem.member.fullName,
        numeric: false
    },
    {
        id: 'seasons',
        value: standingsItem.seasons.standardScoring,
        numeric: true
    },
    {
        id: 'wins',
        value: standingsItem.wins.standardScoring,
        numeric: true
    },
    {
        id: 'losses',
        value: standingsItem.losses.standardScoring,
        numeric: true
    },
    {
        id: 'pointsScored',
        value: standingsItem.pointsScored.standardScoring,
        numeric: true
    },
    {
        id: 'pointsAgainst',
        value: standingsItem.pointsAgainst.standardScoring,
        numeric: true
    },
    {
        id: 'championships',
        value: standingsItem.championships.standardScoring,
        numeric: true
    },
]);

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

export default function Standings() {
    return <div>
        <SortableTable topTitle="All-Time Standings" headers={headers} tableItems={standingsTableItems} />
    </div>;
}