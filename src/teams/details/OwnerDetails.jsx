import {Box, Typography} from "@mui/material";
import {useParams} from "react-router-dom"
import dataHandler from '../../data/data-handler';
import OwnerVersusTable from "../OwnerVersusTable";

export default function OwnerDetails() {
    const {ownerId} = useParams();

    const {owner, standings, vsTeamRecords} = dataHandler.getOwnerDataById(ownerId)

    if (!owner || !standings) return <Box />

    return <Box>
        <Typography variant="h2" component="h2" align="center">{owner.firstName} {owner.lastName}</Typography>
        <OwnerVersusTable owner={owner} records={vsTeamRecords} />
    </Box>
}
