import {useParams} from "react-router-dom";
import dataHandler from "../data/data-handler";
import {Box, Card, CardContent, CardHeader, Typography} from "@mui/material";

export default function OwnerSummaryCard({owner, standings}) {

    const seasons = standings.seasons.standardScoring
    const wins = standings.wins.standardScoring
    const losses = standings.losses.standardScoring

    const cardSubheader = `${wins}-${losses} (${seasons} ${seasons === 1 ? "season" : "seasons"})`

    return <Box>
       Summary
    </Box>
}