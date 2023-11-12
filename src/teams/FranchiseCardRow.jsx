import {Grid, Stack, Typography} from "@mui/material";

export function FranchiseCardRow({era}) {
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
