import * as React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import TopAppBar from "./TopAppBar";
import NavDrawer from "./nav/NavDrawer";
import RecordBook from "./record-book/RecordBook";
import Home from "./Home";
import Links from './constants/links';
import Standings from "./standings/Standings";

export default function App() {
    const [isDrawerOpen, setDrawerOpen] = React.useState<boolean>(false);

    const toggleDrawer = (open: boolean) => (event: React.SyntheticEvent) => {
        const keyboardEvent = event as React.KeyboardEvent
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
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path={Links.recordBook}>
                        <RecordBook/>
                    </Route>
                    <Route path={Links.standings}>
                        <Standings />
                    </Route>
                    <Route path="/teams">
                        <div>Teams</div>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}
