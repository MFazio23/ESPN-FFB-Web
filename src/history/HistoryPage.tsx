import {Box, Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import Links from '@/nav/Links';
import {ReactElement} from 'react';

export interface HistoryPageCard {
    id: string;
    component: ReactElement;
}

export interface HistoryPageProps {
    header?: ReactElement;
    cards: HistoryPageCard[];
}

const HistoryPage = ({header, cards}: HistoryPageProps) => (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        {header}
        <Grid container spacing={2} mt={3} justifyContent='space-evenly'>
            {cards.map(card => <Grid size="auto" key={card.id}>{card.component}</Grid>)}
        </Grid>
        <Button sx={{margin: '1em', width: 'fit-content'}} component={Link} to={Links.history}>
            Back to league history
        </Button>
    </Box>
)

export default HistoryPage;
