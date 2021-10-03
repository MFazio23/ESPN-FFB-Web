import matchups from './matchups.json';
import memberList from './member-list.json';
import recordBook from './record-book.json';
import recordBookTitles from './record-book-titles.json';
import teamList from './team-list.json';

const fullTeamList = teamList.map(team => ({
        ...team,
        owners: team.owners.map(ownerId => memberList.find(m => m.id === ownerId))
    })
);

export default {
    fullTeamList,
    recordBook: Object.entries(recordBook).map(([id, records]) => ({
            id,
            title: recordBookTitles[id],
            records: records.map(record => ({
                ...record,
                recordHolders: Object
                    .entries(record.recordHolders)
                    .map(([teamId, total]) => (
                            {
                                teamId,
                                total,
                                season: record.season,
                                year: record.year,
                                week: record.week,
                                team: fullTeamList.find(team => team.id.toString() === teamId)
                            }
                        )
                    )
            })),
            withPlayoffs: id.includes("Playoff")
        })
    ),
}