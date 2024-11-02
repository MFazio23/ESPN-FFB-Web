import Grid from '@mui/material/Grid2';
import {HistoryCard, HistoryCardProps} from './HistoryCard';


export default function History() {
    const historyCards: HistoryCardProps[] = [
        {
            id: "history-events",
            title: "League Events",
            description: "A timeline of changes/events that have impacted the league.",
            actionButtonText: "View Timeline",
            actionButtonLink: "/history/events",
        },
        {
            id: "history-trades",
            title: "League Trades",
            description: "A list of all the trades in the league. There haven't been a ton, only ten of them.",
            actionButtonText: "View Trades",
            actionButtonLink: "/history/trades",
        },
        {
            id: "history-draft-grades",
            title: "Draft Grades",
            description: "A list of draft grades for each season.",
            actionButtonText: "View Draft Grades",
            actionButtonLink: "/history/draft-grades",
        },
        {
            id: "history-various-facts",
            title: "Various Facts",
            description: "Various facts from the league",
            actionButtonText: "View Facts",
            actionButtonLink: "/history/various-facts",
        },
    ];
    return <Grid container spacing={2} mt={3} justifyContent='center'>
        {historyCards.map(card =>
            (
                <Grid size="auto" key={card.id}>
                    <HistoryCard card={card}/>
                </Grid>
            ))}
    </Grid>
}


