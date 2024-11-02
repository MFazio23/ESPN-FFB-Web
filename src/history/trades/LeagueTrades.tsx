import {Box, Typography} from '@mui/material';
import HistoryPage, {HistoryPageCard} from '../HistoryPage';
import {LeagueTradeCard} from './LeagueTradeCard';
import dataHandler from "../../data/data-handler";

export interface Trade {
    id: string;
    year: number;
    firstOwner: string;
    firstTeam: string;
    firstTeamPlayers: TradePlayer[];
    secondOwner: string;
    secondTeam: string;
    secondTeamPlayers: TradePlayer[];
}

export interface TradePlayer {
    name: string;
    team: string;
}

const trades: Trade[] = dataHandler.tradeList;

export default function LeagueTrades() {
    const header = (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography variant='h3' p={2}>League Trades</Typography>
            <Typography variant='body1'>There haven't been a ton of trades, only ten of them.</Typography>
        </Box>
    );

    const tradeCards = trades.map(trade => {
        const tradeCard: HistoryPageCard = {
            id: trade.id,
            component: <LeagueTradeCard trade={trade}/>
        }
        return tradeCard;
    });

    return (
        <HistoryPage header={header} cards={tradeCards}/>
    );
}
