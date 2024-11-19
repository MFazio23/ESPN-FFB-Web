import {Stack, Typography} from "@mui/material";
import * as React from "react";
import config from "../config";

export function RecordBookMiniListValue({recordBookType, record, latestWeek}) {

    const value = record.intValue ? record.value.toFixed(0) : record.value.toFixed(2);

    let dateText = record.season
    dateText += record.week ? ` W${record.week}` : ''
    dateText += record.endSeason ? ` - ${record.endSeason} W${record.endWeek}` : ''

    const isCurrentYearRecordBook = ['currentYear', 'currentYearBestBall'].includes(recordBookType);

    const isCurrentYearBookAndLatestWeek = isCurrentYearRecordBook && record.week === latestWeek;
    const isCurrentYearWeek = !isCurrentYearRecordBook && record.season === config.currentYear;

    const labelColor = (isCurrentYearBookAndLatestWeek || isCurrentYearWeek) ? "success.main" : "text.primary";

    return (
        <Stack>
            <Typography variant="h6" align="center" size="small"
                        color={labelColor}>{value}</Typography>
            <Typography variant="subtitle" align="center" size="small"
                        color={labelColor}>{dateText}</Typography>
        </Stack>
    )
}
