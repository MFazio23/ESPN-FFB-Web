import {Box, Typography} from "@mui/material";
import {useParams} from "react-router-dom"
import dataHandler from '../../data/data-handler';
import LineChartCard, {LineChartAxisDataType} from '../../general/LineChartCard';
import yearlyMemberWinsData from '../../data/files/charts/yearly-member-wins.json'
import yearlyMemberStandingsData from '../../data/files/charts/yearly-member-standing.json'
import Grid from '@mui/material/Grid';
import OwnerVersusTable from '../OwnerVersusTable.jsx';

export default function OwnerDetails() {
    const {ownerId} = useParams();

    const {owner, standings, vsTeamRecords} = dataHandler.getOwnerDataById(ownerId)

    const yearlyWinsData = yearlyMemberWinsData
        .find(entry => entry.chartId === `yearly-member-wins-${ownerId}`)

    const yearlyStandingData = yearlyMemberStandingsData
        .find(entry => entry.chartId === `yearly-member-standing-${ownerId}`)

    if (!owner || !standings || !yearlyWinsData) return <Box/>

    return <Box display="flex" flexDirection="column" alignItems="center" maxWidth="100vw">
        <Typography variant="h2" component="h2" align="center">{owner.firstName} {owner.lastName}</Typography>
        <Grid container my={2} spacing={2} justifyContent="center">
            <Grid>
                <LineChartCard title="Wins by year" height={250} width={500}
                               dataset={yearlyWinsData.dataset}
                               seriesData={yearlyWinsData?.seriesData}
                               xAxis={yearlyWinsData?.xAxis}
                               yAxis={yearlyWinsData?.yAxis}
                               xAxisDataType={LineChartAxisDataType.string}/>
            </Grid>
            <Grid>
                <LineChartCard title="Standing by year" height={250} width={500}
                               dataset={yearlyStandingData.dataset}
                               seriesData={yearlyStandingData?.seriesData}
                               xAxis={yearlyStandingData?.xAxis}
                               yAxis={yearlyStandingData?.yAxis}
                               xAxisDataType={LineChartAxisDataType.string}/>
            </Grid>
        </Grid>
        <OwnerVersusTable owner={owner} records={vsTeamRecords}/>
    </Box>
}
