import {Stack, Typography} from "@mui/material";
import * as React from "react";

export function RecordBookMiniListValue(props) {
    const record = props.record;

    const value = record.intValue ? record.value.toFixed(0) : record.value.toFixed(2);

    let dateText = record.season
    dateText += record.week ? ` W${record.week}` : ''
    dateText += record.endSeason ? ` - ${record.endSeason} W${record.endWeek}` : ''

    return (
        <Stack>
            <Typography variant="h6" align="center"
                        size="small">{value}</Typography>
            <Typography variant="subtitle" align="center"
                        size="small">{dateText}</Typography>
        </Stack>
    )
}