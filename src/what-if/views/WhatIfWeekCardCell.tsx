import {Stack, Typography} from '@mui/material';
import {MatchupResult, WhatIfScoringType} from '../WhatIfTypes';

interface WhatIfWeekCardCellProps {
    teamEntry: MatchupResult;
    scoringType: WhatIfScoringType;
}

export default function WhatIfWeekCardCell({teamEntry, scoringType}: WhatIfWeekCardCellProps) {
    const score = scoringType === WhatIfScoringType.Standard ? teamEntry.standardScore : teamEntry.bestBallScore;
    return (
        <Stack direction="column" spacing={1}>
            <Typography variant="h6">{teamEntry.teamName}</Typography>
            <Typography variant="caption">{score}</Typography>
        </Stack>
    );
}
