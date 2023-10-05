import {Stack, Typography} from "@mui/material";
import * as React from "react";
import config from "../config";

export function RecordBookMiniListValue({recordBookType, record}) {

    const value = record.intValue ? record.value.toFixed(0) : record.value.toFixed(2);

    let dateText = record.season
    dateText += record.week ? ` W${record.week}` : ''
    dateText += record.endSeason ? ` - ${record.endSeason} W${record.endWeek}` : ''

    const labelColor = recordBookType !== 'currentYear' && record.season === config.currentYear ? "success.main" : "text.primary"

    return (
        <Stack>
            <Typography variant="h6" align="center" size="small"
                        color={labelColor}>{value}</Typography>
            <Typography variant="subtitle" align="center" size="small"
                        color={labelColor}>{dateText}</Typography>
        </Stack>
    )
}