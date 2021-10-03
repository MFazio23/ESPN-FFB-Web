import * as React from 'react';
import {Paper, Table, TableBody, TableContainer, Typography} from "@mui/material";
import dataHandler from '../data/data-handler'
import RecordBookItem from "./RecordBookItem";

export default function RecordBook() {
    return (
        <TableContainer component={Paper} sx={{
            width: "fit-content",
            maxWidth: 900,
            margin: "0 auto"
        }}>
            <Typography variant="h2" component="h2" align="center">
                Fun Time Auction FFB Record Book
            </Typography>
            <Table aria-label="record-book">
                <TableBody>
                    {dataHandler.recordBook.map(recordCategory => <RecordBookItem key={recordCategory.id}
                                                                                  recordCategory={recordCategory}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}