import * as React from 'react';
import {Collapse, IconButton, Stack, TableCell, TableRow, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RecordItemLarge from "./RecordItemLarge";
import RecordBookMiniList from "./RecordBookMiniList";

export default function RecordBookItem(props) {
    const category = props.recordCategory;
    const [open, setOpen] = React.useState(false);

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
                        {/*<RecordItemLarge recordItem={category.records[0]}/>*/}
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