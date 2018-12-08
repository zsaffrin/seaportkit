import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from '../Header/Header';
import Ships from '../Ships/Ships';
import Footer from '../Footer/Footer';

const App = () => (
    <div className="App">
        <Header />
        <Router>
            <Ships path="/" />
        </Router>
        <Footer />
    </div>
);

export default App;
