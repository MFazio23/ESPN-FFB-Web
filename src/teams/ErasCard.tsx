import {Card, CardContent, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {ErasCardRow} from "./ErasCardRow";
import {useNavigate} from 'react-router-dom';

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
    cardLink?: string;
}

export default function ErasCard({summary, cardLink}: ErasCardProps) {
    const navigate = useNavigate();
    const {name, wins, losses, championships, eras} = summary;
    const winLossText = `${wins}-${losses}`
    const championshipText = Array.from({length: championships}, () => "🏆").join("");

    const handleCardClicked = () => {
        if (cardLink) navigate(cardLink);
    }

    const cardClass = cardLink ? "linked-card" : "";

    return <Card className={cardClass} sx={{width: 450, maxWidth: '100vw'}}
                 onClick={() => handleCardClicked()}>
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

