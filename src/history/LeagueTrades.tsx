import {Box} from '@mui/material';
import HistoryPage, {HistoryPageCard} from './HistoryPage';
import {LeagueTradeCard} from './LeagueTradeCard';

const trades = [
    "2023: Ben Pelc (Joe Buck Yourself) trade Garrett Wilson (NYJ) to Michael Fazio (Am I Going Over?) for Brian Robinson (WAS) and Christian Kirk (JAX)",
    "2020: James Otto (Throw it I am Open) trades Jamaal Williams (GB) to Michael Fazio (Am I Going Over?) for Justin Jackson (LAC)",
    "2019: Ben Ericsen (Naptown Goiters) trades Tony Pollard (DAL) to Scott Johnson (Delicious Traitorade) for Curtis Samuel (CAR)",
    "2016: David Pietrzykowski trades LeGarrett Blount (NE), Allen Robinson (JAX), and Mike Wallace (BAL) to Dave Smith for Julio Jones (ATL)",
    "2013: Michael Fazio (Not the Hammer) trades Randall Cobb (GB) to Tim Ericsen (Uncooked Box) for LeSean McCoy (PHI)",
    "2011: David Breen (MKE BLOOOOOOBBBBB!!) trades Pierre Thomas (NO) and Kevin Walter (HOU) to James Otto (Prepare to be Sacked) for Drew Brees (NO) and LaRod Stephens-Howling (ARI)",
    "2010: Ben Ericsen (Naptown Goiters) trades Zach Miller (OAK) to Michael Fazio (Silver Fish Hand Catch) for Visanthe Shiancoe (MIN)",
    "2010: James Otto (Wayne, NJ Dipstick Jimmys) trades Eli Manning (NYG) to Brandon Gustafson (Admiral Ackbar’s Team) for John Carlson (SEA)",
    "2009: Dave Smith (Waukesha Ochsenfroesche) trades Reggie Bush (NO) to Scott Johnson (The Milwaukee Singer) for Devery Henderson (NO)",
    "2009: Simon Huang (KungFu Panda) trades Kevin Curtis (PHI) and Jerious Norwood (ATL) to David Pietrzykowski (treadhead for life) for Chris Chambers (SD) and Muhsin Muhammad (CAR)",
]

export default function LeagueTrades() {
    const header = (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <h1>League Trades</h1>
            <p>There haven't been a ton of trades, only ten of them.</p>
        </Box>
    );

    const tradeCards = trades.map(trade => {
        const tradeCard: HistoryPageCard = {
            id: trade,
            component: <LeagueTradeCard trade={trade}/>
        }
        return tradeCard;
    });

    return (
        <HistoryPage header={header} cards={tradeCards}/>
    );
}
