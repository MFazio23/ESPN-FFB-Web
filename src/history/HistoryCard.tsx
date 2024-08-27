import {Button, Card, CardActions, CardContent, CardHeader, Stack, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

export interface HistoryCardProps {
    id: string;
    title: string;
    description: string;
    actionButtonText: string;
    actionButtonLink: string;
}

export const HistoryCard = ({card}: { card: HistoryCardProps }) => {
    const {title, description, actionButtonText, actionButtonLink} = card;
    return <Card sx={{width: 450, maxWidth: '100vw'}}>
        <CardHeader title={title}/>
        <CardContent>
            <Stack sx={{height: 50}}>
                <Typography variant="body1">{description}</Typography>
            </Stack>
        </CardContent>
        <CardActions>
            <Button component={Link} to={actionButtonLink}>{actionButtonText}</Button>
        </CardActions>
    </Card>
}
