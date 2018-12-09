import React from 'react';
import './Header.css';

const Header = () => (
    <header>
        <div className="primary">
            <h1>SeaportKit</h1>
        </div>
        <div className="secondary">
            <a
                href="https://github.com/zsaffrin/seaportkit"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
        </div>
    </header>
);

export default Header;
