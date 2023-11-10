import memberList from './files/member-list.json'
import memberVsTeamRecords from './files/member-vs-team-records.json'
import recordBooks from './files/record-book.json'
import recordBookTitles from './files/record-book-titles.json';
import recordBookTitlesOrder from './files/record-book-title-order.json'
import standings from './files/standings.json'
import teamSummaries from './files/team-summaries.json';
import teamYearMapJson from './files/team-year-map.json';
import config from "../config";

const getMembersFromOwnerIds = (team, memberList) =>
    team
        .owners
        .map(ownerId => memberList.find(member => member.id === ownerId))
        .filter(member => !!member)

const teamYearMap = Object.entries(teamYearMapJson).reduce((yearMap, [year, teams]) => {
    const updatedTeams = teams.map(team => ({
        ...team,
        owners: getMembersFromOwnerIds(team, memberList)
    }))
    return {...yearMap, [year]: updatedTeams}
}, {});

const getFullRecordHolders = (teamId, total, season, week) => {
    const yearlyTeams = teamYearMap[season]
    const team = yearlyTeams.find(team => team.id === teamId)

    return {
        teamId,
        team: team,
        total,
        season,
        week
    }
}

const getRecords = (record) => {
    const recordHolders =
        Object.entries(record.recordHolders).map(([teamId, total]) => getFullRecordHolders(
                parseInt(teamId),
                total,
                record.season,
                record.week
            )
        )
    return {
        ...record,
        recordHolders
    }
}

const recordBook = Object.entries(recordBooks).reduce((book, [type, recordBook]) => ({
    ...book,
    [type]: Object.entries(recordBook).map(([recordType, recordEntries]) => ({
        id: recordType,
        title: recordBookTitles[recordType]?.title || "N/A",
        order: recordBookTitlesOrder.indexOf(recordType) === 0 ? 0 : (recordBookTitlesOrder.indexOf(recordType) || 100),
        withPlayoffs: recordType.includes("WithPlayoff"),
        records: recordEntries.map(getRecords)
    }))
}), {});

const getMemberVsTeamRecords = (ownerId) =>
    Object.entries(memberVsTeamRecords[ownerId] || {}).map(([teamId, records]) => ({
        team: teamYearMap[config.currentYear].find(team => team.id === parseInt(teamId)),
        records
    }))

const getOwnerDataById = (ownerId) =>
    !ownerId ? {} : {
        owner: memberList.find(member => member.id === ownerId),
        standings: standings.find(standing => standing.member.id === ownerId),
        vsTeamRecords: getMemberVsTeamRecords(ownerId)
    }

const DataHandler = {
    teamYearMap,
    recordBook,
    getOwnerDataById,
    teamSummaries,
    standingsList: standings
};

export default DataHandler;
