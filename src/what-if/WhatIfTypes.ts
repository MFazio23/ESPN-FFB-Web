export enum WhatIfScoringType {
    Standard,
    BestBall,
}

export enum WhatIfStandingsType {
    Normal,
    TopSix,
}

export type WhatIfTypeToggleType = WhatIfScoringType | WhatIfStandingsType;

export interface MatchupResult {
    week: number;
    teamId: number;
    teamName?: string;
    matchupId: number;
    standardScore: number;
    bestBallScore?: number;
    projectedScore?: number;
}

export interface SeasonMatchupResult {
    season: number;
    weeks: number;
    playoffStartWeek: number;
    playoffEndWeek: number;
    matchupResults: MatchupResult[];
}
