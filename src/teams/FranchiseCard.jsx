import {Card, CardContent, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {FranchiseCardRow} from "./FranchiseCardRow";

export default function FranchiseCard({summary}) {
    const {teamName, wins, losses, championships, eras} = summary

    const winLossText = `${wins}-${losses}`
    const championshipText = Array.from({length: championships}, () => "🏆").join("");

    return <Card sx={{width: 450}}>
        <CardContent>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Stack>
                    <Typography variant="h4">{teamName}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">{winLossText}</Typography>
                </Stack>
                <Box>
                    <Typography variant="body">{championshipText}</Typography>
                </Box>
            </Box>

            <Box mt={3}>
                {eras.map(era => <FranchiseCardRow era={era}/>)}
            </Box>

        </CardContent>
    </Card>
}

