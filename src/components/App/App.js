import React, { Component } from 'react';
import './App.css';
import { db } from '../../firebase';
import ShipsList from './ShipsList/ShipsList';
import prepareShipsData from './Utils';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ships: [],
            shipsLoading: false,
        };
    }

    componentDidMount() {
        this.updateShips();
    }

    getShipsData = async () => {
        const response = await db.collection('ships').get();
        const ships = [];
        await response.forEach(doc => (
            ships.push(doc.data())
        ));

        return ships;
    }

    updateShips() {
        this.setState({
            shipsLoading: true,
        });
        this.getShipsData()
            .then(ships => this.setState({
                ships: prepareShipsData(ships),
                shipsLoading: false,
            }));
    }

    render() {
        const { ships, shipsLoading } = this.state;

        return (
            <div className="App">
                <h1>SeaportKit</h1>
                <button
                    type="button"
                    onClick={() => this.updateShips()}
                >
                    Refresh
                </button>
                <ShipsList
                    loading={shipsLoading}
                    ships={ships}
                />
            </div>
        );
    }
}

export default App;
