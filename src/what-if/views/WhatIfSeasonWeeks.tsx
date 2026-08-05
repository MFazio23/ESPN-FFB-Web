import {Grid} from '@mui/material';
import {MatchupResult, WhatIfScoringType, WhatIfStandingsType} from '../WhatIfTypes';
import WhatIfWeekCard from './WhatIfWeekCard';

interface WhatIfSeasonWeeksProps {
    weeklyMatchups?: Record<number, MatchupResult[]>;
    scoringType: WhatIfScoringType;
    standingsType: WhatIfStandingsType;
}

export default function WhatIfSeasonWeeks({weeklyMatchups, scoringType, standingsType}: WhatIfSeasonWeeksProps) {
    if (!weeklyMatchups) return <></>;

    return (
        <Grid container spacing={2} m={2}>
            {Object.entries(weeklyMatchups).map(([week, weekData]) =>
                weekData ? (
                    <Grid size={{xs: 12, md: 4}} key={week}>
                        <WhatIfWeekCard
                            week={Number(week)}
                            weekData={weekData}
                            scoringType={scoringType}
                            standingsType={standingsType}
                        />
                    </Grid>
                ) : (
                    <></>
                ),
            )}
        </Grid>
    );
}
