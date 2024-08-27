import {Card} from "@mui/material";

import dataHandler from "../../data/data-handler";
import {useParams} from "react-router-dom";

export default function FranchiseDetails() {
    const {franchiseId} = useParams();

    const summary = dataHandler.teamSummaries.find(summary => summary.teamId === parseInt(franchiseId));

    if (!summary) {
        return <h1>Franchise not found!</h1>
    }

    return <Card sx={{width: 450, maxWidth: '100vw'}}>
        <pre>
        {JSON.stringify(summary, null, 2)}
            </pre>
    </Card>
}
