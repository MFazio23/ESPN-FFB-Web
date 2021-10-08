import memberList from './files/member-list.json';
import recordBook from './files/record-book.json';
import recordBookTitles from './files/record-book-titles.json';
import teamYearMap from './files/team-year-map.json';

//type RecordHolder

type RecordBookEntry = {
    recordHolders: Map<string, number>;
    season: number;
    value: number;
}

type Member = {
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
}

type Team = {
    id: number,
    fullName: string,
    location: string,
    nickname: string,
    shortName: string,
    owners: Array<Member>
}

const fullTeamMap: Map<string, Team> = Object.entries(teamYearMap).reduce((acc, [year, teams]) => ({
        ...acc,
        [year]: teams.map(team => ({
            ...team,
            owners: team.owners.map(ownerId => memberList.find(m => m.id === ownerId))
        }))
    }), {}
);

const getTeamById = (teamId: number, record: RecordBookEntry) => {
    const yearMap = fullTeamMap[record.season?.toString()];
    return yearMap?.find(team => team.id?.toString() === teamId);
};

const DataHandler = {
    fullTeamMap,
    recordBook: Object.entries(recordBook).map(([id, records]) => ({
            id,
            title: recordBookTitles[id].title,
            records: records.map(record => ({
                ...record,
                recordHolders: Object
                    .entries(record.recordHolders)
                    .map(([teamId, total]) => (
                            {
                                teamId,
                                total,
                                season: record.season,
                                week: record.week,
                                team: getTeamById(teamId, record)
                            }
                        )
                    )
            })),
            withPlayoffs: id.includes("Playoff"),
            order: recordBookTitles[id].order
        })
    ).sort((a, b) => a > b),
};

export default DataHandler;