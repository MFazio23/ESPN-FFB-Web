import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import {Link} from "react-router-dom";
import Links from "./Links";

export default function TopAppBar(props) {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={props.toggleDrawer(!props.isDrawerOpen)}
                        sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        component={Link}
                        to={Links.home}
                        sx={{mr: 2}}>
                        <SportsFootballIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Fun Time Auction FFB History
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
