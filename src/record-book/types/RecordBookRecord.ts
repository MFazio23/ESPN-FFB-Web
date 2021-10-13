import {defaultTeam, Team} from "../../types/Team";
import {RecordBookEntryTeam} from "./RecordBookEntry";

type RecordBookRecord = {
    recordHolders: Map<string, RecordBookEntryTeam>;
    season: number;
    value: number;
}

type RecordBookRecordJson = {
    recordHolders: Map<string, number>;
    season: number;
    week: number;
    value: number;
}

const getTeamById = (teamId: number, record: RecordBookRecordJson, teamMap: Map<string, Array<Team>>) => {
    const yearMap = teamMap.get(record.season?.toString());
    return yearMap?.find(team => team.id === teamId);
};

function getRecordHoldersFromJson(record: RecordBookRecordJson, recordHolders: Map<string, number>, teamMap: Map<string, Array<Team>>): Map<string, RecordBookEntryTeam> {
    const recordHolderMap = new Map<string, RecordBookEntryTeam>();

    recordHolders.forEach((total, teamId) => {
        const entryTeam: RecordBookEntryTeam = {
            teamId,
            total,
            season: record.season,
            week: record.week,
            team: getTeamById(parseInt(teamId), record, teamMap) ?? defaultTeam
        }
        recordHolderMap.set(
            teamId,
            entryTeam
        )
    });

    return recordHolderMap;
}

export {
    getRecordHoldersFromJson
}

export type {
    RecordBookRecord,
    RecordBookRecordJson
}