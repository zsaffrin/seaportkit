import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from '../Header/Header';
import Ships from '../Ships/Ships';

const App = () => (
    <div className="App">
        <Header />
        <Router>
            <Ships path="/" />
        </Router>
    </div>
);

export default App;
