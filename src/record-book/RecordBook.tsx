import * as React from 'react';
import {useState} from 'react';
import {Paper, Tab, Table, TableBody, TableCell, TableContainer, TableRow, Tabs, Typography} from "@mui/material";
import dataHandler from '../data/data-handler'
import RecordBookItem from "./RecordBookItem";

interface RecordBookRecord {
    id: string;
    order: number;
    records: unknown[];
    title: string;
    withPlayoffs: boolean;
    sortAscending: boolean;
}

export default function RecordBook() {
    const [recordBookType, setRecordBookType] = useState("modern");

    const recordBookData = dataHandler.recordBook

    const latestWeek = recordBookData.latestWeek;

    const recordBook: RecordBookRecord[] = recordBookData[recordBookType];

    const records = recordBook.every(record => record.records.length === 0) ?
        (<React.Fragment>
            <TableRow>
                <TableCell>
                    <Typography variant="h4" align="center">
                        No records currently, check back later.
                    </Typography>
                </TableCell>
            </TableRow>
        </React.Fragment>) :
        (
            recordBook
                .sort((bookA, bookB) => bookA.order - bookB.order)
                .map(recordCategory => <RecordBookItem key={recordCategory.id} recordBookType={recordBookType}
                                                       recordCategory={recordCategory} latestWeek={latestWeek}/>)
        );

    return recordBook && (
        <TableContainer component={Paper} sx={{
            width: "fit-content",
            maxWidth: '100vw',
            margin: "0 auto",
        }}>
            <Typography variant="h2" component="h2" align="center">
                Record Book
            </Typography>
            <Tabs
                value={recordBookType}
                onChange={(e, newValue) => setRecordBookType(newValue)}
                variant="fullWidth"
            >
                <Tab label="Standard" value="standard"/>
                <Tab label="Modern" value="modern"/>
                <Tab label="Current Year" value="currentYear" wrapped={true}/>
                <Tab label="Best Ball" value="bestBall" wrapped={true}/>
                <Tab label="Current Year (BB)" value="currentYearBestBall" wrapped={true}/>
            </Tabs>
            <Table aria-label="record-book">
                <TableBody>
                    {records}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
