import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
    isDrawerOpen: boolean,
    toggleDrawer: (b: boolean) => ((event: React.MouseEvent) => void)
}

export default class TopAppBar extends React.Component<Props, {}> {
    render() {
        return (
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={this.props.toggleDrawer(!this.props.isDrawerOpen)}
                            sx={{mr: 2}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Fun Time Auction FFB History
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}