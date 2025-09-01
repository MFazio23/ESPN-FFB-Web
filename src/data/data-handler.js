import memberList from './files/member-list.json'
import memberVsTeamRecords from './files/member-vs-team-records.json'
import recordBooks from './files/record-book.json'
import recordBookTitles from './files/record-book-titles.json';
import recordBookTitlesOrder from './files/record-book-title-order.json'
import standings from './files/standings.json'
import modernStandings from './files/modern-standings.json'
import teamSummaries from './files/team-summaries.json';
import ownerSummaries from './files/owner-summaries.json';
import teamYearMapJson from './files/team-year-map.json';
import tradesJson from './files/trades.json';
import variousFactCardsJson from './files/various-fact-cards.json';
import keeperPricesJson from './files/keeper-prices.json';
import config from "../config";

// This is used to convert short names into the member IDs
// We can then use these shortcuts for the URLs for owners
const ownerIdMap = {
    "michael": "A24CE5EF-0E09-49AB-94D2-19EC1663B700",
    "fazio": "A24CE5EF-0E09-49AB-94D2-19EC1663B700",
    "justin": "2569536C-A58F-4E7C-801F-F06DF3BE2A73",
    "witz": "2569536C-A58F-4E7C-801F-F06DF3BE2A73",
    "scott": "CBC901C7-2511-49DD-A053-5F6E22C32329",
    "tim": "AD6BDCCF-B64B-4BA6-8F45-D11A9617659E",
    "james": "6BB7653E-8BC9-40F9-952A-33DD089B251C",
    "tucker": "8C3CB4F9-57AD-499A-85B8-D9AEB5A87256",
    "pitch": "DB2F4DE4-A627-4203-9CBC-5016EC30C3FC",
    "ben": "F1509406-592B-43AF-A6E8-0F6BFB5638E7",
    "pelc": "75AF2CD2-5FD9-4C9D-8A4C-D58397F8FDEB",
    "blayne": "C117D3A8-0CA0-4D96-AA00-DE4004A13A13",
    "pablo": "A88DD146-6C4F-4BF8-B4F0-695BDCDC7347",
    "nick": "FAA9326C-D141-4711-A932-6CD1413711B9",
    "breen": "57312B70-8D32-492F-8850-59850386652F",
    "john": "1CADD14C-2060-4856-BC7D-02C46D863D28",
    "brandon": "72E2EE97-54D3-4B0E-AF62-BA4C16023157",
    "emad": "310C7B23-4C8B-4CC7-8C7B-234C8B7CC782",
    "rolando": "0852AF46-6C26-4040-92AF-466C26C040F9",
    "alex": "C7CCE30B-298A-4C85-8265-37510D53E1CF",
    "green": "99BCAACF-9EA7-458D-9FA2-634E5F4E48DE",
    "schrader": "76F57F7A-5670-4B4C-998C-DA5CC903123C",
    "simon": "8AEAA731-DCE1-4297-A4FF-2BEDAFB02BD1",
    "carl": "36294745-6024-4E2A-9998-21A15B816B5F",
    "nathan": "7779796B-FE3A-48C2-BD89-FF25CB2F87DA"
}

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

const recordBook = Object.entries(recordBooks).reduce((book, [type, recordBook]) =>
    type === 'latestWeek' || type === 'latestYear' ? {...book, [type]: recordBook} : ({
        ...book,
        [type]: Object.entries(recordBook).map(([recordType, recordEntries]) => ({
            id: recordType,
            title: recordBookTitles[recordType]?.title || "N/A",
            subtitle: recordBookTitles[recordType]?.subtitle,
            order: recordBookTitlesOrder.indexOf(recordType) === 0 ? 0 : (recordBookTitlesOrder.indexOf(recordType) || 100),
            withPlayoffs: recordType.includes("WithPlayoff"),
            records: recordEntries.map(getRecords),
            sortAscending: recordBookTitles[recordType]?.sortAscending ?? false
        }))
    }), {});

const getMemberVsTeamRecords = (ownerId) =>
    Object.entries(memberVsTeamRecords[ownerId] || {}).map(([teamId, records]) => ({
        team: teamYearMap[config.currentYear].find(team => team.id === parseInt(teamId)),
        records
    }))

const getOwnerIdFromAlias = (ownerId) => ownerIdMap[ownerId?.toLowerCase()] ?? ownerId

const getOwnerDataById = (ownerId) => {
    if (!ownerId) return {};
    const properOwnerId = getOwnerIdFromAlias(ownerId);
    return {
        owner: memberList.find(member => member.id === properOwnerId),
        standings: standings.find(standing => standing.member.id === properOwnerId),
        vsTeamRecords: getMemberVsTeamRecords(properOwnerId)
    };
}

const getKeeperPrices = () => {
    const teamMap = keeperPricesJson.reduce((prices, keeperPriceEntry) => {
        if (prices[keeperPriceEntry.teamName] === undefined) {
            prices[keeperPriceEntry.teamName] = [];
        }
        const {keeperPrice, newKeeperPrice, playerId, playerName, playerTeamName, position} = keeperPriceEntry;
        prices[keeperPriceEntry.teamName].push({
            keeperPrice,
            newKeeperPrice,
            playerId,
            playerName,
            playerTeamName,
            position
        });
        return prices;
    }, {});

    Object.entries(teamMap).forEach(([_, team]) => {
        team.sort((a, b) => b.newKeeperPrice - a.newKeeperPrice);
    })

    return teamMap;
}

const DataHandler = {
    teamYearMap,
    recordBook,
    getOwnerDataById,
    getOwnerIdFromAlias,
    teamSummaries,
    ownerSummaries,
    standingsList: standings,
    modernStandingsList: modernStandings,
    tradeList: tradesJson,
    getKeeperPrices,
    variousFactCards: variousFactCardsJson,
};

export default DataHandler;
