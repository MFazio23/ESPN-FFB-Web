import {createTheme} from "@mui/material";
import {red} from "@mui/material/colors";

export const generateTheme = (mode) => createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#1D7226',
                },
                secondary: {
                    main: '#6DBB75',
                },
                error: {
                    main: red.A400,
                },
                background: {
                    default: '#F7F0F0',
                    paper: '#FCF5F5'
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#1D7226',
                },
                secondary: {
                    main: '#6DBB75',
                },
                error: {
                    main: red.A400,
                },
            },
        },
    }
});
