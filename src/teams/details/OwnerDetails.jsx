import {Box, Typography} from "@mui/material";
import {useParams} from "react-router-dom"
import dataHandler from '../../data/data-handler';
import LineChartCard, {LineChartAxisDataType} from '../../general/LineChartCard';
import yearlyMemberWinsData from '../../data/files/charts/yearly-member-wins.json'
import yearlyMemberStandingsData from '../../data/files/charts/yearly-member-standing.json'
import yearlyMemberPointsData from '../../data/files/charts/yearly-member-points.json'
import yearlyMemberPointsPlusData from '../../data/files/charts/yearly-member-points-plus.json'
import Grid from '@mui/material/Grid';
import OwnerVersusTable from '../OwnerVersusTable.jsx';

export default function OwnerDetails() {
    const {ownerId} = useParams();

    const {owner, standings, vsTeamRecords} = dataHandler.getOwnerDataById(ownerId)

    const yearlyWinsData = yearlyMemberWinsData
        .find(entry => entry.chartId === `yearly-member-wins-${ownerId}`)

    const yearlyStandingData = yearlyMemberStandingsData
        .find(entry => entry.chartId === `yearly-member-standing-${ownerId}`)

    const yearlyPointsData = yearlyMemberPointsData
        .find(entry => entry.chartId === `yearly-member-points-${ownerId}`)

    const yearlyPointsPlusData = yearlyMemberPointsPlusData
        .find(entry => entry.chartId === `yearly-member-points-plus-${ownerId}`)

    if (!owner || !standings || !yearlyWinsData) return <Box/>

    return <Box display="flex" flexDirection="column" alignItems="center" maxWidth="100vw">
        <Typography variant="h2" component="h2" align="center">{owner.firstName} {owner.lastName}</Typography>
        <Grid container my={2} spacing={2} justifyContent="center">
            <Grid>
                <LineChartCard title="Wins by year" width={500}
                               dataset={yearlyWinsData.dataset}
                               seriesData={yearlyWinsData?.seriesData}
                               xAxis={yearlyWinsData?.xAxis}
                               yAxis={yearlyWinsData?.yAxis}
                               xAxisDataType={LineChartAxisDataType.string}/>
            </Grid>
            <Grid>
                <LineChartCard title="Standing by year" width={500}
                               dataset={yearlyStandingData.dataset}
                               seriesData={yearlyStandingData?.seriesData}
                               xAxis={yearlyStandingData?.xAxis}
                               yAxis={yearlyStandingData?.yAxis}
                               xAxisDataType={LineChartAxisDataType.string}/>
            </Grid>
            <Grid>
                <LineChartCard title="Points by year" width={500}
                               dataset={yearlyPointsData.dataset}
                               seriesData={yearlyPointsData?.seriesData}
                               xAxis={yearlyPointsData?.xAxis}
                               yAxis={yearlyPointsData?.yAxis}
                               xAxisDataType={LineChartAxisDataType.string}/>
            </Grid>
            <Grid>
                <LineChartCard title="Points+ by year" subtitle="100 is league average" width={500}
                               dataset={yearlyPointsPlusData.dataset}
                               seriesData={yearlyPointsPlusData?.seriesData}
                               xAxis={yearlyPointsPlusData?.xAxis}
                               yAxis={yearlyPointsPlusData?.yAxis}
                               xAxisDataType={LineChartAxisDataType.string}/>
            </Grid>
        </Grid>
        <OwnerVersusTable owner={owner} records={vsTeamRecords}/>
    </Box>
}
