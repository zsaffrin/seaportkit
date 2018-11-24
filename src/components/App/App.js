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
        this.setState({
            shipsLoading: true,
        });
        db.collection('ships').get()
            .then((snapshot) => {
                const docs = [];
                snapshot.forEach(doc => (
                    docs.push(doc.data())
                ));
                this.setState({
                    ships: prepareShipsData(docs),
                    shipsLoading: false,
                });
            })
            .catch((err) => {
                console.error('Error getting ships', err);
            });
    }

    render() {
        const { ships, shipsLoading } = this.state;

        return (
            <div className="App">
                <h1>SeaportKit</h1>
                <ShipsList
                    loading={shipsLoading}
                    ships={ships}
                />
            </div>
        );
    }
}

export default App;
