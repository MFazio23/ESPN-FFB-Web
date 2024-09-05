import Grid from "@mui/material/Grid2";
import ErasCard from "./ErasCard";
import dataHandler from "../data/data-handler";

export default function Franchises() {
    const summaries = dataHandler.teamSummaries.sort((a, b) => b.championships - a.championships || b.wins - a.wins);
    return <Grid container spacing={2} my={3} justifyContent='center'>
        {summaries.map(franchiseSummary => (
            <Grid size="auto" key={`franchiseSummary-${franchiseSummary.id}`}>
                <ErasCard key={`${franchiseSummary.id}card`} summary={franchiseSummary}/>
            </Grid>
        ))}
    </Grid>
}
