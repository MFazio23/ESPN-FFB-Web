import logo from './logo.svg';
import Button from '@mui/material/Button';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TopAppBar from "./TopAppBar";
import NavDrawer from "./NavDrawer";
import RecordBook from "./record-book/RecordBook";

export default function App() {
    return (
        <Router>
            <TopAppBar />
            <main className="mainContainer">
                {/*<nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/record-book">Record Book</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                <NavDrawer />*/}

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/record-book">
                        <RecordBook />
                    </Route>
                    <Route path="/users">
                        <div>USers</div>
                    </Route>
                    <Route path="/">
                        <RecordBook />
                    </Route>
                </Switch>
            </main>
        </Router>

    );
}
