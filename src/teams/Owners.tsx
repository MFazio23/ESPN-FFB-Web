import Grid from "@mui/material/Grid";
import ErasCard from "@/teams/ErasCard";
// @ts-ignore
import dataHandler from "../data/data-handler";

export default function Owners() {
    // @ts-ignore
    const summaries = dataHandler.ownerSummaries.sort((a, b) => b.championships - a.championships || b.wins - a.wins) as any[];
    return <Grid container spacing={2} my={3} justifyContent='center'>
        {summaries.map(ownerSummary => (
            <Grid size="auto" key={`ownerSummary-${ownerSummary.id}`}>
                <ErasCard key={`${ownerSummary.id}card`} cardLink={`/owners/${ownerSummary.id}`}
                          summary={ownerSummary}/>
            </Grid>
        ))}
    </Grid>
}
