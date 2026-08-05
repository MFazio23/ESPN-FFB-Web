import {useCallback, useMemo, useState} from "react";
import yearlyMatchupResultsJson from '@/data/files/yearly-matchup-results.json';
import dataHandler from '../data/data-handler';
import {MatchupResult, SeasonMatchupResult, WhatIfScoringType, WhatIfStandingsType} from "@/what-if/WhatIfTypes";
import {Team} from "@/types/Team";

export default function useWhatIfData(season: number) {
    const yearlyMatchupResults =
        useMemo(() => yearlyMatchupResultsJson as Record<string, SeasonMatchupResult>, [yearlyMatchupResultsJson]);
    const [baseSeasonData, setBaseSeasonData] = useState<Partial<SeasonMatchupResult>>(yearlyMatchupResults[season]);
    const [standings, setStandings] = useState([]);
    const [weeklyMatchups, setWeeklyMatchups] = useState<Record<number, MatchupResult[]>>({});
    const [playoffBracket, setPlayoffBracket] = useState({});

    const teamsList: Team[] = useMemo(() => dataHandler.teamYearMap[season], [season]);

    const calculateSeasonData = useCallback((scoringType: WhatIfScoringType, standingsType: WhatIfStandingsType) => {
        const matchupResults = yearlyMatchupResults[season.toString()]?.matchupResults?.map(matchup => ({
            ...matchup,
            teamName: teamsList.find(team => team.id === matchup.teamId)?.name,
        }))

        const matchups = Object.groupBy(
            matchupResults,
            matchupResult => matchupResult.week
        ) as Record<number, MatchupResult[]>;
        setWeeklyMatchups(matchups);
        console.log("Calculating season data");
    }, [season])

    return {
        calculateSeasonData,
        standings,
        weeklyMatchups,
        playoffBracket,
    }
}
