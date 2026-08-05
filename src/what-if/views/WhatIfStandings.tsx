import Box from "@mui/material/Box";

export default function WhatIfStandings({standings}: { standings: unknown[] }) {
    return standings && standings.length > 0 ? (
        <Box>
            {JSON.stringify(standings)}
        </Box>
    ) : null;
}
