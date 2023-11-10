import {Card, CardContent, Grid, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";

export default function FranchiseCard({summary}) {
    const {teamName, wins, losses, championships, eras} = summary

    const winLossText = `${wins}-${losses}`
    const championshipText = Array.from({length: championships}, () => "🏆").join("");

    return <Card sx={{width: 450}}>
        <CardContent>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Stack>
                    <Typography variant="h4">{teamName}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">{winLossText}</Typography>
                </Stack>
                <Box>
                    <Typography variant="body">{championshipText}</Typography>
                </Box>
            </Box>

            <Box mt={3}>
                {eras.map(era => <FranchiseCardRow era={era}/>)}
            </Box>

        </CardContent>
    </Card>
}

function FranchiseCardRow({era}) {
    const {teamName, startYear, endYear, owners} = era;

    const yearText = startYear === endYear ? startYear : `${startYear} - ${endYear}`;
    const ownerText = (owners || []).join(", ");
    return <Grid container alignItems="center">
        <Grid item sm={3}>
            <Typography sx={{display: 'flex', alignItems: "center"}}>{yearText}</Typography>
        </Grid>
        <Grid item alignItems="center" sm={9}>
            <Stack pl={2}>
                <Typography variant="h6" sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }} title={teamName}>{teamName}</Typography>
                <Typography variant="body2">{ownerText}</Typography>
            </Stack>
        </Grid>
    </Grid>
}
