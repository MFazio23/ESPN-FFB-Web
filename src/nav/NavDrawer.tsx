import * as React from 'react';
import {Box, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer} from "@mui/material";
import {FormatListNumbered, Home, MenuBook} from "@mui/icons-material";
import Links from '../constants/links';
import NavDrawerLink from "./NavDrawerLink";
import {NavLink} from "react-router-dom";

interface Props {
    isDrawerOpen: boolean,
    toggleDrawer: (b: boolean) => ((event: React.SyntheticEvent) => void)
}

const links: Array<NavDrawerLink> = [
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
]

export default function NavDrawer(props: Props) {
    const list = () => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={props.toggleDrawer(false)}
            onKeyDown={props.toggleDrawer(false)}>
            <nav>
                <List>
                    {links.map((link, index) => (
                        <ListItem button key={link.text} component={NavLink} to={`${link.url}`}>
                            <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.text}/>
                        </ListItem>
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