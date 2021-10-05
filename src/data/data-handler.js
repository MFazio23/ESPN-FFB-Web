import memberList from './member-list.json';
import recordBook from './record-book.json';
import recordBookTitles from './record-book-titles.json';
import teamYearMap from './team-year-map.json';

const fullTeamMap = Object.entries(teamYearMap).reduce((acc, [year, teams]) => ({
        ...acc,
        [year]: teams.map(team => ({
            ...team,
            owners: team.owners.map(ownerId => memberList.find(m => m.id === ownerId))
        }))
    }), {}
);

const getTeamById = (teamId, record) => {
    const yearMap = fullTeamMap[record.season?.toString()];
    return yearMap?.find(team => team.id?.toString() === teamId);
};

export default {
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
}