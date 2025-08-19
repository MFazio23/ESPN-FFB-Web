import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import {StyledEngineProvider} from '@mui/material/styles';
import {GlobalStyles} from '@mui/material';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <StyledEngineProvider enableCssLayer>
            <GlobalStyles styles="@layer theme, base, mui, components, utilities;"/>
            <App/>
        </StyledEngineProvider>
    </React.StrictMode>
);
