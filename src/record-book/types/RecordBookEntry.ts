import {getRecordHoldersFromJson, RecordBookRecord, RecordBookRecordJson} from "./RecordBookRecord";
import {Team} from "../../types/Team";

type RecordBookEntry = {
    id: string,
    title: string,
    withPlayoffs: boolean,
    order: number,
    records: Array<RecordBookRecord>,
}

type RecordBookEntryTeam = {
    teamId: string,
    total: number,
    season: number,
    week: number,
    team: Team
}

function recordBookEntryFromJson(json: RecordBookRecordJson, teamMap: Map<string, Array<Team>>): RecordBookRecord {
    return {
        recordHolders: getRecordHoldersFromJson(json, json.recordHolders, teamMap),
        season: json.season,
        value: json.value
    }
}

export {
    recordBookEntryFromJson
}

export type {
    RecordBookEntry,
    RecordBookEntryTeam
}