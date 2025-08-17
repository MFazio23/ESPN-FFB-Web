import * as React from 'react';
import {Collapse, IconButton, Stack, TableCell, TableRow, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RecordBookMiniList from "./RecordBookMiniList";

export default function RecordBookItem({recordCategory, recordBookType, latestWeek}) {
    const [open, setOpen] = React.useState(false);

    if (recordCategory.records.length <= 0) return (<React.Fragment/>);

    return (
        <React.Fragment>
            <TableRow
                onClick={() => setOpen(!open)}
                sx={{cursor: 'pointer'}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small">
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Stack>
                        <Typography variant="h4" component="h4">
                            {recordCategory.title}
                        </Typography>
                        <Typography variant="caption">
                            {recordCategory.subtitle}
                            {recordCategory.subtitle ? ' ' : ''}
                            {(recordCategory.withPlayoffs ? '+ playoffs' : '')}
                        </Typography>
                    </Stack>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <RecordBookMiniList recordBookType={recordBookType} records={recordCategory.records}
                                            sortAscending={recordCategory.sortAscending} latestWeek={latestWeek}/>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}
