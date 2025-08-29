import {Box, Typography} from "@mui/material";
import {useParams} from "react-router-dom"
import dataHandler from '../../data/data-handler';
import OwnerVersusTable from "../OwnerVersusTable";
import LineChartCard from '../../general/LineChartCard';

export default function OwnerDetails() {
    const {ownerId} = useParams();

    const {owner, standings, vsTeamRecords} = dataHandler.getOwnerDataById(ownerId)

    if (!owner || !standings) return <Box/>

    return <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" component="h2" align="center">{owner.firstName} {owner.lastName}</Typography>
        <Box my={2}>
            <LineChartCard title="Wins by year" width={500}/>
        </Box>
        <OwnerVersusTable owner={owner} records={vsTeamRecords}/>
    </Box>
}
