import Box from "@mui/material/Box";

export function WhatIfPlayoffs({playoffBracket}: { playoffBracket: unknown }) {
    return playoffBracket ? (<Box>
        {JSON.stringify(playoffBracket, null, 2)}
    </Box>) : null;
}
