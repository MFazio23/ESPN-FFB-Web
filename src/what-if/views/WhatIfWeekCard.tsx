import {Card, CardContent, CardHeader} from '@mui/material';
import {MatchupResult, WhatIfScoringType, WhatIfStandingsType} from '../WhatIfTypes';
import WhatIfWeekCardRow from './WhatIfWeekCardRow';

interface WhatIfWeekCardProps {
    week: number;
    weekData: MatchupResult[];
    scoringType: WhatIfScoringType;
    standingsType: WhatIfStandingsType;
}

export default function WhatIfWeekCard({week, weekData, scoringType}: WhatIfWeekCardProps) {
    const matchups = Object.groupBy(weekData, data => data.matchupId) as Record<number, MatchupResult[]>;
    return (
        <Card>
            <CardHeader title={`Week ${week}`}/>
            <CardContent>
                {Object.entries(matchups).map(([matchupId, matchupData]) => (
                    matchupData ? (
                        <WhatIfWeekCardRow key={matchupId} matchupData={matchupData} scoringType={scoringType}/>
                    ) : (
                        <></>
                    )
                ))}
            </CardContent>
        </Card>
    );
}
