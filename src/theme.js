import {createTheme} from "@mui/material";
import {red} from "@mui/material/colors";

const theme = createTheme({
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
        mode: "dark"
    },
});

export default theme;