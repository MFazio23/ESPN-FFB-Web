import {Card, CardContent, CardHeader} from "@mui/material";
import {OwnerSummaryCardCell, OwnerSummaryCardRowProps} from '@/teams/details/OwnerSummaryCardCell';
import Grid from '@mui/material/Grid';

interface OwnerSummaryCardProps {
    width: number;
    owner: Record<string, unknown>;
    standings: any;
}

export default function OwnerSummaryCard({width, owner, standings}: OwnerSummaryCardProps) {

    const seasons = standings.seasons.standardScoring
    const playoffApps = standings.playoffApps.standardScoring
    const championships = standings.championships.standardScoring
    const championshipApps = standings.championshipApps.standardScoring
    const topThreeFinishes = standings.topThreeFinishes.standardScoring
    const topFiveFinishes = standings.topFiveFinishes.standardScoring
    const wins = standings.wins.standardScoring
    const losses = standings.losses.standardScoring
    const pointsScored = standings.pointsScored.standardScoring
    const pointsAgainst = standings.pointsAgainst.standardScoring

    const ownerData: OwnerSummaryCardRowProps[] = [
        {label: "Seasons played", value: seasons},
        {label: "Playoff apps.", value: playoffApps},
        {label: "Championships", value: championships},
        {label: "Finals apps.", value: championshipApps},
        {label: "Top 3 Finishes", value: topThreeFinishes},
        {label: "Top 5 Finishes", value: topFiveFinishes},
        {label: "Total wins", value: wins},
        {label: "Total losses", value: losses},
        {label: "Points scored", value: pointsScored.toFixed(0)},
        {label: "Points against", value: pointsAgainst.toFixed(0)},
    ]

    return <Card sx={{width, p: 0, m: 0, maxWidth: '100vw'}}>
        <CardHeader title={"Summary"} subheader={`${owner.firstName} ${owner.lastName}'s league history`}/>
        <CardContent sx={{maxWidth: '100%'}}>
            <Grid container rowSpacing={2} columnSpacing={{xs: 2, md: 10}} alignItems="center">
                {
                    ownerData.map((data) => (
                        <Grid size={6}>
                            <OwnerSummaryCardCell key={data.label} label={data.label} value={data.value}/>
                        </Grid>
                    ))
                }
            </Grid>
        </CardContent>
    </Card>
}
