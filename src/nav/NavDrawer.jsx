import * as React from 'react';
import {Box, List, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer} from "@mui/material";
import {FormatListNumbered, Home, MenuBook, Person, SportsFootball} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import Links from "./Links"

const links = [
    {
        text: 'Home',
        url: '',
        icon: <Home/>
    },
    {
        text: 'Record Book',
        url: Links.recordBook,
        icon: <MenuBook/>
    },
    {
        text: 'All-Time Standings',
        url: Links.standings,
        icon: <FormatListNumbered/>
    },
    {
        text: 'Franchises',
        url: Links.franchises,
        icon: <SportsFootball/>
    },
    {
        text: 'Team Owners',
        url: Links.owners,
        icon: <Person/>
    },
]

export default function NavDrawer(props) {
    const list = () => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={props.toggleDrawer(false)}
            onKeyDown={props.toggleDrawer(false)}>
            <nav>
                <List>
                    {links.map((link, index) => (
                        <ListItemButton key={link.text} component={NavLink} to={`${link.url}`}>
                            <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.text}/>
                        </ListItemButton>
                    ))}
                </List>
            </nav>
        </Box>
    )

    return (
        <React.Fragment key="left">
            <SwipeableDrawer
                anchor='left'
                open={props.isDrawerOpen}
                onClose={props.toggleDrawer(false)}
                onOpen={props.toggleDrawer(true)}>
                {list()}
            </SwipeableDrawer>
        </React.Fragment>
    )
}