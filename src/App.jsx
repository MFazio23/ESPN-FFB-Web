import * as React from 'react';
import './App.css';
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import AppRouter from './AppRouter';
import {generateTheme} from './theme';

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

export default function App() {
    const [mode, setMode] = React.useState('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [setMode],
    );

    const theme = generateTheme(mode);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppRouter/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
