import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    HashRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import TickTackToe from './applets/tick_tack_toe';
import Base64Encoder from './applets/base64_encoder';

const applets = [
    {
        title: 'Tick Tack Toe',
        component: <TickTackToe />,
        path: 'tick_tack_toe'
    },
    {
        title: 'Base64 Encoder',
        component: <Base64Encoder />,
        path: 'base64_encoder'
    }
]

function Menu() {
    const appletLinks = applets.map((applet) => {
        return (
            <li key={applet.path}>
                <Link to={applet.path}>{applet.title}</Link>
            </li>
        )
    });
    return (
        <nav>
            <ul> {appletLinks} </ul>
        </nav>
    )
}

export default function App() {
    const appletRoutes = applets.map((applet) => {
        return (
            <Route
                path={applet.path}
                element={applet.component}
                key={applet.path} />
        )
    })

    return (
        <div>
            <Menu />
            <Routes> {appletRoutes} </Routes>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render((
    <Router>
        <App />
    </Router>
));
