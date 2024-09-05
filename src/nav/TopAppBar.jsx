import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import {Link} from "react-router-dom";
import Links from "./Links";
import {useColorScheme, useTheme} from '@mui/material';

export default function TopAppBar(props) {
    const theme = useTheme();

    const {mode, setMode} = useColorScheme();

    const toggleColorMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    return (
        <AppBar position="sticky">
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
                    aria-label="home link with title"
                    disableRipple
                    component={Link}
                    sx={{mr: 'auto'}}
                    to={Links.home}>
                    <SportsFootballIcon sx={{mr: 1}}/>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Fun Time Auction FFB
                    </Typography>
                </IconButton>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="mode"
                    sx={{ml: 1}}
                    title={`Change to ${theme.palette.mode === 'dark' ? `light` : 'dark'} mode`}
                    onClick={toggleColorMode}>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
