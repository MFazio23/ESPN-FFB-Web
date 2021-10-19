import {getRecordHoldersFromJson, RecordBookRecord, RecordBookRecordJson} from "./RecordBookRecord";
import {Team} from "../../types/Team";
import {TSMap} from "typescript-map";

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

const recordBookEntryFromJson = (
    json: RecordBookRecordJson,
    teamMap: TSMap<string, Array<Team>>
): RecordBookRecord =>
    ({
        recordHolders: getRecordHoldersFromJson(
            json,
            new TSMap<string, number>().fromJSON(json.recordHolders),
            teamMap
        ),
        season: json.season,
        week: json.week,
        value: json.value
    });

export {
    recordBookEntryFromJson
}

export type {
    RecordBookEntry,
    RecordBookEntryTeam
}