import {Stack, Typography} from "@mui/material";
import * as React from "react";

export function RecordBookMiniListRecordHolders({record, sortAscending}) {
    const allRecordHolders = record.recordHolders
        .sort((a, b) => sortAscending ? a.total - b.total : b.total - a.total)
        .map(recordHolder => {
            const teamFullName = recordHolder.team?.fullName ?? recordHolder.team?.name ?? "N/A";
            console.log("recordHolder", recordHolder);
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
