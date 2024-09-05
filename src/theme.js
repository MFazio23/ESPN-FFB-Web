import {createTheme} from "@mui/material";
import {red} from "@mui/material/colors";

export const generateTheme = (mode) => createTheme({
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
        mode: mode
    },
});
