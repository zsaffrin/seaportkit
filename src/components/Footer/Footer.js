import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer>
        <p>
            This app is a project made for fun. I built this as a hobby project
            because I play and enjoy
            {' '}
            <a
                href="https://portal.pixelfederation.com/en/seaport/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Seaport
            </a>
            {' '}
            and wanted to use it as an excuse
            to practice building web apps while enhancing my gameplay experience.
        </p>
        <p>
            This app is in no way affiliated with
            {' '}
            <a
                href="https://portal.pixelfederation.com/en/seaport/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Seaport
            </a>
            {' '}
            and/or
            {' '}
            <a
                href="https://portal.pixelfederation.com/en/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Pixel Federation
            </a>
            . I own none of this data.
        </p>
        <p>
            All data is manually compiled from a variety of sources.
            I cannot reasonably validate or verify the accuracy of any of this data.
            Do not use this app as a meaningful reference.
        </p>
    </footer>
);

export default Footer;
