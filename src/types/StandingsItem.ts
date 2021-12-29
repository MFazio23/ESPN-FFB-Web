type StandingsItem = {
    member: StandingsMember,
    seasons: StandingsScoringItem,
    pointsScored: StandingsScoringItem,
    pointsAgainst: StandingsScoringItem,
    wins: StandingsScoringItem,
    losses: StandingsScoringItem,
    playoffApps: StandingsScoringItem,
    championshipApps: StandingsScoringItem,
    championships: StandingsScoringItem,
}

type StandingsScoringItem = {
    standardScoring: number,
    bestBallScoring?: number,
    topSixRankings?: number,
}

type StandingsMember = {
    id: string,
    firstName: string,
    lastName: string,
    fullName: string,
    userName: string
}

export type {
    StandingsItem
}