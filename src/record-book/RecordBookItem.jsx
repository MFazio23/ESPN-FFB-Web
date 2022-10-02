import * as React from 'react';
import {Collapse, IconButton, Stack, TableCell, TableRow, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RecordBookMiniList from "./RecordBookMiniList";

export default function RecordBookItem(props) {
    const category = props.recordCategory;
    const [open, setOpen] = React.useState(false);

    if (category.records.length <= 0) return "";

    return (
        <React.Fragment>
            <TableRow
                onClick={() => setOpen(!open)}
                sx={{ cursor: 'pointer' }}>
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
                            {category.title}
                        </Typography>
                        <Typography variant="caption">
                            {(category.withPlayoffs ? '+ playoffs' : '')}
                        </Typography>
                    </Stack>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <RecordBookMiniList records={category.records}/>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}