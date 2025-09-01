import {Box, Typography} from '@mui/material';

export interface OwnerSummaryCardRowProps {
    label: string;
    value: string;
}

export function OwnerSummaryCardCell({label, value}: OwnerSummaryCardRowProps) {
    return (
        <Box display="flex" flexDirection="row" alignItems="center"
             justifyContent="space-between">
            <Typography sx={{display: 'flex', alignItems: "center"}}>{label}</Typography>
            <Typography variant="h6" sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }} title={value}>{value}</Typography>
        </Box>
    )
}
