// @ts-ignore
import dataHandler from '../../data/data-handler';
import {Box, Typography} from '@mui/material';
import HistoryPage, {HistoryPageCard} from '../HistoryPage';
import {VariousFactCard} from './VariousFactCard';
import {VariousFactCardData} from './VariousFactTypes';

export const VariousFactsScreen = () => {
    const header = (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} textAlign='center' px={1}>
            <Typography variant='h3' p={2}>Various Facts</Typography>
            <Typography variant='body1'>These are some various one-off facts and bits of info about the
                league.</Typography>
        </Box>
    );

    const variousFactCards = dataHandler.variousFactCards.map((card: VariousFactCardData) => {
        const historyPageCard: HistoryPageCard = {
            id: card.title,
            component: <VariousFactCard card={card}/>
        }
        return historyPageCard;
    });

    return (
        <HistoryPage header={header} cards={variousFactCards}/>
    );
}
