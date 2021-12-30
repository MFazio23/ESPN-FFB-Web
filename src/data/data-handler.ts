import {JsonTeam, Team, getMembersFromOwnerIds} from "../types/Team";
import {Member} from "../types/Member";
import {TSMap} from "typescript-map"
import {RecordBookRecordJson} from "../record-book/types/RecordBookRecord";
import {RecordBookTitle} from "../record-book/types/RecordBookTitle";
import {RecordBookEntry, recordBookEntryFromJson} from "../record-book/types/RecordBookEntry";

import teamYearMapJson from './files/team-year-map.json';
import standingsJson from './files/standings.json'
import recordBookJson from './files/record-book.json'
import recordBookTitlesJson from './files/record-book-titles.json';
import recordBookTitlesOrderJson from './files/record-book-title-order.json'
import {StandingsItem} from "../types/StandingsItem";

const memberList: Array<Member> = require('./files/member-list.json');

const standingsList: Array<StandingsItem> = Array.from(standingsJson);

const recordBookMap = new TSMap<string, Array<RecordBookRecordJson>>().fromJSON(recordBookJson);
const recordBookTitles = new TSMap<string, RecordBookTitle>().fromJSON(recordBookTitlesJson);

const jsonTeamYearMap = new TSMap<string, Array<JsonTeam>>().fromJSON(teamYearMapJson);
const teamYearMap = new TSMap<string, Array<Team>>(
    jsonTeamYearMap.map((jsonTeams, year) => {
            if (!year) return null;

            const teams: Array<Team> = jsonTeams.map(
                jsonTeam => ({
                    id: jsonTeam.id,
                    fullName: jsonTeam.fullName,
                    location: jsonTeam.location,
                    nickname: jsonTeam.nickname,
                    shortName: jsonTeam.shortName,
                    owners: getMembersFromOwnerIds(jsonTeam, memberList)
                })
            );

            return [year, teams]
        }
    )
)

const recordBook: Array<RecordBookEntry> = recordBookMap.map((jsonRecords, id, index) => {

    if (!id) return {}

    return {
        id,
        title: recordBookTitles.get(id)?.title ?? "N/A",
        withPlayoffs: id.includes("Playoff"),
        order: recordBookTitlesOrderJson.indexOf(id) ?? 100,
        records: jsonRecords.map(jsonRecord => recordBookEntryFromJson(jsonRecord, teamYearMap))
    }
})

console.table(recordBook)

const DataHandler = {
    teamYearMap,
    recordBook,
    standingsList
};

export default DataHandler;