import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../main/Main';
import Login from '../Login/Login';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={Login} />
                <Route path="/main" component={Main} />
            </Routes>
        </Router>

    );
}

export default AppRouter;
