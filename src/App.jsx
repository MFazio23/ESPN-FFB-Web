import * as React from 'react';
import './App.css';
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import AppRouter from './AppRouter';
import {generateTheme} from './theme';

export default function App() {
    const theme = generateTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppRouter/>
        </ThemeProvider>
    );
}
