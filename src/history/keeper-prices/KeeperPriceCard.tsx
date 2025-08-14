import {KeeperPriceEntry} from './KeeperPriceEntry';
import {
    Card,
    CardContent,
    CardHeader,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';

interface KeeperPriceCardProps {
    teamName: string;
    keeperPriceEntries: KeeperPriceEntry[]
}

export function KeeperPriceCard({teamName, keeperPriceEntries}: KeeperPriceCardProps) {
    return (
        <Card sx={{width: 450, maxWidth: '100vw'}}>
            <CardHeader title={teamName}/>
            <CardContent>
                <TableContainer component={Paper}>
                    <Table aria-label={`${teamName} keeper prices`}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Player</TableCell>
                                <TableCell>Position</TableCell>
                                <TableCell>Team</TableCell>
                                <TableCell align="right">Old $</TableCell>
                                <TableCell align="right">New $</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {keeperPriceEntries.map((entry) => (
                                <TableRow key={entry.playerId}>
                                    <TableCell>{entry.playerName}</TableCell>
                                    <TableCell>{entry.position}</TableCell>
                                    <TableCell>{entry.playerTeamName}</TableCell>
                                    <TableCell align="right">{entry.keeperPrice}</TableCell>
                                    <TableCell align="right">{entry.newKeeperPrice}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}
