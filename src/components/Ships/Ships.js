import React, { Component } from 'react';
import './Ships.css';

class Ships extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ships: [],
        };
    }

    render() {
        const { ships } = this.state;

        return (
            <div className="Ships">
                <h2>Ships</h2>
                {`${ships.length} ships loaded`}
            </div>
        );
    }
}

export default Ships;
