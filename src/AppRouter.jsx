import * as React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Links from "./nav/Links";
import TopAppBar from "./nav/TopAppBar";
import NavDrawer from "./nav/NavDrawer";
import RecordBook from "./record-book/RecordBook";
import Home from "./Home";
import Standings from "./standings/Standings";
import OwnerDetails from "./teams/details/OwnerDetails";
import Franchises from "./teams/Franchises";
import FranchiseDetails from "./teams/details/FranchiseDetails";
import {Fab} from "@mui/material";
import {ArrowUpward} from "@mui/icons-material";
import History from './history/History';
import LeagueEvents from './history/LeagueEvents';
import LeagueTrades from './history/trades/LeagueTrades';
import LeagueDraftGrades from './history/draft-grades/LeagueDraftGrades';
import Owners from './teams/Owners';
import {VariousFactsScreen} from './history/various-facts/VariousFactsScreen';

export default function AppRouter() {
    const [isDrawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        const keyboardEvent = event
        if (
            keyboardEvent &&
            keyboardEvent.type === 'keydown' &&
            (keyboardEvent.key === 'Tab' || keyboardEvent.key === 'Shift')
        ) {
            return;
        }

        setDrawerOpen(open)
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <Router>
            <TopAppBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
            <main className="mainContainer">
                <NavDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
                <Routes>
                    <Route path={Links.owners} element={<Owners/>}/>
                    <Route path={Links.ownerDetails} element={<OwnerDetails/>}/>
                    <Route path={Links.recordBook} element={<RecordBook/>}/>
                    <Route path={Links.standings} element={<Standings/>}/>
                    <Route path={Links.franchises} element={<Franchises/>}/>
                    <Route path={Links.franchiseDetails} element={<FranchiseDetails/>}/>
                    <Route path={Links.history} element={<History/>}/>
                    <Route path={Links.leagueEvents} element={<LeagueEvents/>}/>
                    <Route path={Links.leagueTrades} element={<LeagueTrades/>}/>
                    <Route path={Links.draftGrades} element={<LeagueDraftGrades/>}/>
                    <Route path={Links.variousFacts} element={<VariousFactsScreen/>}/>
                    <Route path={Links.home} element={<Home/>}/>
                </Routes>
                <Fab className="fab" color="primary" onClick={scrollToTop} sx={{
                    position: 'fixed',
                    bottom: (theme) => theme.spacing(4),
                    right: (theme) => theme.spacing(4),
                }}>
                    <ArrowUpward/>
                </Fab>
            </main>
        </Router>
    )
}
