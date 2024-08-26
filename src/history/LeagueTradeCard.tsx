import {Card, CardContent, CardHeader, Divider, List, ListItem, Typography} from '@mui/material';
import {Trade} from './LeagueTrades';
import Box from '@mui/material/Box';

interface LeagueTradeCardProps {
    trade: Trade;
}

export function LeagueTradeCard({trade}: LeagueTradeCardProps) {
    //TODO: Make this look better
    const {id, year, firstOwner, firstTeam, firstTeamPlayers, secondOwner, secondTeam, secondTeamPlayers} = trade;
    return <Card sx={{width: 400}}>
        <CardHeader title={year}/>
        <CardContent>
            <Box display='flex' flexDirection='row' alignItems="center">
                <Typography variant="h5">{firstOwner}</Typography>
                <Typography variant="subtitle1" ml={1}>({firstTeam})</Typography>
            </Box>
            <Box display='flex' flexDirection={'row'} alignItems='center'>
                <Typography variant='body1' sx={{opacity: '25%'}}>sent</Typography>
                <List>
                    {firstTeamPlayers.map(player => <ListItem
                        key={player.name}>{player.name} ({player.team})</ListItem>)}
                </List>
            </Box>
            <Divider/>
            <Box display='flex' flexDirection='row' mt={1} alignItems="center">
                <Typography variant="h5">{secondOwner}</Typography>
                <Typography variant="subtitle1" ml={1}>({secondTeam})</Typography>
            </Box>

            <Box display='flex' flexDirection={'row'} alignItems='center'>
                <Typography variant='body1' sx={{opacity: '25%'}}>sent</Typography>
                <List>
                    {secondTeamPlayers.map(player => <ListItem
                        key={player.name}>{player.name} ({player.team})</ListItem>)}
                </List>
            </Box>
        </CardContent>
        {/*<CardContent>
            {year}: {firstOwner} ({firstTeam})
            traded {firstTeamPlayers.map(player => `${player.name} (${player.team})`).join(", ")} to {secondOwner} ({secondTeam})
            for {secondTeamPlayers.map(player => `${player.name} (${player.team})`).join(", ")}
        </CardContent>*/}
    </Card>
}
