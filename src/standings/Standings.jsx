import * as React from 'react';

import dataHandler from '../data/data-handler';

import SortableTable from "../sortable-table/SortableTable";
import {Box, Stack, Switch, Typography} from '@mui/material';

const fullStandings = dataHandler.standingsList;
const modernStandings = dataHandler.modernStandingsList;

const getStandingsData = (type) => {

    const standings = type === 'modern' ? modernStandings : fullStandings;

    const standingsTableData = standings.map(standingsItem => ({
        itemId: standingsItem.member.id,
        itemLink: `/owners/${standingsItem.member.id}`,
        tableItems: [
            {
                id: 'memberName',
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
                id: 'winPct',
                value: (standingsItem.wins.standardScoring / (standingsItem.wins.standardScoring + standingsItem.losses.standardScoring)),
                numeric: true,
                digits: 3
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
                id: 'pointsScoredPerWeek',
                value: standingsItem.pointsScored.standardScoring / (standingsItem.wins.standardScoring + standingsItem.losses.standardScoring),
                numeric: true,
                digits: 2
            },
            {
                id: 'pointsAgainstPerWeek',
                value: standingsItem.pointsAgainst.standardScoring / (standingsItem.wins.standardScoring + standingsItem.losses.standardScoring),
                numeric: true,
                digits: 2
            },
            {
                id: 'luck',
                value: standingsItem.wins.standardScoring - standingsItem.wins.topSixRankings,
                numeric: true,
                digits: 0
            },
            {
                id: 'playoffApps',
                value: standingsItem.playoffApps.standardScoring,
                numeric: true
            },
            {
                id: 'championshipApps',
                value: standingsItem.championshipApps.standardScoring,
                numeric: true
            },
            {
                id: 'championships',
                value: standingsItem.championships.standardScoring,
                renderFunction: (cell) => Array.from({length: cell.value}, () => "🏆").join(""),
                numeric: true
            }
        ]
    }));

    const headers = [
        {
            id: 'memberName',
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
            id: 'winPct',
            label: "Win %",
            numeric: true
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
            id: 'pointsScoredPerWeek',
            label: "PF/W",
            numeric: true,
        },
        {
            id: 'pointsAgainstPerWeek',
            label: "PA/W",
            numeric: true
        },
        {
            id: 'luck',
            label: "Luck",
            numeric: true,
            hintText: 'Normal wins minus Top 6 wins'
        },
        {
            id: 'playoffApps',
            label: "PL",
            numeric: true,
        },
        {
            id: 'championshipApps',
            label: "CH",
            numeric: true,
        },
        {
            id: 'championships',
            label: "",
            numeric: true,
        },
    ]

    return {
        headers,
        standingsTableData
    }
}

export default function Standings() {
    const [standingsType, setStandingsType] = React.useState('full');
    const {headers, standingsTableData} = getStandingsData(standingsType);

    const handleStandingsTypeChange = (e) => {
        setStandingsType(e.target.checked ? 'modern' : 'full');
    }

    const standingsTypeSwitch = <Stack direction="row" spacing={1} sx={{alignItems: 'center'}}>
        <Typography>Full</Typography>
        <Switch id={"standings-switch"} onChange={handleStandingsTypeChange} checked={standingsType === 'modern'}/>
        <Typography>Modern</Typography>
    </Stack>;

    return <Box>
        <SortableTable topTitle="All-Time Standings" headers={headers} tableData={standingsTableData}
                       cardAction={standingsTypeSwitch}/>
    </Box>;
}
