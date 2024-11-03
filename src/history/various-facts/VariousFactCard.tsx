import {Card, CardContent, CardHeader, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import Box from '@mui/material/Box';
import {VariousFactCardData} from './VariousFactTypes';

interface VariousFactCardProps {
    card?: VariousFactCardData
}

export const VariousFactCard = ({card}: VariousFactCardProps) => {
    if (!card) return null;
    const {title, subtitle, entries} = card;
    return (
        <Card sx={{width: 400}}>
            <CardHeader title={title} subheader={subtitle}/>
            <CardContent>
                <Box>
                    <List dense={true} disablePadding={true}>
                        {entries.map(entry => (
                            <ListItem key={entry.number}>
                                <ListItemIcon sx={{minWidth: 32}}>{entry.number}</ListItemIcon>
                                <ListItemText primary={entry.title} secondary={entry.subtitle}/>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </CardContent>
        </Card>
    )
}
