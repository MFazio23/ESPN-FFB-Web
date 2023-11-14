import {Card, CardContent, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {FranchiseCardRow} from "../FranchiseCardRow";
import dataHandler from "../../data/data-handler";
import {useParams} from "react-router-dom";

export default function FranchiseDetails() {
    const {franchiseId} = useParams();

    const summary = dataHandler.teamSummaries.find(summary => summary.teamId === parseInt(franchiseId));

    if (!summary) {
        return <h1>Franchise not found!</h1>
    }

    return <Card sx={{width: 450}}>
        <pre>
        {JSON.stringify(summary, null, 2)}
            </pre>
    </Card>
}
