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
                Record Book
            </Typography>
            <Table aria-label="record-book">
                <TableBody>
                    {dataHandler
                        .recordBook.standard
                        .sort((bookA, bookB) => bookA.order - bookB.order)
                        .map(recordCategory => <RecordBookItem key={recordCategory.id}
                                                               recordCategory={recordCategory}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}