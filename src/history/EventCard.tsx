import {Card, CardContent, CardHeader, Stack, Typography} from '@mui/material';

export interface EventCardProps {
    id: string;
    year: number;
    events: string[];
}

const EventCard = ({card}: { card: EventCardProps }) => {
    const {year, events} = card;
    return <Card sx={{width: 450}}>
        <CardHeader title={year}/>
        <CardContent>
            <Stack sx={{height: 160}}>
                <ul>
                    {events.map(event => <li><Typography variant="body1">{event}</Typography></li>)}
                </ul>
            </Stack>
        </CardContent>
    </Card>
}

export default EventCard;
