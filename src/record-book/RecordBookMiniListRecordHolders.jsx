import {Stack, Typography} from "@mui/material";
import * as React from "react";

export function RecordBookMiniListRecordHolders(props) {
    const record = props.record;

    const allRecordHolders = record.recordHolders.map(recordHolder => {
        const teamFullName = recordHolder.team?.fullName;
        const recordHolderValue =
            (record.recordHolders.length > 1 ? `(${recordHolder.total.toFixed(2)})` : '');
        return `${teamFullName} ${recordHolderValue}`;
    }).join(" vs. ")

    return (
        <Stack>
            <Typography variant="h6">{allRecordHolders}</Typography>
            <Typography variant="body2">
                {record.recordHolders.map(recordHolder =>
                    recordHolder.team?.owners.map(owner => `${owner?.firstName} ${owner?.lastName}`).join(", ")
                ).join(" vs. ")}
            </Typography>
        </Stack>
    )
}