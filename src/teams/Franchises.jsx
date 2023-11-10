import {Grid} from "@mui/material";
import FranchiseCard from "./FranchiseCard";
import dataHandler from "../data/data-handler";

export default function Franchises() {
    const summaries = dataHandler.teamSummaries.sort((a, b) => b.championships - a.championships || b.wins - a.wins)
    return <Grid container spacing={2} mt={3} justifyContent='center'>
        {summaries.map(franchiseSummary => (
            <Grid item xs="auto" key={franchiseSummary.id}>
                <FranchiseCard summary={franchiseSummary}/>
            </Grid>
        ))}
    </Grid>
}
