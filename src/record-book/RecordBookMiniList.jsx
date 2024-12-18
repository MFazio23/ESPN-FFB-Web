import * as React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {RecordBookMiniListRecordHolders} from "./RecordBookMiniListRecordHolders";
import {RecordBookMiniListValue} from "./RecordBookMiniListValue";

const getRecordKey = (record) => `${record.season}-${record.week}-${record.recordHolders[0]?.teamId}`

export default function RecordBookMiniList({recordBookType, records, sortAscending, latestWeek}) {
    return <TableContainer component={Paper}>
        <Table aria-label="record-book" size="small">
            <TableBody>
                {records.map(record => (
                    <TableRow key={getRecordKey(record)}>
                        <TableCell width={100}>
                            <RecordBookMiniListValue recordBookType={recordBookType} record={record}
                                                     latestWeek={latestWeek}/>
                        </TableCell>
                        <TableCell>
                            <RecordBookMiniListRecordHolders record={record} sortAscending={sortAscending}/>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}
