import HistoryPage from '../HistoryPage';
import {Box, Typography} from '@mui/material';
import dataHandler from '../../data/data-handler';
import {KeeperPriceEntry} from './KeeperPriceEntry';
import {KeeperPriceCard} from './KeeperPriceCard';

export default function KeeperPricePage() {

    const header = (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} textAlign='center' px={1}>
            <Typography variant="h3" p={2}>Keeper Prices</Typography>
            <Typography variant='body1'>Here are the keeper prices for the upcoming season.</Typography>
        </Box>
    )

    const keeperPricesData = dataHandler.getKeeperPrices() as Record<number, KeeperPriceEntry[]>;

    const keeperPriceCards = Object.entries(keeperPricesData).map(([teamName, keeperPriceEntries]) => ({
        id: teamName,
        component: <KeeperPriceCard key={teamName} teamName={teamName}
                                    keeperPriceEntries={keeperPriceEntries}/>
    }));

    return (
        <HistoryPage header={header} cards={keeperPriceCards}/>
    );
}
