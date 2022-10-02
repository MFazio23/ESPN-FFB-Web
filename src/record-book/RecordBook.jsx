import * as React from 'react';
import {Paper, Tab, Table, TableBody, TableContainer, Tabs, Typography} from "@mui/material";
import dataHandler from '../data/data-handler'
import RecordBookItem from "./RecordBookItem";
import {useState} from "react";

export default function RecordBook() {
    const [recordBookType, setRecordBookType] = useState("standard");

    const recordBook = dataHandler.recordBook[recordBookType];

    return (
        <TableContainer component={Paper} sx={{
            width: "fit-content",
            maxWidth: 900,
            margin: "0 auto"
        }}>
            <Typography variant="h2" component="h2" align="center">
                Record Book
            </Typography>
            <Tabs
                value={recordBookType}
                onChange={(e, newValue) => setRecordBookType(newValue)}
                variant="fullWidth"
            >
                <Tab label="Standard" value="standard" />
                <Tab label="Modern" value="modern"/>
                <Tab label="Best Ball" value="bestBall" />
            </Tabs>
            <Table aria-label="record-book">
                <TableBody>
                    {recordBook
                        .sort((bookA, bookB) => bookA.order - bookB.order)
                        .map(recordCategory => <RecordBookItem key={recordCategory.id}
                                                               recordCategory={recordCategory}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}