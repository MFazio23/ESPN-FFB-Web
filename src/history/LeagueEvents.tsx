import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from '@mui/lab';
import Box from '@mui/material/Box';
import {Button, Typography} from '@mui/material';
import {
    AttachMoney,
    Calculate,
    Coronavirus,
    Hotel,
    MonitorHeart,
    PostAdd,
    Start,
    Straighten,
    SvgIconComponent,
    TrendingUp
} from '@mui/icons-material';
import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import Links from '../nav/Links';

interface LeagueEvent {
    year: number;
    eventTitle?: string;
    eventText: string;
    icon: ReactElement<SvgIconComponent>;
    iconColor: 'primary' | 'secondary' | 'error' | 'warning' | 'grey';
    iconStyle: 'filled' | 'outlined';
}

export default function LeagueEvents() {
    const leagueEvents: LeagueEvent[] = [
        {
            year: 2025,
            eventTitle: 'Keeper Escalation',
            eventText: "Keepers are changed to increase by 50% each year with a minimum price of $5",
            icon: <AttachMoney/>,
            iconColor: "primary",
            iconStyle: "filled"
        },
        {
            year: 2024,
            eventTitle: 'Yardage-based Kicker Scoring',
            eventText: "Kickers now score points for every 10 yards of FGs made, similar to rushing and receiving yardage. For example, a 35 yard kick is now worth 3.5 points rather than 3.0 points",
            icon: <Straighten/>,
            iconColor: "primary",
            iconStyle: "filled"
        },
        {
            year: 2022,
            eventTitle: "Canceled Game",
            eventText:
                "The week 17 game between Buffalo and Cincinnati was suspended when Damar Hamlin was hit and suffered cardiac arrest. The championship week matchups ended up counting the partial game and no more.",
            icon: <MonitorHeart/>,
            iconColor: "warning",
            iconStyle: "outlined"
        },
        {
            year: 2021,
            eventTitle: "17 Game Season",
            eventText:
                "The NFL season went to 17 games, which caused the fantasy league to move from 13 regular season matchups to 14, with the same three week playoff format.",
            icon: <PostAdd/>,
            iconColor: "primary",
            iconStyle: "outlined"
        },
        {
            year: 2020,
            eventTitle: "COVID",
            eventText: "The NFL season was impacted by the COVID-19 pandemic in many ways, though the impact to the fantasy league was minimal.",
            icon: <Coronavirus/>,
            iconColor: "error",
            iconStyle: "outlined"
        },
        {
            year: 2019,
            eventTitle: 'Three points for an extra point',
            eventText:
                "Kicker XPs are now worth three points since it’s a 33 yard kick rather than the old 18 yard version.",
            icon: <TrendingUp/>,
            iconColor: "primary",
            iconStyle: "filled"
        },
        {
            year: 2017,
            eventTitle: 'Decimal Scoring',
            eventText:
                "The league implements fractional scoring, which awards players for partial points instead the previous all-or-nothing approach.",
            icon: <Calculate/>,
            iconColor: "primary",
            iconStyle: "filled"
        },
        {
            year: 2009,
            eventTitle: 'First Official Season',
            eventText:
                "The league expands to 12 teams and is the first “official” season in league history",
            icon: <Start/>,
            iconColor: "secondary",
            iconStyle: "filled"
        },
        {
            year: 2008,
            eventTitle: 'Pre-league',
            eventText:
                "This is like the pre-Super Bowl version of the league as there were only eight teams.",
            icon: <Hotel/>,
            iconColor: "grey",
            iconStyle: "filled"
        }
    ];

    const startYear = 2008;
    const endYear = 2025;
    const years = Array.from({length: endYear - startYear + 1}, (_, i) => endYear - i);

    const timelineItems = years.map((year, ind) => {
        const event = leagueEvents.find((event) => event.year === year);

        if (!event) {
            return (
                <TimelineItem key={year}>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}></TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{visibility: year === endYear ? 'hidden' : 'visible'}}/>

                        <TimelineConnector
                            sx={{visibility: year === startYear ? 'hidden' : 'visible'}}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                    </TimelineContent>
                </TimelineItem>
            )
        } else {
            const {year, eventTitle, eventText, icon, iconColor, iconStyle} = event;
            return (
                <TimelineItem key={year}>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0', color: 'text.secondary'}}>{year}</TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{visibility: ind === 0 ? 'hidden' : 'visible'}}/>
                        <TimelineDot color={iconColor} variant={iconStyle}>
                            {icon}
                        </TimelineDot>
                        <TimelineConnector
                            sx={{visibility: ind === leagueEvents.length - 1 ? 'hidden' : 'visible'}}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <Typography variant="h6" component="span">{eventTitle}</Typography>
                        <Typography variant="body2">{eventText}</Typography>
                    </TimelineContent>
                </TimelineItem>
            )
        }
    })


    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h3" p={2}>League Events</Typography>
            <Timeline position="alternate">{timelineItems}</Timeline>
            <Button sx={{margin: '1em', width: 'fit-content'}} component={Link} to={Links.history}>
                Back to league history
            </Button>
        </Box>
    )
}

