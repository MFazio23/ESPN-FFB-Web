import {Button, Card, CardContent, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Links from './constants/links';

export default function Home() {
    return (
        <Card sx={{maxWidth: 900, margin: "0 auto"}}>
            <CardContent>
                <Stack>
                    <Typography align="center" variant="h4">Welcome to the history of the</Typography>
                    <Typography align="center" variant="h2">Fun Time Auction</Typography>
                    <Typography align="center" variant="h4">fantasy football league!</Typography>

                    <Typography variant="body1" margin={5}>
                        This site contains all kind of information about the <a
                        href="https://fantasy.espn.com/football/league?leagueId=358793">Fun Time Auction</a> fantasy
                        football league on ESPN.
                        Feel free to take a look around!
                    </Typography>

                    <Button component={Link} to={Links.recordBook}>Record Book</Button>
                    <Button component={Link} to={Links.standings}>All-Time Standings</Button>
                </Stack>

            </CardContent>
        </Card>
    )
}