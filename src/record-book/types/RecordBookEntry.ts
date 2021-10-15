import {getRecordHoldersFromJson, RecordBookRecord, RecordBookRecordJson} from "./RecordBookRecord";
import {JsonTeam, Team} from "../../types/Team";
import {TSMap} from "typescript-map";
import {Member} from "../../types/Member";

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
        value: json.value
    });

export {
    recordBookEntryFromJson
}

export type {
    RecordBookEntry,
    RecordBookEntryTeam
}