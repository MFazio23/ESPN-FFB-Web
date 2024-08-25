import {Grid} from "@mui/material";
import ErasCard from "./ErasCard";
import dataHandler from "../data/data-handler";

export default function Owners() {
    const summaries = dataHandler.ownerSummaries.sort((a, b) => b.championships - a.championships || b.wins - a.wins);
    return <Grid container spacing={2} mt={3} justifyContent='center'>
        {summaries.map(ownerSummary => (
            <Grid item xs="auto" key={`ownerSummary-${ownerSummary.id}`}>
                <ErasCard key={`${ownerSummary.id}card`} summary={ownerSummary}/>
            </Grid>
        ))}
    </Grid>
}
