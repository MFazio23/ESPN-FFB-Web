import {EventCard, EventCardProps} from './EventCard';
import HistoryPage, {HistoryPageCard} from './HistoryPage';

export default function LeagueEvents() {
    const eventCardProps: EventCardProps[] = [
        {
            id: "events-2024",
            year: 2024,
            events: [
                "Keepers are changed to increase by 50% each year with a minimum price of $5",
                "Kickers now score points for every 10 yards of FGs made. For example, a 35 yard kick is now worth 3.5 points rather than 3.0 points"
            ]
        },
        {
            id: "events-2022",
            year: 2022,
            events: [
                "The week 17 game between Buffalo and Cincinnati was suspended when Damar Hamlin was hit and suffered cardiac arrest. The championship week matchups ended up counting the partial game and no more."
            ]
        },
        {
            id: "events-2021",
            year: 2021,
            events: [
                "The NFL season went to 17 games, which caused the fantasy league to move from 13 regular season matchups to 14, with the same three week playoff format."
            ]
        },
        {
            id: "events-2020",
            year: 2020,
            events: [
                "COVID"
            ]
        },
        {
            id: "events-2019",
            year: 2019,
            events: [
                "Kicker XPs are now worth three points since it’s a 33 yard kick"
            ]
        },
        {
            id: "events-2017",
            year: 2017,
            events: [
                "Scoring is changed to decimals"
            ]
        },
        {
            id: "events-2009",
            year: 2009,
            events: [
                "The league expands to 12 teams and is the first “official” season in league history"
            ]
        },
        {
            id: "events-2008",
            year: 2008,
            events: [
                "This is like the pre-Super Bowl version of the league as there were only eight teams. It is excluded from all record keeping."
            ]
        },
    ];
    const eventCards = eventCardProps.map(card => {
        const historyPageCard: HistoryPageCard = {
            id: card.id,
            component: <EventCard card={card}/>
        }
        return historyPageCard;
    });
    return (
        <HistoryPage cards={eventCards}/>
    )
}

