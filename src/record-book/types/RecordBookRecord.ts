import {defaultTeam, Team} from "../../types/Team";
import {RecordBookEntryTeam} from "./RecordBookEntry";
import {TSMap} from "typescript-map";

type RecordBookRecord = {
    recordHolders: TSMap<string, RecordBookEntryTeam>;
    season: number;
    value: number;
}

type RecordBookRecordJson = {
    recordHolders: TSMap<string, number>;
    season: number;
    week: number;
    value: number;
}

const getTeamById = (teamId: number, record: RecordBookRecordJson, teamMap: TSMap<string, Array<Team>>) => {
    const yearMap = teamMap.get(record.season?.toString());
    return yearMap?.find(team => team.id === teamId);
};

function getRecordHoldersFromJson(
    record: RecordBookRecordJson,
    recordHolders: TSMap<string, number>,
    teamMap: TSMap<string, Array<Team>>
): TSMap<string, RecordBookEntryTeam> {

    console.log("RecordHolderMap", recordHolders.map);

    const recordHolderList = recordHolders.map((total, teamId) => {
        if (!teamId) return null

        return [teamId, {
            teamId,
            total,
            season: record.season,
            week: record.week,
            team: getTeamById(parseInt(teamId), record, teamMap) ?? defaultTeam
        }]
    });

    return new TSMap<string, RecordBookEntryTeam>(recordHolderList);

    /*const recordHolderMap = new TSMap<string, RecordBookEntryTeam>();

    recordHolders.forEach((total, teamId) => {
        if (!teamId) return

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

    return recordHolderMap;*/
}

export {
    getRecordHoldersFromJson
}

export type {
    RecordBookRecord,
    RecordBookRecordJson
}