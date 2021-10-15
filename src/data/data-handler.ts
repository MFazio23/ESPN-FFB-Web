import {JsonTeam, teamFromJson, Team} from "../types/Team";
import {Member} from "../types/Member";
import {TSMap} from "typescript-map"
import {RecordBookRecordJson} from "../record-book/types/RecordBookRecord";
import {RecordBookTitle} from "../record-book/types/RecordBookTitle";
import {RecordBookEntry, recordBookEntryFromJson} from "../record-book/types/RecordBookEntry";

import teamYearMapJson from './files/team-year-map.json';
import recordBookJson from './files/record-book.json'
import recordBookTitlesJson from './files/record-book-titles.json';

const memberList: Array<Member> = require('./files/member-list.json');

const teamYearMap = new TSMap<string, Array<Team>>().fromJSON(teamYearMapJson);
const recordBookMap = new TSMap<string, Array<RecordBookRecordJson>>().fromJSON(recordBookJson);
const recordBookTitles = new TSMap<string, RecordBookTitle>().fromJSON(recordBookTitlesJson);

const recordBook: Array<RecordBookEntry> = recordBookMap.map((jsonRecords, id, index) => {

    if (!id) return {}

    return {
        id,
        title: recordBookTitles.get(id)?.title ?? "N/A",
        withPlayoffs: id.includes("Playoff"),
        order: recordBookTitles.get(id)?.order ?? 100,
        records: jsonRecords.map(jsonRecord => recordBookEntryFromJson(jsonRecord, teamYearMap))
    }
})

/*const recordBook = new Array<RecordBookEntry>();

recordBookJson.forEach((jsonRecords, id) => {

    const records = jsonRecords.map((record, index) =>
        recordBookEntryFromJson(record, teamYearMap)
    );

    recordBook.push(
        {
            id,
            title: recordBookTitles.get(id)?.title ?? "N/A",
            withPlayoffs: id.includes("Playoff"),
            order: recordBookTitles.get(id)?.order ?? 100,
            records
        }
    )
});

recordBook.sort((entryA, entryB) => entryA.order - entryB.order);*/

console.table(recordBook)

const DataHandler = {
    teamYearMap,
    recordBook
};

export default DataHandler;