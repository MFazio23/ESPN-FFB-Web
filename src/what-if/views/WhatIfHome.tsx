import Config from '@/config';
import { Typography } from '@mui/material';
import { useState } from 'react';
import WhatIfControls from './WhatIfControls';
import { WhatIfScoringType, WhatIfStandingsType } from '../WhatIfTypes';
import WhatIfSeason from './WhatIfSeason';

export default function WhatIfHome() {
    const [season, setSeason] = useState(Config.currentYear);
    const [scoringType, setScoringType] = useState(WhatIfScoringType.Standard);
    const [standingsType, setStandingsType] = useState(WhatIfStandingsType.Normal);

    return (
        <>
            <Typography variant="h2" align="center">
                The "What if?" Machine
            </Typography>
            <WhatIfControls
                season={season}
                setSeason={setSeason}
                scoringType={scoringType}
                setScoringType={setScoringType}
                standingsType={standingsType}
                setStandingsType={setStandingsType}
            />
            <WhatIfSeason season={season} scoringType={scoringType} standingsType={standingsType} />
        </>
    );
}
