import React from 'react';
import './Header.css';

const Header = () => (
    <header>
        <div className="primary">
            <h1>SeaportKit</h1>
        </div>
        <div className="secondary">
            <a
                className="github-link"
                href="https://github.com/zsaffrin/seaportkit/issues"
                rel="noopener noreferrer"
                target="_blank"
            >
                Report issues and suggest enhancements
            </a>
        </div>
    </header>
);

export default Header;
