import * as React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Links from "./nav/Links";
import TopAppBar from "./nav/TopAppBar";
import NavDrawer from "./nav/NavDrawer";
import RecordBook from "./record-book/RecordBook";
import Home from "./Home";
import Standings from "./standings/Standings";
import OwnerDetails from "./teams/OwnerDetails";
import Franchises from "./teams/Franchises";
import FranchiseDetails from "./teams/FranchiseDetails";

export default function App() {
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

    return (
        <Router>
            <TopAppBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
            <main className="mainContainer">
                <NavDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
                <Routes>
                    <Route path={Links.owners} element={<Standings/>}/>
                    <Route path={Links.ownerDetails} element={<OwnerDetails/>}/>
                    <Route path={Links.recordBook} element={<RecordBook/>}/>
                    <Route path={Links.standings} element={<Standings/>}/>
                    <Route path={Links.franchises} element={<Franchises/>}/>
                    <Route path={Links.franchise} element={<FranchiseDetails/>}/>
                    <Route path={Links.home} element={<Home/>}/>
                </Routes>
            </main>
        </Router>
    );
}
