import {Box} from '@mui/material';
import {WhatIfScoringType, WhatIfStandingsType} from '../WhatIfTypes';
import WhatIfSeasonWeeks from './WhatIfSeasonWeeks';
import useWhatIfData from "@/what-if/useWhatIfData";
import {useEffect} from "react";
import WhatIfStandings from "@/what-if/views/WhatIfStandings";
import {WhatIfPlayoffs} from "@/what-if/views/WhatIfPlayoffs";

interface WhatIfSeasonProps {
    season: number;
    scoringType: WhatIfScoringType;
    standingsType: WhatIfStandingsType;
}

export default function WhatIfSeason({season, scoringType, standingsType}: WhatIfSeasonProps) {

    const {calculateSeasonData, standings, weeklyMatchups, playoffBracket} = useWhatIfData(season);

    useEffect(() => {
        calculateSeasonData(scoringType, standingsType);
    }, [season, scoringType, standingsType, calculateSeasonData]);

    return (
        weeklyMatchups ? (
            <Box>
                <WhatIfStandings standings={standings}/>
                <WhatIfSeasonWeeks weeklyMatchups={weeklyMatchups} scoringType={scoringType}
                                   standingsType={standingsType}/>
                <WhatIfPlayoffs playoffBracket={playoffBracket}/>
            </Box>
        ) : (
            <></>
        )
    );
}
