import * as React from 'react';
import {Box, Button, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const links = [
    {
        text:'A'
    },
    {
        text:'B'
    },
    {
        text:'C'
    },
]

export default function NavDrawer() {
    const [state, setState] = React.useState({
        left: false
    })

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({...state, left: open});
    }

    const list = () => (
        <Box
            sx={250}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {links.map((link, index) => (
                    <ListItem button key={link.text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={link.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <React.Fragment key="left">
            <Button onClick={toggleDrawer(true)}>OPen drawer</Button>
            <SwipeableDrawer
                anchor='left'
                open={state['left']}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list}
            </SwipeableDrawer>
        </React.Fragment>
    )
}