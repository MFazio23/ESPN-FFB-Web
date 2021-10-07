import * as React from "react";
import {Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";

const getRecordKey = (record) => `${record.season}-${record.week}-${record.recordHolders[0].teamId}`;

export default function RecordBookMiniList(props) {
    const records = props.records;

    return <TableContainer component={Paper}>
        <Table aria-label="record-book" size="small">
            <TableBody>
                {records.map(record => {
                    return (
                        <TableRow key={getRecordKey(record)}>
                            <TableCell width={100}>
                                <Stack>
                                    <Typography variant="h6" align="center" size="small">{record.value.toFixed(2)}</Typography>
                                    <Typography variant="subtitle" align="center" size="small">{`${record.season}${record.week ? ` W${record.week}` : ''}`}</Typography>
                                </Stack>
                            </TableCell>
                            <TableCell>
                                <Stack>
                                    <Typography variant="h6">
                                        {record.recordHolders.map(recordHolder => `${recordHolder.team?.fullName} ${(record.recordHolders.length > 1 ? `(${recordHolder.total})` : '')}`).join(" vs. ")}
                                    </Typography>
                                    <Typography variant="body2">
                                        {record.recordHolders.map(recordHolder =>
                                            recordHolder.team?.owners.map(owner => `${owner?.firstName} ${owner?.lastName}`).join(", ")
                                        ).join(" vs. ")}
                                    </Typography>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableContainer>
}