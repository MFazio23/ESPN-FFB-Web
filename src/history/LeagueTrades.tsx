import {Box} from '@mui/material';
import HistoryPage, {HistoryPageCard} from './HistoryPage';
import {LeagueTradeCard} from './LeagueTradeCard';

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

const trades: Trade[] = [
    {
        id: "2023-Pelc-Fazio",
        year: 2023,
        firstOwner: "Ben Pelc",
        firstTeam: "Joe Buck Yourself",
        firstTeamPlayers: [{name: "Garrett Wilson", team: "NYJ"}],
        secondOwner: "Michael Fazio",
        secondTeam: "Am I Going Over?",
        secondTeamPlayers: [{name: "Brian Robinson", team: "WAS"}, {name: "Christian Kirk", team: "JAX"}]
    },
    {
        id: "2020-Otto-Fazio",
        year: 2020,
        firstOwner: "James Otto",
        firstTeam: "Throw it I am Open",
        firstTeamPlayers: [{name: "Jamaal Williams", team: "GB"}],
        secondOwner: "Michael Fazio",
        secondTeam: "Am I Going Over?",
        secondTeamPlayers: [{name: "Justin Jackson", team: "LAC"}]
    },
    {
        id: "2019-Ericsen-Johnson",
        year: 2019,
        firstOwner: "Ben Ericsen",
        firstTeam: "Naptown Goiters",
        firstTeamPlayers: [{name: "Tony Pollard", team: "DAL"}],
        secondOwner: "Scott Johnson",
        secondTeam: "Delicious Traitorade",
        secondTeamPlayers: [{name: "Curtis Samuel", team: "CAR"}]
    },
    {
        id: "2016-Pietrzykowski-Smith",
        year: 2016,
        firstOwner: "David Pietrzykowski",
        firstTeam: "MarshallNomNom ForCutlersBalls",
        firstTeamPlayers: [
            {name: "LeGarrett Blount", team: "NE"},
            {name: "Allen Robinson", team: "JAX"},
            {name: "Mike Wallace", team: "BAL"}
        ],
        secondOwner: "Dave Smith",
        secondTeam: "Waukesha Ochsenfroesche",
        secondTeamPlayers: [{name: "Julio Jones", team: "ATL"}]
    },
    {
        id: "2013-Fazio-Ericsen",
        year: 2013,
        firstOwner: "Michael Fazio",
        firstTeam: "Not the Hammer",
        firstTeamPlayers: [{name: "Randall Cobb", team: "GB"}],
        secondOwner: "Tim Ericsen",
        secondTeam: "Uncooked Box",
        secondTeamPlayers: [{name: "LeSean McCoy", team: "PHI"}]
    },
    {
        id: "2011-Breen-Otto",
        year: 2011,
        firstOwner: "David Breen",
        firstTeam: "MKE BLOOOOOOBBBBB!!",
        firstTeamPlayers: [
            {name: "Pierre Thomas", team: "NO"},
            {name: "Kevin Walter", team: "HOU"}
        ],
        secondOwner: "James Otto",
        secondTeam: "Prepare to be Sacked",
        secondTeamPlayers: [
            {name: "Drew Brees", team: "NO"},
            {name: "LaRod Stephens-Howling", team: "ARI"},
        ]
    },
    {
        id: "2010-Ericsen-Fazio",
        year: 2010,
        firstOwner: "Ben Ericsen",
        firstTeam: "Naptown Goiters",
        firstTeamPlayers: [{name: "Zach Miller", team: "OAK"}],
        secondOwner: "Michael Fazio",
        secondTeam: "Silver Fish Hand Catch",
        secondTeamPlayers: [{name: "Visanthe Shiancoe", team: "MIN"}]
    },
    {
        id: "2010-Otto-Gustafson",
        year: 2010,
        firstOwner: "James Otto",
        firstTeam: "Wayne, NJ Dipstick Jimmys",
        firstTeamPlayers: [{name: "Eli Manning", team: "NYG"}],
        secondOwner: "Brandon Gustafson",
        secondTeam: "Admiral Ackbar’s Team",
        secondTeamPlayers: [{name: "John Carlson", team: "SEA"}]
    },
    {
        id: "2009-Smith-Johnson",
        year: 2009,
        firstOwner: "Dave Smith",
        firstTeam: "Waukesha Ochsenfroesche",
        firstTeamPlayers: [{name: "Reggie Bush", team: "NO"}],
        secondOwner: "Scott Johnson",
        secondTeam: "The Milwaukee Singer",
        secondTeamPlayers: [{name: "Devery Henderson", team: "NO"}]
    },
    {
        id: "2009-Huang-Pietrzykowski",
        year: 2009,
        firstOwner: "Simon Huang",
        firstTeam: "KungFu Panda",
        firstTeamPlayers: [
            {name: "Kevin Curtis", team: "PHI"},
            {name: "Jerious Norwood", team: "ATL"}
        ],
        secondOwner: "David Pietrzykowski",
        secondTeam: "treadhead for life",
        secondTeamPlayers: [
            {name: "Chris Chambers", team: "SD"},
            {name: "Muhsin Muhammad", team: "CAR"}
        ]
    },
]

/*const trades = [
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
]*/

export default function LeagueTrades() {
    const header = (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <h1>League Trades</h1>
            <p>There haven't been a ton of trades, only ten of them.</p>
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
