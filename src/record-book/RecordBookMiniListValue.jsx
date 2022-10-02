import {Stack, Typography} from "@mui/material";
import * as React from "react";

export function RecordBookMiniListValue(props) {
    const record = props.record;

    const value = record.intValue ? record.value.toFixed(0) : record.value.toFixed(2);

    return (
        <Stack>
            <Typography variant="h6" align="center"
                        size="small">{value}</Typography>
            <Typography variant="subtitle" align="center"
                        size="small">{`${record.season}${record.week ? ` W${record.week}` : ''}`}</Typography>
        </Stack>
    )
}