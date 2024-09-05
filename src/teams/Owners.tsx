import Grid from "@mui/material/Grid2";
import ErasCard from "./ErasCard";
import dataHandler from "../data/data-handler";

export default function Owners() {
    const summaries = dataHandler.ownerSummaries.sort((a, b) => b.championships - a.championships || b.wins - a.wins);
    return <Grid container spacing={2} my={3} justifyContent='center'>
        {summaries.map(ownerSummary => (
            <Grid size="auto" key={`ownerSummary-${ownerSummary.id}`}>
                <ErasCard key={`${ownerSummary.id}card`} summary={ownerSummary}/>
            </Grid>
        ))}
    </Grid>
}
