import {Card, CardContent, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {ErasCardRow} from "./ErasCardRow";

export interface Era {
    title: string;
    subtitle: string;
    startYear: number;
    endYear: number;
}

export interface EraSummary {
    name: string;
    wins: number;
    losses: number;
    championships: number;
    eras: Era[];
}

interface ErasCardProps {
    summary: EraSummary;
}

export default function ErasCard({summary}: ErasCardProps) {
    const {name, wins, losses, championships, eras} = summary;
    const winLossText = `${wins}-${losses}`
    const championshipText = Array.from({length: championships}, () => "🏆").join("");

    return <Card sx={{width: 450}}>
        <CardContent>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Stack>
                    <Typography variant="h4">{name}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">{winLossText}</Typography>
                </Stack>
                <Box>
                    <Typography variant="body1">{championshipText}</Typography>
                </Box>
            </Box>

            <Box mt={3}>
                {(eras ?
                        eras.map(era => <ErasCardRow key={`${era.title}-${era.startYear}-${era.endYear}`} era={era}/>) :
                        <Box/>
                )}
            </Box>

        </CardContent>
    </Card>
}

