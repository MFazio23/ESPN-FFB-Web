import {Card, CardContent} from '@mui/material';

export function LeagueTradeCard(props: { trade: string }) {
    //TODO: Make this look better
    return <Card sx={{width: 400}}>
        <CardContent>
            {props.trade}
        </CardContent>
    </Card>
}
