import {Button, Card, CardContent, Link, Stack, Typography} from "@mui/material";
import Links from "./nav/Links"

export default function Home() {
    return (
        <Card sx={{maxWidth: 900, margin: "0 auto"}}>
            <CardContent>
                <Stack alignItems={'center'}>
                    <Typography align="center" variant="h4">Welcome to the history of the</Typography>
                    <Typography align="center" variant="h2">Fun Time Auction</Typography>
                    <Typography align="center" variant="h4">fantasy football league!</Typography>

                    <Typography variant="body1" margin={5}>
                        This site contains all kind of information about the <Link
                        href="https://fantasy.espn.com/football/league?leagueId=358793">Fun Time Auction</Link> fantasy
                        football league on ESPN.
                        Feel free to take a look around!
                    </Typography>

                    <Button component={Link} to={Links.recordBook} sx={{width: 'fit-content'}}>
                        Record Book
                    </Button>
                    <Button component={Link} to={Links.standings} sx={{width: 'fit-content'}}>
                        All-Time Standings
                    </Button>
                    <Button component={Link} to={Links.owners} sx={{width: 'fit-content'}}>
                        Owner History
                    </Button>
                    <Button component={Link} to={Links.franchises} sx={{width: 'fit-content'}}>
                        Franchise History
                    </Button>
                    <Button component={Link} to={Links.history} sx={{width: 'fit-content'}}>
                        League History
                    </Button>
                </Stack>

            </CardContent>
        </Card>
    )
}
