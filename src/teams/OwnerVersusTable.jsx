import {Box} from "@mui/material";
import SortableTable from "../sortable-table/SortableTable";

export default function OwnerVersusTable({records}) {

    console.log("Records", records)

    const versusTableData = records.map(({team, records}) => ({
        itemId: team.id,
        tableItems: [
            {
                id: 'teamName',
                value: team.fullName,
                numeric: false
            },
            {
                id: 'games',
                value: records.games,
                numeric: true
            },
            {
                id: 'wins',
                value: records.wins,
                numeric: true
            },
            {
                id: 'losses',
                value: records.losses,
                numeric: true
            },
            {
                id: 'winPct',
                value: records.wins / (records.wins + records.losses) || 0,
                numeric: true,
                digits: 3
            },
            {
                id: 'pointsFor',
                value: records.pointsFor,
                numeric: true,
                digits: 1
            },
            {
                id: 'pointsAgainst',
                value: records.pointsAgainst,
                numeric: true,
                digits: 1
            },
            {
                id: 'avgPointsFor',
                value: records.averagePointsFor,
                numeric: true,
                digits: 1
            },
            {
                id: 'avgPointsAgainst',
                value: records.averagePointsAgainst,
                numeric: true,
                digits: 1
            },
            {
                id: 'playoffGames',
                value: records.playoffWins + records.playoffLosses,
                numeric: true
            },
            {
                id: 'playoffWins',
                value: records.playoffWins,
                numeric: true
            },
            {
                id: 'playoffLosses',
                value: records.playoffLosses,
                numeric: true
            },
            {
                id: 'playoffWinPct',
                value: records.playoffWins / (records.playoffWins + records.playoffLosses) || 0,
                numeric: true,
                digits: 3
            },
            {
                id: 'playoffPointsFor',
                value: records.playoffPointsFor,
                numeric: true,
                digits: 1
            },
            {
                id: 'playoffPointsAgainst',
                value: records.playoffPointsAgainst,
                numeric: true,
                digits: 1
            },
            {
                id: 'avgPlayoffPointsFor',
                value: records.averagePlayoffPointsFor,
                numeric: true,
                digits: 1
            },
            {
                id: 'avgPlayoffPointsAgainst',
                value: records.averagePlayoffPointsAgainst,
                numeric: true,
                digits: 1
            },
        ]
    }))

    const headers = [
        {
            id: 'teamName',
            label: "Opposing Team",
            numeric: false,
        },
        {
            id: 'games',
            label: "Games",
            numeric: true,
        },
        {
            id: 'wins',
            label: "W",
            numeric: true
        },
        {
            id: 'losses',
            label: "L",
            numeric: true
        },
        {
            id: 'winPct',
            label: "Win%",
            numeric: true,
            digits: 3
        },
        {
            id: 'pointsFor',
            label: "PF",
            numeric: true,
            digits: 1
        },
        {
            id: 'pointsAgainst',
            label: "PA",
            numeric: true,
            digits: 1
        },
        {
            id: 'avgPointsFor',
            label: "PF/G",
            numeric: true,
            digits: 1
        },
        {
            id: 'avgPointsAgainst',
            label: "PA/G",
            numeric: true,
            digits: 1
        },
        {
            id: 'playoffGames',
            label: "PO G",
            numeric: true
        },
        {
            id: 'playoffWins',
            label: "PO W",
            numeric: true
        },
        {
            id: 'playoffLosses',
            label: "PO L",
            numeric: true
        },
        {
            id: 'playoffWinPct',
            label: "PO W%",
            numeric: true,
            digits: 3
        },
        {
            id: 'playoffPointsFor',
            label: "PO PF",
            numeric: true,
            digits: 1
        },
        {
            id: 'playoffPointsAgainst',
            label: "PO PA",
            numeric: true,
            digits: 1
        },
        {
            id: 'avgPlayoffPointsFor',
            label: "PO PF/G",
            numeric: true,
            digits: 1
        },
        {
            id: 'avgPlayoffPointsAgainst',
            label: "PO PA/G",
            numeric: true,
            digits: 1
        },
    ]

    return <Box>
        <SortableTable cardHeader="Versus opposing teams" headers={headers} tableData={versusTableData}/>
    </Box>
}