import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    HashRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import TickTackToe from './applets/tick_tack_toe';
import Base64Encoder from './applets/base64_encoder';
import Base64Decoder from './applets/base64_decoder';

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
    },
    {
        title: 'Base64 Decoder',
        component: <Base64Decoder />,
        path: 'base64_decoder'
    }
]

function Title() {
    return <h1>WASM toolbox</h1>
}

function Menu() {
    const appletLinks = applets.map((applet) => {
        return (
            <ListGroup.Item key={applet.path}>
                <Link to={applet.path}>{applet.title}</Link>
            </ListGroup.Item>
        )
    });
    return (
        <ListGroup>
            {appletLinks}
        </ListGroup>
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
        <Container>
            <Row>
                <Title />
            </Row>
            <Row>
                <Col xs={3}>
                    <Menu />
                </Col>
                <Col>
                    <Routes> {appletRoutes} </Routes>
                </Col>
            </Row>
        </Container>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render((
    <Router>
        <App />
    </Router>
));
