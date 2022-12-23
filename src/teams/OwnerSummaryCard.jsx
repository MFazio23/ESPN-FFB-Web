import {Box} from "@mui/material";

export default function OwnerSummaryCard({owner, standings}) {

    const seasons = standings.seasons.standardScoring
    const wins = standings.wins.standardScoring
    const losses = standings.losses.standardScoring

    console.log(owner)

    const cardSubheader = `${wins}-${losses} (${seasons} ${seasons === 1 ? "season" : "seasons"})`

    return <Box>
        {cardSubheader}
    </Box>
}