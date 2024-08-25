import {Grid, Stack, Typography} from "@mui/material";
import {Era} from './ErasCard';

interface ErasCardRowProps {
    era: Era;
}

export function ErasCardRow({era}: ErasCardRowProps) {
    const {title, subtitle, startYear, endYear} = era;
    const yearText = startYear === endYear ? startYear : `${startYear} - ${endYear}`;
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
                }} title={title}>{title}</Typography>
                <Typography variant="body2">{subtitle}</Typography>
            </Stack>
        </Grid>
    </Grid>
}
